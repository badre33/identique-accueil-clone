import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { LocalCitiesLinks } from "@/components/LocalCitiesLinks";
import { SEOHead } from "@/components/SEOHead";
import { EditorialFAQ, EditorialFinalCTA, EditorialPageHero, EditorialSectionIntro } from "@/components/editorial/EditorialPage";
import { serviceFaqs } from "@/data/serviceFaqs";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateWebPageSchema } from "@/utils/structuredData";

const brandingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    generateServiceSchema("Services Branding et Identité Visuelle", "Conception d’identités de marque cohérentes au Maroc : logo, charte graphique, positionnement et plateforme de marque.", "Sur devis"),
    generateWebPageSchema("Branding et Identité Visuelle au Maroc | Link Agency", "Création et refonte de marque : positionnement, identité visuelle, logo, charte graphique et plateforme de marque.", "https://linkagency.ma/branding"),
    generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "Branding", url: "https://linkagency.ma/branding" }]),
    generateFAQSchema(serviceFaqs.branding),
  ],
};

const pillars = [
  ["01", "Positionnement", "Clarifier la promesse, le marché, les publics et le territoire de différenciation avant toute décision visuelle."],
  ["02", "Plateforme de marque", "Formaliser vision, mission, valeurs, personnalité, narratif et principes de langage dans un référentiel utilisable."],
  ["03", "Identité visuelle", "Concevoir un système cohérent de logo, couleurs, typographies, iconographie et règles de composition."],
  ["04", "Déploiement", "Transformer la stratégie en outils concrets pour les contenus, campagnes, supports commerciaux et expériences digitales."],
];

const steps = [
  ["Lecture", "Audit de l’existant, entretiens, concurrence, signaux culturels et perception de la marque."],
  ["Décision", "Choix du positionnement, de la proposition de valeur et du territoire narratif."],
  ["Conception", "Exploration créative, système d’identité et langage de marque."],
  ["Transmission", "Guidelines, gabarits prioritaires et accompagnement du déploiement."],
];

const situations = [
  "Lancer une nouvelle marque ou une nouvelle offre",
  "Repositionner une entreprise devenue illisible",
  "Moderniser une identité sans perdre son capital",
  "Adapter une marque internationale au marché marocain",
  "Aligner plusieurs activités sous une architecture commune",
  "Donner aux équipes un cadre de marque réellement utilisable",
];

const Branding = () => (
  <div className="min-h-screen bg-[#f4f1eb] pt-16 text-[#0a0a0a] sm:pt-20">
    <SEOHead title="Agence Branding au Maroc | Identité et Stratégie de Marque" description="Agence branding au Maroc : positionnement, plateforme de marque, création de logo, identité visuelle et charte graphique. Casablanca, Rabat et Marrakech." keywords="agence branding maroc, stratégie de marque, identité visuelle, plateforme de marque, charte graphique, agence branding casablanca" url="https://linkagency.ma/branding" type="service" structuredData={brandingSchema} />
    <Header />
    <main className="link-editorial">
      <EditorialPageHero
        index="02 / EXPERTISE"
        eyebrow="Branding et identité de marque"
        title={<>Une marque n’est pas un logo.<br /><span className="link-cover__outline">C’est une décision.</span></>}
        description="Nous clarifions ce que la marque doit représenter, puis construisons le système verbal et visuel capable de le rendre évident, au Maroc comme à l’international."
        dossierLabel="Plateforme de marque"
        dossierTitle="Être compris. Puis reconnu."
        dossierBody="Le design vient matérialiser un choix stratégique. Il ne remplace ni le positionnement, ni le récit, ni la cohérence dans le temps."
        accent="terracotta"
        primaryLabel="Cadrer une marque"
        secondaryLabel="Voir les missions"
        secondaryTo="/collaborations"
      />

      <section className="editorial-section bg-[#d8cec1]">
        <div className="editorial-shell">
          <EditorialSectionIntro eyebrow="Le système" title={<>Quatre blocs.<br />Une seule marque.</>} body="Chaque livrable répond à une même ambition : rendre la marque plus juste, plus distinctive et plus facile à déployer." />
          <div className="mt-16 grid border-l border-t border-black/20 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(([number, title, description]) => <article key={number} className="editorial-index-card flex flex-col justify-between p-7"><span className="font-mono text-xs text-black/35">{number}</span><div><h3 className="text-2xl font-medium tracking-[-.035em]">{title}</h3><p className="mt-5 text-sm leading-7 text-black/60">{description}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="editorial-section bg-[#765fc4] text-white">
        <div className="editorial-shell">
          <EditorialSectionIntro light eyebrow="Méthode" title="La création commence par une lecture précise." body="Le processus alterne exploration, décision et validation. L’objectif n’est pas de multiplier les pistes, mais d’arriver à un système défendable et durable." />
          <div className="mt-16 border-t border-white/20">
            {steps.map(([title, description], index) => <article key={title} className="grid gap-4 border-b border-white/20 py-7 sm:grid-cols-[70px_230px_1fr] sm:items-start"><span className="font-mono text-xs text-white/40">0{index + 1}</span><h3 className="text-xl font-medium tracking-[-.03em]">{title}</h3><p className="max-w-2xl text-sm leading-7 text-white/65">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="editorial-section bg-[#bfd0c8]">
        <div className="editorial-shell grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="editorial-eyebrow text-black/45">Quand intervenir</p><h2 className="editorial-title mt-7">Les moments où la marque doit être remise au centre.</h2></div>
          <div className="border-t border-black/20">{situations.map((situation, index) => <div key={situation} className="grid grid-cols-[42px_1fr] border-b border-black/20 py-5 text-sm"><span className="font-mono text-[10px] text-black/35">{String(index + 1).padStart(2, "0")}</span><span>{situation}</span></div>)}</div>
        </div>
      </section>

      <section className="editorial-section bg-[#f4f1eb]">
        <div className="editorial-shell">
          <EditorialSectionIntro eyebrow="Ancrage local" title="Une agence branding au Maroc, avec des standards de marque internationaux." body="Link Agency accompagne les entreprises marocaines, les filiales et les marques étrangères dans la création ou la refonte de leur identité. La connaissance du marché local permet d’ajuster les codes, les langues et les points de contact sans diluer la plateforme globale." />
        </div>
      </section>

      <LocalCitiesLinks title="Branding à Casablanca, Rabat et Marrakech" subtitle="Un même niveau d’exigence, adapté au contexte commercial et culturel de chaque marché." />

      <section className="editorial-section bg-[#f4f1eb]">
        <div className="editorial-shell grid gap-12 lg:grid-cols-[260px_1fr]"><p className="editorial-eyebrow text-black/45">Questions fréquentes</p><EditorialFAQ items={serviceFaqs.branding} /></div>
      </section>

      <EditorialFinalCTA title="Votre marque doit-elle être créée, clarifiée ou repositionnée ?" body="Un premier échange permet d’identifier le vrai sujet avant de parler de logo, de territoire visuel ou de supports." label="Échanger sur la marque" accent="lime" />
    </main>
    <Footer />
    <FloatingContactWidget />
  </div>
);

export default Branding;
