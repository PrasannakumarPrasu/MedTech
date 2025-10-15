import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { GlassIcons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();

  const themeOptions = [
    { value: 'light' as const, label: 'Light', icon: 'Sun' },
    { value: 'dark' as const, label: 'Dark', icon: 'Moon' },
    { value: 'system' as const, label: 'System', icon: 'Monitor' },
  ];

  const currentIcon = theme === 'system' 
    ? (actualTheme === 'dark' ? 'Moon' : 'Sun')
    : (theme === 'dark' ? 'Moon' : 'Sun');

  const CurrentIconComponent = GlassIcons[currentIcon as keyof typeof GlassIcons];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 rounded-full"
        >
          <CurrentIconComponent 
            variant="neutral" 
            size="sm" 
            className="!bg-transparent !border-none !shadow-none"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="backdrop-blur-lg bg-white/90 dark:bg-black/90 border border-white/20 dark:border-white/10 shadow-xl"
      >
        {themeOptions.map((option) => {
          const IconComponent = GlassIcons[option.icon as keyof typeof GlassIcons];
          return (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setTheme(option.value)}
              className={`flex items-center gap-3 cursor-pointer hover:bg-white/60 dark:hover:bg-white/10 transition-colors ${
                theme === option.value ? 'bg-blue-50 dark:bg-blue-900/20' : ''
              }`}
            >
              <IconComponent 
                variant={theme === option.value ? "primary" : "neutral"} 
                size="sm"
                className="!bg-transparent !border-none !shadow-none"
              />
              <span className="text-sm">{option.label}</span>
              {theme === option.value && (
                <GlassIcons.Check 
                  variant="primary" 
                  size="sm"
                  className="!bg-transparent !border-none !shadow-none ml-auto"
                />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}