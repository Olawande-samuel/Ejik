import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createClient } from "@sanity/client";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_KEY,
	dataset: "production",
	apiVersion: "2024-03-11",
	// Set to `true` for production environments
	useCdn: process.env.NODE_ENV === "development" ? false : true,
});
