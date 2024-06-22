"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../Container";
import { Menu } from "lucide-react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { cn } from "@/lib/utils";
import NavSelect from "./NavSelect";

const Navbar = ({ isLight = false }: { isLight?: boolean }) => {
	const [openNav, setOpenNav] = useState(false);
	return (
		<section className="absolute inset-x-0 top-0 z-30 bg-transparent ">
			<nav>
				<Container>
					<div className="flex items-center justify-between   py-2">
						<div className="">
							<Image
								src="/images/logo.svg"
								width={130}
								height={40}
								alt="logo"
							/>
						</div>
						<div
							className={cn(
								"hidden text-white lg:block",
								isLight && "text-primary",
							)}
						>
							<Nav />
						</div>
						<div className="">
							<button
								onClick={() => setOpenNav(!openNav)}
								className="relative size-8 cursor-pointer border-none text-2xl text-accent outline-none dark:text-accent lg:hidden"
							>
								<span className="sr-only">Open main menu</span>
								<Menu size={42} color={isLight ? "#231F20" : "#FFF"} />
							</button>
							<div className="hidden lg:block">
								<NavSelect isLight={isLight} />
							</div>
						</div>
					</div>
				</Container>
			</nav>
			{openNav && <NavMobile setOpenNav={setOpenNav} />}
		</section>
	);
};
export default Navbar;
