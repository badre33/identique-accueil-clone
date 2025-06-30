
import React from 'react';
import { cn } from '@/lib/utils';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'featured' | 'glass';
  interactive?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const EnhancedCard = ({ 
  children, 
  className, 
  variant = 'default',
  interactive = true,
  padding = 'md'
}: EnhancedCardProps) => {
  const baseClasses = 'card transition-smooth';
  
  const variantClasses = {
    default: '',
    featured: 'card-featured',
    glass: 'bg-white/80 backdrop-blur-sm border-white/20'
  };
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={cn(
      baseClasses,
      variantClasses[variant],
      paddingClasses[padding],
      interactive && 'interactive',
      className
    )}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("mb-4", className)}>
    {children}
  </div>
);

export const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("space-y-4", className)}>
    {children}
  </div>
);

export const CardFooter = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("mt-6 pt-4 border-t border-neutral-200", className)}>
    {children}
  </div>
);
