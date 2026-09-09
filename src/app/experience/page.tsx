import type { Metadata } from "next";
import { ExperienceRow } from "@/components/experience-row";
import { experience, programs, service, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Experience",
  description: `Research, advocacy, and ventures ${site.name} has worked on.`,
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="py-20">
        <p className="label">Experience</p>
        <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          Research, advocacy, and a few ventures
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">
          Work in economics and finance, advocacy for federal recognition of the Muwekma
          Ohlone Tribe, and businesses built around teaching people to speak well.
        </p>

        <div className="mt-12">
          {experience.map((item) => (
            <ExperienceRow key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="border-t border-border py-12">
        <h2 className="label">Programs</h2>
        <dl className="mt-6 space-y-5">
          {programs.map((program) => (
            <div key={program.name}>
              <dt className="leading-relaxed">{program.name}</dt>
              <dd className="mt-1 text-[0.9375rem] leading-relaxed text-muted">
                {program.detail}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-border py-12">
        <h2 className="label">Service</h2>
        <dl className="mt-6 space-y-5">
          {service.map((entry) => (
            <div key={entry.org}>
              <dt className="leading-relaxed">{entry.org}</dt>
              <dd className="mt-1 text-[0.9375rem] leading-relaxed text-muted">
                {entry.detail}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
