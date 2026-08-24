import { siteConfig } from "@/data/config";

export const siteUrl = "https://maries-shop.vercel.app";
export const siteName = siteConfig.brand;
export const siteDescription =
  "Marie's is a small-batch natural skincare line: rose water toner, clay masks and body oils made with real botanical extracts.";

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/shop?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: siteConfig.instagram
      ? [`https://instagram.com/${siteConfig.instagram}`]
      : [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+254 ${siteConfig.phoneDisplay}`,
      contactType: "customer service",
      availableLanguage: ["English", "Swahili"],
    },
  };
}

export function generateProductSchema(product: {
  name: string;
  tagline: string;
  description: string;
  price: string;
  compareAtPrice?: string;
  image: string;
  slug: string;
  category: string;
  brand: string;
  sku: string;
  availability: string;
}) {
  const priceNumber = parseFloat(product.price.replace(/[^0-9.]/g, "")) || 0;
  const currency = "KES";

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    sku: product.sku,
    category: product.category,
    image: `${siteUrl}${product.image}`,
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/products/${product.slug}`,
      priceCurrency: currency,
      price: priceNumber,
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      availability: product.availability,
      seller: {
        "@type": "Organization",
        name: siteName,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "24",
    },
  };
}

export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  publisherName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: {
      "@type": "Person",
      name: article.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: article.publisherName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
  };
}