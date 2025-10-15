import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";
import BottomNav from "@/components/BottomNav";

export default function Cart() {
  const [, setLocation] = useLocation();

  //todo: remove mock functionality
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Paracetamol 500mg Tablets",
      genericName: "Acetaminophen",
      price: 45,
      originalPrice: 120,
      quantity: 2,
      prescriptionRequired: false,
    },
    {
      id: 2,
      name: "Metformin 500mg",
      genericName: "Metformin HCl",
      price: 85,
      originalPrice: 250,
      quantity: 1,
      prescriptionRequired: true,
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const savings = cartItems.reduce((sum, item) => 
    sum + ((item.originalPrice || item.price) - item.price) * item.quantity, 0
  );
  const delivery = subtotal >= 500 ? 0 : 40;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen bg-background pb-32">
      <header className="sticky top-0 z-50 bg-card border-b">
        <div className="px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocation('/')}
            data-testid="button-back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">My Cart</h1>
          <Badge className="ml-auto" data-testid="badge-item-count">
            {cartItems.length} items
          </Badge>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        {cartItems.length > 0 ? (
          <>
            <div className="p-4 space-y-3">
              {cartItems.map((item) => (
                <Card key={item.id} data-testid={`cart-item-${item.id}`}>
                  <div className="p-4">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-4xl">💊</div>
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-sm line-clamp-1">{item.name}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 flex-shrink-0"
                            onClick={() => removeItem(item.id)}
                            data-testid={`button-remove-${item.id}`}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{item.genericName}</p>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="font-bold text-lg">₹{item.price}</span>
                              {item.originalPrice && (
                                <span className="text-xs text-muted-foreground line-through">
                                  ₹{item.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => updateQuantity(item.id, -1)}
                              data-testid={`button-decrease-${item.id}`}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="font-semibold w-8 text-center" data-testid={`text-quantity-${item.id}`}>
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => updateQuantity(item.id, 1)}
                              data-testid={`button-increase-${item.id}`}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="fixed bottom-16 left-0 right-0 bg-card border-t p-4 z-40">
              <div className="max-w-md mx-auto space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  {savings > 0 && (
                    <div className="flex justify-between text-secondary">
                      <span>Savings</span>
                      <span>- ₹{savings}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className={delivery === 0 ? "text-secondary" : ""}>
                      {delivery === 0 ? "FREE" : `₹${delivery}`}
                    </span>
                  </div>
                  {subtotal < 500 && delivery > 0 && (
                    <p className="text-xs text-accent-foreground">
                      Add ₹{500 - subtotal} more for free delivery
                    </p>
                  )}
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span data-testid="text-cart-total">₹{total}</span>
                  </div>
                </div>

                <Button
                  className="w-full h-12 text-base"
                  onClick={() => {
                    console.log('Proceed to checkout');
                    setLocation('/checkout');
                  }}
                  data-testid="button-checkout"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16 px-4">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="font-semibold text-lg mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Add medicines to get started
            </p>
            <Button onClick={() => setLocation('/')} data-testid="button-start-shopping">
              Start Shopping
            </Button>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
