import Container from "../Container";
import Navbar from "./Navbar";

const Hero = ({ children }: { children: React.ReactNode }) => {
	return (
		<header className="relative flex h-screen items-center bg-cover bg-right bg-no-repeat bg-blend-multiply bg-hero-gradient md:h-section-taller screen-980:h-section">
			<Navbar />
			<div className="z-20 flex size-full items-center bg-opacity-40">
				<Container>{children}</Container>
			</div>
		</header>
	);
};
export default Hero;
