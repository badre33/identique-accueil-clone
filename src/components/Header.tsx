
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: 'Accueil', action: () => scrollToSection('accueil') },
    { label: 'Services', action: () => scrollToSection('services') },
    { label: 'Collaborations', to: '/collaborations' },
    { label: 'Inside Link', to: '/inside-link' },
    { label: 'À propos', action: () => scrollToSection('apropos') },
    { label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full bg-white z-[9999] border-b border-gray-200 shadow-sm" style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - Left side */}
            <Link 
              to="/" 
              className="flex items-center flex-shrink-0 relative z-[10000]"
              onClick={() => setIsMenuOpen(false)}
              style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
            >
              <img
                src="/lovable-uploads/85b45a40-6291-4f5d-a377-65024ddb1976.png"
                alt="Link Agency Logo" 
                className="h-10 w-auto max-w-[100px] sm:max-w-[120px] md:h-12 md:max-w-[140px] object-contain"
                loading="eager"
                fetchPriority="high"
                style={{ display: 'block' }}
              />
            </Link>

            {/* Desktop Navigation - Right side */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {navigationItems.map((item) => (
                item.to ? (
                  <Link 
                    key={item.label}
                    to={item.to}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button 
                    key={item.label}
                    onClick={item.action}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center min-w-[44px] min-h-[44px] relative z-[10000]"
              aria-label="Toggle menu"
              style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[90] lg:hidden transition-all duration-300 ease-in-out',
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          className={cn(
            'absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <img
                src="/lovable-uploads/85b45a40-6291-4f5d-a377-65024ddb1976.png"
                alt="Link Agency Logo" 
                className="h-8 w-auto object-contain"
                loading="eager"
                fetchPriority="high"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-6 py-8 overflow-y-auto">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label} className="block">
                    {item.to ? (
                      <Link 
                        to={item.to}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-4 text-lg font-light text-black hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button 
                        onClick={() => {
                          item.action?.();
                          setIsMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-4 text-lg font-light text-black hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all duration-200"
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
