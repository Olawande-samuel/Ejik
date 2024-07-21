import Portal from "@/components/Portal";
import Jobs from "@/components/careers/Jobs";
import WhyJoin from "@/components/careers/WhyJoin";
import Navbar from "@/components/landing/Navbar";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Careers | Ejik ",
};
const Careers = () => {
	return (
		<div>
			<div className="mb-20">
				<Navbar isLight />
			</div>
			<Portal
				title="We are looking for talented people"
				text="At Chris Ejik Group, we believe in empowering lives and energizing futures through access to essential healthcare and electrical power services and goods. Emphasize the brand's focus on innovation and technology to provide sustainable solutions for a better future."
			/>
			<WhyJoin />
			<section className="h-[114px] w-full bg-primary"></section>
			<Jobs />
		</div>
	);
};
export default Careers;
