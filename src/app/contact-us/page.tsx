import ContactCard from "@/components/Contact/Card";
import ContactForm from "@/components/Contact/ContactForm";
import Navbar from "@/components/landing/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us | Ejik ",
	description: "Contact Us at Ejik Group of companies",
	openGraph: {
		title: "Contact Us | Ejik",
		description:
			"Leading company in pharmaceutical, healthcare, international travels and tours, and Engineering",
		type: "website",
		url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact-us`,
		siteName: "Chris Ejik Group of Companies",
	},
};
const ContactUs = () => {
	return (
		<section>
			<div className="mb-20">
				<Navbar isLight />
			</div>
			<section className="flex min-h-[120vh] flex-col items-center gap-3 pb-32 md:flex-row">
				<div className="md:basis-3/5">
					<ContactForm />
				</div>
				<div className="md:basis-2/5">
					<ContactCard />
				</div>
			</section>
		</section>
	);
};
export default ContactUs;
