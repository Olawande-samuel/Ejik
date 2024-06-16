import Link from "next/link";
import Container from "../Container";
import Text from "../Text";
import TextH2 from "../TextH2";
import Image from "next/image";
import JobCard from "./JobCard";
import { Separator } from "../ui/separator";

const Hiring = () => {
	return (
		<section className="min-h-[120vh]  py-24">
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
						<div className="mb-20 flex justify-end">
							<Link href="/about-us" className="text-accent underline">
								View All Available Open Positions
							</Link>
						</div>
					</div>
					<div className="flex items-center gap-8">
						<section className="md:basis-3/5">
							<JobCard />
							<Separator className="bg-[#EAECF0]" />
							<JobCard />
						</section>
						<section className="md:basis-2/5">
							<Image
								src="/images/jobs.webp"
								width={600}
								height={655}
								className="max-w-100%"
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
