"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content";
import { Icon } from "@/components/ui/Icon";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function SiteHeader() {
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-light/90 text-xs font-medium backdrop-blur dark:border-gray-800 dark:bg-dark/90 dark:text-light">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          aria-label="John Lloyd Legaspi, home"
          className="focus-ring rounded-md"
        >
          <Image
            src="/images/logo/logo-jl-white-bg.png"
            alt=""
            width={44}
            height={44}
            className="size-11 rounded-md dark:hidden"
            priority
          />
          <Image
            src="/images/logo/logo-jl-black-bg.png"
            alt=""
            width={44}
            height={44}
            className="hidden size-11 rounded-md dark:block"
            priority
          />
        </Link>
        <nav aria-label="Primary navigation" className="lg:hidden">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring rounded-sm underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
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
            <Icon name={open ? "close" : "menu"} className="size-6" />
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-navigation"
          className="hidden border-t border-gray-700 bg-dark px-6 py-6 text-light dark:bg-light dark:text-dark lg:block"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    ref={index === 0 ? firstLink : undefined}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring block rounded px-2 py-2 text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 px-2">
            <ThemeToggle inverse />
          </div>
        </div>
      ) : null}
    </header>
  );
}
