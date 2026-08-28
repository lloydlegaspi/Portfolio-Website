"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import {
  filterProjects,
  projectYear,
  sortProjects,
  type SortDirection,
} from "@/lib/projects";
import type { Project } from "@/types/portfolio";

export function ProjectsExplorer({
  projects,
}: {
  projects: readonly Project[];
}) {
  const [tags, setTags] = useState<string[]>([]);
  const [year, setYear] = useState("");
  const [direction, setDirection] = useState<SortDirection>("desc");
  const [viewer, setViewer] = useState<{
    project: Project;
    trigger: HTMLButtonElement;
  } | null>(null);
  const allTags = useMemo(
    () => [...new Set(projects.flatMap((project) => project.tags))].sort(),
    [projects],
  );
  const years = useMemo(
    () => [...new Set(projects.map(projectYear))].sort().reverse(),
    [projects],
  );
  const visible = useMemo(
    () =>
      sortProjects(
        filterProjects(projects, tags, year || undefined),
        direction,
      ),
    [projects, tags, year, direction],
  );

  function toggleTag(tag: string) {
    setTags((current) =>
      current.includes(tag)
        ? current.filter((value) => value !== tag)
        : [...current, tag],
    );
  }

  return (
    <>
      <div className="mb-8 rounded-xl border border-gray-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
        <div
          className="flex flex-wrap items-center gap-2"
          aria-label="Project filters"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              aria-pressed={tags.includes(tag)}
              onClick={() => toggleTag(tag)}
              className={`focus-ring rounded-md border px-3 py-1.5 text-xs ${tags.includes(tag) ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black" : "border-gray-300 dark:border-gray-700"}`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <label className="text-sm font-medium" htmlFor="project-year">
            Year
          </label>
          <select
            id="project-year"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className="focus-ring rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm dark:border-gray-700"
          >
            <option value="">All years</option>
            {years.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() =>
              setDirection((value) => (value === "desc" ? "asc" : "desc"))
            }
            className="focus-ring rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-700"
            aria-label={`Sort projects ${direction === "desc" ? "oldest first" : "newest first"}`}
          >
            Date: {direction === "desc" ? "Newest" : "Oldest"}
          </button>
          {tags.length > 0 || year ? (
            <button
              type="button"
              className="focus-ring rounded px-2 py-2 text-sm underline"
              onClick={() => {
                setTags([]);
                setYear("");
              }}
            >
              Clear filters
            </button>
          ) : null}
        </div>
      </div>
      {visible.length ? (
        <div className="grid grid-cols-3 gap-7 lg:grid-cols-2 sm:grid-cols-1">
          {visible.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={(selected, trigger) =>
                setViewer({ project: selected, trigger })
              }
            />
          ))}
        </div>
      ) : (
        <div
          role="status"
          className="rounded-xl border border-dashed border-gray-400 px-6 py-16 text-center"
        >
          <h2 className="text-xl font-semibold">
            No projects match these filters
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Try removing a tag or selecting a different year.
          </p>
        </div>
      )}
      {viewer ? (
        <ProjectModal
          project={viewer.project}
          returnFocusTo={viewer.trigger}
          onClose={() => setViewer(null)}
        />
      ) : null}
    </>
  );
}
