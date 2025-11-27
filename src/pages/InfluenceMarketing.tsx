import { Sparkles, Users, TrendingUp, Target, Award, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";

const InfluenceMarketing = () => {
  const influenceServices = [
    {
      icon: Users,
      title: "Identification d'Influenceurs",
      description: "Sélection d'influenceurs alignés avec vos valeurs et votre audience cible"
    },
    {
      icon: MessageCircle,
      title: "Gestion de Campagnes",
      description: "Coordination complète des collaborations et création de contenu authentique"
    },
    {
      icon: Target,
      title: "Stratégie d'Engagement",
      description: "Développement de stratégies pour maximiser l'engagement et la portée"
    },
    {
      icon: TrendingUp,
      title: "Analyse de Performance",
      description: "Suivi détaillé des KPIs et optimisation continue des campagnes"
    }
  ];

  const stats = [
    { value: "150+", label: "Influenceurs partenaires" },
    { value: "2.5M+", label: "Reach cumulé" },
    { value: "8.2%", label: "Taux d'engagement moyen" }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Audit & Stratégie",
      description: "Analyse de votre marque et définition des objectifs d'influence",
      icon: <Target className="w-8 h-8" />,
      duration: "1-2 semaines"
    },
    {
      number: "2",
      title: "Sélection d'Influenceurs",
      description: "Identification et qualification des créateurs de contenu pertinents",
      icon: <Users className="w-8 h-8" />,
      duration: "1 semaine"
    },
    {
      number: "3",
      title: "Négociation & Brief",
      description: "Gestion des partenariats et création de briefs créatifs",
      icon: <MessageCircle className="w-8 h-8" />,
      duration: "1 semaine"
    },
    {
      number: "4",
      title: "Activation & Suivi",
      description: "Lancement des campagnes et monitoring en temps réel",
      icon: <Sparkles className="w-8 h-8" />,
      duration: "2-4 semaines"
    },
    {
      number: "5",
      title: "Analyse & Optimisation",
      description: "Mesure des résultats et ajustements stratégiques",
      icon: <TrendingUp className="w-8 h-8" />,
      duration: "En continu"
    }
  ];

  const handleContact = () => {
    window.open('https://wa.me/212661782833?text=Bonjour, je souhaite en savoir plus sur vos services d\'influence marketing', '_blank');
  };

  return (
    <>
      <SEOHead 
        title="Influence Marketing | Link Agency"
        description="Amplifiez votre notoriété avec des stratégies d'influence marketing authentiques et impactantes. Collaboration avec des influenceurs qualifiés au Maroc."
        keywords="influence marketing, influenceurs maroc, marketing d'influence, collaboration influenceurs, campagne influence"
      />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-8 lg:px-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-fuchsia-50 to-transparent opacity-50"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600 tracking-wider uppercase">Influence Marketing</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Amplifiez Votre Notoriété
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Des stratégies d'influence authentiques qui connectent votre marque avec votre audience à travers des créateurs de contenu engagés.
            </p>
            <Button 
              onClick={handleContact}
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-6 text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Lancer une Campagne
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-fuchsia-50">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Nos Services d'Influence</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Une approche complète pour maximiser l'impact de vos campagnes d'influence
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {influenceServices.map((service, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-fuchsia-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Timeline */}
        <WorkflowTimeline steps={workflowSteps} />

        {/* CTA Section */}
        <section className="py-20 px-8 lg:px-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl font-bold mb-6">
              Prêt à Collaborer avec des Influenceurs ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Connectez-vous avec votre audience grâce à des partenariats authentiques et impactants
            </p>
            <Button 
              onClick={handleContact}
              className="bg-white text-purple-600 px-8 py-6 text-lg rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Commencer Maintenant
            </Button>
          </div>
        </section>

        <FloatingContactWidget />
      </div>
    </>
  );
};

export default InfluenceMarketing;