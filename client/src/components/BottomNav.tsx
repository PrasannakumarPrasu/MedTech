import { Home, ShoppingBag, FileText, User } from "lucide-react";
import { useState } from "react";

export default function BottomNav() {
  const [active, setActive] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'products', icon: ShoppingBag, label: 'Products' },
    { id: 'orders', icon: FileText, label: 'Orders' },
    { id: 'account', icon: User, label: 'Account' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActive(item.id);
              console.log(`Navigate to ${item.id}`);
            }}
            className={`flex flex-col items-center gap-1 flex-1 h-full justify-center transition-colors ${
              active === item.id ? 'text-primary' : 'text-muted-foreground'
            }`}
            data-testid={`button-nav-${item.id}`}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
