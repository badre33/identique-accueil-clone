
import { useState, useEffect } from 'react';
import { Users, Target, Lightbulb, Award, Mail } from 'lucide-react';

interface SideNavigationProps {
  currentSection: string;
}

export const SideNavigation = ({ currentSection }: SideNavigationProps) => {
  const [isVisible, setIsVisible] = useState(false);

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
    { id: 'hero', label: 'Accueil', icon: Users },
    { id: 'founders', label: 'Fondateurs', icon: Users },
    { id: 'vision', label: 'Notre Vision', icon: Target },
    { id: 'stats', label: 'Statistiques', icon: Award },
    { id: 'mission', label: 'Pourquoi Link', icon: Lightbulb },
    { id: 'join', label: 'Nous Rejoindre', icon: Mail },
  ];

  return (
    <nav className={`fixed left-4 top-1/2 -translate-y-1/2 z-30 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
    }`}>
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-2 border border-gray-200">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = currentSection === section.id;
          
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group relative flex items-center p-2 rounded-xl transition-all duration-300 w-full ${
                isActive 
                  ? 'bg-black text-white shadow-lg' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-black'
              }`}
              title={section.label}
            >
              <Icon className="w-4 h-4" />
              <span className={`ml-2 text-xs font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
                isActive ? 'opacity-100 w-auto' : 'opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto'
              }`}>
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
