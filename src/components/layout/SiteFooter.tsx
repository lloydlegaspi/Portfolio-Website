import Image from "next/image";
import Link from "next/link";
import { navigation, profile } from "@/content";
import { Icon } from "@/components/ui/Icon";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-8 md:flex-col md:text-center">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3 rounded-md md:flex-col"
        >
          <Image
            src="/images/logo/logo-jl-white-bg.png"
            alt=""
            width={44}
            height={44}
            className="rounded-md dark:hidden"
          />
          <Image
            src="/images/logo/logo-jl-black-bg.png"
            alt=""
            width={44}
            height={44}
            className="hidden rounded-md dark:block"
          />
          <span>
            <strong className="block text-sm">{profile.shortName}</strong>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Learning, building, and creating through technology.
            </span>
          </span>
        </Link>
        <div className="flex flex-col items-center gap-4">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-5 text-xs">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="focus-ring rounded underline-offset-4 hover:underline"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-4">
            {profile.socialLinks
              .filter((link) =>
                ["github", "linkedin", "email"].includes(link.kind),
              )
              .map((link) => (
                <a
                  key={link.kind}
                  href={link.href}
                  target={link.kind === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="focus-ring rounded"
                >
                  <Icon
                    name={link.kind as "github" | "linkedin" | "email"}
                    className="size-5"
                  />
                </a>
              ))}
          </div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {year} {profile.shortName}.<br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
