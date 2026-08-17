"use client";

import { useState } from "react";
import { siteConfig } from "@/data/config";
import Reveal from "./Reveal";

const skinTypes = [
  { id: "dry", label: "Dry", emoji: "\u{1F4A7}" },
  { id: "oily", label: "Oily", emoji: "\u{1F31F}" },
  { id: "combination", label: "Combination", emoji: "\u{1F33F}" },
  { id: "sensitive", label: "Sensitive", emoji: "\u{1F490}" },
  { id: "normal", label: "Normal", emoji: "\u{1F60C}" },
  { id: "acne-prone", label: "Acne-prone", emoji: "\u{1F33E}" },
];

const concerns = [
  "Acne & breakouts",
  "Dryness & flaking",
  "Dullness",
  "Dark spots",
  "Redness",
  "Fine lines",
];

const steps = [
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "Tell us about your skin",
    detail:
      "Pick your skin type and concerns below. Honest and simple, no jargon.",
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v12" />
        <path d="m8 11 4 4 4-4" />
        <path d="M4 21h16" />
      </svg>
    ),
    title: "Build your routine",
    detail:
      "We recommend a simple, affordable routine tailored to your skin type, concerns and budget.",
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    title: "Follow up, free of charge",
    detail:
      "Check back in after a few weeks and we'll adjust the routine as your skin changes.",
  },
];

function buildMessage(skinType: string | null, concerns: string[]) {
  let msg = `Hi ${siteConfig.brand}, I'd like a free skincare consultation.`;
  if (skinType) {
    msg += ` My skin type is ${skinType}.`;
  }
  if (concerns.length > 0) {
    msg += ` My main concerns: ${concerns.join(", ")}.`;
  }
  msg += " Could you recommend a routine?";
  return msg;
}

export default function SkinCareConsultation({
  className = "",
}: {
  className?: string;
}) {
  const [skinType, setSkinType] = useState<string | null>(null);
  const [concernList, setConcernList] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const toggleConcern = (concern: string) => {
    setConcernList((prev) =>
      prev.includes(concern)
        ? prev.filter((c) => c !== concern)
        : [...prev, concern]
    );
  };

  const message = buildMessage(skinType, concernList);
  const waHref = `https://wa.me/${siteConfig.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
  const hasSelection = skinType !== null || concernList.length > 0;

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="consultation" className={`mx-auto max-w-6xl px-6 py-20 ${className}`}>
      <div className="relative overflow-hidden rounded-3xl bg-blush-deep px-6 py-14 sm:px-12 lg:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-rose-light/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl"
        />

        <div className="relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-xs font-semibold tracking-[0.3em] text-moss uppercase">
              Free with every order
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Not sure where to start?
              <br />
              <span className="font-script text-rose-deep">
                let&apos;s build your routine.
              </span>
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-ink-soft">
              A quick, friendly consultation with {siteConfig.brand}. Tell us about
              your skin and we&apos;ll put together a simple routine you can actually
              stick to. No long forms, no pressure, just what works.
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-3xl border border-rose-light/30 bg-white p-6 sm:p-8">
              <p className="font-sans text-xs font-semibold tracking-widest text-moss uppercase">
                Step 1 · Your skin type
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {skinTypes.map((type) => {
                  const selected = skinType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSkinType(selected ? null : type.id)}
                      aria-pressed={selected}
                      className={`flex items-center gap-2 rounded-full border px-4 py-2.5 font-sans text-sm font-semibold transition ${
                        selected
                          ? "border-rose bg-rose text-blush"
                          : "border-rose-light/40 bg-blush text-ink hover:border-rose hover:text-rose-deep"
                      }`}
                    >
                      <span aria-hidden>{type.emoji}</span>
                      {type.label}
                    </button>
                  );
                })}
              </div>

              <p className="mt-8 font-sans text-xs font-semibold tracking-widest text-moss uppercase">
                Step 2 · Your main concerns
                <span className="ml-2 font-normal text-ink-soft normal-case">
                  (pick any)
                </span>
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {concerns.map((concern) => {
                  const selected = concernList.includes(concern);
                  return (
                    <button
                      key={concern}
                      type="button"
                      onClick={() => toggleConcern(concern)}
                      aria-pressed={selected}
                      className={`rounded-full border px-4 py-2 font-sans text-sm font-semibold transition ${
                        selected
                          ? "border-moss bg-moss text-blush"
                          : "border-rose-light/40 bg-blush text-ink hover:border-moss hover:text-moss"
                      }`}
                    >
                      {concern}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl bg-blush-deep/60 p-4">
                <p className="font-sans text-xs font-semibold tracking-widest text-ink-soft uppercase">
                  Preview your message
                </p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink">
                  {message}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-moss px-7 py-3 font-sans text-sm font-semibold text-blush shadow-lg shadow-moss/20 transition hover:-translate-y-0.5 hover:bg-moss-light"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.15L2 22l5.09-1.53a9.9 9.9 0 0 0 4.95 1.32c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.16c-.24.68-1.4 1.31-1.93 1.36-.5.06-1.02.26-3.41-.71-2.88-1.18-4.73-4.07-4.87-4.26-.14-.19-1.17-1.56-1.17-2.98 0-1.42.75-2.11 1.02-2.4.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .9 2.14.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.04 1.3 2.34 1.44.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.29.4-.24.66-.15.27.1 1.71.81 2 .96.29.15.48.22.55.34.07.13.07.75-.17 1.42z" />
                  </svg>
                  Send on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={copyMessage}
                  className="inline-flex items-center gap-2 rounded-full border border-rose px-7 py-3 font-sans text-sm font-semibold text-rose-deep transition hover:-translate-y-0.5 hover:bg-rose hover:text-blush"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  {copied ? "Copied!" : "Copy message"}
                </button>
                {siteConfig.instagram && (
                  <a
                    href={`https://instagram.com/${siteConfig.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-rose px-7 py-3 font-sans text-sm font-semibold text-rose-deep transition hover:-translate-y-0.5 hover:bg-rose hover:text-blush"
                  >
                    DM us on Instagram
                  </a>
                )}
              </div>

              <p className="mt-4 font-sans text-xs text-ink-soft">
                {hasSelection
                  ? "We'll use your answers to give you a tailored routine."
                  : "No commitment. A friendly chat, nothing more. You can answer all or none of these."}
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 140}
                className="relative rounded-2xl border border-rose-light/30 bg-white p-6"
              >
                <span className="absolute top-5 right-5 font-display text-4xl leading-none text-rose-light/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rose/10 text-rose-deep">
                  {step.icon}
                </span>
                <h3 className="mt-4 font-display text-lg text-ink">{step.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">
                  {step.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}