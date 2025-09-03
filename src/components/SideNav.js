import React, { useEffect, useState } from "react";

const Icon = ({ name, className = "w-5 h-5" }) => {
  switch (name) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 11.5L12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 21h14a1 1 0 0 0 1-1V11" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "about":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "education":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2 L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 7v10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "experience":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="7" width="18" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 7v-2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "projects":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 7h7v7H3z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 3h7v7h-7z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 14h7v7h-7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
};

const sections = [
  { id: "home", icon: "home", title: "Home" },
  { id: "about", icon: "about", title: "About" },
  { id: "education", icon: "education", title: "Education" },
  { id: "experience", icon: "experience", title: "Experience" },
  { id: "projects", icon: "projects", title: "Projects" },
];

export default function SideNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id || "");
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="md:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <ul className="flex flex-col gap-3 items-center bg-white/60 dark:bg-black/50 backdrop-blur rounded-full p-2 shadow-md">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => handleClick(e, s.id)}
              aria-label={s.title}
              aria-current={active === s.id ? "true" : "false"}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 ${
                active === s.id ? "bg-gray-900 text-white dark:bg-white dark:text-black" : ""
              }`}
              title={s.title}
            >
              <Icon name={s.icon} className="w-5 h-5" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
