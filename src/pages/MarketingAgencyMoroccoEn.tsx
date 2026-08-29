import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { EditorialFAQ, EditorialFinalCTA, EditorialPageHero, EditorialSectionIntro } from "@/components/editorial/EditorialPage";
import { WHATSAPP_URL_EN } from "@/config/contact";

const canonicalUrl = "https://linkagency.ma/en/marketing-agency-morocco";

const situations = [
  ["01", "You are entering Morocco", "Your brand needs a clear local position, relevant messages and a coordinated launch without losing its global standards."],
  ["02", "You are already operating locally", "Your communication exists, but fragmented partners, uneven execution or unclear ownership are limiting its impact."],
  ["03", "You need a trusted local extension", "Your regional team, lead agency or consultancy needs senior marketing direction and reliable execution on the ground."],
];

const capabilities = [
  "Market-facing brand positioning and messaging",
  "French, Arabic, Darija and English content architecture",
  "Brand identity adaptation and local creative direction",
  "Social media, content, influence and launch campaigns",
  "Digital acquisition, SEO, landing pages and analytics",
  "Coordination of specialists, production partners and budgets",
];

const process = [
  ["01", "Read", "We review the brand, category, audience, current setup and decisions already made by headquarters."],
  ["02", "Localise", "We define what must remain global, what needs cultural adaptation and what should be created specifically for Morocco."],
  ["03", "Orchestrate", "We translate the roadmap into briefs, partners, production, campaigns, approvals and clear ownership."],
  ["04", "Improve", "We read the market response, report to decision-makers and refine priorities without diluting the brand."],
];

const selectedWork = [
  ["OCB Morocco", "International brand · Morocco", "Social strategy, content, campaigns and brand partnerships."],
  ["Nexia Morocco", "Corporate advisory · B2B", "Positioning, digital transformation and corporate communication."],
  ["Nova Spacia", "Architecture · Design", "Brand identity, digital presence and premium positioning."],
  ["Oncovita", "Healthcare · Impact", "Identity, communication strategy and digital presence."],
];

const faqs = [
  { question: "Do you replace our headquarters or lead agency?", answer: "No. We can act as the Morocco brand and marketing lead, working within your global strategy and approval system. The objective is to make local execution more relevant and easier to control, not to create a separate brand direction." },
  { question: "Can you work with our current local partners?", answer: "Yes. We can audit the current setup, clarify responsibilities and coordinate existing agencies, freelancers, production partners or internal contributors. New specialists are added only where the roadmap requires them." },
  { question: "Which languages can the project cover?", answer: "English can be used as the working language with regional or global teams. Customer-facing communication can then be structured in French, Arabic, Darija or English according to the audience, channel and brand context." },
  { question: "Do you also handle legal incorporation or distribution?", answer: "Our mandate covers brand, communication and marketing. We do not position ourselves as legal, tax or distribution advisers. Where those workstreams exist, we coordinate marketing decisions with the advisers appointed by your company." },
  { question: "Who leads the account?", answer: "Badreddine Harkaoui leads the strategy, key decisions and senior relationship directly. The right specialists are selected around the mandate rather than presented as a permanent in-house team." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Marketing agency in Morocco for international brands",
      serviceType: "Brand and marketing direction in Morocco",
      description: "Senior-led brand strategy, localisation, content, campaigns and marketing execution for international companies entering or growing in Morocco.",
      provider: { "@type": "Organization", "@id": "https://linkagency.ma/#organization", name: "Link Agency", legalName: "HARKA STRATEGY CONSULTING SARLAU", url: "https://linkagency.ma" },
      areaServed: { "@type": "Country", name: "Morocco" },
      audience: { "@type": "BusinessAudience", audienceType: "International brands and companies operating in or entering Morocco" },
      availableLanguage: ["English", "French", "Arabic"],
    },
    {
      "@type": "WebPage",
      name: "Marketing Agency in Morocco for Global Brands",
      description: "A senior-led marketing agency in Morocco for international brands requiring strategy, localisation and coordinated local execution.",
      url: canonicalUrl,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", name: "Link Agency", url: "https://linkagency.ma" },
      about: { "@id": "https://linkagency.ma/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Link Agency", item: "https://linkagency.ma/" },
        { "@type": "ListItem", position: 2, name: "Marketing agency in Morocco", item: canonicalUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    },
  ],
};

