import { Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { EditorialFAQ, EditorialFinalCTA, EditorialPageHero, EditorialSectionIntro } from "@/components/editorial/EditorialPage";
import { WHATSAPP_URL_EN } from "@/config/contact";

const canonicalUrl = "https://linkagency.ma/en/outsourced-marketing-department-morocco";

const operatingModels = [
  ["01", "Outsourced marketing direction", "Link Agency owns the roadmap, priorities, partner coordination and reporting when no senior local marketing lead is in place."],
  ["02", "Extension of your team", "We reinforce a managing director, country manager or marketing lead who needs additional direction and reliable execution capacity."],
  ["03", "White-label Morocco desk", "We work behind a headquarters team, consultancy or lead agency as the senior local partner for brand adaptation and delivery in Morocco."],
];

const responsibilities = [
  "Marketing diagnosis, priorities and roadmap",
  "Brand positioning, messaging and local relevance",
  "Budget, channel and production decisions",
  "Briefing and coordination of selected specialists",
  "Content, social, SEO, campaigns and launches",
  "Measurement, reporting and senior-level arbitration",
];

const process = [
  ["01", "Diagnose", "We read the business objective, brand, market, current team, suppliers, assets and decision process."],
  ["02", "Design the mandate", "We define responsibilities, priorities, governance, cadence, budget boundaries and evidence expected."],
  ["03", "Run the system", "We brief and coordinate the right contributors while maintaining one strategic and creative direction."],
  ["04", "Report and improve", "We turn delivery and market feedback into decisions for management, not a collection of disconnected metrics."],
];

const faqs = [
  { question: "What is an outsourced marketing department?", answer: "It is a senior-led operating model in which an external partner takes responsibility for marketing direction, coordination and selected execution without the company immediately recruiting every role in-house. The exact mandate can cover the full function or reinforce an existing team." },
  { question: "How is this different from hiring a marketing agency in Morocco?", answer: "A specialist agency is usually accountable for a defined channel or deliverable. An outsourced marketing department is accountable for the direction across channels: priorities, briefs, partner coordination, decisions and reporting. It can still work with specialist agencies where needed." },
  { question: "Can Link Agency work in white label for an international agency or consultancy?", answer: "Yes. Link Agency can operate as the Morocco delivery and market-intelligence layer behind a regional team, consultancy or lead agency. The client relationship, visibility rules, approval chain and confidentiality are agreed during scoping." },
  { question: "Does Link Agency present freelancers as an internal team?", answer: "No. Badreddine Harkaoui leads the strategy and key decisions directly. Independent specialists and production partners are selected according to the mandate and coordinated under one direction; they are not presented as a permanent in-house workforce." },
  { question: "Which companies are the best fit?", answer: "The model is best suited to established or growing companies with a decision-maker, meaningful brand or commercial stakes, and a need for clearer marketing ownership. It is also relevant to international brands entering Morocco and local entities reporting to regional headquarters." },
  { question: "Which languages can the work cover?", answer: "English can be the working language with headquarters. Market-facing strategy and content can be structured in French, Arabic, Darija and English according to audience, channel and brand requirements." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Outsourced marketing department in Morocco",
      serviceType: ["Outsourced marketing direction", "White-label marketing delivery", "Marketing team extension"],
      description: "Senior-led marketing direction, brand management and coordinated execution for companies operating in or entering Morocco.",
      provider: { "@type": "Organization", "@id": "https://linkagency.ma/#organization", name: "Link Agency", legalName: "HARKA STRATEGY CONSULTING SARLAU", url: "https://linkagency.ma" },
      areaServed: { "@type": "Country", name: "Morocco" },
      audience: { "@type": "BusinessAudience", audienceType: "Established companies, international brands, country managers, headquarters teams and lead agencies" },
      availableLanguage: ["English", "French", "Arabic"],
    },
    {
      "@type": "WebPage",
      name: "Outsourced Marketing Department in Morocco",
      description: "A senior-led outsourced marketing department for strategy, brand direction, partner coordination and execution in Morocco.",
      url: canonicalUrl,
      inLanguage: "en",
      datePublished: "2026-08-29",
      dateModified: "2026-08-29",
      isPartOf: { "@type": "WebSite", name: "Link Agency", url: "https://linkagency.ma" },
      about: { "@id": "https://linkagency.ma/#organization" },
      author: { "@id": "https://linkagency.ma/#badre-harkaoui" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Link Agency", item: "https://linkagency.ma/" },
        { "@type": "ListItem", position: 2, name: "Marketing agency in Morocco", item: "https://linkagency.ma/en/marketing-agency-morocco" },
        { "@type": "ListItem", position: 3, name: "Outsourced marketing department", item: canonicalUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    },
  ],
};

const OutsourcedMarketingDepartmentMoroccoEn = () => (
  <div lang="en" className="min-h-screen bg-[#f4f1eb] pt-16 text-[#0a0a0a] sm:pt-20">
    <SEOHead
      title="Outsourced Marketing Department in Morocco | Link Agency"
      description="Senior-led outsourced marketing department in Morocco. Strategy, brand direction, partner coordination and execution for local and international companies."
      url={canonicalUrl}
      type="service"
      locale="en_GB"
      structuredData={schema}
      alternateLanguages={[
        { hrefLang: "fr-MA", href: "https://linkagency.ma/direction-marketing-externalisee" },
        { hrefLang: "fr", href: "https://linkagency.ma/direction-marketing-externalisee" },
      ]}
      xDefaultUrl="https://linkagency.ma/en/outsourced-marketing-department-morocco"
    />
    <Header language="en" />
    <main className="link-editorial">
      <EditorialPageHero
        index="02 / OPERATING MODEL"
        eyebrow="Outsourced marketing department · Morocco"
        title={<>Your marketing function,<br /><span className="link-cover__outline">under one senior direction.</span></>}
        description="Link Agency acts as an outsourced marketing department for companies that need ownership, coordination and execution in Morocco without immediately building every capability in-house."
        dossierLabel="Operating mandate"
        dossierTitle="One direction. The right capabilities."
        dossierBody="Badreddine Harkaoui leads the strategy and key decisions. Specialists are selected around the mandate and coordinated under one system."
        accent="sage"
        primaryLabel="Discuss the mandate"
        primaryTo={WHATSAPP_URL_EN}
        secondaryLabel="Morocco marketing desk"
        secondaryTo="/en/marketing-agency-morocco"
      />

      <section className="editorial-section bg-[#d7e942]">
        <div className="editorial-shell grid gap-12 lg:grid-cols-[260px_1fr]">
          <p className="editorial-eyebrow text-black/50">Direct answer</p>
          <div data-reveal>
            <h2 className="editorial-title">What does an outsourced marketing department do?</h2>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-black/70">It gives management one accountable marketing lead to set priorities, protect the brand, coordinate internal and external contributors, oversee execution and turn results into decisions. Link Agency can own the full function, reinforce an existing team or operate as a white-label Morocco desk.</p>
          </div>
        </div>
      </section>

      <section className="editorial-section bg-[#d8cec1]" id="models">
        <div className="editorial-shell">
          <EditorialSectionIntro eyebrow="Three configurations" title="The mandate follows the organisation, not an agency package." body="The right model depends on who already owns the decisions, which capabilities exist and where execution is breaking down." />
          <div className="mt-16 grid border-l border-t border-black/20 lg:grid-cols-3">
            {operatingModels.map(([number, title, description]) => (
              <article key={number} className="editorial-index-card flex min-h-[350px] flex-col justify-between p-7 sm:p-9">
                <span className="font-mono text-xs text-black/35">{number}</span>
                <div><h3 className="text-2xl font-medium tracking-[-.035em]">{title}</h3><p className="mt-6 border-t border-black/20 pt-5 text-sm leading-7 text-black/60">{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section bg-[#765fc4] text-white">
        <div className="editorial-shell grid gap-16 lg:grid-cols-[.85fr_1.15fr]">
          <div data-reveal="left"><p className="editorial-eyebrow text-[#d7e942]">What we can own</p><h2 className="editorial-title mt-7 text-white">From management decisions to coordinated delivery.</h2><p className="mt-7 max-w-xl text-base leading-8 text-white/70">The scope is deliberately explicit. Link Agency is responsible only for what has been agreed, but maintains one direction across every included workstream.</p></div>
          <div className="border-t border-white/25" data-reveal="right">
            {responsibilities.map((responsibility, index) => <div key={responsibility} className="grid grid-cols-[42px_1fr] items-center border-b border-white/25 py-5 text-sm text-white/85"><span className="font-mono text-[10px] text-white/40">{String(index + 1).padStart(2, "0")}</span><span className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-[#d7e942]" />{responsibility}</span></div>)}
          </div>
        </div>
      </section>

      <section className="editorial-section bg-[#bfd0c8]">
        <div className="editorial-shell">
          <EditorialSectionIntro eyebrow="Governance" title="A marketing system management can actually read." body="The model is designed to remove ambiguity: one roadmap, named decision-makers, clear contributors and evidence attached to each priority." />
          <div className="mt-16 grid border-l border-t border-black/20 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, description]) => <article key={number} className="editorial-index-card flex min-h-[340px] flex-col justify-between p-7"><span className="font-mono text-xs text-black/35">{number}</span><div><h3 className="text-3xl font-medium tracking-[-.04em]">{title}</h3><p className="mt-5 text-sm leading-7 text-black/60">{description}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="editorial-section bg-[#f4f1eb]">
        <div className="editorial-shell grid gap-12 lg:grid-cols-[260px_1fr]"><p className="editorial-eyebrow text-black/45">Frequently asked questions</p><EditorialFAQ items={faqs} /></div>
      </section>

      <EditorialFinalCTA eyebrow="Your operating brief" title="Give marketing one accountable direction in Morocco." body="In your first message, include your company, current marketing setup, business priority, expected timing and who will make the decisions. Badre will reply directly." label="Discuss the mandate" to={WHATSAPP_URL_EN} accent="lime" />
    </main>
    <Footer language="en" />
  </div>
);

export default OutsourcedMarketingDepartmentMoroccoEn;
