import type { Metadata } from "next";
import { PhotoGrid } from "@/components/photo-grid";
import { photographyIntro, photos, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Photography",
  description: `Photographs by ${site.name}.`,
};

export default function Photography() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="py-20">
        <p className="label">Photography</p>
        <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          Portfolio
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">{photographyIntro}</p>

        <div className="mt-12">
          <PhotoGrid photos={photos} />
        </div>
      </section>
    </div>
  );
}
