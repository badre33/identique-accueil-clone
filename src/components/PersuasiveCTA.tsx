
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
  loading?: boolean;
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
  pulse = false,
  loading = false
}: PersuasiveCTAProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const baseClasses = "group relative font-medium transition-all duration-500 transform-gpu inline-flex items-center justify-center overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-2xl hover:shadow-black/25",
    secondary: "bg-white text-black border-2 border-black hover:bg-black hover:text-white shadow-lg hover:shadow-2xl hover:shadow-gray-500/25",
    gradient: "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25"
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
    isHovered && "scale-105 -translate-y-2",
    isPressed && "scale-95 translate-y-0",
    loading && "cursor-wait",
    className
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  const content = (
    <div className="flex items-center justify-center space-x-3 w-full relative z-10">
      {loading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        icon && <span className="flex-shrink-0">{icon}</span>
      )}
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
      {!loading && (
        <ArrowRight className={cn(
          "w-5 h-5 transition-transform duration-300 flex-shrink-0",
          isHovered && "translate-x-1 scale-110"
        )} />
      )}
    </div>
  );

  // Enhanced shimmer effect
  const shimmerEffect = (
    <div className={cn(
      "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent",
      "w-full h-full transform -skew-x-12 transition-transform duration-700 pointer-events-none",
      isHovered ? "translate-x-full" : "-translate-x-full opacity-0"
    )} />
  );

  // Ripple effect on click
  const rippleEffect = isPressed && (
    <div className="absolute inset-0 bg-white/20 rounded-inherit animate-ping pointer-events-none" />
  );

  // Glow effect
  const glowEffect = isHovered && (
    <div className={cn(
      "absolute inset-0 rounded-inherit transition-opacity duration-500",
      variant === 'gradient' ? "bg-purple-400/20" : "bg-current/10"
    )} />
  );

  if (href) {
    return (
      <TouchOptimized
        touchTarget="large"
        className="inline-block w-full max-w-md mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={buttonClasses} 
          onClick={onClick}
        >
          {glowEffect}
          {content}
          {shimmerEffect}
          {rippleEffect}
        </a>
      </TouchOptimized>
    );
  }

  return (
    <TouchOptimized
      touchTarget="large"
      className="inline-block w-full max-w-md mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <button 
        className={buttonClasses} 
        onClick={onClick}
        disabled={loading}
      >
        {glowEffect}
        {content}
        {shimmerEffect}
        {rippleEffect}
      </button>
    </TouchOptimized>
  );
};

// Composants CTA spécialisés avec états de chargement améliorés
export const CTAWithStats = ({ className }: { className?: string }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simuler un délai de chargement
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className={cn("text-center space-y-6 sm:space-y-8 w-full", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-md sm:max-w-none mx-auto mb-6 sm:mb-8">
        <div className="text-center group cursor-pointer hover:scale-105 transition-transform duration-300 p-3 sm:p-2 rounded-lg hover:bg-white/50">
          <div className="text-xl sm:text-2xl font-bold text-black mb-1 group-hover:text-blue-600 transition-colors duration-300">50+</div>
          <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Projets réalisés</div>
        </div>
        <div className="text-center group cursor-pointer hover:scale-105 transition-transform duration-300 p-3 sm:p-2 rounded-lg hover:bg-white/50">
          <div className="text-xl sm:text-2xl font-bold text-black mb-1 group-hover:text-green-600 transition-colors duration-300">98%</div>
          <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Clients satisfaits</div>
        </div>
        <div className="text-center group cursor-pointer hover:scale-105 transition-transform duration-300 p-3 sm:p-2 rounded-lg hover:bg-white/50">
          <div className="text-xl sm:text-2xl font-bold text-black mb-1 group-hover:text-purple-600 transition-colors duration-300">24h</div>
          <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Réponse garantie</div>
        </div>
      </div>
      
      <div className="w-full flex justify-center px-4">
        <PersuasiveCTA
          variant="gradient"
          size="large"
          icon={<Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />}
          microCopy="Consultation gratuite de 30 minutes"
          href="https://calendly.com/b-harkaoui-linkagency/30min"
          onClick={handleClick}
          loading={loading}
        >
          {loading ? "Connexion..." : "Démarrer mon projet"}
        </PersuasiveCTA>
      </div>

      <p className="text-sm text-gray-500 max-w-sm mx-auto hover:text-gray-600 transition-colors duration-300 px-4">
        ✨ Sans engagement • 🚀 Réponse rapide • 💎 Expertise garantie
      </p>
    </div>
  );
};

export const CTAWithUrgency = ({ className }: { className?: string }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simuler un délai de chargement
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className={cn("text-center bg-gradient-to-r from-red-50 to-pink-50 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-red-100 w-full hover:shadow-lg transition-shadow duration-500 mx-auto max-w-2xl", className)}>
      <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 hover:bg-red-200 hover:scale-105 transition-all duration-300 cursor-pointer">
        <Zap className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
        <span>Offre limitée</span>
      </div>
      
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4 hover:text-red-700 transition-colors duration-300 leading-tight">
        -20% sur votre premier projet
      </h3>
      
      <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto hover:text-gray-700 transition-colors duration-300 leading-relaxed px-2">
        Profitez de notre offre de lancement pour les 10 prochains clients
      </p>
      
      <div className="w-full flex justify-center px-2 sm:px-4">
        <PersuasiveCTA
          variant="primary"
          size="large"
          icon={<Users className="w-5 h-5 sm:w-6 sm:h-6" />}
          microCopy="Plus que 3 places disponibles"
          pulse
          href="https://wa.me/33745010714?text=Bonjour%2C%20je%20souhaite%20profiter%20de%20l'offre%20-20%25"
          onClick={handleClick}
          loading={loading}
          className="w-full sm:w-auto max-w-sm"
        >
          {loading ? "Réservation..." : "Réserver ma place"}
        </PersuasiveCTA>
      </div>
    </div>
  );
};
