"use client";

import { useState } from "react";
import { Check, Link2, MessageCircle, Share2, X } from "lucide-react";

export default function ShareButtons({
  product,
  className = "",
}: {
  product: { name: string };
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const url =
    typeof window !== "undefined"
      ? window.location.origin + window.location.pathname
      : "";
  const text = `${product.name} — Marie's Skincare`;

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: product.name, text, url });
        return;
      } catch {
        /* fall through to menu */
      }
    }
    setOpen((o) => !o);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const menuItem =
    "flex items-center gap-2 rounded-xl px-3 py-2 font-sans text-sm text-ink transition hover:bg-blush-deep";

  return (
    <div className={`relative inline-flex flex-wrap items-center gap-3 ${className}`}>
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-2 rounded-full border border-rose px-6 py-3 font-sans text-sm font-semibold text-rose-deep transition hover:-translate-y-0.5 hover:bg-rose hover:text-blush"
      >
        <Share2 className="h-4 w-4" aria-hidden="true" />
        Share
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <div className="absolute bottom-full left-0 z-50 mb-2 w-52 rounded-2xl border border-rose-light/40 bg-white p-2 shadow-xl shadow-rose-light/20">
            <button
              type="button"
              onClick={copyLink}
              className={menuItem}
            >
              {copied ? (
                <Check className="h-4 w-4 text-moss" aria-hidden="true" />
              ) : (
                <Link2 className="h-4 w-4 text-ink-soft" aria-hidden="true" />
              )}
              {copied ? "Link copied!" : "Copy link"}
            </button>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={menuItem}
            >
              <MessageCircle className="h-4 w-4 text-ink-soft" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={menuItem}
            >
              <svg
                className="h-4 w-4 text-ink-soft"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.5 9H16l.5-3h-3V4.5c0-.87.21-1.5 1.55-1.5H16.6V.35C16.33.31 15.28.2 14.07.2 11.55.2 9.8 1.72 9.8 4.57V6H7v3h2.8v9h3.7V9z" />
              </svg>
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={menuItem}
            >
              <svg
                className="h-4 w-4 text-ink-soft"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.5 3h3.1l-6.8 7.8L21.9 21h-6.3l-4.9-6.4L5.1 21H2l7.3-8.4L2.3 3h6.4l4.4 5.9L17.5 3zm-1.1 16h1.7L7.9 4.7H6.1L16.4 19z" />
              </svg>
              X (Twitter)
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close share menu"
              className="absolute top-2 right-2 rounded-full p-1 text-ink-soft transition hover:text-ink"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
