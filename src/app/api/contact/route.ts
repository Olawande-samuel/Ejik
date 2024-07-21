import { NextResponse } from "next/server";
import { z } from "zod";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodeMailer = require("nodemailer");

const FormSchema = z.object({
	first_name: z.string(),
	last_name: z.string().optional(),
	email: z.string().email({ message: "Please enter a valid email" }),
	phone_number: z.string().optional(),
	message: z.string(),
});
async function setupMailer() {
	const transporter = nodeMailer.createTransport({
		host: "smtp-relay.brevo.com",
		port: 587,
		secure: false,
		auth: {
			user: "780c77001@smtp-brevo.com",
			pass: "0mLzT1gId5BtFRqD",
		},
	});
	return transporter;
}
export async function POST(request: Request) {
	const data = await request.json();
	const validatedFields = FormSchema.safeParse(data);
	if (!validatedFields.success) {
		return NextResponse.json({
			errors: validatedFields.error.flatten().fieldErrors,
		});
	}
	try {
		const transporter = await setupMailer();
		const info = await transporter.sendMail({
			from: validatedFields.data.email,
			to: "olawandesamuel@gmail.com",
			subject:
				"From: " +
				validatedFields.data.first_name +
				" " +
				validatedFields.data.last_name,
			text: validatedFields.data.message,
		});
		console.log(info);
		return NextResponse.json({
			success: true,
			message: "Message sent successfully",
		});
	} catch (error) {
		return NextResponse.json(
			{ error: "An error occurred sending your message" },
			{ status: 500 },
		);
	}
}
