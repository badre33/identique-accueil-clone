
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const servicePillars = [
  {
    title: 'Stratégie & Marque',
    description: 'Identité, branding et conseil stratégique',
    items: [
      { label: 'Branding & Identité', to: '/branding' },
      { label: 'Conseil stratégique', to: '/conseil-strategique' },
      { label: 'Personal branding', to: '/personal-branding' },
    ],
  },
  {
    title: 'Performance Digitale',
    description: 'Acquisition, contenu, SEO et analytics',
    items: [
      { label: 'Marketing digital', to: '/marketing-digital' },
      { label: 'Social media', to: '/social-media' },
      { label: 'Content digital', to: '/content-digital' },
      { label: 'Développement web', to: '/developpement-web' },
      { label: 'Analytics', to: '/analytics' },
    ],
  },
  {
    title: 'Influence & Événementiel',
    description: 'Événements corporate et campagnes d\'influence',
    items: [
      { label: 'Événementiel corporate', to: '/evenementiel' },
    ],
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
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
    { label: 'Blog', to: '/blog' },
    { label: 'Études de cas', to: '/etudes-de-cas' },
    { label: 'Collaborations', to: '/collaborations' },
    { label: 'Inside Link', to: '/inside-link' },
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
            <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5">
              {/* Accueil */}
              <button
                onClick={() => scrollToSection('accueil')}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                Accueil
              </button>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown className={cn('w-4 h-4 ml-1 transition-transform', isServicesOpen && 'rotate-180')} />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[720px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-3 gap-6 z-[10000]">
                    {servicePillars.map((pillar) => (
                      <div key={pillar.title}>
                        <h3 className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-1">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-gray-500 mb-3">{pillar.description}</p>
                        <ul className="space-y-1">
                          {pillar.items.map((it) => (
                            <li key={it.to}>
                              <Link
                                to={it.to}
                                onClick={() => setIsServicesOpen(false)}
                                className="block text-sm text-gray-700 hover:text-purple-700 hover:bg-purple-50/50 px-2 py-1.5 rounded-md transition-colors"
                              >
                                {it.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {navigationItems.slice(1).map((item) => (
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
              <a
                href="https://wa.me/212699024526?text=Bonjour%20Link%20Agency%2C%20je%20souhaite%20%C3%A9changer%20sur%20un%20projet%20marketing.%20Pourrions-nous%20planifier%20un%20appel%20%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white rounded-lg text-sm font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 transition-all shadow-sm hover:shadow-md"
              >
                Planifier un échange
              </a>
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
                {/* Accueil */}
                <button
                  onClick={() => { scrollToSection('accueil'); setIsMenuOpen(false); }}
                  className="w-full text-left px-4 py-4 text-lg font-light text-black hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all duration-200"
                >
                  Accueil
                </button>

                {/* Services accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                    className="w-full flex items-center justify-between px-4 py-4 text-lg font-light text-black hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all duration-200"
                    aria-expanded={mobileServicesExpanded}
                  >
                    Services
                    <ChevronDown className={cn('w-5 h-5 transition-transform', mobileServicesExpanded && 'rotate-180')} />
                  </button>
                  {mobileServicesExpanded && (
                    <div className="pl-4 pb-2 space-y-4 mt-2">
                      {servicePillars.map((pillar) => (
                        <div key={pillar.title}>
                          <h4 className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent px-3 mb-1">
                            {pillar.title}
                          </h4>
                          <ul className="space-y-1">
                            {pillar.items.map((it) => (
                              <li key={it.to}>
                                <Link
                                  to={it.to}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                                >
                                  {it.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {navigationItems.slice(1).map((item) => (
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
              <a
                href="https://wa.me/212699024526?text=Bonjour%20Link%20Agency%2C%20je%20souhaite%20%C3%A9changer%20sur%20un%20projet%20marketing.%20Pourrions-nous%20planifier%20un%20appel%20%3F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-6 block text-center px-4 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white rounded-xl text-base font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 transition-all"
              >
                Planifier un échange stratégique
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
