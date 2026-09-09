"use client";

import { useState } from "react";

const PHONE_DISPLAY = "+250 790 401 735";
const PHONE_TEL = "+250790401735";
const WHATSAPP_NUMBER = "250790401735";
const EMAIL = "sabinquicksolution@gmail.com";

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!isValidEmail(form.email)) errs.email = "Enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 5) {
      errs.message = "Tell us a little about what you need.";
    }
    setErrors(errs);

    if (Object.keys(errs).length) {
      setStatus("error");
      return;
    }

    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "-"}\n\n${form.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Message from Sabin Quick Solution website"
    )}&body=${encodeURIComponent(body)}`;
    setStatus("success");
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-brand">
            Talk to us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Reach the team directly.
          </h2>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-slate-soft">
            Quickest way to reach us is WhatsApp. You can also call, email, or send the form and
            we&apos;ll follow up by email.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-3 text-[15px] font-medium text-ink transition-colors hover:text-blue-brand"
            >
              <IconCircle>
                <path d="M6 4h3l1.5 4L8 9.5a11 11 0 006.5 6.5L16 14l4 1.5V19a2 2 0 01-2 2C10.5 21 3 13.5 3 6a2 2 0 012-2z" />
              </IconCircle>
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 text-[15px] font-medium text-ink transition-colors hover:text-blue-brand"
            >
              <IconCircle>
                <path d="M4 6h16v12H4z" />
                <path d="M4 7l8 6 8-6" />
              </IconCircle>
              {EMAIL}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[15px] font-medium text-ink transition-colors hover:text-blue-brand"
            >
              <IconCircle>
                <path d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3z" />
                <path d="M8.5 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.4.2.5.6 1.6.7 1.7.1.1.1.3 0 .5-.1.2-.2.3-.3.4l-.4.5c-.1.2-.3.4-.1.7.2.4.8 1.2 1.7 2 1.1 1 2 1.3 2.4 1.5.4.1.6.1.8-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1l1.6.8c.2.1.4.2.4.4.1.5-.1 1.2-.6 1.6-.6.5-1.7.9-2.9.5-1.5-.5-3.1-1.4-4.4-2.7-1.2-1.2-2-2.6-2.5-3.9-.4-1.2-.1-2.3.5-2.9z" />
              </IconCircle>
              Chat on WhatsApp
            </a>
            <p className="pt-2 text-sm text-slate-soft">
              Kigali, Rwanda &middot; Available every day, 7am&ndash;9pm
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-navy-900/8 bg-cloud p-6 shadow-card sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block text-sm font-medium text-ink">Name</span>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={fieldClass(errors.name)}
              />
              {errors.name && <ErrorText text={errors.name} />}
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-1.5 block text-sm font-medium text-ink">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={fieldClass(errors.email)}
              />
              {errors.email && <ErrorText text={errors.email} />}
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Phone / WhatsApp (optional)
              </span>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={fieldClass()}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium text-ink">Message</span>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={fieldClass(errors.message)}
              />
              {errors.message && <ErrorText text={errors.message} />}
            </label>
          </div>

          {status === "success" && (
            <p role="status" className="mt-5 rounded-xl bg-blue-mist px-4 py-3 text-sm font-medium text-blue-brand">
              Your email app should now be open with this message ready to send. We&apos;ll reply
              shortly.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              Please fix the fields above before sending.
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-blue-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-blue-soft sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function IconCircle({ children }) {
  return (
    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-mist text-blue-brand">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </span>
  );
}

function ErrorText({ text }) {
  return (
    <span role="alert" className="mt-1.5 block text-xs font-medium text-red-600">
      {text}
    </span>
  );
}

function fieldClass(hasError) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-blue-brand ${
    hasError ? "border-red-400" : "border-navy-900/12"
  }`;
}
