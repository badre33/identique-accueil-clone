
import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const HeroHeading = ({ children, className, as: Component = 'h1' }: TypographyProps) => (
  <Component className={cn("heading-hero", className)}>
    {children}
  </Component>
);

export const SectionHeading = ({ children, className, as: Component = 'h2' }: TypographyProps) => (
  <Component className={cn("heading-section", className)}>
    {children}
  </Component>
);

export const CardHeading = ({ children, className, as: Component = 'h3' }: TypographyProps) => (
  <Component className={cn("heading-card", className)}>
    {children}
  </Component>
);

export const BodyTextLarge = ({ children, className, as: Component = 'p' }: TypographyProps) => (
  <Component className={cn("text-body-lg", className)}>
    {children}
  </Component>
);

export const BodyText = ({ children, className, as: Component = 'p' }: TypographyProps) => (
  <Component className={cn("text-body", className)}>
    {children}
  </Component>
);

export const SmallText = ({ children, className, as: Component = 'span' }: TypographyProps) => (
  <Component className={cn("text-small", className)}>
    {children}
  </Component>
);
