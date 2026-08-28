import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { CategoryFilter } from "@/components/collaborations/CategoryFilter";
import { CollaborationCard } from "@/components/collaborations/CollaborationCard";
import { CollaborationDetailsModal } from "@/components/collaborations/CollaborationDetailsModal";
import { EditorialFinalCTA, EditorialPageHero, EditorialSectionIntro } from "@/components/editorial/EditorialPage";
import { SEOHead } from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/utils/structuredData";

interface Collaboration {
  name: string;
  url: string;
  category: string;
  logo?: string;
  description: string;
  type: string;
  scope: "Mission Link Agency" | "Parcours du fondateur";
}

const collaborations: Collaboration[] = [
  { name: "OCB Maroc", url: "#", category: "Lifestyle", logo: "/assets/media/ocb-logo.png", description: "Pilotage des réseaux sociaux, stratégie de contenu, campagnes publicitaires et partenariats de marque au Maroc.", type: "Social media et campagnes", scope: "Mission Link Agency" },
  { name: "Oncovita", url: "#", category: "Santé", logo: "/assets/media/oncovita-logo.jpeg", description: "Structuration de l’identité et de la communication d’une association dédiée à l’accompagnement holistique des patients atteints de cancer.", type: "Branding et communication", scope: "Mission Link Agency" },
  { name: "Nova Spacia", url: "#", category: "Bien-être", logo: "/assets/media/novaspacia-logo.svg", description: "Accompagnement de l’image de marque, des contenus et de la présence digitale d’un acteur du bien-être au Maroc.", type: "Marque et contenu", scope: "Mission Link Agency" },
  { name: "Nexia Morocco", url: "https://nexia.ma/", category: "Conseil", logo: "/assets/media/05dfc79f-2a20-4241-aa4d-606f6cdd30d2.png", description: "Conseil en communication, structuration de la présence digitale et accompagnement des prises de parole corporate.", type: "Conseil et digital", scope: "Mission Link Agency" },
  { name: "Amexa", url: "#", category: "Influence", description: "Identification et qualification de profils d’influence adaptés aux enjeux de la marque.", type: "Influence marketing", scope: "Mission Link Agency" },
  { name: "Atlas Secret", url: "#", category: "Beauté", description: "Réflexion stratégique autour du positionnement, des contenus et du déploiement de marque.", type: "Stratégie de marque", scope: "Mission Link Agency" },
  { name: "L’Bankalik", url: "#", category: "Banque", logo: "/assets/media/lbankalik-logo.png", description: "Stratégie éditoriale, contenus pédagogiques bilingues, community management et campagnes digitales.", type: "Social media et acquisition", scope: "Parcours du fondateur" },
  { name: "AXA Assurance Maroc", url: "#", category: "Assurance", logo: "/assets/media/axa-logo.png", description: "Contenus institutionnels, motion design produit, community management et dispositifs Meta Ads.", type: "Contenu et performance", scope: "Parcours du fondateur" },
  { name: "RMA", url: "#", category: "Assurance", logo: "/assets/media/rma-logo.jpg", description: "Production de contenus institutionnels, sensibilisation et rédaction bilingue pour les temps forts de la marque.", type: "Contenu et social media", scope: "Parcours du fondateur" },
  { name: "Subway Maroc", url: "https://www.instagram.com/subwaymaroc/", category: "Restauration", logo: "/assets/media/c66a2b50-92d9-4a9d-a394-09ff44b3d1b2.png", description: "Ligne éditoriale, contenus, community management, campagnes géolocalisées et activations en restaurant.", type: "Marketing digital", scope: "Parcours du fondateur" },
  { name: "YouCan", url: "https://youcan.shop/", category: "E-commerce", logo: "/assets/media/youcan-logo.png", description: "Accompagnement éditorial et performance pour une plateforme e-commerce marocaine en forte croissance.", type: "Contenu et performance", scope: "Parcours du fondateur" },
  { name: "SGTM Immobilier", url: "https://sgtm-immobilier.com/", category: "Immobilier", logo: "/assets/media/a404ed81-6016-457c-b044-6027db20cf22.png", description: "Refonte d’identité visuelle et développement de la présence web d’une activité immobilière premium.", type: "Branding et web", scope: "Parcours du fondateur" },
  { name: "La Maison Amoud", url: "https://www.amoud.ma/", category: "Retail", logo: "/assets/media/18500dfb-e7b6-4c75-8c7c-89fa212ee0a8.png", description: "Dispositifs de contenu et activations de marque pour une enseigne emblématique du retail au Maroc.", type: "Retail et contenu", scope: "Parcours du fondateur" },
  { name: "Artitenium", url: "#", category: "Architecture", logo: "/assets/media/ce7e28cc-c15c-48b9-b9be-03195d92927f.png", description: "Stratégie éditoriale B2B, contenus pédagogiques et campagnes ciblées vers les décideurs.", type: "Branding et digital", scope: "Parcours du fondateur" },
];

