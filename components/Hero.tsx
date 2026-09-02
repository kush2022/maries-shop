import { siteConfig, waLink } from "@/data/config";
import ImageCarousel from "./image-carousel";
import HeroTypewriter from "./HeroTypewriter";
import { Highlighter } from "@/components/ui/highlighter";

export default function Hero() {
  return (
    <section className="relative flex flex-col bg-cream md:min-h-[600px]">
      <ImageCarousel />

      <div className="relative z-10 flex flex-1 flex-col justify-center">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20">
          <div className="pointer-events-auto max-w-xl">
            <p
              className="rise-in mb-3 font-sans text-xs font-semibold tracking-[0.3em] text-moss uppercase"
              style={{ animationDelay: "0.05s" }}
            >
              Small-batch · Botanical · Kenyan-made
            </p>
            <h1
              className="rise-in font-display text-3xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.15s" }}
            >
              <Highlighter action="highlight" color="#FF9800">
                Natural beauty,
              </Highlighter>
              <br />
              <span className="italic text-rose-deep">
                <Highlighter action="underline" color="#FF9800">
                  gently made.
                </Highlighter>
              </span>
            </h1>
            <HeroTypewriter />
            <p
              className="rise-in mt-4 max-w-md font-sans text-base leading-relaxed text-ink-soft"
              style={{ animationDelay: "0.3s" }}
            >
              {siteConfig.brand} creates simple, honest skincare inspired by
              nature. Thoughtfully formulated with botanical ingredients to
              elevate your everyday self-care ritual.
            </p>
            <div
              className="rise-in mt-6 flex flex-wrap gap-3"
              style={{ animationDelay: "0.45s" }}
            >
                <a
                  href="/shop"
                  className="rounded-full bg-ink px-6 py-3 font-sans text-sm font-semibold text-blush transition hover:-translate-y-0.5 hover:bg-rose-deep"
                >
                  Browse the shop
                </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-rose px-6 py-3 font-sans text-sm font-semibold text-rose-deep transition hover:-translate-y-0.5 hover:bg-rose hover:text-blush"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-4 top-40 z-20 flex -translate-y-1/2 flex-col items-center gap-4 md:right-6 md:top-1/2">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message us on WhatsApp"
          className="text-ink/70 transition hover:text-rose-deep"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2.05 22l5.3-1.39c1.45.79 3.08 1.21 4.69 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7C17.15 3.03 14.68 2 12.04 2zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.73c0 4.46-3.63 8.1-8.1 8.1-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.06 8.06 0 0 1-1.23-4.29c0-4.46 3.63-8.1 8.1-8.1zm-2.07 3.95c-.2 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.44 1.05 2.83 1.19 3.02.14.2 2.01 3.21 4.95 4.37 2.45.96 2.95.77 3.48.72.53-.05 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.2-.55-.35-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.14-.65.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07a8 8 0 0 1-2.33-1.44 8.77 8.77 0 0 1-1.61-2c-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.2-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.62-1.51-.87-2.07-.23-.53-.46-.46-.63-.47-.16 0-.35-.01-.54-.01z" />
          </svg>
        </a>
        {siteConfig.instagram && (
          <a
            href={`https://instagram.com/${siteConfig.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="text-ink/70 transition hover:text-rose-deep"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9c-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a6.05 6.05 0 0 0-2.18 1.42A6.05 6.05 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.42 2.18a6.05 6.05 0 0 0 2.18 1.42c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a6.05 6.05 0 0 0 2.18-1.42 6.05 6.05 0 0 0 1.42-2.18c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a6.05 6.05 0 0 0-1.42-2.18A6.05 6.05 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.15A3.99 3.99 0 1 1 16 12a3.99 3.99 0 0 1-4 3.99zM19.85 5.59a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
            </svg>
          </a>
        )}
      </div>
    </section>
  );
}
