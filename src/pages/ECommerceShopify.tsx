import { EditorialServicePage } from "@/components/editorial/EditorialServicePage";
import { serviceFaqs } from "@/data/serviceFaqs";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateWebPageSchema } from "@/utils/structuredData";

const schema = { "@context": "https://schema.org", "@graph": [
  generateServiceSchema("E-commerce et Shopify au Maroc", "Création et gestion de boutiques Shopify au Maroc : catalogue, fiches produits, promotions, publicité et suivi des ventes.", "Sur devis"),
  generateWebPageSchema("Agence E-commerce et Shopify au Maroc | Link Agency", "Création et gestion de boutiques Shopify au Maroc : catalogue, fiches produits, promotions, paiement à la livraison, publicité et suivi des ventes.", "https://linkagency.ma/e-commerce-shopify"),
  generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "E-commerce & Shopify", url: "https://linkagency.ma/e-commerce-shopify" }]),
  generateFAQSchema(serviceFaqs["e-commerce-shopify"]),
] };

const ECommerceShopify = () => <EditorialServicePage
  seo={{ title: "Agence E-commerce et Shopify au Maroc | Link Agency", description: "Création et gestion de boutiques Shopify au Maroc : catalogue, fiches produits, promotions, paiement à la livraison, publicité et suivi des ventes.", keywords: "agence shopify maroc, création boutique en ligne maroc, agence e-commerce casablanca, gestion boutique shopify, site e-commerce maroc", url: "https://linkagency.ma/e-commerce-shopify", structuredData: schema }}
  hero={{ index: "18 / EXPERTISE", eyebrow: "E-commerce & Shopify", title: <>Une boutique<br /><span className="link-cover__outline">qui vend.</span></>, description: "Création, gestion et croissance de boutiques en ligne sur Shopify : l’agence prend en charge le site, le catalogue, les promotions, les campagnes et le suivi des ventes.", dossierLabel: "Boutique gérée", dossierTitle: "Du catalogue à la commande.", dossierBody: "Une seule équipe pour le site, les produits, les promotions et la publicité : chaque action est pensée pour transformer une visite en commande.", accent: "terracotta", primaryLabel: "Parler de ma boutique" }}
  pillarsTitle={<>Tout ce qui fait vendre<br />une boutique en ligne.</>}
  pillarsBody="Link Agency gère la boutique au quotidien, comme le ferait une équipe e-commerce interne."
  pillars={[
    { title: "Création Shopify", description: "Thème, pages, parcours d’achat, paiement à la livraison ou en ligne, livraison et tunnel de commande." },
    { title: "Catalogue et fiches produits", description: "Photos, descriptions, prix, variantes, collections et référencement de chaque produit." },
    { title: "Promotions et temps forts", description: "Black Friday, Ramadan, rentrée, soldes : offres, bannières, codes promo et mises en avant au bon moment." },
    { title: "Publicité et réseaux sociaux", description: "Campagnes Meta et Google reliées au catalogue, contenus et Reels pour faire venir les acheteurs." },
  ]}
  processTitle="Auditer, construire, animer, mesurer."
  processBody="La boutique est suivie chaque semaine, pas seulement au lancement."
  process={[
    { title: "Auditer", description: "Analyser la boutique, le catalogue, le parcours d’achat, les paiements et le suivi des ventes." },
    { title: "Construire", description: "Créer ou refondre la boutique Shopify, organiser les collections et corriger le parcours d’achat." },
    { title: "Animer", description: "Ajouter les produits, préparer les promotions, publier les contenus et lancer les campagnes." },
    { title: "Mesurer", description: "Suivre les ventes, les paniers et les produits qui marchent, puis réajuster chaque semaine." },
  ]}
  useCasesTitle="Quand la boutique en ligne doit devenir un vrai canal de vente."
  useCases={["Une enseigne physique ouvre sa boutique en ligne", "Une boutique Shopify existe mais vend peu", "Le catalogue est trop lourd à gérer en interne", "Une marque prépare Black Friday ou Ramadan", "Une marque de beauté, de santé ou de mode veut vendre partout au Maroc"]}
  localTitle="Vendre en ligne partout au Maroc."
  localBody="Paiement à la livraison, commandes par WhatsApp, livraison dans tout le pays, contenus en darija et en français : la boutique est adaptée aux habitudes des acheteurs marocains."
  faqs={serviceFaqs["e-commerce-shopify"]}
  cta={{ title: "Votre boutique en ligne vend-elle assez ?", body: "Un audit de la boutique et du parcours d’achat permet d’identifier les premières corrections utiles.", label: "Demander un audit e-commerce" }}
/>;

export default ECommerceShopify;
