"use client";

import { getContent } from "@/action/query";
import { JOB_BY_ID } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import Body from "../Body";
import { Job } from "@/lib/types";
import { Button } from "../ui/button";

const JobInfo = ({ slug }: { slug: string }) => {
	const query = useQuery({
		queryKey: ["get job details", slug],
		queryFn: () => getContent(JOB_BY_ID, { slug }),
	});
	const data: Job = query.data as Job;
	return (
		<div className="min-h-screen pb-10">
			<h3 className="mb-5 mt-10 text-3xl font-medium">{data?.title}</h3>
			<Body body={data?.description} />
			<div>
				{data?.applicationLink && (
					<a href={data.applicationLink} target="_blank" rel="noreferrer">
						<Button className="bg-accent text-white">Apply Now</Button>
					</a>
				)}
			</div>
		</div>
	);
};
export default JobInfo;
