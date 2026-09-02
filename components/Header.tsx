"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig, waLink } from "@/data/config";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/packages", label: "Packages" },
  { href: "/skin-analysis", label: "Skin Scan" },
  { href: "/#about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-rose-light/40 bg-blush/80 px-5 py-3 shadow-lg backdrop-blur-md">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-script text-2xl text-rose-deep">
            {siteConfig.brand}
          </span>
          <span className="hidden font-display text-xs tracking-[0.2em] text-ink-soft uppercase sm:inline">
            Botanicals
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-ink/70 transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-rose px-4 py-2 font-sans text-sm font-semibold text-blush transition hover:bg-rose-deep"
          >
            Order on WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-rose/10 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden mx-auto max-w-6xl mt-2 rounded-3xl border border-rose-light/40 bg-blush/95 p-5 shadow-lg backdrop-blur-md">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-sans text-base font-medium text-ink transition hover:bg-rose/10 hover:text-rose-deep"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-rose-light/40 pt-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-rose px-6 py-3 font-sans text-sm font-semibold text-blush transition hover:bg-rose-deep"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
