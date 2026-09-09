import { site } from "@/content/site";

export function ResumeButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={site.resume}
      download
      className={`group inline-flex items-center gap-2 rounded-full border border-accent text-accent transition-colors hover:bg-accent hover:text-background ${
        compact ? "px-3 py-1.5 text-xs" : "px-5 py-2.5 text-sm"
      }`}
    >
      Resume
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
        aria-hidden="true"
      >
        <path d="M8 2.5v8M4.5 7.5 8 11l3.5-3.5M3 13h10" />
      </svg>
    </a>
  );
}
