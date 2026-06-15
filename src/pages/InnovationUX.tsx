import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb, Users, Eye, Palette, Brain, Target, CheckCircle, Star, Zap, MousePointer, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { LocalCitiesLinks } from "@/components/LocalCitiesLinks";
import { serviceFaqs } from "@/data/serviceFaqs";
import { generatePageMeta } from "@/utils/seoHelpers";

const InnovationUX = () => {
  // Métadonnées et données structurées pour la page Innovation & UX
  const pageMeta = generatePageMeta('innovation-ux');
  
  const uxSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        "Innovation & UX Design",
        "Conception d'expériences digitales pour marques au Maroc au Maroc : recherche UX, UI design, prototypage et tests utilisateurs.",
        "Sur devis"
      ),
      generateWebPageSchema(
        "UX/UI Design pour marques au Maroc au Maroc | Link Agency",
        "Conception UX/UI, prototypage et tests utilisateurs pour les directions digitales de marques au Maroc au Maroc.",
        "https://linkagency.ma/innovation-ux"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Innovation & UX", url: "https://linkagency.ma/innovation-ux" }
      ]),
      generateFAQSchema(serviceFaqs["innovation-ux"])
    ]
  };

  const uxServices = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Recherche Utilisateur",
      description: "Études approfondies de vos utilisateurs pour comprendre leurs besoins et comportements.",
      details: "Interviews utilisateurs, personas, parcours clients, analyses concurrentielles et études d'usage pour une approche data-driven de l'UX."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Interfaces intuitives et attrayantes qui optimisent l'expérience utilisateur.",
      details: "Design d'interfaces modernes, systèmes de design cohérents, wireframes et maquettes interactives avec une attention particulière à l'accessibilité."
    },
    {
      icon: <MousePointer className="w-8 h-8" />,
      title: "Prototypage Interactif",
      description: "Prototypes fonctionnels pour valider vos concepts avant développement.",
      details: "Prototypes haute fidélité, animations et micro-interactions, tests de faisabilité et validation des concepts utilisateurs."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Tests Utilisateurs",
      description: "Validation de vos interfaces avec de vrais utilisateurs pour optimiser l'expérience.",
      details: "Tests d'utilisabilité, A/B testing, eye-tracking, analytics comportementales et recommandations d'amélioration continue."
    }
  ];

  const stats = [
    { number: "50+", label: "Marques accompagnées", icon: <Palette className="w-6 h-6" /> },
    { number: "200+", label: "Projets livrés", icon: <Target className="w-6 h-6" /> },
    { number: "11 ans", label: "D'expérience", icon: <Star className="w-6 h-6" /> },
    { number: "15+", label: "Secteurs couverts", icon: <Zap className="w-6 h-6" /> }
  ];

  const advantages = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Approche Centrée Utilisateur",
      description: "Chaque décision design est basée sur des données utilisateurs réelles et des tests."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Continue",
      description: "Veille technologique et intégration des dernières tendances UX/UI."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Design Collaboratif",
      description: "Co-création avec vos équipes pour un design aligné avec vos objectifs business."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Design Responsive",
      description: "Expériences optimisées pour tous les appareils et tailles d'écran."
    }
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Découverte & Recherche",
      description: "Analyse des besoins utilisateurs et benchmarking concurrentiel",
      duration: "3-5 jours",
      icon: <Eye className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Conception & Wireframing",
      description: "Architecture de l'information et wireframes basse fidélité",
      duration: "5-8 jours",
      icon: <Brain className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Design & Prototypage",
      description: "Maquettes haute fidélité et prototypes interactifs",
      duration: "8-12 jours",
      icon: <Palette className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Tests & Itération",
      description: "Tests utilisateurs et optimisation continue",
      duration: "3-5 jours",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const handleContact = () => {
    const message = "Bonjour, je souhaite échanger sur un projet UX/UI avec Link Agency.";
    window.open(`https://wa.me/212699024526?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 pt-16 sm:pt-20">
      <SEOHead
        title="UX/UI Design au Maroc | Link Agency"
        description="UX/UI design pour directions digitales de marques au Maroc au Maroc : recherche utilisateur, design d'interfaces, prototypage et tests."
        keywords="agence UX maroc, UI design casablanca, expérience utilisateur entreprise, prototypage interfaces, design system maroc"
        url="https://linkagency.ma/innovation-ux"
        type="service"
        structuredData={uxSchema}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-6">
              <Lightbulb className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-800 font-semibold">Innovation & UX</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light text-black leading-tight mb-6">
              Conception d'interfaces
              <span className="block text-orange-600">pour marques au Maroc</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nous concevons les expériences digitales de marques installées : applications, plateformes clients, espaces self-care, design systems. Recherche utilisateur, design et tests intégrés au cycle produit.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="flex justify-center mb-3 text-orange-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Expertise UX/UI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche holistique pour créer des expériences mémorables
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {uxServices.map((service, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center text-white mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-4 text-lg">{service.description}</p>
                <p className="text-gray-600">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Approche Innovation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="flex justify-center mb-4 text-orange-600">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Processus UX
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour concevoir des expériences optimales
            </p>
          </div>
          
          <WorkflowTimeline steps={workflowSteps} />
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Résultats Mesurables
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Nos projets UX génèrent des améliorations concrètes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">+150%</div>
              <div className="text-gray-900 font-semibold mb-2">Engagement Utilisateur</div>
              <div className="text-gray-600 text-sm">Temps passé sur site</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">-60%</div>
              <div className="text-gray-900 font-semibold mb-2">Taux de Rebond</div>
              <div className="text-gray-600 text-sm">Réduction moyenne</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">+200%</div>
              <div className="text-gray-900 font-semibold mb-2">Conversions</div>
              <div className="text-gray-600 text-sm">Amélioration moyenne</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-orange-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à structurer votre expérience digitale ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Premier échange pour cadrer le périmètre de conception et chiffrer un plan d'accompagnement.
          </p>
          <Button 
            onClick={handleContact}
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
          >
            Discuter sur WhatsApp
          </Button>
        </div>
      </section>
      
      <LocalCitiesLinks />
      
      <ServiceFAQ faqs={serviceFaqs["innovation-ux"]} />
      
      <FloatingContactWidget />
    </div>
  );
};

export default InnovationUX;