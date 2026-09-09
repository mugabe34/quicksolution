export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-brand">
            Who we are
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Your bridge between China, the studio, and you.
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <p className="text-[17px] leading-relaxed text-slate-soft">
            On the China side, we source products directly from suppliers, sort out visas and
            passports, book stays, arrange airport transfers and guide your whole trip. No
            middlemen, no guesswork.
          </p>
          <p className="text-[17px] leading-relaxed text-slate-soft">
            On the studio side, we shoot weddings and events, run photoshoots, and handle live
            streaming and recording. Whatever you describe, we handle the rest and keep you
            updated the whole way.
          </p>
        </div>
      </div>
    </section>
  );
}
