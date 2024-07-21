import { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
	title: "About Us | Ejik ",
	description: "About Chris Ejik Group of Companies. Our vision and mission",
	openGraph: {
		title: "About Us | Ejik",
		description:
			"Leading company in pharmaceutical, healthcare, international travels and tours, and Engineering",
		type: "website",
		url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about-us`,
		siteName: "Chris Ejik Group of Companies",
	},
};
const layout = ({ children }: { children: React.ReactNode }) => {
	return <section className={outfit.className}>{children}</section>;
};
export default layout;
