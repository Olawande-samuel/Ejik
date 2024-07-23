import Container from "@/components/Container";
import Navbar from "@/components/landing/Navbar";
import Text from "@/components/Text";
import TextH2 from "@/components/TextH2";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<div className="mb-20">
				<Navbar isLight />
			</div>
			<div>
				<Container>
					<div>
						<Text
							value="Open Position"
							className="mb-20 text-xl text-accent md:w-full"
						/>
						<TextH2
							value="We are Hiring"
							className="mb-5 text-5xl text-primary"
						/>
					</div>
					<main>{children}</main>
				</Container>
			</div>
		</div>
	);
};
export default layout;
