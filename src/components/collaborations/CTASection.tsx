
import { ExternalLink } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 px-8 lg:px-16 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl lg:text-5xl font-light mb-8 text-white">
          Rejoignez nos collaborations d'exception
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
          Nous sélectionnons nos partenaires avec soin pour créer ensemble des projets qui marquent les esprits et transforment les industries.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-2xl font-light text-white mb-2">Stratégie</div>
            <div className="text-gray-400 text-sm">Positionnement & Vision</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-white mb-2">Création</div>
            <div className="text-gray-400 text-sm">Design & Contenu</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-white mb-2">Impact</div>
            <div className="text-gray-400 text-sm">Résultats & Growth</div>
          </div>
        </div>
        
        <a 
          href="https://wa.me/33745010714?text=Bonjour%2C%20j'aimerais%20découvrir%20vos%20références%20et%20échanger%20sur%20mon%20projet"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-4 bg-white text-black px-10 py-5 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg font-medium hover:scale-105 hover:shadow-2xl group"
        >
          <span>Démarrer une collaboration</span>
          <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
