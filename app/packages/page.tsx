"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Package } from "@/data/packages";
import { getAllPackages } from "@/data/packages";
import { getProduct } from "@/data/products";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, siteUrl } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { X, Sparkles, ShoppingBag, ArrowRight, RotateCcw, Package as PackageIcon } from "lucide-react";

const audienceTabs = [
  { id: "all", label: "All", emoji: "✨" },
  { id: "female", label: "For Her", emoji: "🌸" },
  { id: "male", label: "For Him", emoji: "🪒" },
  { id: "unisex", label: "For Everyone", emoji: "🌿" },
] as const;

export default function PackagesPage() {
  const allPackages = getAllPackages();
  const [activeTab, setActiveTab] = useState("all");
  const [openPackage, setOpenPackage] = useState<Package | null>(null);
  const [activeProduct, setActiveProduct] = useState<{ slug: string; comingSoon?: boolean } | null>(null);

  const filteredPackages = activeTab === "all"
    ? allPackages
    : allPackages.filter((p) => p.audience === activeTab);

  const handleProductClick = (slug: string) => {
    const product = getProduct(slug);
    if (!product) {
      setActiveProduct({ slug, comingSoon: true });
    } else {
      setActiveProduct({ slug, comingSoon: false });
    }
  };


  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Packages", url: `${siteUrl}/packages` },
      ])} />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: allPackages.map((pkg, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: pkg.name,
              description: pkg.tagline,
              url: `${siteUrl}/packages/${pkg.slug}`,
            })),
          }}
        />

        {/* Hero */}
        <Reveal className="mx-auto max-w-4xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blush-deep/50 px-4 py-1.5 mb-4">
            <PackageIcon className="h-4 w-4 text-rose-deep" aria-hidden="true" />
            <span className="font-sans text-xs font-semibold tracking-[0.3em] text-moss uppercase">
              Curated bundles
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] text-ink mb-6">
            Skincare that works
            <br />
            <span className="italic text-rose-deep">together.</span>
          </h1>
          <p className="font-sans text-lg leading-relaxed text-ink-soft max-w-2xl mx-auto">
            Hand-curated routines that solve real problems — menstrual cycles, post-gym sweat,
            dullness, travel stress, first routines. Each bundle saves you money and guesswork.
          </p>
        </Reveal>

        {/* Audience filter tabs */}
        <Reveal delay={100} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Filter packages by audience">
            {audienceTabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-sm font-semibold transition
                  border border-rose-light/40 bg-white text-ink hover:border-rose hover:text-rose-deep
                  data-[selected=true]:border-rose data-[selected=true]:bg-rose data-[selected=true]:text-blush`}
                data-selected={activeTab === tab.id}
              >
                <span aria-hidden="true">{tab.emoji}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Package grid */}
        <Reveal delay={200}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.map((pkg, i) => (
              <PackageCard
                key={pkg.slug}
                pkg={pkg}
                index={i}
                onOpen={() => setOpenPackage(pkg)}
                onProductClick={handleProductClick}
              />
            ))}
          </div>
        </Reveal>

        {/* Empty state for filtered results */}
        {filteredPackages.length === 0 && (
          <Reveal className="mt-12 text-center py-12">
            <Sparkles className="mx-auto h-12 w-12 text-rose-light/50 mb-4" aria-hidden="true" />
            <h3 className="font-display text-2xl text-ink mb-2">No packages found</h3>
            <p className="font-sans text-ink-soft">Try selecting a different audience filter.</p>
          </Reveal>
        )}

        {/* CTA */}
        <Reveal className="mt-20 text-center">
          <p className="font-sans text-xs font-semibold tracking-[0.3em] text-moss uppercase mb-3">
            Not sure which bundle?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">
            Let us build your perfect routine
          </h2>
          <p className="font-sans text-base text-ink-soft mb-8 max-w-xl mx-auto">
            Take our AI skin scan or chat with us on WhatsApp for a free personalized consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/skin-analysis"
              className="inline-flex items-center gap-2 rounded-full bg-moss px-8 py-3 font-sans text-sm font-semibold text-blush transition hover:-translate-y-0.5 hover:bg-moss-light"
            >
              <span className="inline-flex items-center gap-2">
                AI Skin Scan
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
            <a
              href="https://wa.me/254741599691?text=Hi%20Marie's%2C%20I'd%20like%20help%20choosing%20a%20package"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-rose px-8 py-3 font-sans text-sm font-semibold text-rose-deep transition hover:bg-rose hover:text-blush"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              WhatsApp Consultation
            </a>
          </div>
        </Reveal>

        {/* Package Detail Modal */}
        {openPackage && (
          <PackageModal
            pkg={openPackage}
            onClose={() => setOpenPackage(null)}
            onProductClick={handleProductClick}
          />
        )}

        {/* Product Detail Modal (Coming Soon or Product Detail) */}
        {activeProduct && (
          <ProductModal
            productSlug={activeProduct.slug}
            comingSoon={activeProduct.comingSoon ?? false}
            onClose={() => setActiveProduct(null)}
          />
        )}
      </main>
    </>
  );
}

function PackageCard({
  pkg,
  index,
  onOpen,
  onProductClick,
}: {
  pkg: Package;
  index: number;
  onOpen: () => void;
  onProductClick: (slug: string) => void;
}) {
  const productsInPkg = pkg.products
    .map((slug) => getProduct(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getProduct>>[];

  return (
    <Reveal delay={index * 80} className="group relative overflow-hidden rounded-3xl bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-light/20 cursor-pointer" onClick={onOpen}>
      {/* Gradient top border */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${pkg.themeGradient}`} aria-hidden="true" />

      {/* Badge */}
      {pkg.badge && (
        <span className="absolute top-4 left-4 z-10 rounded-full bg-ink/90 px-3 py-1 font-sans text-xs font-semibold text-blush backdrop-blur">
          {pkg.badge}
        </span>
      )}

      {/* Audience tag */}
      <span className="absolute top-4 right-4 z-10 rounded-full bg-blush-deep/90 px-3 py-1 font-sans text-xs font-semibold text-ink backdrop-blur">
        {pkg.audience === "female" && "🌸 For Her"}
        {pkg.audience === "male" && "🪒 For Him"}
        {pkg.audience === "unisex" && "🌿 Everyone"}
      </span>

      {/* Hero image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-blush-deep">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-1 bg-white/10">
          {productsInPkg.slice(0, 3).map((product, pi) => (
            <button
              key={product.slug}
              onClick={(e) => {
                e.stopPropagation();
                onProductClick(product.slug);
              }}
              className={pi === 2 ? "col-span-2 relative aspect-[2/1] overflow-hidden rounded-xl" : "relative aspect-square overflow-hidden rounded-xl"}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 right-2 flex justify-between opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-xs font-medium text-white/90 bg-ink/80 px-2 py-1 rounded">{product.category}</span>
                <span className="text-xs font-bold text-white bg-ink/80 px-2 py-1 rounded">{product.price}</span>
              </div>
            </button>
          ))}
          {pkg.products.length > 3 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpen();
              }}
              className="absolute inset-0 flex items-center justify-center bg-ink/70"
            >
              <span className="font-display text-3xl font-bold text-blush">
                +{pkg.products.length - 3} more
              </span>
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl" aria-hidden="true">{pkg.emoji}</span>
            <h3 className="font-display text-xl text-ink">{pkg.name}</h3>
          </div>
          <p className="font-sans text-sm text-ink-soft mb-4">{pkg.tagline}</p>

          {/* Highlights */}
          <ul className="space-y-2 mb-5" role="list">
            {pkg.highlights.slice(0, 3).map((highlight: string, hi: number) => (
              <li key={hi} className="flex items-start gap-2 font-sans text-sm text-ink-soft">
                <svg className="mt-0.5 flex-shrink-0 h-4 w-4 text-moss" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {highlight}
              </li>
            ))}
          </ul>

          {/* Price */}
          <div className="flex items-baseline justify-between gap-4 pt-4 border-t border-rose-light/30">
            <div>
              <p className="font-sans text-sm text-ink-soft line-through">{pkg.originalPrice}</p>
              <p className="font-display text-2xl font-bold text-rose-deep">{pkg.packagePrice}</p>
            </div>
            <div className="text-right">
              <p className="font-sans text-xs text-moss font-semibold bg-moss/10 px-3 py-1 rounded-full">
                Save {pkg.savings}
              </p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={onOpen}
            className="block w-full mt-4 text-center rounded-full bg-ink px-6 py-3 font-sans text-sm font-semibold text-blush transition hover:-translate-y-0.5 hover:bg-rose-deep group/button"
          >
            <span className="inline-flex items-center gap-2">
              View details
              <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </Reveal>
  );
}

