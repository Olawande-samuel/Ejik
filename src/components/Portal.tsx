"use client";

import Image from "next/image";
import Btn from "./Btn";
import Text from "./Text";
import TextH2 from "./TextH2";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const data = [
	{
		id: 1,
		image: "/images/portal1.webp",
		className: "one",
	},
	{
		id: 2,
		image: "/images/portal2.webp",
		className: "two",
	},
	{
		id: 3,
		image: "/images/portal3.webp",
		className: "three",
	},
	{
		id: 4,
		image: "/images/portal4.webp",
		className: "four",
	},
	{
		id: 5,
		image: "/images/portal5.webp",
		className: "five",
	},
	{
		id: 6,
		image: "/images/portal6.webp",
		className: "six",
	},
	{
		id: 7,
		image: "/images/portal7.webp",
		className: "seven",
	},
];

interface Props {
	title: string;
	text: string;
	btn?: string;
	link?: string;
}
const Portal = ({ title, text, btn }: Props) => {
	return (
		<section className="bg-portal relative grid h-screen place-items-center bg-[#0F0F0F] px-8 md:min-h-section-taller screen-980:h-section">
			<div className="z-20 flex w-full flex-col items-center justify-center space-y-6 sm:w-[445px]">
				<TextH2 value={title} className="text-center font-normal" />
				<Text className="text-center" value={text} />
				{btn && <Btn title={btn} />}
			</div>
			<div className="absolute inset-0">
				<div className="relative h-full">
					{data.map((item) => (
						<motion.div
							whileHover={{ scale: 1.2 }}
							key={item.id}
							className={cn(
								"absolute w-[180px] h-[150px] hidden lg:block ",
								item.className,
								item.id === 1 || item.id === 5 ? "sm:block" : "",
							)}
						>
							<Image
								src={item.image}
								alt=""
								width={200}
								height={150}
								className="size-full"
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Portal;
