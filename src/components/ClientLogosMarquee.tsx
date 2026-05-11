import { memo } from "react";

const logos = [
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
];

const Row = () => (
  <div className="flex shrink-0 items-center gap-16 pr-16" aria-hidden="false">
    {logos.map((l) => (
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
    ))}
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
