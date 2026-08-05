"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { Product } from "@/data/products";

type Media =
  | { kind: "image"; src: string }
  | { kind: "video"; src: string; poster: string };

function buildMedia(product: Product): Media[] {
  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];
  const list: Media[] = images.map((src) => ({ kind: "image", src }));
  if (product.video) {
    list.push({ kind: "video", src: product.video, poster: images[0] });
  }
  return list;
}

export default function ProductGallery({ product }: { product: Product }) {
  const media = buildMedia(product);
  const [active, setActive] = useState(0);
  const current = media[active];

  return (
    <div className="rise-in" style={{ animationDelay: "0.05s" }}>
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-blush-deep">
        {current.kind === "image" ? (
          <Image
            src={current.src}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        ) : (
          <video
            src={current.src}
            poster={current.poster}
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {product.badge && (
          <span className="absolute top-4 left-4 z-10 rounded-full bg-moss px-3 py-1 font-sans text-xs font-semibold text-blush">
            {product.badge}
          </span>
        )}
      </div>

      {media.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {media.map((m, i) => (
            <button
              key={`${m.kind}-${m.src}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={
                m.kind === "video"
                  ? "Show product video"
                  : `Show image ${i + 1}`
              }
              aria-pressed={active === i}
              className={`relative aspect-square w-20 overflow-hidden rounded-2xl bg-blush-deep transition sm:w-24 ${
                active === i
                  ? "ring-2 ring-rose ring-offset-2 ring-offset-blush"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              {m.kind === "image" ? (
                <Image
                  src={m.src}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              ) : (
                <>
                  <Image
                    src={m.poster}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-ink/30">
                    <Play className="h-6 w-6 text-blush" fill="currentColor" />
                  </span>
                </>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
