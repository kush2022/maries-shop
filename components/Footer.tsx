import { siteConfig } from "@/data/config";

export default function Footer() {
  return (
    <footer id="about" className="mt-10 border-t border-rose-light/40 bg-blush-deep">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <span className="font-script text-3xl text-rose-deep">
              {siteConfig.brand}
            </span>
            <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-ink-soft">
              {siteConfig.tagline} Made with real botanical extracts —
              gentle, pure, effective.
            </p>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold tracking-widest text-moss uppercase">
              Contact
            </p>
            <p className="mt-3 font-sans text-sm text-ink">
              {siteConfig.phoneDisplay}
            </p>
            <p className="mt-1 font-sans text-sm text-ink-soft">
              Message us on WhatsApp to order or ask a question.
            </p>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold tracking-widest text-moss uppercase">
              Care
            </p>
            <p className="mt-3 font-sans text-sm text-ink-soft">
              {siteConfig.storageNote}
            </p>
          </div>
        </div>

        <div className="divider-rose mt-10" />
        <p className="mt-6 font-sans text-xs text-ink-soft">
          © {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
