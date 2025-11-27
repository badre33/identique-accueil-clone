import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb, Target, Users, TrendingUp, CheckCircle, FileText, Briefcase, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";
import { SEOHead } from "@/components/SEOHead";

const ConseilStrategique = () => {
  const consultingServices = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Audit & Diagnostic",
      subtitle: "Identifiez vos leviers de croissance",
      description: "Analyse complète de votre entreprise, votre marché et votre écosystème digital pour identifier les opportunités et axes d'amélioration stratégiques."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Stratégie Digitale",
      subtitle: "Définissez votre feuille de route",
      description: "Élaboration d'une stratégie digitale sur-mesure alignée avec vos objectifs business. Vision claire, objectifs SMART et plan d'action opérationnel."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accompagnement",
      subtitle: "Concrétisez votre vision",
      description: "Support continu dans la mise en œuvre de votre stratégie. Coaching des équipes, optimisation des processus et pilotage de la transformation digitale."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Formation Équipes",
      subtitle: "Montez en compétences",
      description: "Programmes de formation sur-mesure pour vos équipes : marketing digital, outils digitaux, méthodologies agiles et best practices du secteur."
    }
  ];

  const stats = [
    { number: "100+", label: "Entreprises accompagnées" },
    { number: "25M DH", label: "Croissance générée" },
    { number: "4.9/5", label: "Satisfaction clients" },
    { number: "85%", label: "Objectifs atteints" }
  ];

  const advantages = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expertise reconnue",
      description: "Des consultants seniors avec plus de 10 ans d'expérience"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Approche pragmatique",
      description: "Des recommandations actionnables et mesurables"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accompagnement personnalisé",
      description: "Un consultant dédié tout au long du projet"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Résultats garantis",
      description: "Engagement sur l'atteinte de vos objectifs"
    }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Diagnostic Stratégique",
      description: "Audit complet de votre organisation, analyse SWOT, étude de marché et identification des opportunités de croissance.",
      duration: "2-3 semaines",
      icon: <FileText className="w-8 h-8" />
    },
    {
      number: "2",
      title: "Élaboration Stratégie",
      description: "Co-construction de votre stratégie digitale avec vision, objectifs, KPIs et feuille de route détaillée sur 12-24 mois.",
      duration: "3-4 semaines",
      icon: <Target className="w-8 h-8" />
    },
    {
      number: "3",
      title: "Plan d'Action",
      description: "Définition des quick wins, priorisation des initiatives et création du plan d'exécution avec ressources et budgets.",
      duration: "2 semaines",
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      number: "4",
      title: "Accompagnement",
      description: "Suivi de la mise en œuvre, coaching des équipes, ajustements et optimisations continues pour garantir le succès.",
      duration: "6-12 mois",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const handleContact = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite bénéficier d'un conseil stratégique avec Link Agency.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Conseil Stratégique Digital | Agence Link Agency Maroc"
        description="Accompagnement personnalisé pour définir et atteindre vos objectifs business. Audit, stratégie digitale et formation équipes par notre cabinet conseil au Maroc."
        keywords="conseil stratégique maroc, consulting digital, stratégie digitale, transformation digitale, audit entreprise"
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
                Accélérez votre transformation digitale avec un accompagnement expert
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light">
                Nous vous aidons à définir et mettre en œuvre une stratégie digitale ambitieuse et réaliste pour atteindre vos objectifs de croissance.
              </p>
              <Button 
                onClick={handleContact}
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Parler à un consultant
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
              Un accompagnement complet pour réussir votre transformation
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
        subtitle="4 phases pour transformer votre stratégie en résultats"
      />

      {/* Why Choose Us Section */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 text-black">Pourquoi nous choisir ?</h2>
            <p className="text-xl text-gray-600 font-light">
              Notre expertise au service de votre réussite
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
            Prêt à accélérer votre croissance ?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Discutons de vos défis et construisons ensemble la stratégie qui fera décoller votre entreprise.
          </p>
          <Button 
            onClick={handleContact}
            className="bg-orange-600 text-white hover:bg-orange-700 px-12 py-6 text-lg transform hover:scale-105 transition-all duration-300"
          >
            Réserver un audit gratuit
          </Button>
        </div>
      </section>
      
      <FloatingContactWidget />
    </div>
  );
};

export default ConseilStrategique;
