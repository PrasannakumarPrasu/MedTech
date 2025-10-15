import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

export default function AdminEditProduct() {
  const [, setLocation] = useLocation();

  //todo: remove mock functionality
  const [productData, setProductData] = useState({
    name: "Paracetamol 500mg Tablets",
    genericName: "Acetaminophen",
    manufacturer: "Generic Pharma Ltd",
    description: "Pain relief and fever reducer",
    price: "45",
    mrp: "120",
    minStock: "100",
    prescriptionRequired: false,
    category: "Pain Relief",
  });

  const handleSave = () => {
    console.log('Update product:', productData);
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
          <h1 className="font-semibold text-lg">Edit Product</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        <div className="p-4 space-y-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Product Information</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Product Name</label>
                <Input
                  value={productData.name}
                  onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                  data-testid="input-product-name"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Generic Name</label>
                <Input
                  value={productData.genericName}
                  onChange={(e) => setProductData({ ...productData, genericName: e.target.value })}
                  data-testid="input-generic-name"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Manufacturer</label>
                <Input
                  value={productData.manufacturer}
                  onChange={(e) => setProductData({ ...productData, manufacturer: e.target.value })}
                  data-testid="input-manufacturer"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Category</label>
                <Input
                  value={productData.category}
                  onChange={(e) => setProductData({ ...productData, category: e.target.value })}
                  data-testid="input-category"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Description</label>
                <Input
                  value={productData.description}
                  onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                  data-testid="input-description"
                />
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-4">Pricing & Stock</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Selling Price (₹)</label>
                  <Input
                    type="number"
                    value={productData.price}
                    onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                    data-testid="input-price"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">MRP (₹)</label>
                  <Input
                    type="number"
                    value={productData.mrp}
                    onChange={(e) => setProductData({ ...productData, mrp: e.target.value })}
                    data-testid="input-mrp"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Minimum Stock Level</label>
                <Input
                  type="number"
                  value={productData.minStock}
                  onChange={(e) => setProductData({ ...productData, minStock: e.target.value })}
                  data-testid="input-min-stock"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Prescription Required</p>
                  <p className="text-xs text-muted-foreground">Customer needs Rx to order</p>
                </div>
                <Button
                  variant={productData.prescriptionRequired ? "default" : "outline"}
                  size="sm"
                  onClick={() => setProductData({ 
                    ...productData, 
                    prescriptionRequired: !productData.prescriptionRequired 
                  })}
                  data-testid="button-toggle-prescription"
                >
                  {productData.prescriptionRequired ? "Yes" : "No"}
                </Button>
              </div>

              {productData.price && productData.mrp && (
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Discount</span>
                    <span className="font-bold text-secondary">
                      {Math.round(((Number(productData.mrp) - Number(productData.price)) / Number(productData.mrp)) * 100)}%
                    </span>
                  </div>
                </div>
              )}
            </div>
          </Card>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setLocation('/admin/inventory')}
              data-testid="button-cancel"
            >
              Cancel
            </Button>
            <Button
              className="flex-1"
              onClick={handleSave}
              data-testid="button-save"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
