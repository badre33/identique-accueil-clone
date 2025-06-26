
export const Services = () => {
  const services = [
    {
      icon: "triangle",
      title: "Branding",
      subtitle: "Prograstes und atanseman Dendär strateg."
    },
    {
      icon: "circle", 
      title: "Événementiel",
      subtitle: "Prégrâmas, Räserces Faciliors ittaabt ainjd boart."
    },
    {
      icon: "person",
      title: "Personal Branding", 
      subtitle: "Creation de caterce us programmation actions."
    },
    {
      icon: "content",
      title: "Content digital",
      subtitle: "Montouraning digitilive otto cientleaut."
    }
  ];

  const renderIcon = (iconType: string) => {
    switch(iconType) {
      case "triangle":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-gray-700">
            <path d="M20 8 L32 28 L8 28 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        );
      case "circle":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-gray-700">
            <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        );
      case "person":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-gray-700">
            <circle cx="20" cy="15" r="5" fill="currentColor"/>
            <path d="M12 28c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="currentColor"/>
          </svg>
        );
      case "content":
        return (
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-gray-700">
            <path d="M10 12 L30 12 M10 20 L25 20 M10 28 L20 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <rect x="8" y="8" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" rx="2"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 px-16 lg:px-24 bg-gray-50">
      <h2 className="text-4xl font-serif mb-16 text-gray-900">Nos services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <div className="mb-6 flex justify-center">
              {renderIcon(service.icon)}
            </div>
            <h3 className="text-xl font-serif mb-3 text-gray-900">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{service.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
