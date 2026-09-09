import type { Metadata } from "next";
import { bio, currently, links, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — ${site.role} based in ${site.location}.`,
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="py-20">
        <p className="label">About</p>
        <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          {site.role} in {site.location}
        </h1>

        <div className="mt-8 max-w-prose space-y-5 text-[1.0625rem] leading-relaxed text-muted">
          {bio.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-12">
        <h2 className="label">Currently</h2>
        <ul className="mt-6 space-y-3">
          {currently.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed">
              <span aria-hidden="true" className="text-accent">
                —
              </span>
              <span className="text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border py-12">
        <h2 className="label">Elsewhere</h2>
        <ul className="mt-6 space-y-3">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </li>
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
