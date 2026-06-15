import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, TrendingUp, Video, Users, Target, BarChart3, Package, Heart, CheckCircle, Camera, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { SEOHead } from "@/components/SEOHead";
import { LocationSection } from "@/components/LocationSection";
import { generateServiceSchema, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { LocalCitiesLinks } from "@/components/LocalCitiesLinks";
import { serviceFaqs } from "@/data/serviceFaqs";

const InfluenceMarketing = () => {
  const influenceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        "Influence Marketing & Collaborations Créateurs Maroc",
        "Pilotage de campagnes d'influence pour marques au Maroc au Maroc : casting d'influenceurs et KOL, product seeding, programmes ambassadeurs, lancements produit. Casablanca, Marrakech et national.",
        "Sur devis"
      ),
      generateWebPageSchema(
        "Influence Marketing Maroc - Agence Casablanca & Marrakech | Link Agency",
        "Agence influence marketing Casablanca et Marrakech : campagnes avec influenceurs maroc, collaborations créateurs, product seeding, micro-influence et lancement de produit. Casting → production → diffusion → analytics. Service dans tout le Maroc.",
        "https://linkagency.ma/influence-marketing"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Influence Marketing", url: "https://linkagency.ma/influence-marketing" }
      ]),
      {
        "@type": "Organization",
        "@id": "https://linkagency.ma/#organization",
        "name": "Link Agency",
        "url": "https://linkagency.ma",
        "logo": "https://linkagency.ma/logo.png",
        "address": [
          {
            "@type": "PostalAddress",
            "addressLocality": "Casablanca",
            "addressCountry": "MA"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Marrakech",
            "addressCountry": "MA"
          }
        ],
        "areaServed": ["Casablanca", "Marrakech", "Rabat", "Tanger", "Maroc"]
      }
    ]
  };

  const campaignTypes = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Product Seeding",
      description: "Distribution stratégique de vos produits aux influenceurs ciblés pour générer du contenu authentique et des recommandations naturelles."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Micro-Influence",
      description: "Collaborations avec micro-influenceurs engagés pour toucher des communautés de niche avec un fort taux d'engagement."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "KOL Premium",
      description: "Partenariats avec Key Opinion Leaders et macro-influenceurs pour maximiser votre visibilité et votre crédibilité."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Unboxings & Reviews",
      description: "Création de contenus d'unboxing et reviews authentiques pour présenter vos produits de manière engageante."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ambassador Program",
      description: "Mise en place de programmes d'ambassadeurs long-terme pour créer une relation durable avec votre marque."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Lancement de Produit",
      description: "Campagnes d'influence stratégiques pour le lancement de vos nouveaux produits avec impact maximal."
    }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Casting Influenceurs",
      description: "Identification et sélection des influenceurs et créateurs alignés avec votre marque, votre audience et vos objectifs.",
      duration: "1 semaine",
      icon: <Target className="w-8 h-8" />
    },
    {
      number: "2",
      title: "Validation & Briefing",
      description: "Validation des profils, négociation des conditions et briefing créatif détaillé pour garantir l'alignement.",
      duration: "3-5 jours",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      number: "3",
      title: "Production Contenu",
      description: "Accompagnement des créateurs dans la production de contenu premium conforme à votre brief et à votre image.",
      duration: "1-2 semaines",
      icon: <Camera className="w-8 h-8" />
    },
    {
      number: "4",
      title: "Diffusion & Analytics",
      description: "Diffusion coordonnée du contenu, suivi en temps réel et reporting analytics détaillé des performances.",
      duration: "En continu",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  const industries = [
    { name: "Tech & Innovation", icon: <Zap className="w-6 h-6" /> },
    { name: "Food & Beverage", icon: <Package className="w-6 h-6" /> },
    { name: "Beauté & Cosmétiques", icon: <Sparkles className="w-6 h-6" /> },
    { name: "Mode & Fashion", icon: <Star className="w-6 h-6" /> },
    { name: "Automobile", icon: <TrendingUp className="w-6 h-6" /> },
    { name: "Services B2B", icon: <Users className="w-6 h-6" /> }
  ];

  const advantages = [
    "Database de +1000 influenceurs qualifiés",
    "Casting sur-mesure selon vos critères",
    "Production & direction créative",
    "Gestion complète de A à Z",
    "Analytics & ROI détaillés",
    "Négociation optimale des tarifs"
  ];

  const stats = [
    { number: "1000+", label: "Influenceurs dans notre database" },
    { number: "150+", label: "Campagnes d'influence réussies" },
    { number: "5M+", label: "Impressions générées" },
    { number: "8.5%", label: "Taux d'engagement moyen" }
  ];

  const handleContact = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite échanger sur une campagne d'influence marketing avec Link Agency.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Influence Marketing au Maroc | Link Agency"
        description="Agence influence marketing à Casablanca et Marrakech : campagnes avec influenceurs maroc, collaborations créateurs de contenu, product seeding, micro-influence, KOL premium et lancement de produit. Casting → production → diffusion → analytics. Service dans tout le Maroc."
        keywords="influence marketing casablanca, influence marketing marrakech, influenceurs maroc, campagne influence maroc, lancement de produit maroc, agence marketing casablanca, agence digitale marrakech, link agency casablanca, créateurs contenu maroc, KOL maroc"
        url="https://linkagency.ma/influence-marketing"
        type="service"
        structuredData={influenceSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Influence Marketing Premium
              </div>
              <h1 className="text-5xl lg:text-6xl font-light mb-8 text-black leading-tight">
                Influence Marketing
                <span className="block text-3xl lg:text-4xl text-gray-600 mt-2">Casablanca & Marrakech</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                Pilotage de campagnes d'influence pour marques au Maroc. Casting qualifié, négociation des conditions, supervision créative et reporting de performance : un dispositif structuré aligné avec vos enjeux de marque et vos objectifs business.
              </p>
              <Button 
                onClick={handleContact}
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg hover-scale"
              >
                Discuter d'une campagne
              </Button>
              <p className="text-gray-600 text-sm mt-4 font-light">
                Database +1000 profils qualifiés · Casting sur-mesure · Supervision créative · Reporting détaillé
              </p>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto relative">
                <Sparkles className="w-32 h-32 text-purple-600" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Heart className="w-12 h-12 text-pink-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Users className="w-10 h-10 text-purple-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 lg:px-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">{stat.number}</div>
                <div className="text-purple-100 text-sm font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">Types de campagnes d'influence</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Des solutions d'influence marketing adaptées à chaque objectif
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaignTypes.map((type, index) => (
              <div key={index} className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                <div className="text-purple-600 bg-purple-50 p-4 rounded-lg group-hover:bg-purple-100 transition-colors inline-block mb-6">
                  {type.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-black group-hover:text-purple-600 transition-colors">
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

      {/* Workflow Timeline */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">Notre processus influence</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Casting → Validation → Production → Diffusion → Analytics
            </p>
          </div>
          <WorkflowTimeline 
            steps={workflowSteps}
            title=""
            subtitle=""
          />
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">Industries servies</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Expertise sectorielle pour des campagnes d'influence pertinentes
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="text-purple-600 bg-purple-50 p-3 rounded-lg group-hover:bg-purple-100 transition-colors">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-medium text-black group-hover:text-purple-600 transition-colors">
                    {industry.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <LocationSection serviceType="influence" />

      {/* Why Choose Us Section */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-8 text-black">Pourquoi Link Agency ?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Agence influence marketing premium basée à Casablanca et Marrakech. Une expertise reconnue avec accès à la plus grande database d'influenceurs et créateurs du Maroc. Nous accompagnons les marques dans tout le royaume pour des campagnes d'influence à fort impact.
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
            <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-100">
              <h3 className="text-2xl font-light mb-6 text-black">Cadrons votre campagne d'influence</h3>
              <p className="text-gray-600 mb-6">
                Premier échange pour qualifier le périmètre, le casting cible et chiffrer un plan d'activation.
              </p>
              <Button 
                onClick={handleContact}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 py-4 text-lg"
              >
                Discuter sur WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <LocalCitiesLinks />
      
      <ServiceFAQ faqs={serviceFaqs["influence-marketing"]} />
      
      <FloatingContactWidget />
    </div>
  );
};

export default InfluenceMarketing;
