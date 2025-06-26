
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users, MapPin, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const Evenementiel = () => {
  const eventServices = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Planification d'événements",
      description: "Organisation complète de vos événements, de la conception à la réalisation."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestion des invités",
      description: "Coordination des invitations et gestion de la liste des participants."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Sélection de lieux",
      description: "Recherche et sélection des lieux parfaits pour vos événements."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Production audiovisuelle",
      description: "Captation photo et vidéo professionnelle de vos événements."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-light mb-8 text-black leading-tight">
                Événementiel
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                Nous concevons et organisons des événements mémorables qui marquent les esprits et renforcent votre image de marque.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
                Planifier votre événement
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/4e5435ee-9057-449a-b988-b2ed164da3e1.png" 
                alt="Événementiel Services" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-black text-center">Nos services événementiels</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {eventServices.map((service, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
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

export default Evenementiel;
