import Image from "next/image";
import Text from "../Text";
import TextH2 from "../TextH2";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { PlusCircle } from "lucide-react";

interface Props {
	title: string;
	text: string;
	image: string;
}
const WhyCard = ({ title, image }: Props) => {
	return (
		<Card className="flex flex-col shadow-lg ">
			<CardHeader className="relative h-[320px] p-0">
				<Image src={image} alt={title} fill className="object-cover" />
			</CardHeader>
			<CardContent className="pt-8">
				<TextH2
					value={title}
					className="mb-6 max-w-[90%] text-[33px] leading-10 tracking-normal text-accent "
				/>
				<Text
					className="text-[#3A3C3E]"
					value="Lorem ipsum dolor sit amet consectetur. Imperdiet aliquet neque donec praesent."
				/>
			</CardContent>
			<CardFooter className="mt-auto flex justify-end">
				<PlusCircle fill="#EC1C24" color="#FFF" size={48} strokeWidth={1} />
			</CardFooter>
		</Card>
	);
};
export default WhyCard;
