import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SEOHead } from "@/components/SEOHead";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WHATSAPP_URL } from "@/config/contact";

const cases = [
  { client: "OCB Maroc", status: "Mission Link Agency", sector: "FMCG / marque internationale", title: "Adapter une marque mondiale à son marché marocain", challenge: "Installer une expression locale cohérente avec les codes d’une marque internationale, sans diluer son identité ni sa reconnaissance.", approach: "Cadrage de marque, lecture du contexte marocain, ligne éditoriale et coordination des prises de parole avec une attention particulière aux usages locaux.", services: [["Branding", "/branding"], ["Social media", "/social-media"]] },
  { client: "Oncovita", status: "Mission Link Agency", sector: "Santé", title: "Construire une communication claire dans un univers sensible", challenge: "Faire émerger une marque de santé avec une parole accessible, crédible et compatible avec les exigences du secteur.", approach: "Clarification du positionnement, architecture des messages et cadre éditorial pour aligner image, contenus et présence digitale.", services: [["Conseil stratégique", "/conseil-strategique"], ["Contenu", "/content-digital"]] },
  { client: "Nova Spacia", status: "Mission Link Agency", sector: "Bien-être / hospitality", title: "Donner une direction de marque à une expérience premium", challenge: "Transformer une proposition de bien-être en un univers de marque cohérent, identifiable et désirable sur l’ensemble du parcours client.", approach: "Territoire de marque, direction visuelle, contenus et organisation des points de contact digitaux autour d’une même promesse.", services: [["Branding", "/branding"], ["Contenu", "/content-digital"]] },
  { client: "Nexia Morocco", status: "Mission Link Agency", sector: "Conseil B2B", title: "Moderniser l’image d’un cabinet sans perdre sa crédibilité", challenge: "Renforcer la lisibilité et la présence digitale d’un acteur du conseil dans un environnement où la confiance précède la prise de contact.", approach: "Positionnement éditorial, système de contenus et accompagnement de la présence digitale avec une lecture adaptée aux décideurs B2B.", services: [["Direction marketing", "/direction-marketing-externalisee"], ["Social media", "/social-media"]] },
  { client: "Amexa", status: "Mission Link Agency", sector: "Influence", title: "Identifier les bons profils avant d’activer l’influence", challenge: "Éviter une sélection fondée uniquement sur l’audience et construire une liste de créateurs réellement compatible avec la marque.", approach: "Définition des critères, recherche, qualification et recommandation de profils selon leur univers, leur audience et leur adéquation au brief.", services: [["Influence marketing", "/influence-marketing"], ["Conseil stratégique", "/conseil-strategique"]] },
  { client: "Atlas Secret", status: "Mission Link Agency", sector: "Beauté / lifestyle", title: "Structurer l’expression digitale d’une marque marocaine", challenge: "Clarifier les codes de marque et organiser une présence digitale capable de soutenir la désirabilité comme la conversion.", approach: "Cadrage de l’image, lignes de contenu et priorisation des activations dans un système plus cohérent et plus facile à piloter.", services: [["Branding", "/branding"], ["Marketing digital", "/marketing-digital"]] },
] as const;

const EtudesDeCas = () => {
  const structuredData = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Missions et expériences sélectionnées de Link Agency", description: "Sélection de missions de direction marketing, branding, contenu et influence menées par Link Agency au Maroc.", url: "https://linkagency.ma/etudes-de-cas", hasPart: cases.map((item) => ({ "@type": "CreativeWork", name: item.title, about: item.sector, contributor: { "@type": "Organization", name: "Link Agency" } })) };

  return (
    <div className="min-h-screen bg-[#f4f1eb] pt-16 text-[#0a0a0a] sm:pt-20">
      <SEOHead title="Missions et références marketing au Maroc | Link Agency" description="Découvrez une sélection de missions Link Agency en direction marketing externalisée, branding, contenu, social media et influence au Maroc." keywords="références agence marketing maroc, missions branding casablanca, direction marketing externalisée maroc, agence communication casablanca" url="https://linkagency.ma/etudes-de-cas" structuredData={structuredData} />
      <Header />
      <main>
        <section className="border-b border-black/15 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1440px]">
            <p className="editorial-eyebrow text-black/45">Missions sélectionnées · 01–06</p>
            <div className="mt-8 grid gap-12 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
              <h1 className="max-w-5xl text-[clamp(3.7rem,8vw,8.5rem)] font-semibold uppercase leading-[.82] tracking-[-.075em]">Le travail,<br /><span className="text-[#765fc4]">sans le bruit.</span></h1>
              <p className="max-w-md text-base leading-8 text-black/60">Une sélection volontairement resserrée. Chaque fiche précise la nature de l’intervention et évite de transformer une expérience en promesse commerciale.</p>
            </div>
          </div>
        </section>
        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-[1440px] border-t border-black/20">
            {cases.map((item, index) => (
              <article key={item.client} className="grid gap-8 border-b border-black/20 py-12 md:grid-cols-[90px_.65fr_1.35fr] md:gap-10 md:py-16">
                <p className="font-mono text-xs text-black/35">{String(index + 1).padStart(2, "0")}</p>
                <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#6751b7]">{item.status}</p><h2 className="mt-5 text-3xl font-medium tracking-[-.045em] sm:text-4xl">{item.client}</h2><p className="mt-3 text-xs uppercase tracking-[.12em] text-black/45">{item.sector}</p><div className="mt-7 flex flex-wrap gap-2">{item.services.map(([label, url]) => <Link key={url} to={url} className="border border-black/20 px-3 py-2 text-[10px] font-semibold uppercase tracking-[.1em] transition hover:bg-black hover:text-white">{label}</Link>)}</div></div>
                <div><h3 className="max-w-3xl text-2xl font-medium leading-tight tracking-[-.035em] sm:text-3xl">{item.title}</h3><div className="mt-9 grid gap-8 sm:grid-cols-2"><div><p className="editorial-eyebrow text-black/40">L’enjeu</p><p className="mt-4 text-sm leading-7 text-black/65">{item.challenge}</p></div><div><p className="editorial-eyebrow text-black/40">L’approche</p><p className="mt-4 text-sm leading-7 text-black/65">{item.approach}</p></div></div></div>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-[#bfd0c8] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="editorial-eyebrow text-black/45">Votre sujet</p><h2 className="mt-6 max-w-4xl text-[clamp(2.8rem,6vw,6.5rem)] font-semibold uppercase leading-[.84] tracking-[-.065em]">Parlons de ce qu’il faut réellement organiser.</h2></div><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 bg-[#765fc4] px-6 text-xs font-semibold uppercase tracking-[.14em] text-white transition hover:bg-[#6751b7]">Échanger sur WhatsApp <ArrowUpRight className="h-4 w-4" /></a></div>
        </section>
      </main>
      <Footer /><ScrollToTop /><FloatingContactWidget />
    </div>
  );
};

export default EtudesDeCas;
