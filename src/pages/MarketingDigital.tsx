import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Search, BarChart, Target, Mail, Share2, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/utils/structuredData";

const MarketingDigital = () => {
  const marketingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        "Marketing Digital & Stratégies Digitales",
        "Stratégies marketing digital complètes : SEO, publicité en ligne, social media et analytics au Maroc",
        "À partir de 4000 MAD"
      ),
      generateWebPageSchema(
        "Marketing Digital - SEO, Publicité & Social Media | Link Agency Maroc",
        "Stratégies marketing digital sur-mesure pour booster votre visibilité : SEO, publicité en ligne, social media marketing et analytics au Maroc.",
        "https://linkagency.ma/marketing-digital"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Marketing Digital", url: "https://linkagency.ma/marketing-digital" }
      ])
    ]
  };

  const marketingServices = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Référencement",
      subtitle: "Propulsez votre visibilité organique",
      description: "Optimisation SEO avancée pour améliorer votre positionnement dans les résultats de recherche. Audit technique, optimisation on-page et off-page, stratégie de contenu et netlinking."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Publicité en ligne",
      subtitle: "Campagnes ciblées et performantes",
      description: "Gestion de campagnes publicitaires sur Google Ads, Meta Ads, LinkedIn Ads. Ciblage précis, optimisation continue et maximisation du ROI."
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Marketing",
      subtitle: "Engagez votre communauté",
      description: "Stratégie social media complète : création de contenu, community management, publicité sociale et développement de votre présence sur tous les réseaux."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics & Reporting",
      subtitle: "Pilotez par la data",
      description: "Mise en place de tracking avancé, analyse des performances, rapports détaillés et recommandations pour optimiser vos campagnes marketing."
    }
  ];

  const stats = [
    { number: "300%", label: "ROI moyen" },
    { number: "150+", label: "Campagnes réussies" },
    { number: "2M+", label: "Impressions générées" },
    { number: "98%", label: "Clients satisfaits" }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Audit & Analyse",
      description: "Analyse approfondie de votre présence digitale, votre marché et vos concurrents pour identifier les opportunités de croissance.",
      duration: "1-2 semaines",
      icon: <Search className="w-8 h-8" />
    },
    {
      number: "2",
      title: "Stratégie Digitale",
      description: "Définition d'une stratégie marketing complète avec objectifs SMART, KPIs et plan d'action détaillé sur tous les canaux.",
      duration: "2 semaines",
      icon: <Target className="w-8 h-8" />
    },
    {
      number: "3",
      title: "Déploiement",
      description: "Lancement des campagnes, mise en place du tracking et activation de tous les leviers marketing définis dans la stratégie.",
      duration: "2-3 semaines",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      number: "4",
      title: "Optimisation Continue",
      description: "Suivi des performances, A/B testing, optimisations et ajustements réguliers pour maximiser les résultats.",
      duration: "En continu",
      icon: <BarChart className="w-8 h-8" />
    }
  ];

  const handleContact = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite développer ma stratégie de marketing digital avec Link Agency.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Marketing Digital - SEO, Publicité & Social Media | Link Agency Maroc"
        description="Stratégies marketing digital sur-mesure pour booster votre visibilité : SEO, publicité en ligne, social media marketing et analytics au Maroc."
        keywords="marketing digital maroc, agence marketing digital, SEO maroc, publicité en ligne, social media marketing, google ads, meta ads"
        url="https://linkagency.ma/marketing-digital"
        type="service"
        structuredData={marketingSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-light mb-6 text-black leading-tight">
                Marketing Digital
              </h1>
              <h2 className="text-2xl font-light mb-8 text-gray-800">
                Stratégies digitales sur-mesure pour booster votre croissance
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light">
                Nous créons et déployons des stratégies marketing digitales performantes qui génèrent des résultats mesurables et un ROI optimal.
              </p>
              <Button 
                onClick={handleContact}
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Booster ma visibilité
              </Button>
            </div>
            
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center mx-auto relative">
                <TrendingUp className="w-32 h-32 text-purple-600" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Target className="w-12 h-12 text-red-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <BarChart className="w-10 h-10 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 lg:px-16 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-light mb-2 text-purple-400">{stat.number}</div>
                <div className="text-gray-300 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">Nos services en Marketing Digital</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Des solutions complètes pour maximiser votre présence en ligne
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketingServices.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <div className="text-purple-600">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light mb-2 text-black group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-800 mb-3">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <WorkflowTimeline 
        steps={workflowSteps}
        title="Notre processus Marketing Digital"
        subtitle="4 étapes pour accélérer votre croissance digitale"
      />

      {/* CTA Section */}
      <section className="py-20 px-8 lg:px-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-8">
            Prêt à booster votre visibilité en ligne ?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Développons ensemble une stratégie marketing digital performante pour atteindre vos objectifs de croissance.
          </p>
          <Button 
            onClick={handleContact}
            className="bg-purple-600 text-white hover:bg-purple-700 px-12 py-6 text-lg transform hover:scale-105 transition-all duration-300"
          >
            Démarrer maintenant
          </Button>
        </div>
      </section>
      
      <FloatingContactWidget />
    </div>
  );
};

export default MarketingDigital;
