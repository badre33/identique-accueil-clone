import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ClientLogosMarquee } from "@/components/ClientLogosMarquee";
import { buildWhatsAppUrl } from "@/config/contact";
import { trackWhatsAppClick } from "@/lib/tracking";

const situations = [
  { n: "01", color: "bg-[#bfd0c8]", title: "Votre communication existe, mais personne ne la dirige vraiment.", text: "Nous reprenons le cap, les priorités, les partenaires et la qualité d’exécution." },
  { n: "02", color: "bg-[#d8cec1]", title: "Votre marque grandit plus vite que sa structure marketing.", text: "Nous installons un cadre de pilotage senior sans alourdir votre organisation." },
  { n: "03", color: "bg-[#c86b4a]", title: "Vous entrez au Maroc et devez comprendre le terrain vite.", text: "Nous adaptons la marque, les messages et les canaux au marché marocain." },
];

const expertises = [
  { n: "01", title: "Direction marketing externalisée", text: "Stratégie, arbitrages, feuille de route, coordination et mesure.", to: "/direction-marketing-externalisee", tone: "hover:bg-[#765fc4] hover:text-white" },
  { n: "02", title: "Branding & positionnement", text: "Plateforme de marque, identité distinctive et cohérence des points de contact.", to: "/branding", tone: "hover:bg-[#c86b4a]" },
  { n: "03", title: "Contenu & réseaux sociaux", text: "Ligne éditoriale, contenus bilingues et présence qui construit la préférence.", to: "/social-media", tone: "hover:bg-[#bfd0c8]" },
  { n: "04", title: "Performance & acquisition", text: "SEO, campagnes, landing pages et analytics alignés sur les objectifs business.", to: "/marketing-digital", tone: "hover:bg-[#d7e942]" },
];

const dossiers = [
  { client: "OCB Maroc", mission: "Stratégie sociale, contenus, campagnes et partenariats", label: "Marque internationale / Maroc", color: "bg-[#c86b4a]" },
  { client: "Nexia Morocco", mission: "Positionnement, transformation digitale et communication corporate", label: "Conseil / B2B", color: "bg-[#bfd0c8]" },
  { client: "Nova Spacia", mission: "Identité visuelle, présence digitale et positionnement premium", label: "Architecture / Design", color: "bg-[#765fc4] text-white" },
  { client: "Oncovita", mission: "Identité, stratégie de communication et présence digitale", label: "Santé / Impact", color: "bg-[#d8cec1]" },
];

const whatsapp = buildWhatsAppUrl("Bonjour Link Agency, je souhaite échanger sur la direction marketing externalisée de notre entreprise.");

