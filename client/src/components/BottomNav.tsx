import { Home, Upload, Package, User } from "lucide-react";
import { useLocation } from "wouter";

export default function BottomNav() {
  const [location, setLocation] = useLocation();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'upload', icon: Upload, label: 'Upload Rx', path: '/upload' },
    { id: 'orders', icon: Package, label: 'Orders', path: '/orders' },
    { id: 'account', icon: User, label: 'Account', path: '/account' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location === '/';
    return location.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t z-50 safe-area-bottom">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setLocation(item.path);
              console.log(`Navigate to ${item.id}`);
            }}
            className={`flex flex-col items-center gap-1 flex-1 h-full justify-center transition-all ${
              isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
            }`}
            data-testid={`button-nav-${item.id}`}
          >
            <item.icon className={`h-6 w-6 ${isActive(item.path) ? 'scale-110' : ''} transition-transform`} />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
