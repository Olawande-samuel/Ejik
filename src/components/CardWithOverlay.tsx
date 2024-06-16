import Image from "next/image";
import Btn from "./Btn";
import Text from "./Text";
import { Card, CardContent } from "./ui/card";

interface Props {
	btnClassName?: string;
	textClassName?: string;
}

const CardWithOverlay = ({ btnClassName, textClassName }: Props) => {
	return (
		<Card className="h-full min-h-[300px] rounded-xl ">
			<CardContent className="relative h-full rounded-xl bg-primary p-0">
				<Image
					src="/images/grid1.png"
					fill
					alt="decorative"
					className="rounded-xl object-cover opacity-65"
				/>
				<div className="absolute inset-0 flex h-full gap-11 p-6 text-white">
					<div>
						<p>01</p>
					</div>
					<div className="flex h-full flex-1 flex-col justify-between">
						<div>Chris Ejik Pharmaceuticals</div>
						<div className="flex flex-wrap items-end justify-between gap-4">
							<Text
								className={textClassName}
								value="We are a professional team working together effectively with knowledge to deliver the vision that improves the quality of life of our end users."
							/>
							<Btn title="Read More" className={btnClassName} />
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
export default CardWithOverlay;
