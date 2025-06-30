
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-neutral-50 to-white relative overflow-hidden pt-20">
      {/* Éléments décoratifs animés en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-brand-rose/20 to-brand-orange/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neutral-100/30 to-neutral-200/30 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Grille décorative */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen relative z-10">
        {/* Section texte avec animations */}
        <div className="section-padding flex flex-col justify-center space-content">
          <div className="space-content">
            <div className="flex items-center space-x-3 animate-fade-in-up">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-black to-neutral-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Agence créative</span>
              </div>
            </div>
            
            <h1 className="text-hero lg:text-hero-lg font-light leading-none text-transparent bg-clip-text bg-gradient-to-r from-black via-neutral-800 to-black animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Link
              <br />
              <span className="text-display lg:text-display-lg text-neutral-600 hover:text-black transition-colors duration-500">Agency</span>
            </h1>
            
            <p className="text-xl text-neutral-700 leading-relaxed max-w-lg font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Nous concevons des solutions stratégiques où chaque point de contact devient une opportunité d'engager et d'inspirer votre audience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://wa.me/33745010714?text=Bonjour%2C%20je%20souhaite%20découvrir%20vos%20services%20créatifs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary interactive-button group flex items-center space-x-2"
            >
              <span>Démarrer votre projet</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary interactive-button group flex items-center space-x-2"
            >
              <span>Découvrir nos services</span>
            </button>
          </div>

          {/* Statistiques avec animations */}
          <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-light text-black group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-sm text-neutral-600">Projets réalisés</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-light text-black group-hover:scale-110 transition-transform duration-300">11+</div>
              <div className="text-sm text-neutral-600">Ans d'expérience</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-light text-black group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-sm text-neutral-600">Satisfaction client</div>
            </div>
          </div>
        </div>
        
        {/* Section image avec effets */}
        <div className="relative min-h-[500px] lg:min-h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-white/30 z-10"></div>
          <img 
            src="/lovable-uploads/c2c2bc5c-1a2d-4fdd-a6ac-9d3a8d13ac23.png" 
            alt="Link Agency - Créativité et Innovation" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          
          {/* Éléments flottants décoratifs */}
          <div className="absolute top-1/4 right-10 w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl animate-bounce flex items-center justify-center interactive-card" style={{ animationDelay: '1s', animationDuration: '3s' }}>
            <div className="w-8 h-8 bg-gradient-to-br from-black to-neutral-600 rounded-lg"></div>
          </div>
          
          <div className="absolute bottom-1/3 left-10 w-16 h-16 bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 rounded-full shadow-lg animate-pulse-subtle"></div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center hover:border-black transition-colors cursor-pointer">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
