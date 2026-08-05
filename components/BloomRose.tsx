// A hand-built line-art rose that "blooms" open on load — each petal
// scales in with a staggered delay. This is the page's signature
// element: it ties directly to the product (rose water) instead of
// a generic decorative shape.
export default function BloomRose({ className }: { className?: string }) {
  const petals = [
    { d: "M60 60 C40 45 35 20 60 12 C85 20 80 45 60 60 Z", delay: "0s" },
    { d: "M60 60 C80 45 105 50 108 72 C88 82 68 72 60 60 Z", delay: "0.12s" },
    { d: "M60 60 C75 82 68 106 46 106 C36 86 46 68 60 60 Z", delay: "0.24s" },
    { d: "M60 60 C40 78 15 70 15 48 C33 40 50 48 60 60 Z", delay: "0.36s" },
    { d: "M60 60 C50 40 60 20 78 26 C82 44 70 56 60 60 Z", delay: "0.48s" },
  ];

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="Illustration of a blooming rose"
    >
      <circle cx="60" cy="60" r="58" fill="none" stroke="#e8a3b8" strokeWidth="1" opacity="0.5" />
      {petals.map((p, i) => (
        <path
          key={i}
          d={p.d}
          fill="none"
          stroke="#b5335a"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="bloom-petal"
          style={{ animationDelay: p.delay }}
        />
      ))}
      <circle cx="60" cy="60" r="6" fill="#c9a24b" className="bloom-petal" style={{ animationDelay: "0.6s" }} />
    </svg>
  );
}
