import { ArrowRight, ExternalLink, Eye } from "lucide-react";
import { useState } from "react";
import { ProjectDetailsModal } from "./ProjectDetailsModal";

/**
 * OPTIMIZATION NOTE: Images in /lovable-uploads should be optimized for web:
 * - ceaff19e-cebb-453b-a8e2-33fc348e3bad.png (1920x1920 → should be ~400x400 WebP)
 * - oncovita-logo.jpeg (1188x700 → should be ~400x236 WebP)
 * - 85b45a40-6291-4f5d-a377-65024ddb1976.png (1920x1920 → should be ~800x800 WebP for backgrounds)
 * - 05dfc79f-2a20-4241-aa4d-606f6cdd30d2.png (1920x488 → should be ~400x102 WebP)
 * - 801816e7-97bc-49c9-948c-34e3c9d49e1f.png (512x512 → should be ~200x200 WebP)
 * - b82bb134-7256-4325-b5ca-90d055f1629c.png (800x800 → should be ~300x300 WebP)
 * - b8c1c54b-9721-486c-81ab-dae0977cacc0.png (600x600 → should be ~200x200 WebP)
 * Use tools like TinyPNG, Squoosh, or ImageOptim to compress before uploading
 */

export const ProjectsGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Oncovita",
      category: "Santé & Bien-être",
      image: "/lovable-uploads/oncovita-logo.jpeg",
      shortDescription: "Association dédiée à l'accompagnement holistique des patients atteints de cancer : soigner le corps, apaiser l'esprit, nourrir l'espoir.",
      description: "Mission complète d'accompagnement stratégique pour Oncovita, association pionnière dans le soutien aux patients atteints de cancer au Maroc. Notre intervention s'est concentrée sur la création d'une identité visuelle forte et sensible, le développement d'une stratégie de communication émotionnelle et impactante, ainsi que la mise en place d'outils digitaux pour faciliter l'accès aux services d'accompagnement. Le projet incluait la refonte de l'identité de marque, la production de contenus inspirants centrés sur l'espoir et la résilience, et le développement d'une présence digitale humaniste permettant de toucher et d'accompagner davantage de patients et leurs familles dans cette épreuve.",
      year: "2025",
      url: "#"
    },
    {
      title: "Nexia",
      category: "Conseil & Digitalisation",
      image: "/lovable-uploads/05dfc79f-2a20-4241-aa4d-606f6cdd30d2.png",
      shortDescription: "Accompagnement stratégique en digitalisation, conseil en communication et gestion des réseaux sociaux pour optimiser la présence digitale.",
      description: "Mission d'accompagnement stratégique pour Nexia, cabinet de conseil spécialisé, dans leur transformation digitale complète. Notre intervention s'est concentrée sur l'optimisation de leur présence digitale, le développement d'une stratégie de communication moderne et la restructuration de leur approche sur les réseaux sociaux. Le projet incluait la refonte de leur stratégie de contenu, la mise en place d'outils de digitalisation performants et l'accompagnement de leurs équipes dans l'adoption des nouvelles pratiques digitales pour renforcer leur positionnement d'expert conseil auprès de leur clientèle cible.",
      year: "2024",
      url: "https://nexia.ma/"
    },
    {
      title: "Edwin",
      category: "Pop-up Store & Événementiel", 
      image: "/lovable-uploads/b82bb134-7256-4325-b5ca-90d055f1629c.png",
      shortDescription: "Mission complète de pop-up store à Bordeaux pour cette marque de jeans japonaise iconique fondée en 1947. Conception d'un espace éphémère immersif célébrant l'héritage denim japonais.",
      description: "Création et production d'un pop-up store exceptionnel à Bordeaux pour la marque de jeans japonaise légendaire Edwin. Notre mission consistait à concevoir un espace retail éphémère qui capture l'essence de la culture denim japonaise tout en s'intégrant harmonieusement dans l'écosystème créatif bordelais. Le projet comprenait la scénographie complète de l'espace, l'organisation d'événements exclusifs mêlant art local et tradition nippone, ainsi que le développement d'une stratégie d'activation marketing sur mesure pour créer un buzz authentique et générer des ventes record sur une durée limitée.",
      year: "2024",
      url: "#"
    },
    {
      title: "French Tech",
      category: "Partenariat Stratégique",
      image: "/lovable-uploads/801816e7-97bc-49c9-948c-34e3c9d49e1f.png",
      shortDescription: "Partenaire officiel de l'écosystème French Tech Bordeaux pour l'accompagnement stratégique des startups incubées vers l'international.",
      description: "Partenariat stratégique avec l'écosystème French Tech Bordeaux pour développer et structurer l'accompagnement des startups incubées vers l'international. Notre rôle couvre le développement de la stratégie de marque de l'écosystème bordelais, la création des outils marketing pour les programmes d'incubation, et l'accompagnement personnalisé des startups prometteuses dans leur développement commercial. Nous orchestrons les campagnes de communication, développons les stratégies de positionnement et créons les supports d'attraction pour renforcer la notoriété de French Tech Bordeaux sur la scène européenne et faciliter l'expansion internationale des entreprises incubées.",
      year: "2022-2024",
      url: "#"
    },
    {
      title: "Soulection",
      category: "Événementiel & Branding",
      image: "/lovable-uploads/b8c1c54b-9721-486c-81ab-dae0977cacc0.png",
      shortDescription: "Production d'événements musicaux exclusifs sur l'I-Boat à Bordeaux avec les DJs officiels du collectif international Soulection.",
      description: "Organisation et production d'événements musicaux exclusifs pour le collectif international Soulection sur l'emblématique I-Boat à Bordeaux. Notre mission consiste à créer des expériences musicales uniques en faisant venir les DJs officiels du collectif Soulection pour des soirées exceptionnelles dans cet espace culturel iconique bordelais. Nous gérons l'intégralité de la production événementielle, de la programmation artistique au branding spécifique, en créant un pont authentique entre la culture musicale internationale de Soulection et la scène culturelle bordelaise dynamique, contribuant ainsi au rayonnement culturel de Bordeaux.",
      year: "2023-2024",
      url: "https://soulection.com/"
    },
    {
      title: "Artitenium",
      category: "Branding & Digital",
      image: "/lovable-uploads/ceaff19e-cebb-453b-a8e2-33fc348e3bad.png",
      shortDescription: "Création d'identité visuelle moderne, développement de site web et stratégie d'acquisition digitale pour cette entreprise d'aménagement d'intérieur haut de gamme.",
      description: "Transformation digitale complète d'Artitenium, entreprise spécialisée dans l'aménagement d'intérieur haut de gamme au Maroc. Notre accompagnement incluait la création d'une identité de marque sophistiquée reflétant l'excellence artisanale marocaine, le développement d'un site web premium showcase mettant en valeur leurs réalisations exceptionnelles, et l'élaboration d'une stratégie d'acquisition digitale ciblée. L'objectif était de positionner Artitenium comme la référence incontournable du design d'intérieur de luxe au Maroc, en développant une présence digitale à la hauteur de leur savoir-faire exceptionnel et en créant les outils nécessaires pour conquérir une clientèle haut de gamme exigeante.",
      year: "2024-2025",
      url: "https://artitenium.ma/"
    },
    {
      title: "Personal Branding Politique",
      category: "Branding Personnel",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop&fm=webp&q=80",
      shortDescription: "Accompagnement stratégique sur une mission de personal branding à fort enjeu pour renforcer l'image d'une dirigeante politique influente sur la scène internationale.",
      description: "Mission stratégique de personal branding pour une figure politique influente, visant à construire une image publique authentique et inspirante détachée des codes politiques traditionnels. Notre approche s'est concentrée sur l'humanisation du discours politique, la valorisation des valeurs d'espoir et de modernité, et la création d'un storytelling personnel puissant résonnant avec les enjeux contemporains. Le projet incluait la refonte complète de la stratégie de communication multicanale, la production de contenus éditoriaux et visuels premium, ainsi que la coordination d'une équipe créative dédiée pour assurer une cohérence parfaite sur tous les points de contact et renforcer l'influence de cette personnalité sur la scène politique internationale.",
      year: "2024",
      url: "#"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="py-32 px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
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

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700 bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-medium">
                  {project.year}
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <Eye className="w-4 h-4 text-gray-700" />
                  </div>
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4 text-gray-600" />
                    </a>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {project.shortDescription}
                </p>
                
                <div className="flex items-center text-black group-hover:text-gray-700 transition-colors">
                  <span className="text-sm font-medium mr-2">Voir les détails</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-black to-gray-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://wa.me/212699024526?text=Bonjour%2C%20j'aimerais%20discuter%20de%20mon%20projet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg font-medium"
          >
            <span>Discutons de votre projet</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <ProjectDetailsModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
