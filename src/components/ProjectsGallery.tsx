
import { ArrowRight, ExternalLink } from "lucide-react";

export const ProjectsGallery = () => {
  const projects = [
    {
      title: "Identité visuelle TechFlow",
      category: "Branding",
      image: "/lovable-uploads/18500dfb-e7b6-4c75-8c7c-89fa212ee0a8.png",
      description: "Création d'une identité moderne pour une startup tech"
    },
    {
      title: "Événement Innovation Summit",
      category: "Événementiel", 
      image: "/lovable-uploads/632e64c5-bfb1-4507-b655-8fb324a8236f.png",
      description: "Organisation d'un sommet d'innovation avec 500 participants"
    },
    {
      title: "Personal Branding CEO",
      category: "Personal Branding",
      image: "/lovable-uploads/da131874-d340-4dc9-b1e7-5fc5f24a0f40.png",
      description: "Développement de l'image personnelle d'un dirigeant"
    },
    {
      title: "Campagne Digitale GreenStart",
      category: "Content Digital",
      image: "/lovable-uploads/f08a883a-31aa-4529-bf02-a1c73a030a71.png",
      description: "Stratégie de contenu et campagne multi-canal"
    }
  ];

  return (
    <section className="py-32 px-8 lg:px-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ExternalLink className="w-4 h-4" />
            <span>Nos réalisations</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light mb-6 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black">
            Projets récents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez quelques-unes de nos créations les plus marquantes et l'impact qu'elles ont eu sur nos clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-2 font-medium">
                  {project.category}
                </div>
                <h3 className="text-lg font-medium text-black mb-2 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center text-black group-hover:text-gray-700 transition-colors">
                  <span className="text-sm font-medium mr-2">Voir le projet</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/collaborations"
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            <span className="font-medium">Voir tous nos projets</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
