
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Users, Megaphone } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: "branding",
      title: "Branding",
      subtitle: "Création d'identités visuelles fortes et mémorables pour votre marque.",
      description: "Façonnez une identité unique qui résonne avec votre audience",
      link: "/branding",
      color: "from-slate-50 to-gray-100",
      accentColor: "from-black to-gray-700",
      iconComponent: Sparkles
    },
    {
      icon: "event", 
      title: "Événementiel",
      subtitle: "Conception et organisation d'événements sur mesure qui marquent les esprits.",
      description: "Des expériences immersives qui créent des souvenirs durables",
      link: "/evenementiel",
      color: "from-blue-50 to-indigo-100",
      accentColor: "from-blue-600 to-indigo-700",
      iconComponent: Zap
    },
    {
      icon: "person",
      title: "Personal Branding", 
      subtitle: "Développement de votre image personnelle et professionnelle unique.",
      description: "Révélez votre potentiel et devenez une référence dans votre domaine",
      link: "/personal-branding",
      color: "from-purple-50 to-pink-100",
      accentColor: "from-purple-600 to-pink-700",
      iconComponent: Users
    },
    {
      icon: "content",
      title: "Content Digital",
      subtitle: "Création de contenus digitaux engageants et performants.",
      description: "Captivez votre audience avec des contenus qui convertissent",
      link: "/content-digital",
      color: "from-emerald-50 to-teal-100",
      accentColor: "from-emerald-600 to-teal-700",
      iconComponent: Megaphone
    }
  ];

  return (
    <section className="py-32 px-8 lg:px-16 bg-white relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-100/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-black/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Nos expertises</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light mb-6 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black">
            Services d'exception
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            De la stratégie à l'exécution, nous transformons vos ambitions en réalisations concrètes avec une approche sur-mesure et créative.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.iconComponent;
            return (
              <Link 
                key={index} 
                to={service.link}
                className="group relative bg-white border border-gray-100 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient de fond animé */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Contenu */}
                <div className="relative z-10">
                  {/* Icône avec animation */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accentColor} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Titre et numéro */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl lg:text-3xl font-light text-black group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-4xl font-light text-gray-200 group-hover:text-gray-300 transition-colors">
                      0{index + 1}
                    </span>
                  </div>
                  
                  {/* Description principale */}
                  <p className="text-gray-600 leading-relaxed font-light mb-4">
                    {service.subtitle}
                  </p>
                  
                  {/* Description secondaire */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  {/* Call to action */}
                  <div className="flex items-center text-black group-hover:text-gray-700 transition-all duration-300">
                    <span className="font-medium mr-3">Découvrir</span>
                    <div className="flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                      <ArrowRight className="w-5 h-5" />
                      <div className="w-12 h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </div>
                  </div>
                </div>

                {/* Élément décoratif */}
                <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-white/50 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              </Link>
            );
          })}
        </div>

        {/* Section CTA finale */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/33745010714?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 hover:scale-105"
            >
              <span className="font-medium">Discutons de votre projet</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
