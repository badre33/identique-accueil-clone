
import { Code, Palette, Megaphone, Users, Lightbulb, TrendingUp } from "lucide-react";
import { TouchOptimized } from "./TouchOptimized";
import { ResponsiveGrid } from "./ResponsiveGrid";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { generateServiceSchema } from "@/utils/structuredData";

export const Services = () => {
  const { elementRef, isVisible } = useScrollAnimation({ delay: 200 });

  const services = [
    {
      icon: Palette,
      title: "Branding & Identité",
      description: "Création d'identités visuelles fortes et mémorables qui reflètent l'essence de votre marque",
      features: ["Logo & Charte graphique", "Identité visuelle complète", "Guidelines de marque"],
      color: "from-blue-500 to-purple-600",
      bgImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&fm=webp&q=80",
      link: "/branding"
    },
    {
      icon: Code,
      title: "Développement Web",
      description: "Sites web performants et applications sur mesure avec les dernières technologies",
      features: ["Sites web responsives", "Applications web", "E-commerce"],
      color: "from-green-500 to-blue-600",
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&fm=webp&q=80",
      link: "/developpement-web"
    },
    {
      icon: Megaphone,
      title: "Marketing Digital",
      description: "Stratégies digitales personnalisées pour booster votre visibilité en ligne",
      features: ["SEO & Référencement", "Publicité en ligne", "Analytics & Reporting"],
      color: "from-purple-500 to-pink-600",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&fm=webp&q=80",
      link: "/marketing-digital"
    },
    {
      icon: Users,
      title: "Conseil Stratégique",
      description: "Accompagnement personnalisé pour définir et atteindre vos objectifs business",
      features: ["Audit & Diagnostic", "Stratégie digitale", "Formation équipes"],
      color: "from-orange-500 to-red-600",
      bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&fm=webp&q=80",
      link: "/conseil-strategique"
    },
    {
      icon: Lightbulb,
      title: "Innovation & UX",
      description: "Conception d'expériences utilisateur exceptionnelles centrées sur vos clients",
      features: ["UX/UI Design", "Prototypage", "Tests utilisateurs"],
      color: "from-yellow-500 to-orange-600",
      bgImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&fm=webp&q=80",
      link: "/innovation-ux"
    },
    {
      icon: TrendingUp,
      title: "Croissance & Analytics",
      description: "Optimisation continue basée sur la data pour maximiser votre ROI",
      features: ["Growth Hacking", "A/B Testing", "Conversion Rate Optimization"],
      color: "from-indigo-500 to-blue-600",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&fm=webp&q=80",
      link: "/analytics"
    },
  ];

  // Injecter les données structurées pour les services
  useEffect(() => {
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": generateServiceSchema(
          service.title,
          service.description,
          "Sur devis"
        )
      }))
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(servicesSchema);
    script.id = 'services-schema';
    
    const existingScript = document.getElementById('services-schema');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('services-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements - Hidden on mobile for performance */}
      <div className="hidden md:block absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl animate-pulse"></div>
      <div className="hidden lg:block absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-green-100/50 to-blue-100/50 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Floating geometric shapes - Simplified on mobile */}
      <div className="hidden sm:block absolute top-20 left-1/4 w-4 h-4 sm:w-6 sm:h-6 border-2 border-blue-300/30 rounded-full animate-spin-slow"></div>
      <div className="hidden sm:block absolute bottom-32 right-1/3 w-3 h-12 sm:w-4 sm:h-16 bg-gradient-to-b from-purple-300/20 to-transparent rounded-full animate-sway"></div>
      <div className="hidden lg:block absolute top-1/2 right-20 w-8 h-8 border-2 border-green-300/30 transform rotate-45 animate-pulse"></div>

      <div ref={elementRef} className="max-w-7xl mx-auto">
        {/* Header with enhanced mobile typography */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <TouchOptimized
            touchTarget="medium"
            className="inline-block mb-4 sm:mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200/50 hover:scale-105 transition-all duration-300">
              <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
              <span className="text-xs sm:text-sm font-semibold text-blue-700 tracking-wide">Nos Services</span>
            </div>
          </TouchOptimized>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight">
            Excellence dans chaque
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-medium">
              domaine d'expertise
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            Des solutions complètes et personnalisées pour propulser votre entreprise vers de nouveaux sommets
          </p>
        </div>

        {/* Services Grid with enhanced mobile layout */}
        <ResponsiveGrid
          cols={{ xs: 1, sm: 2, lg: 3 }}
          gap="lg"
          touchOptimized
          className="mb-12 sm:mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <TouchOptimized
                key={service.title}
                touchTarget="large"
                hapticFeedback
                className="h-full"
              >
                <Link to={service.link} className="block h-full">
                  <div className={`group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 border border-gray-100 hover:border-gray-200 overflow-hidden h-full min-h-[400px] sm:min-h-[450px] flex flex-col ${
                    isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Background Image Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                      <img 
                        src={service.bgImage} 
                        alt="" 
                        className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                      />
                    </div>
                    
                    {/* Gradient Overlay Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-2xl sm:rounded-3xl`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon with enhanced mobile sizing */}
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      
                      {/* Title with better mobile typography */}
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 mb-3 sm:mb-4 group-hover:text-slate-800 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      {/* Description with improved mobile readability */}
                      <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 flex-grow">
                        {service.description}
                      </p>
                      
                      {/* Features List with better mobile spacing */}
                      <ul className="space-y-2 sm:space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${service.color} rounded-full mr-2 sm:mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Hover Arrow Effect */}
                      <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        <div className={`inline-flex items-center text-xs sm:text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          <span>En savoir plus</span>
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586L10.293 4.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </TouchOptimized>
            );
          })}
        </ResponsiveGrid>

        {/* CTA Section with enhanced mobile layout */}
        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <TouchOptimized
            touchTarget="large"
            hapticFeedback
            className="inline-block w-full sm:w-auto px-4 sm:px-0"
          >
            <a
              href="https://calendly.com/b-harkaoui-linkagency/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white rounded-2xl font-semibold text-base sm:text-lg hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 shadow-2xl hover:shadow-3xl w-full sm:w-auto hover:shadow-purple-500/25"
            >
              <span>Discutons de votre projet</span>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </TouchOptimized>
        </div>
      </div>
    </section>
  );
};
