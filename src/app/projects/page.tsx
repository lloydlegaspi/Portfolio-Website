import type { Metadata } from "next";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { profile, projects } from "@/content";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore ${profile.shortName}'s software development, machine learning, data analytics, and mobile projects.`,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects | ${profile.shortName}`,
    description: `Selected projects by ${profile.shortName}.`,
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="section-kicker">Portfolio archive</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-3xl">
        Projects
      </h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        Filter by focus area or year, sort chronologically, and open available
        project images for a closer look.
      </p>
      <div className="mt-10">
        <ProjectsExplorer projects={projects} />
      </div>
    </div>
  );
}
