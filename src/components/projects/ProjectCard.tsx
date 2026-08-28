import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { formatProjectDate } from "@/lib/projects";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  onImageClick?: (project: Project, trigger: HTMLButtonElement) => void;
}

export function ProjectCard({ project, onImageClick }: ProjectCardProps) {
  const links = [
    {
      key: "live",
      href: project.links.live,
      label: `Open ${project.title} live demo`,
      icon: "external" as const,
    },
    {
      key: "github",
      href: project.links.github,
      label: `View ${project.title} on GitHub`,
      icon: "github" as const,
    },
    {
      key: "documentation",
      href: project.links.documentation,
      label: `Read ${project.title} documentation`,
      icon: "document" as const,
    },
    {
      key: "video",
      href: project.links.video,
      label: `Watch ${project.title} video`,
      icon: "video" as const,
    },
  ].filter((link) => link.href);

  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex items-start justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
        <time dateTime={project.date}>{formatProjectDate(project.date)}</time>
        <span>
          {project.type === "team"
            ? project.role
              ? `Team · ${project.role}`
              : "Team"
            : "Individual"}
        </span>
      </div>
      {onImageClick ? (
        <button
          type="button"
          className="focus-ring relative mt-2 h-44 overflow-hidden rounded-md"
          onClick={(event) => onImageClick(project, event.currentTarget)}
          aria-label={`Enlarge image for ${project.title}`}
        >
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </button>
      ) : (
        <div className="relative mt-2 h-44 overflow-hidden rounded-md">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-end justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="rounded bg-gray-100 px-2 py-1 text-[11px] dark:bg-neutral-800"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 gap-2">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="focus-ring rounded p-1 text-gray-600 hover:text-indigo-600 dark:text-gray-300"
            >
              <Icon name={link.icon} className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
