import { EditorialServicePage } from "@/components/editorial/EditorialServicePage";
import { serviceFaqs } from "@/data/serviceFaqs";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateWebPageSchema } from "@/utils/structuredData";

const schema = { "@context": "https://schema.org", "@graph": [
  generateServiceSchema("Création de contenu digital au Maroc", "Stratégie éditoriale, rédaction, photographie et vidéo pour les marques au Maroc.", "Sur devis"),
  generateWebPageSchema("Création de Contenu Digital au Maroc | Link Agency", "Production de contenu digital : stratégie éditoriale, rédaction, photographie, vidéo et formats social media au Maroc.", "https://linkagency.ma/content-digital"),
  generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "Contenu digital", url: "https://linkagency.ma/content-digital" }]),
  generateFAQSchema(serviceFaqs["content-digital"]),
] };

const ContentDigital = () => <EditorialServicePage
  seo={{ title: "Création de Contenu Digital au Maroc | Link Agency", description: "Stratégie éditoriale, rédaction, photographie, vidéo et formats social media pour les marques au Maroc. Production pilotée à Casablanca.", keywords: "création contenu maroc, production vidéo casablanca, photographie marque maroc, rédaction digitale maroc, content marketing", url: "https://linkagency.ma/content-digital", structuredData: schema }}
  hero={{ index: "06 / EXPERTISE", eyebrow: "Contenu et production", title: <>Créer moins.<br /><span className="link-cover__outline">Créer juste.</span></>, description: "Des idées, des images et des mots conçus pour porter le positionnement de la marque, nourrir ses canaux et rester cohérents au fil du temps.", dossierLabel: "Direction de contenu", dossierTitle: "Une idée avant un format.", dossierBody: "Le bon contenu ne commence pas par une caméra ou un calendrier. Il commence par une intention, une audience et un rôle clair dans le dispositif.", accent: "violet", primaryLabel: "Cadrer la production" }}
  pillarsTitle={<>Une chaîne de contenu<br />dirigée par la marque.</>}
  pillarsBody="La direction éditoriale relie la stratégie, la création et les usages de chaque canal."
  pillars={[
    { title: "Direction éditoriale", description: "Territoires, angles, formats, ton et règles de cohérence pour organiser les prises de parole." },
    { title: "Rédaction", description: "Pages web, articles, scripts, newsletters, campagnes et contenus sociaux en français, arabe ou darija." },
    { title: "Photo et vidéo", description: "Concept, direction artistique, préparation, production et postproduction avec les spécialistes adaptés." },
    { title: "Système de diffusion", description: "Déclinaisons, calendrier, gabarits et organisation des assets pour gagner en régularité sans perdre en qualité." },
  ]}
  processTitle="Une production conçue, préparée et contrôlée."
  processBody="Chaque projet suit un niveau de cadrage proportionné à son ambition et à son exposition."
  process={[
    { title: "Définir", description: "Clarifier l’objectif, le public, le message, les canaux et les contraintes de production." },
    { title: "Concevoir", description: "Développer le concept, les angles, les scripts, la direction visuelle et les déclinaisons." },
    { title: "Produire", description: "Mobiliser les profils nécessaires, coordonner le tournage ou la création et assurer les validations." },
    { title: "Déployer", description: "Adapter les assets aux canaux, organiser la diffusion et capitaliser sur une bibliothèque exploitable." },
  ]}
  useCasesTitle="Quand le volume ne suffit plus."
  useCases={["La marque publie beaucoup mais reste peu reconnaissable", "Les contenus sont produits par plusieurs prestataires sans direction commune", "Un lancement exige une campagne visuelle et éditoriale cohérente", "Une entreprise manque d’assets de qualité pour ses campagnes", "Une marque internationale doit localiser ses contenus pour le Maroc"]}
  localTitle="Produire au Maroc sans réduire la marque à des codes locaux superficiels."
  localBody="Link Agency adapte les langues, les visages, les lieux et les références culturelles au public marocain tout en protégeant le niveau de gamme et l’identité centrale de la marque."
  faqs={serviceFaqs["content-digital"]}
  cta={{ title: "Quel contenu mérite vraiment d’être produit ?", body: "Nous pouvons commencer par clarifier le rôle des contenus, puis construire la chaîne de production adaptée.", label: "Parler du prochain contenu" }}
/>;

export default ContentDigital;
