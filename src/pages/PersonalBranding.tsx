
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Star, MessageCircle, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const PersonalBranding = () => {
  const personalServices = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Identité personnelle",
      description: "Développement de votre image personnelle et professionnelle unique."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Positionnement expert",
      description: "Établissement de votre expertise et crédibilité dans votre domaine."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Communication digitale",
      description: "Stratégie de communication sur les réseaux sociaux et plateformes digitales."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Développement d'audience",
      description: "Croissance et engagement de votre communauté en ligne."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-light mb-8 text-black leading-tight">
                Personal Branding
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                Construisez une marque personnelle forte qui vous démarque et vous positionne comme un expert dans votre domaine.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
                Développer votre marque
              </Button>
            </div>
            
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center mx-auto">
                <User className="w-32 h-32 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-black text-center">Nos services personal branding</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {personalServices.map((service, index) => (
              <div key={index} className="bg-purple-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
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
    </div>
  );
};

export default PersonalBranding;
