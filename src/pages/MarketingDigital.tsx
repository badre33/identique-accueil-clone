import { EditorialServicePage } from "@/components/editorial/EditorialServicePage";
import { serviceFaqs } from "@/data/serviceFaqs";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateWebPageSchema } from "@/utils/structuredData";

const schema = { "@context": "https://schema.org", "@graph": [
  generateServiceSchema("Marketing digital et acquisition au Maroc", "SEO, campagnes payantes, landing pages, tracking et pilotage de la performance pour les entreprises au Maroc.", "Sur devis"),
  generateWebPageSchema("Agence Marketing Digital au Maroc | Link Agency", "Pilotage du marketing digital au Maroc : SEO, Google Ads, Meta Ads, landing pages, tracking et optimisation.", "https://linkagency.ma/marketing-digital"),
  generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "Marketing digital", url: "https://linkagency.ma/marketing-digital" }]),
  generateFAQSchema(serviceFaqs["marketing-digital"]),
] };

const MarketingDigital = () => <EditorialServicePage
  seo={{ title: "Agence Marketing Digital au Maroc | SEO et Acquisition", description: "Pilotage du marketing digital au Maroc : SEO, Google Ads, Meta Ads, landing pages, tracking et optimisation pour entreprises ambitieuses.", keywords: "agence marketing digital maroc, SEO maroc, Meta Ads maroc, Google Ads casablanca, acquisition digitale maroc, pilotage performance", url: "https://linkagency.ma/marketing-digital", structuredData: schema }}
  hero={{ index: "07 / EXPERTISE", eyebrow: "Marketing digital et acquisition", title: <>Relier l’attention<br /><span className="link-cover__outline">au business.</span></>, description: "Un dispositif d’acquisition lisible, où le référencement, les campagnes, les pages de conversion et la mesure travaillent dans le même sens.", dossierLabel: "Système d’acquisition", dossierTitle: "Mesurer ce qui compte.", dossierBody: "Les impressions et les clics ne suffisent pas. Le dispositif doit relier les investissements à la qualité des demandes et aux objectifs de l’entreprise.", accent: "lime", primaryLabel: "Auditer l’acquisition" }}
  pillarsTitle={<>Des leviers connectés.<br />Des arbitrages visibles.</>}
  pillarsBody="Le rôle de Link Agency est de construire et piloter le système, pas d’empiler des canaux."
  pillars={[
    { title: "SEO et contenu", description: "Architecture, optimisation technique, pages utiles et contenus conçus pour capter une demande qualifiée." },
    { title: "Campagnes payantes", description: "Meta, Google ou LinkedIn selon le besoin, avec des audiences, des créations et des objectifs clairement cadrés." },
    { title: "Conversion", description: "Landing pages, messages, formulaires et parcours pensés pour transformer l’intérêt en demande exploitable." },
    { title: "Mesure", description: "Tracking, tableaux de bord et lecture des résultats pour arbitrer les budgets et améliorer le dispositif." },
  ]}
  processTitle="Observer, choisir, activer, apprendre."
  processBody="Le pilotage se construit autour d’hypothèses explicites et de décisions régulières."
  process={[
    { title: "Diagnostiquer", description: "Analyser la demande, les canaux, le tracking, les parcours et la qualité des demandes existantes." },
    { title: "Prioriser", description: "Choisir les audiences, les offres, les leviers et les indicateurs réellement utiles." },
    { title: "Activer", description: "Mettre en place les campagnes, les contenus, les pages et le dispositif de mesure." },
    { title: "Optimiser", description: "Lire les résultats, challenger les hypothèses et réallouer les efforts selon la qualité obtenue." },
  ]}
  useCasesTitle="Quand l’acquisition doit devenir un système."
  useCases={["Une entreprise génère du trafic mais peu de demandes qualifiées", "Les campagnes sont pilotées canal par canal sans lecture globale", "Le référencement apporte déjà des opportunités et doit être renforcé", "Une filiale veut accélérer son développement au Maroc", "La direction manque de visibilité sur la contribution du marketing"]}
  localTitle="Capter la demande au Maroc et accompagner les ambitions internationales."
  localBody="Le dispositif peut viser des décideurs marocains, des consommateurs locaux, des marques étrangères qui s’implantent au Maroc ou des marchés internationaux servis depuis le pays. Les langues, les requêtes et les parcours sont adaptés à chaque cible."
  faqs={serviceFaqs["marketing-digital"]}
  cta={{ title: "Votre acquisition produit-elle les bonnes demandes ?", body: "Un audit du parcours et des données disponibles permet souvent d’identifier les premières décisions utiles.", label: "Examiner le dispositif" }}
/>;

export default MarketingDigital;
