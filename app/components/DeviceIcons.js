function IconShell({ children, label }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6">
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-16 w-16"
        aria-hidden
      >
        {children}
      </svg>
      <span className="font-display text-sm font-semibold tracking-wide">{label}</span>
    </div>
  );
}

export function ScooterIcon() {
  return (
    <IconShell label="Scooters">
      <circle cx="14" cy="50" r="6" />
      <circle cx="48" cy="50" r="6" />
      <path d="M14 50h10l6-20h9" />
      <path d="M39 30h9l5 12" />
      <path d="M20 30h14l3-8h6" />
      <path d="M17 22h6" />
    </IconShell>
  );
}

export function EbikeIcon() {
  return (
    <IconShell label="Electric Bicycles">
      <circle cx="15" cy="46" r="9" />
      <circle cx="49" cy="46" r="9" />
      <path d="M15 46l12-22h14l8 22" />
      <path d="M27 24h-9" />
      <path d="M27 24l8 10h14" />
      <path d="M35 34l6-10h6" />
      <path d="M8 34h6l3 4" />
    </IconShell>
  );
}

export function CameraIcon() {
  return (
    <IconShell label="Cameras">
      <rect x="10" y="20" width="44" height="30" rx="5" />
      <circle cx="32" cy="35" r="10" />
      <circle cx="32" cy="35" r="4.5" />
      <path d="M22 20l3-6h14l3 6" />
      <path d="M46 26h4" />
    </IconShell>
  );
}

export function OtherDeviceIcon() {
  return (
    <IconShell label="Other Electronics">
      <rect x="14" y="10" width="36" height="44" rx="4" />
      <path d="M22 46h20" />
      <circle cx="32" cy="20" r="1.2" fill="currentColor" />
      <path d="M22 26h20v14H22z" />
      <path d="M27 33h10" />
    </IconShell>
  );
}

export function DroneIcon() {
  return (
    <IconShell label="Drones">
      <rect x="26" y="26" width="12" height="12" rx="2" />
      <path d="M26 30L12 16M38 30l14-14M26 34L12 48M38 34l14 14" />
      <circle cx="10" cy="14" r="4" />
      <circle cx="54" cy="14" r="4" />
      <circle cx="10" cy="50" r="4" />
      <circle cx="54" cy="50" r="4" />
    </IconShell>
  );
}

export function SpeakerIcon() {
  return (
    <IconShell label="Audio &amp; Speakers">
      <rect x="18" y="8" width="28" height="48" rx="6" />
      <circle cx="32" cy="24" r="6" />
      <circle cx="32" cy="42" r="9" />
      <circle cx="32" cy="42" r="3.5" />
    </IconShell>
  );
}
