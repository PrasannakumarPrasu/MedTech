import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Filter, Edit, AlertTriangle } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

//todo: remove mock functionality
const mockInventory = [
  {
    id: 1,
    name: "Paracetamol 500mg Tablets",
    genericName: "Acetaminophen",
    stock: 450,
    minStock: 100,
    price: 45,
    mrp: 120,
    manufacturer: "Generic Pharma Ltd",
    batch: "PTM2025A",
    expiry: "Dec 2026",
  },
  {
    id: 2,
    name: "Metformin 500mg",
    genericName: "Metformin HCl",
    stock: 85,
    minStock: 100,
    price: 85,
    mrp: 250,
    manufacturer: "MediGen India",
    batch: "MTF2025B",
    expiry: "Jan 2027",
  },
  {
    id: 3,
    name: "Amoxicillin 250mg Capsules",
    genericName: "Amoxicillin",
    stock: 12,
    minStock: 50,
    price: 120,
    mrp: 300,
    manufacturer: "PharmaCare",
    batch: "AMX2025C",
    expiry: "Nov 2026",
  },
  {
    id: 4,
    name: "Vitamin D3 60K IU",
    genericName: "Cholecalciferol",
    stock: 320,
    minStock: 80,
    price: 65,
    mrp: 180,
    manufacturer: "Wellness Labs",
    batch: "VTD2025D",
    expiry: "Mar 2027",
  },
  {
    id: 5,
    name: "Omeprazole 20mg",
    genericName: "Omeprazole",
    stock: 0,
    minStock: 100,
    price: 95,
    mrp: 220,
    manufacturer: "Generic Pharma Ltd",
    batch: "OMP2025E",
    expiry: "Oct 2026",
  },
];

export default function AdminInventory() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const getStockStatus = (stock: number, minStock: number) => {
    if (stock === 0) return { label: "Out of Stock", color: "bg-destructive text-destructive-foreground" };
    if (stock < minStock) return { label: "Low Stock", color: "bg-accent text-accent-foreground" };
    return { label: "In Stock", color: "bg-secondary text-secondary-foreground" };
  };

  const filteredInventory = mockInventory.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.genericName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-card border-b">
        <div className="px-4 py-4">
          <div className="flex items-center gap-4 mb-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLocation('/admin/dashboard')}
              data-testid="button-back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="font-semibold text-lg">Inventory Management</h1>
          </div>

          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => console.log('Filter clicked')}
              data-testid="button-filter"
            >
              <Filter className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="p-4 space-y-3">
          {filteredInventory.map((item) => {
            const status = getStockStatus(item.stock, item.minStock);
            
            return (
              <Card key={item.id} data-testid={`card-inventory-${item.id}`}>
                <div className="p-4">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-4xl">💊</div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm line-clamp-1">{item.name}</h3>
                          <p className="text-xs text-muted-foreground">{item.genericName}</p>
                        </div>
                        <Badge className={status.color}>
                          {status.label}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                        <div>
                          <p className="text-muted-foreground">Stock</p>
                          <p className="font-semibold flex items-center gap-1">
                            {item.stock} units
                            {item.stock < item.minStock && (
                              <AlertTriangle className="h-3 w-3 text-accent-foreground" />
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Batch / Expiry</p>
                          <p className="font-semibold">{item.batch} / {item.expiry}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Price / MRP</p>
                          <p className="font-semibold">₹{item.price} / ₹{item.mrp}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Margin</p>
                          <p className="font-semibold text-secondary">
                            {Math.round(((item.mrp - item.price) / item.mrp) * 100)}%
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => {
                            console.log(`Update stock for ${item.name}`);
                            setLocation(`/admin/update-stock/${item.id}`);
                          }}
                          data-testid={`button-update-stock-${item.id}`}
                        >
                          Update Stock
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => {
                            console.log(`Edit ${item.name}`);
                            setLocation(`/admin/edit-product/${item.id}`);
                          }}
                          data-testid={`button-edit-${item.id}`}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
