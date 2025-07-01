
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
  touchOptimized?: boolean;
}

export const ResponsiveGrid = ({ 
  children, 
  cols = { xs: 1, sm: 2, md: 3, lg: 4 },
  gap = 'md',
  className,
  touchOptimized = false
}: ResponsiveGridProps) => {
  const { isMobile, screenSize } = useMobile();

  const gapClasses = {
    xs: 'gap-2',
    sm: 'gap-4',
    md: isMobile ? 'gap-4' : 'gap-6',
    lg: isMobile ? 'gap-6' : 'gap-8',
    xl: isMobile ? 'gap-8' : 'gap-12'
  };

  // Enhanced mobile spacing
  const mobileSpacing = touchOptimized && isMobile ? 'p-4' : '';

  return (
    <div className={cn(
      'grid w-full',
      `grid-cols-${cols.xs || 1}`,
      cols.sm && `sm:grid-cols-${cols.sm}`,
      cols.md && `md:grid-cols-${cols.md}`,
      cols.lg && `lg:grid-cols-${cols.lg}`,
      cols.xl && `xl:grid-cols-${cols.xl}`,
      gapClasses[gap],
      mobileSpacing,
      className
    )}>
      {children}
    </div>
  );
};
