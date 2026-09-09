"use client";

import { useRef, useState } from "react";

export default function Marquee({ items, orientation = "x", speed = 30, className = "" }) {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const drag = useRef({ active: false, start: 0, offset: 0 });

  const axis = orientation === "y" ? "Y" : "X";

  const onPointerDown = (e) => {
    const track = trackRef.current;
    if (!track) return;
    drag.current.active = true;
    drag.current.start = orientation === "y" ? e.clientY : e.clientX;
    track.style.animationPlayState = "paused";
    track.setPointerCapture?.(e.pointerId);
    setPaused(true);
  };

  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    const track = trackRef.current;
    if (!track) return;
    const pos = orientation === "y" ? e.clientY : e.clientX;
    const delta = pos - drag.current.start;
    track.style.transform = `translate${axis}(${delta}px)`;
  };

  const endDrag = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    const track = trackRef.current;
    if (track) {
      track.style.transform = "";
      track.style.animationPlayState = "running";
    }
    setPaused(false);
  };

  const trackClass = orientation === "y" ? "marquee-track-y" : "marquee-track-x";

  return (
    <div
      className={`group relative touch-pan-y select-none overflow-hidden ${className}`}
      onMouseEnter={() => !drag.current.active && setPaused(true)}
      onMouseLeave={() => !drag.current.active && setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      role="group"
      aria-label="Devices we source, drag to explore"
    >
      <div
        ref={trackRef}
        className={`${trackClass} ${paused ? "marquee-paused" : ""} cursor-grab active:cursor-grabbing`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className={
              orientation === "y"
                ? "flex h-40 w-full flex-none items-center justify-center"
                : "flex h-full w-44 flex-none items-center justify-center sm:w-52"
            }
          >
            <div className="flex h-full w-full items-center justify-center rounded-2xl border border-navy-900/8 bg-white text-navy-900 shadow-card">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
