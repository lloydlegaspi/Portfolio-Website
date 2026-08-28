import type { Project } from "@/types/portfolio";

export type SortDirection = "asc" | "desc";

export function filterProjects(
  items: readonly Project[],
  tags: readonly string[],
  year?: string,
): Project[] {
  return items.filter((project) => {
    const hasTags =
      tags.length === 0 || tags.every((tag) => project.tags.includes(tag));
    const hasYear = !year || project.date.startsWith(year);
    return hasTags && hasYear;
  });
}

export function sortProjects(
  items: readonly Project[],
  direction: SortDirection,
): Project[] {
  return [...items].sort((left, right) =>
    direction === "desc"
      ? right.date.localeCompare(left.date)
      : left.date.localeCompare(right.date),
  );
}

export function projectYear(project: Project): string {
  return project.date.slice(0, 4);
}

export function formatProjectDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
