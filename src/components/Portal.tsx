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
		<section className="grid h-screen place-items-center bg-[#0F0F0F] px-8 md:h-section-taller screen-980:h-section">
			<div className="flex w-full flex-col items-center justify-center space-y-6 sm:w-[445px]">
				<TextH2 value={title} className="text-center font-normal" />
				<Text className="text-center" value={text} />
				{btn && <Btn title={btn} />}
			</div>
		</section>
	);
};
export default Portal;
