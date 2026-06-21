import type { MetadataRoute } from "next";
import { legalLinks, officialHeaderNav, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const paths = [
    ...officialHeaderNav.map((link) => link.href),
    "/faq",
    "/about",
    "/app",
    ...legalLinks.map((link) => link.href),
  ];

  return [...new Set(paths)].map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
    priority: path === "/" ? 1 : 0.7,
  }));
}
