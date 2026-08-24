import type { Metadata } from "next";
import ShopBrowser from "@/components/ShopBrowser";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse Marie's full range of small-batch, natural botanical skincare: rose water toners, clay masks and body oils.",
  openGraph: {
    title: "Shop | Marie's Botanicals",
    description:
      "Browse Marie's full range of small-batch, natural botanical skincare: rose water toners, clay masks and body oils.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marie's Botanicals Shop",
      },
    ],
  },
};

const breadcrumbs = [
  { name: "Home", url: siteUrl },
  { name: "Shop", url: `${siteUrl}/shop` },
];

export default function ShopPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 font-sans text-sm text-ink-soft">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.name} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="text-rose-light" aria-hidden="true">
                    /
                  </span>
                )}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-ink font-medium">{crumb.name}</span>
                ) : (
                  <a href={crumb.url} className="hover:text-rose-deep transition">
                    {crumb.name}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <ShopBrowser />
      </main>
    </>
  );
}
