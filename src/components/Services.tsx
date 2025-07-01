
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Users, Megaphone, MessageCircle, Calendar, Palette, Lightbulb, Crown, Star } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: "branding",
      title: "Branding",
      subtitle: "Création d'identités visuelles fortes et mémorables pour votre marque.",
      description: "Façonnez une identité unique qui résonne avec votre audience",
      link: "/branding",
      color: "from-purple-50 to-pink-50",
      accentColor: "from-purple-600 to-pink-600",
      iconComponent: Palette,
      decorativeIcon: Crown,
      ambientImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      icon: "event", 
      title: "Événementiel",
      subtitle: "Conception et organisation d'événements sur mesure qui marquent les esprits.",
      description: "Des expériences immersives qui créent des souvenirs durables",
      link: "/evenementiel",
      color: "from-blue-50 to-indigo-50",
      accentColor: "from-blue-600 to-indigo-600",
      iconComponent: Zap,
      decorativeIcon: Star,
      ambientImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
    },
    {
      icon: "person",
      title: "Personal Branding", 
      subtitle: "Développement de votre image personnelle et professionnelle unique.",
      description: "Révélez votre potentiel et devenez une référence dans votre domaine",
      link: "/personal-branding",
      color: "from-emerald-50 to-teal-50",
      accentColor: "from-emerald-600 to-teal-600",
      iconComponent: Users,
      decorativeIcon: Lightbulb,
      ambientImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    },
    {
      icon: "content",
      title: "Content Digital",
      subtitle: "Création de contenus digitaux engageants et performants.",
      description: "Captivez votre audience avec des contenus qui convertissent",
      link: "/content-digital",
      color: "from-orange-50 to-red-50",
      accentColor: "from-orange-600 to-red-600",
      iconComponent: Megaphone,
      decorativeIcon: Sparkles,
      ambientImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section 
      className="section-padding bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden" 
      id="services"
      aria-label="Nos services"
    >
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        
        {/* New geometric decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-purple-200/30 rounded-2xl transform rotate-12 animate-float"></div>
        <div className="absolute bottom-1/3 right-16 w-16 h-16 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-24 bg-gradient-to-b from-emerald-200/30 to-transparent rounded-full animate-sway"></div>
      </div>

      <div className="container-max relative z-10">
        {/* Enhanced section header */}
        <header className="text-center mb-20 space-content">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Nos expertises</span>
          </div>
          <h2 className="text-display lg:text-display-lg font-light mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Services d'exception
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            De la stratégie à l'exécution, nous transformons vos ambitions en réalisations concrètes avec une approche sur-mesure et créative.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" role="list">
          {services.map((service, index) => {
            const IconComponent = service.iconComponent;
            const DecorativeIcon = service.decorativeIcon;
            return (
              <article 
                key={index}
                className="interactive-card group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-300 focus-within:shadow-2xl focus-within:shadow-purple-500/10 focus-within:border-purple-300 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                role="listitem"
              >
                {/* Enhanced gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-50 group-focus-within:opacity-50 transition-opacity duration-500`} aria-hidden="true"></div>
                
                {/* Ambient image */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                  <img 
                    src={service.ambientImage} 
                    alt=""
                    className="w-24 h-18 object-cover rounded-lg"
                    aria-hidden="true"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <DecorativeIcon className="w-8 h-8 text-purple-400 animate-pulse" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Enhanced icon with animation */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accentColor} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-focus-within:scale-110 group-focus-within:rotate-3 transition-all duration-500 shadow-lg relative`} aria-hidden="true">
                    <IconComponent className="w-8 h-8 text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>
                  
                  {/* Title and number */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl lg:text-3xl font-light text-gray-900 group-hover:text-purple-900 group-focus-within:text-purple-900 transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-4xl font-light text-gray-200 group-hover:text-purple-200 group-focus-within:text-purple-200 transition-colors" aria-hidden="true">
                      0{index + 1}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed font-light mb-4">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-sm text-gray-500 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  {/* Enhanced call to action */}
                  <div className="flex items-center justify-between">
                    <Link 
                      to={service.link}
                      className="flex items-center text-purple-600 hover:text-purple-700 group-focus:text-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-lg p-2"
                      aria-label={`En savoir plus sur nos services de ${service.title}`}
                    >
                      <span className="font-medium mr-3 underline-animation">Découvrir</span>
                      <div className="flex items-center space-x-2 group-hover:translate-x-2 group-focus:translate-x-2 transition-transform">
                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        <div className="w-12 h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform origin-left" aria-hidden="true"></div>
                      </div>
                    </Link>
                    
                    <div className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
                      <a 
                        href={`https://wa.me/33745010714?text=Bonjour%2C%20je%20suis%20intéressé(e)%20par%20vos%20services%20de%20${service.title.toLowerCase()}%20et%20j'aimerais%20en%20discuter`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-purple-600 focus:text-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-lg p-2"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Contacter via WhatsApp pour ${service.title}`}
                      >
                        <MessageCircle className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Enhanced decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-white/30 to-purple-100/30 rounded-full blur-2xl group-hover:scale-150 group-focus-within:scale-150 transition-transform duration-700 opacity-50" aria-hidden="true"></div>
              </article>
            );
          })}
        </div>

        {/* Enhanced CTA section */}
        <section className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '0.7s' }} aria-label="Appel à l'action">
          <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto border border-purple-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-16 h-16 border border-purple-200/30 rounded-2xl transform rotate-12 animate-float"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full animate-pulse"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-light mb-4 text-gray-900">
                Prêt à transformer votre vision en réalité ?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Chaque projet est unique. Discutons ensemble de vos besoins spécifiques et créons quelque chose d'exceptionnel.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" role="group" aria-label="Actions de contact">
                <a 
                  href="https://wa.me/33745010714?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services%20et%20obtenir%20un%20devis%20personnalisé"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary interactive-button group flex items-center space-x-2 focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
                  aria-label="Discuter de votre projet via WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  <span>Discutons de votre projet</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-focus:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
                
                <a 
                  href="https://calendly.com/b-harkaoui-linkagency/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary interactive-button group flex items-center space-x-2 focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
                  aria-label="Planifier une consultation gratuite via Calendly"
                >
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  <span>Consultation gratuite</span>
                </a>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600" role="group" aria-label="Garanties de service">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
                  <span>Devis gratuit sous 24h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-200" aria-hidden="true"></div>
                  <span>Accompagnement personnalisé</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-400" aria-hidden="true"></div>
                  <span>Satisfaction garantie</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
