import { describe, expect, it } from "vitest";
import {
  certifications,
  education,
  experiences,
  profile,
  projects,
} from "@/content";
import { portfolioDataSchema } from "./portfolio-validation";

describe("canonical portfolio data", () => {
  it("has valid IDs, URLs, and ISO dates", () => {
    expect(() =>
      portfolioDataSchema.parse({
        profile,
        projects,
        experiences,
        education,
        certifications,
      }),
    ).not.toThrow();
    expect(new Set(projects.map((project) => project.id)).size).toBe(
      projects.length,
    );
    expect(new Set(experiences.map((experience) => experience.id)).size).toBe(
      experiences.length,
    );
  });
});
