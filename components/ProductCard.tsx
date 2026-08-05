import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-rose-light/40 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-light/30"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-blush-deep">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-moss px-3 py-1 font-sans text-xs font-semibold text-blush">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-sans text-xs font-semibold tracking-widest text-moss uppercase">
          {product.category}
        </p>
        <h3 className="mt-1 font-display text-xl text-ink">{product.name}</h3>
        <p className="mt-1 font-sans text-sm text-ink-soft">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="flex items-baseline gap-2">
            {product.compareAtPrice && (
              <span className="font-sans text-sm text-ink-soft line-through">
                {product.compareAtPrice}
              </span>
            )}
            <span className="font-sans text-sm font-semibold text-rose-deep">
              {product.price}
            </span>
          </span>
          <span className="font-sans text-sm font-medium text-ink underline decoration-rose-light underline-offset-4 group-hover:text-rose-deep">
            View details
          </span>
        </div>
      </div>
    </Link>
  );
}
