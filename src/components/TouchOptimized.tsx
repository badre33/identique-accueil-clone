
import React from 'react';
import { useMobile } from '@/hooks/useMobile';
import { cn } from '@/lib/utils';

interface TouchOptimizedProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  touchTarget?: 'small' | 'medium' | 'large';
  hapticFeedback?: boolean;
}

export const TouchOptimized = ({ 
  children, 
  className, 
  touchTarget = 'medium',
  hapticFeedback = false,
  onClick,
  ...props 
}: TouchOptimizedProps) => {
  const { isMobile, touchSupport } = useMobile();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (hapticFeedback && touchSupport && 'vibrate' in navigator) {
      navigator.vibrate(50);
    }
    onClick?.(event);
  };

  const touchTargetSizes = {
    small: 'min-h-[36px] min-w-[36px]',
    medium: 'min-h-[44px] min-w-[44px]',
    large: 'min-h-[48px] min-w-[48px]'
  };

  return (
    <div
      className={cn(
        'relative cursor-pointer',
        isMobile && touchSupport && touchTargetSizes[touchTarget],
        isMobile && 'active:scale-95 transition-transform duration-100',
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
};
