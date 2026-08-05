"use client";

import { useEffect, useRef, ReactNode } from "react";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  const divRef = useReveal<HTMLDivElement>();
  const liRef = useReveal<HTMLLIElement>();
  const style = { transitionDelay: `${delay}ms` };

  if (as === "li") {
    return (
      <li ref={liRef} className={`reveal ${className}`} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div ref={divRef} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
