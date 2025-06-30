import { ArrowRight, Sparkles, Calendar, FileText } from "lucide-react";
import { OptimizedImage } from "./OptimizedImage";

export const Hero = () => {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
      servicesSection.setAttribute('tabindex', '-1');
      servicesSection.focus();
    }
  };

  const handlePortfolioOpen = () => {
    const portfolioUrl = window.location.origin + '/collaborations';
    window.open(portfolioUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="min-h-screen bg-gradient-to-br from-white via-neutral-50 to-white relative overflow-hidden pt-20"
      aria-label="Section principale de présentation"
    >
      {/* Éléments décoratifs animés en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-brand-rose/20 to-brand-orange/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neutral-100/30 to-neutral-200/30 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Grille décorative */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" aria-hidden="true"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen relative z-10" role="main">
        {/* Section texte avec animations */}
        <div className="section-padding flex flex-col justify-center space-content">
          <div className="space-content">
            <div className="flex items-center space-x-3 animate-fade-in-up">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-black to-neutral-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>Agence créative</span>
              </div>
            </div>
            
            <h1 
              className="text-hero lg:text-hero-lg font-light leading-none text-transparent bg-clip-text bg-gradient-to-r from-black via-neutral-800 to-black animate-fade-in-up" 
              style={{ animationDelay: '0.2s' }}
            >
              Link
              <br />
              <span className="text-display lg:text-display-lg text-neutral-600 hover:text-black transition-colors duration-500">Agency</span>
            </h1>
            
            <p 
              className="text-xl text-neutral-700 leading-relaxed max-w-lg font-light animate-fade-in-up" 
              style={{ animationDelay: '0.4s' }}
            >
              Nous concevons des solutions stratégiques où chaque point de contact devient une opportunité d'engager et d'inspirer votre audience.
            </p>
          </div>

          {/* CTAs variés avec contexte */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }} role="group" aria-label="Actions principales">
            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/33745010714?text=Bonjour%2C%20je%20souhaite%20découvrir%20vos%20services%20créatifs%20et%20discuter%20de%20mon%20projet"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary interactive-button group flex items-center space-x-2 focus:ring-4 focus:ring-black focus:ring-opacity-50"
                aria-label="Contacter Link Agency via WhatsApp pour démarrer votre projet"
              >
                <span>Démarrer votre projet</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              
              <button 
                onClick={handleScrollToServices}
                className="btn-secondary interactive-button group flex items-center space-x-2 focus:ring-4 focus:ring-black focus:ring-opacity-50"
                aria-label="Aller à la section des services"
              >
                <span>Découvrir nos services</span>
              </button>
            </div>

            {/* CTAs secondaires contextuels */}
            <div className="flex flex-wrap gap-3 pt-2" role="group" aria-label="Actions secondaires">
              <a 
                href="https://calendly.com/b-harkaoui-linkagency/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-neutral-600 hover:text-black focus:text-black transition-colors text-sm bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 px-4 py-2 rounded-full font-medium group focus:ring-2 focus:ring-black focus:ring-opacity-50"
                aria-label="Planifier un rendez-vous via Calendly"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>Consultation gratuite</span>
              </a>
              
              <button 
                onClick={handlePortfolioOpen}
                className="inline-flex items-center space-x-2 text-neutral-600 hover:text-black focus:text-black transition-colors text-sm bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 px-4 py-2 rounded-full font-medium group focus:ring-2 focus:ring-black focus:ring-opacity-50"
                aria-label="Voir notre portfolio de collaborations"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>Voir notre portfolio</span>
              </button>
            </div>

            {/* Indicateur de confiance */}
            <div className="flex items-center space-x-4 pt-4 text-sm text-neutral-600" role="group" aria-label="Informations de service">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
                <span>Disponible maintenant</span>
              </div>
              <div className="w-px h-4 bg-neutral-300" aria-hidden="true"></div>
              <span>Réponse sous 2h garantie</span>
              <div className="w-px h-4 bg-neutral-300" aria-hidden="true"></div>
              <span>Devis gratuit</span>
            </div>
          </div>

          {/* Statistiques avec animations */}
          <div 
            className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up" 
            style={{ animationDelay: '0.8s' }}
            role="group"
            aria-label="Statistiques de l'agence"
          >
            <div className="text-center group cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded-lg p-2" tabIndex={0}>
              <div className="text-3xl font-light text-black group-hover:scale-110 group-focus:scale-110 transition-transform duration-300" aria-hidden="true">50+</div>
              <div className="text-sm text-neutral-600">Projets réalisés</div>
            </div>
            <div className="text-center group cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded-lg p-2" tabIndex={0}>
              <div className="text-3xl font-light text-black group-hover:scale-110 group-focus:scale-110 transition-transform duration-300" aria-hidden="true">11+</div>
              <div className="text-sm text-neutral-600">Ans d'expérience</div>
            </div>
            <div className="text-center group cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 rounded-lg p-2" tabIndex={0}>
              <div className="text-3xl font-light text-black group-hover:scale-110 group-focus:scale-110 transition-transform duration-300" aria-hidden="true">100%</div>
              <div className="text-sm text-neutral-600">Satisfaction client</div>
            </div>
          </div>
        </div>
        
        {/* Section image optimisée */}
        <div className="relative min-h-[500px] lg:min-h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-white/30 z-10" aria-hidden="true"></div>
          <OptimizedImage
            src="/lovable-uploads/c2c2bc5c-1a2d-4fdd-a6ac-9d3a8d13ac23.png"
            alt="Équipe créative de Link Agency au travail, illustrant l'innovation et la créativité dans un environnement moderne"
            className="w-full h-full hover:scale-105 focus-within:scale-105 transition-transform duration-700"
            priority={true}
          />
          
          {/* Éléments flottants décoratifs */}
          <div className="absolute top-1/4 right-10 w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl animate-bounce flex items-center justify-center interactive-card" style={{ animationDelay: '1s', animationDuration: '3s' }} aria-hidden="true">
            <div className="w-8 h-8 bg-gradient-to-br from-black to-neutral-600 rounded-lg"></div>
          </div>
          
          <div className="absolute bottom-1/3 left-10 w-16 h-16 bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 rounded-full shadow-lg animate-pulse-subtle" aria-hidden="true"></div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={handleScrollToServices}
          className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center hover:border-black focus:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition-colors cursor-pointer"
          aria-label="Faire défiler vers le bas pour voir les services"
        >
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse" aria-hidden="true"></div>
        </button>
      </div>
    </section>
  );
};
