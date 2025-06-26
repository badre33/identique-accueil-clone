
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/85b45a40-6291-4f5d-a377-65024ddb1976.png" 
              alt="Link Agency Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-black hover:text-gray-600 transition-colors font-light"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-black hover:text-gray-600 transition-colors font-light"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('apropos')}
              className="text-black hover:text-gray-600 transition-colors font-light"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-black hover:text-gray-600 transition-colors font-light"
            >
              Contact
            </button>
          </nav>

          {/* Menu mobile */}
          <button 
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>

        {/* Menu mobile ouvert */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-black hover:text-gray-600 transition-colors font-light text-left"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-black hover:text-gray-600 transition-colors font-light text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('apropos')}
                className="text-black hover:text-gray-600 transition-colors font-light text-left"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black hover:text-gray-600 transition-colors font-light text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
