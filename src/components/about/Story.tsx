import Image from "next/image";
import Btn from "../Btn";
import Container from "../Container";
import Text from "../Text";
import Stats from "./Stats";

const data = [
	"Chris Ejik Group was born, with a mission to provide access to high-quality healthcare and reliable electricity to as many people as possible in Nigeria. Over the last three decades, the company has remained true to its vision, effectively delivering on its promise to the people.",
	"At Chris Ejik Group, we believe that access to reliable healthcare and electricity is essential for people to thrive and reach their full potential. That's why we are committed to providing accessible, high-quality healthcare services and products that meet the needs of our customers, and to delivering efficient and reliable electricity solutions that empower communities and energize their futures.",
	"Through its unwavering commitment to professionalism, expertise, teamwork, and empowerment, Chris Ejik Group has become a trusted brand in Nigeria, synonymous with high-quality services and goods. With a vision to make life better for Nigerians, the company is constantly innovating and adapting to the changing needs of the people it serves.",
];

const Story = () => {
	return (
		<section className="flex min-h-screen items-center py-24 screen-980:min-h-section">
			<div className="flex h-full items-center ">
				<Container>
					<div className="flex h-full flex-col justify-center gap-24">
						<div className="flex flex-col gap-8 py-20 md:flex-row screen-980:py-5">
							<div className="">
								<Image
									src="/images/pill_lightening.png"
									width={300}
									height={340}
									alt="decorative"
									className="max-h-[340px]"
								/>
							</div>
							<div className="flex-1 space-y-6">
								<p className="text-lg text-accent">Our Story</p>
								<h2 className="text-5xl font-bold text-primary lg:text-7xl">
									<span className="text-accent">30 years+</span> Empowering
									lives, Energizing Futures
								</h2>
								{data.map((text, i) => (
									<Text className="text-primary-light" value={text} key={i} />
								))}

								<Btn
									title="Learn More"
									className="border-primary text-primary"
								/>
							</div>
						</div>
						<div className="">
							<Stats />
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
};
export default Story;
