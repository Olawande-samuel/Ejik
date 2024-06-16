"use client";

import { useForm } from "react-hook-form";
import Text from "../Text";
import TextH2 from "../TextH2";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const FormSchema = z.object({
	first_name: z.string(),
	last_name: z.string().optional(),
	email: z.string().email({ message: "Please enter a valid email" }),
	phone_number: z.string().optional(),
	message: z.string(),
});

const ContactForm = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});
	return (
		<div className="pl-padded-sm pr-8 sm:pl-padded-md md:pl-padded-lg 2xl:pl-padded-xl">
			<Text value="Contact Us" className="mb-3 text-accent" />
			<TextH2 value="Get In Touch" className="mb-5 text-[#515355]" />
			<Text value="Lorem ipsum dolor sit amet consectetur. Eu amet pellentesque porta felis. Fringilla semper sed id pellentesque." />
			<Form {...form}>
				<form>
					<div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
						<FormField
							name="first_name"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input {...field} placeholder="First Name" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="last_name"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Last Name" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="email"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input {...field} placeholder="examp@example.com" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name="message"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input {...field} placeholder="+(234)345-454-985" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						name="phone_number"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Leave us a message"
										id="message"
										className="w-full"
										rows={5}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="mt-14">
						<Button className="h-10 rounded-sm bg-accent text-xs">
							Send Message
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};
export default ContactForm;
