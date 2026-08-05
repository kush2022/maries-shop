import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="shop" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="font-sans text-xs font-semibold tracking-[0.3em] text-moss uppercase">
            The line
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            Shop {products.length} products
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
