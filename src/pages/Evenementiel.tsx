import { EditorialServicePage } from "@/components/editorial/EditorialServicePage";
import { generateBreadcrumbSchema, generateServiceSchema, generateWebPageSchema } from "@/utils/structuredData";

const schema = { "@context": "https://schema.org", "@graph": [
  generateServiceSchema("Événementiel corporate au Maroc", "Conception, production, coordination et communication d’événements corporate au Maroc.", "Sur devis"),
  generateWebPageSchema("Événementiel Corporate au Maroc | Link Agency", "Événements corporate au Maroc : stratégie, concept, production, coordination, contenu et amplification.", "https://linkagency.ma/evenementiel"),
  generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "Événementiel", url: "https://linkagency.ma/evenementiel" }]),
] };

const Evenementiel = () => <EditorialServicePage
  seo={{ title: "Événementiel Corporate au Maroc | Link Agency", description: "Conception et production d’événements corporate au Maroc : conférences, lancements, forums, activations et réceptions à Casablanca, Marrakech et Rabat.", keywords: "agence événementielle maroc, événement corporate casablanca, événement marrakech, lancement produit maroc, forum entreprise maroc", url: "https://linkagency.ma/evenementiel", structuredData: schema }}
  hero={{ index: "11 / EXPERTISE", eyebrow: "Événementiel et activations", title: <>Créer un moment.<br /><span className="link-cover__outline">Installer une trace.</span></>, description: "Des événements conçus comme des expériences de marque, avec un cap stratégique, une production maîtrisée et une communication pensée avant, pendant et après.", dossierLabel: "Production événementielle", dossierTitle: "Le sens avant le décor.", dossierBody: "Un événement réussi ne se résume pas à sa scénographie. Il doit faire vivre une idée de la marque, respecter le public et produire des effets au-delà du jour J.", accent: "terracotta", primaryLabel: "Cadrer l’événement" }}
  pillarsTitle={<>De l’intention<br />à l’expérience.</>}
  pillarsBody="Link Agency structure le projet et mobilise les partenaires adaptés à son format, son lieu et son niveau d’exigence."
  pillars={[
    { title: "Concept et narration", description: "Objectifs, public, idée directrice, déroulé, identité et articulation avec la stratégie de marque." },
    { title: "Production", description: "Lieu, scénographie, technique, prestataires, fabrication, hospitalité et logistique générale." },
    { title: "Coordination", description: "Planning, responsabilités, validations, conduite du projet et présence opérationnelle sur le terrain." },
    { title: "Contenu et amplification", description: "Invitations, coverage, photo, vidéo, social media et exploitation des contenus après l’événement." },
  ]}
  processTitle="Un projet visible exige une organisation invisible."
  processBody="Le public doit vivre l’expérience sans voir la complexité de sa production."
  process={[
    { title: "Cadrer", description: "Définir l’objectif, le public, le format, le budget, le lieu et les contraintes critiques." },
    { title: "Concevoir", description: "Développer le concept, le parcours, la scénographie et les principaux moments de l’expérience." },
    { title: "Produire", description: "Sourcer, négocier, coordonner les partenaires, sécuriser les détails et préparer l’exploitation." },
    { title: "Exécuter et prolonger", description: "Piloter le jour J, assurer les contenus et organiser les suites utiles pour la marque." },
  ]}
  useCasesTitle="Des formats différents, une même exigence."
  useCases={["Forum ou conférence à audience professionnelle", "Lancement de produit ou de marque", "Activation destinée aux médias, créateurs ou communautés", "Réception, dîner ou expérience VIP", "Événement institutionnel, protocolaire ou partenariat", "Séminaire de direction ou temps fort interne"]}
  localTitle="Une capacité de coordination à Casablanca, Marrakech, Rabat et au-delà."
  localBody="Le réseau de lieux, de producteurs et de prestataires est composé selon le besoin réel. Marrakech apporte une forte dimension hospitality, Casablanca concentre les grands enjeux corporate et Rabat les contextes institutionnels."
  cta={{ title: "Quel souvenir doit rester après l’événement ?", body: "Définissons d’abord l’objectif, le public et le niveau d’expérience. La production se construira autour de ce cap.", label: "Ouvrir le brief" }}
/>;

export default Evenementiel;
