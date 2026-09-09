import type { Project } from "@/content/site";

const statusStyles: Record<Project["status"], string> = {
  Live: "text-accent",
  Building: "text-accent",
  Archived: "text-muted",
};

export function ProjectRow({ project }: { project: Project }) {
  const target = project.href ?? project.repo;

  return (
    <article className="group border-t border-border py-7">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl tracking-tight">
          {target ? (
            <a
              href={target}
              target="_blank"
              rel="noreferrer"
              className="transition-colors group-hover:text-accent"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <span className="label shrink-0">{project.year}</span>
      </div>

      <p className="mt-2 max-w-prose text-[0.9375rem] leading-relaxed text-muted">
        {project.blurb}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className={`label ${statusStyles[project.status]}`}>{project.status}</span>
        <span aria-hidden="true" className="text-border">
          /
        </span>
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs text-muted">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
