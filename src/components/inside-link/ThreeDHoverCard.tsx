
import React, { useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface ThreeDHoverCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export const ThreeDHoverCard = ({ icon: Icon, title, description, gradient }: ThreeDHoverCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className="relative group cursor-pointer transition-all duration-300 ease-out transform-gpu"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${isHovered ? 'scale-105' : ''}`}>
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Floating icon */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
             style={{ transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)' }}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Content */}
        <div style={{ transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)' }} className="transition-transform duration-300">
          <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Glowing border effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}></div>
      </div>
    </div>
  );
};
