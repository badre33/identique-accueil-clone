import { ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateWebPageSchema } from "@/utils/structuredData";

const faqs = [
  { question: "Qu’est-ce qu’un directeur marketing externalisé ?", answer: "C’est un responsable senior qui définit et pilote la stratégie marketing de l’entreprise sans être recruté à temps plein. Il coordonne les ressources internes et externes, arbitre les priorités et suit les résultats." },
  { question: "À quelles entreprises ce modèle convient-il ?", answer: "Il convient notamment aux entreprises en croissance, aux directions insatisfaites d’une communication fragmentée, aux filiales sans direction marketing locale et aux marques étrangères qui entrent au Maroc." },
  { question: "Link Agency travaille-t-elle avec nos prestataires existants ?", answer: "Oui. Nous pouvons auditer, recadrer et coordonner les agences, freelances, équipes internes et partenaires déjà en place, puis compléter le dispositif uniquement lorsque c’est nécessaire." },
  { question: "Quelles expertises peuvent être pilotées ?", answer: "Le périmètre peut couvrir la stratégie de marque, le branding, les contenus, les réseaux sociaux, le SEO, l’acquisition, les campagnes, les sites et landing pages, l’influence, l’événementiel et les outils de mesure." },
];

const schema = { "@context": "https://schema.org", "@graph": [
  generateServiceSchema("Direction marketing externalisée", "Pilotage senior de la stratégie de marque, du marketing, des partenaires et de la performance pour entreprises au Maroc."),
  generateWebPageSchema("Direction Marketing Externalisée au Maroc | Link Agency", "Une direction marketing senior pour piloter votre stratégie, votre marque, vos partenaires et votre performance au Maroc.", "https://linkagency.ma/direction-marketing-externalisee"),
  generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "Direction marketing externalisée", url: "https://linkagency.ma/direction-marketing-externalisee" }]),
  generateFAQSchema(faqs),
] };

const phases = [
  ["01", "Cadrer", "Diagnostic de la marque, du marché, de l’organisation, des actions et des partenaires."],
  ["02", "Décider", "Positionnement, objectifs, priorités, budget, feuille de route et indicateurs."],
  ["03", "Orchestrer", "Coordination des ressources, production, campagnes et points de décision."],
  ["04", "Améliorer", "Lecture des résultats, arbitrages et évolution continue du dispositif."],
];

const DirectionMarketingExternalisee = () => (
  <div className="min-h-screen bg-black pt-16 text-white sm:pt-20">
    <SEOHead title="Direction Marketing Externalisée au Maroc | Link Agency" description="Une direction marketing senior pour piloter votre stratégie, votre marque, vos partenaires et votre performance au Maroc. Modèle flexible, directement dirigé par le fondateur." url="https://linkagency.ma/direction-marketing-externalisee" structuredData={schema} />
    <Header />
    <main className="link-editorial">
      <section className="border-b border-white/10 px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="editorial-shell grid gap-16 lg:grid-cols-[1fr_360px] lg:items-end">
          <div><p className="editorial-eyebrow mb-7 text-[#b8935a]">Direction marketing externalisée · Maroc</p><h1 className="max-w-5xl text-[clamp(2.8rem,6.4vw,6.8rem)] font-medium leading-[.94] tracking-[-.06em]">Votre pôle marketing,<br /><span className="text-white/35">dirigé comme en interne.</span></h1></div>
          <div className="border-l border-white/15 pl-6"><p className="text-base leading-8 text-white/65">Une direction senior pour donner le cap, coordonner les expertises et rendre chaque action plus cohérente — sans recruter immédiatement une structure complète.</p><Link to="/contact" className="editorial-button-primary mt-8">Évaluer votre besoin <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="editorial-section bg-[#f2f0eb] text-black"><div className="editorial-shell"><div className="editorial-heading-grid"><p className="editorial-eyebrow text-[#8d0b21]">La mission</p><div><h2 className="editorial-title">Nous ne venons pas ajouter une couche d’exécution.<br />Nous organisons l’ensemble.</h2><p className="editorial-lead mt-8">Link Agency agit comme une extension de la direction. Le fondateur garde la stratégie et les arbitrages ; les expertises nécessaires sont mobilisées selon la feuille de route.</p></div></div>
        <div className="mt-16 grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-4">{phases.map(([n,t,d]) => <article key={n} className="min-h-72 border-b border-r border-black/15 p-7"><span className="text-xs text-black/35">{n}</span><h3 className="mt-14 text-2xl font-medium">{t}</h3><p className="mt-5 text-sm leading-7 text-black/60">{d}</p></article>)}</div>
      </div></section>

      <section className="editorial-section"><div className="editorial-shell grid gap-16 lg:grid-cols-2"><div><p className="editorial-eyebrow text-[#b8935a]">Ce que nous pilotons</p><h2 className="editorial-title mt-7">Une seule logique derrière toute la marque.</h2></div><div className="grid gap-0 border-t border-white/10">{["Stratégie marketing et feuille de route", "Positionnement, branding et identité", "Contenus, réseaux sociaux et influence", "SEO, acquisition et performance", "Coordination des partenaires et budgets", "Reporting et arbitrages de direction"].map(x => <div key={x} className="flex gap-4 border-b border-white/10 py-5 text-sm text-white/70"><Check className="h-4 w-4 text-[#c8102e]" />{x}</div>)}</div></div></section>

      <section className="editorial-section bg-white text-black"><div className="editorial-shell"><div className="editorial-heading-grid"><p className="editorial-eyebrow text-[#8d0b21]">Trois configurations</p><h2 className="editorial-title">Le niveau d’intégration s’adapte à votre réalité.</h2></div><div className="mt-16 grid border-l border-t border-black/15 md:grid-cols-3">{[["Direction externalisée", "Nous prenons le pilotage du marketing dans la durée."],["Renfort de direction", "Nous épaulons une direction générale ou marketing existante sur un enjeu précis."],["Entrée au Maroc", "Nous devenons le relais local d’une marque ou d’un groupe international."]].map(([t,d]) => <article key={t} className="min-h-64 border-b border-r border-black/15 p-8"><h3 className="text-2xl font-medium">{t}</h3><p className="mt-6 text-sm leading-7 text-black/60">{d}</p></article>)}</div></div></section>

      <section className="editorial-section"><div className="editorial-shell max-w-5xl"><p className="editorial-eyebrow text-[#b8935a]">Questions fréquentes</p><div className="mt-10 border-t border-white/10">{faqs.map(item => <details key={item.question} className="group border-b border-white/10 py-6"><summary className="cursor-pointer list-none pr-10 text-lg font-medium">{item.question}</summary><p className="max-w-3xl pt-5 text-sm leading-7 text-white/60">{item.answer}</p></details>)}</div></div></section>

      <section className="bg-[#c8102e] px-5 py-16 sm:px-8 lg:px-12"><div className="editorial-shell flex flex-col justify-between gap-8 md:flex-row md:items-center"><h2 className="max-w-3xl text-4xl font-medium tracking-[-.04em] sm:text-5xl">Voyons si ce modèle correspond à votre situation.</h2><Link to="/contact" className="inline-flex items-center justify-center gap-3 border border-white bg-white px-6 py-4 text-sm font-semibold text-black">Prendre contact <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
    <Footer />
  </div>
);

export default DirectionMarketingExternalisee;
