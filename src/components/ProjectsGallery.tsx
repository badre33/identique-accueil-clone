import { ArrowRight, ExternalLink, Eye } from "lucide-react";
import { useState } from "react";
import { ProjectDetailsModal } from "./ProjectDetailsModal";

/**
 * OPTIMIZATION NOTE: Images in /assets/media should be optimized for web:
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
      title: "L'Bankalik",
      category: "Banque & performance digitale, Maroc",
      image: "/assets/media/lbankalik-logo.png",
      shortDescription: "Stratégie éditoriale institutionnelle, contenus pédagogiques bilingues FR/AR, community management et pilotage média Meta Ads pour la banque digitale du groupe Attijariwafa Bank.",
      description: "Gestion complète des réseaux pour L'Bankalik par Attijariwafa Bank : stratégie éditoriale institutionnelle, contenus pédagogiques bilingues FR/AR, community management, pilotage Meta Ads sur des objectifs de notoriété, lead generation et conversion. Les dispositifs sont segmentés selon les audiences clés : jeunes actifs, familles, MRE et PME, avec une couverture des temps forts groupe et des prises de parole employeur.",
      year: "2025",
      url: "#"
    },
    {
      title: "AXA Assurance Maroc",
      category: "Assurance & contenus institutionnels, Maroc",
      image: "/assets/media/axa-logo.png",
      shortDescription: "Contenus institutionnels et pédagogiques, motion design, community management quotidien et campagnes Meta Ads avec optimisation du CPL.",
      description: "Accompagnement stratégique de la présence digitale d'AXA Assurance Maroc : contenus institutionnels et pédagogiques, motion design pour vulgariser les produits auto, santé, épargne et prévoyance, community management quotidien et campagnes Meta Ads dédiées à la notoriété et à la génération de leads. Les créatifs sont pilotés en A/B testing pour optimiser le CPL.",
      year: "2025",
      url: "#"
    },
    {
      title: "RMA",
      category: "Assurance & social media, Maroc",
      image: "/assets/media/rma-logo.jpg",
      shortDescription: "Production de contenus institutionnels, Reels de sensibilisation, campagnes de renouvellement et rédaction bilingue FR/AR.",
      description: "Pour RMA, Link Agency produit des contenus institutionnels, des Reels de sensibilisation et des campagnes dédiées aux temps forts assurance : renouvellement auto, rentrée santé, prévention routière et Ramadan. Le dispositif comprend la rédaction bilingue FR/AR, la gestion des requêtes clients et la cohérence éditoriale sur l'ensemble des prises de parole.",
      year: "2025",
      url: "#"
    },
    {
      title: "OCB Maroc",
      category: "Social Media & Ads, Maroc",
      image: "/assets/media/ocb-logo.png",
      shortDescription: "Gestion complète des réseaux sociaux pour OCB Maroc : stratégie de contenu, campagnes publicitaires, et partenariats stratégiques avec des événements et artistes.",
      description: "Accompagnement stratégique et opérationnel pour OCB Maroc dans la gestion de la marque sur le territoire marocain. Notre mission couvre la gestion complète des réseaux sociaux avec une stratégie de contenu engageante et adaptée au marché local, la conception et le pilotage de campagnes publicitaires ciblées (Meta Ads, TikTok Ads), ainsi que le développement d'une stratégie de partenariats innovante avec des événements culturels et musicaux majeurs au Maroc et des collaborations avec des artistes influents pour renforcer le positionnement de la marque auprès d'une audience jeune et connectée.",
      year: "2025",
      url: "#"
    },
    {
      title: "Artitenium",
      category: "Branding & Digital, Maroc",
      image: "/assets/media/ceaff19e-cebb-453b-a8e2-33fc348e3bad.png",
      shortDescription: "Création d'identité visuelle moderne, développement de site web et stratégie d'acquisition digitale pour cette entreprise d'aménagement d'intérieur haut de gamme.",
      description: "Transformation digitale complète d'Artitenium, entreprise spécialisée dans l'aménagement d'intérieur haut de gamme au Maroc. Notre accompagnement incluait la création d'une identité de marque sophistiquée reflétant l'excellence artisanale marocaine, le développement d'un site web premium showcase mettant en valeur leurs réalisations exceptionnelles, et l'élaboration d'une stratégie d'acquisition digitale ciblée. L'objectif était de positionner Artitenium comme la référence incontournable du design d'intérieur de luxe au Maroc, en développant une présence digitale à la hauteur de leur savoir-faire exceptionnel et en créant les outils nécessaires pour conquérir une clientèle haut de gamme exigeante.",
      year: "2024-2025",
      url: "https://artitenium.ma/"
    },
    {
      title: "Nova Spacia",
      category: "Branding & Digital, Maroc",
      image: "/assets/media/novaspacia-logo.svg",
      shortDescription: "Création d'identité visuelle et développement web pour Nova Spacia, entreprise spécialisée dans l'aménagement d'espaces professionnels et commerciaux.",
      description: "Accompagnement complet de Nova Spacia dans le développement de leur image de marque et présence digitale. Notre mission incluait la conception d'une identité visuelle moderne et professionnelle, le développement d'un site web performant mettant en valeur leurs services d'aménagement d'espaces, ainsi qu'une stratégie de communication digitale adaptée à leur positionnement premium sur le marché de l'aménagement professionnel.",
      year: "2026",
      url: "https://novaspacia.com/"
    },
    {
      title: "Oncovita",
      category: "Santé & Bien-être, Maroc",
      image: "/assets/media/oncovita-logo.jpeg",
      shortDescription: "Association dédiée à l'accompagnement holistique des patients atteints de cancer : soigner le corps, apaiser l'esprit, nourrir l'espoir.",
      description: "Mission complète d'accompagnement stratégique pour Oncovita, association pionnière dans le soutien aux patients atteints de cancer au Maroc. Notre intervention s'est concentrée sur la création d'une identité visuelle forte et sensible, le développement d'une stratégie de communication émotionnelle et impactante, ainsi que la mise en place d'outils digitaux pour faciliter l'accès aux services d'accompagnement. Le projet incluait la refonte de l'identité de marque, la production de contenus inspirants centrés sur l'espoir et la résilience, et le développement d'une présence digitale humaniste permettant de toucher et d'accompagner davantage de patients et leurs familles dans cette épreuve.",
      year: "2025",
      url: "#"
    },
    {
      title: "Nexia",
      category: "Conseil & Digitalisation, Maroc",
      image: "/assets/media/05dfc79f-2a20-4241-aa4d-606f6cdd30d2.png",
      shortDescription: "Accompagnement stratégique en digitalisation, conseil en communication et gestion des réseaux sociaux pour optimiser la présence digitale.",
      description: "Mission d'accompagnement stratégique pour Nexia, cabinet de conseil spécialisé, dans leur transformation digitale complète. Notre intervention s'est concentrée sur l'optimisation de leur présence digitale, le développement d'une stratégie de communication moderne et la restructuration de leur approche sur les réseaux sociaux. Le projet incluait la refonte de leur stratégie de contenu, la mise en place d'outils de digitalisation performants et l'accompagnement de leurs équipes dans l'adoption des nouvelles pratiques digitales pour renforcer leur positionnement d'expert conseil auprès de leur clientèle cible.",
      year: "2024",
      url: "https://nexia.ma/"
    },
    {
      title: "Personal Branding Politique",
      category: "Branding Personnel",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=180&fit=crop&fm=webp&q=30",
      shortDescription: "Accompagnement stratégique sur une mission de personal branding à fort enjeu pour renforcer l'image d'une dirigeante politique influente sur la scène internationale.",
      description: "Mission stratégique de personal branding pour une figure politique influente, visant à construire une image publique authentique et inspirante détachée des codes politiques traditionnels. Notre approche s'est concentrée sur l'humanisation du discours politique, la valorisation des valeurs d'espoir et de modernité, et la création d'un storytelling personnel puissant résonnant avec les enjeux contemporains. Le projet incluait la refonte complète de la stratégie de communication multicanale, la production de contenus éditoriaux et visuels premium, ainsi que la coordination d'une équipe créative dédiée pour assurer une cohérence parfaite sur tous les points de contact et renforcer l'influence de cette personnalité sur la scène politique internationale.",
      year: "2024",
      url: "#"
    },
    {
      title: "Edwin",
      category: "Pop-up Store & Événementiel", 
      image: "/assets/media/b82bb134-7256-4325-b5ca-90d055f1629c.png",
      shortDescription: "Mission internationale pilotée depuis Casablanca. Pop-up store à Bordeaux pour cette marque de jeans japonaise iconique fondée en 1947. Conception d'un espace éphémère immersif célébrant l'héritage denim japonais.",
      description: "Création et production d'un pop-up store exceptionnel à Bordeaux pour la marque de jeans japonaise légendaire Edwin. Notre mission consistait à concevoir un espace retail éphémère qui capture l'essence de la culture denim japonaise tout en s'intégrant harmonieusement dans l'écosystème créatif bordelais. Le projet comprenait la scénographie complète de l'espace, l'organisation d'événements exclusifs mêlant art local et tradition nippone, ainsi que le développement d'une stratégie d'activation marketing sur mesure pour créer un buzz authentique et générer des ventes record sur une durée limitée.",
      year: "2024",
      url: "#"
    },
    {
      title: "French Tech",
      category: "Partenariat Stratégique",
      image: "/assets/media/801816e7-97bc-49c9-948c-34e3c9d49e1f.png",
      shortDescription: "Mandat international conduit depuis notre bureau de Casablanca. Partenaire institutionnel de l'écosystème French Tech Bordeaux pour structurer l'accompagnement stratégique des entreprises incubées vers l'international.",
      description: "Partenariat institutionnel avec l'écosystème French Tech Bordeaux pour structurer l'accompagnement stratégique des entreprises incubées à l'international. Notre rôle couvre la consolidation de la stratégie de marque de l'écosystème bordelais, la conception des outils marketing pour les programmes d'incubation et l'accompagnement personnalisé des entreprises à fort potentiel dans leur développement commercial. Nous orchestrons les campagnes de communication, déployons les stratégies de positionnement et concevons les supports d'attraction pour renforcer la notoriété de French Tech Bordeaux sur la scène européenne et faciliter l'expansion internationale des entreprises accompagnées.",
      year: "2022-2024",
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
            <span>Des dispositifs en production, pour des marques qui comptent</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light mb-8 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black">
            Références & cas clients
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
            50+ clients accompagnés. 200+ projets réalisés. 15+ secteurs couverts. Une sélection de cas qui illustrent notre capacité à concevoir, produire et piloter des dispositifs à fort enjeu.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {["L'Bankalik", "AXA Assurance Maroc", "RMA", "Subway Maroc", "YouCan", "Nova Spacia", "OCB Maroc", "La Maison Amoud", "Brainlyne", "Benatna"].map((client) => (
              <div key={client} className="px-4 py-3 rounded-2xl bg-white border border-gray-200 text-sm font-semibold text-gray-700 shadow-sm">
                {client}
              </div>
            ))}
          </div>
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
                  className={`w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700 ${project.title === 'Nova Spacia' ? 'bg-gray-900' : 'bg-white'}`}
                  loading="lazy"
                  decoding="async"
                  width="320"
                  height="240"
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
                      aria-label={`Visiter le site de ${project.title}`}
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
            href="https://wa.me/212699024526?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20un%20dispositif%20digital%20%C3%A0%20enjeu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg font-medium"
          >
            <span>Discuter de votre dispositif</span>
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
