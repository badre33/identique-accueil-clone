import { MapPin, Users, Award, TrendingUp } from "lucide-react";

interface LocationSectionProps {
  serviceType: "influence" | "evenementiel";
}

export const LocationSection = ({ serviceType }: LocationSectionProps) => {
  const locationData = {
    influence: {
      title: "Notre présence au Maroc",
      description: "Basés à Casablanca et Marrakech, nous accompagnons les marques dans tout le royaume pour des campagnes d'influence marketing à fort impact.",
      cities: [
        {
          name: "Casablanca",
          icon: <MapPin className="w-6 h-6" />,
          description: "Hub principal - Bureau & Studio Production",
          highlight: "+500 influenceurs actifs"
        },
        {
          name: "Marrakech",
          icon: <MapPin className="w-6 h-6" />,
          description: "Antenne régionale - Casting & Coordination",
          highlight: "+300 créateurs lifestyle"
        },
        {
          name: "Tout le Maroc",
          icon: <Users className="w-6 h-6" />,
          description: "Réseau national de talents",
          highlight: "Rabat, Tanger, Agadir..."
        }
      ]
    },
    evenementiel: {
      title: "Notre présence au Maroc",
      description: "Basés à Casablanca et Marrakech, nous organisons des événements corporate d'exception dans tout le royaume avec une logistique premium.",
      cities: [
        {
          name: "Casablanca",
          icon: <MapPin className="w-6 h-6" />,
          description: "Siège social - Événements Business",
          highlight: "+80 événements/an"
        },
        {
          name: "Marrakech",
          icon: <MapPin className="w-6 h-6" />,
          description: "Bureau régional - Événements Prestige",
          highlight: "Lieux d'exception"
        },
        {
          name: "Tout le Maroc",
          icon: <Award className="w-6 h-6" />,
          description: "Service national premium",
          highlight: "Rabat, Tanger, Fès..."
        }
      ]
    }
  };

  const data = locationData[serviceType];

  return (
    <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">{data.title}</h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.cities.map((city, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="text-blue-600 bg-blue-50 p-4 rounded-lg group-hover:bg-blue-100 transition-colors inline-block mb-6">
                {city.icon}
              </div>
              <h3 className="text-2xl font-medium mb-3 text-black group-hover:text-blue-600 transition-colors">
                {city.name}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {city.description}
              </p>
              <div className="flex items-center text-sm text-blue-600 font-medium">
                <TrendingUp className="w-4 h-4 mr-2" />
                {city.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* SEO-optimized footer text */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-gray-600 leading-relaxed text-sm">
            {serviceType === "influence" ? (
              <>
                <strong>Link Agency</strong>, agence d'<strong>influence marketing à Casablanca et Marrakech</strong>, 
                accompagne les marques marocaines et internationales dans leurs campagnes avec influenceurs et créateurs de contenu. 
                De la capitale économique aux destinations touristiques, nous activons le meilleur réseau d'<strong>influenceurs au Maroc</strong> pour 
                maximiser votre visibilité digitale et générer des résultats mesurables.
              </>
            ) : (
              <>
                <strong>Link Agency</strong>, agence d'<strong>événementiel corporate à Casablanca et Marrakech</strong>, 
                organise des événements professionnels haut de gamme dans tout le Maroc. De la conception à la réalisation, 
                nous créons des <strong>événements d'entreprise mémorables</strong> : conférences, séminaires, lancements de produits, 
                team-building et galas corporate. Notre expertise événementielle s'étend dans tout le royaume.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};
