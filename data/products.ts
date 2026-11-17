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
 * detail-page layout are ready. Swap in your real products (name,
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
      "A pure, refreshing mist made with real rose extract. Hydrates, soothes and revitalizes skin in one spray.",
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
      "PLACEHOLDER. Replace with your real product copy. A mineral-rich clay mask blended with rose for a gentle deep clean.",
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
      "/products/vitamin_c_mask_3.jpeg",
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
      {
        title: "Application",
        detail:
          "Squeeze a small amount onto the back of your hands and rub together gently.",
      },
      {
        title: "Frequency",
        detail:
          "Massage into hands and cuticles as needed throughout the day, especially after washing.",
      },
    ],
    ingredients:
      "Lemon Fruit Extract (Citrus Limon), Glycerin, Mineral Oil, Shea Butter, Botanical Extracts, Fragrance.",
    skinTypes: "For all skin types",
    // weight: "Net: 30g"
  },
  {
    slug: "maries-turmeric-soap",
    name: "Marie’s Turmeric Soap",
    tagline: "Natural • Gentle • Nourishing",
    category: "Soap Care",
    price: "KES 200", // Adjust to match your soap bar pricing catalog
    compareAtPrice: "KES 249",
    image: "/products/tumeric_soap_1.jpeg", // Primary image for the product
    images: ["/products/tumeric_soap_1.jpeg", "/products/tumeric_soap_2.jpeg"],
    short:
      "A beautifully crafted, natural turmeric soap bar molded to gently cleanse, brighten, and deeply condition your complexion.",
    benefits: [
      "Brightens Skin & Evens Tone",
      "Helps Reduce & Moisturizes",
      "Soothes & Revitalizes",
    ],
    howToUse: [
      {
        title: "Lather",
        detail:
          "Wet your hands and rub the soap bar to create a rich, creamy lather.",
      },
      {
        title: "Application",
        detail:
          "Massage gently onto your face or body in circular motions, avoiding the eyes.",
      },
      {
        title: "Rinse",
        detail: "Rinse off completely with lukewarm water and pat dry.",
      },
    ],
    ingredients:
      "Natural Turmeric Extract, Botanical Oils, Essential Minerals, and Moisturizing Complex.",
    skinTypes: "For all skin types",
  },
  {
    slug: "maries-aloe-vera-soap",
    name: "Marie’s Aloe Vera Soap",
    tagline: "Natural • Gentle • Nourishing", // Keeping branding consistent with Marie's soap line
    category: "Soap Care",
    price: "KES 200", // Kept consistent with the Marie's soap template
    compareAtPrice: "KES 249",
    image: "/products/aloe_vera_soap_1.jpeg", // Primary image for the product
    images: [
      "/products/aloe_vera_soap_1.jpeg",
      "/products/aloe_vera_soap_2.jpeg",
    ],
    short:
      "A beautifully crafted, natural aloe vera soap bar molded into a stunning floral design to deeply soothe, hydrate, and cleanse your skin.",
    benefits: [
      "Deeply Hydrates & Locks Moisture",
      "Soothes Irritation & Redness",
      "Gently Cleanses Sensitive Skin",
    ],
    howToUse: [
      {
        title: "Lather",
        detail:
          "Wet your hands and rub the soap bar to create a rich, creamy lather.",
      },
      {
        title: "Application",
        detail:
          "Massage gently onto your face or body in circular motions, avoiding the eyes.",
      },
      {
        title: "Rinse",
        detail: "Rinse off completely with clean water and pat dry.",
      },
    ],
    ingredients:
      "Natural Aloe Vera Extract, Premium Botanical Oils, Essential Minerals, and Nourishing Plant Extracts.",
    skinTypes: "For all skin types, especially dry and sensitive skin",
  },
  {
    slug: "maries-black-seed-soap",
    name: "Marie’s Black Seed Soap",
    tagline: "Natural • Purifying • Nourishing",
    category: "Soap Care",
    price: "KES 200",
    compareAtPrice: "KES 249",
    image: "/products/black_seed_soap_1.jpeg",
    images: [
      "/products/black_seed_soap_1.jpeg",
      "/products/black_seed_soap_2.jpeg",
    ],
    short:
      "A beautifully crafted, natural black seed soap bar molded to deeply purify, detoxify, and nourish your skin complexion.",
    benefits: [
      "Deeply purifies and detoxifies pores",
      "Nourishes the skin barrier naturally",
      "Clears away impurities for a refreshed feel",
    ],
    howToUse: [
      {
        title: "Lather",
        detail: "Wet your hands and rub the soap bar to create a rich lather.",
      },
      {
        title: "Application",
        detail:
          "Massage gently onto your face or body in circular motions, avoiding the eyes.",
      },
      {
        title: "Rinse",
        detail: "Rinse off completely with clean water and pat dry.",
      },
    ],
    ingredients:
      "Natural Black Seed Extract (Nigella Sativa), Premium Botanical Oils, Essential Minerals, and Nourishing Plant Extracts.",
    skinTypes: "Suitable for All Skin Types",
  },
  {
    slug: "maries-olive-oil-soap",
    name: "Marie’s Olive Oil Soap",
    tagline: "Natural • Gentle • Nourishing", // Following the consistent branding pattern for Marie's artisan soaps
    category: "Soap Care",
    price: "KES 200", // Kept consistent with the Marie's artisan soap line pricing
    compareAtPrice: "KES 249",
    image: "/products/olive_soap_1.jpeg",
    images: ["/products/olive_soap_1.jpeg"],
    short:
      "A beautifully crafted, natural olive oil soap bar molded into an elegant floral design to deeply moisturize, soften, and protect your skin skin barrier.",
    benefits: [
      "Deeply moisturizes and conditions dry skin",
      "Rich in natural antioxidants to protect skin cells",
      "Provides a gentle, non-stripping cleanse",
    ],
    howToUse: [
      {
        title: "Lather",
        detail:
          "Wet your hands and rub the soap bar to create a rich, creamy lather.",
      },
      {
        title: "Application",
        detail:
          "Massage gently onto your face or body in circular motions, avoiding the eyes.",
      },
      {
        title: "Rinse",
        detail: "Rinse off completely with clean water and pat dry.",
      },
    ],
    ingredients:
      "Pure Olive Oil (Olea Europaea), Premium Botanical Oils, Essential Minerals, and Vitamin E.",
    skinTypes: "For all skin types, especially dry and sensitive skin",
  },
  {
    slug: "maries-turmeric-ginseng-soap",
    name: "Marie’s Turmeric & Ginseng Soap",
    tagline: "Natural • Revitalizing • Nourishing",
    category: "Skin Care",
    price: "KES 400", // Kept consistent with the Marie's artisan soap line pricing
    compareAtPrice: "KES 600",
    image: "/products/tumeric_ginseng_soap_1.jpeg", // Primary image for the product
    images: [
      "/products/tumeric_ginseng_soap_1.jpeg",
      "/products/tumeric_ginseng_soap_2.jpeg",
    ],
    short:
      "A masterfully crafted natural soap bar blending turmeric and ginseng roots to gently cleanse, brighten, and re-energize tired skin.",
    benefits: [
      "Brightens the complexion and promotes an even skin tone",
      "Revitalizes and anti-ages with nutrient-rich ginseng",
      "Deeply nourishes while providing a gentle, refreshing cleanse",
    ],
    howToUse: [
      {
        title: "Lather",
        detail:
          "Wet your hands and rub the soap bar to create a rich, creamy lather.",
      },
      {
        title: "Application",
        detail:
          "Massage gently onto your face or body in circular motions, avoiding the eyes.",
      },
      {
        title: "Rinse",
        detail: "Rinse off completely with clean water and pat dry.",
      },
    ],
    ingredients:
      "Natural Turmeric Extract, Ginseng Root Extract, Premium Botanical Oils, Essential Minerals, and Vitamin E.",
    skinTypes: "Suitable for All Skin Types",
  },
  {
    slug: "arabi-coffee-shea-sugar-scrub",
    name: "Marie’s Arabi Coffee Shea Sugar Scrub",
    tagline: "Glow Naturally - Smooth, Bright, Soft Skin",
    category: "Body Care",
    price: "KES 2,000",
    compareAtPrice: "KES 2,500",
    image: "/products/arabi-coffee-shea-sugar-scrub-1.jpeg",
    images: [
      "/products/arabi-coffee-shea-sugar-scrub-1.jpeg",
      // "/products/arabi-coffee-shea-sugar-scrub-2.jpeg",
    ],
    short:
      "A rich, exfoliating body scrub made with shea butter and coffee extracts to buff away dead skin cells and reveal smooth, bright, soft skin.",
    benefits: [
      "Gently exfoliates with natural sugar crystals and coffee",
      "Deeply moisturizes and softens with rich shea butter",
      "Promotes a bright, smooth, and natural glow",
    ],
    howToUse: [
      {
        title: "Application",
        detail:
          "Scoop a generous amount onto damp skin and massage gently in circular motions.",
      },
      {
        title: "Rinse",
        detail:
          "Rinse off thoroughly with warm water and pat dry to lock in moisture.",
      },
    ],
    ingredients:
      "Shea Butter, Arabica Coffee Extracts, Natural Cane Sugar, Botanical Oils.",
    skinTypes: "For all skin types",
  },
  {
    slug: "coco-colada-shea-sugar-scrub",
    name: "Marie’s Coco Colada Shea Sugar Scrub",
    tagline: "For Hydrated, Youthful-Looking Skin",
    category: "Body Care",
    price: "KES 2,000",
    compareAtPrice: "KES 2,500",
    image: "/products/coco-colada-shea-sugar-scrub-1.jpeg",
    images: [
      "/products/coco-colada-shea-sugar-scrub-1.jpeg",
      // "/products/coco-colada-shea-sugar-scrub-2.jpeg",
    ],
    short:
      "A tropical exfoliating body scrub made with shea butter and coconut to gently buff away dead skin cells for hydrated, youthful-looking skin.",
    benefits: [
      "Gently exfoliates with natural sugar crystals",
      "Deeply hydrates and nourishes with shea butter and coconut",
      "Promotes smooth, soft, youthful-looking skin",
    ],
    howToUse: [
      {
        title: "Application",
        detail:
          "Scoop a generous amount onto damp skin and massage gently in circular motions.",
      },
      {
        title: "Rinse",
        detail:
          "Rinse off thoroughly with warm water and pat dry to lock in moisture.",
      },
    ],
    ingredients:
      "Shea Butter, Coconut Oil & Extract, Natural Cane Sugar, Botanical Oils.",
    skinTypes: "For all skin types",
  },
  {
    slug: "moroccan-rose-shea-sugar-scrub",
    name: "Marie’s Moroccan Rose Shea Sugar Scrub",
    tagline: "Glow Naturally - Smooth, Bright, Soft Skin",
    category: "Body Care",
    price: "KES 2,000",
    compareAtPrice: "KES 2,500",
    image: "/products/moroccan-rose-shea-sugar-scrub-1.jpeg",
    images: [
      "/products/moroccan-rose-shea-sugar-scrub-1.jpeg",
      // "/products/moroccan-rose-shea-sugar-scrub-2.jpeg",
    ],
    short:
      "A luxurious exfoliating body scrub made with shea butter, pineapple, and papaya extracts to buff away dull skin and leave you with a smooth, bright, soft glow.",
    benefits: [
      "Gently exfoliates with natural sugar crystals and fruit enzymes",
      "Deeply moisturizes and softens with rich shea butter",
      "Promotes smooth, bright, and naturally glowing skin",
    ],
    howToUse: [
      {
        title: "Application",
        detail:
          "Scoop a generous amount onto damp skin and massage gently in circular motions.",
      },
      {
        title: "Rinse",
        detail:
          "Rinse off thoroughly with warm water and pat dry to lock in moisture.",
      },
    ],
    ingredients:
      "Shea Butter, Moroccan Rose Extract, Pineapple Extract, Papaya Extract, Natural Cane Sugar, Botanical Oils.",
    skinTypes: "For all skin types",
  },
  {
    slug: "blue-lagoon-shea-sugar-scrub",
    name: "Marie’s Blue Lagoon Shea Sugar Scrub",
    tagline: "Glow Naturally - Smooth, Bright, Soft Skin",
    category: "Body Care",
    price: "KES 2,000",
    compareAtPrice: "KES 2,500",
    image: "/products/blue-lagoon-shea-sugar-scrub-1.jpeg",
    images: [
      "/products/blue-lagoon-shea-sugar-scrub-1.jpeg",
      // "/products/blue-lagoon-shea-sugar-scrub-2.jpeg",
    ],
    short:
      "A refreshing exfoliating body scrub made with shea butter, red algae, and Dead Sea minerals to polish away dullness and leave skin smooth, bright, and soft.",
    benefits: [
      "Gently exfoliates with natural sugar crystals and Dead Sea minerals",
      "Deeply nourishes and hydrates with shea butter and red algae",
      "Promotes smooth, bright, and soft skin",
    ],
    howToUse: [
      {
        title: "Application",
        detail:
          "Scoop a generous amount onto damp skin and massage gently in circular motions.",
      },
      {
        title: "Rinse",
        detail:
          "Rinse off thoroughly with warm water and pat dry to lock in moisture.",
      },
    ],
    ingredients:
      "Shea Butter, Red Algae Extract, Dead Sea Minerals, Natural Cane Sugar, Botanical Oils.",
    skinTypes: "For all skin types",
  },
  {
    slug: "pineapple-shea-sugar-scrub",
    name: "Marie’s Pineapple Shea Sugar Scrub",
    tagline: "Glow Naturally - Smooth, Bright, Soft Skin",
    category: "Body Care",
    price: "KES 2,000",
    compareAtPrice: "KES 2,500",
    image: "/products/pineapple-shea-sugar-scrub-1.jpeg",
    images: [
      "/products/pineapple-shea-sugar-scrub-1.jpeg",
      // "/products/pineapple-shea-sugar-scrub-2.jpeg",
    ],
    short:
      "A revitalizing exfoliating body scrub made with shea butter, pineapple, and vegan collagen to gently polish skin and promote a smooth, bright, soft glow.",
    benefits: [
      "Gently exfoliates with natural sugar crystals and pineapple enzymes",
      "Deeply nourishes and firms with shea butter and vegan collagen",
      "Promotes smooth, bright, and soft skin",
    ],
    howToUse: [
      {
        title: "Application",
        detail:
          "Scoop a generous amount onto damp skin and massage gently in circular motions.",
      },
      {
        title: "Rinse",
        detail:
          "Rinse off thoroughly with warm water and pat dry to lock in moisture.",
      },
    ],
    ingredients:
      "Shea Butter, Pineapple Extract, Vegan Collagen, Natural Cane Sugar, Botanical Oils.",
    skinTypes: "For all skin types",
  },
  {
    slug: "alpha-arbutin-shea-sugar-scrub",
    name: "Marie’s Alpha Arbutin Shea Sugar Scrub",
    tagline: "Glow Naturally - Smooth, Bright, Soft Skin",
    category: "Body Care",
    price: "KES 2,000",
    compareAtPrice: "KES 2,500",
    image: "/products/alpha-arbutin-shea-sugar-scrub-1.jpeg",
    images: [
      "/products/alpha-arbutin-shea-sugar-scrub-1.jpeg",
      // "/products/alpha-arbutin-shea-sugar-scrub-2.jpeg",
    ],
    short:
      "A brightening exfoliating body scrub made with shea butter and alpha arbutin to buff away dullness, even skin tone, and reveal smooth, bright, soft skin.",
    benefits: [
      "Gently exfoliates with natural sugar crystals to smooth skin texture",
      "Helps brighten dull areas and promote an even skin tone with alpha arbutin",
      "Deeply moisturizes and softens with rich shea butter",
    ],
    howToUse: [
      {
        title: "Application",
        detail:
          "Scoop a generous amount onto damp skin and massage gently in circular motions.",
      },
      {
        title: "Rinse",
        detail:
          "Rinse off thoroughly with warm water and pat dry to lock in moisture.",
      },
    ],
    ingredients:
      "Shea Butter, Alpha Arbutin, Natural Cane Sugar, Botanical Oils.",
    skinTypes: "For all skin types",
  },
  {
    slug: "vitamin-c-shea-sugar-scrub",
    name: "Marie’s Vitamin C Shea Sugar Scrub",
    tagline:
      "Reveals Brighter-Looking Skin • Glow Naturally • Smooth, Bright, Soft Skin",
    category: "Body Care",
    price: "KES 2,000",
    compareAtPrice: "KES 2,500",
    image: "/products/vitamin-c-shea-sugar-scrub-1.jpeg",
    images: [
      "/products/vitamin-c-shea-sugar-scrub-1.jpeg",
      // "/products/vitamin-c-shea-sugar-scrub-2.jpeg",
    ],
    short:
      "A revitalizing exfoliating body scrub made with shea butter, Vitamin C, and Alpha Hydroxy Acid to buff away dullness and reveal brighter-looking, smooth, soft skin.",
    benefits: [
      "Gently exfoliates with natural sugar crystals and Alpha Hydroxy Acid (AHA)",
      "Reveals brighter-looking, radiant skin with Vitamin C",
      "Deeply moisturizes and softens with rich shea butter",
    ],
    howToUse: [
      {
        title: "Application",
        detail:
          "Scoop a generous amount onto damp skin and massage gently in circular motions.",
      },
      {
        title: "Rinse",
        detail:
          "Rinse off thoroughly with warm water and pat dry to lock in moisture.",
      },
    ],
    ingredients:
      "Shea Butter, Vitamin C, Alpha Hydroxy Acid (AHA), Natural Cane Sugar, Botanical Oils.",
    skinTypes: "For all skin types",
  },
  {
    slug: "sadoer-sakura-essence-eye-mask",
    name: "Sadoer Sakura Essence Eye Mask",
    tagline: "Make The Eyes More Delicate And Charming",
    category: "Skin Care",
    price: "KES 350",
    compareAtPrice: "KES 500",
    image: "/products/sadoer-sakura-essence-eye-mask-1.jpeg",
    images: [
      "/products/sadoer-sakura-essence-eye-mask-1.jpeg",
      // "/products/sadoer-sakura-essence-eye-mask-2.jpeg",
    ],
    short:
      "A gentle hydrating under-eye treatment from the Sadoer Eye Care Series infused with Sakura essence to nourish, brighten dark circles, and smooth delicate eye texture.",
    benefits: [
      "Nourishes and deeply moisturizes the delicate under-eye area",
      "Helps fade the appearance of dark circles",
      "Smooths fine lines and improves eye skin texture",
    ],
    howToUse: [
      { title: "Cleanse", detail: "Thoroughly wash and pat dry your face." },
      {
        title: "Apply",
        detail:
          "Place one gel patch gently beneath each eye and smooth out air bubbles.",
      },
      {
        title: "Rest",
        detail:
          "Leave on for 15 to 20 minutes, then remove and lightly pat any remaining essence into the skin.",
      },
    ],
    ingredients:
      "Sakura Flower Extract (Prunus Lannesiana), Hyaluronic Acid, Glycerin, Hydrating Botanical Essence.",
    skinTypes: "For all skin types",
  },
  {
    slug: "sadoer-blueberry-eye-mask",
    name: "Sadoer Blueberry Smooth And Moisturizing Eye Mask",
    tagline: "Refreshing and Not Greasy • Soft and Skin-Friendly",
    category: "Skin Care",
    price: "KES 350",
    compareAtPrice: "KES 500",
    image: "/products/sadoer-blueberry-eye-mask-1.jpeg",
    images: [
      "/products/sadoer-blueberry-eye-mask-1.jpeg",
      // "/products/sadoer-blueberry-eye-mask-2.jpeg",
    ],
    short:
      "A refreshing, non-greasy under-eye gel mask infused with antioxidant-rich blueberry extract to soften, hydrate, and nourish the delicate eye area.",
    benefits: [
      "Refreshing and non-greasy hydration",
      "Soft and skin-friendly gel texture",
      "Deeply nourishes and smooths the eye area",
    ],
    howToUse: [
      { title: "Cleanse", detail: "Thoroughly wash and pat dry your face." },
      {
        title: "Apply",
        detail:
          "Place one gel patch gently beneath each eye and smooth out air bubbles.",
      },
      {
        title: "Rest",
        detail:
          "Leave on for 15 to 20 minutes, then remove and lightly pat any remaining essence into the skin.",
      },
    ],
    ingredients:
      "Blueberry Fruit Extract (Vaccinium Angustifolium), Hyaluronic Acid, Glycerin, Hydrating Botanical Essence.",
    skinTypes: "For all skin types",
  },
  {
    slug: "sadoer-hyaluronic-acid-eye-mask",
    name: "Sadoer Hyaluronic Acid Hydration Eye Mask",
    tagline: "Make The Eyes More Delicate And Charming",
    category: "Skin Care",
    price: "KES 350",
    compareAtPrice: "KES 500",
    image: "/products/sadoer-hyaluronic-acid-eye-mask-1.jpeg",
    images: [
      "/products/sadoer-hyaluronic-acid-eye-mask-1.jpeg",
      // "/products/sadoer-hyaluronic-acid-eye-mask-2.jpeg",
    ],
    short:
      "A deeply hydrating under-eye treatment from the Sadoer Eye Care Series powered by hyaluronic acid to replenish moisture, fade dark circles, and smooth delicate eye texture.",
    benefits: [
      "Nourishes and deeply moisturizes the under-eye area",
      "Helps fade the appearance of dark circles",
      "Smooths fine lines and improves eye skin texture",
    ],
    howToUse: [
      { title: "Cleanse", detail: "Thoroughly wash and pat dry your face." },
      {
        title: "Apply",
        detail:
          "Place one gel patch gently beneath each eye and smooth out air bubbles.",
      },
      {
        title: "Rest",
        detail:
          "Leave on for 15 to 20 minutes, then remove and lightly pat any remaining essence into the skin.",
      },
    ],
    ingredients:
      "Hyaluronic Acid (Sodium Hyaluronate), Glycerin, Hydrating Botanical Essence.",
    skinTypes: "For all skin types",
  },
  {
    slug: "sadoer-caviar-essence-eye-mask",
    name: "Sadoer Caviar Essence Eye Mask",
    tagline: "Make The Eyes More Delicate And Charming",
    category: "Skin Care",
    price: "KES 350",
    compareAtPrice: "KES 500",
    image: "/products/sadoer-caviar-essence-eye-mask-1.jpeg",
    images: [
      "/products/sadoer-caviar-essence-eye-mask-1.jpeg",
      // "/products/sadoer-caviar-essence-eye-mask-2.jpeg",
    ],
    short:
      "A revitalizing under-eye treatment from the Sadoer Eye Care Series enriched with caviar essence to deeply nourish, fade dark circles, and smooth delicate eye texture.",
    benefits: [
      "Nourishes and deeply moisturizes the under-eye area",
      "Helps fade the appearance of dark circles",
      "Smooths fine lines and improves eye skin texture",
    ],
    howToUse: [
      { title: "Cleanse", detail: "Thoroughly wash and pat dry your face." },
      {
        title: "Apply",
        detail:
          "Place one gel patch gently beneath each eye and smooth out air bubbles.",
      },
      {
        title: "Rest",
        detail:
          "Leave on for 15 to 20 minutes, then remove and lightly pat any remaining essence into the skin.",
      },
    ],
    ingredients:
      "Caviar Extract, Hyaluronic Acid, Glycerin, Hydrating Botanical Essence.",
    skinTypes: "For all skin types",
  },
  {
    slug: "sadoer-pearl-rejuvenating-eye-mask",
    name: "Sadoer Pearl Rejuvenating Soft Eye Mask",
    tagline: "Refreshing and Not Greasy • Soft and Skin-Friendly",
    category: "Skin Care",
    price: "KES 350",
    compareAtPrice: "KES 500",
    image: "/products/sadoer-pearl-rejuvenating-eye-mask-1.jpeg",
    images: [
      "/products/sadoer-pearl-rejuvenating-eye-mask-1.jpeg",
      // "/products/sadoer-pearl-rejuvenating-eye-mask-2.jpeg",
    ],
    short:
      "A refreshing, non-greasy under-eye gel mask enriched with pearl extract to brighten, soften, and deeply nourish the delicate eye area.",
    benefits: [
      "Refreshing and non-greasy hydration",
      "Soft and skin-friendly gel texture",
      "Deeply nourishes and rejuvenates the eye area",
    ],
    howToUse: [
      { title: "Cleanse", detail: "Thoroughly wash and pat dry your face." },
      {
        title: "Apply",
        detail:
          "Place one gel patch gently beneath each eye and smooth out air bubbles.",
      },
      {
        title: "Rest",
        detail:
          "Leave on for 15 to 20 minutes, then remove and lightly pat any remaining essence into the skin.",
      },
    ],
    ingredients:
      "Pearl Extract (Hydrolyzed Pearl), Hyaluronic Acid, Glycerin, Hydrating Botanical Essence.",
    skinTypes: "For all skin types",
  },
  {
    slug: "sadoer-blueberry-hydration-lip-mask",
    name: "Sadoer Blueberry Hydration Lip Mask",
    tagline: "Lips Are More Delicate And Charming",
    category: "Lip Care",
    price: "KES 350",
    compareAtPrice: "KES 500",
    image: "/products/sadoer-blueberry-hydration-lip-mask-1.jpeg",
    images: [
      "/products/sadoer-blueberry-hydration-lip-mask-1.jpeg",
      // "/products/sadoer-blueberry-hydration-lip-mask-2.jpeg",
    ],
    short:
      "A nourishing gel lip treatment from the Sadoer Fruit Series infused with blueberry extract to hydrate dry lips, soften lip lines, and brighten lip tone.",
    benefits: [
      "Nourishes and deeply moisturizes dry, chapped lips",
      "Helps fade the appearance of fine lip lines",
      "Brightens lip color for soft, smooth, charming lips",
    ],
    howToUse: [
      {
        title: "Cleanse",
        detail: "Gently clean and pat your lips dry before application.",
      },
      {
        title: "Apply",
        detail:
          "Place the gel lip patch smoothly over your lips and press gently to secure.",
      },
      {
        title: "Rest",
        detail:
          "Leave on for 15 to 20 minutes, then remove and lightly massage any remaining essence into your lips.",
      },
    ],
    ingredients:
      "Blueberry Fruit Extract (Vaccinium Angustifolium), Collagen, Hyaluronic Acid, Glycerin, Hydrating Botanical Essence.",
    skinTypes: "For all skin types",
  },
  {
    slug: "bioaqua-honey-peach-hexapeptide-mask",
    name: "Bioaqua Honey Peach Hexapeptide Mask",
    tagline: "Hydrating & Nourishing • Soft, Smooth & Glowing Skin",
    category: "Skin Care",
    price: "KES 200",
    compareAtPrice: "KES 300",
    image: "/products/bioaqua-honey-peach-hexapeptide-mask-1.jpeg",
    images: [
      "/products/bioaqua-honey-peach-hexapeptide-mask-1.jpeg",
      // "/products/bioaqua-honey-peach-hexapeptide-mask-2.jpeg",
    ],
    short:
      "A deeply hydrating and nourishing sheet mask infused with honey peach extract and hexapeptides to firm, soften, and leave your skin smooth and glowing.",
    benefits: [
      "Deeply hydrates and replenishes dry skin",
      "Nourishes and firms with hexapeptide technology",
      "Leaves skin soft, smooth, and radiant",
    ],
    howToUse: [
      {
        title: "Cleanse",
        detail: "Thoroughly wash and dry your face before use.",
      },
      {
        title: "Apply",
        detail:
          "Unfold the mask and smooth it evenly across your facial contours.",
      },
      {
        title: "Rest",
        detail: "Leave on for 15 to 20 minutes to allow the essence to absorb.",
      },
      {
        title: "Finish",
        detail:
          "Remove the mask and gently pat any remaining serum into the skin.",
      },
    ],
    ingredients:
      "Honey Peach Extract (Prunus Persica), Acetyl Hexapeptide-8, Honey Extract, Hyaluronic Acid, Glycerin.",
    skinTypes: "For all skin types",
  },
  {
    slug: "shimmering-body-butter",
    name: "Marie’s Shimmering Body Butter",
    tagline: "Glow Naturally - Smooth, Soft, Radiant Skin",
    category: "Body Care",
    price: "KES 2,599",
    compareAtPrice: "KES 3,000",
    image: "/products/shimmering-body-butter-1.jpeg",
    images: [
      "/products/shimmering-body-butter-1.jpeg",
      // "/products/shimmering-body-butter-2.jpeg",
    ],
    short:
      "A rich, deeply moisturizing shea body butter made with Vitamin E and natural glow oils to leave your skin smooth, soft, and luminous with a subtle shimmer.",
    benefits: [
      "Deeply moisturizes and softens dry skin with rich shea butter",
      "Nourishes and protects the skin barrier with Vitamin E",
      "Leaves a natural, luminous shimmer for smooth, radiant skin",
    ],
    howToUse: [
      {
        title: "Application",
        detail: "Scoop a small amount and warm it between your palms.",
      },
      {
        title: "Massage",
        detail:
          "Massage gently onto clean, slightly damp skin until absorbed, focusing on dry areas or wherever you want a subtle glow.",
      },
    ],
    ingredients:
      "Shea Butter, Vitamin E (Tocopherol), Natural Glow Oils, Mineral Shimmer Mica.",
    skinTypes: "For all skin types",
  },
  {
    slug: "bioaqua-camellias-anti-oxidation-mask",
    name: "Bioaqua Camellias Anti-Oxidation Hydrating Nourish Facial Mask",
    tagline:
      "Nourishing Emollient Antioxidant Hydrating • Gentle and Nourishing Ingredients of Camellia",
    category: "Skin Care",
    price: "KES 200",
    compareAtPrice: "KES 300",
    image: "/products/bioaqua-camellias-anti-oxidation-mask-1.jpeg",
    images: [
      "/products/bioaqua-camellias-anti-oxidation-mask-1.jpeg",
      "/products/bioaqua-camellias-anti-oxidation-mask-2.jpeg",
    ],
    short:
      "A gentle, antioxidant-rich sheet mask infused with nourishing camellia flower ingredients to deeply moisturize, rejuvenate, and keep skin radiant.",
    benefits: [
      "Antioxidant protection from gentle camellia ingredients",
      "Deeply moisturizing and nourishing for dry skin",
      "Rejuvenates, brightens, and keeps skin radiant",
    ],
    howToUse: [
      {
        title: "Cleanse",
        detail: "Thoroughly wash and dry your face before use.",
      },
      {
        title: "Apply",
        detail:
          "Unfold the mask and smooth it evenly across your facial contours.",
      },
      {
        title: "Rest",
        detail:
          "Leave on for 15 to 20 minutes to allow the camellia essence to absorb.",
      },
      {
        title: "Finish",
        detail:
          "Remove the mask and gently pat any remaining serum into the skin.",
      },
    ],
    ingredients:
      "Camellia Japonica Flower Extract, Hyaluronic Acid, Glycerin, Botanical Antioxidant Complex.",
    skinTypes: "For all skin types",
  },
  {
    slug: "white-bentonite-clay",
    name: "Marie’s White Bentonite Clay",
    tagline: "Glow Naturally • Clear, Smooth, Reset Skin",
    category: "Skin Care",
    price: "KES 1,500", // Kept consistent with your clay mask pricing, adjust as needed
    compareAtPrice: "KES 1,800",
    image: "/products/white-bentonite-clay-1.jpeg",
    images: [
      "/products/white-bentonite-clay-1.jpeg",
      "/products/white-bentonite-clay-2.jpeg",
    ],
    short:
      "A natural detox face and body clay mask made with pure white bentonite clay for deep cleansing, gentle purification, and reset, glowing skin.",
    benefits: [
      "Deeply cleanses and detoxifies pores on both face and body",
      "Gently draws out excess oil and impurities without harshness",
      "Leaves skin feeling clear, smooth, and naturally refreshed",
    ],
    howToUse: [
      {
        title: "Mix",
        detail:
          "Combine 1–2 teaspoons of clay powder with water or rose water in a non-metallic bowl until a smooth paste forms.",
      },
      {
        title: "Apply",
        detail:
          "Spread an even layer onto clean skin on your face or body, avoiding the eye and lip areas.",
      },
      {
        title: "Rinse",
        detail:
          "Leave on for 10 to 15 minutes until mostly dry, then rinse off thoroughly with warm water and pat dry.",
      },
    ],
    ingredients: "100% Pure White Bentonite Clay.",
    skinTypes: "For all skin types, including sensitive skin",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
