import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryTiles from "@/components/CategoryTiles";
import ProductGrid from "@/components/ProductGrid";
import TrustSection from "@/components/TrustSection";
import PrescriptionUpload from "@/components/PrescriptionUpload";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CategoryTiles />
        <ProductGrid />
        <TrustSection />
        <PrescriptionUpload />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
