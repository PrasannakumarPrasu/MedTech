import { Home, Upload, Package, User } from "lucide-react";
import { useState } from "react";

export default function BottomNav() {
  const [active, setActive] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'upload', icon: Upload, label: 'Upload Rx' },
    { id: 'orders', icon: Package, label: 'Orders' },
    { id: 'account', icon: User, label: 'Account' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t z-50 safe-area-bottom">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActive(item.id);
              console.log(`Navigate to ${item.id}`);
            }}
            className={`flex flex-col items-center gap-1 flex-1 h-full justify-center transition-all ${
              active === item.id ? 'text-primary' : 'text-muted-foreground'
            }`}
            data-testid={`button-nav-${item.id}`}
          >
            <item.icon className={`h-6 w-6 ${active === item.id ? 'scale-110' : ''} transition-transform`} />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
