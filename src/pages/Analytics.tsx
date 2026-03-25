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
      description: "Stratégies de croissance rapide basées sur la data.",
      details: "Expérimentations, tests A/B, optimisation du funnel de conversion et techniques de croissance innovantes."
    },
    {
      icon: <Eye className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Conversion Rate Optimization",
      description: "Amélioration continue de vos taux de conversion.",
      details: "Analyse UX, tests multivariés, optimisation des parcours utilisateur et maximisation de votre ROI."
    },
    {
      icon: <PieChart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Data Analytics",
      description: "Analyse approfondie de vos données pour des décisions éclairées.",
      details: "Collecte de données, segmentation avancée, modèles prédictifs et recommandations stratégiques."
    }
  ];

  const stats = [
    { number: "+150%", label: "Croissance moyenne", icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "95%", label: "Amélioration ROI", icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "50+", label: "Projets optimisés", icon: <BarChart className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  const advantages = [
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Croissance mesurable",
      description: "Stratégies basées sur la data pour une croissance sustainable et mesurable."
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Optimisation continue",
      description: "Tests et améliorations permanents pour maximiser vos performances."
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Expertise spécialisée",
      description: "Équipe d'experts en analytics et growth marketing à votre service."
    },
    {
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "ROI garanti",
      description: "Approche axée résultats avec garantie d'amélioration de votre retour sur investissement."
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
    const message = "Bonjour, je souhaite optimiser ma croissance avec Link Agency.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Analytics & Growth Hacking - Data & Performance | Link Agency Maroc"
        description="Services analytics, growth hacking et optimisation de conversion au Maroc. Tableaux de bord, KPIs, A/B testing et stratégies de croissance pour votre entreprise à Casablanca."
        keywords="analytics maroc, growth hacking casablanca, data marketing maroc, optimisation conversion, KPI digital maroc"
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
                Accélérez votre croissance grâce à l'analytics avancé et aux stratégies de growth hacking basées sur la data.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 font-light">
                De l'analyse de performance à l'optimisation continue, nous transformons vos données en leviers de croissance.
              </p>
              <Button 
                onClick={handleContact}
                className="btn-primary text-base sm:text-lg"
              >
                Booster votre croissance
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
              Une approche data-driven pour optimiser chaque aspect de votre performance digitale.
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-black">Pourquoi nous choisir ?</h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Notre expertise data au service de votre croissance.
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
        subtitle="Une méthodologie éprouvée pour transformer vos données en croissance mesurable"
      />

      <section className="section-padding gradient-primary">
        <div className="max-w-4xl mx-auto text-center space-content">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-white">
            Prêt à accélérer votre croissance ?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8 font-light">
            Transformons vos données en leviers de croissance avec des stratégies basées sur l'analytics.
          </p>
          <Button 
            onClick={handleContact}
            className="bg-white text-black hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium interactive-button"
          >
            Démarrer votre croissance
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Analytics;