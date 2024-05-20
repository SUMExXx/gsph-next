import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    return[
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/events`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/sponsors`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/team`,
            lastModified: new Date(),
            priority: 0.80,
        }
    ]
}