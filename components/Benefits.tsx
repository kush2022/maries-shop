import Reveal from "./Reveal";

const icons = ["\u{1F4A7}", "\u{1F33F}", "\u2728", "\u{1F6E1}", "\u{1F49B}", "\u{1F338}"];

export default function Benefits({ items, title = "Benefits" }: { items: string[]; title?: string }) {
  return (
    <div>
      <span className="inline-block rounded-full bg-rose px-4 py-1.5 font-sans text-xs font-semibold tracking-widest text-blush uppercase">
        {title}
      </span>
      <ul className="mt-5 divide-y divide-rose-light/30">
        {items.map((item, i) => (
          <Reveal
            key={i}
            as="li"
            delay={i * 70}
            className="flex items-start gap-3 py-3"
          >
            <span
              aria-hidden
              className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-rose/10 text-sm"
            >
              {icons[i % icons.length]}
            </span>
            <span className="font-sans text-sm leading-relaxed text-ink">{item}</span>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