export const HomeEditorial = () => (
  <main className="link-editorial bg-[#0a0a0a] text-white">
    <section className="link-cover relative min-h-[calc(100svh-4rem)] overflow-hidden bg-[#f4f1eb] text-[#0a0a0a] sm:min-h-[calc(100svh-5rem)]">
      <div className="link-cover__rail" aria-hidden="true"><span>Direction de marque</span><span>Casablanca — Maroc</span><span>Est. 2015</span></div>
      <div className="link-cover__canvas mx-auto grid min-h-[calc(100svh-4rem)] max-w-[1600px] grid-rows-[auto_1fr_auto] px-5 pb-6 pt-8 sm:min-h-[calc(100svh-5rem)] sm:px-8 sm:pb-8 lg:px-12 lg:pb-10">
        <div className="flex items-center justify-between border-b border-black/20 pb-4 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-[11px]">
          <span>Link Agency / Dossier 01</span><span className="hidden sm:block">Stratégie · Contenu · Performance</span><span>2026</span>
        </div>
        <div className="grid items-center gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,390px)] lg:gap-14 lg:py-12">
          <div className="relative z-10">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.23em]"><span className="h-2.5 w-2.5 rounded-full bg-[#d7e942]" />Pôle marque & marketing externalisé</p>
            <h1 className="link-cover__title max-w-[1050px] text-[clamp(3.25rem,8.4vw,9.5rem)] font-semibold uppercase leading-[0.79] tracking-[-0.075em]">Le cap.<br />L’image.<br /><span className="link-cover__outline">L’impact.</span></h1>
            <div className="mt-9 flex max-w-3xl flex-col gap-6 border-t border-black/20 pt-5 md:flex-row md:items-start md:justify-between">
              <p className="max-w-xl text-sm font-medium leading-6 sm:text-base sm:leading-7">Nous dirigeons la stratégie, l’image et la performance des marques ambitieuses — comme un pôle interne, avec la souplesse d’une structure indépendante.</p>
              <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">Maroc / International</span>
            </div>
          </div>
          <aside className="link-cover__dossier relative mx-auto w-full max-w-[390px] lg:mx-0" aria-label="Présentation de Link Agency">
            <div className="link-cover__tab link-cover__tab--sage">Brand direction</div><div className="link-cover__tab link-cover__tab--terra">Positioning</div><div className="link-cover__tab link-cover__tab--lime">Performance</div>
            <div className="relative min-h-[390px] border border-black bg-[#765fc4] p-7 text-white shadow-[12px_14px_0_#0a0a0a] sm:min-h-[460px] sm:p-9">
              <div className="flex items-start justify-between border-b border-white/45 pb-5 text-[10px] font-semibold uppercase tracking-[0.18em]"><span>Link©</span><span>Confidentiel</span></div>
              <div className="mt-16 sm:mt-24"><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">Notre métier</p><p className="mt-4 text-3xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-4xl">Mettre une direction claire derrière chaque marque.</p></div>
              <div className="absolute inset-x-7 bottom-7 border-t border-white/45 pt-5 sm:inset-x-9 sm:bottom-9"><p className="text-xs leading-5 text-white/75">Pilotage senior · Expertises sur mesure · Exécution coordonnée</p></div>
            </div>
          </aside>
        </div>
        <div className="flex flex-col gap-3 border-t border-black/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row"><a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("home_hero")} className="editorial-button-primary">Parler sur WhatsApp <ArrowRight className="h-4 w-4" /></a><Link to="/direction-marketing-externalisee" className="inline-flex min-h-12 items-center justify-center border border-black px-5 text-xs font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-black hover:text-white">Découvrir le modèle</Link></div>
          <p className="flex min-h-11 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45"><span className="h-px w-8 bg-current" />Dossier de direction / 01</p>
        </div>
      </div>
    </section>

    <ClientLogosMarquee />

    <section className="bg-[#f4f1eb] px-5 py-24 text-[#0a0a0a] sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 border-b border-black pb-10 lg:grid-cols-[220px_1fr]"><p className="editorial-eyebrow">01 / Le diagnostic</p><h2 className="max-w-5xl text-[clamp(2.6rem,5.6vw,6rem)] font-medium leading-[.93] tracking-[-.06em]">Plus d’actions ne créent pas plus de direction.</h2></div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">{situations.map((item) => <article key={item.n} className={`${item.color} group flex min-h-[360px] flex-col justify-between border border-black p-7 transition-transform duration-500 hover:-translate-y-2 sm:p-9`}><div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[.18em]"><span>Situation {item.n}</span><span>→</span></div><div><h3 className="text-2xl font-medium leading-tight tracking-[-.035em] sm:text-3xl">{item.title}</h3><p className="mt-7 border-t border-black/30 pt-5 text-sm leading-6 text-black/65">{item.text}</p></div></article>)}</div>
      </div>
    </section>

    <section className="relative overflow-hidden border-y border-white/20 bg-[#765fc4] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="relative mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[minmax(300px,.72fr)_1.28fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="editorial-eyebrow text-[#d7e942]">02 / Le modèle</p>
          <h2 className="mt-9 text-[clamp(3.5rem,7.2vw,8rem)] font-semibold uppercase leading-[.78] tracking-[-.075em]">Direction.<br /><span className="link-cover__outline-light">Exécution.</span><br />Mesure.</h2>
          <p className="mt-10 max-w-sm border-t border-white/25 pt-6 text-sm leading-7 text-white/55">Un même regard tient le cap, organise les expertises et juge les résultats. Votre marketing cesse d’être une addition de prestataires.</p>
        </div>
        <div className="border-t border-white/25">
          {[{n:"01",tag:"Décider",t:"Le cap avant les canaux",d:"Nous clarifions les priorités, les arbitrages et la feuille de route avant de lancer la production.",color:"group-hover:bg-[#0a0a0a]"},{n:"02",tag:"Organiser",t:"Les bonnes compétences pour la mission",d:"Marque, contenu, acquisition et partenaires travaillent dans le même système, sous une direction identifiable.",color:"group-hover:bg-[#c86b4a] group-hover:text-black"},{n:"03",tag:"Améliorer",t:"La mesure au service des décisions",d:"Les résultats servent à choisir, corriger et concentrer l’investissement — pas à remplir un reporting.",color:"group-hover:bg-[#bfd0c8] group-hover:text-black"}].map((item) => <article key={item.n} className={`group grid min-h-[235px] gap-8 border-b border-white/25 p-6 transition-colors duration-500 sm:p-8 md:grid-cols-[64px_1fr] ${item.color}`}><span className="text-xs opacity-45">{item.n}</span><div className="flex flex-col justify-between"><p className="text-[10px] font-bold uppercase tracking-[.2em] opacity-50">{item.tag}</p><div className="mt-14"><h3 className="text-3xl font-medium leading-tight tracking-[-.04em] sm:text-4xl">{item.t}</h3><p className="mt-5 max-w-xl text-sm leading-7 opacity-70">{item.d}</p></div></div></article>)}
        </div>
      </div>
    </section>

    <section className="bg-[#d8cec1] px-5 py-24 text-[#0a0a0a] sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-7 border-b border-black pb-9 lg:flex-row lg:items-end"><div><p className="editorial-eyebrow">03 / Dossiers sélectionnés</p><h2 className="mt-7 text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[.93] tracking-[-.055em]">La preuve par le travail.</h2></div><Link to="/collaborations" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em]">Voir les missions <ArrowUpRight className="h-4 w-4" /></Link></div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">{dossiers.map((item, index) => <Link to="/collaborations" key={item.client} className={`${item.color} group flex min-h-[330px] flex-col justify-between border border-black p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-9`}><div className="flex justify-between text-[10px] font-bold uppercase tracking-[.18em]"><span>Dossier 0{index + 1}</span><ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><div><p className="text-[10px] font-bold uppercase tracking-[.18em] opacity-55">{item.label}</p><h3 className="mt-3 text-4xl font-medium tracking-[-.045em] sm:text-5xl">{item.client}</h3><p className="mt-6 max-w-xl border-t border-current/30 pt-5 text-sm leading-6 opacity-70">{item.mission}</p></div></Link>)}</div>
      </div>
    </section>

    <section id="expertises" className="bg-[#f4f1eb] px-5 py-24 text-[#0a0a0a] sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]"><p className="editorial-eyebrow">04 / Le système</p><h2 className="max-w-5xl text-[clamp(2.8rem,5.4vw,5.8rem)] font-medium leading-[.94] tracking-[-.06em]">Le branding est le cœur.<br />Le marketing le met en mouvement.</h2></div>
        <div className="mt-16 border-t border-black">{expertises.map((item) => <Link key={item.to} to={item.to} className={`group grid gap-5 border-b border-black py-7 transition-all duration-500 sm:px-5 md:grid-cols-[80px_1fr_1fr_30px] md:items-center ${item.tone}`}><span className="text-xs opacity-45">{item.n}</span><h3 className="text-xl font-medium tracking-tight sm:text-2xl">{item.title}</h3><p className="max-w-xl text-sm leading-6 opacity-60">{item.text}</p><ArrowUpRight className="hidden h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:block" /></Link>)}</div>
      </div>
    </section>

    <section className="grid bg-[#0a0a0a] lg:grid-cols-2">
      <div className="min-h-[520px] bg-[#765fc4] p-8 text-white sm:p-12 lg:p-16"><div className="flex h-full flex-col justify-between"><p className="editorial-eyebrow text-white/65">05 / Dans l’ombre</p><blockquote className="max-w-2xl text-[clamp(2.4rem,4.7vw,5.2rem)] font-medium leading-[.94] tracking-[-.055em]">« La marque doit être visible. Pas nécessairement celui qui la dirige. »</blockquote><p className="border-t border-white/40 pt-5 text-xs font-semibold uppercase tracking-[.16em]">Badre Harkaoui · Fondateur & direction stratégique</p></div></div>
      <div className="flex min-h-[520px] flex-col justify-between bg-[#bfd0c8] p-8 text-black sm:p-12 lg:p-16"><div><p className="editorial-eyebrow">Le fonctionnement</p><h2 className="mt-8 max-w-xl text-4xl font-medium leading-[1.02] tracking-[-.045em] sm:text-5xl">Un interlocuteur responsable du résultat d’ensemble.</h2></div><div className="mt-16 grid gap-5 border-t border-black/35 pt-7 sm:grid-cols-2"><p className="text-sm leading-7 text-black/65">Badre garde la stratégie, les arbitrages et la relation de direction. Les spécialistes adaptés sont mobilisés selon la mission.</p><p className="text-sm leading-7 text-black/65">Vous gagnez la cohérence d’un pôle intégré sans financer une structure inutilement lourde.</p></div></div>
    </section>

    <section className="overflow-hidden border-t border-black/15 bg-[#f4f1eb] px-5 py-24 text-[#0a0a0a] sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center justify-between border-b border-black/25 pb-5"><p className="editorial-eyebrow text-[#6751b7]">06 / Pour qui</p><p className="hidden text-[10px] font-semibold uppercase tracking-[.2em] text-black/40 sm:block">Quatre situations d’intervention</p></div>
        <div className="grid gap-16 pt-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div><h2 className="text-[clamp(4rem,8vw,9rem)] font-semibold uppercase leading-[.78] tracking-[-.075em]">Le bon<br /><span className="link-cover__outline">moment.</span></h2><p className="mt-10 max-w-md text-sm leading-7 text-black/60">Nous intervenons quand une entreprise a déjà de l’ambition, des enjeux et des actions — mais qu’elle doit retrouver une direction d’ensemble.</p></div>
          <div className="border-t border-black/25">{["Entreprise établie dont le marketing manque de cap", "Marque en croissance qui doit professionnaliser son image", "Groupe ou filiale étrangère qui s’implante au Maroc", "Direction qui veut reprendre le contrôle de ses prestataires"].map((x, i) => <div key={x} className="group grid min-h-[130px] grid-cols-[46px_1fr_auto] items-center gap-5 border-b border-black/25 py-6 transition-all hover:bg-[#0a0a0a] hover:px-6 hover:text-white"><span className="text-xs opacity-45">0{i + 1}</span><p className="max-w-xl text-lg font-medium leading-7 sm:text-xl">{x}</p><span className="text-lg opacity-35 transition-transform group-hover:translate-x-1">→</span></div>)}</div>
        </div>
      </div>
    </section>

    <section className="bg-[#d7e942] px-5 py-16 text-[#0a0a0a] sm:px-8 sm:py-20 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-black/60">Premier échange confidentiel</p><h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-6xl">Remettons une direction claire derrière votre marque.</h2></div><a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("home_final_cta")} className="inline-flex shrink-0 items-center justify-center gap-3 border border-black bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#765fc4]">Échanger sur WhatsApp <ArrowUpRight className="h-4 w-4" /></a></div></section>
  </main>
);
