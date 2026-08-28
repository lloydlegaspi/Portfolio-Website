import type { MetadataRoute } from "next";
import { profile } from "@/content";
import { projectCaseStudies } from "@/content/project-case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.siteUrl, changeFrequency: "monthly", priority: 1 },
    {
      url: `${profile.siteUrl}/projects`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectCaseStudies.map(({ projectSlug }) => ({
      url: `${profile.siteUrl}/projects/${projectSlug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${profile.siteUrl}/certifications`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
