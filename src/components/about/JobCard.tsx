import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import Link from "next/link";
import { Job } from "@/lib/types";

const JobCard = ({
	title,
	preview,
	location,
	jobType,
	salaryRange,
	level,
	slug,
}: Job) => {
	return (
		<Card className="max-w-[750px] border-none shadow-none">
			<CardHeader className="space-y-2 pb-2">
				<CardTitle className="text-lg">{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription>{preview}</CardDescription>
			</CardContent>
			<CardFooter className="flex-col items-start space-y-4">
				<div className="mb-2">
					<div className="mb-2 flex flex-wrap gap-6 text-[#475467]">
						<span className="flex">
							<MapPin className="mr-2" /> {location}
						</span>
						{jobType && (
							<span className="flex">
								<Clock3 className="mr-2" />
								{jobType.title}
							</span>
						)}
						{level && (
							<span className="flex">
								<Clock3 className="mr-2" />
								{level.title}
							</span>
						)}
					</div>
					{salaryRange && <div>Salary: {salaryRange}</div>}
				</div>
				<div>
					<Link
						href={`/careers/job/${slug.current}`}
						className="flex text-sm font-semibold text-accent"
					>
						View job <ArrowUpRight className="ml-2" />
					</Link>
				</div>
			</CardFooter>
		</Card>
	);
};
export default JobCard;
