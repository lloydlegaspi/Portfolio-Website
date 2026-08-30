import Image from "next/image";
import type { CaseStudyFigureData } from "@/types/case-study";

interface CaseStudyFigureProps {
  figure: CaseStudyFigureData;
  eager?: boolean;
  sizes?: string;
}

export function CaseStudyFigure({
  figure,
  eager = false,
  sizes = "(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) calc(100vw - 64px), (max-width: 1320px) calc(100vw - 64px), 1256px",
}: CaseStudyFigureProps) {
  return (
    <figure className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
      <a
        href={figure.src}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open full-resolution ${figure.title ?? "case study image"} in a new tab`}
        className="focus-ring block focus-visible:ring-inset focus-visible:ring-offset-0"
      >
        <Image
          src={figure.src}
          width={figure.width}
          height={figure.height}
          alt={figure.alt}
          sizes={sizes}
          preload={eager}
          className="h-auto w-full object-contain transition-opacity hover:opacity-95"
        />
      </a>
      <figcaption className="border-t border-neutral-200 px-4 py-3 text-xs leading-5 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300">
        {figure.title ? (
          <span className="block font-semibold text-neutral-900 dark:text-neutral-100">
            {figure.title}
          </span>
        ) : null}
        <span className={figure.title ? "mt-1 block" : undefined}>
          {figure.caption}
        </span>
      </figcaption>
    </figure>
  );
}
