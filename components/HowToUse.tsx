import Reveal from "./Reveal";

export default function HowToUse({
  steps,
}: {
  steps: { title: string; detail: string }[];
}) {
  return (
    <div>
      <span className="inline-block rounded-full bg-moss px-4 py-1.5 font-sans text-xs font-semibold tracking-widest text-blush uppercase">
        How to use
      </span>
      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {steps.map((step, i) => (
          <Reveal
            key={i}
            delay={i * 90}
            className="border-l-2 border-rose-light pl-4 transition-colors hover:border-rose"
          >
            <p className="font-display text-base italic text-rose-deep">
              {step.title}
            </p>
            <p className="mt-1 font-sans text-sm leading-relaxed text-ink-soft">
              {step.detail}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
