import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ReactQueryProvider from "@/providers";

const outfit = Outfit({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Chris Ejik Group",
	description: "Chris Ejik Group of Companies",
	openGraph: {
		title: "Chris Ejik",
		description:
			"Leading company in pharmaceutical, healthcare, international travels and tours, and Engineering",
		type: "website",
		url: process.env.NEXT_PUBLIC_WEBSITE_URL,
		siteName: "Chris Ejik Group of Companies",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={outfit.className}>
				<ReactQueryProvider>
					{children}
					<Footer />
				</ReactQueryProvider>
			</body>
		</html>
	);
}
