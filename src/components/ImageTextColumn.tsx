import Image from "next/image";
import Btn from "./Btn";
import Container from "./Container";
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
								<p className="text-lg uppercase">About Us</p>
								<h1 className="text-5xl font-bold  text-primary lg:text-7xl">
									30 years+ <br />
									Empowering lives, Energizing Futures
								</h1>
								<Text
									className="text-primary-light"
									value="Chris Ejik Group has consistently over a 30-year period, rooted her value in Nigeria from the perspective of improving the quality of life of Nigerians. What started as an opportunity from the government for local businesses to create value, soon grew to become a company established in creating access to essential Healthcare and Electrical power services and goods in the country."
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
