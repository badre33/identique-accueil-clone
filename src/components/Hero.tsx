
import { ArrowRight, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-25 animate-bounce delay-1000"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm border border-black/10 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">L'agence qui transforme votre vision en réalité</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in-up">
            Nous construisons des
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent block mt-2">
              marques inoubliables
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Branding stratégique, identité visuelle et expérience digitale pour les entrepreneurs qui refusent la médiocrité.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-400">
            <a
              href="https://wa.me/33745010714?text=Bonjour%2C%20j'aimerais%20démarrer%20mon%20projet%20de%20branding%20avec%20Link%20Agency"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Target className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Démarrer votre projet
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <Link
              to="/inside-link"
              className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300"
            >
              Découvrir notre approche
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Social Proof */}
          <div className="animate-fade-in-up delay-600">
            <p className="text-sm text-gray-500 mb-6">Déjà choisi par des entrepreneurs ambitieux</p>
            <div className="flex justify-center items-center space-x-8 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-2xl font-bold text-gray-400">25+ projets</div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-2xl font-bold text-gray-400">100% satisfaction</div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-2xl font-bold text-gray-400">2 ans d'expérience</div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="https://calendly.com/b-harkaoui-linkagency/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg"
          >
            Réserver ma place
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
