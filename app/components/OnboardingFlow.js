"use client";

import { useMemo, useState } from "react";
import { CameraIcon, OtherDeviceIcon } from "./DeviceIcons";

const CATEGORIES = [
  {
    id: "china",
    label: "China Services",
    icon: null,
    blurb: "Sourcing products, China visas & passports, hotels, airport transfers, and travel guidance.",
  },
  {
    id: "studio",
    label: "Studio Services",
    icon: CameraIcon,
    blurb: "Wedding & event photography and videography, studio photoshoots, live streaming and recording.",
  },
  {
    id: "products",
    label: "Buying a Product",
    icon: OtherDeviceIcon,
    blurb: "Electronics, scooters, e-bikes, cameras and more. Sourced and shipped from China to you.",
  },
];

const STEPS = ["Service", "Details", "Contact", "Review"];
const PHONE_DISPLAY = "0790 401 735";
const WHATSAPP_NUMBER = "250790401735";
const CONTACT_EMAIL = "sabinquicksolution@gmail.com";

const emptyDetails = {
  productOrLink: "",
  quantity: "1",
  budget: "",
  city: "Kigali",
  notes: "",
};

const emptyContact = { fullName: "", email: "", phone: "", channel: "WhatsApp" };

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function isValidPhone(v) {
  return /^[+0-9\s-]{7,16}$/.test(v);
}

