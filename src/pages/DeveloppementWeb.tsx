import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Smartphone, Monitor, Database, Zap, CheckCircle, Star, Globe, Shield, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { serviceFaqs } from "@/data/serviceFaqs";
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
        "Sur devis"
      ),
      generateWebPageSchema(
        "Développement Web - Sites & Applications sur-mesure | Link Agency",
        "Création de sites web performants, applications web et solutions e-commerce avec les dernières technologies. Développement sur-mesure au Maroc.",
        "https://linkagency.ma/developpement-web"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Développement Web", url: "https://linkagency.ma/developpement-web" }
      ]),
      generateFAQSchema(serviceFaqs["developpement-web"])
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
      description: "Applications web et outils métier conçus pour structurer des opérations déjà en croissance.",
      details: "SaaS, plateformes collaboratives, systèmes de gestion, interfaces d'administration avec architecture scalable et sécurisée."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "E-commerce",
      description: "Dispositifs e-commerce robustes avec intégrations métiers et suivi de performance.",
      details: "Solutions e-commerce complètes : catalogues produits, paniers, paiements sécurisés, gestion des stocks et analytics avancés."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & API",
      description: "Architectures backend et APIs sécurisées pour connecter vos outils, flux et plateformes.",
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
      description: "Des choix techniques alignés à vos besoins métiers, à la sécurité et à la maintenabilité de vos outils."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurité Avancée",
      description: "Authentification, protection des données et architecture pensée pour des environnements professionnels exigeants."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimale",
      description: "Performance front-end, stabilité technique et temps de chargement maîtrisés pour vos parcours clés."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "SEO Optimisé",
      description: "Bases techniques propres pour soutenir visibilité organique, qualité d’indexation et expérience utilisateur."
    }
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Analyse & Conception",
      description: "Cadrage des besoins, architecture technique et priorisation des parcours clés",
      duration: "5-10 jours",
      icon: <Code className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Développement",
      description: "Développement front-end et back-end avec validations régulières",
      duration: "15-30 jours",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Tests & Optimisation",
      description: "Recette, optimisation des performances et sécurisation des livrables",
      duration: "3-7 jours",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Mise en ligne & Formation",
      description: "Mise en ligne, transmission aux équipes et support de prise en main",
      duration: "2-3 jours",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const handleContact = () => {
    const message = "Bonjour, je souhaite échanger sur un besoin de développement web avec Link Agency.";
    window.open(`https://wa.me/212699024526?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 sm:pt-20">
      <SEOHead
        title="Développement Web - Sites & Applications sur-mesure | Link Agency Maroc"
        description="Développement web au Maroc : sites performants, applications métier, e-commerce et architectures techniques pour marques établies."
        keywords="développement web maroc, création site web, application web, e-commerce, react, vue.js, développeur web casablanca, agence web"
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
            
            <h1 className="text-5xl lg:text-6xl font-light text-black leading-tight mb-6">
              Sites Web & Applications
              <span className="block text-blue-600">Sur-Mesure</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nous concevons des sites, plateformes et outils web qui soutiennent vos opérations marketing, commerciales et de marque. 
              Des dispositifs techniques pensés pour la performance, la sécurité et la maintenabilité.
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
              Des environnements techniques pensés pour des marques qui ont besoin de fiabilité, de clarté et d’évolutivité.
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
              Pourquoi Link Agency ?
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
              Une méthode claire pour cadrer, produire, tester et déployer sans perdre en qualité.
            </p>
          </div>
          
          <WorkflowTimeline steps={workflowSteps} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Parlons de votre dispositif web.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Cadrons vos besoins, vos parcours prioritaires et les contraintes techniques avant de lancer la production.
          </p>
          <Button 
            onClick={handleContact}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
          >
            Échanger avec l'équipe
          </Button>
        </div>
      </section>
      
      <ServiceFAQ faqs={serviceFaqs["developpement-web"]} />
      
      <FloatingContactWidget />
    </div>
  );
};

export default DeveloppementWeb;