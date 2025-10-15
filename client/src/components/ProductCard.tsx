import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

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
      <CardContent className="p-0">
        <div className="aspect-square bg-muted flex items-center justify-center relative">
          <div className="text-6xl">💊</div>
          {discountPercent > 0 && (
            <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
              {discountPercent}% OFF
            </Badge>
          )}
          {prescriptionRequired && (
            <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground gap-1">
              <FileText className="h-3 w-3" />
              Rx
            </Badge>
          )}
        </div>
      </CardContent>
      <CardContent className="p-4 space-y-2">
        <div>
          <h3 className="font-semibold text-base line-clamp-1" data-testid={`text-product-name-${id}`}>
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{genericName}</p>
          <p className="text-xs text-muted-foreground">{manufacturer}</p>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold" data-testid={`text-price-${id}`}>₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          variant="secondary"
          onClick={(e) => {
            e.stopPropagation();
            console.log(`Add to cart: ${name}`);
          }}
          data-testid={`button-add-to-cart-${id}`}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
