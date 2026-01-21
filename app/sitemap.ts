
// app/sitemap.ts
import type { MetadataRoute } from "next";

// If you have dynamic content (e.g., blog posts or locations),
// you can fetch them here (from your DB, CMS, or filesystem)
// and push them into the "entries" array.

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = "https://facuteachesgolf.com";

  // --- 1) Static routes you want indexed ---
  const staticRoutes: Array<{ path: string; changefreq?: "daily" | "weekly" | "monthly"; priority?: number }> = [
    { path: "/", changefreq: "weekly", priority: 1.0 },
    { path: "/lessons", changefreq: "weekly", priority: 0.9 },
    { path: "/about", changefreq: "monthly", priority: 0.7 },
    { path: "/contact", changefreq: "monthly", priority: 0.7 },
    // Add/remove routes as needed:
    // { path: "/pricing", changefreq: "monthly", priority: 0.8 },
    // { path: "/testimonials", changefreq: "monthly", priority: 0.6 },
    // { path: "/faq", changefreq: "monthly", priority: 0.6 },
  ];

  // --- 2) Optionally pull in dynamic routes (example sketch) ---
  // const posts = await getAllPosts(); // your data source
  // const postEntries = posts.map(p => ({
  //   url: `${siteUrl}/blog/${p.slug}`,
  //   lastModified: new Date(p.updatedAt || p.publishedAt),
  //   changeFrequency: "weekly" as const,
  //   priority: 0.6,
  // }));

  // --- 3) Assemble entries ---
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    ...staticRoutes.map((r) => ({
      url: `${siteUrl}${r.path}`,
      lastModified: now, // You can replace with per‑page timestamps if you track them
      changeFrequency: r.changefreq,
      priority: r.priority,
    })),
    // ...postEntries,
  ];

  return entries;
}
``
