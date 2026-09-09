// Self-hosted fonts (no external Google Fonts request at build or runtime)
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/roboto/400.css";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import SabinBot from "./components/SabinBot";

const siteUrl = "https://sabinquicksolution.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sabin Quick Solution | China Logistics, Travel & Studio Services",
    template: "%s | Sabin Quick Solution",
  },
  description:
    "Sabin Quick Solution helps you source from and travel to China: buying products, visas, accommodation, airport transfers, plus studio photography, videography and live production. Tell us what you need.",
  keywords: [
    "Sabin Quick Solution",
    "buy products from China Rwanda",
    "China visa assistance",
    "China travel Rwanda",
    "airport transfer Kigali",
    "wedding photography Rwanda",
    "studio photoshoot Kigali",
    "live streaming",
  ],
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icon-180.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.png"],
  },
  openGraph: {
    title: "Sabin Quick Solution | China Logistics, Travel & Studio Services",
    description:
      "Source from China, plan your trip, or capture a moment. Sabin Quick Solution handles logistics, visas and studio production.",
    url: siteUrl,
    siteName: "Sabin Quick Solution",
    images: [{ url: "/images/emblem-navy.png", width: 480, height: 409 }],
    locale: "en_RW",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sabin Quick Solution",
    description:
      "China sourcing, travel & visa help, and studio photography, videography and live production.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0A1B3A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        {children}
        <WhatsAppButton />
        <SabinBot />
      </body>
    </html>
  );
}
