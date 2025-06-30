
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Smartphone, Video, Camera, Edit, TrendingUp, Users, Target, Zap, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ContentDigital = () => {
  const contentServices = [
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Réseaux sociaux",
      description: "Création de contenu engageant pour toutes vos plateformes sociales.",
      details: "Stratégie éditoriale personnalisée, planning de publication, community management et analyse des performances pour maximiser votre présence digitale."
    },
    {
      icon: <Video className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Production vidéo",
      description: "Réalisation de vidéos professionnelles pour vos campagnes digitales.",
      details: "De la conception à la post-production, nous créons des contenus vidéo qui captivent votre audience et renforcent votre message de marque."
    },
    {
      icon: <Camera className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Photographie",
      description: "Shooting photo professionnel pour alimenter vos contenus.",
      details: "Séances photo sur-mesure, retouche professionnelle et création d'une banque d'images cohérente avec votre identité visuelle."
    },
    {
      icon: <Edit className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Rédaction web",
      description: "Création de contenus textuels optimisés pour le web.",
      details: "Articles de blog, newsletters, posts réseaux sociaux et contenus SEO qui renforcent votre expertise et améliorent votre visibilité."
    }
  ];

  const stats = [
    { number: "500+", label: "Contenus créés", icon: <Edit className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "2M+", label: "Vues générées", icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "98%", label: "Taux de satisfaction", icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "24h", label: "Temps de réponse", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  const advantages = [
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Stratégie sur-mesure",
      description: "Chaque contenu est pensé selon vos objectifs et votre audience cible."
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Équipe créative",
      description: "Des experts en création de contenu passionnés par l'innovation digitale."
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Performance mesurée",
      description: "Suivi des KPIs et optimisation continue pour maximiser l'impact."
    },
    {
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Qualité garantie",
      description: "Processus de validation rigoureux pour des contenus irréprochables."
    }
  ];

  const handleContact = () => {
    const phoneNumber = "33745010714";
    const message = "Bonjour, je souhaite créer mes contenus digitaux avec Link Agency.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 section-padding gradient-subtle relative overflow-hidden">
        {/* Éléments décoratifs optimisés */}
        <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full animate-pulse-subtle"></div>
        <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full animate-float"></div>
        
        <div className="container-max relative z-10">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black smooth-hover mb-6 sm:mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="text-sm sm:text-base">Retour à l'accueil</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-up space-content">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-6 sm:mb-8 text-black leading-tight">
                Content
                <br />
                <span className="gradient-primary bg-clip-text text-transparent">Digital</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 font-light">
                Nous créons des contenus digitaux performants qui captivent votre audience et génèrent de l'engagement authentique.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 font-light">
                De la stratégie à la diffusion, nous transformons vos idées en contenus qui marquent les esprits et renforcent votre présence digitale.
              </p>
              <Button 
                onClick={handleContact}
                className="btn-primary text-base sm:text-lg"
              >
                Créer vos contenus
              </Button>
            </div>
            
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="gradient-primary h-24 sm:h-32 rounded-lg sm:rounded-xl flex items-center justify-center interactive-card">
                  <Smartphone className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
                <div className="gradient-secondary h-24 sm:h-32 rounded-lg sm:rounded-xl flex items-center justify-center interactive-card">
                  <Video className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
                <div className="gradient-warm h-24 sm:h-32 rounded-lg sm:rounded-xl flex items-center justify-center interactive-card">
                  <Camera className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
                <div className="gradient-accent h-24 sm:h-32 rounded-lg sm:rounded-xl flex items-center justify-center interactive-card">
                  <Edit className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section statistiques optimisée */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="card-modern">
                  <div className="text-green-600 mb-2 sm:mb-3 flex justify-center scale-hover">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-light text-black mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-light">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12 sm:mb-16 space-content">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-black">Nos services content digital</h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Une approche complète pour créer, diffuser et optimiser vos contenus digitaux sur tous les canaux.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {contentServices.map((service, index) => (
              <div key={index} className="card-modern group">
                <div className="gradient-subtle w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-green-600 scale-hover">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 text-black group-hover:text-green-600 smooth-hover">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 font-light text-sm sm:text-base">
                  {service.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                  {service.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section avantages optimisée */}
      <section className="section-padding gradient-subtle">
        <div className="container-max">
          <div className="text-center mb-12 sm:mb-16 space-content">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-black">Pourquoi nous choisir ?</h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Notre expertise au service de votre succès digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="card-modern">
                  <div className="gradient-subtle w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-green-600 scale-hover">
                    {advantage.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-light mb-2 sm:mb-3 text-black group-hover:text-green-600 smooth-hover">
                    {advantage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section call-to-action avec gradient unifié */}
      <section className="section-padding gradient-primary">
        <div className="max-w-4xl mx-auto text-center space-content">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-white">
            Prêt à transformer votre présence digitale ?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8 font-light">
            Collaborons pour créer des contenus qui marquent et engagent votre audience.
          </p>
          <Button 
            onClick={handleContact}
            className="bg-white text-black hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium interactive-button"
          >
            Démarrer votre projet
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContentDigital;
