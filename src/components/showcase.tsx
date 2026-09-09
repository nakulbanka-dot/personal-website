"use client";

import { useRef, useState } from "react";
import { CountUp } from "./count-up";
import { showcase } from "@/content/site";

export function Showcase() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const item = showcase[active];

  // Feeds the cursor-tracked glow. Written straight to CSS vars so this
  // doesn't re-render on every mouse move.
  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="spotlight relative border-t border-border"
    >
      <div className="relative grid gap-10 py-12 lg:grid-cols-12 lg:gap-12">
        {/* The list */}
        <ul className="lg:col-span-5">
          {showcase.map((entry, i) => {
            const isActive = i === active;
            return (
              <li key={entry.slug}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-current={isActive}
                  className="group relative w-full border-b border-border py-4 text-left"
                >
                  {/* Sliding accent bar */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-0 -left-4 h-full w-px origin-top bg-accent transition-transform duration-300 ${
                      isActive ? "scale-y-100" : "scale-y-0"
                    }`}
                  />
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`label transition-colors ${isActive ? "text-accent" : ""}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-xl tracking-tight transition-all duration-300 ${
                        isActive
                          ? "translate-x-1 text-accent"
                          : "text-foreground group-hover:translate-x-1"
                      }`}
                    >
                      {entry.org}
                    </span>
                  </div>
                  <span className="label mt-1 block pl-8">{entry.category}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* The detail panel — re-keyed so it animates on every change */}
        <div className="lg:col-span-7">
          <div key={item.slug} className="panel-in">
            <div className="flex items-baseline justify-between gap-4">
              <span className="label text-accent">{item.category}</span>
              <span className="label">{item.period}</span>
            </div>

            <p className="mt-6 font-display text-6xl leading-none tracking-tight text-accent sm:text-7xl">
              <CountUp
                value={item.stat.value}
                prefix={item.stat.prefix}
                suffix={item.stat.suffix}
              />
            </p>
            <p className="mt-2 text-sm text-muted">{item.stat.label}</p>

            <h3 className="mt-8 font-display text-3xl tracking-tight">{item.org}</h3>
            <p className="mt-1 text-sm text-accent">{item.role}</p>

            <p className="mt-4 max-w-prose leading-relaxed text-muted">{item.summary}</p>

            <ul className="mt-5 space-y-2">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                  <span aria-hidden="true" className="text-accent">
                    —
                  </span>
                  <span className="text-muted">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
