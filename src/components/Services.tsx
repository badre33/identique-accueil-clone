
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
          <svg width="32" height="32" viewBox="0 0 32 32" className="text-black">
            <path d="M16 6 L26 22 L6 22 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        );
      case "circle":
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" className="text-black">
            <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        );
      case "person":
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" className="text-black">
            <circle cx="16" cy="12" r="4" fill="currentColor"/>
            <path d="M10 24c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="currentColor"/>
          </svg>
        );
      case "content":
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" className="text-black">
            <path d="M8 10 L24 10 M8 16 L20 16 M8 22 L16 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            <rect x="6" y="6" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" rx="1"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 px-8 lg:px-16 bg-white">
      <h2 className="text-4xl lg:text-5xl font-light mb-12 text-black">Nos services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="text-left">
            <div className="mb-4">
              {renderIcon(service.icon)}
            </div>
            <h3 className="text-xl font-light mb-2 text-black">{service.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">{service.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
