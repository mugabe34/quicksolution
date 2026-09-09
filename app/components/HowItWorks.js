const steps = [
  {
    title: "Choose a service",
    text: "Pick China help (products, visas, stays, transfers) or the studio side (shoots, streaming, recording).",
  },
  {
    title: "Tell us what you need",
    text: "Dates, details, budget, quantity. Whatever we need to plan it.",
  },
  {
    title: "We line it up and confirm",
    text: "We source, book or schedule, then confirm everything with you before we commit.",
  },
  {
    title: "Stay connected",
    text: "We keep you updated by WhatsApp until it's sorted or in your hands.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-navy-900 py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-soft">Process</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            How it works
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative border-t border-white/15 pt-6">
              <span className="font-display text-sm font-semibold text-blue-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/65">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
