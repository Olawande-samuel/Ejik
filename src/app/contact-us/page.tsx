import ContactCard from "@/components/Contact/Card";
import ContactForm from "@/components/Contact/ContactForm";

const ContactUs = () => {
	return (
		<section>
			{/* Navbar */}
			<section className="flex min-h-[120vh] items-center pb-32">
				<div className="basis-3/5">
					<ContactForm />
				</div>
				<div className="basis-2/5">
					<ContactCard />
				</div>
			</section>
		</section>
	);
};
export default ContactUs;
