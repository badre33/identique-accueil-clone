import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Palette, Users, Music, Briefcase, Monitor, Camera, CheckCircle, Star, Search, Calendar, Settings, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/utils/structuredData";
import { generatePageMeta } from "@/utils/seoHelpers";

const Evenementiel = () => {
  // Métadonnées et données structurées pour la page Événementiel
  const pageMeta = generatePageMeta('evenementiel');
  
  const evenementielSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        "Événementiel Corporate au Maroc",
        "Organisation d'événements corporate haut de gamme au Maroc : conférences, lancements produits, séminaires, team-building, signatures de partenariat et événements institutionnels. Agence événementielle premium à Casablanca.",
        "Sur devis"
      ),
      generateWebPageSchema(
        "Événementiel Corporate Maroc - Organisation Événements Entreprise | Link Agency",
        "Agence événementielle corporate Casablanca : organisation professionnelle de conférences, lancements produits, séminaires entreprise au Maroc. Conception, production, coordination & coverage.",
        "https://linkagency.ma/evenementiel"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Événementiel Corporate", url: "https://linkagency.ma/evenementiel" }
      ])
    ]
  };
  const eventTypes = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Conférences & Séminaires",
      description: "Organisation de conférences d'entreprise, séminaires stratégiques et conventions professionnelles avec gestion complète de la logistique."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Lancements de Produits",
      description: "Événements de lancement créatifs et impactants pour marquer le lancement de vos nouveaux produits ou services."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Building",
      description: "Activités de cohésion d'équipe sur mesure pour renforcer l'esprit d'entreprise et la collaboration."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Signatures de Partenariat",
      description: "Cérémonies officielles et événements protocolaires pour sceller vos partenariats stratégiques."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Événements Institutionnels",
      description: "Organisation d'événements officiels, inaugurations et célébrations institutionnelles de prestige."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Galas & Réceptions",
      description: "Soirées de gala, réceptions VIP et événements de prestige avec service haut de gamme."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "À partir de 15 000 MAD",
      description: "Idéal pour les événements intimes et les réunions professionnelles",
      features: [
        "Jusqu'à 50 participants",
        "Conception événementielle basique",
        "Logistique et coordination",
        "Support technique standard",
        "Couverture photo"
      ]
    },
    {
      name: "Standard",
      price: "À partir de 35 000 MAD",
      description: "Parfait pour les événements corporate de moyenne envergure",
      features: [
        "Jusqu'à 200 participants",
        "Conception & direction artistique",
        "Production complète",
        "Coordination sur place",
        "Couverture photo & vidéo",
        "Diffusion en direct",
        "Rapport post-événement"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "Sur devis",
      description: "Solution complète pour les événements d'exception",
      features: [
        "Capacité illimitée",
        "Direction artistique sur mesure",
        "Production premium",
        "Équipe dédiée 24/7",
        "Multi-caméras & live streaming",
        "Contenu social media",
        "Analytics & reporting détaillé",
        "Service VIP & protocole"
      ]
    }
  ];

  const advantages = [
    "Équipe créative expérimentée",
    "Gestion complète de A à Z", 
    "Respect des délais et budgets",
    "Solutions sur-mesure",
    "Couverture photo/vidéo incluse"
  ];

  const stats = [
    { number: "150+", label: "Événements organisés" },
    { number: "98%", label: "Clients satisfaits" },
    { number: "50+", label: "Partenaires de confiance" },
    { number: "24/7", label: "Support disponible" }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Conception",
      description: "Analyse de vos objectifs et création du concept événementiel sur mesure aligné avec votre image de marque.",
      duration: "1-2 semaines",
      icon: <Palette className="w-8 h-8" />
    },
    {
      number: "2",
      title: "Production",
      description: "Planification détaillée, recherche de lieux, coordination des prestataires et création des supports de communication.",
      duration: "2-4 semaines",
      icon: <Settings className="w-8 h-8" />
    },
    {
      number: "3",
      title: "Coordination",
      description: "Gestion opérationnelle le jour J avec notre équipe dédiée, coordination technique et suivi en temps réel.",
      duration: "Jour J",
      icon: <Users className="w-8 h-8" />
    },
    {
      number: "4",
      title: "Coverage",
      description: "Couverture photo/vidéo professionnelle, création de contenu social media et rapport analytique détaillé.",
      duration: "Post-événement",
      icon: <Camera className="w-8 h-8" />
    }
  ];

  const handleContact = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite organiser un événement avec Link Agency.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Événementiel Corporate Maroc - Organisation Événements Entreprise Casablanca"
        description="Agence événementielle corporate Casablanca : organisation professionnelle de conférences, lancements produits, séminaires, team-building et événements institutionnels au Maroc. Méthodologie Link Agency : conception → production → coordination → coverage."
        keywords="événementiel corporate maroc, agence événementielle casablanca, organisation événements entreprise maroc, événementiel corporate casablanca, agence communication casablanca, agence marketing maroc, événements institutionnels maroc"
        url="https://linkagency.ma/evenementiel"
        type="service"
        structuredData={evenementielSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Excellence événementielle
              </div>
              <h1 className="text-5xl lg:text-6xl font-light mb-8 text-black leading-tight">
                Événementiel Corporate
                <span className="block text-3xl lg:text-4xl text-gray-600 mt-2">Haut de gamme</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                Organisation d'événements corporate d'exception au Maroc. De la conception à la réalisation, nous transformons vos événements d'entreprise en expériences mémorables.
              </p>
              <Button 
                onClick={handleContact}
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg hover-scale"
              >
                Parlons de votre événement
              </Button>
              <p className="text-gray-600 text-sm mt-4 font-light">
                150+ événements organisés • Équipe experte • Couverture 360° • Support 24/7
              </p>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl blur-xl opacity-20"></div>
              <img 
                src="/lovable-uploads/4e5435ee-9057-449a-b988-b2ed164da3e1.png" 
                alt="Événementiel Services" 
                className="relative w-full h-auto rounded-xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 lg:px-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types d'événements Section */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">Types d'événements corporate</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Des solutions événementielles complètes pour tous vos besoins d'entreprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((type, index) => (
              <div key={index} className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="text-blue-600 bg-blue-50 p-4 rounded-lg group-hover:bg-blue-100 transition-colors inline-block mb-6">
                  {type.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-black group-hover:text-blue-600 transition-colors">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodologie Link Agency */}
      <section className="py-20 px-8 lg:px-16 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">Méthodologie Link Agency</h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">
              Un processus éprouvé pour des événements d'exception
            </p>
          </div>
          <WorkflowTimeline 
            steps={workflowSteps}
            title=""
            subtitle=""
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">Nos offres événementiel</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Des solutions adaptées à tous vos besoins événementiels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'border-4 border-blue-600 transform scale-105' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Plus populaire
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-black">{plan.name}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</p>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={handleContact}
                  className={`w-full py-4 ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-black'
                  }`}
                >
                  Demander un devis
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-8 lg:px-16 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-8 text-black">Pourquoi Link Agency ?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Une agence événementielle premium avec une méthodologie éprouvée et une équipe d'experts dédiés à l'excellence.
              </p>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-light mb-6 text-black">Prêt à créer votre événement ?</h3>
              <p className="text-gray-600 mb-6">
                Discutons de votre projet et transformons votre vision en réalité.
              </p>
              <Button 
                onClick={handleContact}
                className="w-full bg-black text-white hover:bg-gray-800 py-4 text-lg"
              >
                Contactez-nous maintenant
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <FloatingContactWidget />
    </div>
  );
};

export default Evenementiel;
