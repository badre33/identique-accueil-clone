import { EditorialServicePage } from "@/components/editorial/EditorialServicePage";
import { serviceFaqs } from "@/data/serviceFaqs";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateWebPageSchema } from "@/utils/structuredData";

const schema = { "@context": "https://schema.org", "@graph": [
  generateServiceSchema("Influence marketing au Maroc", "Casting, stratégie, négociation, coordination et mesure de campagnes d’influence au Maroc.", "Sur devis"),
  generateWebPageSchema("Agence Influence Marketing au Maroc | Link Agency", "Campagnes d’influence au Maroc : sélection de créateurs, stratégie, brief, négociation, coordination et reporting.", "https://linkagency.ma/influence-marketing"),
  generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "Influence marketing", url: "https://linkagency.ma/influence-marketing" }]),
  generateFAQSchema(serviceFaqs["influence-marketing"]),
] };

const InfluenceMarketing = () => <EditorialServicePage
  seo={{ title: "Agence Influence Marketing au Maroc | Link Agency", description: "Campagnes d’influence au Maroc : stratégie, casting de créateurs, brief, négociation, coordination, droits et reporting.", keywords: "agence influence maroc, influenceurs maroc, campagne influence casablanca, micro influence maroc, casting créateurs", url: "https://linkagency.ma/influence-marketing", structuredData: schema }}
  hero={{ index: "08 / EXPERTISE", eyebrow: "Influence et collaborations", title: <>Choisir la bonne voix.<br /><span className="link-cover__outline">Pas la plus bruyante.</span></>, description: "Des collaborations créateurs construites autour de l’affinité, de la crédibilité et du rôle réel de chaque profil dans la stratégie de marque.", dossierLabel: "Campagne d’influence", dossierTitle: "L’affinité avant l’audience.", dossierBody: "Un casting pertinent ne se résume pas au nombre d’abonnés. Il croise l’image, la communauté, le contexte, les droits et la capacité à servir le message.", accent: "terracotta", primaryLabel: "Cadrer une campagne" }}
  pillarsTitle={<>Une campagne pilotée<br />de bout en bout.</>}
  pillarsBody="La stratégie, le casting et l’exécution sont réunis dans un cadre lisible pour la marque comme pour les créateurs."
  pillars={[
    { title: "Stratégie", description: "Objectifs, rôle de l’influence, publics, formats, budget et articulation avec les autres canaux." },
    { title: "Casting", description: "Recherche, qualification, vérification de l’affinité et recommandation argumentée des profils." },
    { title: "Coordination", description: "Prise de contact, négociation, contrats, briefs, validations, logistique et calendrier de diffusion." },
    { title: "Mesure", description: "Collecte des livrables et résultats, lecture qualitative et quantitative, enseignements pour la suite." },
  ]}
  processTitle="Une relation créateur encadrée sans étouffer la création."
  processBody="Le brief protège la marque tout en laissant au profil retenu l’espace nécessaire pour rester crédible auprès de sa communauté."
  process={[
    { title: "Qualifier", description: "Définir le message, le public, le niveau de notoriété attendu et les contraintes de marque." },
    { title: "Sélectionner", description: "Construire une liste courte, documenter les profils et valider les choix avec la marque." },
    { title: "Contractualiser", description: "Cadrer les livrables, les droits, les validations, les délais et les obligations de transparence." },
    { title: "Déployer", description: "Coordonner la production, la diffusion, l’amplification éventuelle et le bilan de campagne." },
  ]}
  useCasesTitle="Les campagnes qui ont besoin d’une vraie sélection."
  useCases={["Lancement de produit ou entrée d’une marque au Maroc", "Programme d’ambassadeurs dans la durée", "Activation événementielle ou expérience de marque", "Contenu créateur destiné aux réseaux sociaux ou aux campagnes", "Prise de parole sensible nécessitant des profils crédibles"]}
  localTitle="Comprendre les communautés marocaines, leurs langues et leurs codes."
  localBody="Le marché de l’influence au Maroc demande une connaissance fine des profils, des audiences et des perceptions. La recommandation privilégie la cohérence avec la marque et la qualité du contexte, pas un volume théorique."
  faqs={serviceFaqs["influence-marketing"]}
  cta={{ title: "Quel créateur peut vraiment porter votre marque ?", body: "Commençons par le rôle de la campagne et le public à convaincre. Le casting viendra ensuite.", label: "Préparer le casting" }}
/>;

export default InfluenceMarketing;
