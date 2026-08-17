import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const featured = products.slice(0, 3);

  return (
    <section id="shop" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="font-sans text-xs font-semibold tracking-[0.3em] text-moss uppercase">
            The line
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            Shop favourites
          </h2>
        </div>
        <Link
          href="/shop"
          className="font-sans text-sm font-semibold text-rose-deep underline decoration-rose-light underline-offset-4 transition hover:text-moss"
        >
          See all {products.length} products
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/shop"
          className="rounded-full bg-ink px-8 py-3 font-sans text-sm font-semibold text-blush transition hover:-translate-y-0.5 hover:bg-rose-deep"
        >
          See more products
        </Link>
      </div>
    </section>
  );
}