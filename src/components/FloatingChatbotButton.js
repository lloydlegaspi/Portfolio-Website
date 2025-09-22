"use client";
import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import Chatbot to avoid including it in SSR bundle
const Chatbot = dynamic(() => import("./Chatbot"), { ssr: false });

export default function FloatingChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <div aria-live="polite">
      {/* Chat panel */}
      {open && (
        <div className="fixed right-6 bottom-20 z-50 w-80 md:w-96">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <Suspense fallback={<div className="p-4 bg-dark dark:bg-light text-light dark:text-dark">Loading...</div>}>
              <Chatbot />
            </Suspense>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        aria-expanded={open}
        aria-controls="chat-panel"
        onClick={() => setOpen((s) => !s)}
        className="fixed right-6 bottom-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl bg-primary dark:bg-light hover:bg-primary/80 dark:hover:bg-light/80 text-light dark:text-dark transition-colors"
        title={open ? "Close chat" : "Open chat"}
      >
        {!open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.518 0-2.94-.27-4.235-.76L3 21l1.76-4.763C4.27 14.94 4 13.518 4 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>
    </div>
  );
}
