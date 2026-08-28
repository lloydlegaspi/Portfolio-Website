"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { MAX_CHAT_MESSAGE_LENGTH } from "@/lib/chat-validation";
import type { ChatMessage } from "@/types/portfolio";

const suggestions = [
  "What projects has Lloyd worked on?",
  "What are his technical skills?",
  "What experience does he have?",
];
const initialMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  text: "Hello! I'm Lloyd's portfolio assistant. I can answer factual questions about his skills, projects, education, and experience.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const launcher = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        launcher.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  async function send(text: string) {
    const message = text.trim();
    if (!message || loading) return;
    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), role: "user", text: message },
    ]);
    setInput("");
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data: unknown = await response.json();
      const reply =
        response.ok &&
        typeof data === "object" &&
        data !== null &&
        "reply" in data &&
        typeof data.reply === "string"
          ? data.reply
          : "The portfolio assistant is temporarily unavailable. Please try again later.";
      setMessages((current) => [
        ...current,
        { id: crypto.randomUUID(), role: "assistant", text: reply },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: "The portfolio assistant is temporarily unavailable. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    void send(input);
  }

  return (
    <>
      <button
        ref={launcher}
        type="button"
        onClick={() => setOpen(true)}
        className="focus-ring fixed bottom-6 right-6 z-40 inline-flex size-14 items-center justify-center rounded-full bg-black text-white shadow-xl dark:bg-white dark:text-black"
        aria-label="Open portfolio assistant"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span aria-hidden="true" className="text-2xl">
          ✦
        </span>
      </button>
      {open ? (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="chat-title"
          className="fixed bottom-24 right-6 z-50 w-[min(25rem,calc(100vw-3rem))] rounded-xl border border-gray-300 bg-light p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900"
        >
          <header className="flex items-center justify-between px-1 pb-2">
            <div>
              <h2 id="chat-title" className="text-sm font-semibold">
                Portfolio assistant
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Answers from this portfolio&apos;s content
              </p>
            </div>
            <button
              ref={closeButton}
              type="button"
              onClick={() => {
                setOpen(false);
                launcher.current?.focus();
              }}
              className="focus-ring rounded p-2"
              aria-label="Close portfolio assistant"
            >
              <Icon name="close" className="size-5" />
            </button>
          </header>
          <div
            className="h-72 space-y-3 overflow-y-auto rounded-lg border border-gray-200 bg-white p-3 dark:border-neutral-700 dark:bg-dark"
            aria-live="polite"
            aria-busy={loading}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[85%] whitespace-pre-wrap rounded-lg px-3 py-2 text-xs leading-relaxed ${message.role === "user" ? "bg-black text-white dark:bg-white dark:text-black" : "bg-gray-100 text-black dark:bg-neutral-800 dark:text-white"}`}
                >
                  {message.text}
                </p>
              </div>
            ))}
            {messages.length === 1 ? (
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => void send(suggestion)}
                    className="focus-ring rounded-full border border-gray-300 px-2 py-1 text-[11px] dark:border-gray-600"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            ) : null}
            {loading ? (
              <p className="text-xs text-gray-500">Thinking…</p>
            ) : null}
          </div>
          <form onSubmit={submit} className="mt-2 flex gap-2">
            <label htmlFor="chat-message" className="sr-only">
              Ask about Lloyd&apos;s portfolio
            </label>
            <input
              ref={inputRef}
              id="chat-message"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={MAX_CHAT_MESSAGE_LENGTH}
              disabled={loading}
              placeholder="Ask about Lloyd's work…"
              className="focus-ring min-w-0 flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-black dark:border-gray-600"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="focus-ring rounded-md bg-black p-2 text-white disabled:opacity-50 dark:bg-white dark:text-black"
              aria-label="Send message"
            >
              <Icon name="send" className="size-5" />
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
