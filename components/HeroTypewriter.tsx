"use client";

import { useEffect, useState } from "react";

const services = [
  "Rose water toners, hand-blended",
  "Botanical body & face oils",
  "Gentle rose clay masks",
  "Small-batch, Kenyan-made skincare",
];

export default function HeroTypewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = services[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % services.length);
      }, 400);
    } else {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? 40 : 70
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <p
      className="mt-3 h-7 font-display text-lg italic text-rose-deep sm:text-xl"
      aria-live="polite"
    >
      {text}
      <span
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-rose-deep"
        aria-hidden="true"
      />
    </p>
  );
}
