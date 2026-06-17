import type { MetadataRoute } from "next";
import { menuItems } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticPages = [
    "",
    "/menu",
    "/promotions",
    "/rewards",
    "/app",
    "/delivery",
    "/locations",
    "/catering",
    "/franchises",
    "/support",
    "/community",
    "/contact",
    "/careers",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("daily" as const) : ("weekly" as const),
      priority: path === "" ? 1 : path === "/menu" ? 0.9 : 0.7,
    })),
    ...menuItems.map((item) => ({
      url: `${base}/menu/${item.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
