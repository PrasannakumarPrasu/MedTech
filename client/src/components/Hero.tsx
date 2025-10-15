import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Affordable Generic Medicines, Delivered
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Save up to 80% on branded medicines. Licensed pharmacy with verified quality.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" data-testid="button-shop-now" onClick={() => console.log('Shop now clicked')}>
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-sm"
                data-testid="button-upload-prescription"
                onClick={() => console.log('Upload prescription clicked')}
              >
                Upload Prescription
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Licensed Pharmacy</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">1Lac+ Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Same Day Delivery</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center text-primary-foreground">
                <div className="text-center space-y-4 p-8">
                  <div className="text-6xl font-bold">80%</div>
                  <div className="text-xl font-medium">Save on Medicines</div>
                  <Badge variant="secondary" className="text-lg py-2 px-4">Generic Quality</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
