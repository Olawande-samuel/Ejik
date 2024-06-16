const StatsText = ({ header, title }: { header: string; title: string }) => {
	return (
		<div className="text-center text-white">
			<p className="mb-8 text-8xl">{header}</p>
			<p className="text-xl uppercase">{title}</p>
		</div>
	);
};
export default StatsText;
