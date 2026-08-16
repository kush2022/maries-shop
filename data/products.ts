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
  {
    slug: "sadoer-collagen-facial-mask",
    name: "Sadoer Collagen Anti-Aging Facial Mask",
    tagline: "Pure Natural Active Collagen • Collagen Firming Series",
    category: "Skin Care",
    price: "KES 200",
    compareAtPrice: "KES 300", // Standard retail markup placeholder, adjust as needed
    image: "/products/Collagen_facial_masks_flat_lay_1.jpeg",
    images: [
      "/products/Collagen_facial_masks_flat_lay_1.jpeg",
      "/products/Collagen_facial_masks_flat_lay_2.jpeg",
    ],
    short:
      "An anti-aging sheet mask featuring Active Protein Technology and 10 times collagen content to replenish, firm, and repair skin.",
    benefits: [
      "Replenish collagen lost by skin",
      "Increase skin elasticity",
      "The skin becomes smooth and elastic",
      "Provide skin moisturizing repair",
    ],
    howToUse: [
      { title: "Cleanse", detail: "Thoroughly wash and dry your face." },
      {
        title: "Apply",
        detail:
          "Unfold the sheet mask and smooth it evenly over your facial contours.",
      },
      {
        title: "Rest",
        detail:
          "Leave on for 15 to 20 minutes to allow the essence to fully absorb.",
      },
      {
        title: "Massage",
        detail:
          "Remove the mask and gently pat any remaining serum into the skin.",
      },
    ],
    ingredients:
      "Pure Natural Active Collagen, Essential Proteins, and Hydrating Serum Complex.",
    skinTypes: "For all skin types",
    // weight: "Net: 25g",
  },
  {
    slug: "bioaqua-vitamin-c-mask",
    name: "Bioaqua Vitamin C Beautiful Skin Mask",
    tagline: "Hydrate Skin, Light Breathable",
    category: "Skin Care",
    price: "KES 200", // Kept consistent with the sheet mask pricing template
    compareAtPrice: "KES 300",
    image: "/products/vitamin_c_mask_1.jpeg",
    images: [
      "/products/vitamin_c_mask_1.jpeg",
      "/products/vitamin_c_mask_2.jpeg",
    ],
    short:
      "A light, breathable facial sheet mask enriched with Vitamin C to intensely hydrate, brighten, and refresh the skin.",
    benefits: [
      "Deeply hydrates and locks in moisture",
      "Brightens and evens out skin tone",
      "Lightweight and highly breathable sheet design",
    ],
    howToUse: [
      { title: "Cleanse", detail: "Thoroughly wash and dry your face." },
      {
        title: "Apply",
        detail:
          "Unfold the mask and smooth it evenly across your facial contours.",
      },
      {
        title: "Rest",
        detail:
          "Leave on for 15 to 20 minutes to let the skin absorb the essence.",
      },
      {
        title: "Finish",
        detail:
          "Remove the mask and gently pat any remaining serum into the skin.",
      },
    ],
    ingredients:
      "Vitamin C Extract, Hyaluronic Acid, and Hydrating Botanical Complex.",
    skinTypes: "For all skin types",
    // weight: "25g e 0.88FL.OZ"
  },
  {
    slug: "sadoer-kojic-acid-facial-mask",
    name: "Sadoer Kojic Acid Whitening Freckles Facial Mask",
    tagline: "7 Days Quick Whitening • Deeply Nourishing Restorative",
    category: "Skin Care",
    price: "KES 200", // Kept consistent with your sheet mask pricing template
    compareAtPrice: "KES 300",
    image: "/products/kojic_acid_mask_1.jpeg",
    images: [
      "/products/kojic_acid_mask_1.jpeg",
      "/products/kojic_acid_mask_2.jpeg",
    ],
    short:
      "A specialized brightening sheet mask combining Niacinamide, Hyaluronic Acid, and Centella Asiatica to target dark spots, hydrate, and calm the skin.",
    benefits: [
      "Whitening Lightening Of Pigmentation",
      "Hydrates Firms Smoothes Skin",
      "Nourish Soothes Acne-prone Skin",
    ],
    howToUse: [
      {
        title: "Cleanse",
        detail: "Thoroughly cleanse and dry your face before application.",
      },
      {
        title: "Apply",
        detail:
          "Unfold the mask sheet and position it smoothly over your face contours.",
      },
      {
        title: "Rest",
        detail:
          "Leave on for 15 to 20 minutes to allow the whitening essence to absorb.",
      },
      {
        title: "Finish",
        detail:
          "Remove the mask and gently tap remaining fluid until completely absorbed.",
      },
    ],
    ingredients:
      "Kojic Acid, Niacinamide, Hyaluronic Acid, Centella Asiatica Extract.",
    skinTypes: "Suitable for acne-prone, hyperpigmented, and all skin types",
    // weight: "30g/1.1OZ"
  },
  {
    slug: "bioaqua-rice-raw-pulp-mask",
    name: "Bioaqua Rice Raw Pulp Facial Mask",
    tagline: "Added Rice Extract",
    category: "Skin Care",
    price: "KES 200", // Kept consistent with your sheet mask pricing template
    compareAtPrice: "KES 300",
    image: "/products/rice_mask_1.jpeg",
    images: ["/products/rice_mask_1.jpeg", "/products/rice_mask_2.jpeg"],
    short:
      "A deeply hydrating and smoothing sheet mask infused with natural rice extract to ease skin dryness and refine pores.",
    benefits: [
      "Relieve dryness and tightness",
      "Nourishes the skin, shrinks pores",
      "Long-lasting moisturizing",
    ],
    howToUse: [
      {
        title: "Cleanse",
        detail: "Thoroughly cleanse and dry your face before use.",
      },
      {
        title: "Apply",
        detail:
          "Unfold the mask and smooth it evenly over your facial contours.",
      },
      {
        title: "Rest",
        detail:
          "Leave on for 15 to 20 minutes to allow the raw rice pulp essence to absorb.",
      },
      {
        title: "Finish",
        detail:
          "Remove the mask and gently pat any remaining fluid into your skin.",
      },
    ],
    ingredients:
      "Rice Raw Pulp Extract (Oryza Sativa), Hyaluronic Acid, Glycerin, Botanical Nourishing Agents.",
    skinTypes: "For all skin types",
    // weight: "Net: 25g"
  },
  {
    slug: "sadoer-honey-facial-mask",
    name: "Sadoer Plant Mask Series Honey Soft Smooth Facial Mask",
    tagline: "Let Your Skin Glow With Youth • Deep Repair And Moisturize",
    category: "Skin Care",
    price: "KES 200", // Kept consistent with your sheet mask pricing template
    compareAtPrice: "KES 300",
    image: "/products/honey_face_mask_1.jpeg",
    images: [
      "/products/honey_face_mask_1.jpeg",
      // "/products/honey_face_mask_2.jpeg",
    ],
    short:
      "A deeply repairing and moisturizing sheet mask featuring a light, soft film cloth that allows multiple nutrients to penetrate and revitalize the skin.",
    benefits: [
      "Replenish Water and Nutrients", // Typo from physical label 'Nnutrients' corrected for cleaner frontend display
      "Brighten Skin Tone",
      "Multiple Nutrient Penetration",
      "Film Cloth is Soft And Light",
    ],
    howToUse: [
      {
        title: "Cleanse",
        detail: "Thoroughly cleanse and dry your face before use.",
      },
      {
        title: "Apply",
        detail:
          "Unfold the mask and smooth it evenly over your facial contours.",
      },
      {
        title: "Rest",
        detail:
          "Leave on for 15 to 20 minutes to let the skin absorb the honey essence.",
      },
      {
        title: "Finish",
        detail:
          "Remove the mask and gently pat any remaining fluid into your skin.",
      },
    ],
    ingredients:
      "Honey Extract, Royal Jelly Extract, Hyaluronic Acid, Glycerin, Botanical Nourishing Complex.",
    skinTypes: "For all skin types",
    // weight: "NET: 25g",
  },
  {
    slug: "guli-girl-magic-lip-oil",
    name: "Guli Girl Magic Lip Oil",
    tagline: "Nourishing Lip Care",
    category: "Lip Care",
    price: "KES 150",
    compareAtPrice: "KES 250", // Standard retail markup placeholder, adjust as needed
    image: "/products/lip_oil_1.jpeg",
    images: [
      "/products/lip_oil_1.jpeg",
      "/products/lip_oil_2.jpeg",
      "/products/lip_oil_3.jpeg",
    ],
    short:
      "A hydrating and glossy lip oil designed in an adorable character bottle to provide long-lasting nourishment and a soft shine.",
    benefits: [
      "Provides deep hydration to dry or chapped lips",
      "Delivers a lightweight, non-sticky high-shine finish",
      "Locks in moisture for soft, smooth lips all day",
    ],
    howToUse: [
      {
        title: "Application",
        detail:
          "Unscrew the character cap and use the wand to sweep evenly across bare lips.",
      },
      {
        title: "Layering",
        detail:
          "Wear alone for a natural glossy look, or layer over your favorite lipstick for added shine.",
      },
    ],
    ingredients:
      "Mineral Oil, Polyisobutene, Hydrating Botanical Extracts, Fragrance, and Essential Lip-Nourishing Complex.",
    skinTypes: "For all skin types",
  },
  {
    slug: "guli-girl-hydra-kiss-lip-oil",
    name: "Guli Girl Hydra Kiss Lip Oil",
    tagline: "Hydra Kiss • High-Shine Nourishment",
    category: "Lip Care",
    price: "KES 150", // Kept consistent with your lip care pricing template
    compareAtPrice: "KES 250",
    image: "/products/lip_oil_v1.jpeg",
    images: ["/products/lip_oil_v1.jpeg"],
    short:
      "A sleek, premium lip oil formulated to deliver deep hydration and a high-shine glossy finish while keeping lips comfortably soft.",
    benefits: [
      "Provides long-lasting moisture and hydration",
      "Delivers a lightweight, non-sticky glossy shine",
      "Smooths and conditions dry or chapped lips",
    ],
    howToUse: [
      {
        title: "Application",
        detail:
          "Glide the applicator wand smoothly over bare lips for an instant hydration boost.",
      },
      {
        title: "Layering",
        detail:
          "Apply over your favorite matte lip color to add a glassy, comfortable shine finish.",
      },
    ],
    ingredients:
      "Mineral Oil, Polyisobutene, Hydrogenated Styrene/Isoprene Copolymer, Tocopherol (Vitamin E), Fragrance.",
    skinTypes: "For all skin types",
    // weight: "NET: 8ml"
  },
  {
    slug: "sadoer-lemon-hand-cream",
    name: "Sadoer Lemon Fruit Hand Cream",
    tagline: "Fruit Fragrant • Tender and Moist",
    category: "Body Care",
    price: "KES 200", // Kept consistent with small-item pricing, adjust as needed
    compareAtPrice: "KES 269", 
    image: "/products/hand_cream_1.jpeg",
    images: ["/products/hand_cream_1.jpeg"],
    short:
      "A deeply moisturizing hand cream infused with a refreshing lemon fruit fragrance to leave your hands feeling soft, smooth, and beautifully hydrated.",
    benefits: [
      "Provides rich hydration for dry hands",
      "Delivers a crisp, uplifting citrus scent",
      "Leaves skin feeling tender and thoroughly moist",
    ],
    howToUse: [
      { title: "Application", detail: "Squeeze a small amount onto the back of your hands and rub together gently." },
      { title: "Frequency", detail: "Massage into hands and cuticles as needed throughout the day, especially after washing." },
    ],
    ingredients: "Lemon Fruit Extract (Citrus Limon), Glycerin, Mineral Oil, Shea Butter, Botanical Extracts, Fragrance.",
    skinTypes: "For all skin types",
    // weight: "Net: 30g"
}

];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
