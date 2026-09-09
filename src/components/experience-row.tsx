import type { Experience } from "@/content/site";

export function ExperienceRow({ item }: { item: Experience }) {
  return (
    <article className="border-t border-border py-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-2xl tracking-tight">{item.org}</h3>
        <span className="label shrink-0">{item.period}</span>
      </div>

      <p className="mt-1 text-sm text-accent">{item.role}</p>

      <p className="mt-3 max-w-prose text-[0.9375rem] leading-relaxed text-muted">
        {item.summary}
      </p>

      <ul className="mt-4 space-y-2">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-[0.9375rem] leading-relaxed">
            <span aria-hidden="true" className="text-accent">
              —
            </span>
            <span className="text-muted">{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
