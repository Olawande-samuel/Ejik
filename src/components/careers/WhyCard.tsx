"use client";

import Image from "next/image";
import Text from "../Text";
import TextH2 from "../TextH2";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
	title: string;
	text: string;
	image: string;
	front: string;
	back: string;
}
const WhyCard = ({ title, image }: Props) => {
	const [flip, setFlip] = useState(false);
	return (
		<div className="why_card">
			<Card
				className={cn(
					"card_content  shadow-lg h-full",
					flip && "rotate_card_content",
				)}
			>
				<div className="card_front flex h-full flex-col">
					<CardHeader className="relative h-[280px] p-0">
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
						<PlusCircle
							onClick={() => setFlip(true)}
							fill="#EC1C24"
							color="#FFF"
							size={48}
							strokeWidth={1}
							className="hover:cursor-pointer"
						/>
					</CardFooter>
				</div>
				<div className="card_back flex flex-col">
					<CardContent className="pt-8">
						<Text
							className="text-[#3A3C3E]"
							value="Lorem ipsum dolor sit amet consectetur. Vel pulvinar neque sed consectetur varius massa eu odio at. Neque consectetur mauris platea cursus nunc nec. Feugiat tellus amet et lectus lorem ut porttitor. "
						/>
						<Text
							className="text-[#3A3C3E]"
							value="Lorem ipsum dolor sit amet consectetur. Vel pulvinar neque sed consectetur varius massa eu odio at. Neque consectetur mauris platea cursus nunc nec. Feugiat tellus amet et lectus lorem ut porttitor. "
						/>
						<Text
							className="text-[#3A3C3E]"
							value="Lorem ipsum dolor sit amet consectetur. Vel pulvinar neque sed consectetur varius massa eu odio at. Neque consectetur mauris platea cursus nunc nec. Feugiat tellus amet et lectus lorem ut porttitor. "
						/>
					</CardContent>
					<CardFooter className="mt-auto flex justify-end">
						<MinusCircle
							onClick={() => setFlip(false)}
							fill="#EC1C24"
							color="#FFF"
							size={48}
							className="hover:cursor-pointer"
							strokeWidth={1}
						/>
					</CardFooter>
				</div>
			</Card>
		</div>
	);
};
export default WhyCard;
