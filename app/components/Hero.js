import ShowcaseCarousel from "./ShowcaseCarousel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-20 pt-[calc(76px+56px)] sm:pb-28 sm:pt-[calc(76px+72px)]">
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-brand/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-blue-soft/10 blur-[100px]"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <p className="mb-5 text-sm font-medium tracking-wide text-blue-soft">
            Kigali, Rwanda &middot; China logistics, travel &amp; studio
          </p>
          <h1 className="font-display text-[2.4rem] font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
            Sourced, shipped and captured.
            <br />
            <span className="text-blue-soft">One call to Sabin.</span>
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-white/70">
            We source products from China, arrange visas and stays, handle airport transfers
            and run professional studio photography, videography and live production. Tell us
            once, and we take it from there.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#start"
              className="rounded-lg bg-blue-brand px-7 py-4 text-center text-[15px] font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-blue-soft"
            >
              Start a Request
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg border border-white/25 px-7 py-4 text-center text-[15px] font-semibold text-white transition-colors hover:border-white/60"
            >
              See How It Works
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="sr-only">Services covered</dt>
              <dd className="font-display text-2xl font-bold text-white">2</dd>
              <p className="mt-1 text-xs text-white/55">sides of the business</p>
            </div>
            <div>
              <dt className="sr-only">Origin</dt>
              <dd className="font-display text-2xl font-bold text-white">China</dd>
              <p className="mt-1 text-xs text-white/55">sourcing &amp; travel</p>
            </div>
            <div>
              <dt className="sr-only">Response time</dt>
              <dd className="font-display text-2xl font-bold text-white">Minutes</dd>
              <p className="mt-1 text-xs text-white/55">to hear back from us</p>
            </div>
          </dl>
        </div>

        <div className="lg:ml-4">
          <ShowcaseCarousel />
        </div>
      </div>
    </section>
  );
}
