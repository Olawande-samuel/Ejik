import CardWithOverlay from "../CardWithOverlay";

const data = [
	{
		id: 1,
		image: "/images/grid1.png",
		description:
			"We are a professional team working together effectively with knowledge to deliver the vision that improves the quality of life of our end users.",
	},
	{
		id: 2,
		image: "/images/grid2.webp",
		description:
			"Deployment of 4,000 medicines to Oputa LGA, Imo state. Over 24,00 lives were saved.",
	},
	{
		id: 3,
		image: "/images/grid3.webp",
		description:
			"Deployment of 4,000 medicines to Oputa LGA, Imo state. Over 24,00 lives were saved.",
	},
	{
		id: 4,
		image: "/images/grid4.webp",
		description:
			"Deployment of 4,000 medicines to Oputa LGA, Imo state. Over 24,00 lives were saved.",
	},
	{
		id: 5,
		image: "/images/grid5.png",
		description:
			"Deployment of 4,000 medicines to Oputa LGA, Imo state. Over 24,00 lives were saved.",
	},
];

const CaseStudy = () => {
	return (
		<section className="flex flex-col  px-14 pb-28 pt-12 md:flex-row">
			<div className="md:basis-4/12">
				<p className="font-bold">Our case studies</p>
			</div>
			<div className="md:basis-8/12">
				<p className="mb-6 md:mb-16">
					We Provide QUALITY with Efficient resources
				</p>
				<div>
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-6 ">
						{data.map((item) => (
							<div
								key={item.id}
								className="col-span-6 row-span-2 h-[350px] first:row-span-4 sm:first:h-[400px] lg:col-span-3 lg:first:col-span-6 "
							>
								<CardWithOverlay
									{...item}
									textClassName={`${item.id !== 1 ? "text-lg sm:text-sm" : "md:w-[65%]"}`}
									btnClassName={item.id !== 1 ? "h-7 text-xs" : ""}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
export default CaseStudy;
