import type { MetadataRoute } from "next";
import { profile } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.siteUrl, changeFrequency: "monthly", priority: 1 },
    {
      url: `${profile.siteUrl}/projects`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${profile.siteUrl}/certifications`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
