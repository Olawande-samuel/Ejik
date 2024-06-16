import Image from "next/image";
import Container from "../Container";

const Navbar = () => {
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
						<div className=""></div>
						<div className="">
							<div className="rounded-md border-[0.52px] border-white px-4  ">
								<select className="rounded-none border-0 bg-transparent text-xs text-white focus:ring-0">
									<option className="text-center text-red-900" value="">
										Chris Ejik Groups
									</option>
									<option className="text-center text-red-900" value="">
										Chris Ejik Pharmaceuticals
									</option>
									<option className="text-center text-red-900" value="">
										Chris Ejik International
									</option>
									<option className="text-center text-red-900" value="">
										Chris Ejik Engineering
									</option>
								</select>
							</div>
						</div>
					</div>
				</Container>
			</nav>
		</section>
	);
};
export default Navbar;
