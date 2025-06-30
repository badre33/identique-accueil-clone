
import React, { useState } from 'react';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  hoverRotation?: number;
  glowEffect?: boolean;
}

export const AnimatedCard = ({ 
  children, 
  className = '', 
  hoverScale = 1.02,
  hoverRotation = 0,
  glowEffect = false
}: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { playHoverSound } = useSoundEffects();

  const handleMouseEnter = () => {
    setIsHovered(true);
    playHoverSound();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`
        group relative overflow-hidden transition-all duration-500 ease-out cursor-pointer
        ${glowEffect ? 'hover:shadow-2xl hover:shadow-black/10' : 'hover:shadow-xl'}
        ${className}
      `}
      style={{
        transform: isHovered 
          ? `scale(${hoverScale}) rotate(${hoverRotation}deg)` 
          : 'scale(1) rotate(0deg)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {/* Subtle shine effect on hover */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
          transition-transform duration-700 ease-out
          ${isHovered ? 'translate-x-0' : '-translate-x-full'}
        `}
      />
      
      {/* Glow effect */}
      {glowEffect && (
        <div 
          className={`
            absolute inset-0 bg-white/5 rounded-inherit transition-opacity duration-500
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        />
      )}
    </div>
  );
};
