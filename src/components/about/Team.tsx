import Image from "next/image";
import Text from "../Text";

interface Props {
	name: string;
	role: string;
	description: string;
	image: string;
}
const Team = ({ image, name, role, description }: Props) => {
	return (
		<div className="flex  flex-col gap-6 sm:flex-row sm:items-center">
			<div className="basis-2/5">
				<Image
					src={image}
					width={540}
					height={500}
					className="max-w-full"
					alt={`a picture of ${name}`}
				/>
			</div>
			<div className="basis-3/5">
				<div className="space-y-4">
					<Text value={name} className="text-2xl font-bold sm:text-3xl" />
					<Text value={role} className="text-lg font-light" />
					<Text value={description} className="text-lg" />
				</div>
			</div>
		</div>
	);
};
export default Team;
