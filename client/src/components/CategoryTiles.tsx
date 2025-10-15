import { Pill, Heart, Thermometer, Stethoscope, Baby, Glasses } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  { id: 1, name: "Tablets", icon: Pill, color: "text-primary" },
  { id: 2, name: "Wellness", icon: Heart, color: "text-secondary" },
  { id: 3, name: "Fever & Pain", icon: Thermometer, color: "text-accent-foreground" },
  { id: 4, name: "Diabetes", icon: Stethoscope, color: "text-primary" },
  { id: 5, name: "Baby Care", icon: Baby, color: "text-secondary" },
  { id: 6, name: "Eye Care", icon: Glasses, color: "text-accent-foreground" },
];

export default function CategoryTiles() {
  return (
    <section className="w-full py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-6">Shop by Category</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="p-4 hover-elevate active-elevate-2 cursor-pointer transition-all"
              onClick={() => console.log(`Category ${category.name} clicked`)}
              data-testid={`card-category-${category.id}`}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <category.icon className={`h-8 w-8 ${category.color}`} />
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
