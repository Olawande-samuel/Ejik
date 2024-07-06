import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const outfit = Outfit({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Chris Ejik Group",
	description: "Chris Ejik Group of Companies",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={outfit.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
