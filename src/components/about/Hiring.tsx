import { getContent } from "@/action/query";
import { ALL_JOBS } from "@/queries";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Container from "../Container";
import Text from "../Text";
import TextH2 from "../TextH2";
import HiringJobs from "./HiringJobs";

const Hiring = async () => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["get jobs"],
		queryFn: () => getContent(ALL_JOBS),
	});
	return (
		<section className="min-h-[120vh] py-24">
			<Container>
				<div>
					<div>
						<Text
							value="Open Position"
							className="mb-20 text-xl text-accent md:w-full"
						/>
						<TextH2
							value="We are Hiring"
							className="mb-5 text-5xl text-primary"
						/>
						<Text
							value="Lorem ipsum dolor sit amet consectetur. Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque."
							className="mb-2 text-[#515355] md:max-w-[600px]"
						/>
						<div className="mb-4 flex justify-end">
							<Link href="/careers/all" className="text-accent underline">
								View All Available Open Positions
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center gap-8 lg:flex-row">
						<section className="md:basis-3/5">
							<HydrationBoundary state={dehydrate(queryClient)}>
								<Suspense fallback={<p>Loading...</p>}>
									<HiringJobs />
								</Suspense>
							</HydrationBoundary>
						</section>
						<section className="md:basis-2/5">
							<Image
								src="/images/Jobs.webp"
								width={600}
								height={655}
								className="max-w-full"
								alt="Two smiling women in an official setting one of whom is shaking the hand of a partially shown man"
							/>
						</section>
					</div>
				</div>
			</Container>
		</section>
	);
};
export default Hiring;
