import Link from "next/link";
import type { Post } from "@/content/site";

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostRow({ post }: { post: Post }) {
  return (
    <article className="group border-t border-border py-7">
      <Link href={`/writing/${post.slug}`} className="block">
        <h3 className="font-display text-2xl tracking-tight transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-2 max-w-prose text-[0.9375rem] leading-relaxed text-muted">
          {post.summary}
        </p>
        <p className="label mt-4">{formatDate(post.date)}</p>
      </Link>
    </article>
  );
}
