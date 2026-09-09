import Link from "next/link";

export default function EmptyState({
  title = "Nothing here yet",
  message = "This page hasn't been set up.",
  actionHref = "/",
  actionLabel = "Back to homepage",
}) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-mist">
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-blue-brand" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 7l8-4 8 4-8 4-8-4z" strokeLinejoin="round" />
          <path d="M4 7v10l8 4 8-4V7" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="mt-6 font-display text-2xl font-bold text-ink sm:text-3xl">{title}</h1>
      <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-slate-soft">{message}</p>
      <Link
        href={actionHref}
        className="mt-8 rounded-lg bg-blue-brand px-7 py-3 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-blue-soft"
      >
        {actionLabel}
      </Link>
    </div>
  );
}
