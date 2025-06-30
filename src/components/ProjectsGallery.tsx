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
      title: "SGTM Immobilier",
      category: "Branding & Web", 
      image: "/lovable-uploads/a404ed81-6016-457c-b044-6027db20cf22.png",
      description: "Refonte complète de l'identité visuelle et développement d'une plateforme web premium pour cette agence immobilière de prestige.",
      year: "2023",
      url: "https://sgtm-immobilier.com/fr/accueil/"
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
    },
    {
      title: "Secret Events",
      category: "Événementiel",
      image: "/lovable-uploads/8021884d-fcc2-4e05-ac30-7e42c2b94abc.png",
      description: "Direction artistique et production d'événements exclusifs haut de gamme avec une approche créative unique et mémorable. Gestion complète du booking et de la programmation d'artistes DJs internationaux pour des soirées d'exception.",
      year: "2024-2025",
      url: "#"
    },
    {
      title: "Umbra Festival",
      category: "Événementiel & Branding",
      image: "/lovable-uploads/d46d1c34-57bc-469e-a5df-99754ff0d5ed.png",
      description: "Conception et production complète de ce festival artistique underground avec une identité visuelle forte et une expérience immersive. Booking et curation d'une programmation DJ avant-gardiste pour créer une expérience musicale unique.",
      year: "2022-2024",
      url: "#"
    },
    {
      title: "Branding Personnel",
      category: "Personal Branding",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80",
      description: "Accompagnement stratégique sur une mission de personal branding à fort enjeu destinée à renforcer l'image d'une dirigeante politique influente sur la scène internationale. Le travail a porté sur la construction d'un positionnement personnel humanisant et inspirant, la mise en place d'une stratégie multicanale (réseaux sociaux, storytelling éditorial, contenus visuels), et la coordination d'une équipe créative complète (social media, design, contenu). Une attention particulière a été portée à la désolidarisation du cadre politique officiel pour valoriser une figure incarnant l'espoir, la jeunesse et l'avenir.",
      year: "2024-2025",
      url: "#"
    },
    {
      title: "Entrepreneur & Holding",
      category: "Branding Global",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
      description: "Mission en cours de refonte stratégique d'image et de structuration du branding personnel d'un entrepreneur marocain, parallèlement au positionnement de sa holding innovante active dans plusieurs secteurs (architecture, éducation, gastronomie, coworking). Le travail inclut la création d'une charte graphique sur-mesure, l'élaboration d'un narratif éditorial inspiré par la vision du fondateur, et la production de supports de communication professionnels (brand deck, identité visuelle, manifeste de fondation). Objectif : harmoniser l'écosystème des marques autour d'une esthétique raffinée, d'un engagement humaniste et d'une ambition internationale.",
      year: "2024-2025",
      url: "#"
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
