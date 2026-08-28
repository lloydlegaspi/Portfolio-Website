import Image from "next/image";
import Link from "next/link";
import { navigation, profile } from "@/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="site-container flex items-center justify-between gap-8 py-8 md:flex-col md:text-center">
        <Link
          href="/"
          className="focus-ring flex items-center gap-4 rounded-md"
        >
          <span>
            <Image
              src="/images/logo/logo-jl-white-bg.png"
              alt="John Lloyd Legaspi logo"
              width={48}
              height={48}
              className="size-12 object-contain dark:hidden"
            />
            <Image
              src="/images/logo/logo-jl-black-bg.png"
              alt="John Lloyd Legaspi logo"
              width={48}
              height={48}
              className="hidden size-12 object-contain dark:block"
            />
          </span>
          <span className="text-left">
            <strong className="block text-sm">{profile.shortName}</strong>
            <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
              {profile.headline}
            </span>
          </span>
        </Link>
        <nav aria-label="Footer navigation" className="lg:hidden">
          <ul className="flex flex-wrap justify-center gap-5 text-[11px]">
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
        <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
          © {year} {profile.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
