import { ShoppingCart, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Header() {
  const [cartCount, setCartCount] = useState(2); //todo: remove mock functionality

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              data-testid="button-menu"
              onClick={() => console.log('Menu clicked')}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="font-bold text-lg">Generic Medicines</h1>
              <p className="text-xs text-primary-foreground/80">Save upto 80%</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              data-testid="button-notifications"
              onClick={() => console.log('Notifications clicked')}
            >
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-primary-foreground hover:bg-primary-foreground/10"
              data-testid="button-cart"
              onClick={() => console.log('Cart clicked')}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-secondary text-secondary-foreground"
                  data-testid="badge-cart-count"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
