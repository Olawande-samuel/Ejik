import Image from "next/image";
import TitleText from "../TitleText";
import Text from "../Text";

const Vision = () => {
	return (
		<section className="flex min-h-screen">
			<div className="h-[120vh] basis-3/5 bg-[#F7F0F0] p-8">
				<div className="grid min-h-full place-items-center bg-[url('/images/vision-bg.png')] bg-cover bg-no-repeat">
					<div className="w-full md:w-[70%]">
						<Text
							value="Vision"
							className="mb-20 text-2xl font-bold text-accent md:text-4xl"
						/>
						<TitleText
							value="Empower people in improving the quality of their lives"
							className=""
						/>
					</div>
				</div>
			</div>
			<div className="relative h-[120vh] basis-2/5 pt-3">
				<div className="relative h-full">
					<Image
						src={"/images/vision.png"}
						fill
						alt="father kneeling and hugging daughter in a field in setting sun"
						className="object-cover "
					/>
				</div>
			</div>
		</section>
	);
};
export default Vision;
