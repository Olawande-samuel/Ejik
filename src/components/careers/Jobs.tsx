import Container from "../Container";
import Text from "../Text";
import JobTabs from "./JobTabs";

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
					<JobTabs />
				</div>
			</Container>
		</section>
	);
};
export default Jobs;
