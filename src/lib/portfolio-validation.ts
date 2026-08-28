import { z } from "zod";

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Expected an ISO date (YYYY-MM-DD).");
const url = z.string().url();

export const projectSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  date: isoDate,
  image: z.string().startsWith("/"),
  description: z.string().min(1),
  type: z.enum(["individual", "team"]),
  role: z.string().optional(),
  tools: z.array(z.string().min(1)),
  tags: z.array(z.string().min(1)),
  featured: z.boolean().optional(),
  links: z.object({
    live: url.optional(),
    github: url.optional(),
    documentation: url.optional(),
    video: url.optional(),
  }),
});

export const portfolioDataSchema = z.object({
  profile: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    siteUrl: url,
  }),
  projects: z.array(projectSchema).min(1),
  experiences: z.array(
    z.object({
      id: z.string().min(1),
      title: z.string().min(1),
      company: z.string().min(1),
      range: z.object({
        start: isoDate,
        end: isoDate.optional(),
        current: z.boolean().optional(),
      }),
    }),
  ),
  education: z.array(
    z.object({
      id: z.string().min(1),
      degree: z.string().min(1),
      institution: z.string().min(1),
    }),
  ),
  certifications: z.array(
    z.object({
      id: z.string().min(1),
      title: z.string().min(1),
      issued: isoDate,
    }),
  ),
});
