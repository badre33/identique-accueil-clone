
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Palette, Target, Compass, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

const Branding = () => {
  const brandingServices = [
    {
      icon: <Palette className="w-8 h-8" />,
      emoji: "🎨",
      title: "Identité visuelle",
      subtitle: "Créez une signature visuelle unique et reconnaissable.",
      description: "Nous concevons des logos, chartes graphiques, palettes de couleurs, typographies et éléments iconographiques qui traduisent vos valeurs, votre ambition et votre style. Une identité pensée pour durer."
    },
    {
      icon: <Target className="w-8 h-8" />,
      emoji: "🎯",
      title: "Positionnement",
      subtitle: "Affirmez votre différence sur le marché.",
      description: "Nous vous aidons à clarifier votre promesse de marque, à structurer votre proposition de valeur et à identifier les leviers différenciateurs qui créeront l'adhésion auprès de vos cibles."
    },
    {
      icon: <Compass className="w-8 h-8" />,
      emoji: "🧭",
      title: "Stratégie de marque",
      subtitle: "Bâtissez une fondation stratégique solide.",
      description: "Nous structurons votre territoire de marque à travers une vision claire, un storytelling cohérent et une stratégie de développement qui aligne identité, ambition et marché."
    },
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      emoji: "📐",
      title: "Brand Guidelines",
      subtitle: "Assurez la cohérence de votre image dans le temps.",
      description: "Nous créons des guides complets et sur mesure (guidelines de marque) pour garantir une application fidèle de votre identité visuelle et éditoriale, en interne comme en externe."
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
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{service.emoji}</span>
                  <div className="text-black">
                    {service.icon}
                  </div>
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
