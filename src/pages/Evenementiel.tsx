
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Palette, Users, Music, Briefcase, Monitor, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const Evenementiel = () => {
  const eventServices = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Conception & Direction Artistique",
      description: "Nous imaginons des concepts événementiels uniques, en cohérence avec votre image de marque et vos objectifs. Notre équipe créative conçoit chaque détail visuel et narratif pour offrir une expérience immersive et cohérente : scénographie, ambiance, identité visuelle, storytelling, tout est pensé pour capter l'attention et laisser une empreinte."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Production & Logistique Événementielle",
      description: "Nous assurons l'organisation complète de votre événement, du repérage des lieux à la coordination des équipes sur le terrain. Notre expertise couvre les aspects techniques, réglementaires et logistiques, pour garantir une exécution fluide et sans imprévu, dans le respect des délais et du budget."
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Événements Musicaux & Techniques de Scène",
      description: "Nous organisons des événements musicaux allant du showcase privé au festival de grande envergure. Nos équipes techniques gèrent la mise en place de scènes, la sonorisation, les lumières, la régie, les effets spéciaux et la coordination des artistes. L'expérience musicale est conçue pour être à la fois maîtrisée et percutante."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Gestion des Événements Professionnels",
      description: "Nous accompagnons les entreprises dans la création de leurs temps forts : conférences, séminaires, lancements de produit, inaugurations… Chaque événement est conçu comme un outil stratégique de communication, avec un déroulé précis, une organisation rigoureuse et une mise en scène impactante."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Événements Hybrides & Diffusion Digitale",
      description: "Nous concevons et produisons des événements hybrides ou 100% digitaux. Captation, streaming, diffusion multi-plateformes, interactions en temps réel… Nos solutions digitales permettent d'élargir votre audience, tout en maintenant un haut niveau d'engagement et de qualité visuelle."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Communication Événementielle & Contenu",
      description: "Nous créons l'ensemble des supports visuels et outils de communication liés à l'événement : identité graphique, visuels réseaux sociaux, teasers vidéo, landing page ou système d'invitation en ligne. Nous assurons également la couverture photo/vidéo pendant l'événement pour valoriser l'impact de vos actions."
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
              <a 
                href="https://wa.me/33745010714" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
                  Parlons de votre événement
                </Button>
              </a>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventServices.map((service, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-black mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-light mb-4 text-black">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Evenementiel;
