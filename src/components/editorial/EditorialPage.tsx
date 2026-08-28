import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/config/contact";
import { trackWhatsAppClick } from "@/lib/tracking";

type Accent = "violet" | "terracotta" | "sage" | "lime";

const EditorialAction = ({ href, className, children, source }: { href: string; className: string; children: ReactNode; source: string }) => href.startsWith("http") ? (
  <a href={href} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(source)} className={className}>{children}</a>
) : (
  <Link to={href} className={className}>{children}</Link>
);

const accentClasses: Record<Accent, string> = {
  violet: "bg-[#765fc4] text-white",
  terracotta: "bg-[#c86b4a] text-[#0a0a0a]",
  sage: "bg-[#bfd0c8] text-[#0a0a0a]",
  lime: "bg-[#d7e942] text-[#0a0a0a]",
};

interface EditorialPageHeroProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  dossierLabel: string;
  dossierTitle: string;
  dossierBody: string;
  accent?: Accent;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export const EditorialPageHero = ({
  index,
  eyebrow,
  title,
  description,
  dossierLabel,
  dossierTitle,
  dossierBody,
  accent = "violet",
  primaryLabel = "Parler du projet",
  primaryTo = WHATSAPP_URL,
  secondaryLabel,
  secondaryTo,
}: EditorialPageHeroProps) => (
  <section className="editorial-page-hero relative overflow-hidden border-b border-black/15 bg-[#f4f1eb] px-5 py-16 text-[#0a0a0a] sm:px-8 sm:py-24 lg:px-12 lg:py-28">
    <div className="editorial-page-grain absolute inset-0" aria-hidden="true" />
    <div className="editorial-shell relative grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(300px,430px)] lg:items-end lg:gap-20">
      <div>
        <div className="mb-10 flex items-center gap-5 border-b border-black/15 pb-4">
          <span className="text-[10px] font-bold tracking-[0.22em] text-black/40">{index}</span>
          <p className="editorial-eyebrow text-black/65">{eyebrow}</p>
        </div>
        <h1 className="max-w-[1000px] text-[clamp(3rem,6.6vw,7.25rem)] font-medium leading-[.9] tracking-[-.065em]">
          {title}
        </h1>
        <div className="mt-10 grid gap-7 border-t border-black/15 pt-7 sm:grid-cols-[minmax(0,650px)_auto] sm:items-end sm:justify-between">
          <p className="max-w-2xl text-base leading-8 text-black/65 sm:text-lg">{description}</p>
          <div className="flex flex-wrap gap-3">
            {secondaryLabel && secondaryTo && (
              <Link to={secondaryTo} className="inline-flex min-h-12 items-center gap-2 border border-black/25 px-5 text-xs font-semibold uppercase tracking-[0.12em] transition hover:border-black">
                {secondaryLabel}
              </Link>
            )}
            <EditorialAction href={primaryTo} source={`editorial_hero_${index}`} className="editorial-button-primary">
              {primaryLabel}<ArrowRight className="h-4 w-4" />
            </EditorialAction>
          </div>
        </div>
      </div>

      <aside className={cn("editorial-dossier relative min-h-[360px] border border-black p-7 sm:min-h-[430px] sm:p-9", accentClasses[accent])}>
        <div className="flex items-center justify-between border-b border-current/25 pb-4 text-[9px] font-bold uppercase tracking-[0.2em]">
          <span>{dossierLabel}</span><span>Link©</span>
        </div>
        <div className="flex min-h-[270px] flex-col justify-between pt-12 sm:min-h-[330px]">
          <h2 className="max-w-[11ch] text-4xl font-medium leading-[.95] tracking-[-.05em] sm:text-5xl">{dossierTitle}</h2>
          <p className="max-w-xs text-sm leading-7 opacity-75">{dossierBody}</p>
        </div>
      </aside>
    </div>
  </section>
);

interface EditorialSectionIntroProps {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  light?: boolean;
}

export const EditorialSectionIntro = ({ eyebrow, title, body, light = false }: EditorialSectionIntroProps) => (
  <div className="editorial-heading-grid">
    <p className={cn("editorial-eyebrow", light ? "text-white/50" : "text-black/45")}>{eyebrow}</p>
    <div>
      <h2 className={cn("editorial-title", light ? "text-white" : "text-[#0a0a0a]")}>{title}</h2>
      {body && <p className={cn("mt-7 max-w-3xl text-base leading-8 sm:text-lg", light ? "text-white/60" : "text-black/60")}>{body}</p>}
    </div>
  </div>
);

interface EditorialFinalCTAProps {
  eyebrow?: string;
  title: string;
  body: string;
  label?: string;
  to?: string;
  accent?: Accent;
}

export const EditorialFinalCTA = ({
  eyebrow = "Prochaine étape",
  title,
  body,
  label = "Cadrer le besoin",
  to = WHATSAPP_URL,
  accent = "lime",
}: EditorialFinalCTAProps) => (
  <section className={cn("border-y border-black/20 px-5 py-16 sm:px-8 sm:py-20 lg:px-12", accentClasses[accent])}>
    <div className="editorial-shell grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
      <div>
        <p className="editorial-eyebrow mb-7 opacity-50">{eyebrow}</p>
        <h2 className="max-w-5xl text-4xl font-medium leading-[.98] tracking-[-.05em] sm:text-5xl lg:text-6xl">{title}</h2>
      </div>
      <div>
        <p className="text-sm leading-7 opacity-70">{body}</p>
        <EditorialAction href={to} source="editorial_final_cta" className="mt-7 inline-flex min-h-12 items-center gap-3 border border-current px-5 text-xs font-bold uppercase tracking-[0.13em] transition hover:bg-black hover:text-white">
          {label}<ArrowUpRight className="h-4 w-4" />
        </EditorialAction>
      </div>
    </div>
  </section>
);

interface EditorialFAQProps {
  items: Array<{ question: string; answer: string }>;
  light?: boolean;
}

export const EditorialFAQ = ({ items, light = false }: EditorialFAQProps) => (
  <div className={cn("mt-12 border-t", light ? "border-white/15" : "border-black/15")}>
    {items.map((item, index) => (
      <details key={item.question} className={cn("group border-b py-6", light ? "border-white/15" : "border-black/15")}>
        <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-medium sm:text-lg">
          <span>{item.question}</span><span className="font-mono text-xs opacity-40">{String(index + 1).padStart(2, "0")}</span>
        </summary>
        <p className={cn("max-w-3xl pt-5 text-sm leading-7", light ? "text-white/60" : "text-black/60")}>{item.answer}</p>
      </details>
    ))}
  </div>
);
