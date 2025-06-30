
import { Target, Zap, Shield, Compass } from 'lucide-react';

export const VisionSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Précision Stratégique',
      description: 'Chaque décision est calculée, chaque action est orientée résultat. Nous ne laissons rien au hasard.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Exécution Rapide',
      description: 'La vitesse d\'exécution fait la différence. Nous livrons vite, nous livrons bien.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Excellence Sans Compromis',
      description: 'Chaque projet est traité avec la même exigence, qu\'importe sa taille ou son budget.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Compass,
      title: 'Vision Long Terme',
      description: 'Nous construisons des marques durables, pas des solutions temporaires.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="vision" className="py-32 px-8 lg:px-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 text-black">
            Notre Vision
          </h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Quatre piliers qui guident chacune de nos actions et définissent notre approche unique du branding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-semibold mb-6 text-black group-hover:text-gray-800 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {value.description}
                </p>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
