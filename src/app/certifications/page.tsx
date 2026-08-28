import type { Metadata } from "next";
import { CertificationCard } from "@/components/certifications/CertificationCard";
import { certifications, profile } from "@/content";
import type { Certification } from "@/types/portfolio";

const description =
  "Professional certifications and certificates in cloud, data engineering, analytics, automation, and AI.";

export const metadata: Metadata = {
  title: "Certifications",
  description,
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: `Certifications | ${profile.shortName}`,
    description,
    url: "/certifications",
  },
};

const certificationGroups = certifications.reduce<Map<string, Certification[]>>(
  (groups, certification) => {
    const group = groups.get(certification.issuer) ?? [];
    group.push(certification);
    groups.set(certification.issuer, group);
    return groups;
  },
  new Map(),
);

export default function CertificationsPage() {
  return (
    <div className="site-container py-24 sm:py-16">
      <p className="section-kicker">Certifications</p>
      <h1 className="text-5xl font-bold tracking-[-0.045em] sm:text-4xl">
        Credentials and continued learning.
      </h1>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
        A verified record of certifications and certificates across cloud, data,
        analytics, automation, and related technical work.
      </p>
      <div className="mt-16 space-y-16">
        {[...certificationGroups].map(([issuer, items], index) => {
          const headingId = `certification-group-${index + 1}`;

          return (
            <section key={issuer} aria-labelledby={headingId}>
              <div className="flex items-end justify-between gap-6 border-b border-neutral-200 pb-4 dark:border-neutral-800">
                <h2 id={headingId} className="text-xl font-semibold">
                  {issuer}
                </h2>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  {items.length}{" "}
                  {items.length === 1 ? "credential" : "credentials"}
                </p>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-5 xl:grid-cols-2 sm:grid-cols-1">
                {items.map((certification) => (
                  <CertificationCard
                    key={certification.id}
                    certification={certification}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
