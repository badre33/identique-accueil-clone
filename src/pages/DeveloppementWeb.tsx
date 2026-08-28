import { EditorialServicePage } from "@/components/editorial/EditorialServicePage";
import { serviceFaqs } from "@/data/serviceFaqs";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateWebPageSchema } from "@/utils/structuredData";

const schema = { "@context": "https://schema.org", "@graph": [
  generateServiceSchema("Création de sites web au Maroc", "Stratégie, UX, design, développement, SEO et mesure pour sites de marque et sites corporate au Maroc.", "Sur devis"),
  generateWebPageSchema("Création de Site Web au Maroc | Link Agency", "Sites web de marque et corporate au Maroc : stratégie, UX, design, développement, SEO et optimisation.", "https://linkagency.ma/developpement-web"),
  generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "Développement web", url: "https://linkagency.ma/developpement-web" }]),
  generateFAQSchema(serviceFaqs["developpement-web"]),
] };

const DeveloppementWeb = () => <EditorialServicePage
  seo={{ title: "Création de Site Web au Maroc | Link Agency", description: "Conception de sites web de marque et corporate au Maroc : stratégie, UX, design, développement, SEO et mesure.", keywords: "création site web maroc, agence web casablanca, site corporate maroc, refonte site web, UX design maroc, SEO technique", url: "https://linkagency.ma/developpement-web", structuredData: schema }}
  hero={{ index: "10 / EXPERTISE", eyebrow: "Sites web et expériences digitales", title: <>Le site comme<br /><span className="link-cover__outline">preuve de marque.</span></>, description: "Un site clair, distinctif et performant, conçu pour expliquer la valeur de l’entreprise, rassurer ses publics et transformer l’intérêt en action.", dossierLabel: "Projet digital", dossierTitle: "Une vitrine qui travaille.", dossierBody: "Le design, le contenu, la technique et le référencement doivent raconter la même chose. Sinon le site devient un simple assemblage de pages.", accent: "sage", primaryLabel: "Cadrer le site" }}
  pillarsTitle={<>Un seul projet.<br />Quatre disciplines.</>}
  pillarsBody="Le site est traité comme un système de marque, de contenu, de conversion et de visibilité."
  pillars={[
    { title: "Stratégie et architecture", description: "Objectifs, publics, parcours, arborescence et priorités éditoriales avant les écrans." },
    { title: "UX et direction visuelle", description: "Wireframes, interface, rythme, composants et expérience cohérente avec l’identité de marque." },
    { title: "Contenu et SEO", description: "Messages, pages, structure sémantique, métadonnées et maillage conçus pour les humains et les moteurs." },
    { title: "Développement et mesure", description: "Intégration responsive, performance, formulaires, analytics et fondations techniques maintenables." },
  ]}
  processTitle="Construire le fond avant de polir la surface."
  processBody="La méthode protège le positionnement, le référencement et les objectifs de conversion à chaque étape."
  process={[
    { title: "Cadrer", description: "Auditer l’existant, définir les objectifs, les publics, les contenus et les contraintes techniques." },
    { title: "Structurer", description: "Valider l’arborescence, les parcours, les messages et les wireframes des pages prioritaires." },
    { title: "Concevoir", description: "Développer le système visuel, les composants et les contenus dans une logique responsive." },
    { title: "Construire et vérifier", description: "Développer, intégrer, tester la performance, le SEO, les formulaires et les principaux parcours." },
  ]}
  useCasesTitle="Quand le site ne reflète plus l’entreprise."
  useCases={["Le site actuel génère des demandes mais dévalorise la marque", "Une entreprise change de positionnement ou d’offre", "Une filiale étrangère doit adapter sa présence au Maroc", "Le référencement existant doit être préservé pendant une refonte", "Une marque a besoin de pages de conversion dédiées à ses campagnes"]}
  localTitle="Créer au Maroc, répondre aux standards internationaux."
  localBody="Les sites peuvent cibler un marché marocain, accompagner une implantation locale ou présenter une expertise à l’étranger. L’architecture linguistique, les contenus et le référencement sont pensés selon ces marchés réels."
  faqs={serviceFaqs["developpement-web"]}
  cta={{ title: "Votre site soutient-il encore votre positionnement ?", body: "Nous pouvons auditer ce qui doit être conservé, amélioré ou reconstruit avant toute refonte.", label: "Auditer le site" }}
/>;

export default DeveloppementWeb;
