import React from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, ExternalLinkIcon, DocumentIcon, TagIcon, SortIcon, BackIcon } from "@/components/Icons";
import PROJECTS from "@/data/projects";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const Project = ({ title, img, link, github, view, docu, description, date, hideLinks, tools = [], tags = [] }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4 min-h-[520px]">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{date}</span>
      {link ? (
        <Link
          href={link}
          target="_blank"
          className="w-full relative cursor-pointer overflow-hidden rounded-lg h-[200px]"
        >
          <FramerImage
            src={img}
            alt={title}
            fill
            className="object-cover rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
      ) : (
        <div className="w-full relative cursor-default overflow-hidden rounded-lg h-[200px]">
          <FramerImage
            src={img}
            alt={title}
            fill
            className="object-cover rounded-xl"
            transition={{ duration: 0.2 }}
          />
        </div>
      )}

      <div className="w-full flex flex-col items-start justify-between mt-4">
        {link ? (
          <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-xl">{title}</h2>
          </Link>
        ) : (
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        )}

  <p className="text-base md:text-sm text-left text-gray-600 dark:text-gray-300 mt-2">{description}</p>

        {Array.isArray(tags) && tags.length > 0 && (
          <div className="mt-3 flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                {tag}
              </span>
            ))}
          </div>
        )}

        {!hideLinks && (
          <div className="w-full mt-2 flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {Array.isArray(tools) &&
                tools.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                    {t}
                  </span>
                ))}
            </div>

            <div className="flex items-center gap-2">
              {github && (
                <Link href={github} target="_blank" className="w-8 md:w-6">
                  <GithubIcon />
                </Link>
              )}

              {link && !github && (
                <Link href={link} target="_blank" className="w-8 md:w-6" aria-label={`Open ${title}`}>
                  <ExternalLinkIcon />
                </Link>
              )}

              {view && !github && (
                <Link href={view} target="_blank" className="w-8 md:w-6" aria-label={`View ${title}`}>
                  <ExternalLinkIcon />
                </Link>
              )}

              {docu && (
                <Link href={docu} target="_blank" className="w-8 md:w-6" aria-label={`Documentation for ${title}`}>
                  <DocumentIcon />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [selectedYear, setSelectedYear] = React.useState("");
  const [sortDirection, setSortDirection] = React.useState("desc"); // desc by default

  // derive available filters
  const allTags = React.useMemo(() => {
    const s = new Set();
    PROJECTS.forEach((p) => (p.tags || []).forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, []);

  // tools filter removed - no memo needed

  const allYears = React.useMemo(() => {
    const s = new Set();
    PROJECTS.forEach((p) => {
      if (p.date) {
        const m = p.date.match(/\b(19|20)\d{2}\b/);
        if (m) s.add(m[0]);
      }
    });
    return Array.from(s).sort((a, b) => Number(b) - Number(a));
  }, []);

  const toggleItem = (list, setList, value) => {
    setList((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  const filtered = React.useMemo(() => {
    return PROJECTS.filter((p) => {
      // tags
      if (selectedTags.length > 0) {
        const pts = p.tags || [];
        if (!selectedTags.every((t) => pts.includes(t))) return false;
      }



      // year
      if (selectedYear) {
        const m = p.date ? p.date.match(/\b(19|20)\d{2}\b/) : null;
        if (!m || m[0] !== selectedYear) return false;
      }

      return true;
    });
  }, [selectedTags, selectedYear]);

  const sortedFiltered = React.useMemo(() => {
    const copy = [...filtered];

    const monthShort = {
      jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
      jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
    };

    const parseDateParts = (str) => {
      if (!str) return { year: 0, month: 0 };
      const yMatch = str.match(/\b(19|20)\d{2}\b/);
      const year = yMatch ? Number(yMatch[0]) : 0;
      // try to extract a month name before the year (e.g. "December 2025" or "Dec 2025")
      const mMatch = str.match(/([A-Za-z]{3,9})\s+\d{4}/);
      let month = 0;
      if (mMatch) {
        const mShort = mMatch[1].toLowerCase().slice(0, 3);
        month = monthShort[mShort] || 0;
      } else {
        // attempt numeric month formats like MM/YYYY or M/YYYY
        const numMatch = str.match(/\b(0?[1-9]|1[0-2])[\/\-]\d{4}\b/);
        if (numMatch) month = Number(numMatch[1]);
      }
      return { year, month };
    };

    copy.sort((a, b) => {
      const da = parseDateParts(a.date);
      const db = parseDateParts(b.date);

      // compare year first
      if (da.year !== db.year) {
        return sortDirection === 'desc' ? db.year - da.year : da.year - db.year;
      }

      // years equal -> compare month
      if (da.month !== db.month) {
        return sortDirection === 'desc' ? db.month - da.month : da.month - db.month;
      }

      return 0;
    });

    return copy;
  }, [filtered, sortDirection]);

  return (
    <>
      <Head>
        <title>Lloyd Legaspi | Projects Page</title>
        <meta name="description" content="Portfolio projects by Lloyd Legaspi" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          {/* Minimalist filter: small toggle button that opens a compact panel */}
          <div className="w-full mt-14 mb-6 flex justify-end items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex flex-wrap items-center gap-2">
                {allTags.map((t) => (
                  <button
                    key={t}
                    onClick={() => toggleItem(selectedTags, setSelectedTags, t)}
                    aria-pressed={selectedTags.includes(t)}
                    className={`px-2 py-1 text-xs rounded-md border ${selectedTags.includes(t) ? 'bg-blue-600 border-blue-600 text-white' : 'bg-transparent border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200'}`}
                    title={t}
                  >
                    {t}
                  </button>
                ))}
                {selectedTags.length > 0 && (
                  <button onClick={() => setSelectedTags([])} className="text-xs text-blue-600 ml-2">Clear</button>
                )}
              </div>

              <button
                onClick={() => setSortDirection((d) => (d === 'desc' ? 'asc' : 'desc'))}
                title={`Sort by date (${sortDirection})`}
                className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow-sm"
              >
                <SortIcon direction={sortDirection} className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 gap-y-12 xl:gap-x-8 lg:gap-x-6 md:gap-y-8 sm:gap-x-0">
            {sortedFiltered.map((p) => (
              <div key={p.id || p.title} className="col-span-4 sm:col-span-12">
                <Project
                  title={p.title}
                  img={p.image}
                  link={p.link}
                  github={p.github}
                  description={p.description}
                  date={p.date}
                  hideLinks={p.hideLinks}
                  tools={p.tools}
                  tags={p.tags}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;



