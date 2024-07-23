import { getContent } from "@/action/query";
import AllJobs from "@/components/careers/AllJobs";
import { ALL_JOBS } from "@/queries";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";

const OpenPositions = async () => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["get jobs"],
		queryFn: () => getContent(ALL_JOBS),
	});
	return (
		<div>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<Suspense fallback={<p>Loading...</p>}>
					<AllJobs />
				</Suspense>
			</HydrationBoundary>
		</div>
	);
};
export default OpenPositions;
