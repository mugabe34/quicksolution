"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "250790401735";

const FAQ = [
  {
    q: "What services do you offer?",
    a: "Two sides of one team: China services (sourcing products, visas & passports, hotels, airport transfers, travel guidance) and studio services (photography, videography, live streaming and recording).",
  },
  {
    q: "Can you help with a China visa?",
    a: "Yes. We assist with Chinese visas and passport help, and can guide travel and stays while you're there.",
  },
  {
    q: "How do I start a request?",
    a: "Scroll to \"Start a Request\" or pick a service card, then tell us what you need. It takes under two minutes.",
  },
  {
    q: "Do you shoot events or weddings?",
    a: "Yes. Weddings, events, studio photoshoots, plus live streaming and recording.",
  },
];

export default function SabinBot() {
  const [open, setOpen] = useState(false);
  const [thread, setThread] = useState([
    { from: "bot", text: "Hi, I'm SabinQuick 👋 Ask me anything about ordering with us." },
  ]);

  const ask = (item) => {
    setThread((t) => [...t, { from: "user", text: item.q }, { from: "bot", text: item.a }]);
  };

  return (
    <div className="fixed bottom-6 left-5 z-40 sm:bottom-8 sm:left-8">
      {open && (
        <div className="mb-3 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-xl border border-navy-900/10 bg-white shadow-card">
          <div className="flex items-center justify-between bg-navy-900 px-5 py-4">
            <div>
              <p className="font-display text-sm font-bold text-white">SabinQuick</p>
              <p className="text-xs text-white/60">Quick answers, no waiting</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="max-h-64 space-y-3 overflow-y-auto px-5 py-4">
            {thread.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.from === "bot"
                    ? "bg-cloud text-ink"
                    : "ml-auto bg-blue-brand text-white"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="border-t border-navy-900/8 px-5 py-4">
            <p className="mb-2 text-xs font-medium text-slate-soft">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {FAQ.map((item) => (
                <button
                  key={item.q}
                  type="button"
                  onClick={() => ask(item)}
                  className="rounded-lg border border-navy-900/12 px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-blue-brand hover:text-blue-brand"
                >
                  {item.q}
                </button>
              ))}
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block rounded-lg bg-blue-brand px-4 py-2.5 text-center text-xs font-semibold text-white hover:bg-blue-soft"
            >
              Talk to a person on WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close SabinQuick chat" : "Open SabinQuick chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white shadow-lift transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.8A8 8 0 1121 12z" />
          <circle cx="9" cy="12" r="0.8" fill="currentColor" />
          <circle cx="12" cy="12" r="0.8" fill="currentColor" />
          <circle cx="15" cy="12" r="0.8" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}
