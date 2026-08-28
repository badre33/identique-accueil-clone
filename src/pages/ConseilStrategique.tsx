import { EditorialServicePage } from "@/components/editorial/EditorialServicePage";
import { serviceFaqs } from "@/data/serviceFaqs";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateWebPageSchema } from "@/utils/structuredData";

const schema = { "@context": "https://schema.org", "@graph": [
  generateServiceSchema("Conseil stratégique marketing au Maroc", "Audit, positionnement, plan marketing, gouvernance et pilotage de la performance pour les entreprises au Maroc.", "Sur devis"),
  generateWebPageSchema("Conseil Stratégique Marketing au Maroc | Link Agency", "Conseil stratégique marketing : diagnostic, positionnement, feuille de route, gouvernance et pilotage au Maroc.", "https://linkagency.ma/conseil-strategique"),
  generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "Conseil stratégique", url: "https://linkagency.ma/conseil-strategique" }]),
  generateFAQSchema(serviceFaqs["conseil-strategique"]),
] };

const ConseilStrategique = () => <EditorialServicePage
  seo={{ title: "Conseil Stratégique Marketing au Maroc | Link Agency", description: "Conseil stratégique marketing au Maroc : diagnostic, positionnement, feuille de route, gouvernance et pilotage pour entreprises en croissance et filiales.", keywords: "conseil stratégique marketing maroc, audit marketing casablanca, stratégie de marque maroc, feuille de route marketing, pilotage marketing", url: "https://linkagency.ma/conseil-strategique", structuredData: schema }}
  hero={{ index: "05 / EXPERTISE", eyebrow: "Conseil stratégique", title: <>Décider avant<br /><span className="link-cover__outline">de dépenser.</span></>, description: "Nous transformons une ambition, un problème ou une dispersion d’actions en décisions claires, priorisées et pilotables.", dossierLabel: "Mandat de conseil", dossierTitle: "Le bon cap. Le bon ordre.", dossierBody: "La stratégie relie le positionnement, les objectifs commerciaux, les ressources et les choix d’activation. Elle permet aussi de dire non aux mauvaises priorités.", accent: "terracotta", primaryLabel: "Cadrer le sujet" }}
  pillarsTitle={<>Une stratégie faite<br />pour être utilisée.</>}
  pillarsBody="Le conseil ne s’arrête pas au diagnostic. Chaque décision est reliée à une responsabilité, un calendrier et un indicateur."
  pillars={[
    { title: "Audit stratégique", description: "Lecture de la marque, du marché, des offres, des canaux, de l’organisation et des performances disponibles." },
    { title: "Positionnement", description: "Clarification de la proposition de valeur, des publics prioritaires et du territoire de différenciation." },
    { title: "Feuille de route", description: "Priorités, séquençage, budgets indicatifs, responsabilités et arbitrages pour passer à l’action." },
    { title: "Pilotage", description: "Rituels de décision, indicateurs utiles et coordination des ressources internes ou externes." },
  ]}
  processTitle="De la complexité à un système de décision."
  processBody="La méthode privilégie les faits disponibles, les entretiens utiles et les choix explicites."
  process={[
    { title: "Comprendre", description: "Réunir les éléments existants, interroger les parties prenantes et identifier les contradictions." },
    { title: "Formuler", description: "Établir le diagnostic, les hypothèses stratégiques et les scénarios d’arbitrage." },
    { title: "Choisir", description: "Décider du cap, des priorités, des ressources et du séquençage avec la direction." },
    { title: "Mettre en mouvement", description: "Traduire les choix en feuille de route et accompagner les premières décisions d’exécution." },
  ]}
  useCasesTitle="Les moments où un regard externe devient utile."
  useCases={["Une entreprise investit mais manque de direction commune", "Une marque doit se repositionner face à un marché qui change", "Une filiale prépare son lancement ou son développement au Maroc", "La direction veut challenger ses agences et ses canaux", "Plusieurs activités doivent être réunies sous une logique de marque", "Une croissance rapide exige une gouvernance marketing plus solide"]}
  localTitle="Une stratégie conçue pour le marché marocain et lisible à l’international."
  localBody="Les décisions tiennent compte des réalités commerciales, culturelles et linguistiques du Maroc, tout en restant compatibles avec les standards de gouvernance d’un groupe ou d’une marque internationale."
  faqs={serviceFaqs["conseil-strategique"]}
  cta={{ title: "Le problème n’est pas toujours le manque d’actions.", body: "Il est souvent l’absence de choix, de séquençage ou de gouvernance. C’est ce que nous pouvons clarifier ensemble.", label: "Ouvrir le dossier" }}
/>;

export default ConseilStrategique;
