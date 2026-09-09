import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ServiceCards from "./components/ServiceCards";
import OnboardingFlow from "./components/OnboardingFlow";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServiceCards />

        <section id="start" className="bg-white py-20 sm:py-28">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-brand">
                Start a request
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Prefer the full form, or need a custom quote? Go ahead.
              </h2>
            </div>
            <div className="mx-auto mt-12 max-w-2xl">
              <OnboardingFlow />
            </div>
          </div>
        </section>

        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
