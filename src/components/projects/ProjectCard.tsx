import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { formatProjectDate } from "@/lib/projects";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
  onImageClick?: (project: Project, trigger: HTMLButtonElement) => void;
}

export function ProjectCard({
  project,
  compact = false,
  onImageClick,
}: ProjectCardProps) {
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
  const imageClass = `relative aspect-video overflow-hidden rounded-md ${compact ? "mb-4" : "mt-3"}`;

  return (
    <article
      className={`flex h-full flex-col rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 ${compact ? "p-2.5" : "p-4"}`}
    >
      {!compact ? (
        <div className="flex items-start justify-between gap-3 text-[11px] text-neutral-500 dark:text-neutral-400">
          <time dateTime={project.date}>
            {project.displayDate ?? formatProjectDate(project.date)}
          </time>
          {project.type ? (
            <span className="text-right">
              {project.type === "team"
                ? project.role
                  ? `Team · ${project.role}`
                  : "Team"
                : "Individual"}
            </span>
          ) : null}
        </div>
      ) : null}
      {project.image && onImageClick ? (
        <button
          type="button"
          className={`focus-ring ${imageClass}`}
          onClick={(event) => onImageClick(project, event.currentTarget)}
          aria-label={`Enlarge image for ${project.title}`}
        >
          <ProjectImage
            project={project}
            image={project.image}
            compact={compact}
          />
        </button>
      ) : project.image ? (
        <div className={imageClass}>
          <ProjectImage
            project={project}
            image={project.image}
            compact={compact}
          />
        </div>
      ) : (
        <div
          className={`${imageClass} flex items-center justify-center border border-neutral-200 bg-neutral-50 px-6 text-center dark:border-neutral-800 dark:bg-neutral-900`}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
            {project.tags[0]}
          </span>
        </div>
      )}
      <div className={`${compact ? "px-1 pb-1" : ""} flex flex-1 flex-col`}>
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`${compact ? "text-sm leading-5" : "text-lg leading-6"} font-semibold`}
          >
            {project.title}
          </h3>
          {links.length ? (
            <div className="flex shrink-0 gap-1">
              {links.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="focus-ring rounded p-1 text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
                >
                  <Icon name={link.icon} className="size-4" />
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <p
          className={`${compact ? "project-summary mt-3 text-xs leading-5" : "mt-3 text-sm leading-6"} flex-1 text-neutral-600 dark:text-neutral-300`}
        >
          {project.description}
        </p>
        {project.links.caseStudy ? (
          <Link
            href={project.links.caseStudy}
            aria-label={`View ${project.title} case study`}
            className="focus-ring mt-4 w-fit rounded-sm text-xs font-semibold underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-600 dark:decoration-neutral-700 dark:hover:text-neutral-300"
          >
            View case study →
          </Link>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.slice(0, compact ? 3 : 4).map((tool) => (
            <span
              key={tool}
              className="rounded bg-neutral-100 px-2 py-1 text-[10px] text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
            >
              {tool}
            </span>
          ))}
        </div>
        {!compact ? (
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function ProjectImage({
  project,
  image,
  compact,
}: {
  project: Project;
  image: string;
  compact: boolean;
}) {
  return (
    <Image
      src={image}
      alt={`${project.title} project preview`}
      fill
      sizes={
        compact
          ? "(max-width: 639px) calc(100vw - 60px), (max-width: 1279px) 50vw, 25vw"
          : "(max-width: 639px) calc(100vw - 72px), (max-width: 1023px) 50vw, 33vw"
      }
      className="object-cover"
    />
  );
}
