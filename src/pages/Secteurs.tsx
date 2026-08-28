import { Head } from "vite-react-ssg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { EditorialFinalCTA, EditorialPageHero, EditorialSectionIntro } from "@/components/editorial/EditorialPage";

const sectors = [
  { name: "Banque, finance et assurance", description: "Pédagogie, confiance, conformité, acquisition et prise de parole institutionnelle sur des décisions à fort engagement.", needs: ["Contenus pédagogiques", "Gouvernance éditoriale", "Acquisition qualifiée"] },
  { name: "Retail, F&B et e-commerce", description: "Marque, désir, saisonnalité, contenus à cadence soutenue et articulation entre points de vente et canaux digitaux.", needs: ["Brand content", "Social commerce", "Drive to store"] },
  { name: "Industrie et services B2B", description: "Positionnement d’expertise, cycles de décision longs, génération de demande et accompagnement des forces commerciales.", needs: ["Stratégie B2B", "Contenu d’expertise", "Lead generation"] },
  { name: "Santé et bien-être", description: "Clarté, sensibilité, réassurance et expérience de marque dans des contextes où la confiance est centrale.", needs: ["Positionnement", "Information claire", "Réputation"] },
  { name: "Immobilier et hospitality", description: "Image, expérience, contenus premium et dispositifs adaptés à des clientèles locales comme internationales.", needs: ["Branding", "Production visuelle", "Acquisition"] },
  { name: "Marques internationales", description: "Adaptation au marché marocain, coordination locale et déploiement de la plateforme globale sans en perdre la cohérence.", needs: ["Entrée au Maroc", "Localisation", "Pilotage local"] },
];

const structuredData = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Secteurs accompagnés par Link Agency au Maroc", description: "Link Agency accompagne les directions marketing et les marques de secteurs exigeants au Maroc.", url: "https://linkagency.ma/secteurs", hasPart: sectors.map((sector) => ({ "@type": "Service", name: sector.name, description: sector.description, areaServed: { "@type": "Country", name: "Morocco" }, provider: { "@type": "Organization", name: "Link Agency" } })) };

const Secteurs = () => (
  <div className="min-h-screen bg-[#f4f1eb] pt-16 text-[#0a0a0a] sm:pt-20">
    <Head><title>Secteurs accompagnés au Maroc | Link Agency</title><meta name="description" content="Banque, assurance, retail, industrie, santé, immobilier et marques internationales : découvrez les contextes sectoriels accompagnés par Link Agency au Maroc." /><link rel="canonical" href="https://linkagency.ma/secteurs" /><script type="application/ld+json">{JSON.stringify(structuredData)}</script></Head>
    <Header />
    <main className="link-editorial">
      <EditorialPageHero index="14 / SECTEURS" eyebrow="Contextes de marché" title={<>Connaître les codes.<br /><span className="link-cover__outline">Garder un regard neuf.</span></>} description="L’expertise sectorielle permet d’aller plus vite sur les contraintes. Elle ne doit jamais produire des réponses standardisées." dossierLabel="Lecture sectorielle" dossierTitle="Le contexte change la stratégie." dossierBody="Réglementation, cycle de vente, niveau de confiance, saisonnalité ou culture d’achat : chaque marché impose des choix différents." accent="sage" primaryLabel="Présenter votre secteur" />

      <section className="editorial-section bg-[#d8cec1]"><div className="editorial-shell"><EditorialSectionIntro eyebrow="Les terrains" title="Six contextes où la marque et le marketing exigent une lecture précise." body="Cette liste oriente la conversation commerciale. Elle ne limite pas le cabinet à quelques verticales." /><div className="mt-16 grid border-l border-t border-black/20 md:grid-cols-2 xl:grid-cols-3">{sectors.map((sector,index)=><article key={sector.name} className="min-h-[390px] border-b border-r border-black/20 p-7"><span className="font-mono text-xs text-black/35">{String(index+1).padStart(2,"0")}</span><h2 className="mt-14 text-2xl font-medium leading-[1.05] tracking-[-.04em]">{sector.name}</h2><p className="mt-6 text-sm leading-7 text-black/60">{sector.description}</p><div className="mt-8 flex flex-wrap gap-2">{sector.needs.map((need)=><span key={need} className="border border-black/20 px-3 py-2 text-[9px] font-semibold uppercase tracking-[.11em] text-black/55">{need}</span>)}</div></article>)}</div></div></section>

      <section className="editorial-section bg-[#0a0a0a] text-white"><div className="editorial-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="editorial-eyebrow text-[#b8935a]">Notre principe</p><h2 className="editorial-title mt-7">La spécialisation utile, sans vision en tunnel.</h2></div><div className="space-y-6 text-base leading-8 text-white/60"><p>Une banque et une marque de restauration n’ont ni les mêmes contraintes, ni les mêmes preuves, ni les mêmes cycles de décision. Leur stratégie ne peut donc pas être copiée depuis un catalogue.</p><p>En revanche, toutes ont besoin d’un positionnement clair, d’une image cohérente et d’un dispositif piloté. C’est ce socle commun que Link Agency adapte au contexte réel.</p></div></div></section>

      <EditorialFinalCTA title="Votre secteur n’est pas une case. Votre contexte mérite d’être lu." body="Présentez le marché, les objectifs et les contraintes. Nous vous dirons rapidement si notre expérience est pertinente." label="Ouvrir la discussion" accent="lime" />
    </main>
    <Footer />
    <FloatingContactWidget />
  </div>
);

export default Secteurs;
