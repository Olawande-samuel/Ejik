import Audience from "@/components/about/Audience";
import Hiring from "@/components/about/Hiring";
import Mission from "@/components/about/Mission";
import Story from "@/components/about/Story";
import TheTeam from "@/components/about/TheTeam";
import Vision from "@/components/about/Vision";
import Hero from "@/components/landing/Hero";

const AboutUs = () => {
	return (
		<div>
			<Hero>
				<div className="flex h-full items-end pb-36">
					<h1 className="text-7xl font-bold text-white">
						About <span className="text-accent">Us</span>
					</h1>
				</div>
			</Hero>
			<Story />
			<Vision />
			<Mission />
			<Audience />
			<TheTeam />
			<Hiring />
		</div>
	);
};
export default AboutUs;
