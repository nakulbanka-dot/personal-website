import type { Metadata } from "next";
import { ProjectRow } from "@/components/project-row";
import { projects, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Things ${site.name} has designed, built, and shipped.`,
};

export default function Projects() {
  const sorted = [...projects].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="py-20">
        <p className="label">Projects</p>
        <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          Things I&apos;ve built
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">
          A mix of finished work, live experiments, and things I stopped maintaining but
          learned a lot from. Most of the code is on GitHub.
        </p>

        <div className="mt-12">
          {sorted.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
