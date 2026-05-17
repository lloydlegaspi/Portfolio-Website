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
      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* Desktop layout */}
        <div className="flex md:hidden items-center justify-between gap-12">
          {/* Left: Logo and Info */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link href="/" aria-label="Home" className="flex items-center gap-3">
              <Image
                src="/images/logo/logo-jl-white-bg.png"
                alt="Logo light"
                width={48}
                height={48}
                className="block h-12 w-12 rounded-md object-cover dark:hidden"
              />

              <Image
                src="/images/logo/logo-jl-black-bg.png"
                alt="Logo dark"
                width={48}
                height={48}
                className="hidden h-12 w-12 rounded-md object-cover dark:block"
              />

              <div>
                <div className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                  John Lloyd Legaspi
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Learning, building, and creating through technology.
                </div>
              </div>
            </Link>
          </div>

          {/* Center: Navigation Links and Social Icons */}
          <div className="flex-1 flex flex-col items-center gap-3">
            <nav aria-label="Footer navigation">
              <ul className="flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-gray-900 dark:hover:text-white whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <a
                href="https://github.com/lloydlegaspi"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                <GithubIcon className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/john-lloyd-legaspi/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>

              <a
                href="mailto:jlloyd.legaspi@gmail.com"
                aria-label="Email"
                className="transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right: Copyright */}
          <div className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap flex-shrink-0">
            © 2025 John Lloyd Legaspi.
            <br />
            All rights reserved.
          </div>
        </div>

        {/* Mobile layout */}
        <div className="hidden md:flex flex-col items-center text-center gap-4">
          <Link href="/" aria-label="Home" className="flex flex-col items-center gap-2">
            <Image
              src="/images/logo/logo-jl-white-bg.png"
              alt="Logo light"
              width={48}
              height={48}
              className="block h-12 w-12 rounded-md object-cover dark:hidden"
            />

            <Image
              src="/images/logo/logo-jl-black-bg.png"
              alt="Logo dark"
              width={48}
              height={48}
              className="hidden h-12 w-12 rounded-md object-cover dark:block"
            />

            <div>
              <div className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                John Lloyd Legaspi
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Learning, building, and creating through technology.
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
            <a
              href="https://github.com/lloydlegaspi"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              <GithubIcon className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/john-lloyd-legaspi/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>

            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>

            <a
              href="mailto:jlloyd.legaspi@gmail.com"
              aria-label="Email"
              className="transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>

          <div className="text-xs text-gray-500 dark:text-gray-400">
            © 2025 John Lloyd Legaspi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

