
import { Triangle, Circle, User, Edit3 } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Triangle,
      title: "Branding",
      subtitle: "Progettazione e",
      subtitle2: "attuazione Brand",
      subtitle3: "strategico"
    },
    {
      icon: Circle,
      title: "Événementiel",
      subtitle: "Progettiamo, realizziamo",
      subtitle2: "Fachklam istituiti",
      subtitle3: "singoli brand."
    },
    {
      icon: User,
      title: "Personal",
      title2: "Branding",
      subtitle: "Creazione de categorie si",
      subtitle2: "programmation actions."
    },
    {
      icon: Edit3,
      title: "Content",
      title2: "digital",
      subtitle: "Monitorinaning digitalizzazione",
      subtitle2: "otto cianfrugaleut."
    }
  ];

  return (
    <section className="px-8 lg:px-16 py-20 bg-stone-100">
      <h2 className="text-3xl lg:text-4xl font-light mb-16 text-stone-800">
        Nos services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {services.map((service, index) => (
          <div key={index} className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <service.icon 
                size={40} 
                className="text-stone-600 stroke-1 group-hover:text-stone-800 transition-colors duration-300" 
              />
            </div>
            <h3 className="text-xl font-light mb-2 text-stone-800">
              {service.title}
              {service.title2 && <div>{service.title2}</div>}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {service.subtitle}
              <br />
              {service.subtitle2}
              <br />
              {service.subtitle3}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
