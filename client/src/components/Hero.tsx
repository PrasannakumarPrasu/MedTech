import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Truck, Clock } from "lucide-react";

export default function Hero() {
  return (
    <div className="px-4 pb-4">
      <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground p-6 overflow-hidden relative">
        <div className="relative z-10">
          <Badge className="bg-secondary text-secondary-foreground mb-3">
            Save upto 80%
          </Badge>
          <h2 className="font-bold text-2xl mb-2">
            Buy Generic Medicines
          </h2>
          <p className="text-primary-foreground/90 text-sm mb-4">
            Same quality, lower price. Verified & licensed pharmacy.
          </p>
          
          <div className="flex flex-wrap gap-3 text-sm">
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4" />
              <span>100% Genuine</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="h-4 w-4" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>Same Day</span>
            </div>
          </div>
        </div>
        
        <div className="absolute -right-8 -bottom-8 text-9xl opacity-10">💊</div>
      </Card>
    </div>
  );
}
