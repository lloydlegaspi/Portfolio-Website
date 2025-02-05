import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, InstagramIcon, FacebookIcon, LinkArrow, MailIcon } from "./Icons";

const SocialIcons = ({ mode }) => {
  return (
    <div className="flex flex-col items-center gap-6 justify-center">
      {/* Buttons for Resume and Contact Side by Side */}
      <div className="flex gap-6">
        <a
          href="/Legaspi_John_Lloyd_Resume.pdf"
          target="_blank"
          className="flex items-center bg-dark text-light p-1.5 px-4 rounded-lg text-base font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
          download={true}
        >
          Resume
          <LinkArrow className="w-5 ml-1" />
        </a>
        
        <a
            href="mailto:jlloyd.legaspi@gmail.com"
            target="_blank"
            className="flex items-center bg-white text-dark dark:bg-dark dark:text-white p-1.5 px-4 rounded-lg text-base font-semibold border-2 border-transparent hover:bg-black hover:text-white hover:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white md:p-2 md:px-4 md:text-base"
            >
            Contact
            <MailIcon className="w-5 ml-2" />
        </a>


      </div>

      {/* Social Icons Below Resume and Contact Buttons */}
      <div className="flex gap-6 mt-2">
        <a
          href="https://github.com/lloydlegaspi"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6"
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <GithubIcon />
          </motion.div>
        </a>
        <a
          href="https://www.linkedin.com/in/john-lloyd-legaspi/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6"
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <LinkedInIcon />
          </motion.div>
        </a>
        <a
          href="https://www.instagram.com/lloydiiex/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6"
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <InstagramIcon />
          </motion.div>
        </a>
        <a
          href="https://www.facebook.com/legaspi.lloyd/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6"
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
            <FacebookIcon />
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
