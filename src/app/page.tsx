import ImageTextColumn from "@/components/ImageTextColumn";
import CaseStudy from "@/components/landing/CaseStudy";
import Hero from "@/components/landing/Hero";
import HeroText from "@/components/landing/HeroText";
import Portal from "@/components/Portal";

export default function Home() {
	return (
		<main>
			<Hero>
				<HeroText />
			</Hero>
			<ImageTextColumn />
			<Portal
				title="The portal for Possibilities"
				text="We are a professional team working together effectively with the experience to deliver the vision to improve the quality of life of our end users."
				btn="VIEW CAREER OPPORTUNITIES"
			/>
			<CaseStudy />
		</main>
	);
}
