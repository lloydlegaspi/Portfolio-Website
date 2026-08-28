import Link from "next/link";
import { formatProjectDate } from "@/lib/projects";
import type { Project } from "@/types/portfolio";
import type { CaseStudyBlock, ProjectCaseStudy } from "@/types/case-study";
import { CaseStudyFigure } from "./CaseStudyFigure";

interface CaseStudyArticleProps {
  caseStudy: ProjectCaseStudy;
  project: Project;
}

export function CaseStudyArticle({
  caseStudy,
  project,
}: CaseStudyArticleProps) {
  return (
    <article className="site-container py-20 sm:py-14">
      <header className="mx-auto max-w-[820px]">
        <Link
          href="/projects"
          className="focus-ring inline-flex rounded-sm text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 underline decoration-neutral-300 underline-offset-4 hover:text-black dark:text-neutral-400 dark:hover:text-white"
        >
          ← All projects
        </Link>
        <p className="section-kicker mt-10">Engineering case study</p>
        <h1 className="text-5xl font-bold leading-[1.08] tracking-[-0.045em] lg:text-4xl sm:text-3xl">
          {project.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
          {caseStudy.disciplines.map((discipline, index) => (
            <span key={discipline}>
              {index > 0 ? <span aria-hidden="true"> · </span> : null}
              {discipline}
            </span>
          ))}
          <span aria-hidden="true">·</span>
          <time dateTime={project.date}>
            {project.displayDate ?? formatProjectDate(project.date)}
          </time>
        </div>
        <p className="mt-7 text-base leading-8 text-neutral-700 dark:text-neutral-300">
          {caseStudy.intro}
        </p>
      </header>

      <div className="mt-12">
        <CaseStudyFigure figure={caseStudy.hero} eager />
      </div>

      <nav
        aria-label="Case study sections"
        className="mx-auto mt-12 max-w-[820px] border-y border-neutral-200 py-5 dark:border-neutral-800"
      >
        <ol className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs sm:grid-cols-1">
          {caseStudy.sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="focus-ring inline-flex rounded-sm py-1 text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white"
              >
                <span
                  aria-hidden="true"
                  className="mr-2 tabular-nums text-neutral-400"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-16 space-y-20 sm:mt-12 sm:space-y-14">
        {caseStudy.sections.map((section, index) => (
          <section
            id={section.id}
            key={section.id}
            className="scroll-mt-24 border-t border-neutral-200 pt-10 dark:border-neutral-800"
          >
            <div className="mx-auto mb-8 max-w-[820px]">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-2xl">
                {section.title}
              </h2>
            </div>
            <div className="space-y-8">
              {section.blocks.map((block, blockIndex) => (
                <CaseStudyBlockView
                  key={`${section.id}-${blockIndex}`}
                  block={block}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

function CaseStudyBlockView({ block }: { block: CaseStudyBlock }) {
  switch (block.type) {
    case "paragraphs":
      return (
        <div className="mx-auto max-w-[820px] space-y-5 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      );
    case "bullets":
      return (
        <ul className="mx-auto max-w-[820px] space-y-3 pl-5 text-sm leading-7 text-neutral-700 marker:text-neutral-400 dark:text-neutral-300">
          {block.items.map((item) => (
            <li key={item} className="list-disc pl-1">
              {item}
            </li>
          ))}
        </ul>
      );
    case "figure":
      return <CaseStudyFigure figure={block.figure} />;
    case "gallery":
      return (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-1">
          {block.figures.map((figure) => (
            <CaseStudyFigure key={figure.src} figure={figure} />
          ))}
        </div>
      );
    case "metrics":
      return (
        <div className="mx-auto max-w-[820px]">
          <dl className="grid grid-cols-3 gap-3 sm:grid-cols-1">
            {block.metrics.map((metric) => (
              <div
                key={`${metric.value}-${metric.label}`}
                className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <dt className="text-xs leading-5 text-neutral-500 dark:text-neutral-400">
                  {metric.label}
                </dt>
                <dd className="mt-2 text-2xl font-bold tracking-[-0.035em]">
                  {metric.value}
                </dd>
                {metric.note ? (
                  <dd className="mt-2 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
                    {metric.note}
                  </dd>
                ) : null}
              </div>
            ))}
          </dl>
          {block.note ? (
            <p className="mt-3 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
              {block.note}
            </p>
          ) : null}
        </div>
      );
    case "subsection":
      return (
        <div className="mx-auto max-w-[820px]">
          <h3 className="text-lg font-semibold tracking-[-0.02em]">
            {block.title}
          </h3>
          {block.paragraphs ? (
            <div className="mt-3 space-y-4 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
          {block.bullets ? (
            <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
              {block.bullets.map((item) => (
                <li key={item} className="list-disc pl-1">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      );
    case "callout":
      return (
        <aside className="mx-auto max-w-[820px] rounded-lg border border-neutral-300 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            {block.title}
          </p>
          <p className="mt-3 text-xl font-semibold leading-8 tracking-[-0.02em]">
            {block.text}
          </p>
        </aside>
      );
  }
}
