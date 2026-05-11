import { memo } from "react";

type LogoEntry = { name: string; src?: string };

const logos: LogoEntry[] = [
  // Logos visuels existants
  { name: "AXA Assurance Maroc", src: "/lovable-uploads/axa-logo.png" },
  { name: "RMA Assurance", src: "/lovable-uploads/rma-logo.jpg" },
  { name: "L'Bankalik (Attijariwafa Bank)", src: "/lovable-uploads/lbankalik-logo.png" },
  { name: "YouCan", src: "/lovable-uploads/youcan-logo.png" },
  { name: "Nova Spacia", src: "/lovable-uploads/novaspacia-logo.svg" },
  { name: "Nexia", src: "/lovable-uploads/05dfc79f-2a20-4241-aa4d-606f6cdd30d2.png" },
  { name: "French Tech", src: "/lovable-uploads/801816e7-97bc-49c9-948c-34e3c9d49e1f.png" },
  { name: "Soulection", src: "/lovable-uploads/b8c1c54b-9721-486c-81ab-dae0977cacc0.png" },
  { name: "Edwin", src: "/lovable-uploads/f08a883a-31aa-4529-bf02-a1c73a030a71.png" },
  { name: "Artitenium", src: "/lovable-uploads/ce7e28cc-c15c-48b9-b9be-03195d92927f.png" },
  // Comptes accompagnés par l'équipe (texte — issus du dossier technique)
  { name: "Attijari Wafabank" },
  { name: "Wafasalaf" },
  { name: "Fondation Al Mada" },
  { name: "Saham" },
  { name: "Allianz" },
  { name: "Arab Bank" },
  { name: "Orange Maroc" },
  { name: "OCP" },
  { name: "OCP Africa" },
  { name: "Safran" },
  { name: "Honda Motor" },
  { name: "Ford" },
  { name: "Pharma 5" },
  { name: "Mutandis Group" },
  { name: "Aiguebelle" },
  { name: "Barid Al-Maghrib" },
  { name: "Al Barid Bank" },
  { name: "Aéroports du Maroc" },
  { name: "AMDIE" },
  { name: "CDG" },
  { name: "Dekra" },
  { name: "Brainlyne" },
];

const Row = () => (
  <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden="false">
    {logos.map((l) =>
      l.src ? (
        <img
          key={l.name}
          src={l.src}
          alt={`${l.name} — client de Link Agency`}
          className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition duration-500"
          loading="lazy"
          decoding="async"
          width={140}
          height={48}
        />
      ) : (
        <span
          key={l.name}
          className="text-base md:text-lg font-light tracking-wide text-gray-400 hover:text-foreground transition-colors duration-500 whitespace-nowrap"
        >
          {l.name}
        </span>
      )
    )}
  </div>
);

export const ClientLogosMarquee = memo(() => {
  return (
    <section
      aria-label="Marques accompagnées par Link Agency"
      className="border-y border-gray-100 bg-white py-10"
    >
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
        Ils nous font confiance
      </p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
});

ClientLogosMarquee.displayName = "ClientLogosMarquee";
