import Container from "../Container";
import Text from "../Text";
import JobCard from "../about/JobCard";
import Tabs from "./Tabs";

const Jobs = () => {
	return (
		<section className="min-h-[120vh]  py-24">
			<Container>
				<div className="px-2 md:px-10">
					<div className="md:px-5">
						<Text
							value="Open Position"
							className="mb-14 text-xl text-accent md:w-full"
						/>
					</div>
					<div>
						<Tabs />
						<div className="w-full lg:w-[70%] screen-980:lg:w-3/5">
							<JobCard />
							<JobCard />
							<JobCard />
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
export default Jobs;
