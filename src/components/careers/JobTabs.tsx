"use client";

import { useState } from "react";
import JobCard from "../about/JobCard";
import Tabs from "./Tabs";
import { useQuery } from "@tanstack/react-query";
import { getContent } from "@/action/query";
import { ALL_JOBS } from "@/querys";
import { Skeleton } from "../ui/skeleton";
import { Job } from "@/lib/types";

const JobTabs = () => {
	const [selected, setSelected] = useState("View All");
	const { data, isLoading } = useQuery({
		queryKey: ["get jobs"],
		queryFn: () => getContent(ALL_JOBS),
	});

	function filterFn(data: Job) {
		if (selected === "View All" || !selected) {
			return true;
		}
		return data.field.slug.current === selected;
	}
	return (
		<div>
			<Tabs selected={selected} setSelected={setSelected} />
			<div className="w-full lg:w-[70%] screen-980:lg:w-3/5">
				{isLoading ? (
					<>
						<Skeleton className="my-4 h-[250px] w-full" />
						<Skeleton className="my-4 h-[250px] w-full" />
					</>
				) : data?.length > 0 ? (
					data
						.filter(filterFn)
						.map((job: Job) => <JobCard key={job._id} {...job} />)
				) : (
					<p className="text-center">no jobs found</p>
				)}
			</div>
		</div>
	);
};
export default JobTabs;
