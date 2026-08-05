"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, cubicBezier } from "framer-motion";

const slides = [
  "/hero1.jpeg",
  "/hero2.jpeg",
  "/hero3.jpeg",
  "/hero4.jpeg",
  "/hero5.jpeg",
];

const EASE = cubicBezier(0.22, 1, 0.36, 1);
const DURATION = 0.6;
const INTERVAL = 5000;

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      INTERVAL
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <>
      <div
        className="relative h-[300px] overflow-hidden md:absolute md:right-0 md:top-0 md:bottom-0 md:h-auto md:w-[55%]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slides[current]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: DURATION, ease: EASE }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current]})` }}
          />
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-cream via-cream/40 to-transparent md:block" />
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-6 bg-gradient-to-b from-cream to-transparent md:block" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-cream to-transparent md:h-8" />

        <div className="absolute bottom-5 right-5 flex gap-2">
          {slides.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                i === current ? "bg-rose-deep" : "bg-rose/40 hover:bg-rose/70"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 left-6 z-10 font-display text-sm tracking-[0.2em] text-ink-soft">
        {String(current + 1).padStart(2, "0")}
        <span className="mx-1.5 text-rose/60">/</span>
        {String(slides.length).padStart(2, "0")}
      </div>
    </>
  );
}
