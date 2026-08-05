import type { Metadata } from "next";
import ShopBrowser from "@/components/ShopBrowser";

export const metadata: Metadata = {
  title: "Shop | Marie's Botanicals",
  description:
    "Browse Marie's full range of small-batch, natural botanical skincare — rose water toners, clay masks and body oils.",
};

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <ShopBrowser />
    </main>
  );
}
