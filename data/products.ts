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
    price: "KES 1,200",
    compareAtPrice: "KES 1,500",
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
    ingredients: "PLACEHOLDER — list your real ingredients here.",
    skinTypes: "For normal to oily skin",
  },
  {
    slug: "black-clay-mask",
    name: "Marie's Benoit Black Clay Mask",
    tagline: "Purify, Refresh, Reveal Your Natural Glow",
    category: "Skin Care",
    price: "KES 1,500",
    compareAtPrice: "KES 1,800",
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
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
