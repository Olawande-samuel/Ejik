import Container from "../Container";
import Text from "../Text";
import TitleText from "../TitleText";

const Audience = () => {
	return (
		<section className="py-36">
			<Container>
				<div className="mx-auto max-w-[1200px] ">
					<Text value="Our Audience" className="mb-6 text-4xl text-accent" />
					<TitleText
						value="Consumer-driven and passionate about improving quality of life"
						className="mb-9"
					/>
					<Text
						value="Chris Ejik Group is passionate about delivering her product and services to businesses, stakeholders or groups interested in improving the quality of life of individuals in their local environment. Our business can’t exist without these key players who understand the end consumers and can equip us with the right insights and consumer data to deliver quality products and services."
						className="text-xl font-medium text-[#5A5555] md:text-2xl"
					/>
				</div>
			</Container>
		</section>
	);
};
export default Audience;
