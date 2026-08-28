import { memo } from "react";

type LogoEntry = { name: string; src?: string };

// Marques classées par tier d'autorité — apparaissent en boucle continue.
const logos: LogoEntry[] = [
  // Tier 1 — Institutionnels & Grandes Banques marocaines
  { name: "Aéroports du Maroc", src: "/brands/aeroports-du-maroc.png" },
  { name: "Barid Al-Maghrib", src: "/brands/barid-al-maghrib.svg" },
  { name: "Al Barid Bank", src: "/brands/al-barid-bank.png" },
  { name: "Attijari Wafabank", src: "/brands/attijari-wafabank.png" },
  { name: "Wafa Assurance", src: "/brands/wafa-assurance.png" },
  { name: "Wafasalaf", src: "/brands/wafasalaf.png" },
  { name: "Fondation Al Mada", src: "/brands/fondation-al-mada.webp" },

  // Tier 2 — Assurance, Banque internationale, Télécoms
  { name: "AXA Assurance Maroc", src: "/assets/media/axa-logo.png" },
  { name: "RMA Assurance", src: "/assets/media/rma-logo.jpg" },
  { name: "Allianz", src: "/brands/allianz.png" },
  { name: "Arab Bank", src: "/brands/arab-bank.png" },
  { name: "L'Bankalik (Attijariwafa Bank)", src: "/assets/media/lbankalik-logo.png" },
  { name: "Orange Maroc", src: "/brands/orange-maroc.png" },

  // Tier 3 — Industrie, Automobile, Pharma, Agroalimentaire
  { name: "Safran", src: "/brands/safran.png" },
  { name: "Honda Motor", src: "/brands/honda-motor.png" },
  { name: "Ford", src: "/brands/ford.png" },
  { name: "Dekra", src: "/brands/dekra.png" },
  { name: "Pharma 5", src: "/brands/pharma-5.png" },
  { name: "Oncovita", src: "/brands/oncovita.svg" },
  { name: "Mutandis Group", src: "/brands/mutandis.png" },
  { name: "Aiguebelle", src: "/brands/aiguebelle.svg" },

  // Tier 4 — Tech, scaleups et références de missions
  { name: "YouCan", src: "/assets/media/youcan-logo.png" },
  { name: "Brainlyne", src: "/brands/brainlyne.png" },
  { name: "Nova Spacia", src: "/assets/media/novaspacia-logo.svg" },
  { name: "Nexia", src: "/assets/media/05dfc79f-2a20-4241-aa4d-606f6cdd30d2.png" },
  { name: "French Tech", src: "/assets/media/801816e7-97bc-49c9-948c-34e3c9d49e1f.png" },
  { name: "Soulection", src: "/assets/media/b8c1c54b-9721-486c-81ab-dae0977cacc0.png" },
  { name: "Edwin", src: "/assets/media/f08a883a-31aa-4529-bf02-a1c73a030a71.png" },
  { name: "Artitenium", src: "/assets/media/ce7e28cc-c15c-48b9-b9be-03195d92927f.png" },
];

const Row = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <ul
    className="flex shrink-0 items-center gap-14 md:gap-20 pr-14 md:pr-20"
    aria-hidden={ariaHidden}
  >
    {logos.map((l) => (
      <li key={l.name} className="flex items-center justify-center min-w-[120px]">
        {l.src ? (
          <img
            src={l.src}
            alt={`${l.name}, référence de mission ou expérience du fondateur`}
            title={l.name}
            className="h-9 md:h-11 lg:h-12 w-auto max-w-[160px] object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-700 ease-out"
            loading="lazy"
            decoding="async"
            width={160}
            height={48}
          />
        ) : (
          <span className="text-sm md:text-base font-light tracking-wide text-gray-400 hover:text-foreground transition-colors duration-500 whitespace-nowrap">
            {l.name}
          </span>
        )}
      </li>
    ))}
  </ul>
);

export const ClientLogosMarquee = memo(() => {
  return (
    <section
      id="references"
      aria-label="Références de missions et d'expériences Link Agency"
      className="home-client-marquee relative overflow-hidden border-y border-black/15 bg-[#d8cec1] py-16 text-[#0a0a0a] md:py-20"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/4 bg-[#765fc4] opacity-[.12]" aria-hidden="true" />
      <header className="relative mx-auto mb-12 grid max-w-[1440px] gap-7 px-5 sm:px-8 md:mb-14 lg:grid-cols-[220px_1fr_auto] lg:items-end lg:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6751b7]">00 / Références</p>
        <h2 className="max-w-3xl text-3xl font-medium leading-[1.02] tracking-[-.045em] sm:text-5xl">Des marques exigeantes.<br /><span className="text-black/40">Des contextes très différents.</span></h2>
        <p className="max-w-xs text-xs leading-5 text-black/50 lg:text-right">Missions Link Agency et expériences antérieures directement pilotées par le fondateur.</p>
      </header>

      <div className="group relative border-y border-black/20 py-9 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div className="flex animate-marquee-mobile md:animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <Row />
          <Row ariaHidden />
        </div>
      </div>

      <div className="relative mx-auto mt-7 flex max-w-[1440px] justify-between px-5 text-[9px] font-semibold uppercase tracking-[.18em] text-black/40 sm:px-8 lg:px-12"><span>Maroc / International</span><span><span className="hidden md:inline">Survolez pour arrêter — </span>Archives en mouvement</span></div>
    </section>
  );
});

ClientLogosMarquee.displayName = "ClientLogosMarquee";