const MarketingAgencyMoroccoEn = () => (
  <div lang="en" className="min-h-screen bg-[#f4f1eb] pt-16 text-[#0a0a0a] sm:pt-20">
    <SEOHead
      title="Marketing Agency in Morocco for Global Brands | Link Agency"
      description="Senior-led marketing agency in Morocco for international brands. Strategy, localisation, content, campaigns and local execution from Casablanca."
      url={canonicalUrl}
      locale="en_GB"
      structuredData={schema}
      alternateLanguages={[{ hrefLang: "fr-MA", href: "https://linkagency.ma/" }, { hrefLang: "fr", href: "https://linkagency.ma/" }]}
      xDefaultUrl="https://linkagency.ma/"
    />
    <Header language="en" />
    <main className="link-editorial">
      <EditorialPageHero
        index="01 / MOROCCO DESK"
        eyebrow="Marketing agency in Morocco · International brands"
        title={<>Your marketing agency in Morocco,<br /><span className="link-cover__outline">built around your brand.</span></>}
        description="Link Agency gives international teams one senior local lead to adapt the strategy, coordinate execution and keep every decision aligned with the brand."
        dossierLabel="Morocco brief"
        dossierTitle="Global direction. Local intelligence."
        dossierBody="One accountable lead in Casablanca, with the right specialists selected for the mandate."
        accent="violet"
        primaryLabel="Discuss your Morocco brief"
        primaryTo={WHATSAPP_URL_EN}
        secondaryLabel="See the operating model"
        secondaryTo="/en/marketing-agency-morocco#model"
      />

      <section className="editorial-section bg-[#d8cec1]" id="model">
        <div className="editorial-shell">
          <EditorialSectionIntro eyebrow="When we step in" title={<>A local marketing lead when Morocco<br />becomes a strategic market.</>} body="We are most useful when the business already has ambition, standards and stakeholders, but needs clearer local ownership." />
          <div className="mt-16 grid border-l border-t border-black/20 lg:grid-cols-3">
            {situations.map(([number, title, description]) => <article key={number} className="editorial-index-card flex min-h-[330px] flex-col justify-between p-7 sm:p-9"><span className="font-mono text-xs text-black/35">{number}</span><div><h3 className="text-2xl font-medium tracking-[-.035em]">{title}</h3><p className="mt-6 border-t border-black/20 pt-5 text-sm leading-7 text-black/60">{description}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="editorial-section bg-[#765fc4] text-white" id="services">
        <div className="editorial-shell grid gap-16 lg:grid-cols-[.85fr_1.15fr]">
          <div data-reveal="left"><p className="editorial-eyebrow text-[#d7e942]">What we own</p><h2 className="editorial-title mt-7 text-white">Brand direction and marketing execution under one local lead.</h2><p className="mt-7 max-w-xl text-base leading-8 text-white/70">The scope is built around the business objective. We do not activate every channel by default. We choose, brief and coordinate what the market actually requires.</p></div>
          <div className="border-t border-white/25" data-reveal="right">
            {capabilities.map((capability, index) => <div key={capability} className="grid grid-cols-[42px_1fr] items-center border-b border-white/25 py-5 text-sm text-white/85"><span className="font-mono text-[10px] text-white/40">{String(index + 1).padStart(2, "0")}</span><span className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#d7e942]" />{capability}</span></div>)}
          </div>
        </div>
      </section>

      <section className="editorial-section bg-[#bfd0c8]" id="process">
        <div className="editorial-shell">
          <EditorialSectionIntro eyebrow="The process" title="Adapt what matters. Preserve what makes the brand recognisable." body="Local relevance should strengthen the global brand, not create a disconnected Moroccan version of it." />
          <div className="mt-16 grid border-l border-t border-black/20 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, description]) => <article key={number} className="editorial-index-card flex min-h-[340px] flex-col justify-between p-7"><span className="font-mono text-xs text-black/35">{number}</span><div><h3 className="text-3xl font-medium tracking-[-.04em]">{title}</h3><p className="mt-5 text-sm leading-7 text-black/60">{description}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="border-y border-black/20 bg-[#d8cec1] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="editorial-shell" data-reveal>
          <div className="grid gap-6 border-b border-black/20 pb-8 lg:grid-cols-[220px_1fr] lg:items-end"><p className="editorial-eyebrow text-black/50">English field notes</p><h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-.05em] sm:text-5xl">Decisions for building a brand in Morocco.</h2></div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <article className="flex min-h-[360px] flex-col justify-between border border-black bg-[#765fc4] p-7 text-white sm:p-9"><p className="font-mono text-xs text-white/45">01 / OPERATING MODEL</p><div><h3 className="text-3xl font-medium leading-[1.05] tracking-[-.045em] sm:text-4xl">Build an outsourced marketing department in Morocco.</h3><p className="mt-5 text-sm leading-7 text-white/70">Full marketing direction, team extension or white-label local delivery under one senior lead.</p><Link to="/en/outsourced-marketing-department-morocco" className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 border border-white bg-white px-5 text-xs font-bold uppercase tracking-[.12em] text-black transition hover:bg-[#d7e942]">See the model <ArrowUpRight className="h-4 w-4" /></Link></div></article>
            <article className="flex min-h-[360px] flex-col justify-between border border-black bg-[#d7e942] p-7 sm:p-9"><p className="font-mono text-xs text-black/40">02 / MARKET ENTRY</p><div><h3 className="text-3xl font-medium leading-[1.05] tracking-[-.045em] sm:text-4xl">How to localise an international brand for Morocco.</h3><p className="mt-5 text-sm leading-7 text-black/65">Language, proof, channels and governance without diluting the global brand.</p><Link to="/en/insights/brand-localisation-morocco" className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 border border-black bg-black px-5 text-xs font-bold uppercase tracking-[.12em] text-white transition hover:bg-[#765fc4]">Read the guide <ArrowUpRight className="h-4 w-4" /></Link></div></article>
            <article className="flex min-h-[360px] flex-col justify-between border border-black bg-[#bfd0c8] p-7 sm:p-9"><p className="font-mono text-xs text-black/40">03 / PARTNER SELECTION</p><div><h3 className="text-3xl font-medium leading-[1.05] tracking-[-.045em] sm:text-4xl">How to choose a marketing partner in Morocco.</h3><p className="mt-5 text-sm leading-7 text-black/65">A buyer’s framework for comparing agencies, senior leads, specialists and white-label delivery.</p><Link to="/en/insights/choose-marketing-partner-morocco" className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 border border-black bg-black px-5 text-xs font-bold uppercase tracking-[.12em] text-white transition hover:bg-[#765fc4]">Compare the models <ArrowUpRight className="h-4 w-4" /></Link></div></article>
          </div>
        </div>
      </section>

      <section className="editorial-section bg-[#f4f1eb]" id="work">
        <div className="editorial-shell">
          <EditorialSectionIntro eyebrow="Selected experience" title="Local work across international, corporate and service brands." body="The examples below describe the scope of the assignments. No invented performance figures or unsupported outcomes." />
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {selectedWork.map(([client, label, mission], index) => <article key={client} data-reveal data-reveal-delay={(index % 2) * 80} className={`${index === 0 ? "bg-[#c86b4a]" : index === 1 ? "bg-[#bfd0c8]" : index === 2 ? "bg-[#765fc4] text-white" : "bg-[#d8cec1]"} flex min-h-[300px] flex-col justify-between border border-black p-7 sm:p-9`}><div className="flex justify-between text-[10px] font-bold uppercase tracking-[.18em]"><span>Assignment 0{index + 1}</span><span>Link©</span></div><div><p className="text-[10px] font-bold uppercase tracking-[.18em] opacity-55">{label}</p><h3 className="mt-3 text-4xl font-medium tracking-[-.045em] sm:text-5xl">{client}</h3><p className="mt-6 border-t border-current/30 pt-5 text-sm leading-7 opacity-70">{mission}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="editorial-section bg-[#d8cec1]">
        <div className="editorial-shell grid gap-16 lg:grid-cols-[.9fr_1.1fr]">
          <div data-reveal="left"><p className="editorial-eyebrow text-[#6751b7]">Founder-led</p><h2 className="editorial-title mt-7">A senior relationship, not another layer of account management.</h2><p className="mt-7 max-w-xl text-base leading-8 text-black/60">Badreddine Harkaoui leads the strategy, key decisions and relationship with your decision-makers. Specialists are selected around the brief and coordinated under one direction.</p></div>
          <div className="grid gap-4 sm:grid-cols-2" data-reveal="right"><article className="border border-black bg-[#f4f1eb] p-7"><p className="font-mono text-xs text-black/35">01 / FIT</p><h3 className="mt-14 text-2xl font-medium tracking-[-.035em]">Best suited to</h3><p className="mt-5 text-sm leading-7 text-black/60">Established companies, international brands and serious market-entry or transformation projects with an identified decision-maker.</p></article><article className="border border-black bg-[#d7e942] p-7"><p className="font-mono text-xs text-black/35">02 / SCOPE</p><h3 className="mt-14 text-2xl font-medium tracking-[-.035em]">Clear boundaries</h3><p className="mt-5 text-sm leading-7 text-black/60">We are not a legal incorporation adviser, distributor or volume production marketplace. Our responsibility is the brand and marketing system.</p></article></div>
        </div>
      </section>

      <section className="editorial-section bg-[#f4f1eb]">
        <div className="editorial-shell grid gap-12 lg:grid-cols-[260px_1fr]"><p className="editorial-eyebrow text-black/45">Frequently asked questions</p><EditorialFAQ items={faqs} /></div>
      </section>

      <EditorialFinalCTA eyebrow="Your Morocco brief" title="Give your brand one clear local direction." body="In your first message, include your company, home market, project stage, expected timing and current marketing setup. Badre will reply directly." label="Start on WhatsApp" to={WHATSAPP_URL_EN} accent="lime" />
    </main>
    <Footer language="en" />
  </div>
);

export default MarketingAgencyMoroccoEn;
