import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: process.env.NEXT_PUBLIC_WEBSITE_URL as string,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about-us` as string,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/careers` as string,
			lastModified: new Date(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact-us` as string,
			lastModified: new Date(),
		},
	];
}
