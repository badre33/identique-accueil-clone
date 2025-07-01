
import { useState } from 'react';
import { ArrowRight, Sparkles, Users, Zap } from 'lucide-react';
import { TouchOptimized } from './TouchOptimized';
import { cn } from '@/lib/utils';

interface PersuasiveCTAProps {
  variant?: 'primary' | 'secondary' | 'gradient';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  microCopy?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  pulse?: boolean;
}

export const PersuasiveCTA = ({
  variant = 'primary',
  size = 'medium',
  children,
  microCopy,
  icon,
  onClick,
  href,
  className,
  pulse = false
}: PersuasiveCTAProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = "group relative font-medium transition-all duration-300 transform-gpu inline-flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-black border-2 border-black hover:bg-black hover:text-white shadow-lg hover:shadow-xl",
    gradient: "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 shadow-lg hover:shadow-2xl"
  };

  const sizeClasses = {
    small: "px-6 py-3 text-sm rounded-lg min-h-[48px]",
    medium: "px-8 py-4 text-base rounded-xl min-h-[56px]",
    large: "px-12 py-6 text-lg rounded-2xl min-h-[64px]"
  };

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    pulse && "animate-pulse",
    isHovered && "scale-105 -translate-y-1",
    className
  );

  const content = (
    <div className="flex items-center justify-center space-x-3 w-full">
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <div className="flex flex-col items-center">
        <span className="font-semibold whitespace-nowrap">{children}</span>
        {microCopy && (
          <span className={cn(
            "text-xs opacity-80 mt-1 transition-opacity duration-300 whitespace-nowrap",
            isHovered && "opacity-100"
          )}>
            {microCopy}
          </span>
        )}
      </div>
      <ArrowRight className={cn(
        "w-5 h-5 transition-transform duration-300 flex-shrink-0",
        isHovered && "translate-x-1"
      )} />
    </div>
  );

  const shimmerEffect = (
    <div className={cn(
      "absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent",
      "w-8 h-full transform rotate-12 transition-transform duration-700 pointer-events-none",
      isHovered ? "translate-x-full" : "-translate-x-full opacity-0"
    )} />
  );

  if (href) {
    return (
      <TouchOptimized
        touchTarget="large"
        className="inline-block w-full max-w-md mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses} onClick={onClick}>
          {content}
          {shimmerEffect}
        </a>
      </TouchOptimized>
    );
  }

  return (
    <TouchOptimized
      touchTarget="large"
      className="inline-block w-full max-w-md mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className={buttonClasses} onClick={onClick}>
        {content}
        {shimmerEffect}
      </button>
    </TouchOptimized>
  );
};

// Composants CTA spécialisés
export const CTAWithStats = ({ className }: { className?: string }) => (
  <div className={cn("text-center space-y-8 w-full", className)}>
    <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-8">
      <div className="text-center">
        <div className="text-2xl font-bold text-black mb-1">50+</div>
        <div className="text-sm text-gray-600">Projets réalisés</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-black mb-1">98%</div>
        <div className="text-sm text-gray-600">Clients satisfaits</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-black mb-1">24h</div>
        <div className="text-sm text-gray-600">Réponse garantie</div>
      </div>
    </div>
    
    <div className="w-full flex justify-center px-4">
      <PersuasiveCTA
        variant="gradient"
        size="large"
        icon={<Sparkles className="w-6 h-6" />}
        microCopy="Consultation gratuite de 30 minutes"
        href="https://calendly.com/b-harkaoui-linkagency/30min"
      >
        Démarrer mon projet
      </PersuasiveCTA>
    </div>

    <p className="text-sm text-gray-500 max-w-sm mx-auto">
      ✨ Sans engagement • 🚀 Réponse rapide • 💎 Expertise garantie
    </p>
  </div>
);

export const CTAWithUrgency = ({ className }: { className?: string }) => (
  <div className={cn("text-center bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-3xl border border-red-100 w-full", className)}>
    <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
      <Zap className="w-4 h-4" />
      <span>Offre limitée</span>
    </div>
    
    <h3 className="text-2xl font-bold text-black mb-4">
      -20% sur votre premier projet
    </h3>
    
    <p className="text-gray-600 mb-8 max-w-md mx-auto">
      Profitez de notre offre de lancement pour les 10 prochains clients
    </p>
    
    <div className="w-full flex justify-center px-4">
      <PersuasiveCTA
        variant="primary"
        size="large"
        icon={<Users className="w-6 h-6" />}
        microCopy="Plus que 3 places disponibles"
        pulse
        href="https://wa.me/33745010714?text=Bonjour%2C%20je%20souhaite%20profiter%20de%20l'offre%20-20%25"
      >
        Réserver ma place
      </PersuasiveCTA>
    </div>
  </div>
);
