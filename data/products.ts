export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  price: string; // current (sale) price, e.g. "KES 800"
  compareAtPrice?: string; // higher "original" price shown crossed out, e.g. "KES 1,000"
  image: string; // primary image, path under /public/products
  images?: string[]; // extra variation images, path under /public/products
  video?: string; // optional promo video, path under /public
  badge?: string;
  short: string;
  benefits: string[];
  howToUse: { title: string; detail: string }[];
  ingredients: string;
  skinTypes: string;
  mfg?: string;
  exp?: string;
};

/**
 * PRODUCT CATALOG
 * ----------------
 * "Marie's Rose Water" is filled in from your product sticker.
 * The other two are placeholders so the catalog grid, filtering and
 * detail-page layout are ready — swap in your real products (name,
 * copy, images, price) whenever you have them. Just duplicate an
 * object below and give it a unique `slug`.
 */
export const products: Product[] = [
  {
    slug: "rose-water",
    name: "Marie's Rose Water",
    tagline: "Natural Skin Toner & Facial Mist",
    category: "Toner",
    price: "KES 800",
    compareAtPrice: "KES 1,000",
    image: "/products/rose_water_1.jpeg",
    images: [
      "/products/rose_water_1.jpeg",
      "/products/rose_water_2.jpeg",
      "/products/rose_water_3.jpeg",
    ],
    badge: "100% Natural",
    short:
      "A pure, refreshing mist made with real rose extract — hydrates, soothes and revitalizes skin in one spray.",
    benefits: [
      "Hydrates and refreshes the skin",
      "Helps soothe redness and irritation",
      "Gently tones the skin",
      "Supports the skin's natural moisture barrier",
      "Rich in natural antioxidants that help protect skin from environmental stress",
      "Leaves skin feeling soft, fresh and revitalized",
    ],
    howToUse: [
      {
        title: "As a toner",
        detail: "After cleansing, apply with a cotton pad.",
      },
      {
        title: "As a facial mist",
        detail: "Spray anytime during the day for instant freshness.",
      },
      {
        title: "Before moisturizer",
        detail:
          "Apply to slightly damp skin, then follow with your moisturizer or face oil.",
      },
      { title: "Before makeup", detail: "Use as a hydrating base." },
      {
        title: "After makeup",
        detail: "Lightly mist to give skin a fresh, dewy finish.",
      },
    ],
    ingredients: "Made with real rose extract. Gentle, pure, effective.",
    skinTypes: "For all skin types",
    mfg: "2026",
    exp: "2028",
  },
  {
    slug: "qusil-powder",
    name: "Marie's Qusil Powder",
    tagline: "Purifying Facial Mask",
    category: "Mask",
    price: "KES 1,000",
    compareAtPrice: "KES 1,299",
    image: "/products/qusil-powder-1.jpeg",
    images: ["/products/qusil-powder-1.jpeg", "/products/qusil-powder-2.jpeg"],
    short:
      "PLACEHOLDER — replace with your real product copy. A mineral-rich clay mask blended with rose for a gentle deep clean.",
    benefits: [
      "Draws out impurities without over-drying",
      "Softens the look of pores",
      "Leaves skin feeling clean and calm",
    ],
    howToUse: [
      { title: "Apply", detail: "Spread an even layer on cleansed, dry skin." },
      {
        title: "Wait",
        detail: "Leave on for 8–10 minutes, until just dry to the touch.",
      },
      {
        title: "Rinse",
        detail: "Rinse with warm water and follow with rose water toner.",
      },
    ],
    ingredients: "",
    skinTypes: "For normal to oily skin",
  },
  {
    slug: "black-clay-mask",
    name: "Marie's Benoit Black Clay Mask",
    tagline: "Purify, Refresh, Reveal Your Natural Glow",
    category: "Skin Care",
    price: "KES 1,000",
    compareAtPrice: "KES 1,399",
    image: "/products/black-clay-1.jpeg",
    images: ["/products/black-clay-1.jpeg", "/products/black-clay-2.jpeg"],
    short:
      "A deep cleansing and detoxifying facial mask formulated with 100% natural ingredients to clear pores and restore a radiant complexion.",
    benefits: [
      "Deeply cleanses clogged pores",
      "Detoxifies and purifies the skin",
      "Reveals a natural, glowing complexion",
    ],
    howToUse: [
      {
        title: "Application",
        detail: "Apply evenly to a clean face, avoiding the eye area.",
      },
      {
        title: "Timing",
        detail: "Leave on for 10 to 15 minutes until dry.",
      },
      {
        title: "Rinse",
        detail: "Wash off thoroughly with warm water and pat dry.",
      },
    ],
    ingredients:
      "Pure Black Clay, 100% Natural Minerals and Botanical Extracts.",
    skinTypes: "For all skin types",
  },
  {
    slug: "charcoal-scrub",
    name: "Maries Charcoal Scrubs",
    tagline: "Detoxify • Exfoliate • Exfoliate • Refresh",
    category: "Skin Care",
    price: "KES 800", // Kept consistent with previous items, adjust as needed
    compareAtPrice: "KES 1,249",
    image: "/products/charcoal-scrub-1.jpeg",
    images: ["/products/charcoal-scrub-1.jpeg"],
    short:
      "A deep-cleansing facial and body scrub made with love to thoroughly exfoliate, purify, and refresh the skin.",
    benefits: [
      "Detoxifies and pulls out deep impurities",
      "Provides intense exfoliation to remove dead cells",
      "Refreshes and clears the skin texture",
    ],
    howToUse: [
      {
        title: "Application",
        detail:
          "Apply a small amount to damp skin and massage gently in circular motions.",
      },
      { title: "Rinse", detail: "Wash off thoroughly with water and pat dry." },
      {
        title: "Storage",
        detail: "Store in a cool, dry place away from direct sunlight.",
      },
    ],
    ingredients:
      "Activated Charcoal, Exfoliating Minerals, and Natural Botanicals.",
    skinTypes: "For all skin types",
  },
  {
    slug: "vitamin-c-scrub",
    name: "Maries Vitamin C Scrubs",
    tagline: "Reveal Your Natural Glow",
    category: "Skin Care",
    price: "KES 800", // Adjust according to your catalog pricing
    compareAtPrice: "KES 1,199",
    image: "/products/vitamin-c-scrub-1.jpeg",
    images: ["/products/vitamin-c-scrub-1.jpeg"],
    short:
      "A brightening and smoothing facial and body scrub made with love to revitalize skin texture and enhance radiance.",
    benefits: [
      "Brightens & Revitalizes Skin",
      "Gently Exfoliates & Smooths",
      "Helps Improve Skin Texture",
    ],
    howToUse: [
      {
        title: "Application",
        detail: "Massage gently onto damp skin using circular motions.",
      },
      {
        title: "Rinse",
        detail: "Rinse off thoroughly with warm water and pat dry.",
      },
      { title: "Warning", detail: "For External Use Only." },
    ],
    ingredients:
      "Vitamin C Extract, Natural Exfoliating Grains, and Citrus Essential Oils.",
    skinTypes: "For all skin types",
  },
  {
    slug: "avocado-scrub",
    name: "Maries Avocado Scrubs",
    tagline: "Naturally Nourish • Smooth • Glow",
    category: "Skin Care",
    price: "KES 800", // Adjust according to your catalog pricing
    compareAtPrice: "KES 1,199",
    image: "/products/avocado-scrub-1.jpeg",
    images: ["/products/avocado-scrub-1.jpeg"],
    short:
      "A rich, exfoliating body and facial scrub made with love to deeply nourish and soften skin texture naturally.",
    benefits: [
      "Gently Exfoliates",
      "Nourishes & Moisturizes",
      "Leaves Skin Soft & Radiant",
    ],
    howToUse: [
      {
        title: "Application",
        detail:
          "Apply a small amount to damp skin and scrub in gentle, circular motions.",
      },
      {
        title: "Rinse",
        detail:
          "Rinse completely with warm water and follow up with your favorite moisturizer.",
      },
      { title: "Storage", detail: "Keep tightly sealed in a cool, dry place." },
    ],
    ingredients:
      "Avocado Fruit Extract, Nourishing Botanical Oils, and Natural Exfoliating Grains.",
    skinTypes: "For all skin types",
  },

  {
    slug: "strawberry-scrub",
    name: "Maries Strawberry Scrubs",
    tagline: "Smooth • Refresh • Glow",
    category: "Skin Care",
    price: "KES 800", // Adjust according to your catalog pricing
    compareAtPrice: "KES 1,199",
    image: "/products/strawberry-scrub-1.jpeg",
    images: [
      "/products/strawberry-scrub-1.jpeg",
      "/products/strawberry-scrub-2.jpeg",
    ],
    short:
      "An exfoliating facial and body scrub made with love to refresh your skin and reveal your natural glow.",
    benefits: [
      "Gently Exfoliates",
      "Nourishes & Moisturizes",
      "Leaves Skin Soft & Glowing",
    ],
    howToUse: [
      {
        title: "Application",
        detail:
          "Apply a small amount to moist skin and massage gently in circular motions.",
      },
      {
        title: "Rinse",
        detail: "Rinse off thoroughly with water and pat dry.",
      },
      { title: "Warning", detail: "For external use only." },
    ],
    ingredients:
      "Strawberry Fruit Extract, Natural Exfoliating Agents, and Hydrating Botanicals.",
    skinTypes: "For All Skin Types",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
