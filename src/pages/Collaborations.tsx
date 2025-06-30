
import { ExternalLink, Users, Award, Globe, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { useState } from "react";

const Collaborations = () => {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const collaborations = [
    {
      name: "Subway Maroc",
      url: "https://www.instagram.com/subwaymaroc/?hl=fr",
      category: "Restauration",
      logo: "/lovable-uploads/c66a2b50-92d9-4a9d-a394-09ff44b3d1b2.png",
      description: "Stratégie marketing digital et création de contenu pour la franchise de restauration rapide leader au Maroc.",
      year: "2023-2024",
      type: "Marketing Digital"
    },
    {
      name: "SGTM Immobilier",
      url: "https://sgtm-immobilier.com/fr/accueil/",
      category: "Immobilier",
      logo: "/lovable-uploads/a404ed81-6016-457c-b044-6027db20cf22.png",
      description: "Refonte complète de l'identité visuelle et développement web pour cette agence immobilière de prestige.",
      year: "2023",
      type: "Branding & Web"
    },
    {
      name: "Amoud",
      url: "https://www.amoud.ma/",
      category: "Commerce",
      logo: "/lovable-uploads/18500dfb-e7b6-4c75-8c7c-89fa212ee0a8.png",
      description: "Transformation digitale complète avec une nouvelle plateforme e-commerce et stratégie omnicanale.",
      year: "2023",
      type: "E-commerce"
    },
    {
      name: "Achibest Food",
      url: "https://www.instagram.com/achibest_food/?hl=fr",
      category: "Restauration",
      logo: "/lovable-uploads/632e64c5-bfb1-4507-b655-8fb324a8236f.png",
      description: "Création d'une identité de marque forte et stratégie de communication pour cette chaîne de restauration.",
      year: "2024",
      type: "Branding"
    },
    {
      name: "French Tech",
      url: "#",
      category: "Tech",
      logo: "/lovable-uploads/801816e7-97bc-49c9-948c-34e3c9d49e1f.png",
      description: "Partenaire officiel de l'écosystème French Tech pour l'accompagnement des startups marocaines.",
      year: "2022-2024",
      type: "Partenariat"
    },
    {
      name: "The Family",
      url: "https://www.thefamily.co/",
      category: "Startup Studio",
      logo: "/lovable-uploads/ae1bb8f8-ff5a-4b2d-8a17-aacf539b492a.png",
      description: "Collaboration stratégique avec ce startup studio européen pour l'expansion sur le marché africain.",
      year: "2023",
      type: "Conseil Stratégique"
    },
    {
      name: "Soulection",
      url: "https://soulection.com/",
      category: "Musique",
      logo: "/lovable-uploads/b8c1c54b-9721-486c-81ab-dae0977cacc0.png",
      description: "Production d'événements exclusifs et stratégie de marque pour ce collectif musical international.",
      year: "2023-2024",
      type: "Événementiel"
    },
    {
      name: "Artitenium",
      url: "https://kzmfwv89vwbj1uf8kcxa.lite.vusercontent.net/",
      category: "Architecture d'intérieur",
      logo: "/lovable-uploads/ce7e28cc-c15c-48b9-b9be-03195d92927f.png",
      description: "Développement de l'identité visuelle et présence digitale pour ce studio d'architecture d'intérieur.",
      year: "2024",
      type: "Branding & Digital"
    },
    {
      name: "DWP",
      url: "https://dwp.ma/",
      category: "Design d'intérieur",
      logo: "/lovable-uploads/b800af93-e21f-4e18-af4d-9f94678f2999.png",
      description: "Création d'une stratégie de communication premium pour cette agence de design d'intérieur de luxe.",
      year: "2023",
      type: "Communication"
    },
    {
      name: "Focus M",
      url: "https://focusm.ma/",
      category: "Écrans interactifs tactiles",
      logo: "/lovable-uploads/db939411-f619-4958-844f-cb5d9d97a9ca.png",
      description: "Positionnement marché et stratégie commerciale pour cette entreprise tech spécialisée.",
      year: "2024",
      type: "Stratégie"
    },
    {
      name: "Secret Events",
      url: "https://www.instagram.com/secreteventss/",
      category: "Événementiel",
      logo: "/lovable-uploads/386ddb83-a99a-4280-8cec-8c6aea34644a.png",
      description: "Production d'événements privés haut de gamme et gestion de l'image de marque exclusive.",
      year: "2023-2024",
      type: "Production"
    },
    {
      name: "Umbra Festival",
      url: "https://www.instagram.com/umbra.dance/",
      category: "Événementiel",
      logo: "/lovable-uploads/05dcf8f9-c5f0-40af-8ca3-4b1d2d1f48bc.png",
      description: "Direction artistique et production complète de ce festival de musique électronique underground.",
      year: "2023",
      type: "Festival"
    },
    {
      name: "Beyond Fears",
      url: "https://www.instagram.com/beyond__fears/?hl=fr",
      category: "Événementiel",
      logo: "/lovable-uploads/f90f2ce2-2e95-4f15-9766-0ad4ed8561a8.png",
      description: "Concept créatif et production d'événements immersifs axés sur l'expérience utilisateur.",
      year: "2024",
      type: "Expérience"
    },
    {
      name: "Casablanca Music Week",
      url: "https://guichet.com/ma-fr/event/producer/casablanca-music-week",
      category: "Événementiel",
      logo: "/lovable-uploads/196f8a91-ab64-4dc6-9354-6fe7d9f3031e.png",
      description: "Partenaire officiel de la plus grande semaine musicale du Maroc avec plus de 50 000 participants.",
      year: "2022-2024",
      type: "Festival"
    },
    {
      name: "Mom Corporation",
      url: "#",
      category: "Événement, Design & Marketing",
      logo: "/lovable-uploads/0175fb15-d9a3-4f83-afbc-0486d21505f9.png",
      description: "Agence créative spécialisée dans les expériences de marque immersives et l'événementiel de luxe.",
      year: "2023",
      type: "Créatif"
    },
    {
      name: "OK Daddy",
      url: "#",
      category: "Événementiel",
      logo: "/lovable-uploads/1d79743a-6078-4a50-b98c-fabf537de013.png",
      description: "Concept événementiel innovant mêlant gastronomie, musique et expériences sensorielles uniques.",
      year: "2024",
      type: "Concept"
    },
    {
      name: "Épicerie Bordelaise",
      url: "#",
      category: "Restauration & Conférences musicales",
      logo: "/lovable-uploads/4708f307-8187-48cb-b276-b1b4c356c679.png",
      description: "Lieu culturel hybride proposant une expérience gastronomique et musicale authentique.",
      year: "2023-2024",
      type: "Concept Store"
    },
    {
      name: "Edwin",
      url: "https://edwin-europe.com/fr-fr/?srsltid=AfmBOoozm7D36im7r3_ZLIY46gmE5v6R9kdcNLMgPcrQBUf0TIzU2Ysh",
      category: "Mode",
      logo: "/lovable-uploads/f08a883a-31aa-4529-bf02-a1c73a030a71.png",
      description: "Stratégie de repositionnement et campagne de communication pour cette marque de mode iconique.",
      year: "2024",
      type: "Fashion"
    }
  ];

  const categories = ["Toutes", "Restauration", "Immobilier", "Commerce", "Tech", "Startup Studio", "Musique", "Architecture d'intérieur", "Design d'intérieur", "Écrans interactifs tactiles", "Événementiel", "Mode"];

  const filteredCollaborations = selectedCategory === "Toutes" 
    ? collaborations 
    : collaborations.filter(collab => collab.category === selectedCategory);

  const stats = [
    { icon: Users, number: "18+", label: "Collaborations actives" },
    { icon: Award, number: "50+", label: "Projets réalisés" },
    { icon: Globe, number: "3", label: "Pays d'intervention" },
    { icon: Zap, number: "95%", label: "Taux de satisfaction" }
  ];

  const getLogoClasses = (name: string) => {
    // Logos qui ont besoin d'être réduits pour s'harmoniser
    if (name === "Achibest Food" || name === "DWP" || name === "Focus M") {
      return "max-h-6 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity";
    }
    return "max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-light mb-8 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black animate-fade-in">
              Nos collaborations
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              Des partenariats stratégiques qui transforment les marques et créent des expériences inoubliables.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-4 flex justify-center">
                    <stat.icon className="w-8 h-8 text-black group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-light text-black mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-black text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Collaborations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollaborations.map((collaboration, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    {collaboration.logo && (
                      <div className="mb-4 flex items-center justify-center h-12">
                        <img 
                          src={collaboration.logo} 
                          alt={`${collaboration.name} logo`}
                          className={getLogoClasses(collaboration.name)}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-gray-800 transition-colors">
                      {collaboration.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {collaboration.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                        {collaboration.category}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {collaboration.year}
                      </span>
                    </div>
                    <div className="inline-block px-3 py-1 text-xs font-medium bg-black text-white rounded-full">
                      {collaboration.type}
                    </div>
                  </div>
                  {collaboration.url !== "#" && (
                    <a 
                      href={collaboration.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 p-3 hover:bg-gray-100 rounded-full hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-600" />
                    </a>
                  )}
                </div>
                
                <div className="h-1 bg-gradient-to-r from-black to-gray-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 lg:px-16 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-8 text-white">
            Rejoignez nos collaborations d'exception
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            Nous sélectionnons nos partenaires avec soin pour créer ensemble des projets qui marquent les esprits et transforment les industries.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-light text-white mb-2">Stratégie</div>
              <div className="text-gray-400 text-sm">Positionnement & Vision</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-white mb-2">Création</div>
              <div className="text-gray-400 text-sm">Design & Contenu</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-white mb-2">Impact</div>
              <div className="text-gray-400 text-sm">Résultats & Growth</div>
            </div>
          </div>
          
          <a 
            href="https://wa.me/33745010714?text=Bonjour%2C%20j'aimerais%20découvrir%20vos%20références%20et%20échanger%20sur%20mon%20projet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 bg-white text-black px-10 py-5 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg font-medium hover:scale-105 hover:shadow-2xl group"
          >
            <span>Démarrer une collaboration</span>
            <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Collaborations;
