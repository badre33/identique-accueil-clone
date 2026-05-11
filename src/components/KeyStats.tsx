import { memo } from "react";

const stats = [
  { value: "50+", label: "Marques accompagnées", sub: "Au Maroc et à l'international" },
  { value: "12", label: "Années d'expertise", sub: "Branding, digital, événementiel" },
  { value: "200+", label: "Campagnes livrées", sub: "Du concept à l'activation" },
  { value: "10M+", label: "Audience cumulée", sub: "Touchée à travers nos campagnes" },
];

export const KeyStats = memo(() => {
  return (
    <section
      aria-label="Chiffres clés Link Agency"
      className="bg-black text-white py-20 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400 mb-4">
            Link Agency en chiffres
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            Une agence de marketing digital au Maroc reconnue pour la rigueur de ses résultats.
          </h2>
        </div>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 border-t border-white/10 pt-12">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="text-5xl md:text-6xl font-light tracking-tight mb-3">
                {s.value}
              </dt>
              <dd className="text-sm md:text-base font-medium text-white mb-1">
                {s.label}
              </dd>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                {s.sub}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
});

KeyStats.displayName = "KeyStats";
