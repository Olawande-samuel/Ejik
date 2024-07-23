"use server";

import { Job } from "@/lib/types";
import { client } from "@/lib/utils";

export async function getContent(
	content_query: string,
	params = {},
): Promise<Job | Job[]> {
	const content = await client.fetch(content_query, params, {
		next: {
			revalidate: process.env.NODE_EN === "development" ? 30 : 3600,
		},
	});
	return content;
}
