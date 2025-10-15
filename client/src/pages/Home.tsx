import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import CategoryTiles from "@/components/CategoryTiles";
import ProductGrid from "@/components/ProductGrid";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pb-20">
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
