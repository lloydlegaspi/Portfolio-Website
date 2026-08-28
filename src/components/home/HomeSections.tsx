import Image from "next/image";
import Link from "next/link";
import {
  certifications,
  education,
  experiences,
  featuredProjects,
  profile,
  skillGroups,
} from "@/content";
import { ContactSection } from "@/components/contact/ContactSection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Icon } from "@/components/ui/Icon";

export function HomeSections() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceSection />
      <EducationSection />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-32 sm:py-24">
      <div
        aria-hidden="true"
        className="particle-field absolute inset-0 -z-10"
      />
      <div className="mx-auto flex max-w-6xl items-center gap-16 px-4 lg:flex-col lg:text-center">
        <div className="relative size-96 shrink-0 overflow-hidden rounded-full lg:size-72 sm:size-52">
          <Image
            src="/images/profile/prof-pic-1.png"
            alt="John Lloyd Legaspi"
            fill
            sizes="(max-width: 640px) 208px, 384px"
            priority
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold tracking-tight md:text-4xl sm:text-3xl">
            {profile.shortName}
          </h1>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
            {profile.headline}
          </p>
          <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed">
            {profile.introduction}
          </p>
          <div className="mt-7 flex flex-wrap gap-3 lg:justify-center">
            <a
              href={profile.resumePath}
              download
              className="focus-ring inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-xs font-semibold text-white dark:bg-white dark:text-black"
            >
              <Icon name="document" className="size-4" />
              Download CV
            </a>
            <Link
              href="/projects"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-gray-400 px-4 py-2 text-xs font-semibold"
            >
              <Icon name="external" className="size-4" />
              View projects
            </Link>
          </div>
          <div className="mt-6 flex gap-5 lg:justify-center">
            {profile.socialLinks
              .filter((link) =>
                ["github", "linkedin", "email"].includes(link.kind),
              )
              .map((link) => (
                <a
                  key={link.kind}
                  href={link.href}
                  target={link.kind === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="focus-ring rounded"
                  aria-label={link.label}
                >
                  <Icon
                    name={link.kind as "github" | "linkedin" | "email"}
                    className="size-6"
                  />
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell scroll-mt-24">
      <p className="section-kicker">About</p>
      <h2 className="section-title">Building foundations, shaping skills.</h2>
      <div className="mt-8 grid grid-cols-[1.2fr_1fr] gap-12 lg:grid-cols-1">
        {" "}
        <div className="space-y-5 text-sm font-medium leading-loose">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className="rounded-xl border border-gray-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900"
            >
              <h3 className="font-semibold">{group.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                {group.skills.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="section-shell scroll-mt-24">
      <p className="section-kicker">Experience</p>
      <h2 className="section-title">Experience shapes skills.</h2>
      <div className="mt-8 grid grid-cols-2 gap-6 2xl:grid-cols-1">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="rounded-xl border border-gray-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900"
          >
            <div className="flex gap-4">
              {experience.logo ? (
                <Image
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  width={64}
                  height={64}
                  className="size-16 object-contain"
                />
              ) : null}
              <div>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-[11px] text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
                  {experience.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold">
                  {experience.title}
                </h3>
                <p className="text-sm">{experience.company}</p>
                <p className="mt-1 text-xs text-gray-500">
                  {experience.displayDate}
                  {experience.location ? ` · ${experience.location}` : ""}
                </p>
              </div>
            </div>
            {experience.highlights.length ? (
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {experience.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded bg-gray-100 px-2 py-1 text-[11px] dark:bg-neutral-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="section-shell scroll-mt-24">
      <p className="section-kicker">Education & credentials</p>
      <h2 className="section-title">Learning with purpose.</h2>
      <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-1">
        {education.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-gray-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900"
          >
            <div className="flex gap-4">
              <Image
                src={item.logo}
                alt={`${item.institution} logo`}
                width={56}
                height={56}
                className="size-14 object-contain"
              />
              <div>
                <h3 className="font-semibold">{item.degree}</h3>
                <p className="text-sm">{item.institution}</p>
                <p className="mt-1 text-xs text-gray-500">
                  {item.displayDate} · {item.location}
                </p>
              </div>
            </div>
            <span className="mt-4 inline-block rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200">
              {item.distinction}
            </span>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <h3 className="mt-12 text-2xl font-semibold">Selected certifications</h3>
      <div className="mt-5 grid grid-cols-3 gap-4 lg:grid-cols-2 sm:grid-cols-1">
        {certifications.slice(0, 6).map((certification) => {
          const href = certification.credentialUrl ?? certification.file;
          const content = (
            <>
              {certification.issued ? (
                <time
                  className="text-xs text-gray-500"
                  dateTime={certification.issued}
                >
                  {certification.issued.slice(0, 4)}
                </time>
              ) : null}
              <h4 className="mt-2 text-sm font-semibold">
                {certification.title}
              </h4>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                {certification.issuer}
              </p>
            </>
          );
          const className =
            "rounded-xl border border-gray-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900";

          return href ? (
            <a
              key={certification.id}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`focus-ring ${className}`}
            >
              {content}
            </a>
          ) : (
            <article key={certification.id} className={className}>
              {content}
            </article>
          );
        })}
      </div>
    </section>
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
          className="focus-ring inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-xs font-semibold text-white dark:bg-white dark:text-black"
        >
          View all <Icon name="arrow" className="size-4" />
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-1">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
