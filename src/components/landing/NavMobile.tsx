import React, { SetStateAction } from "react";
import Nav from "./Nav";
import NavSelect from "./NavSelect";

const NavMobile = ({
	setOpenNav,
	openNav,
}: {
	setOpenNav: React.Dispatch<SetStateAction<boolean>>;
	openNav: boolean;
}) => {
	return (
		// <section className="fixed inset-0 flex h-full flex-col bg-accent lg:hidden">
		// 	<div className="flex justify-center">
		// 		<X
		// 			className="text-center text-white"
		// 			size={60}
		// 			onClick={() => setOpenNav(false)}
		// 		/>
		// 	</div>
		// 	<div className="grid flex-1 place-items-center text-white">
		// 		<div className="">
		// 			<Nav />
		// 		</div>
		// 		<div className="flex-1">
		// 			<NavSelect isLight={false} />
		// 		</div>
		// 	</div>
		// </section>
		<div>
			{/* Hamburger menu button */}

			{/* Sidebar */}
			<div
				className={` fixed left-0 top-0 z-50 h-full w-64 bg-accent p-5 text-white transition-transform duration-300 ease-in-out${
					openNav ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<h2 className="mb-5 text-3xl font-bold">Menu</h2>
				<div className="mt-6 flex-1">
					<NavSelect isLight={false} />
				</div>
				<Nav />
			</div>

			{/* Overlay */}
			{openNav && (
				<div
					className="fixed inset-0 z-40 bg-black/50"
					onClick={() => setOpenNav(false)}
				></div>
			)}
		</div>
	);
};
export default NavMobile;
