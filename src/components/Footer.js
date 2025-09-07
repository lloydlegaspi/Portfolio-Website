import React from "react";
import { GithubIcon, LinkedInIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
        <div className="flex-1">
          <span className="opacity-90">{new Date().getFullYear()} © John Lloyd Legaspi</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/lloydlegaspi"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <GithubIcon className="w-3 h-3" />
          </a>

          <a
            href="https://www.linkedin.com/in/john-lloyd-legaspi/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <LinkedInIcon className="w-14 h-14" />
          </a>

          <a
            href="mailto:jlloyd.legaspi@gmail.com"
            aria-label="Email"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center"
          >
            <img src="/images/icons/email-white.png" alt="Email" className="w-4 h-4 filter dark:invert" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

