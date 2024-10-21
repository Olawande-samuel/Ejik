import Container from "../Container";
import Navbar from "./Navbar";

const Hero = ({ children }: { children: React.ReactNode }) => {
	return (
		<header className="bg-hero-gradient relative flex h-[70vh] items-center bg-cover bg-right bg-no-repeat bg-blend-multiply md:h-section-taller lg:h-screen screen-980:h-section">
			<Navbar />
			<div className="z-20 flex size-full items-center">
				<Container>{children}</Container>
			</div>
		</header>
	);
};
export default Hero;
