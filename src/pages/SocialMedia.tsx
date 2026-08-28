import { EditorialServicePage } from "@/components/editorial/EditorialServicePage";
import { serviceFaqs } from "@/data/serviceFaqs";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateWebPageSchema } from "@/utils/structuredData";

const schema = { "@context": "https://schema.org", "@graph": [
  generateServiceSchema("Social media et e-réputation au Maroc", "Stratégie éditoriale, contenus, community management et pilotage de la réputation pour les marques au Maroc.", "Sur devis"),
  generateWebPageSchema("Agence Social Media au Maroc | Link Agency", "Stratégie social media, création de contenu, community management et e-réputation en français, arabe et darija.", "https://linkagency.ma/social-media"),
  generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "Social media", url: "https://linkagency.ma/social-media" }]),
  generateFAQSchema(serviceFaqs["social-media"]),
] };

const SocialMedia = () => <EditorialServicePage
  seo={{ title: "Agence Social Media au Maroc | Link Agency", description: "Stratégie social media, création de contenu, community management et e-réputation en français, arabe et darija. Casablanca, Rabat, Marrakech.", keywords: "agence social media maroc, community management casablanca, stratégie réseaux sociaux maroc, e-réputation maroc, contenu darija", url: "https://linkagency.ma/social-media", structuredData: schema }}
  hero={{ index: "04 / EXPERTISE", eyebrow: "Social media et réputation", title: <>Faire vivre la marque.<br /><span className="link-cover__outline">Sans la diluer.</span></>, description: "Une présence sociale pensée comme un véritable système de marque : stratégie éditoriale, production, animation, modération et lecture des signaux.", dossierLabel: "Système éditorial", dossierTitle: "Présent, pertinent, reconnaissable.", dossierBody: "Chaque format doit servir une idée claire de la marque, parler la langue de son public et conserver le même niveau d’exigence dans le temps.", accent: "sage", primaryLabel: "Cadrer la présence sociale" }}
  pillarsTitle={<>De la ligne éditoriale<br />à la réputation.</>}
  pillarsBody="Le dispositif réunit la stratégie, la production et le pilotage pour éviter les prises de parole fragmentées."
  pillars={[
    { title: "Stratégie éditoriale", description: "Territoires de contenu, ton, formats, plateformes et calendrier en cohérence avec la marque." },
    { title: "Création de contenu", description: "Conception des idées, direction créative, rédaction et production des formats utiles." },
    { title: "Community management", description: "Publication, animation, modération et réponses en français, arabe ou darija selon le public." },
    { title: "Veille et réputation", description: "Lecture des conversations, remontée des signaux sensibles et recommandations de réponse." },
  ]}
  processTitle="Un rythme clair, de la stratégie à l’amélioration continue."
  processBody="Le travail s’organise autour d’un cadre éditorial stable et de cycles de production lisibles."
  process={[
    { title: "Auditer", description: "Analyser les comptes, les contenus, les communautés, les concurrents et les risques réputationnels." },
    { title: "Structurer", description: "Définir le rôle de chaque plateforme, les lignes éditoriales, les formats et le circuit de validation." },
    { title: "Produire et publier", description: "Piloter les contenus, la programmation, l’animation et la modération selon le calendrier convenu." },
    { title: "Lire et arbitrer", description: "Interpréter les performances et les signaux qualitatifs pour faire évoluer le dispositif." },
  ]}
  useCasesTitle="Quand la présence sociale ne peut plus être improvisée."
  useCases={["Une marque établie manque de cohérence entre ses plateformes", "Une direction veut professionnaliser sa production et ses validations", "Une entreprise doit s’exprimer en français, arabe et darija", "Une actualité sensible exige une gouvernance éditoriale claire", "Une marque internationale doit adapter sa voix au marché marocain"]}
  localTitle="Une culture locale, des standards de marque exigeants."
  localBody="La communication sociale au Maroc demande une lecture fine des langues, des références culturelles et des usages propres à chaque plateforme. Link Agency construit ce pont sans folkloriser la marque ni affaiblir son identité globale."
  faqs={serviceFaqs["social-media"]}
  cta={{ title: "Votre marque mérite mieux qu’un calendrier de posts.", body: "Parlons du rôle que les réseaux sociaux doivent réellement jouer dans votre stratégie.", label: "Évaluer le dispositif" }}
/>;

export default SocialMedia;
