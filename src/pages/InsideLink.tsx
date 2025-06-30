import { ArrowLeft, Target, Palette, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const InsideLink = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header avec navigation de retour */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">
            <Link 
              to="/" 
              className="flex items-center space-x-3 text-black hover:text-gray-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Retour à l'accueil</span>
            </Link>
            <img 
              src="/lovable-uploads/85b45a40-6291-4f5d-a377-65024ddb1976.png" 
              alt="Link Agency Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl lg:text-7xl font-light mb-8 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black">
            Inside Link
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
            Deux fondateurs. Une vision claire. Un seul objectif : bâtir des marques qui imposent le respect.
          </p>
        </div>
      </section>

      {/* Fondateurs Section */}
      <section className="py-32 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Badreddine Harkaoui */}
            <div className="group">
              <div className="relative mb-8 overflow-hidden rounded-3xl">
                <img 
                  src="/lovable-uploads/566ba4a2-ee11-42db-a054-14667389b2c6.png"
                  alt="Badreddine Harkaoui"
                  className="w-full h-[600px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-light mb-2 text-black">Badreddine Harkaoui</h2>
                  <p className="text-xl text-gray-600 font-light">Strategic Growth Architect – Ex-militaire. Serial Consultant. Brand Strategist.</p>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Badreddine est un architecte du positionnement.<br />
                  Ancien caporal dans les forces d'élite françaises, passé par la tech, l'entrepreneuriat et les stratégies de croissance au service de startups, institutions et grands comptes, il est aujourd'hui la force motrice derrière la direction stratégique de Link.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-black" />
                    <span className="text-lg font-medium text-black">Expert en :</span>
                  </div>
                  <ul className="space-y-2 ml-9 text-gray-700">
                    <li>• stratégie de contenu à fort impact,</li>
                    <li>• campagnes de branding exécutif,</li>
                    <li>• transformation digitale et déploiement de projets complexes.</li>
                  </ul>
                </div>
                
                <blockquote className="border-l-4 border-black pl-6 italic text-xl text-gray-800 font-light">
                  "Je ne construis pas des marques pour qu'elles plaisent. Je les construis pour qu'on ne puisse pas les ignorer."
                </blockquote>
              </div>
            </div>

            {/* Ayman Nejmi */}
            <div className="group">
              <div className="relative mb-8 overflow-hidden rounded-3xl">
                <img 
                  src="/lovable-uploads/d53262f8-9a1f-43dd-b2bc-b199945981c1.png"
                  alt="Ayman Nejmi"
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-light mb-2 text-black">Ayman Nejmi</h2>
                  <p className="text-xl text-gray-600 font-light">Creative Technologist – Designer. Coder. Esthète du branding.</p>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ayman, c'est l'ingénieur du ressenti.<br />
                  Entre direction artistique, développement front-end et branding visuel, il incarne l'obsession du détail et du design qui frappe juste. Issu de l'univers produit et design system, il sait traduire une identité en interface, une stratégie en sensation.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Palette className="w-6 h-6 text-black" />
                    <span className="text-lg font-medium text-black">Spécialiste de :</span>
                  </div>
                  <ul className="space-y-2 ml-9 text-gray-700">
                    <li>• l'expérience utilisateur émotionnelle,</li>
                    <li>• l'identité visuelle cohérente,</li>
                    <li>• la fusion tech x branding.</li>
                  </ul>
                </div>
                
                <blockquote className="border-l-4 border-black pl-6 italic text-xl text-gray-800 font-light">
                  "Une marque forte ne se dit pas belle. Elle se fait sentir, sans même parler."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Link Section */}
      <section className="py-32 px-8 lg:px-16 bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Lightbulb className="w-8 h-8" />
              <h2 className="text-5xl lg:text-6xl font-light">Pourquoi nous avons fondé Link</h2>
            </div>
          </div>
          
          <div className="space-y-8 text-lg lg:text-xl leading-relaxed font-light">
            <p className="text-gray-300">
              Parce que nous étions fatigués de voir des marques fades, des identités génériques et des fondateurs brillants mal présentés.
            </p>
            <p className="text-gray-300">
              Parce qu'on voulait créer une agence différente : radicalement stratégique, obsessionnellement esthétique.
            </p>
            <p className="text-white text-xl lg:text-2xl font-normal">
              Une agence où la rigueur militaire croise le design, où l'exécution est un art, et où chaque client est traité comme une marque de demain.
            </p>
          </div>
          
          <div className="text-center mt-16">
            <a 
              href="https://wa.me/33745010714?text=Bonjour%2C%20j'aimerais%20découvrir%20votre%20approche%20et%20échanger%20sur%20mon%20projet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg font-medium hover:scale-105 hover:shadow-2xl"
            >
              <Users className="w-6 h-6" />
              <span>Rencontrer l'équipe</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsideLink;
