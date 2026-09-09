import type { Metadata } from "next";
import { ResumeButton } from "@/components/resume-button";
import {
  awards,
  bio,
  currently,
  education,
  interests,
  links,
  otherExperience,
  site,
} from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — ${site.role}.`,
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="py-20">
        <p className="label">About</p>
        <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          Economics, advocacy, and the argument between them
        </h1>

        <div className="mt-8 max-w-prose space-y-5 text-[1.0625rem] leading-relaxed text-muted">
          {bio.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8">
          <ResumeButton />
        </div>
      </section>

      <section className="border-t border-border py-12">
        <h2 className="label">Education</h2>
        <dl className="mt-6 space-y-5">
          {education.map((entry) => (
            <div key={entry.school}>
              <dt className="leading-relaxed">{entry.school}</dt>
              <dd className="mt-1 text-[0.9375rem] leading-relaxed text-muted">
                {entry.detail}
              </dd>
            </div>
          ))}
        </dl>
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
        <h2 className="label">Also</h2>
        <dl className="mt-6 space-y-6">
          {otherExperience.map((entry) => (
            <div key={entry.org}>
              <dt className="leading-relaxed">{entry.org}</dt>
              <dd className="mt-1 max-w-prose text-[0.9375rem] leading-relaxed text-muted">
                {entry.detail}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-border py-12">
        <h2 className="label">Recognition</h2>
        <ul className="mt-6 space-y-3">
          {awards.map((award) => (
            <li key={award} className="flex gap-3 leading-relaxed">
              <span aria-hidden="true" className="text-accent">
                —
              </span>
              <span className="text-muted">{award}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border py-12">
        <h2 className="label">Off the clock</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {interests.map((interest) => (
            <li
              key={interest}
              className="rounded-full border border-border px-3 py-1 text-sm text-muted"
            >
              {interest}
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
