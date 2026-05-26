import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Palette, Target, Compass, LayoutDashboard, Search, Lightbulb, Rocket, Zap, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { LocalCitiesLinks } from "@/components/LocalCitiesLinks";
import { serviceFaqs } from "@/data/serviceFaqs";
import { generatePageMeta } from "@/utils/seoHelpers";

const Branding = () => {
  // Métadonnées et données structurées pour la page Branding
  const pageMeta = generatePageMeta('branding');
  
  const brandingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        "Services Branding & Identité Visuelle",
        "Conception d'identités de marque cohérentes pour marques établies au Maroc : logo, charte graphique, positionnement et plateforme de marque.",
        "Sur devis"
      ),
      generateWebPageSchema(
        "Branding & Identité Visuelle - Création Logo & Charte Graphique | Link Agency",
        "Services complets de branding au Maroc : création d'identité visuelle, logo, charte graphique, positionnement et stratégie de marque.",
        "https://linkagency.ma/branding"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Services Branding", url: "https://linkagency.ma/branding" }
      ]),
      generateFAQSchema(serviceFaqs["branding"])
    ]
  };
  const brandingServices = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Identité visuelle",
      subtitle: "Système d'identité cohérent et déployable.",
      description: "Logo, charte graphique, palette, typographies et iconographie : un système d'identité complet, conçu pour assurer la cohérence sur tous les points de contact et pour s'industrialiser à l'échelle d'une organisation."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Positionnement",
      subtitle: "Clarification stratégique de la promesse de marque.",
      description: "Diagnostic concurrentiel, structuration de la proposition de valeur et identification des territoires de différenciation. Un cadre de positionnement opérationnel pour aligner direction marketing, communication et commerciale."
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Stratégie de marque",
      subtitle: "Plateforme de marque structurée.",
      description: "Vision, mission, valeurs, archétype, ton, narratif : une plateforme de marque documentée qui sert de référentiel pour toutes les prises de parole et tous les déploiements opérationnels."
    },
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "Brand Guidelines",
      subtitle: "Référentiel d'application complet.",
      description: "Guidelines visuelles et éditoriales détaillées pour garantir l'application fidèle de l'identité par les équipes internes, les agences partenaires et les prestataires externes. Un livrable de gouvernance de marque."
    }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Audit & Diagnostic",
      description: "Audit de la marque existante, étude concurrentielle approfondie et analyse des perceptions clients. Cartographie des écarts entre identité actuelle et ambition stratégique.",
      duration: "1-2 semaines",
      icon: <Search className="w-8 h-8" />
    },
    {
      number: "2",
      title: "Stratégie de Marque",
      description: "Construction de la plateforme de marque : positionnement, architecture, ton, narratif. Validation avec les parties prenantes internes et alignement de la direction.",
      duration: "2-3 semaines",
      icon: <Target className="w-8 h-8" />
    },
    {
      number: "3",
      title: "Système d'identité",
      description: "Conception du système visuel et éditorial : logo, charte, déclinaisons, gabarits. Production des livrables d'application sur les supports prioritaires.",
      duration: "3-4 semaines",
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      number: "4",
      title: "Déploiement & Gouvernance",
      description: "Pilotage du déploiement opérationnel : guidelines, formation des équipes, accompagnement des agences partenaires et suivi de la cohérence dans le temps.",
      duration: "2-4 semaines",
      icon: <Rocket className="w-8 h-8" />
    }
  ];

  const handleContact = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite échanger sur un projet de branding ou de refonte d'identité avec Link Agency.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Agence Branding au Maroc — Création Logo, Charte Graphique, Identité de Marque | Link Agency"
        description="Agence branding au Maroc : création de logo, charte graphique, plateforme de marque, refonte d'identité. PME, ETI et grands comptes. Casablanca, Rabat, Marrakech."
        keywords="agence branding maroc, refonte identité visuelle, plateforme de marque, charte graphique entreprise, agence branding casablanca, brand strategy maroc"
        url="https://linkagency.ma/branding"
        type="service"
        structuredData={brandingSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-light mb-8 text-black leading-tight">
                Branding & Identité
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                Identité de marque, logo, charte graphique, plateforme de marque. De la PME qui se lance à l'ETI qui se repositionne, nous concevons des marques qui se distinguent. 11 ans d'expérience au Maroc, fondateur senior sur chaque dossier.
              </p>
              <Button 
                onClick={handleContact}
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg"
              >
                Discuter sur WhatsApp
              </Button>
            </div>
            
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto relative">
                <Palette className="w-32 h-32 text-gray-700" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Compass className="w-12 h-12 text-black" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Target className="w-10 h-10 text-gray-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-black text-center">Nos expertises en branding</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {brandingServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-black mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-light mb-4 text-black">{service.title}</h3>
                <p className="text-gray-700 font-medium mb-4">{service.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <WorkflowTimeline 
        steps={workflowSteps}
        title="Notre méthodologie branding"
        subtitle="Un processus structuré pour construire et déployer une plateforme de marque cohérente"
      />

      {/* Section SEO locale */}
      <section className="py-16 px-8 lg:px-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Agence branding au Maroc — Casablanca, Rabat, Marrakech
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Link Agency accompagne PME, ETI, filiales et grands comptes au Maroc dans la création et la refonte de leur identité de marque. Logo, charte graphique, plateforme de marque, guidelines : nos livrables sont conçus pour durer et pour être utilisables par vos équipes internes comme par vos prestataires externes. Que vous lanciez une nouvelle marque, repositionniez une activité, fusionniez deux entités ou modernisiez une identité vieillissante, nous structurons un projet de branding clair, livrable en 4 à 8 semaines, avec un fondateur senior qui pilote chaque étape. Notre connaissance des codes sectoriels marocains — banque, assurance, retail, industrie, services, immobilier, food, tech — nous permet de produire des identités qui parlent au marché local tout en répondant aux standards internationaux.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-8 text-black">
            Un projet de marque à lancer ou à refondre ?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
            Échangez directement avec le fondateur sur WhatsApp. Premier retour sous 24h, devis sous 48h, sans engagement.
          </p>
          <Button 
            onClick={handleContact}
            className="bg-black text-white hover:bg-gray-800 px-12 py-6 text-lg"
          >
            Discuter sur WhatsApp
          </Button>
        </div>
      </section>
      
      <LocalCitiesLinks />
      
      <ServiceFAQ faqs={serviceFaqs["branding"]} />
      
      <FloatingContactWidget />
    </div>
  );
};

export default Branding;
