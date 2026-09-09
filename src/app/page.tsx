import Link from "next/link";
import { ProjectRow } from "@/components/project-row";
import { PostRow } from "@/components/post-row";
import { intro, posts, projects, site } from "@/content/site";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const recent = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);

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
            href="/projects"
            className="text-sm text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
          >
            See what I&apos;ve built
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
          <Link href="/projects" className="text-sm text-muted transition-colors hover:text-accent">
            All projects →
          </Link>
        </div>
        <div className="mt-6">
          {featured.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="flex items-baseline justify-between">
          <h2 className="label">Writing</h2>
          <Link href="/writing" className="text-sm text-muted transition-colors hover:text-accent">
            All posts →
          </Link>
        </div>
        <div className="mt-6">
          {recent.map((post) => (
            <PostRow key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="border-t border-border py-16">
        <h2 className="font-display text-3xl tracking-tight">Let&apos;s talk</h2>
        <p className="mt-3 max-w-lg leading-relaxed text-muted">
          I&apos;m always up for a conversation about a project, an idea, or something
          you&apos;re building. The fastest way to reach me is email.
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
