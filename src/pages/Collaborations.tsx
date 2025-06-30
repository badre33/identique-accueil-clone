import { Header } from "@/components/Header";
import { useState } from "react";
import { StatsSection } from "@/components/collaborations/StatsSection";
import { CategoryFilter } from "@/components/collaborations/CategoryFilter";
import { CollaborationCard } from "@/components/collaborations/CollaborationCard";
import { CTASection } from "@/components/collaborations/CTASection";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";

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
            
            <StatsSection />
          </div>

          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Collaborations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollaborations.map((collaboration, index) => (
              <CollaborationCard 
                key={index}
                collaboration={collaboration}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <FloatingContactWidget />
    </div>
  );
};

export default Collaborations;
