
import { ArrowRight, ExternalLink } from "lucide-react";

export const ProjectsGallery = () => {
  const projects = [
    {
      title: "Subway Maroc",
      category: "Marketing Digital",
      image: "/lovable-uploads/c66a2b50-92d9-4a9d-a394-09ff44b3d1b2.png",
      description: "Stratégie marketing digital complète pour la franchise leader au Maroc avec campagnes multi-canal et croissance de +150% d'engagement.",
      year: "2023-2024",
      url: "https://www.instagram.com/subwaymaroc/?hl=fr"
    },
    {
      title: "SGTM Immobilier",
      category: "Branding & Web", 
      image: "/lovable-uploads/a404ed81-6016-457c-b044-6027db20cf22.png",
      description: "Refonte complète de l'identité visuelle et développement d'une plateforme web premium pour cette agence immobilière de prestige.",
      year: "2023",
      url: "https://sgtm-immobilier.com/fr/accueil/"
    },
    {
      title: "Casablanca Music Week",
      category: "Événementiel",
      image: "/lovable-uploads/196f8a91-ab64-4dc6-9354-6fe7d9f3031e.png",
      description: "Direction artistique et production de la plus grande semaine musicale du Maroc avec plus de 50 000 participants sur 7 jours.",
      year: "2022-2024",
      url: "https://guichet.com/ma-fr/event/producer/casablanca-music-week"
    },
    {
      title: "French Tech",
      category: "Partenariat Stratégique",
      image: "/lovable-uploads/801816e7-97bc-49c9-948c-34e3c9d49e1f.png",
      description: "Partenaire officiel de l'écosystème French Tech pour l'accompagnement des startups marocaines vers l'international.",
      year: "2022-2024",
      url: "#"
    },
    {
      title: "The Family",
      category: "Conseil Stratégique",
      image: "/lovable-uploads/ae1bb8f8-ff5a-4b2d-8a17-aacf539b492a.png",
      description: "Collaboration avec ce startup studio européen pour le développement de l'écosystème tech africain et stratégies d'expansion.",
      year: "2023",
      url: "https://www.thefamily.co/"
    },
    {
      title: "Soulection",
      category: "Événementiel & Branding",
      image: "/lovable-uploads/b8c1c54b-9721-486c-81ab-dae0977cacc0.png",
      description: "Production d'événements exclusifs et développement de la présence africaine pour ce collectif musical international.",
      year: "2023-2024",
      url: "https://soulection.com/"
    }
  ];

  return (
    <section className="py-32 px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ExternalLink className="w-4 h-4" />
            <span>Nos réalisations</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light mb-8 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black">
            Projets récents
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
            Découvrez quelques-unes de nos collaborations les plus marquantes et l'impact créatif que nous avons généré pour nos partenaires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge année flottant */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-medium">
                  {project.year}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    {project.category}
                  </span>
                  {project.url !== "#" && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-full"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-600" />
                    </a>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-gray-700 transition-colors">
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
              
              {/* Barre de progression animée */}
              <div className="h-1 bg-gradient-to-r from-black to-gray-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="/collaborations"
            className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg font-medium"
          >
            <span>Voir toutes nos collaborations</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
