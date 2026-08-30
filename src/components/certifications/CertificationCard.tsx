import { Icon } from "@/components/ui/Icon";
import type { Certification } from "@/types/portfolio";

export function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  const href = certification.credentialUrl ?? certification.file;
  const content = (
    <>
      <div className="flex items-start justify-between gap-5">
        <div>
          <h3 className="text-sm font-semibold leading-6">
            {certification.title}
          </h3>
          <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
            {certification.issuer}
          </p>
          {certification.detail ? (
            <p className="mt-1 text-[11px] leading-5 text-neutral-500 dark:text-neutral-400">
              {certification.detail}
            </p>
          ) : null}
        </div>
        {certification.issued ? (
          <time
            dateTime={certification.issued}
            className="shrink-0 text-[11px] text-neutral-500 dark:text-neutral-400"
          >
            {formatIssuedDate(certification.issued)}
          </time>
        ) : null}
      </div>
      {certification.credentialId ? (
        <p className="mt-5 text-[11px] text-neutral-500 dark:text-neutral-400">
          Credential ID: {certification.credentialId}
        </p>
      ) : null}
      {href ? (
        <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold">
          {certification.credentialUrl ? "View credential" : "View certificate"}
          <Icon
            name={certification.credentialUrl ? "external" : "document"}
            className="size-4"
          />
        </span>
      ) : null}
    </>
  );
  const className =
    "flex h-full flex-col rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950";

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`focus-ring transition-colors hover:border-black dark:hover:border-white ${className}`}
    >
      {content}
    </a>
  ) : (
    <article className={className}>{content}</article>
  );
}

function formatIssuedDate(issued: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(issued));
}
