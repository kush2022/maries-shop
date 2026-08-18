import type { Metadata } from "next";
import SkinScan from "@/components/SkinScan";

export const metadata: Metadata = {
  title: "AI Skin Scan | Marie's Botanicals",
  description:
    "Upload a selfie and get a personalized skincare starting point. Marie's AI skin scan looks at texture, redness, oiliness and concerns to suggest products and a simple routine.",
};

export default function SkinAnalysisPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <SkinScan />
    </main>
  );
}
