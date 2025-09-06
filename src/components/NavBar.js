import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./Hooks/useThemeSwitcher";

const NAV_ITEMS = [
  { href: "/", title: "Home" },
  { href: "/#about", title: "About" },
  { href: "/#experience", title: "Experience" },
  { href: "/#education-certificates", title: "Education" },
  { href: "/#projects", title: "Projects" },
];

const CustomLink = ({ href, title, className = "", children, isActive = false }) => {
  return (
    <div className="relative group">
      <Link
        href={href}
        className={`${className} relative group focus:outline-none focus:ring-0`}
        onClick={(e) => e.currentTarget.blur()}
        onMouseDown={(e) => e.preventDefault()}
      >
        {title}
        <span
          className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${isActive ? "w-full" : "w-0"}`}
        >
          &nbsp;
        </span>
      </Link>
      {children}
    </div>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle, isActive = false }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  const handleButtonClick = (e) => {
    handleClick();
    // blur the button so focus ring doesn't persist
    e.currentTarget.blur();
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2 focus:outline-none focus:ring-0`}
      onClick={handleButtonClick}
    >
      {title}
      <span
        className={`bg-light h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${isActive ? "w-full" : "w-0"} dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 
  const timeoutRef = useRef(null);
  const router = useRouter();
  const [activeHref, setActiveHref] = useState(router.asPath || "/");

  // Dynamic sizes for the theme toggle when the header is scrolled
  const themeBtnClass = isScrolled ? "p-0.5 w-6 h-6" : "p-0.5 w-7 h-7";
  const themeIconSize = isScrolled ? "w-5 h-5" : "w-6 h-6";

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

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ids = [
      "home",
      "about",
      "experience",
      "education-certificates",
      "projects",
    ];

    const getHrefForId = (id) => (id === "home" ? "/" : `/#${id}`);

    // Fallback to a scroll-based detector: pick the section whose vertical center
    // is closest to the viewport center. This avoids Home staying active when
    // the hero is scrolled away.
    let rafId = null;

    const updateActiveByCenter = () => {
      const centers = ids
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const distance = Math.abs(window.innerHeight / 2 - center);
          return { id, distance };
        })
        .filter(Boolean);

      if (!centers.length) return;

      const closest = centers.reduce((a, b) => (a.distance < b.distance ? a : b));
      setActiveHref(getHrefForId(closest.id));
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActiveByCenter);
    };

    // run once to initialize (sections may not be mounted yet; safe no-ops)
    updateActiveByCenter();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Sync activeHref with route changes so separate pages (e.g. /projects) highlight correctly
  useEffect(() => {
    if (router.pathname === "/projects") {
      setActiveHref("/#projects");
      return;
    }
    // default to router.asPath (handles direct hash navigations)
    if (router.asPath) {
      setActiveHref(router.asPath);
    }
  }, [router.asPath, router.pathname]);

  return (
    <header className={`z-50 w-full text-xs font-medium fixed top-0 left-0 dark:text-light border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out ${
      isScrolled ? "py-3 bg-light/100 dark:bg-dark/100" : "py-6 bg-light/60 dark:bg-dark/60 backdrop-blur-sm"
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
      {/* Logo on the left */}
      <div className={`transition-all duration-300 ease-in-out mr-6 ${isScrolled ? "-mt-1" : "-mt-2"}`}>
        <Logo compact={isScrolled} />
      </div>

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
  <div className="flex-1 flex justify-between items-center lg:hidden">
        <nav className="flex justify-center flex-grow gap-8">
          {NAV_ITEMS.map((item) => (
            <CustomLink
              key={item.href}
              href={item.href}
              title={item.title}
              isActive={activeHref === item.href}
            />
          ))}
        </nav>

        {/* Theme Toggle */}
        <nav className="flex items-center justify-center gap-4">
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`flex items-center justify-center rounded-full ${themeBtnClass} ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            aria-label="Toggle theme"
          >
            {mode === "dark" ? <SunIcon className={`fill-dark ${themeIconSize}`} /> : <MoonIcon className={`fill-dark ${themeIconSize}`} />}
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
            {NAV_ITEMS.map((item) => (
              <CustomMobileLink
                key={item.href}
                href={item.href}
                title={item.title}
                toggle={handleClick}
                isActive={activeHref === item.href}
              />
            ))}
          </nav>

          <nav className="flex items-center justify-center flex-wrap gap-4 mt-6">
              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full ${themeBtnClass} ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                aria-label="Toggle theme"
              >
                {mode === "dark" ? <SunIcon className={`fill-dark ${themeIconSize.replace(/w-/, 'w-').replace(/h-/, 'h-')}`} /> : <MoonIcon className={`fill-dark ${themeIconSize}`} />}
              </button>
          </nav>
        </motion.div>
      )}

  </div>
  {/* horizontal border placed via header classes (border-b) */}
    </header>
  );
};

export default NavBar;

