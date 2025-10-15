import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

export default function AdminUpdateStock() {
  const [, setLocation] = useLocation();

  //todo: remove mock functionality
  const [product] = useState({
    id: 1,
    name: "Paracetamol 500mg Tablets",
    genericName: "Acetaminophen",
    currentStock: 450,
    minStock: 100,
    price: 45,
    mrp: 120,
  });

  const [quantity, setQuantity] = useState(100);
  const [batchNumber, setBatchNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");

  const handleUpdateStock = () => {
    console.log('Update stock:', { quantity, batchNumber, expiryDate, purchasePrice });
    setLocation('/admin/inventory');
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-card border-b">
        <div className="px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocation('/admin/inventory')}
            data-testid="button-back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">Update Stock</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        <div className="p-4 space-y-6">
          <Card className="p-4">
            <div className="flex gap-4 mb-4">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="text-3xl">💊</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.genericName}</p>
                <div className="flex gap-4 mt-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Current Stock</p>
                    <p className="font-bold">{product.currentStock} units</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Min Stock</p>
                    <p className="font-bold">{product.minStock} units</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-4">Add Stock</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Quantity to Add</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(0, quantity - 10))}
                    data-testid="button-decrease-qty"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="text-center font-semibold text-lg"
                    data-testid="input-quantity"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 10)}
                    data-testid="button-increase-qty"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Batch Number</label>
                <Input
                  placeholder="e.g., PTM2025A"
                  value={batchNumber}
                  onChange={(e) => setBatchNumber(e.target.value)}
                  data-testid="input-batch"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Expiry Date</label>
                <Input
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  data-testid="input-expiry"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Purchase Price per Unit (₹)</label>
                <Input
                  type="number"
                  placeholder="Enter purchase price"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                  data-testid="input-purchase-price"
                />
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">New Total Stock</span>
                    <span className="font-bold">{product.currentStock + quantity} units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Selling Price</span>
                    <span className="font-bold">₹{product.price}</span>
                  </div>
                  {purchasePrice && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Profit Margin</span>
                      <span className="font-bold text-secondary">
                        {Math.round(((product.price - Number(purchasePrice)) / product.price) * 100)}%
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <Button
                className="w-full h-12"
                onClick={handleUpdateStock}
                disabled={!quantity || !batchNumber || !expiryDate || !purchasePrice}
                data-testid="button-update-stock"
              >
                Update Stock
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
