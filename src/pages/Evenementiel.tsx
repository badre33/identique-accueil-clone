
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Palette, Users, Music, Briefcase, Monitor, Camera, CheckCircle, Star } from "lucide-react";
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

  const advantages = [
    "Équipe créative expérimentée",
    "Gestion complète de A à Z", 
    "Respect des délais et budgets",
    "Solutions sur-mesure",
    "Couverture photo/vidéo incluse"
  ];

  const stats = [
    { number: "150+", label: "Événements organisés" },
    { number: "98%", label: "Clients satisfaits" },
    { number: "50+", label: "Partenaires de confiance" },
    { number: "24/7", label: "Support disponible" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Excellence événementielle
              </div>
              <h1 className="text-5xl lg:text-6xl font-light mb-8 text-black leading-tight">
                Événementiel
                <span className="block text-3xl lg:text-4xl text-gray-600 mt-2">d'exception</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                Nous concevons et organisons des événements mémorables qui marquent les esprits et renforcent votre image de marque. Chaque détail compte pour créer des expériences uniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/33745010714" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg hover-scale">
                    Parlons de votre événement
                  </Button>
                </a>
                <Button variant="outline" className="px-8 py-6 text-lg border-2 hover:bg-gray-50">
                  Voir nos réalisations
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl blur-xl opacity-20"></div>
              <img 
                src="/lovable-uploads/4e5435ee-9057-449a-b988-b2ed164da3e1.png" 
                alt="Événementiel Services" 
                className="relative w-full h-auto rounded-xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 lg:px-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">Nos services événementiels</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              De la conception à la réalisation, nous vous accompagnons à chaque étape pour créer des événements qui marquent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventServices.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-3 text-black group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-8 lg:px-16 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-8 text-black">Pourquoi nous choisir ?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre expertise et notre passion pour l'événementiel nous permettent de créer des expériences uniques et mémorables.
              </p>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-light mb-6 text-black">Prêt à créer votre événement ?</h3>
              <p className="text-gray-600 mb-6">
                Discutons de votre projet et transformons votre vision en réalité.
              </p>
              <a 
                href="https://wa.me/33745010714" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <Button className="w-full bg-black text-white hover:bg-gray-800 py-4 text-lg">
                  Contactez-nous maintenant
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Evenementiel;
