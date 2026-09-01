export type Package = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  audience: "female" | "male" | "unisex";
  emoji: string;
  themeColor: string;
  themeGradient: string;
  products: string[]; // product slugs
  originalPrice: string;
  packagePrice: string;
  savings: string;
  highlights: string[];
  routine: { step: string; productSlug: string; why: string }[];
  badge?: string;
};

export const packages: Package[] = [
  {
    slug: "menstrual-period",
    name: "Menstrual Period Package",
    tagline: "Gentle care for your monthly cycle",
    description:
      "A soothing ritual designed for the days when your body asks for extra kindness. Calm hormonal breakouts, hydrate skin, and nurture yourself through every phase of your period.",
    audience: "female",
    emoji: "🌙",
    themeColor: "rose-deep",
    themeGradient: "from-rose-light via-blush to-rose/20",
    products: ["rose-water", "avocado-scrub", "sadoer-honey-facial-mask", "guli-girl-magic-lip-oil"],
    originalPrice: "KES 2,150",
    packagePrice: "KES 1,650",
    savings: "KES 500",
    highlights: [
      "Rose Water calms hormonal breakouts & inflammation",
      "Avocado Scrub gently exfoliates without irritating sensitive skin",
      "Honey Mask deeply nourishes & repairs overnight",
      "Magic Lip Oil keeps lips soft through hormonal dryness",
    ],
    routine: [
      { step: "Morning: Cleanse & tone", productSlug: "rose-water", why: "Balances pH and soothes inflammation from hormonal shifts" },
      { step: "2× week: Gentle polish", productSlug: "avocado-scrub", why: "Removes dead cells without stripping moisture barrier" },
      { step: "Evening: Deep repair", productSlug: "sadoer-honey-facial-mask", why: "Honey & royal jelly rebuild skin while you sleep" },
      { step: "Anytime: Lip comfort", productSlug: "guli-girl-magic-lip-oil", why: "Prevents chapping from hormonal dehydration" },
    ],
    badge: "Most Popular",
  },
  {
    slug: "brightening-glow",
    name: "Brightening & Glow Package",
    tagline: "Fade dark spots, reveal your glow",
    description:
      "Brighten, smooth, and illuminate. This bundle targets dullness, dark spots, and uneven texture for skin that catches the light beautifully.",
    audience: "female",
    emoji: "✨",
    themeColor: "gold",
    themeGradient: "from-gold/20 via-blush to-rose-light/20",
    products: ["vitamin-c-scrub", "bioaqua-vitamin-c-mask", "sadoer-kojic-acid-facial-mask", "guli-girl-hydra-kiss-lip-oil"],
    originalPrice: "KES 2,200",
    packagePrice: "KES 1,700",
    savings: "KES 500",
    highlights: [
      "Vitamin C Scrub reveals fresh, radiant skin",
      "Bioaqua Vitamin C Mask delivers instant brightness",
      "Kojic Acid Mask fades dark spots & evens tone",
      "Hydra Kiss Lip Oil adds a glassy, plump finish",
    ],
    routine: [
      { step: "2× week: Brightening polish", productSlug: "vitamin-c-scrub", why: "Vitamin C + natural grains fade pigmentation gently" },
      { step: "1× week: Intensive brightness", productSlug: "bioaqua-vitamin-c-mask", why: "High-potency Vitamin C serum absorbs in 15 minutes" },
      { step: "2× week: Spot correction", productSlug: "sadoer-kojic-acid-facial-mask", why: "Kojic + niacinamide target stubborn dark spots" },
      { step: "Daily: Glossy finish", productSlug: "guli-girl-hydra-kiss-lip-oil", why: "High-shine hydration completes the luminous look" },
    ],
    badge: "Best for Dullness",
  },
  {
    slug: "mens-skincare-starter",
    name: "Men's Skincare Starter Package",
    tagline: "Simple, strong routine for him",
    description:
      "No fuss, no fluff. A streamlined 3-step routine built for men who want clear, healthy skin without a 10-step regimen. Oil control, pore care, hydration done.",
    audience: "male",
    emoji: "🪒",
    themeColor: "moss",
    themeGradient: "from-moss/20 via-blush to-moss-light/20",
    products: ["charcoal-scrub", "black-clay-mask", "rose-water", "sadoer-lemon-hand-cream"],
    originalPrice: "KES 2,800",
    packagePrice: "KES 2,100",
    savings: "KES 700",
    highlights: [
      "Charcoal Scrub deep-cleans pores & prevents ingrown hairs",
      "Black Clay Mask absorbs excess oil without over-drying",
      "Rose Water tones & calms post-shave irritation",
      "Lemon Hand Cream keeps hands presentable, not greasy",
    ],
    routine: [
      { step: "Daily AM/PM: Cleanse & tone", productSlug: "rose-water", why: "Instantly calms razor burn, balances oil production" },
      { step: "2× week: Deep clean", productSlug: "charcoal-scrub", why: "Activated charcoal pulls dirt from deep in pores" },
      { step: "1× week: Oil control", productSlug: "black-clay-mask", why: "Natural clay absorbs shine without stripping skin" },
      { step: "Daily: Hands", productSlug: "sadoer-lemon-hand-cream", why: "Fast-absorbing, citrus-fresh hydration for rough hands" },
    ],
    badge: "Best Seller",
  },
  {
    slug: "post-workout-recovery",
    name: "Post-Workout Skin Recovery Package",
    tagline: "Cleanse, reset, hydrate after sweat",
    description:
      "Whether you're hitting the gym, the field, or the trail — this kit cleans sweat, unclogs pores, and restores hydration fast. For active lifestyles, any gender.",
    audience: "unisex",
    emoji: "🏃",
    themeColor: "ink",
    themeGradient: "from-ink/10 via-blush to-moss/10",
    products: ["charcoal-scrub", "qusil-powder", "rose-water", "sadoer-lemon-hand-cream"],
    originalPrice: "KES 3,000",
    packagePrice: "KES 2,300",
    savings: "KES 700",
    highlights: [
      "Charcoal Scrub removes sweat, sunscreen & grime",
      "Qusil Powder mask purifies pores after heavy perspiration",
      "Rose Water instantly cools & rebalances post-workout",
      "Lemon Hand Cream repairs barrier after frequent washing",
    ],
    routine: [
      { step: "Immediately post-sweat", productSlug: "rose-water", why: "Mist face & body to cool down, prevent salt irritation" },
      { step: "Shower: Deep cleanse", productSlug: "charcoal-scrub", why: "Removes bacteria, sunscreen, and dead skin buildup" },
      { step: "2× week: Pore detox", productSlug: "qusil-powder", why: "Mineral clay draws out congestion from sweat & oil" },
      { step: "Daily: Hands & cuticles", productSlug: "sadoer-lemon-hand-cream", why: "Repairs micro-tears from weights, chalk, equipment" },
    ],
    badge: "Active Lifestyle",
  },
  {
    slug: "spa-day-at-home",
    name: "Spa Day At Home Package",
    tagline: "Luxury self-care ritual",
    description:
      "A luxurious at-home spa experience. Light a candle, put on music, and move through this 4-step ritual that melts stress and leaves skin glowing. Perfect for solo or shared self-care.",
    audience: "unisex",
    emoji: "🛁",
    themeColor: "rose-deep",
    themeGradient: "from-rose/10 via-blush to-gold/10",
    products: ["black-clay-mask", "sadoer-collagen-facial-mask", "avocado-scrub", "sadoer-honey-facial-mask"],
    originalPrice: "KES 2,400",
    packagePrice: "KES 1,850",
    savings: "KES 550",
    highlights: [
      "Black Clay Mask for deep detox to start",
      "Collagen Mask firms & plumps while you relax",
      "Avocado Scrub reveals baby-soft body skin",
      "Honey Mask seals in moisture overnight",
    ],
    routine: [
      { step: "Step 1: Deep detox (10 min)", productSlug: "black-clay-mask", why: "Clears canvas for better absorption of following steps" },
      { step: "Step 2: Firm & plump (20 min)", productSlug: "sadoer-collagen-facial-mask", why: "Active collagen peptides absorb while you meditate/read" },
      { step: "Step 3: Body polish (in shower)", productSlug: "avocado-scrub", why: "Rich oils + gentle grains = silk-soft skin everywhere" },
      { step: "Step 4: Overnight repair", productSlug: "sadoer-honey-facial-mask", why: "Honey + royal jelly work while you sleep" },
    ],
    badge: "Luxury Pick",
  },
  {
    slug: "teen-starter-kit",
    name: "Teen Starter Skincare Package",
    tagline: "Gentle first routine for young skin",
    description:
      "A simple, non-intimidating 3-step routine for tweens and teens navigating their first skin changes. No harsh actives, just clean hydration and gentle guidance.",
    audience: "unisex",
    emoji: "🌱",
    themeColor: "moss-light",
    themeGradient: "from-moss-light/20 via-blush to-rose-light/20",
    products: ["rose-water", "bioaqua-rice-raw-pulp-mask", "guli-girl-magic-lip-oil"],
    originalPrice: "KES 1,150",
    packagePrice: "KES 900",
    savings: "KES 250",
    highlights: [
      "Rose Water: the only toner young skin needs",
      "Rice Mask: gentle brightening without actives",
      "Magic Lip Oil: fun, hydrating, builds good habits",
    ],
    routine: [
      { step: "AM & PM: Cleanse & mist", productSlug: "rose-water", why: "Balances oil, prevents early breakouts, zero sting" },
      { step: "1× week: Gentle glow", productSlug: "bioaqua-rice-raw-pulp-mask", why: "Rice extract brightens post-acne marks naturally" },
      { step: "Daily: Lip care", productSlug: "guli-girl-magic-lip-oil", why: "Cute packaging encourages consistent hydration habit" },
    ],
    badge: "Parent Approved",
  },
  {
    slug: "travel-skincare-essentials",
    name: "Travel Skincare Essentials Package",
    tagline: "TSA-friendly radiance anywhere",
    description:
      "Curated for carry-on only. Sheet masks, mini mists, and solid scrubs that pass security and keep skin happy across time zones, dry cabins, and climate changes.",
    audience: "unisex",
    emoji: "✈️",
    themeColor: "ink-soft",
    themeGradient: "from-ink-soft/10 via-blush to-rose/10",
    products: ["sadoer-collagen-facial-mask", "bioaqua-vitamin-c-mask", "sadoer-kojic-acid-facial-mask", "sadoer-honey-facial-mask", "rose-water"],
    originalPrice: "KES 1,800",
    packagePrice: "KES 1,350",
    savings: "KES 450",
    highlights: [
      "4 sheet masks — flat, leak-proof, cabin-pressure safe",
      "Rose Water mini (decant) for in-flight hydration",
      "No liquids over 100ml — security friendly",
      "Individual sachets = no spills, no stress",
    ],
    routine: [
      { step: "In-flight: Hydrate", productSlug: "rose-water", why: "Mist every 2 hours to combat 10% cabin humidity" },
      { step: "Mid-flight: Mask", productSlug: "sadoer-collagen-facial-mask", why: "Collagen sheet mask = instant moisture surge" },
      { step: "Arrival: Brighten", productSlug: "bioaqua-vitamin-c-mask", why: "Vitamin C revives jet-lagged, dull skin" },
      { step: "Night 1: Repair", productSlug: "sadoer-honey-facial-mask", why: "Honey restores barrier after travel stress" },
      { step: "Ongoing: Spot treat", productSlug: "sadoer-kojic-acid-facial-mask", why: "Kojic acid fades travel-induced pigmentation" },
    ],
    badge: "Travel Ready",
  },
];

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug);
}

export function getPackagesByAudience(audience: "female" | "male" | "unisex") {
  return packages.filter((p) => p.audience === audience);
}

export function getAllPackages() {
  return packages;
}