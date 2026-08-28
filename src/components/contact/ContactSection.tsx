"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { profile } from "@/content";

export function ContactSection() {
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name =
      `${String(data.get("firstName") ?? "")} ${String(data.get("lastName") ?? "")}`.trim();
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    if (!name || !email || !message) {
      setStatus("Please complete every required field.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name}\nReply to: ${email}`,
    );
    setStatus(
      "Your email app is opening. You can review the message before sending it.",
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-shell scroll-mt-24">
      <div className="grid grid-cols-[0.8fr_1.2fr] gap-20 lg:grid-cols-1 lg:gap-12">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let&apos;s connect.</h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            I&apos;m open to collaborations, internships, job offers, and
            exciting opportunities.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="sr-only">Email</dt>
              <dd>
                <a
                  className="focus-ring inline-flex items-center gap-3 rounded-sm"
                  href={`mailto:${profile.email}`}
                >
                  <Icon name="email" className="size-4" />
                  {profile.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="font-semibold">T</dt>
              <dd className="text-neutral-600 dark:text-neutral-300">
                {profile.phone}
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="font-semibold">L</dt>
              <dd className="text-neutral-600 dark:text-neutral-300">
                {profile.location}
              </dd>
            </div>
          </dl>
          <SocialLinks className="mt-8" />
        </div>
        <form
          onSubmit={submit}
          className="w-full max-w-3xl justify-self-end rounded-lg border border-neutral-200 bg-white p-7 dark:border-neutral-800 dark:bg-neutral-950 lg:max-w-none sm:p-5"
          noValidate
        >
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-1">
            <Field
              label="First name"
              name="firstName"
              autoComplete="given-name"
            />
            <Field
              label="Last name"
              name="lastName"
              autoComplete="family-name"
            />
          </div>
          <label className="mt-5 block text-xs font-semibold" htmlFor="email">
            Email <RequiredMark />
            <input
              className="form-field"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </label>
          <label className="mt-5 block text-xs font-semibold" htmlFor="message">
            Message <RequiredMark />
            <textarea
              className="form-field min-h-36 resize-y"
              id="message"
              name="message"
              required
            />
          </label>
          <button
            type="submit"
            className="focus-ring mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-black px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            <Icon name="send" className="size-4" />
            Prepare email
          </button>
          {status ? (
            <p role="status" aria-live="polite" className="mt-4 text-sm">
              {status}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function RequiredMark() {
  return (
    <span aria-hidden="true" className="text-neutral-500">
      *
    </span>
  );
}

function Field({
  label,
  name,
  autoComplete,
}: {
  label: string;
  name: string;
  autoComplete: string;
}) {
  return (
    <label className="block text-xs font-semibold" htmlFor={name}>
      {label} <RequiredMark />
      <input
        className="form-field"
        id={name}
        name={name}
        type="text"
        autoComplete={autoComplete}
        required
      />
    </label>
  );
}
