import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import SkinCareConsultation from "@/components/SkinCareConsultation";
import JsonLd from "@/components/JsonLd";
import { generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Natural Beauty, Gently Made",
  description:
    "Marie's is a small-batch natural skincare line: rose water toner, clay masks and body oils made with real botanical extracts.",
  openGraph: {
    title: "Marie's | Natural Beauty, Gently Made",
    description:
      "Marie's is a small-batch natural skincare line: rose water toner, clay masks and body oils made with real botanical extracts.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marie's Botanicals - Natural Beauty, Gently Made",
      },
    ],
  },
};

const faqs = [
  {
    question: "Are Marie's products suitable for sensitive skin?",
    answer:
      "Yes, our products are formulated with gentle botanical extracts and are suitable for sensitive skin. We recommend patch testing first.",
  },
  {
    question: "Where are Marie's products made?",
    answer:
      "All Marie's products are handcrafted in small batches in Kenya using locally sourced botanical ingredients.",
  },
  {
    question: "How do I order?",
    answer:
      "You can order directly via WhatsApp by clicking the 'Order on WhatsApp' button, or visit our shop page to browse products.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently we ship within Kenya. Contact us via WhatsApp for international shipping inquiries.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={generateFAQSchema(faqs)} />
      <main>
        <Hero />
        <div className="divider-rose mx-auto max-w-6xl" />
        <ProductGrid />
        <SkinCareConsultation />
      </main>
    </>
  );
}
