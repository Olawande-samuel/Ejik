import Image from "next/image";
import Container from "../Container";
import Text from "../Text";

const Mission = () => {
	return (
		<section>
			<div className="flex flex-col lg:flex-row">
				<div className="relative bg-primary py-36">
					<Container>
						<p className="text-5xl font-light text-white md:text-7xl screen-980:w-[85%]">
							Provide <span className="font-bold uppercase">Quality</span> with
							<span className="font-bold uppercase text-accent">
								Efficient
							</span>{" "}
							resources.
						</p>
					</Container>
					<Image
						src="/images/c_decorative.svg"
						width={150}
						height={200}
						className="absolute -right-12 -top-20 hidden lg:block"
						alt="decorative C sign"
					/>
				</div>
				<div className="bg-[#F7F0F0] ">
					<div className="grid h-full place-items-center bg-[url('/images/vision-bg.png')] px-6 py-5">
						<div className="w-full md:max-w-[80%]">
							<Text
								value="Mission"
								className="mb-16 text-3xl font-bold text-accent md:text-4xl"
							/>
							<Text
								value="Our brand's core mission is to deliver efficient, cost-effective solutions that provide Nigerians with access to high-quality healthcare and electrical power."
								className="text-lg font-medium text-[#2D2C2C] md:text-2xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Mission;
