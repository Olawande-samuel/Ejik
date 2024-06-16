import CardWithOverlay from "../CardWithOverlay";

const CaseStudy = () => {
	return (
		<section className="flex flex-col gap-40 px-14 pb-28 pt-12 md:flex-row">
			<div>
				<p>Our case studies</p>
			</div>
			<div className="flex-1">
				<p className="mb-16">We Provide QUALITY with Efficient resources</p>
				<div>
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-6 ">
						<div className="col-span-6 row-span-4 h-[400px]">
							<CardWithOverlay textClassName="md:w-[65%]" />
						</div>
						<div className="col-span-6 row-span-2 lg:col-span-3">
							<CardWithOverlay
								btnClassName="h-7 text-xs"
								textClassName="text-sm"
							/>
						</div>
						<div className="col-span-6 row-span-2 lg:col-span-3">
							<CardWithOverlay
								btnClassName="h-7 text-xs"
								textClassName="text-sm"
							/>
						</div>
						<div className="col-span-6 row-span-2 lg:col-span-3">
							<CardWithOverlay
								btnClassName="h-7 text-xs"
								textClassName="text-sm"
							/>
						</div>
						<div className="col-span-6 row-span-2 lg:col-span-3">
							<CardWithOverlay
								btnClassName="h-7 text-xs"
								textClassName="text-sm"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default CaseStudy;
