
import { useState, useEffect } from 'react';
import { User, Target, Lightbulb, Network } from 'lucide-react';
import { TouchOptimized } from '../TouchOptimized';
import { useMobile } from '@/hooks/useMobile';
import { cn } from '@/lib/utils';

interface SideNavigationProps {
  currentSection: string;
}

export const SideNavigation = ({ currentSection }: SideNavigationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile, isTablet } = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'hero', label: 'Accueil', icon: User },
    { id: 'founders', label: 'Fondateur', icon: User },
    { id: 'network', label: 'Réseau', icon: Network },
    { id: 'vision', label: 'Notre Vision', icon: Target },
    { id: 'mission', label: 'Pourquoi Link', icon: Lightbulb },
  ];

  // Hide on mobile in portrait mode or very small screens
  if (isMobile) {
    return null;
  }

  return (
    <nav 
      className={cn(
        'fixed z-30 transition-all duration-500',
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full',
        isTablet ? 'left-2 top-1/2 -translate-y-1/2' : 'left-4 top-1/2 -translate-y-1/2'
      )}
    >
      <div className={cn(
        'bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200',
        isTablet ? 'p-1.5' : 'p-2'
      )}>
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = currentSection === section.id;
          
          return (
            <TouchOptimized
              key={section.id}
              touchTarget="medium"
              hapticFeedback
              onClick={() => scrollToSection(section.id)}
            >
              <button
                className={cn(
                  'group relative flex items-center rounded-xl transition-all duration-300 w-full',
                  isTablet ? 'p-2.5' : 'p-2',
                  isActive 
                    ? 'bg-black text-white shadow-lg' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-black'
                )}
                title={section.label}
              >
                <Icon className={cn(
                  'flex-shrink-0',
                  isTablet ? 'w-5 h-5' : 'w-4 h-4'
                )} />
                <span className={cn(
                  'ml-2 font-medium whitespace-nowrap overflow-hidden transition-all duration-300',
                  isTablet ? 'text-sm' : 'text-xs',
                  isActive ? 'opacity-100 w-auto' : 'opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto'
                )}>
                  {section.label}
                </span>
              </button>
            </TouchOptimized>
          );
        })}
      </div>
    </nav>
  );
};
