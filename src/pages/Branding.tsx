
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Palette, Target, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Branding = () => {
  const brandingServices = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Identité visuelle",
      description: "Création de logos, chartes graphiques et éléments visuels cohérents pour votre marque."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Positionnement",
      description: "Définition de votre positionnement unique sur le marché et de votre proposition de valeur."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Stratégie de marque",
      description: "Développement d'une stratégie complète pour construire et développer votre marque."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Brand guidelines",
      description: "Création de guides complets pour maintenir la cohérence de votre marque."
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
                Nous créons des identités de marque fortes et mémorables qui résonnent avec votre audience et se démarquent sur le marché.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
                Démarrer votre projet
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
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-8 lg:px-16 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-16">Notre processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Recherche', 'Stratégie', 'Création', 'Déploiement'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-xl font-light">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branding;
