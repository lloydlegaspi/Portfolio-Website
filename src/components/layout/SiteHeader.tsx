"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigation } from "@/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLink.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/95 text-xs font-medium backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-5">
        <Link
          href="/"
          aria-label="John Lloyd Legaspi, home"
          className="focus-ring rounded-sm text-lg font-black tracking-[-0.08em]"
        >
          JL
        </Link>
        <nav aria-label="Primary navigation" className="lg:hidden">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => {
              const active =
                (item.href === "/" && pathname === "/") ||
                (item.href === "/#projects" && pathname === "/projects");

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`focus-ring rounded-sm border-b py-2 transition-colors hover:border-current ${active ? "border-current font-semibold" : "border-transparent"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <div className="lg:hidden">
            <ThemeToggle />
          </div>
          <button
            ref={menuButton}
            type="button"
            className="focus-ring hidden size-10 items-center justify-center rounded-md lg:inline-flex"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-navigation"
          className="hidden border-t border-neutral-200 bg-white px-5 py-5 dark:border-neutral-800 dark:bg-neutral-950 lg:block"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    ref={index === 0 ? firstLink : undefined}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring block rounded px-2 py-2.5 text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 border-t border-neutral-200 px-2 pt-4 dark:border-neutral-800">
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </header>
  );
}
