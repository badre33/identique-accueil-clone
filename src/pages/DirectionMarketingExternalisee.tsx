import { Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { EditorialFAQ, EditorialFinalCTA, EditorialPageHero, EditorialSectionIntro } from "@/components/editorial/EditorialPage";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateWebPageSchema } from "@/utils/structuredData";

const faqs = [
  { question: "Qu’est-ce qu’un directeur marketing externalisé ?", answer: "C’est un responsable senior qui définit et pilote la stratégie marketing de l’entreprise sans être recruté à temps plein. Il coordonne les ressources internes et externes, arbitre les priorités et suit les résultats." },
  { question: "À quelles entreprises ce modèle convient-il ?", answer: "Il convient notamment aux entreprises en croissance, aux directions insatisfaites d’une communication fragmentée, aux filiales sans direction marketing locale et aux marques étrangères qui entrent au Maroc." },
  { question: "Link Agency travaille-t-elle avec nos prestataires existants ?", answer: "Oui. Le dispositif peut intégrer vos équipes, agences et freelances actuels. Nous auditons leur contribution, clarifions les responsabilités et complétons uniquement les expertises manquantes." },
  { question: "Quelles expertises peuvent être pilotées ?", answer: "Le périmètre peut couvrir la stratégie de marque, le branding, les contenus, les réseaux sociaux, le SEO, l’acquisition, les campagnes, les sites, l’influence, l’événementiel et les outils de mesure." },
];

const schema = { "@context": "https://schema.org", "@graph": [
  generateServiceSchema("Direction marketing externalisée", "Pilotage senior de la stratégie de marque, du marketing, des partenaires et de la performance pour entreprises au Maroc."),
  generateWebPageSchema("Direction Marketing Externalisée au Maroc | Link Agency", "Une direction marketing senior pour piloter votre stratégie, votre marque, vos partenaires et votre performance au Maroc.", "https://linkagency.ma/direction-marketing-externalisee"),
  generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "Direction marketing externalisée", url: "https://linkagency.ma/direction-marketing-externalisee" }]),
  generateFAQSchema(faqs),
] };

const phases = [
  ["01", "Cadrer", "Lire la marque, le marché, l’organisation, les actions en cours et les partenaires."],
  ["02", "Décider", "Fixer le positionnement, les objectifs, les priorités, les budgets et les indicateurs."],
  ["03", "Orchestrer", "Coordonner les ressources, les productions, les campagnes et les points de décision."],
  ["04", "Améliorer", "Interpréter les résultats, arbitrer et faire évoluer le dispositif dans le temps."],
];

const scopes = [
  "Stratégie marketing et feuille de route",
  "Positionnement, branding et identité",
  "Contenus, réseaux sociaux et influence",
  "SEO, acquisition et performance",
  "Coordination des partenaires et budgets",
  "Reporting et arbitrages de direction",
];

const configurations = [
  ["Direction externalisée", "Le pilotage marketing est pris en charge dans la durée, au rythme des décisions et des cycles de l’entreprise."],
  ["Renfort de direction", "La direction générale ou marketing est épaulée sur un lancement, une transformation ou un enjeu prioritaire."],
  ["Relais d’entrée au Maroc", "Une marque internationale dispose d’un interlocuteur local pour adapter, déployer et coordonner sa stratégie au Maroc."],
];

