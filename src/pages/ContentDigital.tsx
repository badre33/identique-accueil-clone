import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Smartphone, Video, Camera, Edit, TrendingUp, Users, Target, Zap, CheckCircle, Star, Search, Palette, Calendar, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { LocalCitiesLinks } from "@/components/LocalCitiesLinks";
import { serviceFaqs } from "@/data/serviceFaqs";

const ContentDigital = () => {
  const contentSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        "SEO, SEO Arabe & Contenu Éditorial Maroc",
        "Référencement naturel FR · AR · Darija et production de contenus piliers pour générer 20 à 30 % de croissance organique au Maroc.",
        "Sur devis"
      ),
      generateWebPageSchema(
        "SEO, SEO Arabe & Contenu Éditorial Maroc | Link Agency",
        "SEO trilingue (français, arabe, darija) et stratégie de contenu pillar/satellite pour les marques marocaines. 20 à 30 % de croissance organique.",
        "https://linkagency.ma/content-digital"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "SEO & Contenu Éditorial", url: "https://linkagency.ma/content-digital" }
      ]),
      generateFAQSchema(serviceFaqs["content-digital"])
    ]
  };

  const contentServices = [
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Réseaux sociaux",
      description: "Dispositifs éditoriaux conçus pour des prises de parole cohérentes sur l’ensemble de vos plateformes.",
      details: "Stratégie éditoriale FR/AR/Darija, planning de publication, community management et reporting pour piloter votre présence digitale."
    },
    {
      icon: <Video className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Production vidéo",
      description: "Production vidéo pensée pour vos campagnes, vos réseaux sociaux et vos temps forts de marque.",
      details: "Du concept à la post-production, nous produisons des formats publicitaires, corporate et social media alignés à vos objectifs."
    },
    {
      icon: <Camera className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Photographie",
      description: "Production photo premium pour structurer vos assets de marque et vos campagnes.",
      details: "Shooting studio ou terrain, direction artistique, retouche et constitution d’une banque d’images cohérente avec votre identité."
    },
    {
      icon: <Edit className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Rédaction web",
      description: "Copywriting éditorial et commercial pour vos prises de parole digitales.",
      details: "Articles, newsletters, scripts vidéo, captions social media et contenus SEO conçus pour renforcer clarté, cohérence et conversion."
    }
  ];

  const stats = [
    { number: "200+", label: "Projets livrés", icon: <Edit className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "50+", label: "Clients accompagnés", icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "FR / AR / Darija", label: "Rédaction native", icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "Studio interne", label: "Production intégrée", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  const advantages = [
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Stratégie sur-mesure",
      description: "Chaque contenu est pensé selon vos objectifs et votre audience cible."
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Studio interne",
      description: "Direction artistique, motion, vidéo, photo et copywriting réunis dans une chaîne de production intégrée."
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Performance mesurée",
      description: "Lecture des performances, arbitrages éditoriaux et optimisation continue selon vos KPIs métier."
    },
    {
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Qualité garantie",
      description: "Circuits de validation clairs pour produire des contenus fiables, cohérents et exploitables rapidement."
    }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Audit & Stratégie",
      description: "Analyse de votre présence digitale actuelle, définition de vos objectifs et création d'une stratégie de contenu personnalisée pour maximiser votre impact.",
      duration: "1 semaine",
      icon: <Search className="w-8 h-8" />
    },
    {
      number: "2",
      title: "Création & Production",
      description: "Production de contenus haute qualité : visuels, vidéos, textes optimisés. Chaque contenu est créé pour engager votre audience et renforcer votre image de marque.",
      duration: "2-4 semaines",
      icon: <Palette className="w-8 h-8" />
    },
    {
      number: "3",
      title: "Planification & Diffusion",
      description: "Mise en place du calendrier éditorial, programmation et diffusion sur vos plateformes digitales avec un timing optimal pour maximiser la portée.",
      duration: "En continu",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      number: "4",
      title: "Analyse & Optimisation",
      description: "Suivi des performances, analyse des KPIs et optimisation continue de votre stratégie pour améliorer constamment vos résultats.",
      duration: "Mensuel",
      icon: <BarChart className="w-8 h-8" />
    }
  ];

  const handleContact = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite échanger sur un dispositif content digital avec Link Agency.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Content Digital Maroc - Création Contenu & Réseaux Sociaux | Link Agency"
        description="Production de contenu digital au Maroc : social media, production vidéo, photographie et copywriting pour marques au Maroc à Casablanca."
        keywords="production vidéo Maroc, agence social media Maroc, content marketing maroc, community management casablanca, rédaction web maroc"
        url="https://linkagency.ma/content-digital"
        type="service"
        structuredData={contentSchema}
      />
      <Header />
      <LocalCitiesLinks />
      <ServiceFAQ faqs={serviceFaqs["content-digital"]} />
      <FloatingContactWidget />
      
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
                Nous produisons les contenus qui structurent la prise de parole de marques au Maroc sur les réseaux sociaux, en campagne et sur leurs supports propriétaires.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 font-light">
                De la stratégie éditoriale à la production, notre studio interne livre des contenus conçus pour la cohérence de marque, la lisibilité des offres et la performance.
              </p>
              <Button 
                onClick={handleContact}
                className="btn-primary text-base sm:text-lg"
              >
                Discuter de votre production
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
              Une production pensée pour les directions marketing qui doivent alimenter plusieurs canaux sans diluer leur image de marque.
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-black">Pourquoi Link Agency ?</h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Un studio intégré pour produire vite, bien et dans le cadre éditorial de grandes marques.
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

      {/* Workflow Timeline */}
      <WorkflowTimeline 
        steps={workflowSteps}
        title="Notre processus content digital"
        subtitle="Une approche méthodique pour créer, diffuser et optimiser vos contenus digitaux"
      />

      {/* Section call-to-action avec gradient unifié */}
      <section className="section-padding gradient-primary">
        <div className="max-w-4xl mx-auto text-center space-content">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-white">
            Parlons de votre dispositif éditorial.
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8 font-light">
            Nous cadrons vos besoins, vos canaux prioritaires et votre rythme de production pour déployer un dispositif cohérent.
          </p>
          <Button 
            onClick={handleContact}
            className="bg-white text-black hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium interactive-button"
          >
            Échanger avec l'équipe
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContentDigital;
