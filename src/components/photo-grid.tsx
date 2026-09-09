"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/content/site";

const aspect: Record<Photo["orientation"], string> = {
  portrait: "aspect-[2/3]",
  landscape: "aspect-[3/2]",
  square: "aspect-square",
};

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const open = openIndex !== null ? photos[openIndex] : null;

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 [&>*]:mb-5">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => photo.src && setOpenIndex(i)}
            aria-label={photo.src ? `View ${photo.title}` : undefined}
            disabled={!photo.src}
            className="group block w-full break-inside-avoid text-left"
          >
            <div
              className={`relative w-full overflow-hidden border border-border bg-surface ${aspect[photo.orientation]}`}
            >
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <Placeholder />
              )}
            </div>
            <div className="mt-2 flex items-baseline justify-between gap-3">
              <span className="text-sm text-muted">{photo.title}</span>
              {photo.location && <span className="label shrink-0">{photo.location}</span>}
            </div>
          </button>
        ))}
      </div>

      {open?.src && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={close}
          className="fixed inset-0 z-100 flex items-center justify-center bg-background/95 p-6 backdrop-blur"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-6 right-6 label transition-colors hover:text-accent"
          >
            Close ✕
          </button>

          <Image
            src={open.src}
            alt={open.title}
            width={open.width ?? 1600}
            height={open.height ?? 1067}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-auto object-contain"
          />

          {photos.filter((p) => p.src).length > 1 && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-6 flex gap-8"
            >
              <button
                type="button"
                onClick={() => step(-1)}
                className="label transition-colors hover:text-accent"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="label transition-colors hover:text-accent"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

function Placeholder() {
  return (
    <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-surface to-background">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="size-7 text-border"
        aria-hidden="true"
      >
        <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.2l1.1-1.8A1 1 0 0 1 8.7 4.7h6.6a1 1 0 0 1 .9.5L17.3 7h2.2A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5Z" />
        <circle cx="12" cy="12.8" r="3.4" />
      </svg>
    </div>
  );
}
