"use client";

import { useMemo, useState } from "react";
import {
  AnimatePresence,
  cubicBezier,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Search, X } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const categories = [
  "All",
  ...Array.from(new Set(products.map((p) => p.category))),
  "Fragrance",
  "Natural Make Up",
];

const sorts = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

const EASE = cubicBezier(0.22, 1, 0.36, 1);

function priceNumber(price: string) {
  return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
}

export default function ShopBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const shouldReduceMotion = useReducedMotion();

  const entranceTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: EASE };
  const controlsTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.6, delay: 0.08, ease: EASE };
  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            duration: 0.45,
            delay: Math.min(index, 6) * 0.045,
            ease: EASE,
          },
    }),
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products.filter((p) => {
      const inCategory = category === "All" || p.category === category;
      const inQuery =
        !q ||
        [p.name, p.tagline, p.category, p.short, p.badge ?? ""]
          .join(" ")
          .toLowerCase()
          .includes(q);
      return inCategory && inQuery;
    });

    if (sort === "price-asc") {
      list = [...list].sort((a, b) => priceNumber(a.price) - priceNumber(b.price));
    } else if (sort === "price-desc") {
      list = [...list].sort((a, b) => priceNumber(b.price) - priceNumber(a.price));
    }
    return list;
  }, [query, category, sort]);

  return (
    <section>
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={entranceTransition}
        className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="font-sans text-xs font-semibold tracking-[0.3em] text-moss uppercase">
            The line
          </p>
          <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
            Browse the shop
          </h1>
          <p className="mt-3 max-w-md font-sans text-base leading-relaxed text-ink-soft">
            Search and filter the full range of Marie&apos;s small-batch,
            botanical skincare.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={controlsTransition}
        className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="group relative w-full max-w-sm">
          <Search
            className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-ink-soft transition duration-300 group-focus-within:scale-110 group-focus-within:text-rose-deep motion-reduce:transform-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            aria-label="Search products"
            className="w-full rounded-full border border-rose-light/40 bg-white py-2.5 pr-10 pl-11 font-sans text-sm text-ink transition-[border-color,box-shadow] duration-200 placeholder:text-ink-soft/70 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 text-ink-soft transition duration-200 hover:bg-blush-deep hover:text-rose-deep active:scale-90 motion-reduce:transform-none"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter by category"
          >
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`relative rounded-full border px-4 py-2 font-sans text-sm font-medium transition-[color,border-color,background-color,transform] duration-200 active:scale-[0.97] motion-reduce:transform-none ${
                  category === c
                    ? "border-rose-deep text-blush"
                    : "border-rose-light/40 bg-white text-ink hover:border-rose hover:text-rose-deep"
                }`}
              >
                {category === c && (
                  <motion.span
                    aria-hidden="true"
                    layoutId="shop-category-pill"
                    className="absolute inset-0 rounded-full bg-rose-deep"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.28, ease: EASE }
                    }
                  />
                )}
                <span className="relative z-10">{c}</span>
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
            className="cursor-pointer rounded-full border border-rose-light/40 bg-white px-4 py-2 font-sans text-sm text-ink transition-[border-color,box-shadow] duration-200 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20"
          >
            {sorts.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      <p className="mt-6 font-sans text-sm text-ink-soft" role="status" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={`${filtered.length}-${category}-${sort}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.18, ease: EASE }
            }
            className="inline-block"
          >
            Showing {filtered.length} of {products.length} products
            {category !== "All" && ` in ${category}`}
          </motion.span>
        </AnimatePresence>
      </p>

      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key="products"
            layout
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -8,
              transition: shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.2, ease: EASE },
            }}
            transition={entranceTransition}
            className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product, index) => (
                <motion.div
                  key={product.slug}
                  layout="position"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                    transition: shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.2, ease: EASE },
                  }}
                  className="h-full"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={entranceTransition}
            className="mt-6 rounded-3xl border border-rose-light/40 bg-white px-8 py-16 text-center"
          >
            <p className="font-display text-2xl text-ink">No products found</p>
            <p className="mt-2 font-sans text-sm text-ink-soft">
              Nothing matches your search. Try a different keyword or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="mt-6 rounded-full bg-ink px-6 py-3 font-sans text-sm font-semibold text-blush transition duration-200 hover:bg-rose-deep active:scale-[0.97] motion-reduce:transform-none"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
