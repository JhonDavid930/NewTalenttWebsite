import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedAlternates = {
    languages: {
      en: siteUrl,
      es: `${siteUrl}/es`,
    },
  };

  return [
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
