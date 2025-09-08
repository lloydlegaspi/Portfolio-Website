import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import {
  GithubIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  MailIcon,
} from "./Icons";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#education', label: 'Education' },
  { href: '/#contact', label: 'Contact' },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-transparent">
  <div className="max-w-6xl sm:max-w-full mx-auto px-6 py-8 flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center sm:items-center md:items-start lg:items-start xl:items-start 2xl:items-start justify-between sm:justify-center md:justify-between lg:justify-between xl:justify-between 2xl:justify-between gap-6 text-xs text-gray-700 dark:text-gray-300">

        {/* Left: Logo + Name (explicit classes across breakpoints) */}
  <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center sm:items-center md:items-start lg:items-start xl:items-start 2xl:items-start justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start text-center sm:text-left md:text-left lg:text-left xl:text-left 2xl:text-left gap-2">
          <Link href="/" aria-label="Home" className="flex items-center gap-3 justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
            {/* Light mode logo (visible only in light mode) */}
            <Image
              src="/images/logo/logo-jl-white-bg.png"
              alt="Logo light"
              width={48}
              height={48}
              className="block sm:block md:block lg:block xl:block 2xl:block dark:hidden sm:dark:hidden md:dark:hidden lg:dark:hidden xl:dark:hidden 2xl:dark:hidden w-12 h-12 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-12 2xl:h-12 rounded-md object-cover mx-auto sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0"
            />

            {/* Dark mode logo (visible only in dark mode) */}
            <Image
              src="/images/logo/logo-jl-black-bg.png"
              alt="Logo dark"
              width={48}
              height={48}
              className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden dark:block sm:dark:block md:dark:block lg:dark:block xl:dark:block 2xl:dark:block w-12 h-12 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-12 2xl:h-12 rounded-md object-cover mx-auto sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0"
            />
            <div>
              <div className="font-semibold">John Lloyd Legaspi</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Learning, solving, and creating through technology.</div>
            </div>
          </Link>
        </div>

        {/* Center: Navigation links (explicit widths & alignment) */}
        <nav className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 flex justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center 2xl:justify-center">
          <ul className="flex flex-wrap justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center 2xl:justify-center gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Social icons (explicit layout across breakpoints) */}
        <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 flex flex-col items-center sm:items-center md:items-end lg:items-end xl:items-end 2xl:items-end gap-3">
          <div className="flex items-center gap-4 justify-center sm:justify-center md:justify-end lg:justify-end xl:justify-end 2xl:justify-end">
            <a
              href="https://github.com/lloydlegaspi"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <GithubIcon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/john-lloyd-legaspi/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <LinkedInIcon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6" />
            </a>

            <a
              href="mailto:jlloyd.legaspi@gmail.com"
              aria-label="Email"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <MailIcon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6" />
            </a>

            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <InstagramIcon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6" />
            </a>

            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FacebookIcon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6" />
            </a>
          </div>

          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center sm:text-right md:text-right lg:text-right xl:text-right 2xl:text-right">
            © 2025 John Lloyd Legaspi. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

