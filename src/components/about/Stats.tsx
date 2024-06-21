import StatsText from "./StatsText";
const data = [
	{
		key: 1,
		header: 2,
		headerTrail: "M+",
		title: "UNITS SOLD",
	},
	{
		key: 2,
		header: 15,
		title: "PRODUCTS",
	},
	{
		key: 3,
		header: 9,
		title: "Plants",
	},
	{
		key: 4,
		header: 95,
		headerTrail: "%",
		title: "RETENTION RATE",
	},
];
const Stats = () => {
	return (
		<div className="mx-auto flex w-full flex-col items-center justify-between gap-4 rounded-xl bg-accent px-4 py-12 drop-shadow-md md:max-w-[1200px] md:flex-row md:flex-wrap md:gap-8 md:px-10 lg:gap-16 lg:px-20">
			{data.map((item) => (
				<StatsText {...item} key={item.key} />
			))}
		</div>
	);
};
export default Stats;
