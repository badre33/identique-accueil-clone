
import { Quote, Sparkles, ArrowRight } from "lucide-react";

export const Philosophy = () => {
  return (
    <section className="py-32 px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Arrière-plan artistique */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Logo en filigrane - NOTE: Image should be optimized to ~800x800 WebP */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-3">
          <img 
            src="/lovable-uploads/logo-384.webp" 
            alt="Link Logo Background" 
            className="w-96 h-96 object-contain animate-pulse"
            loading="lazy"
            decoding="async"
            width="384"
            height="384"
          />
        </div>
        
        {/* Éléments géométriques flottants */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-black/10 to-gray-300/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-br from-black/5 to-gray-600/10 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-black rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>
        
        {/* Lignes géométriques */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badge d'introduction */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium shadow-lg">
            <Quote className="w-4 h-4" />
            <span>Notre philosophie</span>
          </div>
        </div>

        {/* Citation principale avec effet de machine à écrire */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-light text-black leading-tight mb-8 animate-fade-in">
            Une marque ne s'impose pas,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-600 to-black hover:from-black hover:via-gray-700 hover:to-black transition-all duration-1000">
              elle inspire.
            </span>
          </h2>
          
          {/* Ligne décorative animée */}
          <div className="relative flex justify-center mb-12">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-black to-transparent transform hover:scale-x-150 transition-transform duration-700 origin-center"></div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Grille de valeurs avec cartes interactives */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="group bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-xl mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-light mb-4 text-black">Créativité</h3>
            <p className="text-gray-600 leading-relaxed">
              Nous transformons les idées en expériences mémorables qui captivent et inspirent votre audience.
            </p>
          </div>

          <div className="group bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-black rounded-xl mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
              <div className="w-6 h-6 border-2 border-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-light mb-4 text-black">Authenticité</h3>
            <p className="text-gray-600 leading-relaxed">
              Chaque projet reflète l'essence unique de votre marque avec une approche personnalisée et sincère.
            </p>
          </div>

          <div className="group bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-xl mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-light mb-4 text-black">Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              Notre engagement envers la qualité se reflète dans chaque détail de nos créations et services.
            </p>
          </div>
        </div>

        {/* Citation inspirante */}
        <div className="bg-gradient-to-r from-white/80 via-gray-50/80 to-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-6 left-6 text-6xl text-gray-200 font-serif">"</div>
          <div className="relative z-10 max-w-4xl">
            <p className="text-2xl lg:text-3xl text-gray-700 font-light leading-relaxed italic mb-8">
              Chaque interaction avec votre marque est une opportunité de créer une connexion émotionnelle durable avec votre audience. C'est dans cette rencontre que naît la magie de l'engagement authentique.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-black font-medium">Link Agency</p>
                <p className="text-gray-500 text-sm">Créateurs d'expériences</p>
              </div>
              <a 
                href="https://wa.me/212699024526?text=Bonjour%2C%20votre%20philosophie%20m'inspire%21%20Parlons%20de%20mon%20projet"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105"
              >
                <span className="text-sm font-medium">Échangeons</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-6 right-6 text-6xl text-gray-200 font-serif rotate-180">"</div>
        </div>
      </div>
    </section>
  );
};
