import React from "react";
import Image from "next/image";

const TAG_STYLES = {
  Internship:
    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  Volunteering:
    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
};

const TagBadge = ({ tag }) => {
  if (!tag) return null;
  const cls =
    TAG_STYLES[tag] ||
    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800";
  return <span className={cls} aria-label={`tag-${tag}`}>{tag}</span>;
};

const LogoBlock = ({ logo, company, size }) => {
  const isLamina = typeof logo === "string" && logo.toLowerCase().includes("lamina");
  const imgClass = isLamina
    ? "object-contain w-full h-auto dark:invert dark:brightness-125 dark:contrast-125"
    : "object-contain w-full h-auto";

  // compact size for education cards
  const small = size === "small";
  const wrapperClass = small
    ? "flex-shrink-0 w-10 sm:w-10 md:w-12 lg:w-10 xl:w-10 2xl:w-12 h-10 sm:h-10 md:h-12 lg:h-10 xl:h-10 2xl:h-12 rounded-md flex items-center justify-center bg-transparent"
    : "flex-shrink-0 w-14 sm:w-14 md:w-16 lg:w-14 xl:w-14 2xl:w-20 h-14 sm:h-14 md:h-16 lg:h-14 xl:h-14 2xl:h-20 rounded-md flex items-center justify-center bg-transparent";

  const imgDim = small ? 40 : 64;

  return (
    <div className={wrapperClass}>
      {logo ? (
        <Image src={logo} alt={`${company} logo`} width={imgDim} height={imgDim} className={imgClass} />
      ) : null}
    </div>
  );
};

const BulletList = ({ bullets }) => {
  if (!Array.isArray(bullets) || bullets.length === 0) return null;
  return (
    <ul className="list-disc list-inside space-y-1 sm:space-y-2 md:space-y-2 lg:space-y-3 xl:space-y-3">
      {bullets.map((b, i) => (
        <li key={i} className="leading-relaxed text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-700 dark:text-gray-300">
          {b}
        </li>
      ))}
    </ul>
  );
};

const ToolBadges = ({ tools }) => {
  if (!Array.isArray(tools) || tools.length === 0) return null;
  return (
    <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-4 xl:mt-4 flex flex-wrap gap-2">
      {tools.map((t, idx) => (
        <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] md:text-[11px] lg:text-[12px] bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-gray-200">
          {t}
        </span>
      ))}
    </div>
  );
};

