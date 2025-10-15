import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import CategoryTiles from "@/components/CategoryTiles";
import ProductGrid from "@/components/ProductGrid";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      <main className="max-w-md mx-auto">
        <SearchBar />
        <Hero />
        <QuickActions />
        <CategoryTiles />
        <ProductGrid />
      </main>
      <BottomNav />
    </div>
  );
}
