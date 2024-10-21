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
		service: "gmail",
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		auth: {
			user: process.env.ACCOUNT_EMAIL,
			pass: process.env.ACCOUNT_PASSWORD,
		},
		tls: {
			rejectUnauthorized: false,
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
			from: process.env.ACCOUNT_EMAIL,
			to: process.env.RECEIVER_EMAIL,
			subject:
				"From: " +
				validatedFields.data.first_name +
				" " +
				validatedFields.data.email,
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
