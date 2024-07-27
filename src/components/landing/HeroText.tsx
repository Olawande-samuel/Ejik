import Btn from "../Btn";

const HeroText = () => {
	return (
		<div className="flex h-full items-center">
			<div className=" max-w-[500px] space-y-8">
				<h1 className="text-5xl font-bold text-white sm:text-7xl">
					Improving the <span className="text-accent">quality of life</span>
				</h1>
				<p className="text-lg leading-7 tracking-[0.21px] text-white md:w-10/12">
					Chris Ejik Group is a 30 year old company with wealth of experience in
					delivering healthcare products and electrical power services.{" "}
				</p>
				<Btn title="Learn more" />
			</div>
		</div>
	);
};
export default HeroText;
