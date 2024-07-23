"use client";

import { getContent } from "@/action/query";
import { Job } from "@/lib/types";
import { ALL_JOBS } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import JobCard from "../about/JobCard";
import { Separator } from "../ui/separator";

const AllJobs = () => {
	const { data } = useQuery({
		queryKey: ["get jobs"],
		queryFn: () => getContent(ALL_JOBS),
	});
	const jobResult = data as Job[];
	return (
		<div>
			{jobResult?.length > 0 ? (
				jobResult?.map((item, index: number) => (
					<div key={item._id + index}>
						<JobCard {...item} />
						<Separator className="bg-[#EAECF0]" />
					</div>
				))
			) : (
				<p className="text-center">No jobs available. check back later</p>
			)}
		</div>
	);
};
export default AllJobs;
