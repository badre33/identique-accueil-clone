
import { Users, Award, Globe, Zap } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    { icon: Users, number: "18+", label: "Collaborations actives" },
    { icon: Award, number: "50+", label: "Projets réalisés" },
    { icon: Globe, number: "3", label: "Pays d'intervention" },
    { icon: Zap, number: "95%", label: "Taux de satisfaction" }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div className="mb-4 flex justify-center">
            <stat.icon className="w-8 h-8 text-black group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="text-3xl lg:text-4xl font-light text-black mb-2">{stat.number}</div>
          <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
