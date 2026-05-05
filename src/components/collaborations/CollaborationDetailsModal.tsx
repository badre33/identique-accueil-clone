
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Calendar, Tag, Target, Users, Award, Sparkles } from "lucide-react";

interface Collaboration {
  name: string;
  url: string;
  category: string;
  logo?: string;
  description: string;
  year: string;
  type: string;
}

interface CollaborationDetailsModalProps {
  collaboration: Collaboration | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CollaborationDetailsModal = ({ collaboration, isOpen, onClose }: CollaborationDetailsModalProps) => {
  if (!collaboration) return null;

  const getCollaborationDetails = (collaboration: Collaboration) => {
    switch (collaboration.name) {
      case "Branding global / Entrepreneur et holding multisectorielle":
        return {
          impact: "Positionnement unifié sur 4 secteurs d'activité",
          services: ["Stratégie de marque globale", "Identité visuelle unifiée", "Personal branding", "Architecture de marque"],
          results: ["Image cohérente multi-secteurs", "Autorité dirigeante renforcée", "Synergies entre activités"],
          challenge: "Créer une cohérence de marque entre des activités très différentes (architecture, éducation, gastronomie, coworking)"
        };
      case "Personal Branding Politique":
        return {
          impact: "Image publique transformée et humanisée",
          services: ["Stratégie de positionnement", "Storytelling personnel", "Communication multicanale", "Gestion de réputation"],
          results: ["Engagement social accru", "Couverture médiatique positive", "Leadership inspirant"],
          challenge: "Construire une image authentique détachée des codes politiques traditionnels"
        };
      case "Subway Maroc":
        return {
          impact: "Croissance de 40% de l'engagement digital",
          services: ["Marketing digital", "Création de contenu", "Community management", "Campagnes publicitaires"],
          results: ["Communauté engagée", "Notoriété renforcée", "Trafic en point de vente"],
          challenge: "Adapter une marque internationale aux codes culturels marocains"
        };
      case "French Tech":
        return {
          impact: "20+ entreprises accompagnées vers l'international",
          services: ["Branding écosystème", "Marketing stratégique", "Développement business", "Accompagnement incubés"],
          results: ["5 levées de fonds réussies", "Expansion européenne", "Notoriété internationale"],
          challenge: "Positionner l'écosystème French Tech bordelais sur la scène internationale"
        };
      default:
        return {
          impact: "Résultats exceptionnels obtenus",
          services: ["Stratégie", "Créativité", "Exécution"],
          results: ["Objectifs dépassés"],
          challenge: "Défi relevé avec excellence"
        };
    }
  };

  const details = getCollaborationDetails(collaboration);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white via-gray-50 to-white border-0 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-light flex items-center justify-between text-gray-900 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-black to-gray-700 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span>{collaboration.name}</span>
            </div>
            {collaboration.url !== "#" && (
              <a 
                href={collaboration.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visiter le site web de ${collaboration.name}`}
                className="p-3 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ExternalLink className="w-6 h-6 text-gray-600" />
              </a>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Logo Section */}
          <div className="space-y-6">
            {collaboration.logo && (
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-gray-100 to-white flex items-center justify-center">
                <img 
                  src={collaboration.logo} 
                  alt={collaboration.name}
                  className="max-h-24 max-w-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            
            <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                  {collaboration.category}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-600">
                  {collaboration.year}
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <span className="inline-block px-3 py-2 text-sm font-medium bg-black text-white rounded-full">
                {collaboration.type}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Impact Highlight */}
            <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-2 mb-3">
                <Award className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Impact Clé</h3>
              </div>
              <p className="text-xl font-light leading-relaxed">{details.impact}</p>
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
              <div className="grid grid-cols-1 gap-2">
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

        {/* Collaboration Description */}
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-light text-gray-900 mb-4">À Propos de la Collaboration</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {collaboration.description}
          </p>
        </div>

        {/* CTA Section - Texte blanc sur fond sombre */}
        <div className="mt-8 bg-gradient-to-r from-black to-gray-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-light mb-4 text-white">Intéressé par une collaboration similaire ?</h3>
          <p className="text-gray-200 mb-6 text-lg">
            Découvrez comment nous pouvons transformer votre vision en succès concret.
          </p>
          <a
            href="https://wa.me/212699024526?text=Bonjour%2C%20j'aimerais%20discuter%20de%20mon%20projet"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg inline-block"
          >
            Échanger sur votre projet
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};
