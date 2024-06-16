import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface Props {
	className?: string;
	title: string;
}

const Btn = ({ className, title }: Props) => {
	return (
		<Button
			variant="outline"
			className={cn("bg-transparent text-white uppercase", className)}
		>
			{title}
		</Button>
	);
};
export default Btn;
