import StatsText from "./StatsText";
const data = [
	{
		key: 1,
		header: "2M+",
		title: "UNITS SOLD",
	},
	{
		key: 2,
		header: "15",
		title: "PRODUCTS",
	},
	{
		key: 3,
		header: "9",
		title: "Plants",
	},
	{
		key: 4,
		header: "95%",
		title: "RETENTION RATE",
	},
];
const Stats = () => {
	return (
		<div className="mx-auto flex w-full items-center justify-between gap-16 rounded-xl bg-accent px-20 py-12 drop-shadow-md md:max-w-[1200px]">
			{data.map((item) => (
				<StatsText {...item} key={item.key} />
			))}
		</div>
	);
};
export default Stats;
