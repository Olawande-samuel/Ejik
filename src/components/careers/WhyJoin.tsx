import Container from "../Container";
import Text from "../Text";
import TextH2 from "../TextH2";
import { Separator } from "../ui/separator";
import WhyCard from "./WhyCard";

const data = [
	{
		id: 1,
		title: "Experienced Professional",
		image: "/images/careers1.webp",
		text: "",
	},
	{
		id: 2,
		title: "Diverse Team",
		image: "/images/careers1.webp",
		text: "",
	},
	{
		id: 3,
		title: "Empowerment",
		image: "/images/Jobs.webp",
		text: "",
	},
];

const WhyJoin = () => {
	return (
		<section className="bg-white pb-36">
			<div className="my-14 flex justify-center">
				<Separator className="h-24 w-px bg-accent" orientation="vertical" />
			</div>
			<Container>
				<div>
					<header className="mx-auto mb-20 text-center md:max-w-[600px]">
						<TextH2 className="mb-6 text-accent" value="Why Join" />
						<Text
							className="text-[#515355] md:w-full"
							value="Lorem ipsum dolor sit amet consectetur. Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque."
						/>
					</header>
					<section className="flex flex-col flex-wrap justify-center gap-10 md:flex-row lg:flex-nowrap">
						{data.map((item) => (
							<WhyCard {...item} key={item.id} />
						))}
					</section>
				</div>
			</Container>
		</section>
	);
};
export default WhyJoin;
