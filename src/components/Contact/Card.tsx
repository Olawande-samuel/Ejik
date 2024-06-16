import Text from "../Text";
import { Card, CardContent } from "../ui/card";
import ContactInfo from "./ContactInfo";

const data = [
	{
		id: 1,
		title: "Chat to Us",
		text: "info@chrisejik.com",
		subText: "",
		image: "/images/icons/chat.svg",
	},
	{
		id: 2,
		title: "Visit Our Website",
		text: "www.chrisejik.com",
		subText: "",
		image: "/images/icons/web.svg",
	},
	{
		id: 3,
		title: "Office",
		text: "3, Oje-Imianvan Street, Off Kudirat Abiola Way, Ikeja,Lagos,Nigeria.",
		subText: "",
		image: "/images/icons/location.svg",
	},
	{
		id: 4,
		title: "Phone",
		text: "Mon-Fri from 8am to 5pm.",
		subText:
			"+ (234) 815-0892-289  + (234) 906-6000-006 + 01-7623229, 01-7623264, 01-7623328",
		image: "/images/icons/phone.svg",
	},
];

const ContactCard = () => {
	return (
		<Card className="h-full rounded-none bg-accent">
			<CardContent className=" pt-20 md:px-8 lg:px-14">
				<div className="mb-16">
					<Text value="Get In Touch" className="mb-8" />
					<Text value="Lorem ipsum dolor sit amet consectetur. Eu amet pellentesque porta felis. " />
				</div>
				<div className="space-y-12">
					{data.map((item) => (
						<ContactInfo {...item} key={item.id} />
					))}
				</div>
			</CardContent>
		</Card>
	);
};
export default ContactCard;
