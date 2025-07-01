
import { ArrowRight, Sparkles, Target, Users, Zap, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation({ delay: 200 });
  const { elementRef: badgeRef, isVisible: badgeVisible } = useScrollAnimation({ delay: 0 });
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ delay: 400 });
  const { elementRef: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation({ delay: 600 });
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ delay: 800 });
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({ delay: 1000 });

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Enhanced Background Pattern with depth */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Enhanced Floating Elements with better animations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl opacity-20 animate-float shadow-2xl blur-sm transform rotate-12 hover:opacity-30 hover:scale-110 transition-all duration-700"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-emerald-500 via-blue-500 to-cyan-600 rounded-full opacity-25 animate-float-reverse shadow-xl blur-sm hover:opacity-35 hover:scale-110 transition-all duration-700"></div>
      <div className="absolute top-1/2 left-20 w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-600 rounded-2xl opacity-20 animate-bounce delay-1000 shadow-lg blur-sm transform -rotate-6 hover:opacity-30 hover:scale-105 transition-all duration-500"></div>
      <div className="absolute top-1/3 right-32 w-16 h-16 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full opacity-15 animate-pulse delay-500 shadow-md blur-sm hover:opacity-25 transition-all duration-500"></div>
      
      {/* New geometric decorative elements with enhanced hover */}
      <div className="absolute top-1/4 left-1/3 w-6 h-6 border-2 border-purple-300/30 rounded-full animate-spin-slow hover:border-purple-400/50 hover:scale-125 transition-all duration-300"></div>
      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 border-2 border-blue-300/30 transform rotate-45 animate-pulse hover:border-blue-400/50 hover:rotate-90 transition-all duration-500"></div>
      <div className="absolute top-3/4 left-1/4 w-4 h-16 bg-gradient-to-b from-purple-300/20 to-transparent rounded-full animate-sway hover:from-purple-400/30 transition-all duration-300"></div>
      
      {/* Enhanced ambient images with hover effects */}
      <div className="absolute top-32 right-20 opacity-10 animate-float hover:opacity-20 hover:scale-105 transition-all duration-700">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" 
          alt="" 
          className="w-48 h-36 object-cover rounded-2xl shadow-2xl"
          aria-hidden="true"
        />
      </div>
      
      <div className="absolute bottom-32 left-20 opacity-10 animate-float-reverse hover:opacity-20 hover:scale-105 transition-all duration-700">
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop" 
          alt="" 
          className="w-40 h-32 object-cover rounded-2xl shadow-2xl"
          aria-hidden="true"
        />
      </div>
      
      <div ref={heroRef} className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Badge with scroll animation */}
          <div 
            ref={badgeRef}
            className={`inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-purple-200/50 shadow-lg mb-8 hover:scale-105 hover:shadow-xl hover:bg-white/90 hover:border-purple-300/70 transition-all duration-500 group cursor-pointer ${
              badgeVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center space-x-2 mr-3">
              <Sparkles className="w-5 h-5 text-purple-600 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
              <Award className="w-4 h-4 text-gold-500 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
            </div>
            <span className="text-sm font-semibold text-slate-700 tracking-wide group-hover:text-purple-700 transition-colors duration-300">L'agence qui transforme votre vision en réalité</span>
          </div>
          
          {/* Enhanced Main Heading with scroll animation */}
          <h1 
            ref={titleRef}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-slate-900 mb-8 leading-[0.9] tracking-tight transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Nous construisons des
            <span className="block mt-3 bg-gradient-to-r from-blue-600 via-purple-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent font-medium relative hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 transition-all duration-500">
              marques inoubliables
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-700/20 blur-3xl -z-10 animate-pulse group-hover:from-blue-700/30 group-hover:via-purple-700/30 group-hover:to-indigo-800/30 transition-all duration-500"></div>
            </span>
          </h1>
          
          {/* Enhanced Subtitle with scroll animation */}
          <p 
            ref={subtitleRef}
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light tracking-wide transition-all duration-1000 delay-200 hover:text-slate-700 ${
              subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Branding stratégique, identité visuelle et expérience digitale pour les entrepreneurs qui 
            <span className="text-slate-800 font-medium hover:text-purple-700 transition-colors duration-300 cursor-default"> refusent la médiocrité</span>.
          </p>
          
          {/* Enhanced CTA Buttons with scroll animation and improved hover effects */}
          <div 
            ref={ctaRef}
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-400 ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="https://calendly.com/b-harkaoui-linkagency/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white rounded-2xl font-semibold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 shadow-2xl hover:shadow-3xl overflow-hidden min-w-[280px] hover:shadow-purple-500/25"
            >
              {/* Enhanced shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              {/* Pulse effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/20 to-indigo-400/0 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
              <Target className="w-6 h-6 mr-3 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">Démarrer votre projet</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300 relative z-10" />
            </a>
            
            <Link
              to="/inside-link"
              className="group relative inline-flex items-center px-10 py-5 bg-white/90 backdrop-blur-md text-slate-900 rounded-2xl font-semibold text-lg hover:bg-white transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 shadow-xl hover:shadow-2xl border-2 border-slate-200/50 hover:border-slate-300/70 overflow-hidden min-w-[280px] hover:shadow-slate-500/20"
            >
              {/* Enhanced shimmer effect for secondary button */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-50/0 via-slate-100/70 to-slate-50/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-purple-50/30 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 group-hover:text-slate-800 transition-colors duration-300">Découvrir notre approche</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300 relative z-10" />
            </Link>
          </div>
          
          {/* Enhanced Social Proof with scroll animation and better hover effects */}
          <div 
            ref={statsRef}
            className={`transition-all duration-1000 delay-600 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-sm font-medium text-slate-500 mb-8 tracking-wide uppercase hover:text-slate-600 transition-colors duration-300">Déjà choisi par des entrepreneurs ambitieux</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 group">
              <div className="flex items-center space-x-3 hover:scale-110 transition-all duration-500 cursor-pointer p-3 rounded-xl hover:bg-white/50 hover:shadow-lg">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-ping"></div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-slate-700 hover:text-emerald-600 transition-colors duration-300">75+ projets</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
              <div className="flex items-center space-x-3 hover:scale-110 transition-all duration-500 delay-75 cursor-pointer p-3 rounded-xl hover:bg-white/50 hover:shadow-lg">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping delay-300"></div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-slate-700 hover:text-purple-600 transition-colors duration-300">100% satisfaction</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
              <div className="flex items-center space-x-3 hover:scale-110 transition-all duration-500 delay-150 cursor-pointer p-3 rounded-xl hover:bg-white/50 hover:shadow-lg">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-ping delay-500"></div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-slate-700 hover:text-blue-600 transition-colors duration-300">11+ ans d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
