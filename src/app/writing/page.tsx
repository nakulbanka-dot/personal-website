import type { Metadata } from "next";
import { PostRow } from "@/components/post-row";
import { posts, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Writing",
  description: `Essays and notes by ${site.name} on building software.`,
};

export default function Writing() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="py-20">
        <p className="label">Writing</p>
        <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          Notes on building things
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">
          Occasional essays about projects, process, and the parts of software that are
          harder than they look.
        </p>

        <div className="mt-12">
          {sorted.map((post) => (
            <PostRow key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
