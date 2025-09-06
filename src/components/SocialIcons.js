import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, InstagramIcon, FacebookIcon, ExternalLinkIcon, DocumentIcon } from "./Icons";
import Tooltip from "./Tooltip";

const SocialIcons = ({ mode }) => {
  return (
  <div className="flex flex-col items-start gap-6 justify-center sm:items-center md:items-center lg:items-center">
      {/* Buttons for Resume and Contact Side by Side */}
      <div className="flex gap-4 items-center">
        <a
          href="/Legaspi_John_Lloyd_Resume.pdf"
          target="_blank"
          className="flex items-center gap-2 h-9 px-3 text-sm rounded-md bg-dark text-light font-medium border border-transparent dark:bg-light dark:text-dark transition-shadow hover:shadow-sm"
          download={true}
          aria-label="Download CV"
        >
          <DocumentIcon className="w-4 ml-1" />
          <span className="leading-none">Download CV</span>
        </a>

        <a
          href="/projects"
          className="flex items-center justify-center gap-2 h-9 px-4 min-w-[140px] text-sm rounded-md bg-white dark:bg-dark text-dark dark:text-white font-semibold border border-transparent transition-shadow hover:shadow-sm"
          aria-label="View Projects"
        >
          <ExternalLinkIcon className="w-4 ml-1" />
          <span className="leading-none">View Projects</span>
        </a>
      </div>

  {/* Social Icons Below Resume and Contact Buttons */}
  <div className="flex gap-6 mt-2 items-center sm:justify-center md:justify-center lg:justify-center sm:flex-row">
        <Tooltip label="GitHub">
          <a
            href="https://github.com/lloydlegaspi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 text-black dark:text-white"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <GithubIcon />
            </motion.div>
          </a>
        </Tooltip>
        <Tooltip label="LinkedIn">
          <a
            href="https://www.linkedin.com/in/john-lloyd-legaspi/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 text-black dark:text-white"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <LinkedInIcon />
            </motion.div>
          </a>
        </Tooltip>
        <Tooltip label="Instagram">
          <a
            href="https://www.instagram.com/lloydiiex/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 text-black dark:text-white"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <InstagramIcon />
            </motion.div>
          </a>
        </Tooltip>
        <Tooltip label="Facebook">
          <a
            href="https://www.facebook.com/legaspi.lloyd/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 text-black dark:text-white"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <FacebookIcon />
            </motion.div>
          </a>
        </Tooltip>
        <Tooltip label="Email">
          <a
            href="mailto:jlloyd.legaspi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 text-black dark:text-white inline-flex items-center"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <img src="/images/icons/email-black.png" alt="Email" className="w-5 h-5 filter dark:invert" />
            </motion.div>
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default SocialIcons;
