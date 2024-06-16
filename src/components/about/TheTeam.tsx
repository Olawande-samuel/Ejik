import Container from "../Container";
import TextH2 from "../TextH2";
import Team from "./Team";
import Text from "../Text";

const data = [
	{
		id: 1,
		name: "Dr. Chris Ejike",
		role: "~CEO Chris Ejike Company",
		description:
			"Lorem ipsum dolor sit amet consectetur. Velit blandit fringilla elementum lectus varius sapien. Etiam sapien id venenatis ut vitae turpis condimentum consectetur proin. Purus morbi elit viverra platea sodales sit. Lacus risus lacus elit elit gravida. Pretium sit egestas non tellus ridiculus quam eu fermentum vel. Aenean quam diam nec arcu.",
		image: "/images/ejik.webp",
	},
	{
		id: 2,
		name: "Engr. Ivan Krestevski",
		role: "~Board Director Chris Ejike Company",
		description:
			"Lorem ipsum dolor sit amet consectetur. Velit blandit fringilla elementum lectus varius sapien. Etiam sapien id venenatis ut vitae turpis condimentum consectetur proin. Purus morbi elit viverra platea sodales sit. Lacus risus lacus elit elit gravida. Pretium sit egestas non tellus ridiculus quam eu fermentum vel. Aenean quam diam nec arcu.",
		image: "/images/ivan.webp",
	},
];

const TheTeam = () => {
	return (
		<section className="min-h-[120vh] bg-primary py-32">
			<header className="md: mx-auto mb-20 w-full max-w-[600px] text-center">
				<TextH2 value="Meet The Team" className="font-medium" />
				<Text
					className="md:w-full"
					value="Lorem ipsum dolor sit amet consectetur. Eu amet pellentesque porta
					felis. Fringilla semper sed id pellentesque."
				/>
			</header>
			<main>
				<Container>
					<div className="space-y-24">
						{data.map((team) => (
							<Team {...team} key={team.id} />
						))}
					</div>
				</Container>
			</main>
		</section>
	);
};
export default TheTeam;