function PackageModal({
  pkg,
  onClose,
  onProductClick,
}: {
  pkg: Package;
  onClose: () => void;
  onProductClick: (slug: string) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="package-title">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink backdrop-blur transition hover:bg-rose hover:text-blush"
          aria-label="Close package"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl" aria-hidden="true">{pkg.emoji}</span>
                <span className="font-sans text-xs font-semibold tracking-[0.3em] text-moss uppercase">
                  {pkg.audience === "female" && "🌸 For Her"}
                  {pkg.audience === "male" && "🪒 For Him"}
                  {pkg.audience === "unisex" && "🌿 For Everyone"}
                </span>
              </div>
              <h2 id="package-title" className="font-display text-3xl sm:text-4xl text-ink">{pkg.name}</h2>
              <p className="mt-2 font-sans text-base text-ink-soft">{pkg.tagline}</p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">{pkg.description}</p>
            </div>
          </div>

          {/* Savings badge */}
          <div className="mb-6 flex items-center justify-center gap-3 flex-wrap">
            <div className="inline-flex items-center gap-2 rounded-full bg-moss/10 px-4 py-2 font-sans text-sm font-semibold text-moss">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Save {pkg.savings}, {pkg.packagePrice} (was {pkg.originalPrice})
            </div>
            {pkg.badge && (
              <span className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-4 py-2 font-sans text-xs font-semibold text-ink">
                {pkg.badge}
              </span>
            )}
          </div>

          {/* Products grid */}
          <div className="mb-8">
            <h3 className="font-display text-xl text-ink mb-4 flex items-center gap-2">
              <PackageIcon className="h-5 w-5 text-rose-deep" aria-hidden="true" />
              What&apos;s Inside ({pkg.products.length} products)
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pkg.products.map((slug) => {
                const product = getProduct(slug);
                const isComingSoon = !product;
                return (
                  <button
                    key={slug}
                    onClick={() => onProductClick(slug)}
                    className={`group relative overflow-hidden rounded-2xl border transition hover:-translate-y-1 hover:shadow-lg ${
                      isComingSoon
                        ? "border-rose/20 bg-rose/5"
                        : "border-rose-light/40 bg-white"
                    }`}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-blush-deep">
                      {isComingSoon ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-rose/10 to-blush/10">
                          <div className="text-4xl mb-2" aria-hidden="true">📦</div>
                          <span className="font-display text-lg font-semibold text-rose-deep">Coming Soon</span>
                          <span className="font-sans text-xs text-ink-soft mt-1">{slug.replace(/-/g, " ")}</span>
                        </div>
                      ) : (
                        <>
                          <Image
                            src={product!.image}
                            alt={product!.name}
                            fill
                            sizes="(max-width: 640px) 50vw, 33vw"
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </>
                      )}
                      {isComingSoon && (
                        <div className="absolute top-2 right-2">
                          <span className="inline-flex items-center gap-1 rounded-full bg-rose/90 px-2 py-1 font-sans text-xs font-semibold text-blush">
                            <RotateCcw className="h-3 w-3 animate-spin" aria-hidden="true" />
                            Soon
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="font-sans text-xs font-semibold tracking-widest text-moss uppercase mb-1">
                        {isComingSoon ? "Coming Soon" : product!.category}
                      </p>
                      <h4 className="font-display text-base font-semibold text-ink mb-1">
                        {isComingSoon ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : product!.name}
                      </h4>
                      {!isComingSoon && (
                        <p className="font-sans text-sm text-ink-soft mb-2">{product!.tagline}</p>
                      )}
                      <div className="flex items-center justify-between pt-3 border-t border-rose-light/30">
                        <span className={`font-sans text-sm font-semibold ${isComingSoon ? "text-ink-soft" : "text-rose-deep"}`}>
                          {isComingSoon ? "Notify me" : product!.price}
                        </span>
                        <span className="inline-flex items-center gap-1 font-sans text-sm font-medium text-ink transition group-hover:text-rose-deep">
                          {isComingSoon ? "Join waitlist" : "View"}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Routine */}
          <div className="mb-8 border-t border-rose-light/30 pt-8">
            <h3 className="font-display text-xl text-ink mb-5 flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-rose-deep" aria-hidden="true" />
              Your Step-by-Step Routine
            </h3>
            <div className="space-y-4">
              {pkg.routine.map((step, i) => (
                <div key={`${step.step}-${i}`} className="flex flex-col sm:flex-row gap-5 rounded-2xl border border-rose-light/30 bg-white p-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-blush-deep">
                    <span className="font-display text-xl font-bold text-rose-deep">{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h4 className="font-display text-base text-ink">{step.step}</h4>
                      {step.productSlug && (
                        <span className="rounded-full bg-blush-deep px-2 py-0.5 font-sans text-xs font-semibold text-ink">
                          {getProduct(step.productSlug)?.name ?? step.productSlug}
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-sm leading-relaxed text-ink-soft">
                      <span className="font-semibold text-ink">Why:</span>{" "}{step.why}
                    </p>
                    {step.productSlug && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onProductClick(step.productSlug!);
                        }}
                        className="mt-2 inline-flex items-center gap-1 font-sans text-sm font-medium text-ink transition hover:text-rose-deep"
                      >
                        View product
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-3 pt-4 border-t border-rose-light/30">
            <a
              href={`https://wa.me/254741599691?text=Hi%20Marie's%2C%20I'd%20like%20to%20order%20the%20${encodeURIComponent(pkg.name)}%20package%20(${encodeURIComponent(pkg.packagePrice)}).`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3 font-sans text-sm font-semibold text-blush transition hover:-translate-y-0.5 hover:bg-rose-deep"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              Order on WhatsApp
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full border border-rose px-8 py-3 font-sans text-sm font-semibold text-rose-deep transition hover:bg-rose hover:text-blush"
            >
              Back to packages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductModal({
  productSlug,
  comingSoon,
  onClose,
}: {
  productSlug: string;
  comingSoon: boolean;
  onClose: () => void;
}) {
  const product = getProduct(productSlug);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true">
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink backdrop-blur transition hover:bg-rose hover:text-blush"
          aria-label="Close"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="p-6 sm:p-8 text-center">
          {comingSoon ? (
            <>
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-rose/10">
                <div className="text-5xl animate-bounce" aria-hidden="true">📦</div>
              </div>
              <h2 className="font-display text-2xl text-ink mb-2">Coming Soon</h2>
              <p className="font-sans text-ink-soft mb-6">
                <span className="font-semibold">{productSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</span> is not available yet.
              </p>
              <div className="rounded-full bg-rose/10 px-4 py-2 font-sans text-sm font-semibold text-rose-deep inline-block mb-6">
                Join the waitlist to be notified
              </div>
              <p className="font-sans text-xs text-ink-soft">
                We&apos;re working on bringing this to you. Leave your email and we&apos;ll let you know when it launches!
              </p>
            </>
          ) : product ? (
            <>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-blush-deep mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <p className="font-sans text-xs font-semibold tracking-widest text-moss uppercase mb-1">{product.category}</p>
              <h2 className="font-display text-2xl text-ink mb-2">{product.name}</h2>
              <p className="font-sans text-sm text-ink-soft mb-4">{product.tagline}</p>
              <p className="font-display text-2xl font-bold text-rose-deep mb-6">{product.price}</p>
              <p className="font-sans text-sm leading-relaxed text-ink-soft mb-6">{product.short}</p>
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3 font-sans text-sm font-semibold text-blush transition hover:-translate-y-0.5 hover:bg-rose-deep"
              >
                View full details
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </>
          ) : (
            <>
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-rose/10">
                <span className="text-5xl" aria-hidden="true">🔍</span>
              </div>
              <h2 className="font-display text-2xl text-ink mb-2">Product Not Found</h2>
              <p className="font-sans text-ink-soft mb-6">This product doesn&apos;t exist in our catalog yet.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}