import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Phone, Mail, Download } from "lucide-react";
import { useLocation } from "wouter";
import BottomNav from "@/components/BottomNav";

export default function OrderDetail() {
  const [, setLocation] = useLocation();

  //todo: remove mock functionality
  const order = {
    id: "ORD001",
    date: "15 Jan 2025, 10:30 AM",
    status: "delivered",
    deliveryDate: "16 Jan 2025",
    items: [
      { id: 1, name: "Paracetamol 500mg Tablets", genericName: "Acetaminophen", qty: 2, price: 45 },
      { id: 2, name: "Vitamin D3 60K IU", genericName: "Cholecalciferol", qty: 1, price: 65 },
      { id: 3, name: "Omeprazole 20mg", genericName: "Omeprazole", qty: 3, price: 95 },
    ],
    subtotal: 245,
    delivery: 0,
    total: 245,
    address: {
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      address: "123, MG Road, Mumbai, Maharashtra - 400001"
    },
    timeline: [
      { status: "Order Placed", date: "15 Jan, 10:30 AM", completed: true },
      { status: "Confirmed", date: "15 Jan, 11:00 AM", completed: true },
      { status: "Packed", date: "15 Jan, 2:00 PM", completed: true },
      { status: "Shipped", date: "15 Jan, 6:00 PM", completed: true },
      { status: "Delivered", date: "16 Jan, 11:00 AM", completed: true },
    ]
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-50 bg-card border-b">
        <div className="px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocation('/orders')}
            data-testid="button-back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Order Details</h1>
            <p className="text-xs text-muted-foreground">{order.id}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => console.log('Download invoice')}
            data-testid="button-download-invoice"
          >
            <Download className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        <div className="p-4 space-y-4">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Order Date</p>
                <p className="font-semibold">{order.date}</p>
              </div>
              <Badge className="bg-secondary text-secondary-foreground">
                {order.status}
              </Badge>
            </div>

            <div className="space-y-3">
              {order.timeline.map((step, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`h-4 w-4 rounded-full border-2 ${
                      step.completed ? 'bg-primary border-primary' : 'bg-background border-muted-foreground'
                    }`} />
                    {index < order.timeline.length - 1 && (
                      <div className={`w-0.5 h-8 ${
                        step.completed ? 'bg-primary' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className={`font-medium text-sm ${
                      step.completed ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.status}
                    </p>
                    <p className="text-xs text-muted-foreground">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3">Order Items</h3>
            <div className="space-y-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-3" data-testid={`item-${item.id}`}>
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-3xl">💊</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.genericName}</p>
                    <p className="text-sm font-semibold mt-1">₹{item.price} × {item.qty}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t mt-4 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹{order.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery</span>
                <span className="text-secondary">FREE</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Total</span>
                <span data-testid="text-order-total">₹{order.total}</span>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3">Delivery Address</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium">{order.address.name}</p>
                  <p className="text-sm text-muted-foreground">{order.address.address}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-sm">{order.address.phone}</p>
              </div>
            </div>
          </Card>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => console.log('Get help')}
              data-testid="button-get-help"
            >
              Get Help
            </Button>
            <Button
              className="flex-1"
              onClick={() => console.log('Reorder')}
              data-testid="button-reorder"
            >
              Reorder
            </Button>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
