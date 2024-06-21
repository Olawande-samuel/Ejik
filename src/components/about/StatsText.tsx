"use client";

import { motion, useAnimate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const StatsText = ({
	header,
	title,
	headerTrail,
}: {
	headerTrail?: string;
	header: string;
	title: string;
}) => {
	const [scope, animate] = useAnimate();
	const [currentValue, setCurrentValue] = useState(0);
	const ref = useRef(null);
	const startingValue = useMotionValue(0);

	const isInView = useInView(ref, {
		once: false,
		margin: "-100px 0px -100px 0px",
	});

	useEffect(() => {
		if (isInView) {
			animate(startingValue, header, {
				duration: 3,
				onUpdate: (latest) => {
					setCurrentValue(Math.round(latest));
				},
			});
		}
	}, [isInView, header, startingValue]);
	return (
		<div ref={scope} className="text-center text-white">
			<motion.p ref={ref} className="mb-8 text-4xl md:text-6xl lg:text-8xl">
				{`${currentValue}${headerTrail ? headerTrail : ""}`}
			</motion.p>
			<p className="text-xl uppercase">{title}</p>
		</div>
	);
};
export default StatsText;
