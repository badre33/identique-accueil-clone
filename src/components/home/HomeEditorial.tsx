import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { ClientLogosMarquee } from "@/components/ClientLogosMarquee";
import { buildWhatsAppUrl } from "@/config/contact";
import { trackEvent, trackWhatsAppClick } from "@/lib/tracking";

const situations = [
  ["01", "Votre communication existe, mais personne ne la dirige vraiment.", "Nous reprenons le cap, les priorités, les partenaires et la qualité d’exécution."],
  ["02", "Votre marque grandit plus vite que sa structure marketing.", "Nous installons un cadre de pilotage senior sans alourdir votre organisation."],
  ["03", "Vous entrez au Maroc et devez comprendre le terrain vite.", "Nous adaptons la marque, les messages et les canaux au marché marocain."],
];

const expertises = [
  { n: "01", title: "Direction marketing externalisée", text: "Stratégie, arbitrages, feuille de route, coordination et mesure : une direction senior qui s’intègre à votre entreprise.", to: "/direction-marketing-externalisee" },
  { n: "02", title: "Branding & positionnement", text: "Une plateforme de marque claire, une identité distinctive et un système cohérent sur chaque point de contact.", to: "/branding" },
  { n: "03", title: "Contenu & réseaux sociaux", text: "Une ligne éditoriale exigeante, des contenus bilingues et une présence qui construit la préférence de marque.", to: "/social-media" },
  { n: "04", title: "Performance & acquisition", text: "SEO, campagnes, landing pages et analytics au service d’objectifs business définis avant les canaux.", to: "/marketing-digital" },
];

const whatsapp = buildWhatsAppUrl("Bonjour Link Agency, je souhaite échanger sur la direction marketing externalisée de notre entreprise.");

export const HomeEditorial = () => (
  <main className="link-editorial bg-black text-white">
    <section className="relative flex min-h-[88svh] items-end overflow-hidden border-b border-white/10 px-5 pb-14 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
      <div className="editorial-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-[1440px] gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
        <div>
          <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b8935a]">Casablanca · Maroc · International</p>
          <h1 className="max-w-6xl text-[clamp(2.8rem,7vw,7.6rem)] font-medium leading-[0.92] tracking-[-0.065em]">
            Direction de marque.<br /><span className="text-white/38">Marketing externalisé.</span>
          </h1>
        </div>
        <div className="border-l border-white/15 pl-6 lg:mb-2">
          <p className="text-base leading-7 text-white/68">Link Agency pilote la stratégie, l’image, les contenus et la performance des entreprises ambitieuses au Maroc, comme un pôle interne avec une direction senior directement impliquée.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link to="/contact" onClick={() => trackEvent("cta_contact_click", { category: "lead", label: "home_hero" })} className="editorial-button-primary">Parler de votre situation <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/direction-marketing-externalisee" className="editorial-button-secondary">Découvrir le modèle</Link>
          </div>
        </div>
      </div>
    </section>

    <ClientLogosMarquee />

    <section className="editorial-section bg-[#f2f0eb] text-black">
      <div className="editorial-shell">
        <div className="editorial-heading-grid">
          <p className="editorial-eyebrow text-[#725b3a]">Le point de départ</p>
          <div><h2 className="editorial-title">Vous n’avez pas besoin de plus de prestataires.<br />Vous avez besoin d’une direction.</h2><p className="editorial-lead mt-8">Nous intervenons lorsque les actions s’accumulent mais que la marque, les messages et les partenaires ne sont plus alignés.</p></div>
        </div>
        <div className="mt-16 border-t border-black/15">
          {situations.map(([n, title, description]) => <article key={n} className="grid gap-5 border-b border-black/15 py-8 md:grid-cols-[80px_1fr_1fr] md:gap-10"><span className="text-xs font-semibold text-black/35">{n}</span><h3 className="text-xl font-medium leading-snug md:text-2xl">{title}</h3><p className="max-w-xl text-sm leading-7 text-black/60 md:text-base">{description}</p></article>)}
        </div>
      </div>
    </section>

    <section className="editorial-section border-y border-white/10">
      <div className="editorial-shell">
        <div className="editorial-heading-grid"><p className="editorial-eyebrow text-[#b8935a]">Notre modèle</p><div><h2 className="editorial-title">Un interlocuteur senior.<br /><span className="text-white/35">Les bonnes expertises, au bon moment.</span></h2><p className="editorial-lead mt-8 text-white/60">Badre garde la stratégie, les arbitrages et la relation de direction. Des spécialistes sélectionnés sont mobilisés selon la mission. Vous gagnez la cohérence d’un pôle intégré sans financer une structure inutilement lourde.</p></div></div>
        <div className="mt-14 grid border border-white/10 md:grid-cols-3">
          {["Direction et arbitrages", "Exécution coordonnée", "Mesure et amélioration"].map((x, i) => <div key={x} className="min-h-48 border-b border-white/10 p-7 last:border-0 md:border-b-0 md:border-r md:last:border-r-0"><span className="mb-12 block text-xs text-white/30">0{i + 1}</span><h3 className="text-lg font-medium">{x}</h3></div>)}
        </div>
      </div>
    </section>

    <section id="expertises" className="editorial-section bg-white text-black">
      <div className="editorial-shell">
        <div className="editorial-heading-grid"><p className="editorial-eyebrow text-[#725b3a]">Expertises intégrées</p><h2 className="editorial-title">Le branding est le cœur.<br />Le marketing le met en mouvement.</h2></div>
        <div className="mt-16 grid border-l border-t border-black/15 md:grid-cols-2">
          {expertises.map((item) => <Link key={item.to} to={item.to} className="group min-h-72 border-b border-r border-black/15 p-7 transition-colors hover:bg-[#f2f0eb] sm:p-10"><div className="flex justify-between"><span className="text-xs text-black/35">{item.n}</span><ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><h3 className="mt-16 text-2xl font-medium tracking-tight sm:text-3xl">{item.title}</h3><p className="mt-5 max-w-xl text-sm leading-7 text-black/60">{item.text}</p></Link>)}
        </div>
      </div>
    </section>

    <section className="editorial-section">
      <div className="editorial-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div><p className="editorial-eyebrow text-[#b8935a]">Pour qui</p><h2 className="editorial-title mt-7">Des organisations ambitieuses, à un moment décisif.</h2></div>
        <div className="grid gap-px bg-white/10 sm:grid-cols-2">
          {["Entreprise établie dont le marketing manque de cap", "Marque en croissance qui doit professionnaliser son image", "Groupe ou filiale étrangère qui s’implante au Maroc", "Direction qui veut reprendre le contrôle de ses prestataires"].map(x => <div key={x} className="flex min-h-40 gap-4 bg-black p-7"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#b8935a]" /><p className="text-sm leading-6 text-white/72">{x}</p></div>)}
        </div>
      </div>
    </section>

    <section className="border-y border-[#b8935a]/35 bg-[#11100e] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/65">Premier échange confidentiel</p><h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-6xl">Remettons une direction claire derrière votre marque.</h2></div><a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("home_final_cta")} className="inline-flex shrink-0 items-center justify-center gap-3 border border-white bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-transparent hover:text-white">Échanger sur WhatsApp <ArrowUpRight className="h-4 w-4" /></a></div>
    </section>
  </main>
);
