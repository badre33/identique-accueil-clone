
export const Services = () => {
  const services = [
    {
      icon: "triangle",
      title: "Branding",
      subtitle: "Création d'identités visuelles fortes et mémorables pour votre marque."
    },
    {
      icon: "circle", 
      title: "Événementiel",
      subtitle: "Conception et organisation d'événements sur mesure qui marquent les esprits."
    },
    {
      icon: "person",
      title: "Personal Branding", 
      subtitle: "Développement de votre image personnelle et professionnelle unique."
    },
    {
      icon: "content",
      title: "Content digital",
      subtitle: "Création de contenus digitaux engageants et performants."
    }
  ];

  const renderIcon = (iconType: string) => {
    switch(iconType) {
      case "triangle":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-black">
            <path d="M20 8 L30 28 L10 28 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case "circle":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-black">
            <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case "person":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-black">
            <circle cx="20" cy="15" r="5" fill="currentColor"/>
            <path d="M12 30c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="currentColor"/>
          </svg>
        );
      case "content":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-black">
            <path d="M10 12 L30 12 M10 20 L26 20 M10 28 L22 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <rect x="8" y="8" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" rx="2"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-light mb-16 text-black">Nos services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-left group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {renderIcon(service.icon)}
              </div>
              <h3 className="text-2xl font-light mb-4 text-black">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{service.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
