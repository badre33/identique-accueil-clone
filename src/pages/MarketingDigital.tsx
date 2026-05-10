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
        "Acquisition Payante & Lead Generation Maroc",
        "Campagnes Meta · Google · TikTok · LinkedIn Ads avec lead scoring qualifié, pour des marques de tous secteurs au Maroc.",
        "Sur devis"
      ),
      generateWebPageSchema(
        "Acquisition Payante & Lead Generation Maroc | Link Agency",
        "Campagnes Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads et social media : pilotage CPL, lead scoring qualifié et reporting ROI pour les marques au Maroc.",
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
      subtitle: "Acquisition organique pilotée",
      description: "Audit technique, optimisation on-page, stratégie de contenu pillar/satellite et netlinking maîtrisé. Reporting mensuel sur les positions, le trafic qualifié et la contribution business."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Campagnes Paid Media",
      subtitle: "Meta · Google · TikTok · LinkedIn",
      description: "Pilotage de campagnes performance et notoriété. Setup tracking, A/B testing créatif, optimisation continue du ROAS et du CPL, reporting détaillé par canal et par audience."
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Marketing",
      subtitle: "Stratégie éditoriale FR/AR/Darija",
      description: "Stratégie éditoriale, calendrier de publication, community management quotidien et production de contenus natifs. Couverture des temps forts marque et institutionnels."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics & Reporting",
      subtitle: "Pilotage data-driven du dispositif",
      description: "Mise en place de tracking avancé (GA4, GTM, conversions API), tableaux de bord consolidés, analyse de performance et recommandations d'optimisation."
    }
  ];

  const stats = [
    { number: "50+", label: "Marques accompagnées" },
    { number: "200+", label: "Dispositifs pilotés" },
    { number: "8 ans", label: "D'expérience" },
    { number: "15+", label: "Secteurs couverts" }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Audit & Diagnostic",
      description: "Audit complet de la présence digitale existante, analyse concurrentielle et cartographie des leviers prioritaires d'acquisition et de conversion.",
      duration: "1-2 semaines",
      icon: <Search className="w-8 h-8" />
    },
    {
      number: "2",
      title: "Cadrage du dispositif",
      description: "Définition des objectifs business, des KPIs (ROAS, CPL, CAC), des audiences cibles et de l'arbitrage budgétaire entre canaux.",
      duration: "2 semaines",
      icon: <Target className="w-8 h-8" />
    },
    {
      number: "3",
      title: "Activation",
      description: "Setup tracking complet, lancement des campagnes, mise en production des contenus et activation des leviers organiques et paid.",
      duration: "2-3 semaines",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      number: "4",
      title: "Pilotage continu",
      description: "A/B testing systématique, optimisation hebdomadaire, reporting mensuel et arbitrages stratégiques avec votre direction marketing.",
      duration: "En continu",
      icon: <BarChart className="w-8 h-8" />
    }
  ];

  const handleContact = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite échanger sur le pilotage de notre dispositif marketing digital avec Link Agency.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Marketing Digital, Pilotage SEO, Paid Media & Social | Link Agency Maroc"
        description="Pilotage marketing digital pour directions marketing de marques établies au Maroc : SEO, campagnes Meta/Google/TikTok, social media et reporting ROI."
        keywords="agence marketing digital maroc, pilotage paid media casablanca, agence SEO maroc, campagnes meta ads maroc, agence social media casablanca, reporting ROI digital"
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
                Pilotage intégré de votre dispositif d'acquisition
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light">
                Nous concevons et pilotons les dispositifs marketing digital de marques établies. SEO, paid media, social et analytics : un pilotage intégré, mesurable et orienté ROI business.
              </p>
              <Button 
                onClick={handleContact}
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Discuter de notre dispositif
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
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">Nos expertises Marketing Digital</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Quatre leviers pilotés en intégration pour maximiser la performance business
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
        title="Notre méthodologie de pilotage"
        subtitle="Un dispositif structuré, du diagnostic à l'optimisation continue"
      />

      {/* Section SEO locale */}
      <section className="py-16 px-8 lg:px-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Agence marketing à Casablanca
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Link Agency pilote les dispositifs marketing digital de marques au Maroc, tous secteurs confondus : services, retail, e-commerce, industrie, finance. Depuis Casablanca et Marrakech, nous accompagnons les directions marketing et les dirigeants dans la structuration de leurs dispositifs d'acquisition et de conversion. Notre rôle dépasse l'exécution tactique : nous intervenons sur le cadrage stratégique, la priorisation budgétaire entre canaux et le pilotage rigoureux de la performance. SEO, paid media (Meta, Google, TikTok, LinkedIn), social media et analytics : chaque levier est calibré en fonction de votre maturité digitale, de vos objectifs business et de vos contraintes spécifiques. Notre approche s'appuie sur un reporting mensuel structuré et des arbitrages partagés avec vos équipes internes.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 lg:px-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-8">
            Prêt à structurer votre dispositif digital ?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Premier échange pour cartographier votre présence actuelle, identifier les leviers prioritaires et chiffrer un plan de pilotage.
          </p>
          <Button 
            onClick={handleContact}
            className="bg-purple-600 text-white hover:bg-purple-700 px-12 py-6 text-lg transform hover:scale-105 transition-all duration-300"
          >
            Planifier un échange
          </Button>
        </div>
      </section>
      
      <FloatingContactWidget />
    </div>
  );
};

export default MarketingDigital;
