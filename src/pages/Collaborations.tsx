import { Header } from "@/components/Header";
import { useState } from "react";
import { StatsSection } from "@/components/collaborations/StatsSection";
import { CategoryFilter } from "@/components/collaborations/CategoryFilter";
import { CollaborationCard } from "@/components/collaborations/CollaborationCard";
import { CollaborationDetailsModal } from "@/components/collaborations/CollaborationDetailsModal";
import { CTASection } from "@/components/collaborations/CTASection";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { SEOHead } from "@/components/SEOHead";
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/utils/structuredData";

const Collaborations = () => {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [selectedCollaboration, setSelectedCollaboration] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const collaborationsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateWebPageSchema(
        "Nos Collaborations & Projets - Portfolio | Link Agency Maroc",
        "Portfolio Link Agency : 200+ projets réalisés pour Attijariwafa Bank, AXA, RMA, Subway, YouCan, Nova Spacia, OCB et plus de 50 marques au Maroc.",
        "https://linkagency.ma/collaborations"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Collaborations", url: "https://linkagency.ma/collaborations" }
      ])
    ]
  };

  const collaborations = [
    {
      name: "L'Bankalik par Attijariwafa Bank",
      url: "#",
      category: "Banque",
      logo: "/lovable-uploads/lbankalik-logo.png",
      description: "Stratégie éditoriale institutionnelle, contenus pédagogiques bilingues FR/AR, community management et pilotage Meta Ads pour des objectifs de notoriété, lead generation et conversion.",
      year: "2025",
      type: "Social Media & Ads"
    },
    {
      name: "AXA Assurance Maroc",
      url: "#",
      category: "Assurance",
      logo: "/lovable-uploads/axa-logo.png",
      description: "Contenus institutionnels, motion design produit, community management quotidien et campagnes Meta Ads avec A/B testing créatif pour optimiser le CPL.",
      year: "2025",
      type: "Contenu & Performance"
    },
    {
      name: "RMA",
      url: "#",
      category: "Assurance",
      logo: "/lovable-uploads/rma-logo.jpg",
      description: "Production de contenus institutionnels, Reels de sensibilisation, campagnes de renouvellement et rédaction bilingue FR/AR pour les temps forts de la marque.",
      year: "2025",
      type: "Social Media"
    },
    {
      name: "Oncovita",
      url: "#",
      category: "Santé & Bien-être",
      logo: "/lovable-uploads/oncovita-logo.jpeg",
      description: "Association dédiée à l'accompagnement holistique des patients atteints de cancer : soigner le corps, apaiser l'esprit, nourrir l'espoir. Création d'identité visuelle et stratégie de communication émotionnelle.",
      year: "2025",
      type: "Branding & Communication"
    },
    {
      name: "YouCan",
      url: "#",
      category: "E-commerce",
      logo: "/lovable-uploads/youcan-logo.png",
      description: "Accompagnement éditorial et performance pour une plateforme e-commerce marocaine en forte croissance, avec des contenus orientés acquisition et conversion.",
      year: "2024",
      type: "Performance & Contenu"
    },
    {
      name: "Personal Branding Politique",
      url: "#",
      category: "Branding Personnel",
      logo: "/lovable-uploads/18825dfb-531b-4f17-aef9-00701ced882e.png",
      description: "Accompagnement stratégique sur une mission de personal branding à fort enjeu pour renforcer l'image d'une dirigeante politique influente sur la scène internationale.",
      year: "2024",
      type: "Personal Branding"
    },
    {
      name: "Subway Maroc",
      url: "https://www.instagram.com/subwaymaroc/?hl=fr",
      category: "Restauration",
      logo: "/lovable-uploads/c66a2b50-92d9-4a9d-a394-09ff44b3d1b2.png",
      description: "Présence digitale complète : ligne éditoriale, création de posts, community management, campagnes awareness et drive-to-store géolocalisées, supports offline et activations en restaurant.",
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
      name: "La Maison Amoud",
      url: "https://www.amoud.ma/",
      category: "Retail",
      logo: "/lovable-uploads/18500dfb-e7b6-4c75-8c7c-89fa212ee0a8.png",
      description: "Dispositifs de contenu et activations de marque pour une enseigne emblématique du retail premium au Maroc.",
      year: "2024",
      type: "Retail & Brand Content"
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
      description: "Stratégie éditoriale B2B, visuels premium, contenus pédagogiques et campagnes Meta Ads ciblées sur dirigeants, DRH et architectes d'intérieur.",
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
      name: "OCB Maroc",
      url: "#",
      category: "Tabac & Lifestyle",
      logo: "/lovable-uploads/ocb-logo.png",
      description: "Gestion complète des réseaux sociaux pour OCB Maroc : stratégie de contenu, campagnes publicitaires, stratégie de partenariats avec des événements et artistes pour renforcer le positionnement de la marque.",
      year: "2025",
      type: "Social Media & Ads"
    },
    {
      name: "Edwin",
      url: "https://edwin-europe.com/fr-fr/?srsltid=AfmBOoozm7D36im7r3_ZLIY46gmE5v6R9kdcNLMgPcrQBUf0TIzU2Ysh",
      category: "Mode",
      logo: "/lovable-uploads/f08a883a-31aa-4529-bf02-a1c73a030a71.png",
      description: "Stratégie de repositionnement et campagne de communication pour cette marque de mode iconique.",
      year: "2024",
      type: "Fashion"
    },
    // ─── Comptes accompagnés par les membres de l'équipe Link Agency
    // (missions menées dans leurs fonctions actuelles ou précédentes — source : dossier technique)
    {
      name: "Attijari Wafabank",
      url: "#",
      category: "Banque",
      logo: "/brands/attijari-wafabank.png",
      description: "Stratégie de marque, direction artistique et community management. Mission menée par le pôle Direction Artistique & Community Management de Link Agency.",
      year: "Référence équipe",
      type: "Brand & Social"
    },
    {
      name: "Wafasalaf",
      url: "#",
      category: "Finance",
      logo: "/brands/wafasalaf.png",
      description: "Direction artistique, social media et production de contenus financiers. Mission menée par le pôle Direction Artistique & Community Management de Link Agency.",
      year: "Référence équipe",
      type: "Brand & Social"
    },
    {
      name: "Fondation Al Mada",
      url: "#",
      category: "Institutionnel",
      logo: "/brands/fondation-al-mada.webp",
      description: "Stratégie éditoriale et communication corporate institutionnelle. Mission menée par le pôle Stratégie éditoriale & E-réputation de Link Agency.",
      year: "Référence équipe",
      type: "Corporate"
    },
    {
      name: "Orange Maroc",
      url: "#",
      category: "Télécoms",
      logo: "/brands/orange-maroc.png",
      description: "Initiative Digital — pilotage cross-plateforme performance et branding (DV360, Meta, Google Ads). Mission menée par le pôle Trading Desk & Programmatique de Link Agency.",
      year: "Référence équipe",
      type: "Performance & Trading"
    },
    {
      name: "Safran",
      url: "#",
      category: "Industrie",
      logo: "/brands/safran.png",
      description: "Stratégie de marque et communication corporate. Référence pilotée par Badreddine Harkaoui (fondateur Link Agency, ex-Nexia Morocco).",
      year: "Référence équipe",
      type: "Corporate"
    },
    {
      name: "Honda Motor — Tokyo Days 2025",
      url: "#",
      category: "Automobile",
      logo: "/brands/honda-motor.png",
      description: "Campagne nationale Tokyo Days 2025 — CTR 3,10% / CPL 4,10 DH. Mission menée par le pôle Paid Social & Acquisition de Link Agency.",
      year: "2025",
      type: "Paid Media"
    },
    {
      name: "Ford",
      url: "#",
      category: "Automobile",
      logo: "/brands/ford.png",
      description: "Direction artistique et social media. Mission menée par le pôle Direction Artistique & Community Management de Link Agency.",
      year: "Référence équipe",
      type: "Brand & Social"
    },
    {
      name: "Pharma 5",
      url: "#",
      category: "Santé & Bien-être",
      logo: "/brands/pharma-5.png",
      description: "Stratégies B2B et B2C multicanal — Google Ads et Meta Ads. Mission menée par le pôle Paid Social & Acquisition de Link Agency.",
      year: "Référence équipe",
      type: "Performance"
    },
    {
      name: "Mutandis Group",
      url: "#",
      category: "Industrie",
      logo: "/brands/mutandis.png",
      description: "Stratégies déployées sur Google Ads et Meta Ads pour les marques du groupe. Mission menée par le pôle Paid Social & Acquisition de Link Agency.",
      year: "Référence équipe",
      type: "Performance"
    },
    {
      name: "Aiguebelle",
      url: "#",
      category: "Agroalimentaire",
      logo: "/brands/aiguebelle.svg",
      description: "Campagnes performance et activation de marque. Mission menée par le pôle Paid Social & Acquisition de Link Agency.",
      year: "Référence équipe",
      type: "Performance"
    },
    {
      name: "Barid Al-Maghrib / Al Barid Bank",
      url: "#",
      category: "Banque",
      logo: "/brands/al-barid-bank.png",
      description: "Lead generation, optimisation CPL/CTR/conversion sur l'ensemble des leviers paid. Mission menée par le pôle Trading Desk & Programmatique de Link Agency.",
      year: "Référence équipe",
      type: "Lead Gen & Trading"
    },
    {
      name: "Aéroports du Maroc",
      url: "#",
      category: "Institutionnel",
      logo: "/brands/aeroports-du-maroc.png",
      description: "Campagnes reach et trafic qualifié sur dispositifs cross-plateforme. Mission menée par le pôle Trading Desk & Programmatique de Link Agency.",
      year: "Référence équipe",
      type: "Reach & Brand"
    },
    {
      name: "Allianz",
      url: "#",
      category: "Assurance",
      logo: "/brands/allianz.png",
      description: "Stratégie de communication et conformité réglementaire BAM. Référence pilotée par Badreddine Harkaoui (fondateur Link Agency, ex-Nexia Morocco).",
      year: "Référence équipe",
      type: "Brand Strategy"
    },
    {
      name: "Arab Bank",
      url: "#",
      category: "Banque",
      logo: "/brands/arab-bank.png",
      description: "Stratégie digitale et positionnement institutionnel. Référence pilotée par Badreddine Harkaoui (fondateur Link Agency, ex-Nexia Morocco).",
      year: "Référence équipe",
      type: "Strategy"
    },
    {
      name: "Wafa Assurance",
      url: "#",
      category: "Assurance",
      logo: "/brands/wafa-assurance.png",
      description: "Stratégie de marque et accompagnement digital. Référence pilotée par Badreddine Harkaoui (fondateur Link Agency, ex-Nexia Morocco).",
      year: "Référence équipe",
      type: "Strategy"
    },
    {
      name: "Dekra",
      url: "#",
      category: "Industrie",
      logo: "/brands/dekra.png",
      description: "Refonte du discours de marque et structuration de partenariats stratégiques. Référence pilotée par Badreddine Harkaoui (fondateur Link Agency, ex-Nexia Morocco).",
      year: "Référence équipe",
      type: "Brand Strategy"
    },
    {
      name: "OCP",
      url: "#",
      category: "Industrie",
      logo: "/brands/ocp.svg",
      description: "Communication corporate et institutionnelle pour le leader mondial des phosphates. Référence pilotée par Badreddine Harkaoui (fondateur Link Agency, ex-Nexia Morocco).",
      year: "Référence équipe",
      type: "Corporate Communication"
    },
    {
      name: "OCP Africa",
      url: "#",
      category: "Industrie",
      logo: "/brands/ocp-africa.svg",
      description: "Stratégie de positionnement pan-africain. Communication B2B et content stratégique pour les marchés africains.",
      year: "Référence équipe",
      type: "Brand Strategy"
    },
    {
      name: "CDG",
      url: "#",
      category: "Finance",
      logo: "/brands/cdg.svg",
      description: "Caisse de Dépôt et de Gestion — communication institutionnelle. Référence pilotée par Badreddine Harkaoui (fondateur Link Agency, ex-Nexia Morocco). Partenariat avec 212 Founders (CDG Invest).",
      year: "Référence équipe",
      type: "Corporate Communication"
    },
    {
      name: "AMDIE",
      url: "#",
      category: "Institutionnel",
      logo: "/brands/amdie.svg",
      description: "Agence Marocaine de Développement des Investissements et des Exportations — positionnement international et campagnes d'attractivité économique.",
      year: "Référence équipe",
      type: "Institutional Strategy"
    },
    {
      name: "Oncovita",
      url: "#",
      category: "Santé & Bien-être",
      logo: "/brands/oncovita.svg",
      description: "Positionnement de marque et stratégie de contenu pour acteur santé spécialisé en oncologie.",
      year: "Référence équipe",
      type: "Brand Strategy"
    },
    {
      name: "Brainlyne (US)",
      url: "#",
      category: "Tech B2B",
      logo: "/brands/brainlyne.png",
      description: "+60% de croissance organique sur 12 mois — pipeline éditorial industrialisé. Mission menée par le pôle Stratégie éditoriale & E-réputation de Link Agency.",
      year: "2024-2025",
      type: "SEO & Contenu"
    }
  ];

  const categories = ["Toutes", "Banque", "Finance", "Assurance", "Télécoms", "Industrie", "Automobile", "Tech B2B", "Institutionnel", "Restauration", "Retail", "E-commerce", "Santé & Bien-être", "Agroalimentaire", "Architecture d'intérieur", "Conseil", "Événementiel", "Tabac & Lifestyle", "Mode", "Branding Personnel", "Immobilier", "Écrans interactifs tactiles"];

  const filteredCollaborations = selectedCategory === "Toutes" 
    ? collaborations 
    : collaborations.filter(collab => collab.category === selectedCategory);

  const handleCollaborationClick = (collaboration) => {
    setSelectedCollaboration(collaboration);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Portfolio Link Agency - Marques établies au Maroc"
        description="Portfolio Link Agency : 200+ projets réalisés pour Attijariwafa Bank, AXA, RMA, Subway, YouCan, Nova Spacia, OCB et plus de 50 marques au Maroc."
        keywords="portfolio agence digitale maroc, collaborations marques établies, community management casablanca, campagnes Meta Ads Maroc"
        url="https://linkagency.ma/collaborations"
        structuredData={collaborationsSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-light mb-8 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black animate-fade-in">
              Des dispositifs en production,
              <span className="block">pour des marques qui comptent.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              50+ clients accompagnés. 200+ projets réalisés. 15+ secteurs couverts. Une sélection de références qui documente notre track record sur des dispositifs éditoriaux, publicitaires et corporate à fort enjeu.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                "Attijari Wafabank", "Wafasalaf", "AXA Assurance Maroc", "RMA",
                "Fondation Al Mada", "Orange Maroc", "Honda Motor",
                "Pharma 5", "Mutandis Group", "Aiguebelle", "Barid Al-Maghrib",
                "Aéroports du Maroc", "Brainlyne",
                "L'Bankalik", "Subway Maroc", "YouCan", "SGTM Immobilier"
              ].map((client) => (
                <div key={client} className="px-4 py-3 rounded-2xl bg-white border border-gray-200 text-sm font-semibold text-gray-700 shadow-sm">
                  {client}
                </div>
              ))}
            </div>
            
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
                onClick={() => handleCollaborationClick(collaboration)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <FloatingContactWidget />
      
      <CollaborationDetailsModal 
        collaboration={selectedCollaboration}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Collaborations;
