import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/contact/ContactSection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Icon } from "@/components/ui/Icon";
import { SocialLinks } from "@/components/ui/SocialLinks";
import {
  certifications,
  education,
  experiences,
  featuredProjects,
  profile,
  skillGroups,
} from "@/content";

const internships = experiences.filter(
  (experience) => experience.category === "Internship",
);
const leadership = experiences.filter(
  (experience) => experience.category === "Volunteering",
);

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
      <div className="mx-auto grid min-h-[680px] max-w-6xl grid-cols-[1.08fr_0.92fr] items-center gap-20 px-6 py-24 lg:min-h-0 lg:grid-cols-1 lg:gap-12 lg:py-20 sm:px-5 sm:py-16">
        <div className="max-w-2xl">
          <p className="section-kicker">Data engineer</p>
          <h1 className="text-6xl font-bold leading-[1.02] tracking-[-0.055em] md:text-5xl sm:text-4xl">
            {profile.shortName}
          </h1>
          <p className="mt-4 text-sm font-semibold sm:leading-relaxed">
            {profile.headline}
          </p>
          <p className="mt-7 max-w-xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            {profile.introduction}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
          <SocialLinks className="mt-7" />
        </div>
        <div className="relative mx-auto aspect-[5/5.35] w-full max-w-[440px] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 lg:max-w-sm">
          <Image
            src="/images/profile/prof-pic-2.png"
            alt="John Lloyd Legaspi"
            fill
            sizes="(max-width: 1023px) 384px, 440px"
            preload
            className="object-contain object-bottom grayscale"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell scroll-mt-24">
      <div className="grid grid-cols-[0.9fr_1.1fr] gap-20 lg:grid-cols-1 lg:gap-12">
        <div>
          <p className="section-kicker">About me</p>
          <h2 className="section-title max-w-sm">
            Building foundations, shaping skills.
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className={`rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950 ${group.id === "machine-learning" ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <p className="mt-3 text-xs leading-6 text-neutral-500 dark:text-neutral-400">
                {group.skills.join(", ")}
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
      <div className="relative ml-2 mt-12 border-l border-neutral-300 dark:border-neutral-700 sm:ml-1">
        {internships.map((experience) => (
          <article
            key={experience.id}
            className="relative grid grid-cols-[1fr_auto] gap-x-8 pb-10 pl-8 last:pb-0 md:grid-cols-1 md:gap-y-2 sm:pl-6"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-1.5 size-2.5 rounded-full border-2 border-white bg-black dark:border-neutral-950 dark:bg-white"
            />
            <div>
              <h3 className="text-base font-semibold">{experience.title}</h3>
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                {experience.company}
              </p>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {experience.displayDate}
            </p>
            {experience.highlights.length ? (
              <ul className="col-span-2 mt-4 max-w-4xl list-disc space-y-2 pl-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300 md:col-span-1">
                {experience.highlights.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            <p className="col-span-2 mt-3 text-xs leading-5 text-neutral-500 dark:text-neutral-400 md:col-span-1">
              {experience.skills.join(" · ")}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-16 border-t border-neutral-200 pt-10 dark:border-neutral-800">
        <p className="section-kicker">Leadership & community</p>
        <div className="mt-6 grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-1">
          {leadership.map((experience) => (
            <article key={experience.id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold">{experience.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-neutral-600 dark:text-neutral-300">
                    {experience.company}
                  </p>
                </div>
                <p className="shrink-0 text-[11px] text-neutral-500 dark:text-neutral-400">
                  {experience.displayDate}
                </p>
              </div>
              {experience.highlights[0] ? (
                <p className="mt-3 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
                  {experience.highlights[0]}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="section-shell scroll-mt-24">
      <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
        <div className="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800 md:grid-cols-1 md:divide-x-0 md:divide-y">
          <div className="p-7 sm:p-5">
            <h2 className="section-kicker">Education</h2>
            <div className="mt-7 space-y-8">
              {education.map((item) => (
                <article key={item.id}>
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-sm font-semibold">{item.degree}</h3>
                      <p className="mt-2 text-xs leading-5 text-neutral-600 dark:text-neutral-300">
                        {item.institution}
                      </p>
                    </div>
                    <p className="shrink-0 text-[11px] text-neutral-500 dark:text-neutral-400">
                      {item.displayDate}
                    </p>
                  </div>
                  {item.distinction ? (
                    <p className="mt-4 text-xs font-medium">
                      {item.distinction}
                    </p>
                  ) : null}
                  <ul className="mt-3 list-disc space-y-2 pl-4 text-xs leading-5 text-neutral-600 dark:text-neutral-300">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div className="p-7 sm:p-5">
            <h2 className="section-kicker">Certifications</h2>
            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-1">
              {certifications.slice(0, 6).map((certification) => {
                const href = certification.credentialUrl ?? certification.file;
                const content = (
                  <>
                    <span
                      aria-hidden="true"
                      className="mt-1 size-2.5 shrink-0 rounded-full border border-current"
                    />
                    <span>
                      <h3 className="text-xs font-semibold leading-5">
                        {certification.title}
                      </h3>
                      <span className="mt-1 block text-[11px] text-neutral-500 dark:text-neutral-400">
                        {certification.issuer}
                      </span>
                    </span>
                  </>
                );

                return href ? (
                  <a
                    key={certification.id}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring flex items-start gap-3 rounded-sm"
                  >
                    {content}
                  </a>
                ) : (
                  <article
                    key={certification.id}
                    className="flex items-start gap-3"
                  >
                    {content}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
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
          className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-neutral-300 px-4 py-2 text-xs font-semibold transition-colors hover:border-black dark:border-neutral-700 dark:hover:border-white"
        >
          View all projects <Icon name="arrow" className="size-4" />
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-4 xl:grid-cols-2 sm:grid-cols-1">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} compact />
        ))}
      </div>
    </section>
  );
}
