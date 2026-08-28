"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Icon } from "@/components/ui/Icon";
import type { Project } from "@/types/portfolio";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  returnFocusTo: HTMLButtonElement | null;
}

export function ProjectModal({
  project,
  onClose,
  returnFocusTo,
}: ProjectModalProps) {
  const closeButton = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    closeButton.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const elements = dialog.current?.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!elements?.length) return;
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      returnFocusTo?.focus();
    };
  }, [onClose, returnFocusTo]);

  if (!project.image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="relative w-full max-w-5xl rounded-xl bg-white p-4 shadow-2xl dark:bg-neutral-900"
      >
        <div className="mb-3 flex items-center justify-between gap-4">
          <h2 id="project-dialog-title" className="text-lg font-semibold">
            {project.title}
          </h2>
          <button
            ref={closeButton}
            type="button"
            onClick={onClose}
            aria-label="Close project image"
            className="focus-ring rounded-full p-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
          >
            <Icon name="close" className="size-6" />
          </button>
        </div>
        <div className="relative h-[75vh] max-h-[760px]">
          <Image
            src={project.image}
            alt={`${project.title} enlarged project preview`}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
