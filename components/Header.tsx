import Link from "next/link";
import { siteConfig, waLink } from "@/data/config";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rose-light/40 bg-blush/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-script text-3xl text-rose-deep">
            {siteConfig.brand}
          </span>
          <span className="hidden font-display text-sm tracking-[0.2em] text-ink-soft uppercase sm:inline">
            Botanicals
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/shop"
            className="hidden font-sans text-sm font-medium text-ink hover:text-rose-deep sm:inline"
          >
            Shop
          </Link>
          <Link
            href="/skin-analysis"
            className="hidden font-sans text-sm font-medium text-ink hover:text-rose-deep sm:inline"
          >
            Skin Scan
          </Link>
          <Link
            href="/#about"
            className="hidden font-sans text-sm font-medium text-ink hover:text-rose-deep sm:inline"
          >
            About
          </Link>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-rose px-4 py-2 font-sans text-sm font-semibold text-blush transition hover:bg-rose-deep"
          >
            Order on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
