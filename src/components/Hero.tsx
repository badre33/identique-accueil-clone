import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { buildWhatsAppUrl } from "@/config/contact";
import { trackEvent } from "@/lib/tracking";
import heroArchitecture from "@/assets/hero-architecture.jpg";

const Hero = () => {
  const proofItems = [
    { value: "11", unit: "ans", label: "d'expertise au Maroc" },
    { value: "50+", unit: "", label: "comptes accompagnés" },
    { value: "200+", unit: "", label: "projets livrés" },
    { value: "15+", unit: "", label: "secteurs couverts" },
  ];

  const clientLogos = [
    "L'Bankalik", "AXA Assurance Maroc", "RMA", "Subway Maroc",
    "YouCan", "Nova Spacia", "OCB Maroc", "La Maison Amoud",
    "Brainlyne", "Benatna",
  ];

  const waUrl = buildWhatsAppUrl(
    "Bonjour Link Agency, je souhaite échanger sur un projet marketing."
  );

  return (
    <section className="relative bg-background border-b border-border/60">
      {/* Hairline top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left column — editorial title */}
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-10 bg-foreground/40" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-foreground/60 font-medium">
                Cabinet conseil — Performance digitale — Casablanca · Marrakech
              </span>
            </div>

            <h1 className="text-[2.5rem] sm:text-5xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-[-0.035em] font-semibold text-foreground">
              La stratégie marketing
              <br />
              <span className="italic font-light text-foreground/70">qui </span>
              <span className="text-primary">génère vos leads.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg lg:text-xl leading-relaxed text-foreground/70 font-normal">
              Nous accompagnons les directions marketing des banques, assurances,
              retail et industrie au Maroc dans la conception de stratégies
              mesurables : branding, acquisition, contenu, événementiel corporate.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("cta_whatsapp_click", { category: "lead", label: "hero_primary" })}
                className="group inline-flex items-center justify-between gap-6 px-7 py-4 bg-foreground text-background hover:bg-primary transition-colors duration-300 rounded-none"
              >
                <span className="text-base font-medium tracking-tight">
                  Planifier un échange stratégique
                </span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                to="/etudes-de-cas"
                className="group inline-flex items-center gap-3 px-7 py-4 text-foreground border border-foreground/20 hover:border-foreground transition-colors duration-300"
              >
                <span className="text-base font-medium tracking-tight">
                  Voir nos études de cas
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right column — vertical meta */}
          {/* Right column — editorial photograph */}
          <aside className="lg:col-span-4 flex flex-col">
            <figure className="relative h-[420px] lg:h-[560px] w-full overflow-hidden bg-foreground/5">
              <img
                src={heroArchitecture}
                alt="Casablanca Finance City — quartier d'affaires de Casablanca, Maroc"
                width={1200}
                height={1600}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-[10px] tracking-[0.18em] uppercase text-background/95 leading-relaxed">
                Casablanca Finance City — capitale économique du Maroc
              </figcaption>
            </figure>
            <p className="mt-2 text-[10px] text-foreground/40 leading-snug">
              Photo : AyourAchtouk · <a href="https://commons.wikimedia.org/wiki/File:Casablanca_Finance_City_31.jpg" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground/60">Wikimedia Commons</a> · CC BY-SA 4.0
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-[11px] tracking-[0.2em] uppercase text-foreground/50 mb-3">
                Disciplines
              </p>
              <ul className="space-y-1.5 text-sm text-foreground/80">
                <li>— Stratégie & Marque</li>
                <li>— Performance digitale</li>
                <li>— Influence & Événementiel</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Editorial divider */}
        <div className="mt-24 lg:mt-32 border-t border-border" />

        {/* Numbers band — editorial */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {proofItems.map((item, idx) => (
            <div
              key={item.label}
              className={`py-10 lg:py-12 px-2 lg:px-6 ${
                idx > 0 ? "lg:border-l border-border" : ""
              }`}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-foreground">
                  {item.value}
                </span>
                {item.unit && (
                  <span className="text-lg text-foreground/60">{item.unit}</span>
                )}
              </div>
              <p className="mt-3 text-sm text-foreground/60 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* References — quiet wordmark grid */}
        <div className="mt-20 lg:mt-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-foreground/40" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-foreground/60 font-medium">
              Références sélectionnées
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-3">
            {clientLogos.map((client) => (
              <div
                key={client}
                className="py-3 text-sm font-medium tracking-tight text-foreground/70 border-t border-border/60"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
