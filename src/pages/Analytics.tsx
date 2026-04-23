import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, BarChart, Target, Zap, Users, Eye, ChevronRight, Star, CheckCircle, PieChart, Activity, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";

const Analytics = () => {
  const analyticsServices = [
    {
      icon: <BarChart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Analytics & Reporting",
      description: "Mesure et analyse complète de vos performances digitales.",
      details: "Tableaux de bord personnalisés, KPIs métier, rapports automatisés et insights actionnables pour optimiser vos résultats."
    },
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Growth Hacking",
      description: "Pilotage data-driven pour accélérer des dispositifs digitaux déjà en production.",
      details: "Expérimentations, tests A/B, optimisation du funnel de conversion et arbitrages continus pour améliorer ROI, ROAS et CPL."
    },
    {
      icon: <Eye className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Conversion Rate Optimization",
      description: "Optimisation continue des parcours et des taux de conversion.",
      details: "Analyse UX, tests multivariés, optimisation des parcours utilisateurs et amélioration mesurable de la rentabilité média."
    },
    {
      icon: <PieChart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Data Analytics",
      description: "Analyse approfondie de vos données pour des décisions éclairées.",
      details: "Collecte de données, segmentation avancée, modèles prédictifs et recommandations stratégiques."
    }
  ];

  const stats = [
    { number: "200+", label: "Projets pilotés", icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "50+", label: "Marques accompagnées", icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "15+", label: "Secteurs couverts", icon: <BarChart className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "8 ans", label: "Expérience terrain", icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  const advantages = [
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Croissance mesurable",
      description: "KPIs métier, tableaux de bord et arbitrages réguliers pour relier la donnée aux résultats business."
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Optimisation continue",
      description: "Optimisation continue des audiences, créatifs et parcours pour améliorer la rentabilité média."
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Pilotage senior",
      description: "Un pilotage expérimenté pour cadrer reporting, tracking et prise de décision marketing."
    },
    {
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Cadre de mesure clair",
      description: "Des indicateurs définis en amont pour suivre précisément contribution business, ROI et conversions."
    }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "Audit & Diagnostic",
      description: "Analyse complète de vos performances actuelles, identification des points d'amélioration et définition des KPIs stratégiques pour votre croissance.",
      duration: "1 semaine",
      icon: <Eye className="w-8 h-8" />
    },
    {
      number: "2",
      title: "Stratégie & Planning",
      description: "Élaboration d'une stratégie de croissance personnalisée avec roadmap détaillée, hypothèses à tester et objectifs mesurables.",
      duration: "1 semaine",
      icon: <Target className="w-8 h-8" />
    },
    {
      number: "3",
      title: "Implémentation & Tests",
      description: "Mise en place des outils d'analytics, lancement des expérimentations A/B et déploiement des premières optimisations.",
      duration: "2-3 semaines",
      icon: <Activity className="w-8 h-8" />
    },
    {
      number: "4",
      title: "Optimisation Continue",
      description: "Monitoring permanent, analyse des résultats, ajustements stratégiques et nouvelles expérimentations pour une croissance constante.",
      duration: "En continu",
      icon: <Calendar className="w-8 h-8" />
    }
  ];

  const handleContact = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite échanger sur un dispositif analytics et performance avec Link Agency.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Analytics & Performance Marketing Maroc | Link Agency"
        description="Agence analytics et performance marketing au Maroc : tableaux de bord, KPIs métier, A/B testing, optimisation des conversions et pilotage ROI pour marques établies à Casablanca."
        keywords="analytics maroc, performance marketing maroc, campagnes Meta Ads Maroc, optimisation conversion, KPI digital casablanca"
        url="https://linkagency.ma/analytics"
      />
      <Header />
      <FloatingContactWidget />
      
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 section-padding gradient-subtle relative overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 rounded-full animate-pulse-subtle"></div>
        <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full animate-float"></div>
        
        <div className="container-max relative z-10">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black smooth-hover mb-6 sm:mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="text-sm sm:text-base">Retour à l'accueil</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-up space-content">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-6 sm:mb-8 text-black leading-tight">
                Croissance
                <br />
                <span className="gradient-primary bg-clip-text text-transparent">& Analytics</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 font-light">
                Nous structurons les indicateurs, le reporting et les expérimentations qui permettent aux directions marketing de piloter leur performance digitale.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 font-light">
                De la lecture des données à l'optimisation des campagnes, nous relions vos investissements media à des résultats business mesurables.
              </p>
              <Button 
                onClick={handleContact}
                className="btn-primary text-base sm:text-lg"
              >
                Discuter de votre pilotage data
              </Button>
            </div>
            
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="gradient-primary h-24 sm:h-32 rounded-lg sm:rounded-xl flex items-center justify-center interactive-card">
                  <TrendingUp className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
                <div className="gradient-secondary h-24 sm:h-32 rounded-lg sm:rounded-xl flex items-center justify-center interactive-card">
                  <BarChart className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
                <div className="gradient-warm h-24 sm:h-32 rounded-lg sm:rounded-xl flex items-center justify-center interactive-card">
                  <Target className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
                <div className="gradient-accent h-24 sm:h-32 rounded-lg sm:rounded-xl flex items-center justify-center interactive-card">
                  <PieChart className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="card-modern">
                  <div className="text-indigo-600 mb-2 sm:mb-3 flex justify-center scale-hover">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-light text-black mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-light">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12 sm:mb-16 space-content">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-black">Nos services analytics & croissance</h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Un dispositif complet pour mesurer, arbitrer et optimiser la performance de marques déjà installées.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {analyticsServices.map((service, index) => (
              <div key={index} className="card-modern group">
                <div className="gradient-subtle w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-indigo-600 scale-hover">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 text-black group-hover:text-indigo-600 smooth-hover">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 font-light text-sm sm:text-base">
                  {service.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                  {service.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-subtle">
        <div className="container-max">
          <div className="text-center mb-12 sm:mb-16 space-content">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-black">Pourquoi Link Agency ?</h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Une lecture business de la donnée, pensée pour des équipes marketing exigeantes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="card-modern">
                  <div className="gradient-subtle w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-indigo-600 scale-hover">
                    {advantage.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-light mb-2 sm:mb-3 text-black group-hover:text-indigo-600 smooth-hover">
                    {advantage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkflowTimeline 
        steps={workflowSteps}
        title="Notre processus analytics & croissance"
        subtitle="Une méthodologie claire pour structurer vos KPIs, vos tests et vos arbitrages de performance"
      />

      <section className="section-padding gradient-primary">
        <div className="max-w-4xl mx-auto text-center space-content">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-white">
            Parlons de votre pilotage performance.
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8 font-light">
            Cartographions vos données, vos objectifs et vos priorités média pour construire un cadre de performance exploitable.
          </p>
          <Button 
            onClick={handleContact}
            className="bg-white text-black hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium interactive-button"
          >
            Échanger avec l'équipe
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Analytics;