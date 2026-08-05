import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="divider-rose mx-auto max-w-6xl" />
      <ProductGrid />
    </main>
  );
}
