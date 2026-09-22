import type { MetadataRoute } from "next";

const siteUrl = "https://www.geeknishant.tech";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}