const categories = ["Toutes", ...Array.from(new Set(collaborations.map((item) => item.category)))];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateWebPageSchema("Missions et références | Link Agency Maroc", "Sélection de missions Link Agency et de références issues du parcours de son fondateur en branding, social media, contenu et performance au Maroc.", "https://linkagency.ma/collaborations"),
    generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "Missions", url: "https://linkagency.ma/collaborations" }]),
  ],
};

const Collaborations = () => {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [selectedCollaboration, setSelectedCollaboration] = useState<Collaboration | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filtered = selectedCategory === "Toutes" ? collaborations : collaborations.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f4f1eb] pt-16 text-[#0a0a0a] sm:pt-20">
      <SEOHead title="Missions et Références | Link Agency Maroc" description="Découvrez une sélection de missions Link Agency et de références du parcours de son fondateur en branding, réseaux sociaux, contenu et performance au Maroc." keywords="références agence communication maroc, portfolio branding maroc, missions marketing casablanca, agence social media maroc" url="https://linkagency.ma/collaborations" structuredData={schema} />
      <Header />
      <main className="link-editorial">
        <EditorialPageHero
          index="03 / MISSIONS"
          eyebrow="Références et expériences"
          title={<>Des marques réelles.<br /><span className="link-cover__outline">Des enjeux concrets.</span></>}
          description="Une sélection resserrée de missions menées par Link Agency et d’expériences issues du parcours du fondateur. Le périmètre est indiqué sur chaque référence."
          dossierLabel="Sélection de missions"
          dossierTitle="La preuve par le travail."
          dossierBody="Positionner, structurer, produire, coordonner et améliorer. Les formats changent, le niveau d’exigence reste le même."
          accent="sage"
          primaryLabel="Parler d’un enjeu"
        />

        <section className="editorial-section bg-[#d8cec1]">
          <div className="editorial-shell">
            <EditorialSectionIntro eyebrow="Le portfolio" title="Une lecture transparente des références." body="Les missions directes du cabinet sont distinguées des références acquises par Badre dans ses fonctions et collaborations antérieures. Cette distinction fait partie de notre exigence de clarté." />
            <div className="mt-14"><CategoryFilter categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} /></div>
            <div className="grid border-l border-t border-black/20 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((collaboration, index) => <CollaborationCard key={collaboration.name} collaboration={collaboration} index={index} onClick={() => { setSelectedCollaboration(collaboration); setIsModalOpen(true); }} />)}
            </div>
          </div>
        </section>

        <EditorialFinalCTA title="Votre marque a besoin d’un cap, d’un système ou d’un renfort ?" body="Présentez le contexte, les objectifs et les contraintes. Nous vous dirons rapidement où se situe le vrai besoin." label="Cadrer le prochain dossier" accent="lime" />
      </main>
      <Footer />
      <FloatingContactWidget />
      <CollaborationDetailsModal collaboration={selectedCollaboration} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Collaborations;
