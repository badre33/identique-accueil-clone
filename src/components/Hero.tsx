
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden pt-20">
      {/* Éléments décoratifs animés en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-100/30 to-orange-100/30 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-100/20 to-gray-200/20 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Grille décorative */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen relative z-10">
        {/* Section texte avec animations */}
        <div className="p-8 lg:p-16 flex flex-col justify-center space-y-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 animate-fade-in">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-black to-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Agence créative</span>
              </div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-light leading-none text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Link
              <br />
              <span className="text-5xl lg:text-6xl text-gray-600 hover:text-black transition-colors duration-500">Agency</span>
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-lg font-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Nous concevons des solutions stratégiques où chaque point de contact devient une opportunité d'engager et d'inspirer votre audience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://wa.me/33745010714?text=Bonjour%2C%20je%20souhaite%20découvrir%20vos%20services%20créatifs"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-2xl"
            >
              <span className="font-medium">Démarrer votre projet</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center space-x-2 hover:scale-105"
            >
              <span className="font-medium">Découvrir nos services</span>
            </button>
          </div>

          {/* Statistiques avec animations */}
          <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center group">
              <div className="text-3xl font-light text-black group-hover:scale-110 transition-transform">50+</div>
              <div className="text-sm text-gray-600">Projets réalisés</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-light text-black group-hover:scale-110 transition-transform">11+</div>
              <div className="text-sm text-gray-600">Ans d'expérience</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-light text-black group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm text-gray-600">Satisfaction client</div>
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
          <div className="absolute top-1/4 right-10 w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl animate-bounce flex items-center justify-center" style={{ animationDelay: '1s', animationDuration: '3s' }}>
            <div className="w-8 h-8 bg-gradient-to-br from-black to-gray-600 rounded-lg"></div>
          </div>
          
          <div className="absolute bottom-1/3 left-10 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full shadow-lg animate-pulse"></div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
