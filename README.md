# Marie's — Beauty Catalog Website

A Next.js catalog site for Marie's natural skincare line, with WhatsApp-based
ordering (no cart/checkout — customers tap "Order on WhatsApp" and it opens
a pre-filled message to your number).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. (First run needs internet access once, to
download the Google Fonts used — Fraunces, Dancing Script, Inter.)

## Deploy

Easiest option: push this folder to a GitHub repo and import it on
[vercel.com](https://vercel.com) (free tier is fine). It auto-detects Next.js.

## Editing your content

**Your WhatsApp number / contact info**
`data/config.ts` — one file, one place. Change `phoneWhatsApp` (international
format, no leading 0 or +, e.g. `254741599691`).

**Products**
`data/products.ts` — one object per product. Two of the three products
(Rose Clay Mask, Lavender Body Oil) are placeholders with dummy copy and
generated placeholder images, ready for you to fill in with your real
products. To add a new product:

1. Copy an existing object in the `products` array.
2. Give it a unique `slug` (used in the URL, e.g. `/products/your-slug`).
3. Fill in name, price, benefits, how-to-use steps, ingredients.
4. Add a real photo to `public/products/your-slug.jpg` and point `image` at it.

The catalog grid and product detail pages update automatically — no other
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

## Design notes

- Colors, fonts and spacing are defined once in `app/globals.css` under
  `@theme` — change the hex values there to retheme the whole site.
- The blooming rose illustration in the hero (`components/BloomRose.tsx`) is
  hand-drawn SVG, not a stock icon — feel free to adjust the petal paths.
