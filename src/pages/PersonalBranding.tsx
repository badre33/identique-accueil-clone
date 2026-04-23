import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Star, MessageCircle, BarChart, Target, Lightbulb, Users, TrendingUp, Search, Palette, Rocket, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/utils/structuredData";

const PersonalBranding = () => {
  const personalBrandingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        "Personal Branding & Développement de Marque Personnelle",
        "Accompagnement en personal branding pour dirigeants, experts et porte-parole au Maroc",
        "Sur devis"
      ),
      generateWebPageSchema(
        "Personal Branding au Maroc pour Dirigeants & Experts | Link Agency",
        "Personal branding au Maroc pour dirigeants et experts : positionnement, ligne éditoriale et prise de parole digitale cohérente.",
        "https://linkagency.ma/personal-branding"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Personal Branding", url: "https://linkagency.ma/personal-branding" }
      ])
    ]
  };

  const personalServices = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Identité personnelle",
      subtitle: "Dévoilez une image forte et authentique.",
      description: "Nous façonnons une identité visuelle et verbale qui reflète vos valeurs, votre parcours et vos ambitions. Parce que votre première impression doit laisser une empreinte durable."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Positionnement expert",
      subtitle: "Affirmez votre leadership.",
      description: "Nous révélons votre expertise avec une proposition de valeur claire, différenciante et irrésistible. Objectif : devenir une voix incontournable dans votre secteur."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Communication digitale",
      subtitle: "Prenez la parole avec impact.",
      description: "De LinkedIn à Instagram, nous créons un plan de contenu sur-mesure, calibré pour capter l'attention, renforcer la confiance et stimuler l'engagement."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Développement d'audience",
      subtitle: "Fédérez, influencez, grandissez.",
      description: "Nous pilotons votre croissance digitale avec des stratégies d'activation, de ciblage et d'engagement qui transforment votre audience en communauté fidèle."
    }
  ];

  const stats = [
    { number: "200+", label: "Profils développés" },
    { number: "500K+", label: "Followers générés" },
    { number: "95%", label: "Satisfaction client" },
    { number: "3x", label: "Croissance moyenne" }
  ];

  const advantages = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Stratégie personnalisée",
      description: "Chaque stratégie est unique et adaptée à votre secteur d'activité."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Créativité & Innovation",
      description: "Des approches créatives qui vous démarquent de la concurrence."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accompagnement complet",
      description: "Un suivi personnalisé tout au long de votre développement."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Résultats mesurables",
      description: "Analytics et reporting pour optimiser votre performance."
    }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Audit & Analyse",
      description: "Nous analysons votre positionnement actuel, votre marché et vos objectifs pour définir une stratégie personnalisée et différenciante.",
      duration: "1-2 semaines",
      icon: <Search className="w-8 h-8" />
    },
    {
      number: "2", 
      title: "Stratégie & Identité",
      description: "Création de votre identité visuelle, définition de votre message clé et structuration de votre proposition de valeur unique.",
      duration: "2-3 semaines",
      icon: <Palette className="w-8 h-8" />
    },
    {
      number: "3",
      title: "Création de Contenu",
      description: "Production de contenus personnalisés : visuels, textes, vidéos et mise en place de votre présence digitale optimisée.",
      duration: "3-4 semaines", 
      icon: <MessageCircle className="w-8 h-8" />
    },
    {
      number: "4",
      title: "Lancement & Suivi", 
      description: "Déploiement de votre nouvelle identité, lancement des campagnes et suivi des performances avec optimisations continues.",
      duration: "En continu",
      icon: <Rocket className="w-8 h-8" />
    }
  ];

  const handleContact = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite développer ma marque personnelle avec Link Agency.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Personal Branding au Maroc pour Dirigeants & Experts | Link Agency"
        description="Personal branding au Maroc pour dirigeants et experts : positionnement, ligne éditoriale, contenus et pilotage de la présence digitale."
        keywords="personal branding maroc, dirigeant linkedin maroc, positionnement expert, marque personnelle casablanca, communication dirigeant"
        url="https://linkagency.ma/personal-branding"
        type="service"
        structuredData={personalBrandingSchema}
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
                Personal Branding
              </h1>
              <h2 className="text-2xl font-light mb-8 text-gray-800">
                Structurer une parole crédible pour dirigeants, experts et figures publiques.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light">
                Notre approche relie positionnement, ligne éditoriale et production de contenus pour construire une présence claire, cohérente et crédible.
              </p>
              <Button 
                onClick={handleContact}
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Discuter de votre prise de parole
              </Button>
            </div>
            
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center mx-auto relative">
                <User className="w-32 h-32 text-purple-600" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Star className="w-12 h-12 text-yellow-500" />
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
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">Nos services en Personal Branding</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Une offre dédiée aux profils exposés qui doivent maîtriser leur image, leurs messages et leur régularité éditoriale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalServices.map((service, index) => (
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
        title="Notre processus Personal Branding"
        subtitle="4 étapes pour cadrer, produire et piloter une présence personnelle cohérente"
      />

      {/* Why Choose Us Section */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 text-black">Pourquoi Link Agency ?</h2>
            <p className="text-xl text-gray-600 font-light">
              Une approche sobre et stratégique pour les profils qui ont déjà un niveau d’exposition à tenir.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-purple-600">
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
            Parlons de votre présence personnelle.
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Un premier échange pour clarifier vos enjeux d’image, vos publics prioritaires et votre cadre éditorial.
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

export default PersonalBranding;
