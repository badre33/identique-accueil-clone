import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const cities = [
  {
    name: "Casablanca",
    label: "Agence Marketing Digital à Casablanca",
    desc: "Branding, paid media et social pour les marques établies de la capitale économique.",
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
  subtitle = "Une équipe ancrée dans les trois principales villes du royaume.",
}: Props) => (
  <section className="py-20 px-8 lg:px-16 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-light mb-3 text-black">{title}</h2>
      <p className="text-lg text-gray-600 font-light mb-12 max-w-3xl">{subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cities.map((c) => (
          <Link
            key={c.name}
            to={c.href}
            className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-black hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <MapPin className="w-4 h-4" /> {c.name}
            </div>
            <h3 className="text-xl font-medium text-black mb-3 group-hover:underline">
              {c.label}
            </h3>
            <p className="text-gray-600 font-light leading-relaxed mb-4">{c.desc}</p>
            <span className="inline-flex items-center text-sm font-medium text-black">
              Découvrir <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);