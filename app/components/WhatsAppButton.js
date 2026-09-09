const WHATSAPP_NUMBER = "250790401735";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi Sabin Quick Solution, I'd like to ask about your services..."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sabin Quick Solution on WhatsApp"
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2zm0 1.8a8.2 8.2 0 016.9 12.6l-.2.4.6 2.3-2.3-.6-.4.2A8.2 8.2 0 1112 3.8zm-3.2 4.1c-.2 0-.4 0-.6.4-.2.4-.7 1-.7 2.4 0 1.4 1 2.8 1.1 3 .1.2 2 3.1 4.8 4.2 2.4.9 2.9.7 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.6-1.6-.9-2.1-.2-.5-.4-.4-.6-.4z" />
      </svg>
    </a>
  );
}
