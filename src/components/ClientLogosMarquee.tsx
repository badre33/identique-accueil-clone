import { memo } from "react";

type LogoEntry = { name: string; src?: string };

// Marques classées par tier d'autorité — apparaissent en boucle continue.
const logos: LogoEntry[] = [
  // Tier 1 — Institutionnels & Grandes Banques
  { name: "OCP", src: "/brands/ocp.svg" },
  { name: "OCP Africa", src: "/brands/ocp-africa.svg" },
  { name: "CDG", src: "/brands/cdg.svg" },
  { name: "AMDIE", src: "/brands/amdie.svg" },
  { name: "Aéroports du Maroc", src: "/brands/aeroports-du-maroc.png" },
  { name: "Barid Al-Maghrib", src: "/brands/barid-al-maghrib.svg" },
  { name: "Al Barid Bank", src: "/brands/al-barid-bank.png" },
  { name: "Attijari Wafabank", src: "/brands/attijari-wafabank.png" },
  { name: "Wafa Assurance", src: "/brands/wafa-assurance.png" },
  { name: "Wafasalaf", src: "/brands/wafasalaf.png" },
  { name: "Fondation Al Mada", src: "/brands/fondation-al-mada.webp" },

  // Tier 2 — Assurance, Banque internationale, Télécoms
  { name: "AXA Assurance Maroc", src: "/lovable-uploads/axa-logo.png" },
  { name: "RMA Assurance", src: "/lovable-uploads/rma-logo.jpg" },
  { name: "Allianz", src: "/brands/allianz.png" },
  { name: "Arab Bank", src: "/brands/arab-bank.png" },
  { name: "L'Bankalik (Attijariwafa Bank)", src: "/lovable-uploads/lbankalik-logo.png" },
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

  // Tier 4 — Tech, scaleups, références équipe
  { name: "YouCan", src: "/lovable-uploads/youcan-logo.png" },
  { name: "Brainlyne", src: "/brands/brainlyne.png" },
  { name: "Nova Spacia", src: "/lovable-uploads/novaspacia-logo.svg" },
  { name: "Nexia", src: "/lovable-uploads/05dfc79f-2a20-4241-aa4d-606f6cdd30d2.png" },
  { name: "French Tech", src: "/lovable-uploads/801816e7-97bc-49c9-948c-34e3c9d49e1f.png" },
  { name: "Soulection", src: "/lovable-uploads/b8c1c54b-9721-486c-81ab-dae0977cacc0.png" },
  { name: "Edwin", src: "/lovable-uploads/f08a883a-31aa-4529-bf02-a1c73a030a71.png" },
  { name: "Artitenium", src: "/lovable-uploads/ce7e28cc-c15c-48b9-b9be-03195d92927f.png" },
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
            alt={`${l.name} — référence Link Agency`}
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
      aria-label="Marques accompagnées par Link Agency"
      className="relative border-y border-gray-100/80 bg-gradient-to-b from-white via-gray-50/30 to-white py-12 md:py-14"
    >
      <header className="mb-8 md:mb-10 flex flex-col items-center gap-2">
        <p className="text-[11px] md:text-xs font-medium uppercase tracking-[0.32em] text-gray-500">
          Ils nous font confiance
        </p>
        <p className="text-xs md:text-sm font-light text-gray-400 italic">
          {logos.length}+ marques accompagnées — banque, assurance, industrie, institutionnel
        </p>
      </header>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <Row />
          <Row ariaHidden />
        </div>
      </div>

      <p className="mt-6 md:mt-8 text-center text-[10px] md:text-xs text-gray-400 tracking-wide">
        Survolez pour mettre en pause — cliquez sur « Collaborations » pour le détail des missions.
      </p>
    </section>
  );
});

ClientLogosMarquee.displayName = "ClientLogosMarquee";