export default function OnboardingFlow() {
  const [stepIndex, setStepIndex] = useState(0);
  const [category, setCategory] = useState(null);
  const [details, setDetails] = useState(emptyDetails);
  const [contact, setContact] = useState(emptyContact);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const activeCategory = CATEGORIES.find((c) => c.id === category);

  const goNext = () => {
    if (stepIndex === 0) {
      if (!category) {
        setErrors({ category: "Choose a service to continue." });
        return;
      }
    }
    if (stepIndex === 1) {
      const errs = {};
      if (!details.quantity || Number(details.quantity) < 1) {
        errs.quantity = "Enter a quantity of at least 1.";
      }
      if (category === "products" && details.notes.trim().length < 5) {
        errs.notes = "Tell us briefly what the product is.";
      }
      if (Object.keys(errs).length) {
        setErrors(errs);
        return;
      }
    }
    if (stepIndex === 2) {
      const errs = {};
      if (!contact.fullName.trim()) errs.fullName = "Your name is required.";
      if (!isValidEmail(contact.email)) errs.email = "Enter a valid email address.";
      if (!isValidPhone(contact.phone)) errs.phone = "Enter a valid phone number.";
      if (Object.keys(errs).length) {
        setErrors(errs);
        return;
      }
    }
    setErrors({});
    setStepIndex((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const goBack = () => {
    setErrors({});
    setStepIndex((s) => Math.max(s - 1, 0));
  };

  const summaryText = useMemo(() => {
    const lines = [
      `New request from Sabin Quick Solution website`,
      `Service: ${activeCategory?.label ?? "-"}`,
      details.productOrLink ? `Model / link: ${details.productOrLink}` : null,
      `Quantity: ${details.quantity}`,
      details.budget ? `Budget: ${details.budget} RWF` : null,
      `Delivery city: ${details.city}`,
      details.notes ? `Notes: ${details.notes}` : null,
      `---`,
      `Name: ${contact.fullName}`,
      `Email: ${contact.email}`,
      `Phone: ${contact.phone}`,
      `Preferred contact: ${contact.channel}`,
    ].filter(Boolean);
    return lines.join("\n");
  }, [activeCategory, details, contact]);

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(summaryText)}`;
  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "New request from website - " + (activeCategory?.label ?? "")
  )}&body=${encodeURIComponent(summaryText)}`;

  const reset = () => {
    setStepIndex(0);
    setCategory(null);
    setDetails(emptyDetails);
    setContact(emptyContact);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-navy-900/8 bg-white p-8 text-center shadow-card sm:p-14">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-mist">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-blue-brand" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-ink">
          Thanks, {contact.fullName.split(" ")[0] || "there"}, request sent.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-slate-soft">
          We&apos;ll reach out within minutes on {contact.channel}. If you don&apos;t hear from us
          right away, message us directly on WhatsApp.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-brand px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-blue-soft"
          >
            Open WhatsApp Chat
          </a>
          <button
            type="button"
            onClick={reset}
            className="rounded-lg border border-navy-900/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-navy-900/40"
          >
            Start another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-navy-900/8 bg-white p-6 shadow-card sm:p-10">
      {/* Progress */}
      <div className="mb-8 flex items-center gap-2">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 items-center gap-2">
            <div
              className={`flex h-8 w-8 flex-none items-center justify-center rounded-full text-xs font-bold ${
                i <= stepIndex ? "bg-blue-brand text-white" : "bg-navy-900/8 text-slate-soft"
              }`}
            >
              {i + 1}
            </div>
            <span
              className={`hidden text-xs font-medium sm:block ${
                i <= stepIndex ? "text-ink" : "text-slate-soft/70"
              }`}
            >
              {label}
            </span>
            {i < STEPS.length - 1 && (
              <div className={`h-px flex-1 ${i < stepIndex ? "bg-blue-brand" : "bg-navy-900/8"}`} />
            )}
          </div>
        ))}
      </div>
      <p className="mb-6 text-xs font-medium uppercase tracking-wide text-slate-soft">
        Step {stepIndex + 1} of {STEPS.length}
      </p>

      {/* Step 0: category */}
      {stepIndex === 0 && (
        <div>
          <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
            What can we help you with?
          </h3>
          <p className="mt-2 text-slate-soft">Pick the service that fits what you&apos;re after.</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
            {CATEGORIES.map((c) => {
              const Icon = c.icon;
              const active = category === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setCategory(c.id);
                    setErrors({});
                  }}
                  className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all sm:p-6 ${
                    active
                      ? "border-blue-brand bg-blue-mist shadow-lift"
                      : "border-navy-900/10 hover:border-blue-soft/60 hover:bg-cloud"
                  }`}
                  aria-pressed={active}
                >
                  <span className={active ? "text-blue-brand" : "text-navy-900"}>
                    {Icon ? (
                      <Icon />
                    ) : (
                      <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M12 3l7 3v5c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6l7-3z" />
                        <path d="M9 11.5l2 2 4-4" />
                      </svg>
                    )}
                  </span>
                  <span className={active ? "font-semibold text-blue-brand" : "font-medium text-ink"}>
                    {c.label}
                  </span>
                </button>
              );
            })}
          </div>
          {errors.category && (
            <p role="alert" className="mt-3 text-sm font-medium text-red-600">
              {errors.category}
            </p>
          )}
          {activeCategory && (
            <p className="mt-4 text-sm text-slate-soft">{activeCategory.blurb}</p>
          )}
        </div>
      )}

      {/* Step 1: details */}
      {stepIndex === 1 && (
        <div>
          <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
            Tell us more about the {activeCategory?.label.toLowerCase()}.
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {category === "products" && (
              <>
                <Field label="Model or product link (optional)" className="sm:col-span-2">
                  <input
                    type="text"
                    value={details.productOrLink}
                    onChange={(e) => setDetails({ ...details, productOrLink: e.target.value })}
                    placeholder="e.g. link from Alibaba, or a model name"
                    className={inputClass()}
                  />
                </Field>
                <Field label="Quantity" error={errors.quantity}>
                  <input
                    type="number"
                    min="1"
                    value={details.quantity}
                    onChange={(e) => setDetails({ ...details, quantity: e.target.value })}
                    className={inputClass(errors.quantity)}
                  />
                </Field>
                <Field label="Budget in RWF (optional)">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={details.budget}
                    onChange={(e) => setDetails({ ...details, budget: e.target.value })}
                    placeholder="e.g. 1,000,000"
                    className={inputClass()}
                  />
                </Field>
                <Field label="Delivery city" className="sm:col-span-2">
                  <input
                    type="text"
                    value={details.city}
                    onChange={(e) => setDetails({ ...details, city: e.target.value })}
                    className={inputClass()}
                  />
                </Field>
              </>
            )}
            <Field
              label={category === "products" ? "Describe the product" : "What do you need? (optional)"}
              error={errors.notes}
              className="sm:col-span-2"
            >
              <textarea
                rows={4}
                value={details.notes}
                onChange={(e) => setDetails({ ...details, notes: e.target.value })}
                placeholder={
                  category === "products"
                    ? "What is it, specs, model. Anything that helps us source it."
                    : "Dates, details, budget... anything that helps us plan."
                }
                className={inputClass(errors.notes)}
              />
            </Field>
          </div>
        </div>
      )}

      {/* Step 2: contact */}
      {stepIndex === 2 && (
        <div>
          <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
            How should we reach you?
          </h3>
          <p className="mt-2 text-slate-soft">
            We&apos;ll get back to you within minutes, usually on WhatsApp.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field label="Full name" error={errors.fullName} className="sm:col-span-2">
              <input
                type="text"
                value={contact.fullName}
                onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
                className={inputClass(errors.fullName)}
              />
            </Field>
            <Field label="Email address" error={errors.email}>
              <input
                type="email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                className={inputClass(errors.email)}
              />
            </Field>
            <Field label="Phone / WhatsApp number" error={errors.phone}>
              <input
                type="tel"
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                placeholder="e.g. 078xxxxxxx"
                className={inputClass(errors.phone)}
              />
            </Field>
            <Field label="Preferred contact method" className="sm:col-span-2">
              <div className="flex flex-wrap gap-2">
                {["WhatsApp", "Email", "Call"].map((ch) => (
                  <button
                    key={ch}
                    type="button"
                    onClick={() => setContact({ ...contact, channel: ch })}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                      contact.channel === ch
                        ? "border-blue-brand bg-blue-mist text-blue-brand"
                        : "border-navy-900/15 text-slate-soft hover:border-blue-soft/60"
                    }`}
                  >
                    {ch}
                  </button>
                ))}
              </div>
            </Field>
          </div>
        </div>
      )}

      {/* Step 3: review */}
      {stepIndex === 3 && (
        <div>
          <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">Your request</h3>
          <div className="mt-6 space-y-3 rounded-xl bg-cloud p-5 text-sm">
            <SummaryRow label="Service" value={activeCategory?.label} />
            {category === "products" && details.productOrLink && <SummaryRow label="Model / link" value={details.productOrLink} />}
            {category === "products" && <SummaryRow label="Quantity" value={details.quantity} />}
            {category === "products" && details.budget && <SummaryRow label="Budget" value={`${details.budget} RWF`} />}
            {category === "products" && <SummaryRow label="Delivery city" value={details.city} />}
            {details.notes && <SummaryRow label="Details" value={details.notes} />}
            <SummaryRow label="Name" value={contact.fullName} />
            <SummaryRow label="Email" value={contact.email} />
            <SummaryRow label="Phone" value={contact.phone} />
            <SummaryRow label="Preferred contact" value={contact.channel} />
          </div>
          <p className="mt-4 text-sm text-slate-soft">
            Submitting sends this straight to our team at {PHONE_DISPLAY}. We don&apos;t store
            anything on a server, your request goes directly to WhatsApp or email.
          </p>
        </div>
      )}

      {/* Nav buttons */}
      <div className="mt-9 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={goBack}
          disabled={stepIndex === 0}
          className="rounded-lg px-5 py-3 text-sm font-semibold text-slate-soft transition-colors disabled:opacity-0 hover:text-ink"
        >
          Back
        </button>

        {stepIndex < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="rounded-lg bg-blue-brand px-7 py-3 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-blue-soft"
          >
            Continue
          </button>
        ) : (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setSubmitted(true)}
            className="rounded-lg bg-blue-brand px-7 py-3 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-blue-soft"
          >
            Submit Request
          </a>
        )}
      </div>
      {stepIndex === STEPS.length - 1 && (
        <p className="mt-4 text-center text-xs text-slate-soft">
          Prefer email?{" "}
          <a href={mailHref} onClick={() => setSubmitted(true)} className="font-medium text-blue-brand underline underline-offset-2">
            Send this request by email instead
          </a>
        </p>
      )}
    </div>
  );
}

function Field({ label, error, className = "", children }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error && (
        <span role="alert" className="mt-1.5 block text-xs font-medium text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4 border-b border-navy-900/5 pb-2 last:border-0 last:pb-0">
      <span className="text-slate-soft">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

function inputClass(hasError) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-slate-soft/60 focus:border-blue-brand ${
    hasError ? "border-red-400" : "border-navy-900/12"
  }`;
}
