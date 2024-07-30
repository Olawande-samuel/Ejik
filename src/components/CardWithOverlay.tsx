"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Btn from "./Btn";
import Text from "./Text";
import { Card, CardContent } from "./ui/card";

interface Props {
	btnClassName?: string;
	textClassName?: string;
	description: string;
	image: string;
	id: number;
}

const CardWithOverlay = ({
	btnClassName,
	textClassName,
	description,
	image,
	id,
}: Props) => {
	return (
		<Card className="h-full min-h-[300px] rounded-xl ">
			<CardContent className="relative h-full overflow-hidden rounded-xl bg-primary p-0">
				<motion.div
					whileHover={{ scale: 1.2 }}
					className="absolute inset-0 z-20 inline-block overflow-hidden opacity-60"
				>
					<Image
						src={image}
						fill
						alt="decorative"
						className="rounded-xl object-cover opacity-65"
					/>
				</motion.div>
				<div className="absolute inset-0 flex h-full gap-5 p-6 text-white">
					<div>
						<p>0{id}</p>
					</div>
					<div className="flex h-full flex-1 flex-col justify-between">
						<div className="">Chris Ejik Pharmaceuticals</div>
						<div className="flex flex-wrap items-end justify-between gap-4">
							<Text className={textClassName} value={description} />
							<Btn title="Read More" className={btnClassName} />
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
export default CardWithOverlay;
