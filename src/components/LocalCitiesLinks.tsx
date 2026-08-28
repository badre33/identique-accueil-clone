import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const cities = [
  {
    name: "Casablanca",
    label: "Agence Marketing Digital à Casablanca",
    desc: "Branding, paid media et social pour les marques au Maroc de la capitale économique.",
    href: "/agence-marketing-digital-casablanca",
  },
  {
    name: "Marrakech",
    label: "Agence Marketing Digital à Marrakech",
    desc: "Hôtellerie, luxe et lifestyle : production de contenu et social media premium.",
    href: "/agence-marketing-digital-marrakech",
  },
  {
    name: "Rabat",
    label: "Agence Communication Institutionnelle à Rabat",
    desc: "Institutions, ONG et organismes internationaux : communication multilingue rigoureuse.",
    href: "/agence-communication-rabat",
  },
];

interface Props {
  title?: string;
  subtitle?: string;
}

export const LocalCitiesLinks = ({
  title = "Link Agency au Maroc",
  subtitle = "Une présence active dans les trois principaux marchés du royaume.",
}: Props) => (
  <section className="editorial-section border-y border-black/15 bg-[#d8cec1] text-[#0a0a0a]">
    <div className="editorial-shell">
      <div className="editorial-heading-grid">
        <p className="editorial-eyebrow text-black/45">Présence</p>
        <div><h2 className="editorial-title">{title}</h2><p className="mt-7 max-w-3xl text-base leading-8 text-black/60 sm:text-lg">{subtitle}</p></div>
      </div>
      <div className="mt-14 grid border-l border-t border-black/20 md:grid-cols-3">
        {cities.map((c) => (
          <Link
            key={c.name}
            to={c.href}
            className="group min-h-72 border-b border-r border-black/20 p-7 transition hover:bg-[#f4f1eb]/45"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-black/45">
              <MapPin className="h-4 w-4" /> {c.name}
            </div>
            <h3 className="mt-12 text-xl font-medium leading-tight tracking-[-.03em] text-black">
              {c.label}
            </h3>
            <p className="mt-5 text-sm leading-7 text-black/60">{c.desc}</p>
            <span className="mt-7 inline-flex items-center text-xs font-semibold uppercase tracking-[0.12em] text-black">
              Découvrir <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
