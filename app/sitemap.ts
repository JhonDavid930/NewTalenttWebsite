import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedAlternates = {
    languages: {
      en: siteUrl,
      es: `${siteUrl}/es`,
    },
  };

  return [
    {
      url: `${siteUrl}/control-moviles`,
      lastModified: new Date("2026-11-07T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/control-moviles/privacidad`,
      lastModified: new Date("2026-11-07T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: localizedAlternates,
    },
    {
      url: `${siteUrl}/es`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: localizedAlternates,
    },
  ];
}
