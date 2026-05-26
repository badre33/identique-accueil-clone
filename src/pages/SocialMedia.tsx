import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Users, Shield, Calendar, Megaphone, Heart, AlertTriangle, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { SEOHead } from "@/components/SEOHead";
import { generateServiceSchema, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/utils/structuredData";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { LocalCitiesLinks } from "@/components/LocalCitiesLinks";
import { serviceFaqs } from "@/data/serviceFaqs";

const SocialMedia = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateServiceSchema(
        "Social Media, Communication & E-réputation Maroc",
        "Stratégie éditoriale FR/AR/Darija, community management quotidien, gestion de crise et e-réputation pour les marques exposées au Maroc.",
        "Sur devis"
      ),
      generateWebPageSchema(
        "Social Media, Communication & E-réputation Maroc | Link Agency",
        "Stratégie éditoriale, community management, gestion de crise et veille e-réputation pour grandes marques au Maroc.",
        "https://linkagency.ma/social-media"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Social Media & E-réputation", url: "https://linkagency.ma/social-media" }
      ]),
      generateFAQSchema(serviceFaqs["social-media"])
    ]
  };

  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Stratégie éditoriale",
      subtitle: "FR · AR · Darija",
      description: "Plateforme éditoriale, lignes de contenu, calendrier de publication et tone of voice cohérent avec la plateforme de marque, déclinés sur Instagram, LinkedIn, Facebook, TikTok et YouTube."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Management",
      subtitle: "Animation & modération quotidiennes",
      description: "Gestion quotidienne des communautés, modération des commentaires et messages, réponses sourcées et alignées sur la posture de marque, en français, arabe et darija."
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Communication corporate",
      subtitle: "Relations publiques & contenu institutionnel",
      description: "Prises de parole dirigeants, contenus RSE, communiqués, dossiers de presse et accompagnement éditorial pour les temps forts corporate, financiers ou institutionnels."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "E-réputation & veille",
      subtitle: "Monitoring 24/7 & e-listening",
      description: "Veille des mentions de marque, analyse de sentiment, détection des signaux faibles, reporting de réputation et recommandations correctives mensuelles."
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Gestion de crise",
      subtitle: "Cellule de réponse rapide",
      description: "Cellule activable 24/7 : qualification de la crise, élaboration des messages, séquencement des prises de parole, coordination avec la direction et les conseils juridiques."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Influence & advocacy",
      subtitle: "Activation créateurs & ambassadeurs",
      description: "Sélection d'influenceurs et créateurs marocains, briefs créatifs, négociation, pilotage des campagnes et mesure de la performance organique et payée."
    }
  ];

  const stats = [
    { number: "50+", label: "Marques accompagnées" },
    { number: "200+", label: "Dispositifs pilotés" },
    { number: "11 ans", label: "D'expérience" },
    { number: "24/7", label: "Veille e-réputation" }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Audit de présence",
      description: "Diagnostic complet de la présence sociale, benchmark concurrentiel, audit de réputation et cartographie des risques.",
      duration: "1-2 semaines",
      icon: <BarChart className="w-8 h-8" />
    },
    {
      number: "2",
      title: "Plateforme éditoriale",
      description: "Plateforme de marque sociale, lignes éditoriales, ton, formats et calendrier de publication trilingue.",
      duration: "2 semaines",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      number: "3",
      title: "Activation & community",
      description: "Production des contenus, publication, animation des communautés, modération et premières campagnes d'amplification.",
      duration: "En continu",
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      number: "4",
      title: "Veille & pilotage",
      description: "Veille e-réputation 24/7, reporting mensuel, alertes en temps réel et activation de la cellule de crise si nécessaire.",
      duration: "En continu",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const handleContact = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite échanger sur notre dispositif social media et e-réputation avec Link Agency.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Agence Social Media au Maroc — Community Management FR, AR, Darija | Link Agency"
        description="Agence social media au Maroc : community management, contenu créatif, Meta Ads, reporting trilingue FR, AR, Darija. PME, ETI et grands comptes. Casablanca, Rabat, Marrakech."
        keywords="agence social media maroc, community management casablanca, e-réputation maroc, gestion de crise digitale, communication corporate maroc"
        url="https://linkagency.ma/social-media"
        type="service"
        structuredData={schema}
      />
      <Header />

      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-emerald-50 via-blue-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-light mb-6 text-black leading-tight">
                Social Media, Communication &amp; E-réputation
              </h1>
              <h2 className="text-2xl font-light mb-8 text-gray-800">
                Pour les marques exposées au Maroc
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light">
                Community management, contenu créatif, campagnes Meta Ads et reporting trilingue FR, AR, Darija. De la PME qui démarre sa présence digitale à la marque établie qui veut professionnaliser sa communication. Fondateur senior sur chaque dossier à tout moment.
              </p>
              <Button
                onClick={handleContact}
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Échanger sur votre dispositif
              </Button>
            </div>

            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full flex items-center justify-center mx-auto relative">
                <MessageSquare className="w-32 h-32 text-emerald-700" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Shield className="w-12 h-12 text-blue-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Users className="w-10 h-10 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 lg:px-16 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-light mb-2 text-emerald-400">{stat.number}</div>
                <div className="text-gray-300 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">Nos expertises Social &amp; Réputation</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Six dispositifs pilotés en intégration pour protéger et amplifier votre marque
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <div className="text-emerald-700">{service.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light mb-2 text-black group-hover:text-emerald-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-800 mb-3">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkflowTimeline
        steps={workflowSteps}
        title="Notre méthodologie social &amp; e-réputation"
        subtitle="De l'audit à la veille permanente, un dispositif intégré"
      />

      <section className="py-16 px-8 lg:px-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Agence social media au Maroc — Casablanca, Rabat, Marrakech
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Link Agency gère la présence sociale des PME, ETI et grands comptes au Maroc. Community management, création de contenu, campagnes Meta Ads, Google Ads et reporting : nos équipes éditoriales et community managers, natifs francophones, arabophones et darija, opèrent sur Instagram, LinkedIn, Facebook, TikTok, X et YouTube. Nous concevons des plannings éditoriaux clairs, produisons du contenu créatif aligné sur votre marque, lançons des campagnes payantes mesurées, et vous livrons un reporting mensuel transparent. Pour les marques B2B comme B2C, dans les secteurs banque, assurance, retail, e-commerce, industrie, immobilier, food, tech, hôtellerie. Onboarding en 7 jours, contact direct avec le fondateur, aucun engagement long imposé.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-8">
            Une marque exposée mérite un dispositif sérieux
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Premier échange pour cartographier votre présence sociale, votre exposition réputationnelle et chiffrer un dispositif de pilotage trilingue.
          </p>
          <Button
            onClick={handleContact}
            className="bg-emerald-600 text-white hover:bg-emerald-700 px-12 py-6 text-lg transform hover:scale-105 transition-all duration-300"
          >
            Discuter sur WhatsApp
          </Button>
        </div>
      </section>

      <LocalCitiesLinks />

      <ServiceFAQ faqs={serviceFaqs["social-media"]} />

      <FloatingContactWidget />
    </div>
  );
};

export default SocialMedia;
