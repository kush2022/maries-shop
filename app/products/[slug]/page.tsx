import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import Benefits from "@/components/Benefits";
import HowToUse from "@/components/HowToUse";
import WhatsAppOrderButton from "@/components/WhatsAppOrderButton";
import ShareButtons from "@/components/ShareButtons";
import ProductGallery from "@/components/ProductGallery";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return notFound();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Link
        href="/shop"
        className="font-sans text-sm text-ink-soft transition hover:text-rose-deep"
      >
        ← Back to shop
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-12 sm:grid-cols-2">
        <ProductGallery product={product} />

        <div className="rise-in" style={{ animationDelay: "0.2s" }}>
          <p className="font-sans text-xs font-semibold tracking-widest text-moss uppercase">
            {product.category} · {product.skinTypes}
          </p>
          <h1 className="mt-2 font-display text-4xl text-ink">{product.name}</h1>
          <p className="mt-1 font-display text-lg italic text-rose-deep">
            {product.tagline}
          </p>
          <p className="mt-4 font-sans text-base leading-relaxed text-ink-soft">
            {product.short}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="flex items-baseline gap-2">
              {product.compareAtPrice && (
                <span className="font-sans text-lg text-ink-soft line-through">
                  {product.compareAtPrice}
                </span>
              )}
              <span className="font-sans text-2xl font-semibold text-rose-deep">
                {product.price}
              </span>
            </div>
            {(product.mfg || product.exp) && (
              <span className="font-sans text-xs text-ink-soft">
                {product.mfg && `MFG ${product.mfg}`}
                {product.mfg && product.exp && " · "}
                {product.exp && `EXP ${product.exp}`}
              </span>
            )}
          </div>

          <WhatsAppOrderButton product={product} className="mt-6" />
          <ShareButtons product={product} className="mt-3" />

          <div className="divider-rose my-8" />
          <Benefits items={product.benefits} />
        </div>
      </div>

      <Reveal className="mt-14">
        <HowToUse steps={product.howToUse} />
      </Reveal>

      <Reveal delay={100} className="mt-14 rounded-3xl bg-blush-deep p-8">
        <p className="font-sans text-xs font-semibold tracking-widest text-moss uppercase">
          Ingredients
        </p>
        <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-ink-soft">
          {product.ingredients}
        </p>
      </Reveal>
    </main>
  );
}
