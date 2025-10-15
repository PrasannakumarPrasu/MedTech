import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ChevronRight, User, MapPin, Heart, Bell, HelpCircle, LogOut, Package, FileText } from "lucide-react";
import { useLocation } from "wouter";
import BottomNav from "@/components/BottomNav";

export default function Account() {
  const [, setLocation] = useLocation();

  const menuItems = [
    { id: 1, icon: Package, label: "My Orders", description: "Track and manage orders", path: "/orders" },
    { id: 2, icon: FileText, label: "Prescriptions", description: "View uploaded prescriptions", path: "/prescriptions" },
    { id: 3, icon: MapPin, label: "Delivery Address", description: "Manage saved addresses", path: "/addresses" },
    { id: 4, icon: Heart, label: "Saved Medicines", description: "Your wishlist items", path: "/wishlist" },
    { id: 5, icon: Bell, label: "Notifications", description: "Order updates & offers", path: "/notifications" },
    { id: 6, icon: HelpCircle, label: "Help & Support", description: "Contact us", path: "/support" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
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
          <h1 className="font-semibold text-lg">My Account</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        <div className="p-4">
          <Card className="p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-xl" data-testid="text-user-name">Rajesh Kumar</h2>
                <p className="text-sm text-muted-foreground" data-testid="text-user-phone">+91 98765 43210</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => console.log('Edit profile')}
                data-testid="button-edit-profile"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </Card>

          <div className="space-y-2">
            {menuItems.map((item) => (
              <Card
                key={item.id}
                className="hover-elevate active-elevate-2 cursor-pointer"
                onClick={() => {
                  console.log(`Navigate to ${item.label}`);
                  if (item.path) setLocation(item.path);
                }}
                data-testid={`card-menu-${item.id}`}
              >
                <div className="p-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{item.label}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            className="w-full mt-6 h-12 text-destructive border-destructive/20 hover:bg-destructive/10"
            onClick={() => {
              console.log('Logout');
              setLocation('/login');
            }}
            data-testid="button-logout"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </Button>

          <p className="text-xs text-center text-muted-foreground mt-6">
            Version 1.0.0 • License No: DL-XXX-YYYY
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