export const ExperienceCard = React.memo(function ExperienceCard({ logo, title, company, time, location, bullets, tag, tools, logoSize, bodyClass, statPill }) {
  return (
    <article className="w-full max-w-full p-3 sm:p-4 md:p-6 lg:p-6 xl:p-6 border border-gray-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-900 transition-transform transform hover:-translate-y-1 hover:shadow-lg overflow-hidden">
      <div className="w-full max-w-full flex flex-col items-start gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-6 py-4 sm:py-4 md:py-3 lg:py-4 xl:py-4">
        <div className="w-full">
          <div className="flex flex-col 2xl:flex-row items-center 2xl:items-start gap-2 sm:gap-3 md:gap-4">
            <LogoBlock logo={logo} company={company} size={logoSize} />
            <div className="flex-1 w-full 2xl:ml-4">
              <div className="flex flex-col 2xl:flex-row items-center 2xl:items-start justify-between gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3">
                <div className="text-center 2xl:text-left">
                  <h4 className="font-semibold text-base sm:text-base md:text-lg lg:text-lg xl:text-lg leading-tight text-gray-900 dark:text-white">{title}</h4>
                  <div className="mt-1 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-700 dark:text-white/80"><span className="font-medium">{company}</span></div>
                </div>
                <div className="ml-2 flex-shrink-0"><TagBadge tag={tag} /></div>
              </div>
              {(time || location) && (
                <div className="mt-1 sm:mt-2 md:mt-2 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-gray-600 dark:text-white/60">
                  {time ? <time className="leading-none">{time}</time> : null}
                  {time && location ? <span aria-hidden className="opacity-70 mx-2">•</span> : null}
                  {location ? <span className="leading-none">{location}</span> : null}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={`w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-6 ${bodyClass || ""}`}>
          {statPill ? (
            <div className="mb-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                {statPill}
              </span>
            </div>
          ) : null}
          <BulletList bullets={bullets} />
          <ToolBadges tools={tools} />
        </div>
      </div>
    </article>
  );
});

const experiences = [
  {
    logo: "/images/experience-logos/lamina-logo.png",
    title: "Data Science Intern",
    company: "Lamina Studios, LLC",
    tag: "Internship",
    tools: [
      "Python",
      "Laravel",
      "Next.js",
      "PostgreSQL",
      "EDA",
      "Metabase",
      "Docker",
      "Git",
    ],
    time: "July – August 2025",
    location: "Remote – Washington, United States",
    bullets: [
      "Completed a 5-week data science immersion, covering hands-on projects in Python, data preprocessing, and model evaluation.",
      "Performed EDA on logistics datasets and developed interactive visualizations using Plotly.js and Metabase",
      "Built and integrated a full-stack analytics dashboard module into a smart logistics platform.",
      "Containerized services with Docker, managed version control with Git/GitHub, and deployed the multi-service application to Render, Railway, and Vercel.",
    ],
  },
  {
    logo: "/images/experience-logos/nidec-logo.png",
    title: "Data Science Intern",
    company: "NIDEC Control Techniques",
    tag: "Internship",
    tools: ["Python", "Streamlit", "MySQL", "Spreadsheets", "Git"],
    time: "Nov 2023 – May 2024",
    location: "Remote – Nonthaburi, Thailand",
    bullets: [
      "Implemented software development principles, collaborated with co-interns to learn and apply new technologies, and consistently met all deadlines.",
      "Assisted in creating a prototype for an itinerary website system using Python and Streamlit, designed its web interface, participated in meetings to gather requirements for the system proposal, and managed the database with MySQL functions.",
      "Collected, cleaned, and compiled marketing data from various sources, ensured data reliability and accuracy, and supported the marketing team in data analysis.",
    ],
  },
  {
    logo: "/images/experience-logos/omdena-logo.png",
    title: "Junior Machine Learning Engineer",
    company: "Omdena – Berlin Chapter",
    tag: "Volunteering",
    tools: ["Python", "EDA", "Pandas", "Streamlit", "Git"],
    time: "Aug 2023 – Oct 2023",
    location: "Remote - Berlin, Germany",
    bullets: [
      'Collaborated with 38 professionals globally on an end-to-end machine learning project, "Developing a Data-Driven Model for Waste Management Optimization," based in Berlin, Germany.',
      "Conducted collaborative Exploratory Data Analysis (EDA) on waste management datasets, leveraging Python for insightful visualizations.",
      'Pioneered the design and development of the "Waste Optimization Management" web application using Streamlit.',
    ],
  },
  {
    logo: "/images/experience-logos/gdsc-logo.png",
    title: "Lead Machine Learning Engineer",
    company: "Facts on the Ground & GDSC - PUP Main",
    tag: "Volunteering",
    tools: ["Python", "Data Cleaning", "Pandas", "NLTK", "Git"],
    time: "Feb 2023 – Aug 2023",
    location: "Remote - Philippines",
    bullets: [
      "Worked with a team of 38 collaborators in an international tech start-up project “Detecting Facts on the Ground Using Machine Learning,” in partnership with Google Developer Student Clubs - PUP Main.",
      "Spearheaded a sub-team of 7 individuals responsible for data wrangling and validation, resulting in a 20.2% reduction in irrelevant and garbage data using Python Pandas.",
      "Assisted in data preprocessing tasks, including tokenization and normalization with NLTK.",
    ],
  },
];

const Experience = () => (
  <div className="w-full">
    <div className="flex items-center justify-center mb-2">
      <h3 className="mb-4 text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center w-full mx-auto">Experience shapes skills.</h3>
    </div>

  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-2 gap-6">
      {experiences.map((exp, i) => (
        <div key={i} className="w-full">
          <ExperienceCard {...exp} />
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
