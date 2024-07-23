import { ImageResponse } from "next/og";
export const runtime = "edge";
export const contentType = "image/png";
export default async function OpenGraphImage() {
	const Image = new ImageResponse(
		(
			<div
				style={{
					fontSize: 128,
					background: "red",
					width: "100%",
					height: "100%",
					display: "flex",
					textAlign: "center",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				Ejik Group
			</div>
		),
		{
			width: 1200,
			height: 600,
		},
	);
	return Image;
}
