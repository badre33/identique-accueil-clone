import { EditorialServicePage } from "@/components/editorial/EditorialServicePage";
import { serviceFaqs } from "@/data/serviceFaqs";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateWebPageSchema } from "@/utils/structuredData";

const schema = { "@context": "https://schema.org", "@graph": [
  generateServiceSchema("Personal branding pour dirigeants au Maroc", "Positionnement, récit, présence LinkedIn et prises de parole pour fondateurs, dirigeants et experts au Maroc.", "Sur devis"),
  generateWebPageSchema("Personal Branding Dirigeants au Maroc | Link Agency", "Stratégie de personal branding pour fondateurs, dirigeants et experts : positionnement, récit, contenus et prises de parole.", "https://linkagency.ma/personal-branding"),
  generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "Personal branding", url: "https://linkagency.ma/personal-branding" }]),
  generateFAQSchema(serviceFaqs["personal-branding"]),
] };

const PersonalBranding = () => <EditorialServicePage
  seo={{ title: "Personal Branding Dirigeants au Maroc | Link Agency", description: "Positionnement, récit, contenus LinkedIn et prises de parole pour fondateurs, dirigeants et experts au Maroc.", keywords: "personal branding maroc, dirigeant linkedin maroc, marque personnelle fondateur, communication dirigeant casablanca", url: "https://linkagency.ma/personal-branding", structuredData: schema }}
  hero={{ index: "09 / EXPERTISE", eyebrow: "Personal branding dirigeants", title: <>Rendre visible<br /><span className="link-cover__outline">sans surjouer.</span></>, description: "Une stratégie de présence pour les fondateurs et dirigeants qui veulent installer leur autorité sans devenir des personnages ni sacrifier leur manière de travailler.", dossierLabel: "Marque dirigeant", dossierTitle: "Une voix juste. Une présence choisie.", dossierBody: "Le personal branding ne consiste pas à tout montrer. Il consiste à choisir ce qui doit être compris, prouvé et répété dans la durée.", accent: "violet", primaryLabel: "Cadrer le positionnement" }}
  pillarsTitle={<>Construire une autorité<br />qui reste crédible.</>}
  pillarsBody="Le travail part de la réalité du parcours, du rôle actuel et des ambitions du dirigeant."
  pillars={[
    { title: "Positionnement", description: "Sujet d’autorité, publics, différence, limites de la prise de parole et objectifs professionnels." },
    { title: "Récit", description: "Parcours, convictions, angles et preuves organisés dans une narration cohérente et naturelle." },
    { title: "Présence éditoriale", description: "Lignes de contenu, formats, rythme et préparation de prises de parole adaptées au temps disponible." },
    { title: "Image et visibilité", description: "Portraits, profils, supports, interviews et opportunités de visibilité alignés avec le positionnement." },
  ]}
  processTitle="Faire émerger la voix, pas fabriquer un personnage."
  processBody="Le dispositif doit pouvoir être tenu par le dirigeant sans devenir une charge artificielle."
  process={[
    { title: "Écouter", description: "Comprendre le parcours, les sujets maîtrisés, les convictions, les contraintes et les ambitions." },
    { title: "Positionner", description: "Choisir le territoire d’autorité, la posture, les publics et les preuves à installer." },
    { title: "Formaliser", description: "Construire le récit, les piliers éditoriaux, les formats et les éléments de profil." },
    { title: "Accompagner", description: "Préparer les contenus et prises de parole, puis ajuster la présence selon les retours utiles." },
  ]}
  useCasesTitle="Quand le dirigeant devient un levier de confiance."
  useCases={["Un fondateur veut soutenir la croissance de sa marque", "Un dirigeant prépare une nouvelle étape de carrière ou de visibilité", "Une entreprise B2B doit incarner davantage son expertise", "Un expert veut structurer sa présence sans publier à vide", "Une prise de parole sensible demande un cadre et une préparation"]}
  localTitle="Une présence adaptée aux codes professionnels du Maroc et aux audiences internationales."
  localBody="Le positionnement peut s’exprimer en français, arabe ou anglais selon les publics. L’enjeu reste le même : faire reconnaître une expertise réelle avec un ton crédible dans son environnement culturel et professionnel."
  faqs={serviceFaqs["personal-branding"]}
  cta={{ title: "Que doit-on comprendre de vous avant même de vous rencontrer ?", body: "Nous pouvons clarifier le positionnement et le niveau de visibilité qui vous ressemble.", label: "Parler du positionnement" }}
/>;

export default PersonalBranding;
