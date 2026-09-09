import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/components/post-row";
import { posts } from "@/content/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default async function PostPage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6">
      <article className="py-20">
        <Link href="/writing" className="label transition-colors hover:text-accent">
          ← Writing
        </Link>

        <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="label mt-5">{formatDate(post.date)}</p>

        <div className="mt-10 max-w-prose space-y-6 text-[1.0625rem] leading-relaxed text-muted">
          {post.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="pt-4 font-display text-2xl tracking-tight text-foreground"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-accent pl-5 font-display text-xl leading-relaxed text-foreground"
                >
                  {block.text}
                </blockquote>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="text-accent">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return <p key={i}>{block.text}</p>;
          })}
        </div>
      </article>
    </div>
  );
}
