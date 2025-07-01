
import { ArrowRight, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Enhanced Background Pattern with depth */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Enhanced Floating Elements with better animations */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-full opacity-20 animate-bounce shadow-2xl blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-emerald-500 via-blue-500 to-cyan-600 rounded-full opacity-25 animate-pulse shadow-xl blur-sm"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-600 rounded-full opacity-20 animate-bounce delay-1000 shadow-lg blur-sm"></div>
      <div className="absolute top-1/3 right-32 w-12 h-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full opacity-15 animate-pulse delay-500 shadow-md blur-sm"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Badge with better animations */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-purple-200/50 shadow-lg mb-8 animate-fade-in hover:scale-105 transition-all duration-300 hover:shadow-xl group">
            <Sparkles className="w-5 h-5 mr-3 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm font-semibold text-slate-700 tracking-wide">L'agence qui transforme votre vision en réalité</span>
          </div>
          
          {/* Enhanced Main Heading with better typography hierarchy */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-slate-900 mb-8 leading-[0.9] tracking-tight animate-fade-in-up">
            Nous construisons des
            <span className="block mt-3 bg-gradient-to-r from-blue-600 via-purple-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent font-medium relative">
              marques inoubliables
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-700/20 blur-3xl -z-10 animate-pulse"></div>
            </span>
          </h1>
          
          {/* Enhanced Subtitle with better spacing */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light tracking-wide animate-fade-in-up delay-200">
            Branding stratégique, identité visuelle et expérience digitale pour les entrepreneurs qui 
            <span className="text-slate-800 font-medium"> refusent la médiocrité</span>.
          </p>
          
          {/* Enhanced CTA Buttons with improved micro-interactions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up delay-400">
            <a
              href="https://calendly.com/b-harkaoui-linkagency/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white rounded-2xl font-semibold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 shadow-2xl hover:shadow-3xl overflow-hidden min-w-[280px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Target className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">Démarrer votre projet</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </a>
            
            <Link
              to="/inside-link"
              className="group relative inline-flex items-center px-10 py-5 bg-white/90 backdrop-blur-md text-slate-900 rounded-2xl font-semibold text-lg hover:bg-white transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 shadow-xl hover:shadow-2xl border-2 border-slate-200/50 hover:border-slate-300/70 overflow-hidden min-w-[280px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-50/0 via-slate-100/50 to-slate-50/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">Découvrir notre approche</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </Link>
          </div>
          
          {/* Enhanced Social Proof with better visual hierarchy */}
          <div className="animate-fade-in-up delay-600">
            <p className="text-sm font-medium text-slate-500 mb-8 tracking-wide uppercase">Déjà choisi par des entrepreneurs ambitieux</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 grayscale hover:grayscale-0 transition-all duration-700 group">
              <div className="flex items-center space-x-3 group-hover:scale-105 transition-transform duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full animate-pulse"></div>
                <div className="text-2xl lg:text-3xl font-bold text-slate-700">75+ projets</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
              <div className="flex items-center space-x-3 group-hover:scale-105 transition-transform duration-300 delay-75">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
                <div className="text-2xl lg:text-3xl font-bold text-slate-700">100% satisfaction</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
              <div className="flex items-center space-x-3 group-hover:scale-105 transition-transform duration-300 delay-150">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse delay-500"></div>
                <div className="text-2xl lg:text-3xl font-bold text-slate-700">11+ ans d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
