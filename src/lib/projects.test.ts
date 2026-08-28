import { describe, expect, it } from "vitest";
import { projects } from "@/content";
import { filterProjects, sortProjects } from "./projects";

describe("project collection utilities", () => {
  it("filters using every selected tag", () => {
    const result = filterProjects(projects, ["AI/ML", "Web Development"]);
    expect(result.length).toBeGreaterThan(0);
    expect(
      result.every(
        (project) =>
          project.tags.includes("AI/ML") &&
          project.tags.includes("Web Development"),
      ),
    ).toBe(true);
  });

  it("filters by ISO date year", () => {
    expect(
      filterProjects(projects, [], "2026").every((project) =>
        project.date.startsWith("2026"),
      ),
    ).toBe(true);
  });

  it("sorts newest and oldest without mutating the source", () => {
    const source = projects.slice(0, 3);
    const original = [...source];
    expect(sortProjects(source, "desc")[0]?.date).toBe("2026-05-01");
    expect(sortProjects(source, "asc")[0]?.date).toBe("2026-04-01");
    expect(source).toEqual(original);
  });
});
