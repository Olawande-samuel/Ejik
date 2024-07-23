import { ImageResponse } from "next/og";

export const runtime = "edge";

export const contentType = "image/png";

export default async function OpenGraphImage() {
	const outfitSemiBold = fetch(
		new URL("./Outfit-SemiBold.ttf", import.meta.url),
	).then((res) => res.arrayBuffer());
	const Image = new ImageResponse(
		(
			<div
				style={{
					fontSize: 108,
					background: "#eee",
					width: "100%",
					height: "100%",
					display: "flex",
					textAlign: "center",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<p className="text-accent">Ejik Group of Companies</p>
			</div>
		),
		{
			width: 1200,
			height: 600,
			fonts: [
				{
					name: "Outfit",
					data: await outfitSemiBold,
					style: "normal",
					weight: 400,
				},
			],
		},
	);
	return Image;
}
