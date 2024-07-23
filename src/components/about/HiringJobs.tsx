"use client";
import { getContent } from "@/action/query";
import { ALL_JOBS } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import { Job } from "@/lib/types";
import JobCard from "./JobCard";
import { Separator } from "../ui/separator";

const HiringJobs = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["get jobs"],
		queryFn: () => getContent(ALL_JOBS),
	});
	const jobResults = data as Job[];
	return (
		<div>
			{isLoading ? (
				<>
					<Skeleton className="my-4 h-[280px] w-full" />
					<Skeleton className="my-4 h-[280px] w-full" />
					<Skeleton className="my-4 h-[280px] w-full" />
				</>
			) : jobResults?.length > 0 ? (
				jobResults?.slice(0, 2).map((item: Job, index: number) => (
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
export default HiringJobs;
