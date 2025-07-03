
import { ExternalLink } from "lucide-react";

export const Collaborations = () => {
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
    // {
    //   name: "Amoud",
    //   url: "https://www.amoud.ma/",
    //   category: "Commerce",
    //   logo: "/lovable-uploads/18500dfb-e7b6-4c75-8c7c-89fa212ee0a8.png",
    //   description: "Transformation digitale complète avec une nouvelle plateforme e-commerce et stratégie omnicanale.",
    //   year: "2023",
    //   type: "E-commerce"
    // },
    {
      name: "Nexia",
      url: "https://nexia.ma/",
      category: "Conseil",
      logo: "/lovable-uploads/05dfc79f-2a20-4241-aa4d-606f6cdd30d2.png",
      description: "Accompagnement stratégique en digitalisation, conseil en communication et gestion des réseaux sociaux pour optimiser la présence digitale.",
      year: "2024",
      type: "Conseil & Digitalisation"
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
      category: "Digital",
      logo: "/lovable-uploads/ce7e28cc-c15c-48b9-b9be-03195d92927f.png",
      description: "Développement de l'identité visuelle et présence digitale pour ce studio d'architecture d'intérieur.",
      year: "2024",
      type: "Branding & Digital"
    },
    {
      name: "DWP",
      url: "https://dwp.ma/",
      category: "Digital",
      logo: "/lovable-uploads/b800af93-e21f-4e18-af4d-9f94678f2999.png",
      description: "Création d'une stratégie de communication premium pour cette agence de design d'intérieur de luxe.",
      year: "2023",
      type: "Communication"
    },
    {
      name: "Focus M",
      url: "https://focusm.ma/",
      category: "Marketing",
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
      name: "Edwin",
      url: "https://edwin-europe.com/fr-fr/?srsltid=AfmBOoozm7D36im7r3_ZLIY46gmE5v6R9kdcNLMgPcrQBUf0TIzU2Ysh",
      category: "Mode",
      logo: "/lovable-uploads/f08a883a-31aa-4529-bf02-a1c73a030a71.png",
      description: "Stratégie de repositionnement et campagne de communication pour cette marque de mode iconique.",
      year: "2024",
      type: "Fashion"
    }
  ];

  const categories = ["Restauration", "Immobilier", "Commerce", "Tech", "Startup Studio", "Musique", "Digital", "Marketing", "Événementiel", "Conseil", "Mode"];

  return (
    <section className="py-32 px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black">
            Nos collaborations
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
            Des marques qui nous font confiance, des projets qui marquent les esprits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {collaborations.map((collaboration, index) => (
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
                        className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
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
                  <div className="inline-block px-3 py-1 text-xs font-medium bg-black text-white rounded-full mb-4">
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

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 font-light mb-8">
            Secteurs d'expertise : {categories.slice(0, 5).join(", ")} et plus encore.
          </p>
          <a 
            href="https://wa.me/33745010714?text=Bonjour%2C%20j'aimerais%20découvrir%20vos%20références%20et%20échanger%20sur%20mon%20projet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 text-lg font-medium hover:scale-105 hover:shadow-2xl"
          >
            <span>Rejoindre nos collaborations</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
