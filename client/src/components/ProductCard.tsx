import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Plus } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  genericName: string;
  price: number;
  originalPrice?: number;
  manufacturer: string;
  prescriptionRequired: boolean;
  imageUrl?: string;
}

export default function ProductCard({
  id,
  name,
  genericName,
  price,
  originalPrice,
  manufacturer,
  prescriptionRequired,
}: ProductCardProps) {
  const discountPercent = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Card
      className="hover-elevate active-elevate-2 cursor-pointer transition-all overflow-hidden"
      onClick={() => console.log(`Product ${id} clicked`)}
      data-testid={`card-product-${id}`}
    >
      <div className="p-4">
        <div className="flex gap-4">
          <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 relative">
            <div className="text-5xl">💊</div>
            {prescriptionRequired && (
              <Badge className="absolute -top-1 -right-1 bg-accent text-accent-foreground gap-1 h-6 w-6 p-0 flex items-center justify-center">
                <FileText className="h-3 w-3" />
              </Badge>
            )}
          </div>
          
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-base line-clamp-2 mb-1" data-testid={`text-product-name-${id}`}>
                {name}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-1">{genericName}</p>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold" data-testid={`text-price-${id}`}>₹{price}</span>
                  {originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">₹{originalPrice}</span>
                  )}
                </div>
                {discountPercent > 0 && (
                  <p className="text-xs text-secondary font-semibold">{discountPercent}% off</p>
                )}
              </div>
              
              <Button
                size="icon"
                className="rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(`Add to cart: ${name}`);
                }}
                data-testid={`button-add-to-cart-${id}`}
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
