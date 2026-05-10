import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LineChart, Target, Users, TrendingUp, CheckCircle, FileText, Briefcase, Award, Activity, BarChart3, Workflow } from "lucide-react";
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
        "Stratégie & Pilotage Performance Marketing Maroc",
        "Pilotage P&L digital, attribution multi-touch et Revenue Performance Orchestration pour les marques au Maroc, tous secteurs confondus.",
        "Sur devis"
      ),
      generateWebPageSchema(
        "Stratégie & Pilotage Performance Marketing Maroc | Link Agency",
        "Pilotage P&L digital, attribution multi-touch, RevOps & lead scoring qualifié pour les marques au Maroc : méthodologie Link Performance System.",
        "https://linkagency.ma/conseil-strategique"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Stratégie & Pilotage Performance", url: "https://linkagency.ma/conseil-strategique" }
      ])
    ]
  };

  const consultingServices = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "P&L Digital & Attribution Multi-Touch",
      subtitle: "Chaque dirham relié à un revenu",
      description: "Modélisation de votre P&L marketing, déploiement de l'attribution multi-touch (GA4, server-side, data-driven) et lecture par canal, par campagne, par produit."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Revenue Performance Orchestration",
      subtitle: "Orchestrer vos canaux comme un seul système",
      description: "Mise en cohérence Acquisition → Qualification → Conversion → Optimisation. Sortie de la logique en silos pour piloter la performance commerciale globale."
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Lead Scoring & RevOps",
      subtitle: "Industrialiser la qualification des leads",
      description: "Intégration CRM (Salesforce, HubSpot, systèmes bancaires), scoring des leads, boucle marketing → call center → closing avec WhatsApp Business et automation."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Pilotage CPL · CPA · LTV",
      subtitle: "Indicateurs financiers, pas tactiques",
      description: "Construction de tableaux de bord financiers (CAC, LTV, payback period, LTV/CAC ratio) destinés aux directions générales et financières."
    }
  ];

  const stats = [
    { number: "11+", label: "Années d'expérience stratégique" },
    { number: "10", label: "Experts senior" },
    { number: "−47%", label: "CPL moyen observé" },
    { number: "3 à 5x", label: "LTV/CAC ratio cible" }
  ];

  const advantages = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Modèle hybride agence + cabinet",
      description: "Exécution créative + cabinet de pilotage data. Un seul partenaire pour la stratégie, l'orchestration et la livraison."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Vision stratégique 360°",
      description: "De la plateforme de marque à la performance media : aucune action n'existe hors d'une stratégie globale alignée sur vos objectifs business."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Lecture financière du marketing",
      description: "Tableaux de bord destinés aux DG et DAF : CAC, LTV, payback. Le marketing devient un investissement mesurable, pas un centre de coût."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Activation J+1",
      description: "Méthodologie Link Performance System opérationnelle dès le premier mois. Pas de phase de cadrage interminable."
    }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Acquire : Audit performance & P&L digital",
      description: "Diagnostic 360° : canaux d'acquisition, qualité du tracking, attribution actuelle, structure de coûts. Modélisation du P&L digital et identification des fuites de performance.",
      duration: "2-3 semaines",
      icon: <FileText className="w-8 h-8" />
    },
    {
      number: "2",
      title: "Qualify : Lead scoring & intégration CRM",
      description: "Mise en place du scoring qualifié, intégration CRM ↔ plateformes Ads, boucle WhatsApp Business + call center. Chaque lead devient traçable et qualifiable.",
      duration: "3-4 semaines",
      icon: <Target className="w-8 h-8" />
    },
    {
      number: "3",
      title: "Convert : Orchestration multi-canal",
      description: "Pilotage coordonné Meta · Google · TikTok · LinkedIn · SEO. Optimisation des parcours de conversion, A/B testing systématique, automation marketing.",
      duration: "Continu",
      icon: <Activity className="w-8 h-8" />
    },
    {
      number: "4",
      title: "Optimize : Pilotage P&L & itération",
      description: "Tableaux de bord mensuels orientés business (CAC, LTV, ROAS, payback). COPIL stratégique avec votre direction. Itération continue pour améliorer le LTV/CAC ratio.",
      duration: "Mensuel",
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
        title="Stratégie & Pilotage Performance Marketing Maroc | Link Agency"
        description="Pilotage P&L digital, attribution multi-touch, RevOps et lead scoring qualifié pour les marques au Maroc, tous secteurs confondus. Méthodologie Link Performance System."
        keywords="pilotage performance marketing maroc, P&L digital, attribution multi-touch, RevOps maroc, marketing banque assurance, lead scoring casablanca, conseil stratégique digital maroc"
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
                Stratégie &amp; Pilotage Performance
              </h1>
              <h2 className="text-2xl font-light mb-8 text-gray-800">
                Transformez chaque dirham marketing en performance commerciale mesurable.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light">
                Pilotage P&amp;L digital, attribution multi-touch et Revenue Performance Orchestration pour les marques au Maroc, tous secteurs confondus. Modèle hybride unique : agence d'exécution + cabinet de pilotage stratégique.
              </p>
              <Button 
                onClick={handleContact}
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Auditer votre P&amp;L digital
              </Button>
            </div>
            
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-orange-200 to-red-200 rounded-full flex items-center justify-center mx-auto relative">
                <LineChart className="w-32 h-32 text-orange-600" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Target className="w-12 h-12 text-blue-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <BarChart3 className="w-10 h-10 text-green-500" />
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
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">Nos 4 leviers de pilotage performance</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Un dispositif intégré pour orchestrer la performance commerciale digitale, du tracking à la lecture financière.
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
        title="Link Performance System : la méthodologie en 4 temps"
        subtitle="Acquire → Qualify → Convert → Optimize. Le système qui transforme votre marketing digital en P&L mesurable."
      />

      {/* Why Choose Us Section */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 text-black">Pourquoi les marques choisissent Link Agency</h2>
            <p className="text-xl text-gray-600 font-light">
              Le seul modèle au Maroc qui combine exécution créative et pilotage financier de la performance.
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
            Auditons votre P&amp;L digital ensemble.
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Premier diagnostic de votre attribution actuelle, identification des fuites de performance et estimation du potentiel d'amélioration de votre LTV/CAC ratio.
          </p>
          <Button 
            onClick={handleContact}
            className="bg-orange-600 text-white hover:bg-orange-700 px-12 py-6 text-lg transform hover:scale-105 transition-all duration-300"
          >
            Demander un audit performance
          </Button>
        </div>
      </section>
      
      <FloatingContactWidget />
    </div>
  );
};

export default ConseilStrategique;
