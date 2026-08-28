"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/content";
import { Icon } from "@/components/ui/Icon";

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
      <div className="grid grid-cols-3 gap-12 md:grid-cols-1">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let&apos;s connect.</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            I&apos;m open to collaborations, internships, job offers, and
            exciting opportunities.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a
              className="focus-ring flex items-center gap-2 rounded"
              href={`mailto:${profile.email}`}
            >
              <Icon name="email" className="size-5" />
              {profile.email}
            </a>
            <p className="text-gray-600 dark:text-gray-300">{profile.phone}</p>
            <p className="text-gray-600 dark:text-gray-300">
              {profile.location}
            </p>
          </div>
        </div>
        <form
          onSubmit={submit}
          className="col-span-2 rounded-xl border border-gray-200 bg-white p-7 shadow-sm dark:border-neutral-700 dark:bg-neutral-900"
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
          <label className="mt-5 block text-sm font-semibold" htmlFor="email">
            Email{" "}
            <span aria-hidden="true" className="text-red-600">
              *
            </span>
            <input
              className="form-field"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </label>
          <label className="mt-5 block text-sm font-semibold" htmlFor="message">
            Message{" "}
            <span aria-hidden="true" className="text-red-600">
              *
            </span>
            <textarea
              className="form-field min-h-36 resize-y"
              id="message"
              name="message"
              required
            />
          </label>
          <button
            type="submit"
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md bg-black px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-black"
          >
            <Icon name="send" className="size-5" />
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
    <label className="block text-sm font-semibold" htmlFor={name}>
      {label}{" "}
      <span aria-hidden="true" className="text-red-600">
        *
      </span>
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
