import Image from "next/image";
import type { CaseStudyFigureData } from "@/types/case-study";

interface CaseStudyFigureProps {
  figure: CaseStudyFigureData;
  eager?: boolean;
}

export function CaseStudyFigure({
  figure,
  eager = false,
}: CaseStudyFigureProps) {
  return (
    <figure className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
      <Image
        src={figure.src}
        width={figure.width}
        height={figure.height}
        alt={figure.alt}
        sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) calc(100vw - 64px), (max-width: 1536px) calc(100vw - 96px), 1344px"
        preload={eager}
        className="h-auto w-full object-contain"
      />
      <figcaption className="border-t border-neutral-200 px-4 py-3 text-xs leading-5 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300">
        {figure.caption}
      </figcaption>
    </figure>
  );
}
