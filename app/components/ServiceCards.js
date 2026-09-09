"use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "250790401735";
const CONTACT_EMAIL = "sabinquicksolution@gmail.com";

const STEPS = ["Choose", "Details", "Contact", "Review"];

const CARDS = [
  {
    id: "china",
    kicker: "China services",
    headline: "Need help with China?",
    subtext: "Tell us what you're looking for and we'll get you sorted.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3l7 3v5c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6l7-3z" />
        <path d="M8.5 11.5l2.5 2.5 4.5-4.5" />
      </svg>
    ),
    accentClass: "from-blue-brand to-blue-soft",
    question: "What do you need help with?",
    options: [
      "Buying products from China",
      "Chinese visa assistance",
      "Passport assistance",
      "Finding accommodation and hotels in China",
      "Airport to hotel transportation",
      "Travel and stay guidance",
      "Something else China related",
    ],
  },
  {
    id: "studio",
    kicker: "Studio services",
    headline: "Looking to capture a moment?",
    subtext: "Pick what you need and we'll follow up.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 8h3l2-3h6l2 3h3a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" />
        <circle cx="12" cy="13" r="3.5" />
      </svg>
    ),
    accentClass: "from-navy-700 to-navy-900",
    question: "What service are you interested in?",
    options: [
      "Wedding photography and videography",
      "Events photography and videography",
      "Studio photoshoot",
      "Live streaming",
      "Live recording",
      "Sound and sonolisation",
    ],
  },
];

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function isValidPhone(v) {
  return /^[+0-9\s-]{7,16}$/.test(v);
}

function buildMessage(card, selected, extra, email, phone) {
  const items = card.options.filter((_, i) => selected.includes(i));
  const lines = [
    `Hi Sabin Quick Solution, I need help with: ${items.length ? items.join(", ") : card.kicker}`,
    extra ? `Additional info: ${extra}` : null,
    `Email: ${email || "Not provided"}`,
    `Phone: ${phone || "Not provided"}`,
    `Service: ${card.kicker}`,
  ];
  return lines.filter(Boolean).join("\n");
}

export default function ServiceCards() {
  const [openCard, setOpenCard] = useState(null);

  const open = CARDS.find((c) => c.id === openCard) || null;

  return (
    <section id="services" className="bg-cloud py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-brand">
            What we&apos;re here for
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Two sides, one team.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-slate-soft">
            Need help from China or with the studio? Open a card, pick what you need, and your
            request is sent straight to us.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="relative overflow-hidden rounded-xl border border-navy-900/8 bg-white shadow-card"
            >
              <div
                aria-hidden
                className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r opacity-90 ${card.accentClass}`}
              />
              <div className="p-7 sm:p-8">
                <span
                  className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ${card.accentClass}`}
                >
                  {card.icon}
                  {card.kicker}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-ink">
                  {card.headline}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-soft">{card.subtext}</p>
                <button
                  type="button"
                  onClick={() => setOpenCard(card.id)}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-navy-800"
                >
                  Get started
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {open && <ServiceModal card={open} onClose={() => setOpenCard(null)} />}
    </section>
  );
}

