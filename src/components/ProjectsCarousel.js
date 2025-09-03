import React, { useEffect, useRef, useState } from "react";
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
    <section id="projects" className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl font-bold">Projects rise from foundations and skills.</h3>
        <Link href="/projects" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-500 transition">
          See all projects
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
                className={`cursor-pointer select-none transition-all duration-700 ease-in-out transform rounded-2xl border border-solid p-4 bg-white dark:bg-gray-900 dark:border-gray-700 flex-shrink-0 ${
                  isCenter
                    ? "w-[420px] scale-105 z-30 shadow-xl filter-none"
                    : "w-[300px] scale-95 opacity-70 z-10 filter blur-sm"
                }`}
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">{proj.date}</span>

                <div className="mt-2 overflow-hidden rounded-lg">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className={`${isCenter ? "h-56" : "h-44"} w-full object-cover rounded-lg transition-all duration-700 ease-in-out`}
                  />
                </div>

                <h4 className={`${isCenter ? "text-2xl mt-3 font-bold" : "text-lg mt-3 font-bold"}`}>{proj.title}</h4>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{proj.description}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {proj.tools.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noreferrer" aria-label={`View ${proj.title} on GitHub`} className="inline-flex items-center justify-center w-9 h-9 bg-indigo-600 text-white rounded-full hover:opacity-95 shadow">
                        <GithubIcon className="w-4 h-4 text-white" />
                      </a>
                    )}

                    {!proj.github && proj.view && (
                      <a href={proj.view} target="_blank" rel="noreferrer" aria-label={`View ${proj.title}`} className="inline-flex items-center justify-center w-9 h-9 bg-indigo-600 text-white rounded-full hover:opacity-95 shadow">
                        <ExternalLinkIcon className="w-4 h-4 text-white" />
                      </a>
                    )}

                    {proj.docu && (
                      <a href={proj.docu} target="_blank" rel="noreferrer" aria-label={`Documentation for ${proj.title}`} className="inline-flex items-center justify-center w-9 h-9 bg-gray-200 text-gray-800 rounded-full hover:opacity-95 shadow">
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
        <button onClick={prev} aria-label="Previous project" className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition shadow">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button onClick={next} aria-label="Next project" className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition shadow">
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
              className={`w-2 h-2 rounded-full ${i === index ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-600"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
