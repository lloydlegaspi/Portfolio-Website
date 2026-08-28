"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

type Theme = "dark" | "light";

export function ThemeToggle({ inverse = false }: { inverse?: boolean }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial: Theme =
      stored === "dark" || stored === "light"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    // Theme preference is an external browser setting, synchronized after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`focus-ring inline-flex size-9 items-center justify-center rounded-full ${inverse ? "bg-white text-black" : "bg-black text-white dark:bg-white dark:text-black"}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} className="size-5" />
    </button>
  );
}
