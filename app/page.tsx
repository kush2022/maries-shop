import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import SkinCareConsultation from "@/components/SkinCareConsultation";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="divider-rose mx-auto max-w-6xl" />
      <ProductGrid />
      <SkinCareConsultation />
    </main>
  );
}
