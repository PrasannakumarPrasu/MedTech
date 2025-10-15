import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useLocation } from "wouter";
import { GlassIcons } from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  const [, setLocation] = useLocation();
  const [cartCount, setCartCount] = useState(2); //todo: remove mock functionality

  return (
    <header className="sticky top-0 z-50 w-full glass-header text-white dark:text-gray-100 shadow-lg">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-white/90 hover:bg-white/10 dark:hover:bg-white/5 backdrop-blur-sm"
              data-testid="button-menu"
              onClick={() => console.log('Menu clicked')}
            >
              <GlassIcons.Menu variant="neutral" size="sm" />
            </Button>
            <div>
              <h1 className="font-bold text-lg">Generic Medicines</h1>
              <p className="text-xs text-white/80 dark:text-gray-300">Save upto 80%</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-white/90 hover:bg-white/10 dark:hover:bg-white/5 backdrop-blur-sm rounded-full"
              data-testid="button-notifications"
              onClick={() => setLocation('/notifications')}
            >
              <GlassIcons.Bell variant="neutral" size="sm" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white/90 hover:bg-white/10 dark:hover:bg-white/5 backdrop-blur-sm rounded-full"
              data-testid="button-cart"
              onClick={() => setLocation('/cart')}
            >
              <GlassIcons.ShoppingCart variant="neutral" size="sm" />
              {cartCount > 0 && (
                <Badge
                  className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-orange-500 to-orange-600 text-white border-2 border-white/20 backdrop-blur-sm"
                  data-testid="badge-cart-count"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 dark:from-white/5 dark:to-transparent pointer-events-none"></div>
    </header>
  );
}