const DirectionMarketingExternalisee = () => (
  <div className="min-h-screen bg-[#f4f1eb] pt-16 text-[#0a0a0a] sm:pt-20">
    <SEOHead title="Direction Marketing Externalisée au Maroc | Link Agency" description="Une direction marketing senior pour piloter votre stratégie, votre marque, vos partenaires et votre performance au Maroc. Modèle flexible, directement dirigé par le fondateur." url="https://linkagency.ma/direction-marketing-externalisee" structuredData={schema} alternateLanguages={[{ hrefLang: "en", href: "https://linkagency.ma/en/outsourced-marketing-department-morocco" }]} />
    <Header />
    <main className="link-editorial">
      <EditorialPageHero
        index="01 / MODÈLE"
        eyebrow="Direction marketing externalisée · Maroc"
        title={<>Votre pôle marketing,<br /><span className="link-cover__outline">dirigé comme en interne.</span></>}
        description="Une direction senior pour donner le cap, coordonner les expertises et rendre chaque action plus cohérente, sans recruter immédiatement une structure complète."
        dossierLabel="Mandat de direction"
        dossierTitle="Le cap avant les canaux."
        dossierBody="Badre garde la stratégie, les arbitrages et la relation de direction. Les expertises sont mobilisées selon la feuille de route, pas selon un catalogue figé."
        accent="violet"
        primaryLabel="Évaluer le besoin"
        secondaryLabel="Télécharger la présentation"
        secondaryTo="/documents/LinkAgency_Dossier_Marque_2026_FINAL.pdf"
      />

      <section className="editorial-section bg-[#d8cec1]">
        <div className="editorial-shell">
          <EditorialSectionIntro eyebrow="La mission" title={<>Nous prenons la responsabilité du cap.<br />Puis nous organisons l’ensemble.</>} body="Link Agency s’intègre à la direction pour clarifier les décisions, coordonner les ressources et maintenir un même niveau d’exigence sur tout le dispositif." />
          <div className="mt-16 grid border-l border-t border-black/20 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map(([number, title, description]) => (
              <article key={number} className="editorial-index-card flex flex-col justify-between p-7">
                <span className="font-mono text-xs text-black/35">{number}</span>
                <div><h3 className="text-2xl font-medium tracking-[-.03em]">{title}</h3><p className="mt-5 text-sm leading-7 text-black/60">{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section bg-[#0a0a0a] text-white">
        <div className="editorial-shell grid gap-16 lg:grid-cols-[.85fr_1.15fr]">
          <div><p className="editorial-eyebrow text-[#b8935a]">Périmètre piloté</p><h2 className="editorial-title mt-7">Une seule logique derrière toute la marque.</h2><p className="mt-7 max-w-xl text-base leading-8 text-white/55">Le sujet n’est pas d’activer tous les leviers. Il est de choisir les bons, dans le bon ordre, avec un niveau d’exigence constant.</p></div>
          <div className="border-t border-white/15">
            {scopes.map((scope, index) => <div key={scope} className="grid grid-cols-[42px_1fr] items-center border-b border-white/15 py-5 text-sm text-white/75"><span className="font-mono text-[10px] text-white/30">{String(index + 1).padStart(2, "0")}</span><span className="flex items-center gap-3"><Check className="h-4 w-4 text-[#d7e942]" />{scope}</span></div>)}
          </div>
        </div>
      </section>

      <section className="editorial-section bg-[#bfd0c8]">
        <div className="editorial-shell">
          <EditorialSectionIntro eyebrow="Trois configurations" title="Le niveau d’intégration s’adapte à votre réalité." body="Un mandat clair, un interlocuteur senior et un dispositif calibré selon vos ressources déjà en place." />
          <div className="mt-16 grid border-l border-t border-black/20 md:grid-cols-3">
            {configurations.map(([title, description], index) => <article key={title} className="editorial-index-card p-8"><span className="font-mono text-xs text-black/35">0{index + 1}</span><h3 className="mt-16 text-2xl font-medium tracking-[-.035em]">{title}</h3><p className="mt-6 text-sm leading-7 text-black/60">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="editorial-section bg-[#f4f1eb]">
        <div className="editorial-shell grid gap-12 lg:grid-cols-[260px_1fr]"><p className="editorial-eyebrow text-black/45">Questions fréquentes</p><EditorialFAQ items={faqs} /></div>
      </section>

      <EditorialFinalCTA title="Voyons si ce modèle correspond à votre situation." body="Un premier échange permet de comprendre l’organisation actuelle, l’ambition et les points de friction avant de proposer un cadre d’intervention." label="Parler à Badre" accent="lime" />
    </main>
    <Footer />
  </div>
);

export default DirectionMarketingExternalisee;
