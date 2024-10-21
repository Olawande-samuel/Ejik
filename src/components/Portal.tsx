"use client";

import Link from "next/link";
import Btn from "./Btn";
import Text from "./Text";
import TextH2 from "./TextH2";

interface Props {
	title: string;
	text: string;
	btn?: string;
	link?: string;
}

const Portal = ({ title, text, btn }: Props) => {
	return (
		<section className="relative grid  min-h-screen place-items-center bg-[url('/images/portal-bg.webp')] bg-cover bg-center bg-no-repeat px-4 md:h-[861px] md:min-h-section-taller screen-980:h-section">
			<div className="z-20 flex max-w-[681px] flex-col items-center justify-center space-y-6 bg-white/95 px-2  py-20 text-primary sm:px-24 md:px-[120px]">
				<TextH2
					value={title}
					className="text-center font-normal text-primary"
				/>
				<Text className="text-center text-primary" value={text} />
				{btn && (
					<Link href="/careers">
						<Btn
							title={btn}
							className="border-primary text-primary hover:bg-white hover:text-black"
						/>
					</Link>
				)}
			</div>
			<div className="absolute inset-0"></div>
		</section>
	);
};
export default Portal;
