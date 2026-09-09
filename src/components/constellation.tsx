"use client";

import { useEffect, useRef, useState } from "react";
import { CountUp } from "./count-up";
import { showcase, type Showcase } from "@/content/site";

// Six nodes evenly spaced on a ring, starting at the top and going
// clockwise. The middle is left empty for the detail card.
const RING_X = 42;
const RING_Y = 42;

const POSITIONS = showcase.map((_, i) => {
  const angle = ((-90 + i * (360 / showcase.length)) * Math.PI) / 180;
  return {
    x: 50 + RING_X * Math.cos(angle),
    y: 50 + RING_Y * Math.sin(angle),
  };
});

export function Constellation() {
  const [active, setActive] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeRef = useRef(0);

  // The draw loop reads this rather than closing over state, so hovering
  // never tears down and restarts the animation.
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    let colors = readPalette();
    function readPalette() {
      const s = getComputedStyle(document.documentElement);
      return {
        accent: s.getPropertyValue("--accent").trim() || "#a8481c",
        muted: s.getPropertyValue("--muted").trim() || "#6d6960",
      };
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      colors = readPalette();

      const count = Math.round(Math.min(60, (width * height) / 15000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.2 + 0.4,
      }));
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const points = POSITIONS.map((p) => ({
        x: (p.x / 100) * width,
        y: (p.y / 100) * height,
      }));
      const current = activeRef.current;

      // Ambient field
      for (const p of particles) {
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }
        ctx!.globalAlpha = 0.3;
        ctx!.fillStyle = colors.muted;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Slowly rotating orbit ring
      ctx!.save();
      ctx!.translate(cx, cy);
      ctx!.globalAlpha = 0.18;
      ctx!.strokeStyle = colors.muted;
      ctx!.lineWidth = 1;
      ctx!.setLineDash([2, 10]);
      ctx!.lineDashOffset = reduced ? 0 : -time / 120;
      ctx!.beginPath();
      ctx!.ellipse(
        0,
        0,
        (RING_X / 100) * width,
        (RING_Y / 100) * height,
        0,
        0,
        Math.PI * 2,
      );
      ctx!.stroke();
      ctx!.setLineDash([]);
      ctx!.restore();

      // Spokes from the hub out to each node
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const isActive = i === current;
        const dx = p.x - cx;
        const dy = p.y - cy;
        const len = Math.hypot(dx, dy) || 1;
        // Start outside the card so the line doesn't run under it.
        const startX = cx + (dx / len) * 210;
        const startY = cy + (dy / len) * 150;

        ctx!.globalAlpha = isActive ? 0.8 : 0.16;
        ctx!.strokeStyle = isActive ? colors.accent : colors.muted;
        ctx!.lineWidth = isActive ? 1.4 : 1;
        ctx!.setLineDash(isActive ? [] : [3, 7]);
        ctx!.lineDashOffset = reduced ? 0 : -time / 90;
        ctx!.beginPath();
        ctx!.moveTo(startX, startY);
        ctx!.lineTo(p.x, p.y);
        ctx!.stroke();
      }
      ctx!.setLineDash([]);

      // Halo on the active node
      const focus = points[current];
      if (focus) {
        const pulse = reduced ? 1 : 0.85 + Math.sin(time / 700) * 0.15;
        const radius = 90 * pulse;
        const glow = ctx!.createRadialGradient(focus.x, focus.y, 0, focus.x, focus.y, radius);
        glow.addColorStop(0, colors.accent);
        glow.addColorStop(1, "transparent");
        ctx!.globalAlpha = 0.16;
        ctx!.fillStyle = glow;
        ctx!.beginPath();
        ctx!.arc(focus.x, focus.y, radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      ctx!.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    }

    resize();
    frame = requestAnimationFrame(draw);

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const themeWatcher = new MutationObserver(() => {
      colors = readPalette();
    });
    themeWatcher.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      themeWatcher.disconnect();
    };
  }, []);

  const item = showcase[active];

  return (
    <>
      {/* The ring — pointer-driven, wide screens only */}
      <div className="relative hidden h-[760px] w-full md:block">
        <canvas ref={canvasRef} className="absolute inset-0 size-full" />

        {showcase.map((entry, i) => {
          const p = POSITIONS[i];
          const isActive = i === active;
          return (
            <button
              key={entry.slug}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-current={isActive}
              aria-label={`${entry.short} — ${entry.category}`}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <span
                className={`grid size-14 place-items-center rounded-full border font-mono text-xs transition-all duration-300 ${
                  isActive
                    ? "scale-110 border-accent bg-accent text-background"
                    : "border-border bg-background text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`label mt-3 whitespace-nowrap transition-colors ${
                  isActive ? "!text-accent" : ""
                }`}
              >
                {entry.short}
              </span>
            </button>
          );
        })}

        {/* Hub card. Positioning lives here; the animation is on the child so
            its transform can't fight this one. */}
        <div className="absolute top-1/2 left-1/2 z-20 w-[26rem] -translate-x-1/2 -translate-y-1/2">
          <div key={item.slug} className="panel-in">
            <Card item={item} />
          </div>
        </div>
      </div>

      {/* Stacked fallback for narrow screens */}
      <div className="space-y-4 md:hidden">
        {showcase.map((entry, i) => (
          <div key={entry.slug} className="flex gap-3">
            <span className="label pt-1">{String(i + 1).padStart(2, "0")}</span>
            <Card item={entry} />
          </div>
        ))}
      </div>
    </>
  );
}

function Card({ item }: { item: Showcase }) {
  return (
    <div className="border border-border bg-background p-5">
      <div className="flex items-baseline justify-between gap-3">
        <span className="label !text-accent">{item.category}</span>
        <span className="label">{item.period}</span>
      </div>

      <p className="mt-4 font-display text-5xl leading-none tracking-tight text-accent">
        <CountUp value={item.stat.value} prefix={item.stat.prefix} suffix={item.stat.suffix} />
      </p>
      <p className="mt-1.5 text-xs text-muted">{item.stat.label}</p>

      <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight">{item.org}</h3>
      <p className="mt-1 text-xs text-accent">{item.role}</p>

      <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">{item.summary}</p>

      <ul className="mt-3 space-y-1.5">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2 text-[0.8125rem] leading-relaxed">
            <span aria-hidden="true" className="text-accent">
              —
            </span>
            <span className="text-muted">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
