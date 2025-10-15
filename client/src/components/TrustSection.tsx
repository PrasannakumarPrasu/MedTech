import { Card } from "@/components/ui/card";
import { Shield, Truck, Clock, BadgeCheck } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Shield,
    title: "100% Genuine",
    description: "All medicines sourced from licensed manufacturers",
  },
  {
    id: 2,
    icon: Truck,
    title: "Free Delivery",
    description: "On orders above ₹500 across India",
  },
  {
    id: 3,
    icon: Clock,
    title: "Same Day Delivery",
    description: "Order before 2 PM for same day delivery",
  },
  {
    id: 4,
    icon: BadgeCheck,
    title: "Quality Assured",
    description: "Temperature controlled storage & handling",
  },
];

export default function TrustSection() {
  return (
    <section className="w-full py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.id} className="p-6" data-testid={`card-feature-${feature.id}`}>
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
