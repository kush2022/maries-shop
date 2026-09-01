import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPackage, getAllPackages } from "@/data/packages";
import { getProduct } from "@/data/products";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, siteUrl, siteName } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { ArrowRight, RotateCcw, ShoppingBag, Sparkles, AlertCircle, CheckCircle } from "lucide-react";

export async function generateStaticParams() {
  return getAllPackages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: pkg.name,
    description: pkg.tagline,
    openGraph: {
      title: `${pkg.name} | ${siteName}`,
      description: pkg.tagline,
      type: "website",
      images: [
        {
          url: `${siteUrl}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: pkg.name,
        },
      ],
    },
  };
}

function ComingSoonCard({ slug }: { slug: string }) {
  const displayName = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <article className="group relative overflow-hidden rounded-3xl border-2 border-dashed border-rose/30 bg-rose/5 p-6 transition hover:border-rose/50 hover:bg-rose/10">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-rose/10 to-blush/10 mb-4">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-5xl mb-2 animate-bounce" aria-hidden="true">📦</div>
          <span className="font-display text-lg font-semibold text-rose-deep">Coming Soon</span>
          <span className="font-sans text-xs text-ink-soft mt-1">{displayName}</span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-rose/90 px-2 py-1 font-sans text-xs font-semibold text-blush animate-pulse">
            <RotateCcw className="h-3 w-3" aria-hidden="true" />
            Soon
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className="font-sans text-xs font-semibold tracking-widest text-moss uppercase mb-1">Coming Soon</p>
        <h3 className="font-display text-lg font-semibold text-ink mb-1">{displayName}</h3>
        <p className="font-sans text-sm text-ink-soft mb-4">This product is in development</p>
        <div className="inline-flex items-center gap-2 rounded-full bg-rose/10 px-4 py-2 font-sans text-sm font-semibold text-rose-deep">
          <RotateCcw className="h-3 w-3 animate-spin" aria-hidden="true" />
          Notify me when available
        </div>
      </div>
    </article>
  );
}

function ProductCard({ product }: { product: NonNullable<ReturnType<typeof getProduct>> }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-rose-light/40 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-light/30"
    >
      <div className="relative aspect-square overflow-hidden bg-blush-deep">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-sans text-xs font-semibold tracking-widest text-moss uppercase">{product.category}</p>
        <h3 className="mt-1 font-display text-lg text-ink">{product.name}</h3>
        <p className="mt-1 font-sans text-sm text-ink-soft">{product.tagline}</p>
        <div className="mt-auto pt-4 border-t border-rose-light/30 flex items-center justify-between">
          <span className="font-sans text-sm font-semibold text-rose-deep">{product.price}</span>
          <span className="inline-flex items-center gap-1 font-sans text-sm font-medium text-ink transition group-hover:text-rose-deep">
            View details
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function PackageHeroProduct({ productSlug }: { productSlug: string }) {
  const product = getProduct(productSlug);
  const isComingSoon = !product;

  if (isComingSoon) {
    return (
      <Link
        href="#"
        className="relative aspect-square overflow-hidden rounded-xl"
        onClick={(e) => e.preventDefault()}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-rose/10 to-blush/10">
          <div className="text-5xl mb-2" aria-hidden="true">📦</div>
          <span className="font-display text-xl font-semibold text-rose-deep">Coming Soon</span>
          <span className="font-sans text-sm text-ink-soft mt-1">{productSlug.replace(/-/g, " ")}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/products/${product.slug}`} className="relative aspect-square overflow-hidden rounded-xl">
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 640px) 50vw, 25vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
    </Link>
  );
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return notFound();

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Packages", url: `${siteUrl}/packages` },
    { name: pkg.name, url: `${siteUrl}/packages/${slug}` },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <main className="mx-auto max-w-6xl px-6 py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 font-sans text-sm text-ink-soft">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.name} className="flex items-center gap-2">
                {i > 0 && <span className="text-rose-light" aria-hidden="true">/</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-ink font-medium">{crumb.name}</span>
                ) : (
                  <Link href={crumb.url} className="hover:text-rose-deep transition">
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Hero */}
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-2 mb-16">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-blush-deep">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-2">
                {pkg.products.slice(0, 4).map((productSlug) => (
                  <PackageHeroProduct key={productSlug} productSlug={productSlug} />
                ))}
              </div>
            </div>

            {/* Stats badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-moss/10 px-4 py-2 font-sans text-sm font-semibold text-moss">
                <CheckCircle className="h-4 w-4" aria-hidden="true" />
                {pkg.products.filter((s) => getProduct(s)).length} ready to ship
              </span>
              {pkg.products.some((s) => !getProduct(s)) && (
                <span className="inline-flex items-center gap-2 rounded-full bg-rose/10 px-4 py-2 font-sans text-sm font-semibold text-rose-deep">
                  <AlertCircle className="h-4 w-4" aria-hidden="true" />
                  {pkg.products.filter((s) => !getProduct(s)).length} coming soon
                </span>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl" aria-hidden="true">{pkg.emoji}</span>
              <div>
                <p className="font-sans text-xs font-semibold tracking-[0.3em] text-moss uppercase">
                  {pkg.audience === "female" && "🌸 For Her"}
                  {pkg.audience === "male" && "🪒 For Him"}
                  {pkg.audience === "unisex" && "🌿 For Everyone"}
                </p>
              </div>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl leading-[1.05] text-ink mb-4">{pkg.name}</h1>
            <p className="font-display text-xl italic text-rose-deep mb-6">{pkg.tagline}</p>
            <p className="font-sans text-base leading-relaxed text-ink-soft mb-8 max-w-xl">{pkg.description}</p>

            {/* Savings badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-moss/10 px-4 py-2 font-sans text-sm font-semibold text-moss mb-8">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Save {pkg.savings}, {pkg.packagePrice} (was {pkg.originalPrice})
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {pkg.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 h-8 w-8 rounded-full bg-rose/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-rose-deep" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="font-sans text-base leading-relaxed text-ink">{highlight}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/254741599691?text=Hi%20Marie's%2C%20I'd%20like%20to%20order%20the%20${encodeURIComponent(pkg.name)}%20package%20(${encodeURIComponent(pkg.packagePrice)}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3 font-sans text-sm font-semibold text-blush transition hover:-translate-y-0.5 hover:bg-rose-deep"
              >
                <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                Order on WhatsApp
              </a>
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 rounded-full border border-rose px-8 py-3 font-sans text-sm font-semibold text-rose-deep transition hover:bg-rose hover:text-blush"
              >
                Browse other packages
              </Link>
            </div>
          </div>
        </Reveal>

        {/* What's Inside */}
        <Reveal className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl text-ink">What&apos;s Inside</h2>
            <span className="font-sans text-sm text-ink-soft">
              {pkg.products.length} products · {pkg.packagePrice}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pkg.products.map((productSlug, i) => {
              const product = getProduct(productSlug);
              const isComingSoon = !product;
              return (
                <Reveal key={productSlug} delay={i * 80}>
                  {isComingSoon ? <ComingSoonCard slug={productSlug} /> : <ProductCard product={product!} />}
                </Reveal>
              );
            })}
          </div>
        </Reveal>

        {/* Routine */}
        <Reveal className="mb-16">
          <h2 className="font-display text-3xl text-ink mb-8 flex items-center gap-2">
            <RotateCcw className="h-6 w-6 text-rose-deep" aria-hidden="true" />
            Your Step-by-Step Routine
          </h2>
          <div className="space-y-5">
            {pkg.routine.map((step, i) => (
              <Reveal key={`${step.step}-${i}`} delay={i * 100}>
                <div className="flex flex-col sm:flex-row gap-6 rounded-3xl border border-rose-light/30 bg-white p-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-blush-deep">
                    <span className="font-display text-2xl font-bold text-rose-deep">{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h3 className="font-display text-lg text-ink">{step.step}</h3>
                      {step.productSlug && (
                        <span className="rounded-full bg-blush-deep px-3 py-1 font-sans text-xs font-semibold text-ink">
                          {getProduct(step.productSlug)?.name ?? step.productSlug}
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-base leading-relaxed text-ink-soft">
                      <span className="font-semibold text-ink">Why:</span>{" "}
                      {step.why}
                    </p>
                    {step.productSlug && (
                      <Link
                        href={`/products/${step.productSlug}`}
                        className="mt-3 inline-flex items-center gap-1 font-sans text-sm font-medium text-ink transition hover:text-rose-deep"
                      >
                        View product
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Savings summary */}
        <Reveal className="rounded-3xl bg-blush-deep p-8 sm:p-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-ink mb-4">Ready to simplify your routine?</h2>
          <p className="font-sans text-base text-ink-soft mb-8 max-w-xl mx-auto">
            Everything you need in one box, delivered to your door. No guesswork, just glowing results.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/254741599691?text=Hi%20Marie's%2C%20I'd%20like%20to%20order%20the%20${encodeURIComponent(pkg.name)}%20package%20(${encodeURIComponent(pkg.packagePrice)}).`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3 font-sans text-sm font-semibold text-blush transition hover:-translate-y-0.5 hover:bg-rose-deep"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              Order on WhatsApp
            </a>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 rounded-full border border-rose px-8 py-3 font-sans text-sm font-semibold text-rose-deep transition hover:bg-rose hover:text-blush"
            >
              Browse other packages
            </Link>
          </div>
        </Reveal>
      </main>
    </>
  );
}