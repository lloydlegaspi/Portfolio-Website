import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./Hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "", children }) => {
  const router = useRouter();
  return (
    <div className="relative group">
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span
          className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? "w-full" : "w-0"}`}
        >
          &nbsp;
        </span>
      </Link>
      {children}
    </div>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`bg-light h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Track hover state for 'About' and sub-navbar
  const timeoutRef = useRef(null);

  const handleHoverStart = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(true); // Show sub-navbar
  };

  const handleHoverEnd = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (!isHovered) {
        setIsHovered(false); // Hide sub-navbar if not hovered
      }
    }, 200); // Delay to allow time for sub-navbar hover
  };

  const handleSubNavHover = () => setIsHovered(true); // Keep showing sub-navbar on sub-navbar hover
  const handleSubNavLeave = () => setIsHovered(false); // Hide sub-navbar on leave if no other hover

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsHovered(false); // Reset hover when menu is opened
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="z-50 w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative lg:px-16 md:px-12 sm:px-8">
      {/* Mobile Menu Button */}
      <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
        ></span>
      </button>

      {/* Desktop Navigation */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex justify-center flex-grow gap-8">
          <CustomLink href="/" title="Home" />
          <div
            className="relative group"
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
          >
            <CustomLink href="/about" title="About">
              {/* Sub-navbar for About */}
              <div
                className={`absolute left-0 mt-2 bg-white dark:bg-gray-800 p-2 shadow-lg rounded-md ${isHovered ? "block" : "hidden"}`}
                onMouseEnter={handleSubNavHover}
                onMouseLeave={handleSubNavLeave}
              >
                <Link href="/about#about-me" className="block py-1 px-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                  About Me
                </Link>
                <Link href="/about#experience" className="block py-1 px-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Experience
                </Link>
                <Link href="/about#education" className="block py-1 px-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Education
                </Link>
              </div>
            </CustomLink>
          </div>
          <CustomLink href="/projects" title="Projects" />
        </nav>

        {/* Theme Toggle */}
        <nav className="flex items-center justify-center gap-6">
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center gap-6">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink href="/about" title="About" toggle={handleClick} />
            <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
            <CustomMobileLink href="/articles" title="Articles" toggle={handleClick} />
          </nav>

          <nav className="flex items-center justify-center flex-wrap gap-4 mt-6">
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
            </button>
          </nav>
        </motion.div>
      )}

      {/* Logo placed on the left for large screens, right for mobile */}
      <div className="absolute top-4 left-40 lg:left-auto lg:right-4">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;

