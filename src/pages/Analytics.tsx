import { EditorialServicePage } from "@/components/editorial/EditorialServicePage";
import { generateBreadcrumbSchema, generateServiceSchema, generateWebPageSchema } from "@/utils/structuredData";

const schema = { "@context": "https://schema.org", "@graph": [generateServiceSchema("Analytics et mesure marketing au Maroc", "Plan de mesure, tracking, tableaux de bord et lecture de la performance marketing au Maroc.", "Sur devis"), generateWebPageSchema("Analytics Marketing au Maroc | Link Agency", "Tracking, analytics, tableaux de bord et pilotage de la performance marketing pour entreprises au Maroc.", "https://linkagency.ma/analytics"), generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "Analytics", url: "https://linkagency.ma/analytics" }])] };

const Analytics = () => <EditorialServicePage
  seo={{ title: "Analytics et Mesure Marketing au Maroc | Link Agency", description: "Plan de mesure, tracking, tableaux de bord et lecture de la performance marketing pour les entreprises au Maroc.", keywords: "analytics marketing maroc, tracking GA4 maroc, tableau de bord marketing, mesure performance casablanca", url: "https://linkagency.ma/analytics", structuredData: schema }}
  hero={{ index: "15 / EXPERTISE", eyebrow: "Analytics et mesure", title: <>Voir les signaux.<br /><span className="link-cover__outline">Décider avec recul.</span></>, description: "Un système de mesure proportionné aux décisions à prendre, conçu pour relier les canaux, les parcours et la qualité des demandes.", dossierLabel: "Plan de mesure", dossierTitle: "La donnée au service du jugement.", dossierBody: "Un tableau de bord n’est utile que s’il permet d’arbitrer. Nous partons donc des décisions, puis définissons les données nécessaires.", accent: "sage", primaryLabel: "Auditer la mesure" }}
  pillarsTitle="Mesurer sans construire une usine à gaz."
  pillarsBody="Le dispositif privilégie la fiabilité, la lisibilité et l’usage réel par la direction."
  pillars={[{ title: "Plan de mesure", description: "Objectifs, événements, conversions, responsabilités et niveau de précision réellement nécessaire." }, { title: "Implémentation", description: "GA4, gestionnaire de balises, pixels et connexions avec les outils du parcours." }, { title: "Tableaux de bord", description: "Indicateurs consolidés, vues par canal et formats adaptés aux équipes comme à la direction." }, { title: "Lecture", description: "Analyse, recommandations et arbitrages pour transformer les données en décisions utiles." }]}
  processTitle="Partir de la décision, remonter vers la donnée."
  processBody="La méthode évite de collecter des informations qui ne seront jamais utilisées."
  process={[{ title: "Interroger", description: "Identifier les décisions récurrentes, les zones d’incertitude et les données actuellement disponibles." }, { title: "Cartographier", description: "Documenter le parcours, les sources, les événements et les écarts de mesure." }, { title: "Implémenter", description: "Corriger ou installer le tracking, puis valider la qualité des remontées." }, { title: "Piloter", description: "Construire les vues utiles, analyser les résultats et faire évoluer la mesure avec le dispositif." }]}
  useCasesTitle="Quand les chiffres existent mais n’aident pas à décider."
  useCases={["Les plateformes affichent des résultats contradictoires", "La direction reçoit trop d’indicateurs et peu d’enseignements", "Les demandes ne sont pas reliées aux sources d’acquisition", "Une refonte de site exige un plan de mesure fiable", "Les budgets doivent être arbitrés entre plusieurs canaux"]}
  localTitle="Une lecture adaptée aux parcours réels du marché marocain."
  localBody="Téléphone, WhatsApp, formulaires, points de vente et cycles commerciaux hors ligne rendent la mesure plus complexe. Le plan tient compte de ces comportements au lieu de se limiter aux conversions visibles dans les plateformes."
  cta={{ title: "Que devez-vous pouvoir décider chaque mois ?", body: "C’est la meilleure question pour commencer un audit analytics.", label: "Cadrer la mesure" }}
/>;

export default Analytics;
