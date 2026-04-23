import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb, Target, Users, TrendingUp, CheckCircle, FileText, Briefcase, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/utils/structuredData";

const ConseilStrategique = () => {
  const conseilSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        "Conseil Stratégique & Transformation Digitale",
        "Accompagnement stratégique complet pour accélérer votre transformation digitale : audit, stratégie et accompagnement au Maroc",
        "Sur devis"
      ),
      generateWebPageSchema(
        "Conseil Stratégique Digital - Audit & Transformation | Link Agency Maroc",
        "Conseil stratégique digital au Maroc pour structurer gouvernance, priorités marketing et feuille de route de marques établies.",
        "https://linkagency.ma/conseil-strategique"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Conseil Stratégique", url: "https://linkagency.ma/conseil-strategique" }
      ])
    ]
  };

  const consultingServices = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Audit & Diagnostic",
      subtitle: "Clarifiez vos priorités business",
      description: "Analyse de votre organisation, de votre marché et de vos dispositifs existants pour identifier les priorités d’arbitrage et les opportunités business."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Stratégie Digitale",
      subtitle: "Cadrez votre feuille de route",
      description: "Formalisation d’une stratégie digitale alignée à vos objectifs business, vos contraintes internes et vos horizons de déploiement."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accompagnement",
      subtitle: "Déployer avec méthode",
      description: "Accompagnement des équipes, cadrage des chantiers prioritaires et pilotage de la transformation avec une gouvernance claire."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Formation Équipes",
      subtitle: "Renforcer les équipes",
      description: "Sessions ciblées pour aligner vos équipes marketing et communication sur les outils, indicateurs et méthodes utiles à l’exécution."
    }
  ];

  const stats = [
    { number: "50+", label: "Marques accompagnées" },
    { number: "200+", label: "Projets déployés" },
    { number: "15+", label: "Secteurs couverts" },
    { number: "8 ans", label: "Expérience terrain" }
  ];

  const advantages = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Lecture stratégique senior",
      description: "Une capacité à cadrer enjeux business, gouvernance marketing et trajectoire digitale dans des environnements complexes."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Approche pragmatique",
      description: "Des recommandations directement exploitables, reliées à des priorités opérationnelles et à des indicateurs clairs."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cadre de pilotage clair",
      description: "Un interlocuteur senior pour orchestrer ateliers, arbitrages et déploiement avec vos équipes."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Méthode orientée résultats",
      description: "Des plans d’action priorisés pour sécuriser exécution, reporting et progression mesurable."
    }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Diagnostic Stratégique",
      description: "Audit de l’organisation, étude de marché et identification des leviers prioritaires pour structurer vos décisions marketing et digitales.",
      duration: "2-3 semaines",
      icon: <FileText className="w-8 h-8" />
    },
    {
      number: "2",
      title: "Élaboration Stratégie",
      description: "Construction d’une feuille de route avec objectifs, KPIs, gouvernance et séquencement des chantiers sur 12 à 24 mois.",
      duration: "3-4 semaines",
      icon: <Target className="w-8 h-8" />
    },
    {
      number: "3",
      title: "Plan d'Action",
      description: "Priorisation des initiatives, allocation des ressources et cadrage du plan d’exécution avec budgets et responsabilités.",
      duration: "2 semaines",
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      number: "4",
      title: "Accompagnement",
      description: "Suivi de mise en œuvre, accompagnement des équipes et ajustements continus pour garder le cap sur les objectifs.",
      duration: "6-12 mois",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const handleContact = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite échanger sur un accompagnement en conseil stratégique avec Link Agency.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Conseil Stratégique Digital - Audit & Transformation | Link Agency Maroc"
        description="Conseil stratégique digital au Maroc pour structurer gouvernance, priorités marketing et feuille de route de marques établies."
        keywords="conseil stratégique maroc, agence digitale Maroc, consulting digital casablanca, transformation digitale maroc, marketing digital maroc"
        url="https://linkagency.ma/conseil-strategique"
        type="service"
        structuredData={conseilSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-orange-50 via-red-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-light mb-6 text-black leading-tight">
                Conseil Stratégique
              </h1>
              <h2 className="text-2xl font-light mb-8 text-gray-800">
                Cadrez vos priorités marketing et digitales avec une méthode claire.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light">
                Nous accompagnons les directions marketing et communication dans la structuration de leurs priorités, de leur gouvernance et de leur feuille de route digitale.
              </p>
              <Button 
                onClick={handleContact}
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Discuter de votre feuille de route
              </Button>
            </div>
            
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-orange-200 to-red-200 rounded-full flex items-center justify-center mx-auto relative">
                <Lightbulb className="w-32 h-32 text-orange-600" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Target className="w-12 h-12 text-blue-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-green-500" />
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
                <div className="text-4xl lg:text-5xl font-light mb-2 text-orange-400">{stat.number}</div>
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
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">Nos services de Conseil</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Un accompagnement structuré pour clarifier les décisions, les responsabilités et les indicateurs de pilotage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <div className="text-orange-600">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light mb-2 text-black group-hover:text-orange-600 transition-colors">
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
        title="Notre méthodologie de conseil"
        subtitle="4 phases pour cadrer vos enjeux, prioriser les chantiers et piloter l’exécution"
      />

      {/* Why Choose Us Section */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 text-black">Pourquoi Link Agency ?</h2>
            <p className="text-xl text-gray-600 font-light">
              Une approche de terrain pour des organisations qui ont besoin de clarté, pas de discours générique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-orange-600">
                    {advantage.icon}
                  </div>
                </div>
                <h3 className="text-xl font-light mb-4 text-black">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 lg:px-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-8">
            Parlons de vos priorités stratégiques.
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Un premier échange pour cartographier vos enjeux, identifier les leviers prioritaires et cadrer une trajectoire réaliste.
          </p>
          <Button 
            onClick={handleContact}
            className="bg-orange-600 text-white hover:bg-orange-700 px-12 py-6 text-lg transform hover:scale-105 transition-all duration-300"
          >
            Planifier un premier échange
          </Button>
        </div>
      </section>
      
      <FloatingContactWidget />
    </div>
  );
};

export default ConseilStrategique;
