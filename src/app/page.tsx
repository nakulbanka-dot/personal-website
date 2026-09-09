import Link from "next/link";
import { Showcase } from "@/components/showcase";
import { Ticker } from "@/components/ticker";
import { Reveal } from "@/components/reveal";
import { ResumeButton } from "@/components/resume-button";
import { ResearchArray } from "@/components/research-array";
import { intro, photos, showcase, site } from "@/content/site";

export default function Home() {
  return (
    <div>
      <section className="relative isolate min-h-[88vh] overflow-hidden border-b border-border">
        <ResearchArray />

        <div className="pointer-events-none relative z-10 mx-auto flex min-h-[88vh] max-w-3xl flex-col justify-center px-6 py-20">
          <p className="label fade-up">{site.location}</p>

          <h1
            className="fade-up mt-4 font-display text-6xl leading-[0.95] tracking-tight sm:text-8xl"
            style={{ animationDelay: "80ms" }}
          >
            {site.name}
          </h1>

          <p
            className="fade-up mt-8 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "180ms" }}
          >
            {intro}
          </p>

          <div
            className="fade-up pointer-events-auto mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "280ms" }}
          >
            <ResumeButton />
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <div className="fade-up" style={{ animationDelay: "380ms" }}>
        <Ticker />
      </div>

      <section className="mx-auto max-w-3xl px-6 pt-16">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="label">Selected work</h2>
            <span className="label">
              01 — {String(showcase.length).padStart(2, "0")}
            </span>
          </div>
          <p className="mt-3 max-w-md text-sm text-muted">
            Hover any entry to read it.
          </p>
        </Reveal>

        <Showcase />
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="label">Photography</h2>
            <Link
              href="/photography"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              View portfolio →
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {photos.slice(0, 3).map((photo) => (
              <Link
                key={photo.id}
                href="/photography"
                className="group relative aspect-square overflow-hidden border border-border bg-surface"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-surface to-background transition-transform duration-500 group-hover:scale-105" />
                <span className="label absolute bottom-2 left-3">{photo.location}</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl border-t border-border px-6 py-16">
        <Reveal>
          <h2 className="font-display text-4xl tracking-tight">Let&apos;s talk</h2>
          <p className="mt-3 max-w-lg leading-relaxed text-muted">
            I&apos;m always up for a conversation — about research, advocacy, or something
            you&apos;re working on. Email is the fastest way to reach me.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block font-display text-2xl text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {site.email}
          </a>
        </Reveal>
      </section>
    </div>
  );
}
