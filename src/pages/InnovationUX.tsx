import { EditorialServicePage } from "@/components/editorial/EditorialServicePage";
import { serviceFaqs } from "@/data/serviceFaqs";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateWebPageSchema } from "@/utils/structuredData";

const schema = { "@context": "https://schema.org", "@graph": [generateServiceSchema("UX et expérience digitale au Maroc", "Recherche, architecture, prototypage et optimisation d’expériences digitales au Maroc.", "Sur devis"), generateWebPageSchema("UX et Expérience Digitale au Maroc | Link Agency", "Conception et optimisation de parcours digitaux, interfaces et expériences de marque au Maroc.", "https://linkagency.ma/innovation-ux"), generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "UX", url: "https://linkagency.ma/innovation-ux" }]), generateFAQSchema(serviceFaqs["innovation-ux"])] };

const InnovationUX = () => <EditorialServicePage
  seo={{ title: "UX et Expérience Digitale au Maroc | Link Agency", description: "Recherche, architecture, prototypage et optimisation de parcours digitaux et expériences de marque au Maroc.", keywords: "agence UX maroc, UX design casablanca, parcours digital maroc, CRO maroc, design expérience", url: "https://linkagency.ma/innovation-ux", structuredData: schema }}
  hero={{ index: "16 / EXPERTISE", eyebrow: "UX et expérience", title: <>Rendre le parcours<br /><span className="link-cover__outline">évident.</span></>, description: "Des interfaces et expériences qui traduisent la promesse de marque en usages simples, crédibles et mesurables.", dossierLabel: "Expérience digitale", dossierTitle: "Moins de friction. Plus de sens.", dossierBody: "L’innovation utile ne consiste pas à ajouter des effets. Elle rend l’action plus claire et l’expérience plus cohérente avec la marque.", accent: "violet", primaryLabel: "Auditer le parcours" }}
  pillarsTitle="Relier la marque, l’usage et la conversion."
  pillarsBody="Chaque choix d’interface répond à un besoin du public et à un objectif de l’entreprise."
  pillars={[{ title: "Recherche", description: "Entretiens, données disponibles, comportements, irritants et compréhension des attentes." }, { title: "Architecture", description: "Organisation de l’information, parcours, priorités et logique de navigation." }, { title: "Prototypage", description: "Wireframes et interfaces testables pour valider les choix avant le développement." }, { title: "Optimisation", description: "Analyse des usages, hypothèses d’amélioration et évolution progressive des parcours." }]}
  processTitle="Observer avant de dessiner."
  processBody="La conception s’appuie sur les usages réels plutôt que sur des effets de mode."
  process={[{ title: "Comprendre", description: "Identifier les publics, les tâches, les freins et le contexte d’utilisation." }, { title: "Structurer", description: "Définir les parcours, les contenus, les priorités et les états essentiels." }, { title: "Prototyper", description: "Rendre les choix concrets, les tester et corriger les incompréhensions." }, { title: "Accompagner", description: "Transmettre le système, suivre l’intégration et mesurer les effets utiles." }]}
  useCasesTitle="Quand l’expérience freine la valeur."
  useCases={["Un site reçoit du trafic mais convertit mal", "Une offre complexe reste difficile à comprendre", "Une interface a grandi sans architecture cohérente", "Une refonte doit préserver les usages qui fonctionnent", "La marque promet une expérience premium que le digital ne reflète pas"]}
  localTitle="Des parcours pensés pour les usages du Maroc."
  localBody="Les comportements mobiles, le rôle de WhatsApp, les langues et les niveaux de familiarité digitale influencent fortement les parcours. L’expérience doit les intégrer sans sacrifier la cohérence globale."
  faqs={serviceFaqs["innovation-ux"]}
  cta={{ title: "Où vos utilisateurs hésitent-ils ?", body: "Un audit ciblé peut identifier les frictions les plus coûteuses avant une refonte complète.", label: "Examiner le parcours" }}
/>;

export default InnovationUX;
