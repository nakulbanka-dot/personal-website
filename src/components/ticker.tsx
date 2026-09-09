import { ticker } from "@/content/site";

export function Ticker() {
  // Rendered twice so the loop can wrap at -50% without a visible seam.
  const items = [...ticker, ...ticker];

  return (
    <div className="marquee relative overflow-hidden border-y border-border py-4">
      <div className="marquee-track flex w-max gap-10">
        {items.map((item, i) => (
          <span key={i} className="label flex shrink-0 items-center gap-10">
            {item}
            <span aria-hidden="true" className="text-accent">
              ✳
            </span>
          </span>
        ))}
      </div>

      {/* Fade the strip out at both edges. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
