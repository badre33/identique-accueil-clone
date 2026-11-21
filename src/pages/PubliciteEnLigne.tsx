import { EditorialServicePage } from "@/components/editorial/EditorialServicePage";
import { serviceFaqs } from "@/data/serviceFaqs";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateWebPageSchema } from "@/utils/structuredData";

const schema = { "@context": "https://schema.org", "@graph": [
  generateServiceSchema("Publicité en ligne au Maroc : Meta Ads, Google Ads, TikTok et LinkedIn", "Stratégie, créations, mise en place, pilotage et mesure des campagnes publicitaires en ligne pour les entreprises au Maroc.", "Sur devis"),
  generateWebPageSchema("Agence Meta Ads et Google Ads au Maroc | Link Agency", "Campagnes Meta Ads, Google Ads, TikTok et LinkedIn au Maroc : stratégie, créations, mise en place, pilotage et suivi des ventes.", "https://linkagency.ma/publicite-en-ligne"),
  generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "Publicité en ligne", url: "https://linkagency.ma/publicite-en-ligne" }]),
  generateFAQSchema(serviceFaqs["publicite-en-ligne"]),
] };

const PubliciteEnLigne = () => <EditorialServicePage
  seo={{ title: "Agence Meta Ads et Google Ads au Maroc | Link Agency", description: "Campagnes Meta Ads (Facebook, Instagram), Google Ads, TikTok et LinkedIn au Maroc : stratégie, créations, mise en place, pilotage et suivi des ventes.", keywords: "agence meta ads maroc, agence google ads maroc, publicité facebook maroc, publicité instagram casablanca, tiktok ads maroc, linkedin ads maroc, agence publicité en ligne casablanca", url: "https://linkagency.ma/publicite-en-ligne", structuredData: schema }}
  hero={{ index: "17 / EXPERTISE", eyebrow: "Publicité en ligne", title: <>Des campagnes<br /><span className="link-cover__outline">qui vendent.</span></>, description: "Meta, Google, TikTok et LinkedIn : Link Agency conçoit, lance et pilote des campagnes qui génèrent des ventes et des demandes, pas seulement des vues.", dossierLabel: "Campagnes pilotées", dossierTitle: "Des ventes, pas des likes.", dossierBody: "Chaque campagne part d’un objectif commercial, d’une audience précise et d’un suivi des résultats jusqu’à la vente ou la demande.", accent: "violet", primaryLabel: "Auditer mes campagnes" }}
  pillarsTitle={<>Les bons canaux.<br />Les bons messages.</>}
  pillarsBody="Les plateformes sont choisies selon vos clients, pas selon les habitudes. Votre budget média reste le vôtre : il est payé directement aux plateformes, sans commission."
  pillars={[
    { title: "Meta Ads", description: "Facebook et Instagram : audiences, Reels, carrousels et catalogue pour vendre en ligne ou générer des demandes." },
    { title: "Google Ads", description: "Recherche, Shopping et Performance Max pour capter les clients qui cherchent déjà votre produit ou votre service." },
    { title: "TikTok et LinkedIn", description: "TikTok pour toucher une large audience jeune, LinkedIn pour atteindre les décideurs en B2B." },
    { title: "Créations publicitaires", description: "Visuels, vidéos et accroches en darija, en français ou en arabe, produits par l’agence et testés en continu." },
  ]}
  processTitle="Auditer, installer, lancer, optimiser."
  processBody="Une méthode simple, appliquée chaque semaine."
  process={[
    { title: "Auditer", description: "Analyser le compte publicitaire, le suivi des conversions, les audiences et les campagnes existantes." },
    { title: "Installer", description: "Configurer le pixel Meta, l’API Conversions, Google Analytics et le suivi des achats ou des demandes." },
    { title: "Lancer", description: "Créer les campagnes, les audiences et les publicités, avec plusieurs créations à tester dès le départ." },
    { title: "Optimiser", description: "Suivre les résultats chaque semaine, couper ce qui ne vend pas et renforcer ce qui marche." },
  ]}
  useCasesTitle="Quand la publicité doit rapporter."
  useCases={["Une boutique en ligne veut augmenter ses ventes", "Des campagnes tournent sans savoir ce qu’elles rapportent", "Les boosts Instagram coûtent mais n’apportent pas de demandes", "Une marque lance un produit ou une offre au Maroc", "Une entreprise B2B veut obtenir des rendez-vous qualifiés"]}
  localTitle="Des campagnes pensées pour le marché marocain."
  localBody="Ciblage par ville et par région, créations en darija et en français, paiement à la livraison, commandes par WhatsApp : les campagnes sont construites autour des habitudes d’achat au Maroc."
  faqs={serviceFaqs["publicite-en-ligne"]}
  cta={{ title: "Vos campagnes vous rapportent-elles vraiment ?", body: "Un audit de votre compte publicitaire montre vite ce qui fonctionne, ce qui coûte et ce qu’il faut changer.", label: "Demander un audit publicitaire" }}
/>;

export default PubliciteEnLigne;
