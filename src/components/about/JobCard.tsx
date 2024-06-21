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

const JobCard = () => {
	return (
		<Card className="border-none shadow-none">
			<CardHeader className="space-y-2 pb-2">
				<CardTitle className="text-lg">Sales Executive</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription>
					Lorem ipsum dolor sit amet consectetur. Imperdiet aliquet neque donec
					praesent.Lorem ipsum dolor sit amet consectetur. Imperdiet aliquet
					neque donec praesent.Lorem ipsum dolor sit amet consectetur. Imperdiet
					aliquet neque donec praesent.
				</CardDescription>
			</CardContent>
			<CardFooter className="flex-col items-start space-y-4">
				<div className="mb-2">
					<div className="mb-2 flex flex-wrap gap-6 text-[#475467]">
						<span className="flex">
							<MapPin className="mr-2" /> Onsite
						</span>
						<span className="flex">
							<Clock3 className="mr-2" />
							Full-time
						</span>
						<span className="flex">
							<Clock3 className="mr-2" />
							Junior/Associate level 3-5 years
						</span>
					</div>
					<div>Salary: N 350,000 - N 500,000</div>
				</div>
				<div>
					<Link
						href="/about-us"
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
