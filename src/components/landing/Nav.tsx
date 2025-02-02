import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "../ui/navigation-menu";

const data = [
	{
		id: 1,
		title: "About Us",
		link: "/about-us",
		isDropdown: false,
	},
	{
		id: 2,
		title: "Project",
		link: "",
		isDropdown: true,
	},
	{
		id: 3,
		title: "News & Events",
		link: process.env.NEXT_PUBLIC_BLOG_WEBSITE_URL,
		isExt: true,
	},
	{
		id: 4,
		title: "Careers",
		link: "/careers",
		isDropdown: false,
	},
	{
		id: 5,
		title: "Contact Us",
		link: "/contact-us",
		isDropdown: false,
	},
];

const Nav = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-8">
				{data.map((item) =>
					item.isDropdown ? (
						<NavigationMenuItem key={item.id}>
							<NavigationMenuTrigger className="h-fit bg-transparent p-2 text-base font-normal hover:bg-accent lg:text-xs">
								{item.title}
							</NavigationMenuTrigger>
							<NavigationMenuContent></NavigationMenuContent>
						</NavigationMenuItem>
					) : item.isExt ? (
						<NavigationMenuItem key={item.id}>
							<a
								className="inline-block w-full rounded-md p-2 text-base  hover:bg-accent hover:text-black lg:text-xs"
								href={item.link}
								target="_blank"
								rel="noreferrer"
							>
								{item.title}
							</a>
						</NavigationMenuItem>
					) : (
						<NavigationMenuItem key={item.id}>
							<Link
								className="inline-block w-full rounded-md p-2 hover:bg-accent hover:text-black lg:text-xs"
								href={item.link as string}
							>
								{item.title}
							</Link>
						</NavigationMenuItem>
					),
				)}
			</NavigationMenuList>
		</NavigationMenu>
	);
};
export default Nav;
