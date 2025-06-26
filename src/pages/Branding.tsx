
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Palette, Target, Compass, LayoutDashboard, Search, Lightbulb, Rocket, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Branding = () => {
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

  const processSteps = [
    {
      number: "①",
      icon: <Search className="w-12 h-12" />,
      title: "Recherche",
      subtitle: "Comprendre avant de créer.",
      description: "Nous étudions votre marché, vos concurrents et vos utilisateurs pour identifier les véritables leviers d'impact. Cette phase d'immersion garantit la pertinence stratégique de nos recommandations.",
      color: "from-blue-50 to-blue-100",
      accent: "bg-blue-500"
    },
    {
      number: "②",
      icon: <Target className="w-12 h-12" />,
      title: "Stratégie",
      subtitle: "Structurer une marque qui dure.",
      description: "Nous construisons une architecture de marque claire, forte et alignée sur vos ambitions. Positionnement, vision, ton, ADN : chaque choix est guidé par une cohérence stratégique globale.",
      color: "from-purple-50 to-purple-100",
      accent: "bg-purple-500"
    },
    {
      number: "③",
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Création",
      subtitle: "Donner vie à votre identité.",
      description: "Nous traduisons votre stratégie en un univers visuel et narratif unique : logo, charte graphique, contenus, expérience. Chaque détail est pensé pour capter, engager et inspirer.",
      color: "from-orange-50 to-orange-100",
      accent: "bg-orange-500"
    },
    {
      number: "④",
      icon: <Rocket className="w-12 h-12" />,
      title: "Déploiement",
      subtitle: "Activer votre marque dans le réel.",
      description: "Nous accompagnons le lancement ou la refonte avec une mise en œuvre maîtrisée : kit de communication, stratégie digitale, contenu, événements. Votre marque prend vie, avec impact et élégance.",
      color: "from-green-50 to-green-100",
      accent: "bg-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
              <a 
                href="https://wa.me/3345010714" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
                  Parlons de votre vision
                </Button>
              </a>
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

      {/* Process Section */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-black to-gray-600 rounded-full opacity-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-8 text-black">Notre processus</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
              Notre méthode repose sur une approche sur-mesure, rigoureuse et créative, conçue pour transformer chaque marque en une référence inspirante et durable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Connection line for desktop */}
                {index < processSteps.length - 1 && index % 2 === 0 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2 z-0"></div>
                )}
                
                <div className={`relative bg-gradient-to-br ${step.color} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 backdrop-blur-sm`}>
                  {/* Number badge */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 ${step.accent} text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-gray-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-light mb-3 text-black group-hover:text-gray-800 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-800 font-medium mb-4 text-lg">
                    {step.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className={`absolute bottom-4 right-4 w-3 h-3 ${step.accent} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6 animate-pulse">
              <Zap className="w-8 h-8" />
            </div>
            <p className="text-lg text-gray-700 mb-6 font-light">
              Prêt à transformer votre marque ?
            </p>
            <a 
              href="https://wa.me/3345010714" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
                Échangeons ensemble
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branding;
