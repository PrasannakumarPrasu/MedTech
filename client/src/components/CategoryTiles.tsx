import { Pill, Heart, Thermometer, Stethoscope, Baby, Glasses, Activity, Droplet } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  { id: 1, name: "Fever & Pain", icon: Thermometer, color: "bg-primary/10 text-primary" },
  { id: 2, name: "Diabetes", icon: Droplet, color: "bg-secondary/10 text-secondary" },
  { id: 3, name: "Heart Care", icon: Activity, color: "bg-destructive/10 text-destructive" },
  { id: 4, name: "Vitamins", icon: Pill, color: "bg-accent/10 text-accent-foreground" },
  { id: 5, name: "Wellness", icon: Heart, color: "bg-primary/10 text-primary" },
  { id: 6, name: "Baby Care", icon: Baby, color: "bg-secondary/10 text-secondary" },
  { id: 7, name: "Eye Care", icon: Glasses, color: "bg-accent/10 text-accent-foreground" },
  { id: 8, name: "Chronic", icon: Stethoscope, color: "bg-primary/10 text-primary" },
];

export default function CategoryTiles() {
  return (
    <div className="px-4 py-4 bg-background">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">Categories</h2>
        <button className="text-sm text-primary font-medium" data-testid="link-view-all-categories">
          View All
        </button>
      </div>
      
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="flex-shrink-0 w-24 hover-elevate active-elevate-2 cursor-pointer transition-all snap-start"
            onClick={() => console.log(`Category ${category.name} clicked`)}
            data-testid={`card-category-${category.id}`}
          >
            <div className="p-3 flex flex-col items-center gap-2 text-center">
              <div className={`h-12 w-12 rounded-full ${category.color} flex items-center justify-center`}>
                <category.icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium leading-tight">{category.name}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
