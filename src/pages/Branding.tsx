import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Palette, Target, Compass, LayoutDashboard, Search, Lightbulb, Rocket, Zap, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/utils/structuredData";
import { generatePageMeta } from "@/utils/seoHelpers";

const Branding = () => {
  // Métadonnées et données structurées pour la page Branding
  const pageMeta = generatePageMeta('branding');
  
  const brandingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        "Services Branding & Identité Visuelle",
        "Création d'identité visuelle complète et stratégie de marque : logo, charte graphique, positionnement et branding au Maroc",
        "À partir de 5000 MAD"
      ),
      generateWebPageSchema(
        "Branding & Identité Visuelle - Création Logo & Charte Graphique | Link Agency",
        "Services complets de branding au Maroc : création d'identité visuelle, logo, charte graphique, positionnement et stratégie de marque.",
        "https://linkagency.ma/branding"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Services Branding", url: "https://linkagency.ma/branding" }
      ])
    ]
  };
  const brandingServices = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Identité visuelle",
      subtitle: "Créez une signature visuelle unique et reconnaissable.",
      description: "Nous concevons des logos, chartes graphiques, palettes de couleurs, typographies et éléments iconographiques qui traduisent vos valeurs, votre ambition et votre style. Une identité pensée pour durer."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Positionnement",
      subtitle: "Affirmez votre différence sur le marché.",
      description: "Nous vous aidons à clarifier votre promesse de marque, à structurer votre proposition de valeur et à identifier les leviers différenciateurs qui créeront l'adhésion auprès de vos cibles."
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Stratégie de marque",
      subtitle: "Bâtissez une fondation stratégique solide.",
      description: "Nous structurons votre territoire de marque à travers une vision claire, un storytelling cohérent et une stratégie de développement qui aligne identité, ambition et marché."
    },
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "Brand Guidelines",
      subtitle: "Assurez la cohérence de votre image dans le temps.",
      description: "Nous créons des guides complets et sur mesure (guidelines de marque) pour garantir une application fidèle de votre identité visuelle et éditoriale, en interne comme en externe."
    }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Recherche & Immersion",
      description: "Nous étudions votre marché, vos concurrents et vos utilisateurs pour identifier les véritables leviers d'impact. Cette phase d'immersion garantit la pertinence stratégique de nos recommandations.",
      duration: "1-2 semaines",
      icon: <Search className="w-8 h-8" />
    },
    {
      number: "2",
      title: "Stratégie de Marque",
      description: "Nous construisons une architecture de marque claire, forte et alignée sur vos ambitions. Positionnement, vision, ton, ADN : chaque choix est guidé par une cohérence stratégique globale.",
      duration: "2-3 semaines",
      icon: <Target className="w-8 h-8" />
    },
    {
      number: "3",
      title: "Création & Design",
      description: "Nous traduisons votre stratégie en un univers visuel et narratif unique : logo, charte graphique, contenus, expérience. Chaque détail est pensé pour capter, engager et inspirer.",
      duration: "3-4 semaines",
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      number: "4",
      title: "Déploiement & Activation",
      description: "Nous accompagnons le lancement ou la refonte avec une mise en œuvre maîtrisée : kit de communication, stratégie digitale, contenu, événements. Votre marque prend vie, avec impact et élégance.",
      duration: "2-4 semaines",
      icon: <Rocket className="w-8 h-8" />
    }
  ];

  const handleContact = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite développer ma marque avec Link Agency.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Branding & Identité Visuelle - Création Logo & Charte Graphique | Link Agency"
        description="Services complets de branding au Maroc : création d'identité visuelle, logo, charte graphique, positionnement et stratégie de marque."
        keywords="branding maroc, identité visuelle, création logo, charte graphique, positionnement marque, stratégie de marque casablanca"
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
                Branding
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                Link Agency élabore des identités de marque puissantes, alignées sur votre vision et votre audience. Chaque service est pensé pour renforcer votre positionnement stratégique, affirmer votre image et bâtir une marque durable et mémorable.
              </p>
              <Button 
                onClick={handleContact}
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg"
              >
                Parlons de votre vision
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/f0a7c042-b0e0-48e5-9453-52ec37cbe21f.png" 
                alt="Branding Services" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-black text-center">Nos services branding</h2>
          
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
        title="Notre processus de création de marque"
        subtitle="Une méthode rigoureuse et créative pour transformer chaque marque en référence inspirante"
      />

      {/* Section SEO locale */}
      <section className="py-16 px-8 lg:px-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Agence de branding à Casablanca
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Link Agency accompagne les entreprises marocaines dans la construction d'identités de marque durables et différenciantes. Basée à Casablanca et présente à Marrakech, notre approche repose sur une méthodologie structurée : diagnostic de marque, définition du positionnement, création de la plateforme de marque et déploiement du territoire d'expression. Nous intervenons aussi bien auprès de PME en quête de structuration que de grandes entreprises souhaitant repositionner leur image. Chaque projet de branding est traité comme un investissement stratégique, avec des objectifs mesurables et un accompagnement dans la durée. Notre connaissance approfondie du marché marocain — ses codes culturels, ses dynamiques sectorielles et ses attentes consommateurs — nous permet de créer des marques qui résonnent localement tout en portant une ambition internationale.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-8 text-black">
            Prêt à transformer votre marque ?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
            Discutons de votre projet et créons ensemble une identité de marque qui marquera les esprits.
          </p>
          <Button 
            onClick={handleContact}
            className="bg-black text-white hover:bg-gray-800 px-12 py-6 text-lg"
          >
            Démarrer votre projet
          </Button>
        </div>
      </section>
      
      <FloatingContactWidget />
    </div>
  );
};

export default Branding;
