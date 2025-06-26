
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Smartphone, Video, Camera, Edit } from "lucide-react";
import { Link } from "react-router-dom";

const ContentDigital = () => {
  const contentServices = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Réseaux sociaux",
      description: "Création de contenu engageant pour toutes vos plateformes sociales."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Production vidéo",
      description: "Réalisation de vidéos professionnelles pour vos campagnes digitales."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photographie",
      description: "Shooting photo professionnel pour alimenter vos contenus."
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Rédaction web",
      description: "Création de contenus textuels optimisés pour le web."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-light mb-8 text-black leading-tight">
                Content Digital
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                Nous créons des contenus digitaux performants qui captivent votre audience et génèrent de l'engagement.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
                Créer vos contenus
              </Button>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-200 to-blue-200 h-32 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-12 h-12 text-green-600" />
                </div>
                <div className="bg-gradient-to-br from-blue-200 to-purple-200 h-32 rounded-lg flex items-center justify-center">
                  <Video className="w-12 h-12 text-blue-600" />
                </div>
                <div className="bg-gradient-to-br from-purple-200 to-pink-200 h-32 rounded-lg flex items-center justify-center">
                  <Camera className="w-12 h-12 text-purple-600" />
                </div>
                <div className="bg-gradient-to-br from-pink-200 to-red-200 h-32 rounded-lg flex items-center justify-center">
                  <Edit className="w-12 h-12 text-pink-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-black text-center">Nos services content digital</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {contentServices.map((service, index) => (
              <div key={index} className="bg-green-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
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

export default ContentDigital;
