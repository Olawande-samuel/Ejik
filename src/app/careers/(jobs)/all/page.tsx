import { getContent } from "@/action/query";
import AllJobs from "@/components/careers/AllJobs";
import { ALL_JOBS } from "@/queries";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Hiring",
	description: "We are hiring. Check here for open positions",
	keywords: ["jobs, open positions, hiring"],
	openGraph: {
		title: "Open Positions",
		description: "We are hiring",
	},
};
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
