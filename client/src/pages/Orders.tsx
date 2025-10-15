import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, Clock, CheckCircle, XCircle } from "lucide-react";
import { useLocation } from "wouter";
import BottomNav from "@/components/BottomNav";

//todo: remove mock functionality
const mockOrders = [
  {
    id: "ORD001",
    date: "15 Jan 2025",
    status: "delivered",
    items: 3,
    total: 245,
    medicines: ["Paracetamol 500mg", "Vitamin D3", "Omeprazole 20mg"],
  },
  {
    id: "ORD002",
    date: "12 Jan 2025",
    status: "processing",
    items: 2,
    total: 205,
    medicines: ["Metformin 500mg", "Atorvastatin 10mg"],
  },
  {
    id: "ORD003",
    date: "08 Jan 2025",
    status: "pending",
    items: 1,
    total: 120,
    medicines: ["Amoxicillin 250mg"],
  },
  {
    id: "ORD004",
    date: "05 Jan 2025",
    status: "cancelled",
    items: 2,
    total: 180,
    medicines: ["Azithromycin 500mg", "Cetirizine 10mg"],
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'delivered':
      return <CheckCircle className="h-4 w-4" />;
    case 'processing':
      return <Clock className="h-4 w-4" />;
    case 'pending':
      return <Package className="h-4 w-4" />;
    case 'cancelled':
      return <XCircle className="h-4 w-4" />;
    default:
      return <Package className="h-4 w-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'delivered':
      return 'bg-secondary text-secondary-foreground';
    case 'processing':
      return 'bg-primary text-primary-foreground';
    case 'pending':
      return 'bg-accent text-accent-foreground';
    case 'cancelled':
      return 'bg-destructive text-destructive-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export default function Orders() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-50 bg-card border-b">
        <div className="px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocation('/account')}
            data-testid="button-back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">My Orders</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        <div className="p-4 space-y-3">
          {mockOrders.map((order) => (
            <Card
              key={order.id}
              className="hover-elevate active-elevate-2 cursor-pointer"
              onClick={() => {
                console.log(`View order ${order.id}`);
                setLocation(`/order/${order.id}`);
              }}
              data-testid={`card-order-${order.id}`}
            >
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-base" data-testid={`text-order-id-${order.id}`}>
                      {order.id}
                    </h3>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                  <Badge className={`${getStatusColor(order.status)} gap-1`}>
                    {getStatusIcon(order.status)}
                    {order.status}
                  </Badge>
                </div>

                <div className="bg-muted/50 rounded-lg p-3 mb-3">
                  <p className="text-sm font-medium mb-1">
                    {order.items} {order.items === 1 ? 'item' : 'items'}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {order.medicines.join(', ')}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Total Amount</p>
                    <p className="font-bold text-lg" data-testid={`text-order-total-${order.id}`}>
                      ₹{order.total}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log(`Reorder ${order.id}`);
                    }}
                    data-testid={`button-reorder-${order.id}`}
                  >
                    Reorder
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {mockOrders.length === 0 && (
          <div className="text-center py-16">
            <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="font-semibold text-lg mb-2">No Orders Yet</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Start shopping to see your orders here
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
