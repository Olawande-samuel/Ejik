import Image from "next/image";

interface Props {
	title: string;
	text: string;
	image: string;
	subText: string;
}
const ContactInfo = ({ image, title, text, subText }: Props) => {
	return (
		<div className="flex gap-4">
			<div>
				<Image src={image} width={25} height={27} alt="chat" />
			</div>
			<div className="space-y-4 text-white">
				<p className="text-xl font-medium">{title}</p>
				<small>{text}</small>
				<p className="text-lg font-medium">{subText}</p>
			</div>
		</div>
	);
};
export default ContactInfo;
