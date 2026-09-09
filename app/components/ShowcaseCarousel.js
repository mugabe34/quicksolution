"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    id: "slide-1",
    image: "/images/Copilot_20260909_124332.png",
    tag: "Sourcing from China",
    title: "Buy it in China, land it here.",
    float: "Sourcing and shipping",
    stat: "End to end",
    accent: "#1E5AFF",
  },
  {
    id: "slide-2",
    image: "/images/china.jpg",
    width: 736,
    height: 1308,
    tag: "Sourcing from China",
    title: "Your direct link to China.",
  },
  {
    id: "slide-3",
    image: "/images/shipping.jpg",
    width: 800,
    height: 1120,
    tag: "Shipping & delivery",
    title: "Sourced, shipped and delivered.",
  },
  {
    id: "slide-4",
    image: "/images/Copilot_20260909_124557.png",
    tag: "Travel & logistics",
    title: "Airport to hotel, handled.",
    float: "Door to door transfer",
    stat: "Air, Sea, Road",
    accent: "#4E7CFF",
  },
  {
    id: "slide-5",
    image: "/images/visa.jpg",
    width: 736,
    height: 1036,
    tag: "Visa & stay guidance",
    title: "Visas and paperwork, handled.",
  },
  {
    id: "slide-6",
    image: "/images/Copilot_20260909_124559.png",
    tag: "Visa & stay guidance",
    title: "Visa, passport and stay sorted.",
    float: "Visa assistance",
    stat: "Guided end to end",
    accent: "#6E8BFF",
  },
  {
    id: "slide-7",
    image: "/images/Copilot_20260909_124601.png",
    tag: "Studio & production",
    title: "Capture the moment, done right.",
    float: "Photography and videography",
    stat: "Live streaming and recording",
    accent: "#9DB4FF",
  },
  {
    id: "slide-8",
    image: "/images/Copilot_20260909_124603.png",
    tag: "Product sourcing",
    title: "Tell us once, we ship it.",
    float: "Sourcing and shipping",
    stat: "No middlemen",
    accent: "#1E5AFF",
  },
  {
    id: "slide-9",
    image: "/images/Copilot_20260909_124605.png",
    tag: "Airport and hotel transfers",
    title: "Door to door, arranged.",
    float: "Arranged transfers",
    stat: "Air, Sea, Road",
    accent: "#4E7CFF",
  },
  {
    id: "slide-10",
    image: "/images/Copilot_20260909_124607.png",
    tag: "Studio & production",
    title: "Shoots, streaming and recording.",
    float: "Studio production",
    stat: "Weddings, events and more",
    accent: "#6E8BFF",
  },
];

const AHEAD = 4500;

export default function ShowcaseCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [leaving, setLeaving] = useState(null);
  const clearTimer = useRef(null);

  const slide = SLIDES[index];
  const leavingSlide = leaving ? SLIDES.find((s) => s.id === leaving.id) : null;

  const scheduleClear = useCallback(() => {
    clearTimeout(clearTimer.current);
    clearTimer.current = setTimeout(() => setLeaving(null), 420);
  }, []);

  const go = useCallback(
    (d) => {
      setLeaving({ id: SLIDES[index].id, cls: `carousel-out-${d >= 0 ? "left" : "right"}` });
      setIndex((i) => (i + d + SLIDES.length) % SLIDES.length);
      scheduleClear();
    },
    [index, scheduleClear]
  );

  const jumpTo = useCallback(
    (i) => {
      if (i === index) return;
      const d = i > index ? 1 : -1;
      setLeaving({ id: SLIDES[index].id, cls: `carousel-out-${d >= 0 ? "left" : "right"}` });
      setIndex(i);
      scheduleClear();
    },
    [index, scheduleClear]
  );

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), AHEAD);
    return () => clearTimeout(t);
  }, [paused, index, go]);

  return (
    <div
      className="relative mx-auto w-full max-w-lg select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="relative h-[440px] overflow-hidden sm:h-[560px]">
        {leavingSlide && (
          <div key={`out-${leavingSlide.id}`} className={`absolute inset-0 ${leaving.cls}`}>
            <SlideImage slide={leavingSlide} interactive={false} />
          </div>
        )}
        <div key={`in-${slide.id}`} className="carousel-in absolute inset-0">
          <SlideImage slide={slide} interactive />
        </div>

        {/* Prev / next controls */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg bg-navy-900/50 text-white/80 backdrop-blur transition-colors hover:bg-navy-900/80 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg bg-navy-900/50 text-white/80 backdrop-blur transition-colors hover:bg-navy-900/80 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* Pagination dots */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => jumpTo(i)}
            aria-label={`Go to slide ${i + 1}: ${s.tag}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-blue-brand" : "w-2.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function SlideImage({ slide, interactive }) {
  return (
    <a
      href="#start"
      aria-label={`${slide.tag}. ${slide.title}`}
      className={`absolute inset-0 flex items-center justify-center ${interactive ? "group" : ""}`}
      tabIndex={interactive ? 0 : -1}
      aria-hidden={interactive ? undefined : true}
    >
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <Image
          src={slide.image}
          alt={slide.tag}
          width={slide.width ?? 1024}
          height={slide.height ?? 1024}
          priority={interactive}
          className={`relative h-full w-full object-contain transition-transform duration-500 ${
            interactive ? "group-hover:scale-[1.03]" : ""
          }`}
        />
        {interactive && (
          <div className="pointer-events-none absolute right-0 top-0 flex max-w-[85%] flex-col items-end gap-1.5 rounded-lg bg-navy-900/95 p-3 text-right sm:p-4">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-blue-soft">
              {slide.tag}
            </span>
            <h3 className="font-display text-lg font-bold leading-tight text-white sm:text-xl">
              {slide.title}
            </h3>
          </div>
        )}

        {interactive && (
          <div className="pointer-events-none absolute bottom-0 right-0 p-3 sm:p-4">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-brand px-4 py-2 text-xs font-semibold text-white transition-colors group-hover:bg-blue-soft">
              Start a request
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </a>
  );
}