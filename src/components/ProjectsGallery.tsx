import { ArrowRight, ExternalLink } from "lucide-react";

export const ProjectsGallery = () => {
  const projects = [
    {
      title: "Amoud",
      category: "Branding & Marketing Digital",
      image: "/lovable-uploads/8e26a61e-e439-4688-b503-8a3088d2124f.png",
      description: "Maison de pâtisserie marocaine fondée en 1982, réputée pour l'excellence de ses viennoiseries, entremets et créations sucrées haut de gamme. Alliant tradition artisanale et innovation, elle s'est imposée comme une référence incontournable à Casablanca et dans plusieurs grandes villes du Maroc. Grâce à un savoir-faire rigoureux et une offre raffinée, Amoud séduit une clientèle exigeante à la recherche de qualité et d'authenticité.",
      year: "2024",
      url: "#"
    },
    {
      title: "Edwin",
      category: "Pop-up Store & Événementiel", 
      image: "/lovable-uploads/155dc759-4923-4ddc-8251-334cb8ba3ad7.png",
      description: "Mission complète de pop-up store à Bordeaux pour cette marque de jeans japonaise iconique fondée en 1947. Conception et production d'un espace éphémère immersif célébrant l'héritage denim japonais, organisation d'événements exclusifs avec des artistes locaux, stratégie d'activation marketing ciblée et renforcement du branding européen. Une expérience retail unique mêlant tradition japonaise et culture bordelaise.",
      year: "2024",
      url: "#"
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
      title: "Soulection",
      category: "Événementiel & Branding",
      image: "/lovable-uploads/b8c1c54b-9721-486c-81ab-dae0977cacc0.png",
      description: "Production d'événements exclusifs et développement de la présence africaine pour ce collectif musical international.",
      year: "2023-2024",
      url: "https://soulection.com/"
    },
    {
      title: "Artitenium",
      category: "Branding & Digital",
      image: "/lovable-uploads/ceaff19e-cebb-453b-a8e2-33fc348e3bad.png",
      description: "Création d'une identité visuelle moderne, développement de site web et stratégie d'acquisition digitale pour cette entreprise spécialisée dans l'aménagement d'intérieur haut de gamme. Mission complète incluant branding, stratégie digitale et gestion des réseaux sociaux.",
      year: "2024-2025",
      url: "https://artitenium.ma/"
    },
    {
      title: "DWP",
      category: "Branding & Digital",
      image: "/lovable-uploads/29365e8a-7e4d-4041-ad14-37f38d1bde1b.png",
      description: "Accompagnement stratégique complet pour cette entreprise de design d'intérieur : création d'identité de marque, développement de site web, stratégie d'acquisition client et gestion des réseaux sociaux pour renforcer leur positionnement sur le marché du design premium.",
      year: "2024-2025",
      url: "https://dwp.ma/"
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
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700 bg-white"
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
