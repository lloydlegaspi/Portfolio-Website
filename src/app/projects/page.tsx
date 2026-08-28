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
    <div className="site-container py-24 sm:py-16">
      <p className="section-kicker">Portfolio archive</p>
      <h1 className="text-5xl font-bold tracking-[-0.045em] sm:text-4xl">
        Projects
      </h1>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
        Filter by focus area or year, sort chronologically, and open available
        project images for a closer look.
      </p>
      <div className="mt-12">
        <ProjectsExplorer projects={projects} />
      </div>
    </div>
  );
}
