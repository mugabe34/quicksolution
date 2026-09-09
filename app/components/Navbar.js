"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-navy-900/95 backdrop-blur shadow-lift" : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/emblem-white.png"
            alt="Sabin Quick Solution emblem"
            width={40}
            height={34}
            priority
            className="h-9 w-auto"
          />
          <span className="font-display text-[15px] font-bold tracking-tight text-white sm:text-base">
            SABIN <span className="font-medium text-blue-soft">QUICK SOLUTION</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#start"
            className="rounded-lg bg-blue-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-blue-soft"
          >
            Start a Request
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-[2px] w-6 rounded bg-white transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 rounded bg-white transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-[2px] w-6 rounded bg-white transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-white/10 bg-navy-900`}
      >
        <div className="container-page flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#start"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-blue-brand px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Start a Request
          </a>
        </div>
      </div>
    </header>
  );
}
