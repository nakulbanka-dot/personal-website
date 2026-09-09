"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  label?: string;
  phase: number;
};

const DOMAINS = ["RESEARCH", "VENTURE", "ADVOCACY", "DEBATE", "DATA", "ECONOMICS"];
const LINK_DISTANCE = 132;
const POINTER_RADIUS = 190;

export function ResearchArray() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const readoutRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -9999, y: -9999, live: false };
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    // Colors come from the theme tokens so this tracks light/dark.
    let colors = readPalette();
    function readPalette() {
      const s = getComputedStyle(document.documentElement);
      return {
        accent: s.getPropertyValue("--accent").trim() || "#a8481c",
        muted: s.getPropertyValue("--muted").trim() || "#6d6960",
        foreground: s.getPropertyValue("--foreground").trim() || "#1b1a17",
      };
    }

    function seed() {
      nodes = DOMAINS.map((label, i) => {
        // Pushed out toward the edges so the labels clear the headline.
        const angle = (i / DOMAINS.length) * Math.PI * 2 - Math.PI / 2;
        const radius = Math.min(width, height) * 0.52;
        return {
          x: width / 2 + Math.cos(angle) * radius * 1.25,
          y: height / 2 + Math.sin(angle) * radius * 0.82,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          r: 3.2,
          label,
          phase: Math.random() * Math.PI * 2,
        };
      });

      const count = Math.round(Math.min(80, (width * height) / 13000));
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.3 + 0.5,
          phase: Math.random() * Math.PI * 2,
        });
      }
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
      seed();
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height);

      for (const node of nodes) {
        if (!reduced) {
          node.x += node.vx;
          node.y += node.vy;

          // Drift back inside instead of hard-bouncing at the edges.
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          // Gentle pull toward the cursor.
          if (pointer.live) {
            const dx = pointer.x - node.x;
            const dy = pointer.y - node.y;
            const dist = Math.hypot(dx, dy);
            if (dist < POINTER_RADIUS && dist > 1) {
              const pull = (1 - dist / POINTER_RADIUS) * 0.35;
              node.x += (dx / dist) * pull;
              node.y += (dy / dist) * pull;
            }
          }
        }
      }

      // Links
      ctx!.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist > LINK_DISTANCE) continue;

          const proximity = 1 - dist / LINK_DISTANCE;
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const nearPointer =
            pointer.live && Math.hypot(pointer.x - midX, pointer.y - midY) < POINTER_RADIUS;

          ctx!.globalAlpha = proximity * (nearPointer ? 0.5 : 0.16);
          ctx!.strokeStyle = nearPointer ? colors.accent : colors.muted;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.stroke();
        }
      }

      // Nodes
      for (const node of nodes) {
        const pulse = reduced ? 1 : 0.75 + Math.sin(time / 900 + node.phase) * 0.25;

        if (node.label) {
          ctx!.globalAlpha = 0.9;
          ctx!.fillStyle = colors.accent;
          ctx!.beginPath();
          ctx!.arc(node.x, node.y, node.r, 0, Math.PI * 2);
          ctx!.fill();

          ctx!.globalAlpha = 0.35 * pulse;
          ctx!.strokeStyle = colors.accent;
          ctx!.beginPath();
          ctx!.arc(node.x, node.y, node.r + 7 + pulse * 3, 0, Math.PI * 2);
          ctx!.stroke();

          ctx!.globalAlpha = 0.7;
          ctx!.fillStyle = colors.muted;
          ctx!.font =
            '600 9px ui-monospace, "SF Mono", SFMono-Regular, Menlo, monospace';
          ctx!.textAlign = "center";
          ctx!.fillText(node.label, node.x, node.y - 16);
        } else {
          ctx!.globalAlpha = 0.5 * pulse;
          ctx!.fillStyle = colors.foreground;
          ctx!.beginPath();
          ctx!.arc(node.x, node.y, node.r, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      // Cursor reticle
      if (pointer.live) {
        ctx!.globalAlpha = 0.5;
        ctx!.strokeStyle = colors.accent;
        ctx!.beginPath();
        ctx!.arc(pointer.x, pointer.y, 26, 0, Math.PI * 2);
        ctx!.stroke();

        ctx!.globalAlpha = 0.8;
        ctx!.beginPath();
        ctx!.moveTo(pointer.x - 9, pointer.y);
        ctx!.lineTo(pointer.x + 9, pointer.y);
        ctx!.moveTo(pointer.x, pointer.y - 9);
        ctx!.lineTo(pointer.x, pointer.y + 9);
        ctx!.stroke();
      }

      ctx!.globalAlpha = 1;
      if (!reduced) frame = requestAnimationFrame(draw);
    }

    function onPointerMove(event: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.live = true;

      if (readoutRef.current) {
        readoutRef.current.textContent = `X ${String(Math.round(pointer.x)).padStart(4, "0")}  Y ${String(Math.round(pointer.y)).padStart(4, "0")}`;
      }
    }

    function onPointerLeave() {
      pointer.live = false;
      pointer.x = -9999;
      pointer.y = -9999;
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

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      themeWatcher.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="pointer-events-auto size-full" />

      {/* Fades the field out behind the copy so the text stays readable. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 68% 52% at 38% 50%, var(--background) 32%, color-mix(in oklab, var(--background) 62%, transparent) 62%, transparent 88%)",
        }}
      />

      {/* HUD frame */}
      <div className="absolute inset-6 hidden sm:block">
        <Corner className="top-0 left-0 border-t border-l" />
        <Corner className="top-0 right-0 border-t border-r" />
        <Corner className="bottom-0 left-0 border-b border-l" />
        <Corner className="bottom-0 right-0 border-b border-r" />
      </div>

      <div className="absolute right-8 bottom-8 hidden text-right sm:block">
        <p className="label !text-[0.625rem]">Research array</p>
        <p className="label !text-[0.625rem] mt-1 text-accent">
          <span ref={readoutRef}>X 0000 Y 0000</span>
        </p>
      </div>

      <div className="scanline pointer-events-none absolute inset-0" />
    </div>
  );
}

function Corner({ className }: { className: string }) {
  return <span aria-hidden="true" className={`absolute size-5 border-accent/40 ${className}`} />;
}
