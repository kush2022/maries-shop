# Marie's | Beauty Catalog Website

A Next.js catalog site for Marie's natural skincare line, with WhatsApp-based
ordering (no cart/checkout. Customers tap "Order on WhatsApp" and it opens
a pre-filled message to your number).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. (First run needs internet access once, to
download the Google Fonts used. Fraunces, Dancing Script, Inter.)

## Deploy

Easiest option: push this folder to a GitHub repo and import it on
[vercel.com](https://vercel.com) (free tier is fine). It auto-detects Next.js.

## Editing your content

**Your WhatsApp number / contact info**
`data/config.ts` is one file, one place. Change `phoneWhatsApp` (international
format, no leading 0 or +, e.g. `254741599691`).

**Products**
`data/products.ts` has one object per product. Two of the three products
(Rose Clay Mask, Lavender Body Oil) are placeholders with dummy copy and
generated placeholder images, ready for you to fill in with your real
products. To add a new product:

1. Copy an existing object in the `products` array.
2. Give it a unique `slug` (used in the URL, e.g. `/products/your-slug`).
3. Fill in name, price, benefits, how-to-use steps, ingredients.
4. Add a real photo to `public/products/your-slug.jpg` and point `image` at it.

The catalog grid and product detail pages update automatically. No other
code changes needed.

**Product photos**
Square images work best (the cards and detail page use a 1:1 crop).
Drop them in `public/products/`.

## Structure

```
app/
  page.tsx                 → homepage (hero, catalog grid)
  products/[slug]/page.tsx → product detail page
  layout.tsx, globals.css  → fonts, design tokens (colors, etc.)
components/                → Header, Hero, ProductCard, Benefits, HowToUse,
                              WhatsAppOrderButton, Footer, BloomRose (hero art)
data/
  config.ts                → brand name, phone number
  products.ts               → your product catalog
public/products/            → product photos
```

## SEO

The site includes comprehensive SEO setup:

- **Metadata**: Each page has optimized `title`, `description`, Open Graph, and Twitter Card tags
- **Structured Data (JSON-LD)**:
  - `WebSite` + `Organization` on all pages
  - `Product` schema on product detail pages with price, availability, brand
  - `BreadcrumbList` on shop, product, and skin-analysis pages
  - `FAQPage` schema on home and skin-analysis pages
- **Technical SEO**:
  - Auto-generated `sitemap.xml` at `/sitemap.xml`
  - `robots.txt` at `/robots.txt`
  - `site.webmanifest` for PWA support
  - Canonical URLs on all pages
- **Social**: Open Graph and Twitter Card images at `/og-image.svg`

To customize:
1. Replace `/public/og-image.svg` with your branded 1200×630 image
2. Update `siteUrl` in `lib/seo.ts` for production domain
3. Add real product reviews to enable `aggregateRating` in Product schema

The skin-analysis page (`/skin-analysis`) posts the uploaded photo to your
FastAPI backend and renders the returned routine/products. Point it at your API
with an env var (create `.env.local`):

```
NEXT_PUBLIC_ANALYSIS_API_URL=https://your-api.example.com
```

It expects a `POST /analyze-skin` endpoint that accepts a multipart form field
named `image` and returns the `AnalyzeSkinResponse` schema (face_detected,
confidence, skin_type, concerns, zones, hydration, spf_needed,
photo_quality_feedback, observations, see_dermatologist, dermatologist_note,
routine[], optional_addons[], disclaimer).
