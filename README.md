# Sabin Quick Solution — Website

A frontend-only Next.js (App Router) site for Sabin Quick Solution. No backend or database —
the "Start a Request" flow and contact form send straight to WhatsApp/email via `wa.me` and
`mailto:` links.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Things to double-check before launch

- **Email address**: the site currently sends messages to `sabinquicksolution@gmail.com`
  (in `app/components/Contact.js` and `app/components/OnboardingFlow.js`). Replace it with
  the business's real inbox if different.
- **WhatsApp number**: set to `250790401735` (i.e. 0790 401 735 with Rwanda's country code)
  in `WhatsAppButton.js`, `Contact.js`, `OnboardingFlow.js`, `Footer.js`, and `SabinBot.js`.
- **Domain**: `metadataBase` in `app/layout.js` is set to a placeholder
  `https://sabinquicksolution.com` — update it once a real domain is live, so social share
  previews resolve correctly.
- **Fonts**: the brief asked for Roboto, Inter, and a third face that didn't match any real
  font name, so Montserrat was used as the closest premium geometric sans for headings. Swap
  it in `app/layout.js` and `tailwind.config.js` if a specific typeface was intended.

## Structure

- `app/page.js` – homepage (hero, about, device showcase, request flow, how it works, contact)
- `app/contact/page.js` – dedicated contact page
- `app/not-found.js` – custom 404 using the shared `EmptyState` pattern
- `app/components/` – all UI pieces, including the interactive onboarding flow, the dual
  interactive marquees, the WhatsApp button, and the `SabinQuick` FAQ widget