function ServiceModal({ card, onClose }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState([]);
  const [extra, setExtra] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const toggleOption = (idx) => {
    setSelected((s) => (s.includes(idx) ? s.filter((x) => x !== idx) : [...s, idx]));
    setErrors((e) => ({ ...e, options: undefined }));
  };

  const goNext = () => {
    const errs = {};
    if (step === 0 && selected.length === 0) errs.options = "Pick at least one service to continue.";
    if (step === 2) {
      const hasEmail = isValidEmail(email.trim());
      const hasPhone = isValidPhone(phone.trim());
      if (!hasEmail && !hasPhone) errs.contact = "Add at least a valid email or phone number.";
      else if (!hasEmail && email.trim() && !isValidEmail(email.trim())) errs.email = "Enter a valid email address.";
      else if (!hasPhone && phone.trim() && !isValidPhone(phone.trim())) errs.phone = "Enter a valid phone number.";
    }
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const message = buildMessage(card, selected, extra.trim(), email.trim(), phone.trim());
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Request: ${card.kicker}`
  )}&body=${encodeURIComponent(message)}`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-navy-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${card.kicker} request`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-xl bg-white shadow-lift sm:rounded-xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-navy-900/8 bg-white/95 px-6 py-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-white">
              {card.icon}
            </span>
            <div>
              <p className="font-display text-sm font-bold text-ink">{card.kicker}</p>
              <p className="text-xs text-slate-soft">
                Step {step + 1} of {STEPS.length}: {STEPS[step]}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close request form"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-soft transition-colors hover:bg-cloud hover:text-ink"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6">
          {step === 0 && (
            <div>
              <h3 className="font-display text-lg font-bold text-ink">{card.question}</h3>
              <p className="mt-1 text-sm text-slate-soft">Select all that apply.</p>
              <div className="mt-4 space-y-2">
                {card.options.map((opt, idx) => {
                  const checked = selected.includes(idx);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleOption(idx)}
                      aria-pressed={checked}
                      className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${
                        checked
                          ? "border-blue-brand bg-blue-mist text-blue-brand"
                          : "border-navy-900/10 text-ink hover:border-blue-soft/60 hover:bg-cloud"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md border text-xs ${
                          checked ? "border-blue-brand bg-blue-brand text-white" : "border-navy-900/20 bg-white"
                        }`}
                      >
                        {checked && (
                          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
              {errors.options && <p role="alert" className="mt-3 text-xs font-medium text-red-600">{errors.options}</p>}
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="font-display text-lg font-bold text-ink">Anything else we should know?</h3>
              <p className="mt-1 text-sm text-slate-soft">
                Optional. Add dates, budget, or any detail you think we need.
              </p>
              <textarea
                value={extra}
                onChange={(e) => setExtra(e.target.value)}
                rows={5}
                placeholder="Anything you want us to know..."
                className="mt-4 w-full rounded-lg border border-navy-900/12 bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-slate-soft/60 focus:border-blue-brand"
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="font-display text-lg font-bold text-ink">How should we reach you?</h3>
              <p className="mt-1 text-sm text-slate-soft">Add an email or phone number so we can follow up.</p>
              <div className="mt-4 space-y-4">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink">Email address</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={`w-full rounded-lg border bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-slate-soft/60 focus:border-blue-brand ${
                      errors.email ? "border-red-400" : "border-navy-900/12"
                    }`}
                  />
                  {errors.email && <span role="alert" className="mt-1.5 block text-xs font-medium text-red-600">{errors.email}</span>}
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink">Phone / WhatsApp number</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 078xxxxxxx"
                    className={`w-full rounded-lg border bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-slate-soft/60 focus:border-blue-brand ${
                      errors.phone ? "border-red-400" : "border-navy-900/12"
                    }`}
                  />
                  {errors.phone && <span role="alert" className="mt-1.5 block text-xs font-medium text-red-600">{errors.phone}</span>}
                </label>
                {errors.contact && <p role="alert" className="text-xs font-medium text-red-600">{errors.contact}</p>}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="font-display text-lg font-bold text-ink">Review your request</h3>
              <div className="mt-4 space-y-3 rounded-lg bg-cloud p-4 text-sm">
                <Row label="Service" value={card.kicker} />
                <Row
                  label="Options"
                  value={card.options.filter((_, i) => selected.includes(i)).join(", ")}
                />
                <Row label="Additional info" value={extra.trim() || "None provided"} />
                <Row label="Email" value={email.trim() || "None provided"} />
                <Row label="Phone" value={phone.trim() || "None provided"} />
              </div>
              <p className="mt-4 text-xs text-slate-soft">
                Submitting opens WhatsApp with this request ready to send. Nothing is stored on a
                server.
              </p>
            </div>
          )}
        </div>

        <div className="sticky bottom-0 flex items-center justify-between gap-3 border-t border-navy-900/8 bg-white px-6 py-4">
          <button
            type="button"
            onClick={() => {
              setErrors({});
              setStep((s) => Math.max(s - 1, 0));
            }}
            disabled={step === 0}
            className="rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-soft transition-colors hover:text-ink disabled:invisible"
          >
            Back
          </button>

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className="rounded-lg bg-blue-brand px-7 py-2.5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-blue-soft"
            >
              Continue
            </button>
          ) : (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="rounded-lg bg-blue-brand px-7 py-2.5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-blue-soft"
            >
              Submit via WhatsApp
            </a>
          )}
        </div>

        {step === STEPS.length - 1 && (
          <p className="border-t border-navy-900/5 bg-white px-6 pb-4 pt-3 text-center text-xs text-slate-soft">
            Prefer email?{" "}
            <a href={mailHref} onClick={onClose} className="font-medium text-blue-brand underline underline-offset-2">
              Send this request by email
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4 border-b border-navy-900/5 pb-2 last:border-0 last:pb-0">
      <span className="text-slate-soft">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}