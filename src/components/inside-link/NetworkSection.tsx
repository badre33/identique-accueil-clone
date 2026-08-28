import { Network, MapPin, Handshake, Users2, Building2 } from "lucide-react";

type Partner = {
  category: string;
  label: string;
  description: string;
  Icon: any;
};

const partners: Partner[] = [
  {
    category: "Production audiovisuelle",
    label: "Studios partenaires · Casablanca & Marrakech",
    description:
      "Réalisateurs, DP, motion designers et studios pour shooting photo, film publicitaire, captation événementielle et 3D.",
    Icon: Building2,
  },
  {
    category: "Print & merchandising",
    label: "Imprimeurs offset et grand format",
    description:
      "Réseau d'imprimeries certifiées pour signalétique, packaging, supports événementiels et goodies corporate.",
    Icon: Network,
  },
  {
    category: "Influence & créateurs",
    label: "300+ créateurs au Maroc & MENA",
    description:
      "Sourcing et activation de macro et micro-influenceurs sectoriels : lifestyle, business, sport, culture, beauty.",
    Icon: Users2,
  },
  {
    category: "Production événementielle",
    label: "Régies son/lumière & traiteurs",
    description:
      "Prestataires fiables pour conventions, lancements, soirées VIP : régies techniques, traiteurs, hôtesses, sécurité.",
    Icon: Handshake,
  },
  {
    category: "Médias & RP",
    label: "Relations presse économique & lifestyle",
    description:
      "Accès direct aux rédactions Médias24, L'Économiste, Telquel, La Vie éco, Challenge pour placements et tribunes.",
    Icon: MapPin,
  },
  {
    category: "Juridique & administratif",
    label: "Avocats et fiduciaires associés",
    description:
      "Cabinet fiduciaire et conseils juridiques pour montages contractuels, conformité CNDP, accords cadres clients.",
    Icon: Building2,
  },
];

export const NetworkSection = () => {
  return (
    <section
      id="network"
      aria-labelledby="network-title"
      className="py-24 px-6 sm:px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-6">
            <Network className="w-4 h-4 text-primary" aria-hidden />
            <span>Notre réseau au Maroc</span>
          </div>
          <h2
            id="network-title"
            className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight"
          >
            Un{" "}
            <span className="font-medium text-primary">
              réseau de partenaires
            </span>{" "}
            qui permet de répondre à toute typologie de mission.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Link Agency ne fait pas tout en interne — et c'est volontaire. Pour
            chaque mission, nous mobilisons un écosystème de spécialistes
            partenaires sélectionnés au fil des années pour leur fiabilité,
            leur sens du service et leur exigence opérationnelle. Cela nous
            permet d'absorber des dispositifs à très grande échelle sans
            jamais transiger sur la qualité.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {partners.map((p) => (
            <article
              key={p.category}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                  <p.Icon className="w-5 h-5 text-white" aria-hidden />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    {p.category}
                  </p>
                  <h3 className="text-base font-semibold text-foreground mb-2 leading-tight">
                    {p.label}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-white border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">
            La règle
          </p>
          <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed max-w-3xl mx-auto">
            Un seul interlocuteur côté Link Agency — Badreddine.{" "}
            <span className="text-gray-500 italic">
              Pas de mille-feuille de sous-traitants, pas de devis surprises.
              Vous traitez directement avec le fondateur, qui pilote le réseau.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
