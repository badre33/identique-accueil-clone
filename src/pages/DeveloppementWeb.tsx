import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Smartphone, Monitor, Database, Zap, CheckCircle, Star, Globe, Shield, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/utils/structuredData";
import { generatePageMeta } from "@/utils/seoHelpers";

const DeveloppementWeb = () => {
  // Métadonnées et données structurées pour la page Développement Web
  const pageMeta = generatePageMeta('developpement-web');
  
  const devSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        "Développement Web & Applications",
        "Création de sites web performants et applications sur-mesure avec les dernières technologies",
        "À partir de 5000 MAD"
      ),
      generateWebPageSchema(
        "Développement Web - Sites & Applications sur-mesure | Link Agency",
        "Création de sites web performants, applications web et solutions e-commerce avec les dernières technologies. Développement sur-mesure au Maroc.",
        "https://linkagency.ma/developpement-web"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Développement Web", url: "https://linkagency.ma/developpement-web" }
      ])
    ]
  };

  const webServices = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sites Web Responsives",
      description: "Sites web modernes et adaptatifs, optimisés pour tous les appareils et moteurs de recherche.",
      details: "Développement avec les dernières technologies (React, Next.js, Vue.js), design responsive, optimisation SEO et performances exceptionnelles."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Applications Web",
      description: "Applications web complexes et solutions métier personnalisées pour votre entreprise.",
      details: "SaaS, plateformes collaboratives, systèmes de gestion, interfaces d'administration avec architecture scalable et sécurisée."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "E-commerce",
      description: "Boutiques en ligne performantes avec systèmes de paiement et gestion intégrés.",
      details: "Solutions e-commerce complètes : catalogues produits, paniers, paiements sécurisés, gestion des stocks et analytics avancés."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & API",
      description: "Architecture backend robuste et APIs sécurisées pour vos applications.",
      details: "Développement d'APIs REST/GraphQL, bases de données optimisées, authentification et sécurité avancée."
    }
  ];

  const stats = [
    { number: "200+", label: "Sites développés", icon: <Globe className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime moyen", icon: <Shield className="w-6 h-6" /> },
    { number: "2s", label: "Temps de chargement", icon: <Zap className="w-6 h-6" /> },
    { number: "100%", label: "Responsive", icon: <Smartphone className="w-6 h-6" /> }
  ];

  const advantages = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technologies Modernes",
      description: "React, Vue.js, Node.js, PHP, Python - Nous utilisons les meilleures technologies."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurité Avancée",
      description: "Protection HTTPS, authentification sécurisée et respect des standards de sécurité."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimale",
      description: "Sites ultra-rapides avec optimisation des images, cache et CDN."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "SEO Optimisé",
      description: "Structure technique SEO-friendly pour un meilleur référencement naturel."
    }
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Analyse & Conception",
      description: "Étude de vos besoins, architecture technique et maquettes fonctionnelles",
      duration: "5-10 jours",
      icon: <Code className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Développement",
      description: "Codage frontend et backend avec tests continus",
      duration: "15-30 jours",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Tests & Optimisation",
      description: "Tests complets, optimisation des performances et corrections",
      duration: "3-7 jours",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Mise en ligne & Formation",
      description: "Déploiement, formation équipe et support technique",
      duration: "2-3 jours",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const handleContact = () => {
    const message = "Bonjour, je souhaite discuter d'un projet de développement web avec Link Agency.";
    window.open(`https://wa.me/212699024526?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 sm:pt-20">
      <SEOHead
        title="Développement Web - Sites & Applications sur-mesure | Link Agency"
        description="Création de sites web performants, applications web et solutions e-commerce avec les dernières technologies. Développement sur-mesure au Maroc."
        keywords="développement web maroc, création site web, application web, e-commerce, react, vue.js, développeur web casablanca"
        url="https://linkagency.ma/developpement-web"
        type="service"
        structuredData={devSchema}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Code className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-semibold">Développement Web</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Sites Web & Applications
              <span className="block text-blue-600">Sur-Mesure</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nous créons des sites web performants et des applications modernes avec les dernières technologies. 
              Solutions personnalisées pour propulser votre présence digitale.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="flex justify-center mb-3 text-blue-600">
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
              Nos Services de Développement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions complètes pour tous vos besoins de développement web
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {webServices.map((service, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white mr-4">
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
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir Link Agency ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="flex justify-center mb-4 text-blue-600">
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
              Notre Processus de Développement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir la réussite de votre projet
            </p>
          </div>
          
          <WorkflowTimeline steps={workflowSteps} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Développer Votre Projet Web ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discutons de vos besoins et créons ensemble une solution sur-mesure
          </p>
          <Button 
            onClick={handleContact}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
          >
            Démarrer votre projet
          </Button>
        </div>
      </section>
      
      <FloatingContactWidget />
    </div>
  );
};

export default DeveloppementWeb;