
export const Services = () => {
  const services = [
    {
      number: "01",
      title: "Stratégie de marque",
      description: "Développement d'identités visuelles fortes et cohérentes qui reflètent l'essence de votre entreprise."
    },
    {
      number: "02", 
      title: "Communication digitale",
      description: "Création de contenus engageants et gestion de votre présence sur les plateformes numériques."
    },
    {
      number: "03",
      title: "Design graphique",
      description: "Conception visuelle moderne et impactante pour tous vos supports de communication."
    },
    {
      number: "04",
      title: "Conseil en communication",
      description: "Accompagnement stratégique pour optimiser votre message et atteindre vos objectifs."
    }
  ];

  return (
    <section className="px-8 lg:px-16 py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-thin text-gray-900 mb-6">
            Nos expertises
          </h2>
          <div className="w-24 h-px bg-gray-300"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="flex items-start gap-6">
                <span className="text-sm font-mono text-gray-400 mt-1">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
