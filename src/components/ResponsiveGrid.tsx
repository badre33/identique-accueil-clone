
import React from 'react';
import { cn } from '@/lib/utils';
import { useMobile } from '@/hooks/useMobile';

interface ResponsiveGridProps {
  children: React.ReactNode;
  cols?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const ResponsiveGrid = ({ 
  children, 
  cols = { xs: 1, sm: 2, md: 3, lg: 4 },
  gap = 'md',
  className 
}: ResponsiveGridProps) => {
  const { screenSize } = useMobile();

  const gapClasses = {
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  };

  const getGridCols = () => {
    switch (screenSize) {
      case 'xs': return `grid-cols-${cols.xs || 1}`;
      case 'sm': return `sm:grid-cols-${cols.sm || 2}`;
      case 'md': return `md:grid-cols-${cols.md || 3}`;
      case 'lg': return `lg:grid-cols-${cols.lg || 4}`;
      case 'xl':
      case '2xl': return `xl:grid-cols-${cols.xl || cols.lg || 4}`;
      default: return 'grid-cols-1';
    }
  };

  return (
    <div className={cn(
      'grid w-full',
      `grid-cols-${cols.xs || 1}`,
      cols.sm && `sm:grid-cols-${cols.sm}`,
      cols.md && `md:grid-cols-${cols.md}`,
      cols.lg && `lg:grid-cols-${cols.lg}`,
      cols.xl && `xl:grid-cols-${cols.xl}`,
      gapClasses[gap],
      className
    )}>
      {children}
    </div>
  );
};
