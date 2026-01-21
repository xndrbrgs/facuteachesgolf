
// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://facuteachesgolf.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Add disallows only if you truly want to hide something (e.g., admin pages)
      // disallow: ["/admin", "/api"],
      crawlDelay: undefined, // Set to a number (in seconds) only if you must throttle bots
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
``
