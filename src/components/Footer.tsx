import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="min-h-[300px] bg-primary">
			<Container>
				<div className="flex flex-col justify-between gap-6 py-8 text-white md:flex-row">
					<div className="">
						<Link href="/">
							<Image
								src="/images/logo-white.svg"
								width={130}
								height={60}
								alt="logo"
							/>
						</Link>
					</div>
					<ul className="space-y-1 text-sm">
						<li>Company</li>
						<li>
							<Link href="/" className="hover:text-accent">
								Subsidiaries
							</Link>
						</li>
						<li>
							<Link href="/about-us#team" className="hover:text-accent">
								The team
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:text-accent">
								Key achievements
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:text-accent">
								Impact stories
							</Link>
						</li>
					</ul>
					<ul className="space-y-1 text-sm">
						<li>
							<Link href="/careers" className="hover:text-accent">
								Careers
							</Link>
						</li>
						<li>
							<Link href="/contact-us" className="hover:text-accent">
								Contact Us
							</Link>
						</li>
					</ul>
					<ul className="space-y-1 text-sm">
						<li>Privacy Policy</li>
						<li>Cookie Policy</li>
					</ul>
					<ul className="space-y-1 text-sm">
						<li>LinkedIn</li>
						<li>Facebook</li>
						<li>Instagram</li>
					</ul>
				</div>
			</Container>
		</footer>
	);
};
export default Footer;
