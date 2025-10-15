import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Package, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { useLocation } from "wouter";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();

  //todo: remove mock functionality
  const stats = [
    { id: 1, label: "Total Products", value: "245", icon: Package, trend: "+12", color: "text-primary" },
    { id: 2, label: "Low Stock Items", value: "18", icon: AlertTriangle, trend: "-5", color: "text-accent-foreground" },
    { id: 3, label: "Out of Stock", value: "7", icon: TrendingDown, trend: "+2", color: "text-destructive" },
    { id: 4, label: "Monthly Revenue", value: "₹2.4L", icon: TrendingUp, trend: "+24%", color: "text-secondary" },
  ];

  const quickActions = [
    { id: 1, label: "Inventory", description: "Manage stock & pricing", path: "/admin/inventory", color: "bg-primary/10 text-primary" },
    { id: 2, label: "Orders", description: "View distributor orders", path: "/admin/orders", color: "bg-secondary/10 text-secondary" },
    { id: 3, label: "Add Product", description: "Add new medicine", path: "/admin/add-product", color: "bg-accent/10 text-accent-foreground" },
    { id: 4, label: "Reports", description: "Sales & analytics", path: "/admin/reports", color: "bg-primary/10 text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setLocation('/')}
              data-testid="button-back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="font-bold text-lg">Admin Dashboard</h1>
              <p className="text-xs text-primary-foreground/80">Distributor Panel</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="p-4 space-y-6">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <Card key={stat.id} className="p-4" data-testid={`card-stat-${stat.id}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className={`h-10 w-10 rounded-full bg-muted flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    stat.trend.startsWith('+') ? 'bg-secondary/10 text-secondary' : 'bg-destructive/10 text-destructive'
                  }`}>
                    {stat.trend}
                  </span>
                </div>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-3">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => (
                <Card
                  key={action.id}
                  className={`p-4 hover-elevate active-elevate-2 cursor-pointer ${action.color}`}
                  onClick={() => {
                    console.log(`Navigate to ${action.label}`);
                    setLocation(action.path);
                  }}
                  data-testid={`card-action-${action.id}`}
                >
                  <h3 className="font-semibold mb-1">{action.label}</h3>
                  <p className="text-xs opacity-80">{action.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
