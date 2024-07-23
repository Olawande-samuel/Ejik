"use client";

import { getContent } from "@/action/query";
import { Category } from "@/lib/types";
import { JOB_CATEGORIES } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Tab from "./Tab";

const data = [
	{
		id: 1,
		title: "View All",
	},
	{
		id: 2,
		title: "Pharmaceuticals & Health Care",
	},
	{
		id: 3,
		title: "International Agencies",
	},
	{
		id: 4,
		title: "Engineering",
	},
];

const Tabs = ({
	selected,
	setSelected,
}: {
	selected: string;
	setSelected: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const query = useQuery({
		queryKey: ["get job categories"],
		queryFn: () => getContent(JOB_CATEGORIES),
	});
	return (
		<div className="md:px-5">
			<Tab
				{...data[0]}
				selected={
					data[0].title.toLowerCase() === selected?.toLowerCase() || !selected
				}
				onClick={() => setSelected(data[0].title)}
				key="all"
			/>
			{query?.data?.map((item: Category) => {
				const isSelected =
					item.slug.current.toLowerCase() === selected.toLowerCase();
				return (
					<Tab
						{...item}
						selected={isSelected}
						onClick={() => setSelected(item.slug.current)}
						key={item.slug.current}
					/>
				);
			})}
		</div>
	);
};
export default Tabs;
