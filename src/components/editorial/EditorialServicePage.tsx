import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { LocalCitiesLinks } from "@/components/LocalCitiesLinks";
import { SEOHead } from "@/components/SEOHead";
import { EditorialFAQ, EditorialFinalCTA, EditorialPageHero, EditorialSectionIntro } from "./EditorialPage";

type Accent = "violet" | "terracotta" | "sage" | "lime";

interface Item {
  title: string;
  description: string;
}

interface EditorialServicePageProps {
  seo: { title: string; description: string; keywords: string; url: string; structuredData: object };
  hero: {
    index: string;
    eyebrow: string;
    title: ReactNode;
    description: string;
    dossierLabel: string;
    dossierTitle: string;
    dossierBody: string;
    accent: Accent;
    primaryLabel: string;
  };
  pillarsEyebrow?: string;
  pillarsTitle: ReactNode;
  pillarsBody: string;
  pillars: Item[];
  processEyebrow?: string;
  processTitle: string;
  processBody: string;
  process: Item[];
  useCasesTitle: string;
  useCases: string[];
  localTitle: string;
  localBody: string;
  faqs?: Array<{ question: string; answer: string }>;
  cta: { title: string; body: string; label: string };
}

export const EditorialServicePage = ({ seo, hero, pillarsEyebrow = "Le dispositif", pillarsTitle, pillarsBody, pillars, processEyebrow = "Méthode", processTitle, processBody, process, useCasesTitle, useCases, localTitle, localBody, faqs = [], cta }: EditorialServicePageProps) => (
  <div className="min-h-screen bg-[#f4f1eb] pt-16 text-[#0a0a0a] sm:pt-20">
    <SEOHead {...seo} type="service" />
    <Header />
    <main className="link-editorial">
      <EditorialPageHero {...hero} />

      <section className="editorial-section bg-[#d8cec1]">
        <div className="editorial-shell">
          <EditorialSectionIntro eyebrow={pillarsEyebrow} title={pillarsTitle} body={pillarsBody} />
          <div className="mt-16 grid border-l border-t border-black/20 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, index) => <article key={item.title} className="editorial-index-card flex flex-col justify-between p-7" data-reveal data-reveal-delay={index * 70}><span className="font-mono text-xs text-black/35">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-xl font-medium tracking-[-.035em] sm:text-2xl">{item.title}</h3><p className="mt-5 text-sm leading-7 text-black/60">{item.description}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="editorial-section bg-[#0a0a0a] text-white">
        <div className="editorial-shell">
          <EditorialSectionIntro light eyebrow={processEyebrow} title={processTitle} body={processBody} />
          <div className="mt-16 border-t border-white/15">
            {process.map((item, index) => <article key={item.title} className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[70px_240px_1fr]" data-reveal data-reveal-delay={index * 55}><span className="font-mono text-xs text-white/35">{String(index + 1).padStart(2, "0")}</span><h3 className="text-xl font-medium tracking-[-.03em]">{item.title}</h3><p className="max-w-2xl text-sm leading-7 text-white/60">{item.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="editorial-section bg-[#bfd0c8]">
        <div className="editorial-shell grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div data-reveal><p className="editorial-eyebrow text-black/45">Situations</p><h2 className="editorial-title mt-7">{useCasesTitle}</h2></div>
          <div className="border-t border-black/20">{useCases.map((item, index) => <div key={item} className="grid grid-cols-[42px_1fr] items-start border-b border-black/20 py-5 text-sm leading-6" data-reveal data-reveal-delay={index * 45}><span className="font-mono text-[10px] text-black/35">{String(index + 1).padStart(2, "0")}</span><span className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0" />{item}</span></div>)}</div>
        </div>
      </section>

      <section className="editorial-section bg-[#f4f1eb]">
        <div className="editorial-shell"><EditorialSectionIntro eyebrow="Maroc et international" title={localTitle} body={localBody} /></div>
      </section>

      <LocalCitiesLinks />

      {faqs.length > 0 && <section className="editorial-section bg-[#f4f1eb]"><div className="editorial-shell grid gap-12 lg:grid-cols-[260px_1fr]"><p className="editorial-eyebrow text-black/45">Questions fréquentes</p><EditorialFAQ items={faqs} /></div></section>}

      <EditorialFinalCTA {...cta} accent="lime" />
    </main>
    <Footer />
    <FloatingContactWidget />
  </div>
);
