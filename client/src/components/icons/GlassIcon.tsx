import React from 'react';
import { cn } from '@/lib/utils';

interface GlassIconProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  glow?: boolean;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20'
};

const variantClasses = {
  primary: 'bg-gradient-to-br from-blue-500/20 to-blue-600/30 border-blue-400/30 text-blue-600 dark:from-blue-400/30 dark:to-blue-500/40 dark:border-blue-300/40 dark:text-blue-400',
  secondary: 'bg-gradient-to-br from-green-500/20 to-green-600/30 border-green-400/30 text-green-600 dark:from-green-400/30 dark:to-green-500/40 dark:border-green-300/40 dark:text-green-400',
  accent: 'bg-gradient-to-br from-orange-500/20 to-orange-600/30 border-orange-400/30 text-orange-600 dark:from-orange-400/30 dark:to-orange-500/40 dark:border-orange-300/40 dark:text-orange-400',
  neutral: 'bg-gradient-to-br from-gray-500/20 to-gray-600/30 border-gray-400/30 text-gray-600 dark:from-gray-400/30 dark:to-gray-300/40 dark:border-gray-300/40 dark:text-gray-300'
};

const glowClasses = {
  primary: 'shadow-lg shadow-blue-500/25 dark:shadow-blue-400/30',
  secondary: 'shadow-lg shadow-green-500/25 dark:shadow-green-400/30',
  accent: 'shadow-lg shadow-orange-500/25 dark:shadow-orange-400/30',
  neutral: 'shadow-lg shadow-gray-500/25 dark:shadow-gray-400/30'
};

export function GlassIcon({ 
  children, 
  className, 
  size = 'md', 
  variant = 'primary',
  glow = false 
}: GlassIconProps) {
  return (
    <div className={cn(
      'rounded-2xl backdrop-blur-md border border-opacity-30 flex items-center justify-center',
      'transition-all duration-300 hover:scale-105 hover:shadow-xl',
      'relative overflow-hidden',
      sizeClasses[size],
      variantClasses[variant],
      glow && glowClasses[variant],
      className
    )}>
      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60 dark:from-white/10 dark:opacity-40" />
      
      {/* Icon content */}
      <div className="relative z-10 flex items-center justify-center">
        {children}
      </div>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 dark:ring-white/5" />
    </div>
  );
}