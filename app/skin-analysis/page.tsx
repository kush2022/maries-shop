import type { Metadata } from "next";
import SkinScan from "@/components/SkinScan";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, siteUrl, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI Skin Scan",
  description:
    "Upload a selfie and get a personalized skincare starting point. Marie's AI skin scan looks at texture, redness, oiliness and concerns to suggest products and a simple routine.",
  openGraph: {
    title: "AI Skin Scan | Marie's Botanicals",
    description:
      "Upload a selfie and get a personalized skincare starting point. Marie's AI skin scan looks at texture, redness, oiliness and concerns to suggest products and a simple routine.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marie's AI Skin Scan",
      },
    ],
  },
};

const breadcrumbs = [
  { name: "Home", url: siteUrl },
  { name: "AI Skin Scan", url: `${siteUrl}/skin-analysis` },
];

const faqs = [
  {
    question: "How does the AI skin scan work?",
    answer:
      "Upload a clear selfie and our AI analyzes your skin for concerns like redness, oiliness, dryness, and texture. It then recommends a personalized routine from our product line.",
  },
  {
    question: "Is the AI skin scan a medical diagnosis?",
    answer:
      "No. This is an automated, non-medical read from a single photo. It's a personalized starting point, not a dermatological diagnosis. For persistent skin concerns, please see a licensed dermatologist.",
  },
  {
    question: "What kind of photo works best?",
    answer:
      "A clear, front-facing selfie in natural light works best. Make sure your whole face is visible, remove glasses, and avoid heavy makeup.",
  },
  {
    question: "Is my photo stored?",
    answer:
      "No, we never store your photo. The analysis happens in real-time and the image is not saved on our servers.",
  },
];

export default function SkinAnalysisPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={generateFAQSchema(faqs)} />
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
        <SkinScan />
      </main>
    </>
  );
}
