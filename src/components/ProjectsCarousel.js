import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, ExternalLinkIcon, DocumentIcon } from "@/components/Icons";
import PROJECTS from "@/data/projects";

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const prev = () => setIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () => setIndex((i) => (i + 1) % PROJECTS.length);

  // autoplay
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!paused) {
      intervalRef.current = setInterval(() => setIndex((i) => (i + 1) % PROJECTS.length), 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const leftIndex = (index - 1 + PROJECTS.length) % PROJECTS.length;
  const rightIndex = (index + 1) % PROJECTS.length;
  const visible = [PROJECTS[leftIndex], PROJECTS[index], PROJECTS[rightIndex]];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl font-bold">Projects rise from foundations and skills.</h3>
        <Link
          href="/projects"
          className="flex items-center justify-center gap-1 h-7 px-3 min-w-[100px] text-xs rounded bg-black text-white dark:bg-white dark:text-black font-semibold border border-transparent transform transition-transform duration-200 hover:scale-105 hover:shadow-sm"
          aria-label="View Projects"
        >
          <ExternalLinkIcon className="w-3 mr-1" />
          <span className="leading-none">View All</span>
        </Link>
      </div>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative w-full"
      >
        <div className="flex items-center justify-center gap-6 py-6 px-2">
          {visible.map((proj, pos) => {
            const isCenter = pos === 1;
            return (
              <article
                key={proj.id}
                onClick={() => (pos === 0 ? prev() : pos === 2 ? next() : null)}
                style={{ willChange: "transform, opacity, filter" }}
                className={`cursor-pointer select-none transition-all duration-700 ease-in-out transform rounded-xl border border-solid p-3 bg-white dark:bg-neutral-900 dark:border-neutral-700 flex-shrink-0 hover:scale-105 hover:shadow-xl ${
                  isCenter
                    ? "w-[360px] scale-100 z-30 shadow-md filter-none"
                    : "w-[260px] scale-95 opacity-75 z-10 filter blur-sm"
                }`}
              >
                <span className="text-xs sm:text-xs md:text-sm text-gray-500 dark:text-gray-400">{proj.date}</span>

        <div className="mt-2 overflow-hidden rounded-md relative w-full" style={{height: isCenter ? 176 : 144}}>
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
          sizes={isCenter ? '360px' : '260px'}
                    className={`object-cover rounded-lg transition-all duration-700 ease-in-out`}
                    priority={isCenter}
                  />
                </div>

        <h4 className={`font-semibold text-base sm:text-base md:text-lg lg:text-lg mt-3 leading-tight text-gray-900 dark:text-white`}>{proj.title}</h4>

                {proj.tags && proj.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="mt-3 text-xs sm:text-sm md:text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{proj.description}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {proj.tools.map((t) => (
                      <span key={t} className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] md:text-[11px] lg:text-[12px] bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noreferrer" aria-label={`View ${proj.title} on GitHub`} className="inline-flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600">
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}

                    {!proj.github && proj.view && (
                      <a href={proj.view} target="_blank" rel="noreferrer" aria-label={`View ${proj.title}`} className="inline-flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600">
                        <ExternalLinkIcon className="w-4 h-4" />
                      </a>
                    )}

                    {proj.docu && (
                      <a href={proj.docu} target="_blank" rel="noreferrer" aria-label={`Documentation for ${proj.title}`} className="inline-flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600">
                        <DocumentIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* overlay chevrons */}
  <button onClick={prev} aria-label="Previous project" className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition transform duration-200 hover:scale-110 shadow z-50">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
  <button onClick={next} aria-label="Next project" className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition transform duration-200 hover:scale-110 shadow z-50">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* indicators */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`w-2 h-2 rounded-full transform transition-transform duration-200 ${i === index ? "bg-black dark:bg-white" : "bg-gray-300 dark:bg-gray-600"} hover:scale-125 focus:outline-none`}
            />
          ))}
        </div>
      </div>
  </div>
  );
}
