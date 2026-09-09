import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "250790401735";
const EMAIL = "sabinquicksolution@gmail.com";
const PHONE_TEL = "+250790401735";

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-14 text-white/70">
      <div className="container-page">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/emblem-white.png"
                alt="Sabin Quick Solution"
                width={36}
                height={31}
                className="h-8 w-auto"
              />
              <span className="font-display text-sm font-bold text-white">
                SABIN QUICK SOLUTION
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              China sourcing, visas and travel, plus studio photography, videography and live
              production, based in Kigali.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Site</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="/#about" className="hover:text-white">About</a></li>
                <li><a href="/#services" className="hover:text-white">Services</a></li>
                <li><a href="/#start" className="hover:text-white">Start a Request</a></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Reach us</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href={`tel:${PHONE_TEL}`} className="hover:text-white">+250 790 401 735</a></li>
                <li><a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a></li>
                <li>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Sabin Quick Solution. All rights reserved.</p>
          <p>Kigali, Rwanda</p>
        </div>
      </div>
    </footer>
  );
}
