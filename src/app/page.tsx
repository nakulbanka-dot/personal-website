import Link from "next/link";
import { ExperienceRow } from "@/components/experience-row";
import { awards, experience, intro, site } from "@/content/site";

export default function Home() {
  const featured = experience.filter((item) => item.featured);

  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="py-20 sm:py-28">
        <p className="label">{site.location}</p>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{intro}</p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          <Link
            href="/experience"
            className="text-sm text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
          >
            What I&apos;ve worked on
          </Link>
          <Link
            href="/photography"
            className="text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent"
          >
            Photography
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="flex items-baseline justify-between">
          <h2 className="label">Selected work</h2>
          <Link
            href="/experience"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Everything →
          </Link>
        </div>
        <div className="mt-6">
          {featured.map((item) => (
            <ExperienceRow key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="border-t border-border py-12">
        <h2 className="label">Recognition</h2>
        <ul className="mt-6 space-y-3">
          {awards.slice(0, 4).map((award) => (
            <li key={award} className="flex gap-3 leading-relaxed">
              <span aria-hidden="true" className="text-accent">
                —
              </span>
              <span className="text-muted">{award}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/about"
          className="mt-6 inline-block text-sm text-muted transition-colors hover:text-accent"
        >
          Full list →
        </Link>
      </section>

      <section className="border-t border-border py-16">
        <h2 className="font-display text-3xl tracking-tight">Let&apos;s talk</h2>
        <p className="mt-3 max-w-lg leading-relaxed text-muted">
          I&apos;m always up for a conversation — about research, a project, or something
          you&apos;re working on. Email is the fastest way to reach me.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-6 inline-block font-display text-2xl text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
        >
          {site.email}
        </a>
      </section>
    </div>
  );
}
