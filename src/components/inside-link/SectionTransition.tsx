
import React from 'react';

interface SectionTransitionProps {
  children: React.ReactNode;
  variant?: 'fade' | 'slide' | 'scale';
  className?: string;
}

export const SectionTransition = ({ 
  children, 
  variant = 'fade',
  className = '' 
}: SectionTransitionProps) => {
  const getTransitionClass = () => {
    switch (variant) {
      case 'slide':
        return 'transform transition-all duration-1000 ease-out hover:translate-y-2';
      case 'scale':
        return 'transform transition-all duration-700 ease-out hover:scale-[1.01]';
      case 'fade':
      default:
        return 'transition-all duration-800 ease-out';
    }
  };

  return (
    <div className={`${getTransitionClass()} ${className}`}>
      {children}
      
      {/* Subtle border animation */}
      <div className="absolute inset-0 border border-transparent hover:border-gray-100/50 rounded-inherit transition-colors duration-500 pointer-events-none" />
    </div>
  );
};
