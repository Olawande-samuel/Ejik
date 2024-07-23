import { getContent } from "@/action/query";
import JobInfo from "@/components/careers/JobInfo";
import { JOB_BY_ID } from "@/queries";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";

interface Props {
	params: {
		slug: string;
	};
}

const JobDetails = async ({ params }: Props) => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["get job details", params.slug],
		queryFn: () => getContent(JOB_BY_ID, { slug: params.slug }),
	});
	return (
		<div>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<Suspense fallback={<p>Loading...</p>}>
					<JobInfo slug={params.slug} />
				</Suspense>
			</HydrationBoundary>
		</div>
	);
};
export default JobDetails;
