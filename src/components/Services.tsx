import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Users, Megaphone, MessageCircle, Calendar } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: "branding",
      title: "Branding",
      subtitle: "Création d'identités visuelles fortes et mémorables pour votre marque.",
      description: "Façonnez une identité unique qui résonne avec votre audience",
      link: "/branding",
      color: "from-neutral-50 to-neutral-100",
      accentColor: "from-black to-neutral-700",
      iconComponent: Sparkles
    },
    {
      icon: "event", 
      title: "Événementiel",
      subtitle: "Conception et organisation d'événements sur mesure qui marquent les esprits.",
      description: "Des expériences immersives qui créent des souvenirs durables",
      link: "/evenementiel",
      color: "from-brand-blue/10 to-brand-blue/20",
      accentColor: "from-brand-blue to-blue-700",
      iconComponent: Zap
    },
    {
      icon: "person",
      title: "Personal Branding", 
      subtitle: "Développement de votre image personnelle et professionnelle unique.",
      description: "Révélez votre potentiel et devenez une référence dans votre domaine",
      link: "/personal-branding",
      color: "from-brand-purple/10 to-brand-rose/20",
      accentColor: "from-brand-purple to-brand-rose",
      iconComponent: Users
    },
    {
      icon: "content",
      title: "Content Digital",
      subtitle: "Création de contenus digitaux engageants et performants.",
      description: "Captivez votre audience avec des contenus qui convertissent",
      link: "/content-digital",
      color: "from-brand-emerald/10 to-brand-emerald/20",
      accentColor: "from-brand-emerald to-emerald-700",
      iconComponent: Megaphone
    }
  ];

  return (
    <section 
      className="section-padding bg-white relative overflow-hidden" 
      id="services"
      aria-label="Nos services"
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-neutral-100/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-black/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        {/* En-tête de section */}
        <header className="text-center mb-20 space-content">
          <div className="inline-flex items-center space-x-2 bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Nos expertises</span>
          </div>
          <h2 className="text-display lg:text-display-lg font-light mb-6 text-transparent bg-clip-text bg-gradient-to-r from-black via-neutral-800 to-black animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Services d'exception
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            De la stratégie à l'exécution, nous transformons vos ambitions en réalisations concrètes avec une approche sur-mesure et créative.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" role="list">
          {services.map((service, index) => {
            const IconComponent = service.iconComponent;
            return (
              <article 
                key={index}
                className="interactive-card group relative bg-white border border-neutral-200 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-black/10 hover:border-neutral-300 focus-within:shadow-2xl focus-within:shadow-black/10 focus-within:border-neutral-300 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                role="listitem"
              >
                {/* Gradient de fond animé */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500`} aria-hidden="true"></div>
                
                {/* Contenu */}
                <div className="relative z-10">
                  {/* Icône avec animation */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accentColor} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-focus-within:scale-110 group-focus-within:rotate-3 transition-all duration-500 shadow-lg`} aria-hidden="true">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Titre et numéro */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl lg:text-3xl font-light text-black group-hover:text-neutral-700 group-focus-within:text-neutral-700 transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-4xl font-light text-neutral-200 group-hover:text-neutral-300 group-focus-within:text-neutral-300 transition-colors" aria-hidden="true">
                      0{index + 1}
                    </span>
                  </div>
                  
                  {/* Description principale */}
                  <p className="text-neutral-600 leading-relaxed font-light mb-4">
                    {service.subtitle}
                  </p>
                  
                  {/* Description secondaire */}
                  <p className="text-sm text-neutral-500 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  {/* Call to action avec underline animation */}
                  <div className="flex items-center justify-between">
                    <Link 
                      to={service.link}
                      className="flex items-center text-black group-hover:text-neutral-700 group-focus:text-neutral-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded-lg p-2"
                      aria-label={`En savoir plus sur nos services de ${service.title}`}
                    >
                      <span className="font-medium mr-3 underline-animation">Découvrir</span>
                      <div className="flex items-center space-x-2 group-hover:translate-x-2 group-focus:translate-x-2 transition-transform">
                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        <div className="w-12 h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform origin-left" aria-hidden="true"></div>
                      </div>
                    </Link>
                    
                    {/* CTA contextuel pour chaque service */}
                    <div className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
                      <a 
                        href={`https://wa.me/212661779744?text=Bonjour%2C%20je%20suis%20intéressé(e)%20par%20vos%20services%20de%20${service.title.toLowerCase()}%20et%20j'aimerais%20en%20discuter`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-black focus:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded-lg p-2"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Contacter via WhatsApp pour ${service.title}`}
                      >
                        <MessageCircle className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Élément décoratif */}
                <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-white/50 to-transparent rounded-full blur-xl group-hover:scale-150 group-focus-within:scale-150 transition-transform duration-700" aria-hidden="true"></div>
              </article>
            );
          })}
        </div>

        {/* Section CTA finale variée */}
        <section className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '0.7s' }} aria-label="Appel à l'action">
          <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-light mb-4 text-black">
              Prêt à transformer votre vision en réalité ?
            </h3>
            <p className="text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Chaque projet est unique. Discutons ensemble de vos besoins spécifiques et créons quelque chose d'exceptionnel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" role="group" aria-label="Actions de contact">
              <a 
                href="https://wa.me/212661779744?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services%20et%20obtenir%20un%20devis%20personnalisé"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary interactive-button group flex items-center space-x-2 focus:ring-4 focus:ring-black focus:ring-opacity-50"
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
                className="btn-secondary interactive-button group flex items-center space-x-2 focus:ring-4 focus:ring-black focus:ring-opacity-50"
                aria-label="Planifier une consultation gratuite via Calendly"
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <span>Consultation gratuite</span>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-neutral-600" role="group" aria-label="Garanties de service">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                <span>Devis gratuit sous 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true"></div>
                <span>Accompagnement personnalisé</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" aria-hidden="true"></div>
                <span>Satisfaction garantie</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
