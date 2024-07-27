import Image from "next/image";
import Container from "./Container";
import Btn from "./Btn";
import TitleText from "./TitleText";
import Text from "./Text";

const ImageTextColumn = () => {
	return (
		<section className="flex min-h-screen items-center screen-980:h-section screen-980:min-h-section">
			<div className="flex h-full items-center ">
				<Container>
					<div className="flex h-full items-center">
						<div className="flex flex-col gap-6 py-20 md:flex-row screen-980:py-5">
							<div className="sm:basis-[45%]">
								<Image
									src="/images/pill_lightening.png"
									width={500}
									height={500}
									alt="decorative"
									className="max-h-[300px] sm:max-h-[400px] md:max-h-full "
								/>
							</div>
							<div className="basis-[55%] space-y-6">
								<p className="text-lg ">About Us</p>
								<TitleText
									value="30 years+ Empowering lives, Energizing Futures"
									className="text-primary"
								/>
								<Text
									className="text-primary-light"
									value="Chris Ejik Group was established, with a mission to provide
								access to high-quality healthcare and reliable electricity to as
								many people as possible in Nigeria. Over the last three decades,
								the company has remained true to its vision, effectively
								delivering on its promise to the people."
								/>

								<Btn
									title="Learn More"
									className="border-primary text-primary"
								/>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
};
export default ImageTextColumn;
