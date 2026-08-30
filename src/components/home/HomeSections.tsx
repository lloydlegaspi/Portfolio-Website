import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/contact/ContactSection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SocialLinks } from "@/components/ui/SocialLinks";
import {
  certifications,
  education,
  experienceOverview,
  experiences,
  featuredProjects,
  profile,
  skillGroups,
} from "@/content";
import type { Certification, Experience } from "@/types/portfolio";

const internships = experiences.filter(
  (experience) => experience.category === "Internship",
);
const leadership = experiences.filter(
  (experience) => experience.category === "Volunteering",
);

const professionalExperienceIcons: Record<string, IconName> = {
  "stratpoint-technologies": "database",
  "dost-sei": "code",
  edufied: "workflow",
  "lamina-studios": "chart",
  "nidec-control-techniques": "chart",
};

export function HomeSections() {
  return (
    <>
      <Hero />
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <About />
      </div>
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <ExperienceSection />
      </div>
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <EducationSection />
      </div>
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <FeaturedProjects />
      </div>
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <ContactSection />
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="site-container grid min-h-[600px] grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] items-center gap-16 py-24 xl:gap-12 lg:min-h-0 lg:grid-cols-1 lg:gap-14 lg:py-20 sm:gap-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Hello, I&apos;m
          </p>
          <h1 className="mt-5 text-7xl font-bold leading-[0.98] tracking-[-0.06em] xl:text-6xl md:text-5xl sm:mt-4 sm:text-4xl">
            {profile.shortName}
          </h1>
          <p className="mt-6 text-base font-semibold leading-7 sm:mt-5 sm:text-sm">
            {profile.headline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300 sm:mt-5 sm:text-sm sm:leading-7">
            {profile.introduction}
          </p>
          <div className="mt-9 flex flex-wrap gap-3 sm:mt-8">
            <a
              href={profile.resumePath}
              download
              className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-md bg-black px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              <Icon name="document" className="size-4" />
              Download CV
            </a>
            <Link
              href="/projects"
              className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-md border border-neutral-400 px-5 py-2.5 text-xs font-semibold transition-colors hover:border-black dark:border-neutral-600 dark:hover:border-white"
            >
              <Icon name="external" className="size-4" />
              View projects
            </Link>
          </div>
          <div className="mt-9 flex items-center gap-5 sm:mt-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Connect
            </span>
            <span
              aria-hidden="true"
              className="h-px w-10 bg-neutral-300 dark:bg-neutral-700"
            />
            <SocialLinks />
          </div>
        </div>
        <div className="relative w-full max-w-[380px] justify-self-end pr-5 pt-5 lg:justify-self-center sm:max-w-[320px] sm:pr-3 sm:pt-3">
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 size-32 text-neutral-300 opacity-70 dark:text-neutral-700"
            style={{
              backgroundImage:
                "radial-gradient(currentColor 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-3 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.35)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-[0_18px_50px_-28px_rgba(0,0,0,0.9)] sm:rounded-2xl sm:p-2.5">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 sm:rounded-xl">
              <Image
                src="/images/profile/prof-pic-2.png"
                alt="Portrait of John Lloyd Legaspi"
                fill
                sizes="(max-width: 639px) 288px, (max-width: 1023px) 368px, 380px"
                preload
                className="object-contain object-bottom"
              />
            </div>
            <div
              aria-hidden="true"
              className="mx-auto mt-3 h-px w-12 bg-neutral-200 dark:bg-neutral-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-shell scroll-mt-24"
    >
      <div className="grid grid-cols-[0.95fr_1.05fr] items-start gap-20 xl:gap-12 lg:grid-cols-1 lg:gap-14">
        <div className="max-w-2xl">
          <p className="section-kicker">About</p>
          <h2
            id="about-heading"
            className="max-w-xl text-4xl font-bold leading-[1.15] tracking-[-0.04em] sm:text-3xl"
          >
            {profile.about.heading}
          </h2>
          <div className="mt-7 max-w-xl space-y-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            <p>{profile.about.introduction}</p>
            <p>{profile.about.supporting}</p>
          </div>
          <div className="mt-10 max-w-lg border-l-2 border-black pl-5 dark:border-white">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              Current focus
            </p>
            <p className="mt-3 text-sm font-medium leading-6">
              {profile.about.currentFocus}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
          {skillGroups.map((group, index) => (
            <article
              key={group.id}
              className="group relative min-h-52 overflow-hidden rounded-xl border border-neutral-200 bg-white p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_16px_36px_-28px_rgba(0,0,0,0.45)] dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700 dark:hover:shadow-[0_16px_36px_-28px_rgba(0,0,0,0.9)] md:min-h-0 sm:p-6"
            >
              <span
                aria-hidden="true"
                className="absolute right-5 top-3 text-6xl font-bold leading-none tracking-[-0.08em] text-neutral-100 transition-colors duration-300 group-hover:text-neutral-200 dark:text-neutral-900 dark:group-hover:text-neutral-800"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative flex h-full flex-col justify-between">
                <h3 className="max-w-[75%] text-[11px] font-semibold uppercase tracking-[0.18em]">
                  {group.title}
                </h3>
                <p className="mt-12 text-sm leading-7 text-neutral-600 dark:text-neutral-300 md:mt-10">
                  {group.skills.join(" · ")}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-7 h-px w-10 bg-black transition-[width] duration-300 group-hover:w-16 dark:bg-white sm:left-6"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-shell scroll-mt-24"
    >
      <div className="max-w-3xl">
        <p className="section-kicker">Experience</p>
        <h2
          id="experience-heading"
          className="text-4xl font-bold leading-[1.15] tracking-[-0.04em] sm:text-3xl"
        >
          {experienceOverview.heading}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
          {experienceOverview.introduction}
        </p>
      </div>

      <ul
        aria-label="Professional experience"
        className="mt-12 grid auto-rows-fr grid-cols-2 gap-5 md:auto-rows-auto md:grid-cols-1"
      >
        {internships.map((experience) => (
          <li key={experience.id} className="h-full">
            <ProfessionalExperienceCard experience={experience} />
          </li>
        ))}
      </ul>

      <div className="mt-20 border-t border-neutral-200 pt-12 dark:border-neutral-800 sm:mt-16 sm:pt-10">
        <h3 className="text-xl font-bold tracking-[-0.025em]">
          Leadership &amp; community
        </h3>
        <ul
          aria-label="Leadership and community experience"
          className="mt-8 grid auto-rows-fr grid-cols-4 gap-6 xl:grid-cols-2 sm:auto-rows-auto sm:grid-cols-1"
        >
          {leadership.map((experience) => (
            <li key={experience.id} className="h-full">
              <LeadershipExperienceCard experience={experience} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProfessionalExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const icon = professionalExperienceIcons[experience.id] ?? "chart";

  return (
    <article className="flex h-full min-h-80 flex-col rounded-xl border border-neutral-200 bg-white p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_16px_36px_-28px_rgba(0,0,0,0.45)] dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700 dark:hover:shadow-[0_16px_36px_-28px_rgba(0,0,0,0.9)] sm:min-h-0 sm:p-6">
      <div className="flex items-start justify-between gap-6 xs:flex-col xs:gap-3">
        <div className="flex min-w-0 items-start gap-4">
          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
            <Icon name={icon} className="size-[18px]" />
          </span>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold leading-6">
              {experience.title}
            </h3>
            <p className="mt-2 max-w-md text-xs leading-5 text-neutral-500 dark:text-neutral-400">
              {experience.company}
            </p>
          </div>
        </div>
        <time
          dateTime={experience.range.start}
          className="shrink-0 text-[11px] font-medium text-neutral-500 dark:text-neutral-400"
        >
          {experience.displayDate}
        </time>
      </div>

      <ul className="mt-7 space-y-3 pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
        {experience.highlights.slice(0, 2).map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-[0.65rem] size-1 shrink-0 rounded-full bg-black dark:bg-white"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <p className="mt-auto border-t border-neutral-200 pt-6 text-[11px] leading-5 text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        {experience.skills.join(" · ")}
      </p>
    </article>
  );
}

function LeadershipExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-neutral-200 p-5 transition-colors duration-300 hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600">
      <span className="inline-flex size-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
        <Icon name="users" className="size-4" />
      </span>
      <h4 className="mt-5 text-sm font-semibold leading-6">
        {experience.title}
      </h4>
      <p className="mt-2 text-xs leading-5 text-neutral-600 dark:text-neutral-300">
        {experience.company}
      </p>
      <time
        dateTime={experience.range.start}
        className="mt-5 block text-[11px] text-neutral-500 dark:text-neutral-400"
      >
        {experience.displayDate}
      </time>
      {experience.highlights[0] ? (
        <p className="mt-5 border-t border-neutral-200 pt-4 text-xs leading-5 text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
          {experience.highlights[0]}
        </p>
      ) : null}
    </article>
  );
}

function EducationSection() {
  const [university, highSchool] = education;

  return (
    <div className="section-shell">
      <section
        id="education"
        aria-labelledby="education-heading"
        className="scroll-mt-24"
      >
        <div className="max-w-3xl">
          <p className="section-kicker">Education</p>
          <h2
            id="education-heading"
            className="text-4xl font-bold leading-[1.15] tracking-[-0.04em] sm:text-3xl"
          >
            Academic foundation in computer science.
          </h2>
        </div>

        <article className="mt-12 rounded-xl border border-neutral-200 bg-white p-8 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_16px_36px_-28px_rgba(0,0,0,0.45)] dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700 dark:hover:shadow-[0_16px_36px_-28px_rgba(0,0,0,0.9)] sm:mt-10 sm:p-6">
          <div className="flex items-start justify-between gap-8 md:flex-col md:gap-4">
            <div>
              <h3 className="text-2xl font-bold leading-tight tracking-[-0.025em] sm:text-xl">
                {university.degree}
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                {university.institution}
              </p>
            </div>
            <time
              dateTime={university.range.end}
              className="shrink-0 text-xs font-medium text-neutral-500 dark:text-neutral-400"
            >
              {university.displayDate}
            </time>
          </div>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-y border-neutral-200 py-5 text-xs dark:border-neutral-800">
            {university.distinction ? (
              <div>
                <dt className="sr-only">Academic standing</dt>
                <dd className="font-medium">{university.distinction}</dd>
              </div>
            ) : null}
            {university.highlights.map((highlight) => (
              <div key={highlight}>
                <dt className="sr-only">Academic distinction</dt>
                <dd className="font-medium">{highlight}</dd>
              </div>
            ))}
          </dl>

          {university.coursework?.length ? (
            <div className="mt-7">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Relevant coursework
              </h4>
              <ul
                aria-label="Relevant coursework"
                className="mt-4 flex flex-wrap gap-2"
              >
                {university.coursework.map((course) => (
                  <li
                    key={course}
                    className="rounded-full border border-neutral-200 px-3 py-1.5 text-[11px] text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </article>

        <article className="mt-5 grid grid-cols-[1fr_auto] items-center gap-x-8 gap-y-2 rounded-lg border border-neutral-200 px-6 py-5 dark:border-neutral-800 sm:grid-cols-1 sm:px-5">
          <div>
            <h3 className="text-sm font-semibold">{highSchool.institution}</h3>
            <p className="mt-1 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
              {highSchool.degree}
              {highSchool.distinction ? ` · ${highSchool.distinction}` : ""}
            </p>
          </div>
          <time
            dateTime={highSchool.range.end}
            className="shrink-0 text-[11px] text-neutral-500 dark:text-neutral-400"
          >
            {highSchool.displayDate}
          </time>
        </article>
      </section>

      <section
        aria-labelledby="certifications-heading"
        className="mt-24 border-t border-neutral-200 pt-20 dark:border-neutral-800 sm:mt-20 sm:pt-16"
      >
        <div className="flex items-end justify-between gap-8 md:items-start sm:flex-col sm:gap-5">
          <div className="max-w-3xl">
            <p className="section-kicker">Certifications</p>
            <h2
              id="certifications-heading"
              className="text-4xl font-bold leading-[1.15] tracking-[-0.04em] sm:text-3xl"
            >
              Continuous learning across cloud, data, analytics, and automation.
            </h2>
          </div>
          <a
            href={profile.certificationsUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex shrink-0 items-center gap-1 rounded-sm text-xs font-semibold underline-offset-4 hover:underline"
          >
            View all certifications
            <Icon name="arrow" className="size-4" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <ul
          aria-label="Featured certifications"
          className="mt-10 grid auto-rows-fr grid-cols-3 gap-4 lg:grid-cols-2 sm:grid-cols-1"
        >
          {certifications.slice(0, 6).map((certification) => (
            <li key={certification.id} className="h-full">
              <CertificationPreviewCard certification={certification} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function CertificationPreviewCard({
  certification,
}: {
  certification: Certification;
}) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          {certification.issuer}
        </p>
        {certification.credentialUrl ? (
          <Icon name="external" className="size-4 shrink-0" />
        ) : null}
      </div>
      <h3 className="mt-4 text-sm font-semibold leading-6">
        {certification.title}
      </h3>
      {certification.detail ? (
        <p className="mt-3 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
          {certification.detail}
        </p>
      ) : null}
      {certification.credentialUrl ? (
        <span className="sr-only">Opens credential in a new tab</span>
      ) : null}
    </>
  );
  const className =
    "flex h-full min-h-[148px] flex-col rounded-xl border border-neutral-200 bg-white p-5 transition-colors duration-200 hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-600";

  return certification.credentialUrl ? (
    <a
      href={certification.credentialUrl}
      target="_blank"
      rel="noreferrer"
      className={`focus-ring ${className}`}
    >
      {content}
    </a>
  ) : (
    <article className={className}>{content}</article>
  );
}

function FeaturedProjects() {
  return (
    <section id="projects" className="section-shell scroll-mt-24">
      <div className="flex items-end justify-between gap-6 sm:flex-col sm:items-start">
        <div>
          <p className="section-kicker">Featured projects</p>
          <h2 className="section-title">Recent work, brought forward.</h2>
        </div>
        <Link
          href="/projects"
          className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-neutral-300 px-4 py-2 text-xs font-semibold transition-colors hover:border-black dark:border-neutral-700 dark:hover:border-white"
        >
          View all projects <Icon name="arrow" className="size-4" />
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-5 xl:grid-cols-2 sm:grid-cols-1">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} compact />
        ))}
      </div>
    </section>
  );
}
