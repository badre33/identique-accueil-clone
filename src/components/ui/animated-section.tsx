
import React from 'react';
import { cn } from '@/lib/utils';
import { useAnimationOnScroll } from '@/hooks/useAnimationOnScroll';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInScale' | 'slideInRight';
  delay?: number;
  stagger?: boolean;
}

export const AnimatedSection = ({ 
  children, 
  className, 
  animation = 'fadeInUp',
  delay = 0,
  stagger = false
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useAnimationOnScroll();

  const animationClasses = {
    fadeInUp: 'animate-fadeInUp',
    fadeInScale: 'animate-fadeInScale',
    slideInRight: 'animate-slideInRight'
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        'opacity-0',
        isVisible && animationClasses[animation],
        className
      )}
      style={{
        animationDelay: `${delay}ms`
      }}
    >
      {stagger ? (
        React.Children.map(children, (child, index) => (
          <div 
            key={index}
            className={cn(
              'opacity-0',
              isVisible && animationClasses[animation],
              `stagger-${Math.min(index + 1, 5)}`
            )}
          >
            {child}
          </div>
        ))
      ) : (
        children
      )}
    </div>
  );
};
