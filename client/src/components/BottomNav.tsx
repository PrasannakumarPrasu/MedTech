import { useLocation } from "wouter";
import { GlassIcons } from "@/components/icons";

export default function BottomNav() {
  const [location, setLocation] = useLocation();

  const navItems = [
    { id: 'home', icon: 'Home', label: 'Home', path: '/' },
    { id: 'upload', icon: 'Upload', label: 'Upload Rx', path: '/upload' },
    { id: 'orders', icon: 'Package', label: 'Orders', path: '/orders' },
    { id: 'account', icon: 'User', label: 'Account', path: '/account' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location === '/';
    return location.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-nav z-50 safe-area-bottom">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const IconComponent = GlassIcons[item.icon as keyof typeof GlassIcons];
          const active = isActive(item.path);
          
          return (
            <button
              key={item.id}
              onClick={() => {
                setLocation(item.path);
                console.log(`Navigate to ${item.id}`);
              }}
              className={`flex flex-col items-center gap-1 flex-1 h-full justify-center transition-all relative ${
                active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
              }`}
              data-testid={`button-nav-${item.id}`}
            >
              {/* Active indicator */}
              {active && (
                <div className="absolute -top-1 w-8 h-1 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full"></div>
              )}
              
              <div className={`transition-all duration-300 ${active ? 'scale-110' : 'scale-100'}`}>
                <IconComponent 
                  variant={active ? "primary" : "neutral"}
                  size="sm"
                  glow={active}
                />
              </div>
              
              <span className={`text-xs font-medium transition-colors ${
                active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
