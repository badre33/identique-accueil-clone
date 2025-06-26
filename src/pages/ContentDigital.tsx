
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Smartphone, Video, Camera, Edit, TrendingUp, Users, Target, Zap, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ContentDigital = () => {
  const contentServices = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Réseaux sociaux",
      description: "Création de contenu engageant pour toutes vos plateformes sociales.",
      details: "Stratégie éditoriale personnalisée, planning de publication, community management et analyse des performances pour maximiser votre présence digitale."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Production vidéo",
      description: "Réalisation de vidéos professionnelles pour vos campagnes digitales.",
      details: "De la conception à la post-production, nous créons des contenus vidéo qui captivent votre audience et renforcent votre message de marque."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photographie",
      description: "Shooting photo professionnel pour alimenter vos contenus.",
      details: "Séances photo sur-mesure, retouche professionnelle et création d'une banque d'images cohérente avec votre identité visuelle."
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Rédaction web",
      description: "Création de contenus textuels optimisés pour le web.",
      details: "Articles de blog, newsletters, posts réseaux sociaux et contenus SEO qui renforcent votre expertise et améliorent votre visibilité."
    }
  ];

  const stats = [
    { number: "500+", label: "Contenus créés", icon: <Edit className="w-6 h-6" /> },
    { number: "2M+", label: "Vues générées", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "98%", label: "Taux de satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "24h", label: "Temps de réponse", icon: <Zap className="w-6 h-6" /> }
  ];

  const advantages = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Stratégie sur-mesure",
      description: "Chaque contenu est pensé selon vos objectifs et votre audience cible."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Équipe créative",
      description: "Des experts en création de contenu passionnés par l'innovation digitale."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance mesurée",
      description: "Suivi des KPIs et optimisation continue pour maximiser l'impact."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Qualité garantie",
      description: "Processus de validation rigoureux pour des contenus irréprochables."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-green-50 via-blue-50 to-white relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-light mb-8 text-black leading-tight">
                Content
                <br />
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Digital</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light">
                Nous créons des contenus digitaux performants qui captivent votre audience et génèrent de l'engagement authentique.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                De la stratégie à la diffusion, nous transformons vos idées en contenus qui marquent les esprits et renforcent votre présence digitale.
              </p>
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
                Créer vos contenus
              </Button>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-200 to-blue-200 h-32 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <Smartphone className="w-12 h-12 text-green-600" />
                </div>
                <div className="bg-gradient-to-br from-blue-200 to-purple-200 h-32 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <Video className="w-12 h-12 text-blue-600" />
                </div>
                <div className="bg-gradient-to-br from-purple-200 to-pink-200 h-32 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <Camera className="w-12 h-12 text-purple-600" />
                </div>
                <div className="bg-gradient-to-br from-pink-200 to-red-200 h-32 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <Edit className="w-12 h-12 text-pink-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section statistiques */}
      <section className="py-16 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-green-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-light text-black mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-light">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">Nos services content digital</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Une approche complète pour créer, diffuser et optimiser vos contenus digitaux sur tous les canaux.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {contentServices.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-light mb-4 text-black group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 font-light">
                  {service.description}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  {service.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section avantages */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">Pourquoi nous choisir ?</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Notre expertise au service de votre succès digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-light mb-3 text-black group-hover:text-green-600 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section call-to-action */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-6 text-white">
            Prêt à transformer votre présence digitale ?
          </h2>
          <p className="text-xl text-green-100 leading-relaxed mb-8 font-light">
            Collaborons pour créer des contenus qui marquent et engagent votre audience.
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg font-medium transform hover:scale-105 transition-all duration-300">
            Démarrer votre projet
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContentDigital;
