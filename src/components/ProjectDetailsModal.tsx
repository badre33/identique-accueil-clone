
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Calendar, Tag, Target, Users, Award, Sparkles } from "lucide-react";

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
  url: string;
}

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailsModal = ({ project, isOpen, onClose }: ProjectDetailsModalProps) => {
  if (!project) return null;

  const getProjectDetails = (project: Project) => {
    switch (project.title) {
      // case "Amoud":
      //   return {
      //     impact: "Augmentation de 150% de la notoriété de marque",
      //     services: ["Stratégie de marque", "Identité visuelle", "Campagne digitale", "Packaging premium"],
      //     results: ["3 nouvelles boutiques ouvertes", "Partenariats haut de gamme", "Présence médiatique renforcée"],
      //     challenge: "Positionner une pâtisserie traditionnelle comme référence du luxe marocain moderne"
      //   };
      case "Edwin":
        return {
          impact: "Pop-up store sold-out en 3 jours - 1500+ visiteurs/jour",
          services: ["Conception d'espace", "Événementiel", "Stratégie d'activation", "Branding européen"],
          results: ["1500+ visiteurs/jour", "Couverture médiatique nationale", "Collaboration artistique unique", "Ventes record sur 3 jours"],
          challenge: "Créer un pont authentique entre la culture denim japonaise et l'art de vivre bordelais"
        };
      case "French Tech":
        return {
          impact: "Programme structuré de visibilité et d'accompagnement pour un écosystème innovation",
          services: ["Branding écosystème", "Marketing stratégique", "Développement business", "Accompagnement incubés"],
          results: ["Notoriété internationale renforcée", "Écosystème bordelais structuré", "Visibilité accrue des programmes", "Déploiement éditorial cohérent"],
          challenge: "Développer et positionner un écosystème innovation sur la scène internationale"
        };
      case "Soulection":
        return {
          impact: "3 événements exclusifs I-Boat, 2000+ participants total",
          services: ["Production événementielle I-Boat", "Programmation artistique", "Branding événementiel", "Stratégie digitale"],
          results: ["Événements sold-out I-Boat", "DJs internationaux Soulection", "Communauté bordelaisa engagée", "Rayonnement culturel"],
          challenge: "Implanter la culture Soulection à Bordeaux via des événements d'exception à l'I-Boat"
        };
      case "Artitenium":
        return {
          impact: "300% d'augmentation des leads qualifiés",
          services: ["Identité de marque", "Site web premium", "Stratégie digitale", "Content marketing"],
          results: ["Positionnement haut de gamme", "Pipeline commercial plein", "Notoriété sectorielle"],
          challenge: "Différencier une entreprise d'aménagement dans un marché saturé"
        };
      case "Personal Branding Politique":
        return {
          impact: "Image publique transformée et humanisée",
          services: ["Stratégie de positionnement", "Storytelling personnel", "Gestion multicanale", "Coordination créative"],
          results: ["Engagement social renforcé", "Couverture médiatique positive", "Leadership inspirant"],
          challenge: "Créer une image authentique et inspirante détachée du cadre politique traditionnel"
        };
      default:
        return {
          impact: "Dispositif structuré et livré avec exigence",
          services: ["Stratégie", "Production", "Pilotage"],
          results: ["Objectifs business servis"],
          challenge: "Défi traité avec une exécution cohérente et mesurable"
        };
    }
  };

  const details = getProjectDetails(project);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white via-gray-50 to-white border-0 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-light flex items-center justify-between text-gray-900 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-black to-gray-700 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span>{project.title}</span>
            </div>
            {project.url !== "#" && (
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ExternalLink className="w-6 h-6 text-gray-600" />
              </a>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-6">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-gray-100 to-white">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-contain p-6 hover:scale-105 transition-transform duration-500"
               loading="lazy" decoding="async" />
            </div>
            
            <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-600">
                  {project.year}
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Impact Highlight */}
            <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-2 mb-3">
                <Award className="w-5 h-5 text-white" />
                <h3 className="text-lg font-semibold text-white">Impact Clé</h3>
              </div>
              <p className="text-xl font-light leading-relaxed text-white">{details.impact}</p>
            </div>

            {/* Challenge */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2 mb-3">
                <Target className="w-5 h-5 text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-900">Défi Relevé</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{details.challenge}</p>
            </div>

            {/* Services */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-900">Services Déployés</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {details.services.map((service, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 text-sm font-medium text-gray-700">
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Résultats Concrets</h3>
              <div className="space-y-3">
                {details.results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-black to-gray-600 rounded-full"></div>
                    <span className="text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-light text-gray-900 mb-4">À Propos du Projet</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {project.description}
          </p>
        </div>

        {/* CTA Section - Texte blanc sur fond sombre */}
        <div className="mt-8 bg-gradient-to-r from-black to-gray-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-light mb-4 text-white">Vous avez un dispositif comparable à piloter ?</h3>
          <p className="text-gray-200 mb-6 text-lg">
            Échangeons sur vos enjeux de marque, de contenu, de performance ou d'activation.
          </p>
          <a
            href="https://wa.me/212699024526?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20un%20dispositif%20digital%20comparable"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg inline-block"
          >
            Discuter de votre dispositif
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};
