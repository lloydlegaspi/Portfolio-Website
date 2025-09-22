import React from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, ExternalLinkIcon, DocumentIcon, TagIcon, SortIcon, BackIcon } from "@/components/Icons";
import PROJECTS from "@/data/projects";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const Project = ({ title, img, link, github, view, docu, description, date, hideLinks, tools = [], tags = [], type = 'individual', role = '', onImageClick }) => {
  return (
    <article className={`cursor-pointer select-none transition-all duration-700 ease-in-out transform rounded-xl border border-solid p-3 bg-white dark:bg-neutral-900 dark:border-neutral-700 hover:scale-105 hover:shadow-xl`}> 
      <div className="flex items-center justify-between">
        <span className="text-xs sm:text-xs md:text-sm text-gray-500 dark:text-gray-400">{date}</span>
        <span className="text-xs sm:text-xs md:text-sm text-gray-500 dark:text-gray-400">
          {type === 'team' ? (role ? `Team • ${role}` : 'Team') : 'Individual'}
        </span>
      </div>

      {/* Image opens modal on click; keyboard accessible via Enter */}
      <div
        className="w-full relative overflow-hidden rounded-md mt-2 block h-[176px]"
        role="button"
        tabIndex={0}
        onClick={() => onImageClick && onImageClick(img, title)}
        onKeyDown={(e) => { if (e.key === 'Enter') onImageClick && onImageClick(img, title); }}
      >
        <FramerImage src={img} alt={title} fill className="object-cover rounded-lg cursor-zoom-in" />
      </div>

      <h4 className={`font-semibold text-base sm:text-base md:text-lg lg:text-lg mt-3 leading-tight text-gray-900 dark:text-white`}>
        {link ? (
          <Link href={link} target="_blank" className="hover:underline underline-offset-2">{title}</Link>
        ) : (
          title
        )}
      </h4>

      

      <p className="mt-3 text-xs sm:text-sm md:text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{description}</p>

      {Array.isArray(tags) && tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200">
              {tag}
            </span>
          ))}
        </div>
      )}

      {!hideLinks && (
        <div className="mt-4 flex items-center justify-between w-full">
          <div className="flex gap-2 flex-wrap">
            {Array.isArray(tools) && tools.map((t) => (
              <span key={t} className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] md:text-[11px] lg:text-[12px] bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-gray-200">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" aria-label={`View ${title} on GitHub`} className="inline-flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600">
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {!github && link && (
              <a href={link} target="_blank" rel="noreferrer" aria-label={`Open ${title}`} className="inline-flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600">
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            )}

            {!github && !link && view && (
              <a href={view} target="_blank" rel="noreferrer" aria-label={`View ${title}`} className="inline-flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600">
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            )}

            {docu && (
              <a href={docu} target="_blank" rel="noreferrer" aria-label={`Documentation for ${title}`} className="inline-flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600">
                <DocumentIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

const Projects = () => {
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [selectedYear, setSelectedYear] = React.useState("");
  const [sortDirection, setSortDirection] = React.useState("desc"); // desc by default
  const [viewer, setViewer] = React.useState({ open: false, src: null, alt: '' });

  const openViewer = (src, alt) => setViewer({ open: true, src, alt });
  const closeViewer = () => setViewer({ open: false, src: null, alt: '' });

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
                  type={p.type}
                  role={p.role}
                  onImageClick={openViewer}
                />
              </div>
            ))}
          </div>
          {viewer.open && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4">
              <div className="relative w-full max-w-4xl max-h-[90vh] bg-transparent rounded-lg overflow-hidden">
                <button onClick={closeViewer} className="absolute top-3 right-3 z-20 bg-white dark:bg-neutral-900 rounded-full p-2 text-sm">✕</button>
                <div className="w-full h-[80vh] bg-white dark:bg-neutral-900 flex items-center justify-center relative">
                  <Image src={viewer.src} alt={viewer.alt} fill className="object-contain" />
                </div>
              </div>
            </div>
          )}
        </Layout>
      </main>
    </>
  );
};

export default Projects;



