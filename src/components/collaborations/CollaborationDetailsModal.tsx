
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
          impact: "Harmonisation complète de l'écosystème de marques avec une identité visuelle raffinée et un positionnement stratégique international",
          services: ["Refonte stratégique d'image", "Structuration branding personnel", "Charte graphique sur-mesure", "Narratif éditorial", "Brand deck professionnel", "Identité visuelle globale", "Manifeste de fondation", "Positionnement holding"],
          results: ["Écosystème unifié", "Esthétique raffinée", "Engagement humaniste", "Ambition internationale", "Cohérence multi-sectorielle", "Vision fondateur valorisée"],
          challenge: "Harmoniser une holding multisectorielle (architecture, éducation, gastronomie, coworking) autour d'une vision entrepreneuriale unique",
          fullDescription: "Mission stratégique de refonte globale pour un entrepreneur marocain visionnaire et sa holding innovante active dans plusieurs secteurs clés. Notre approche holistique combine la structuration du branding personnel du fondateur avec le positionnement stratégique de ses activités diversifiées. Le projet inclut la création d'une charte graphique sophistiquée qui reflète l'excellence opérationnelle, l'élaboration d'un narratif éditorial inspiré par la vision humaniste du dirigeant, et la production de supports de communication professionnels de haute qualité. L'objectif est de créer une cohérence visuelle et narrative qui transcende les secteurs d'activité tout en affirmant une ambition internationale et un engagement sociétal fort."
        };
      case "Personal Branding Politique":
        return {
          impact: "Construction d'une image publique authentique et inspirante avec influence renforcée sur la scène politique internationale",
          services: ["Personal branding stratégique", "Storytelling personnel", "Communication multicanale", "Humanisation du discours", "Production de contenus premium", "Coordination créative"],
          results: ["Image authentique établie", "Influence politique renforcée", "Discours modernisé", "Cohérence multicanale", "Valeurs d'espoir valorisées", "Rayonnement international"],
          challenge: "Construire une image publique inspirante détachée des codes politiques traditionnels tout en résonnant avec les enjeux contemporains",
          fullDescription: "Mission stratégique de personal branding pour une figure politique influente, visant à construire une image publique authentique et inspirante détachée des codes politiques traditionnels. Notre approche s'est concentrée sur l'humanisation du discours politique, la valorisation des valeurs d'espoir et de modernité, et la création d'un storytelling personnel puissant résonnant avec les enjeux contemporains. Le projet incluait la refonte complète de la stratégie de communication multicanale, la production de contenus éditoriaux et visuels premium, ainsi que la coordination d'une équipe créative dédiée pour assurer une cohérence parfaite sur tous les points de contact et renforcer l'influence de cette personnalité sur la scène politique internationale."
        };
      case "Subway Maroc":
        return {
          impact: "Augmentation de 200% de l'engagement sur les réseaux sociaux",
          services: ["Stratégie de contenu", "Community management", "Campagnes publicitaires", "Partenariats influenceurs"],
          results: ["12 nouvelles ouvertures", "Campagne virale à 2M+ vues", "Engagement communautaire x3", "ROI publicitaire +180%"],
          challenge: "Repositionner la marque Subway comme choix premium et healthy pour la génération Z marocaine",
          fullDescription: "Accompagnement stratégique complet de Subway Maroc dans sa transformation digitale et son repositionnement market. Notre mission incluait le développement d'une stratégie de contenu authentique, la gestion de campagnes d'influence avec des créateurs locaux, et l'orchestration de partenariats stratégiques pour renforcer la présence de la marque dans l'écosystème culinaire marocain moderne."
        };
      case "SGTM Immobilier":
        return {
          impact: "Positionnement premium établi avec 300% d'augmentation des leads qualifiés et acquisition stratégique réussie",
          services: ["Refonte identité visuelle", "Développement web", "Stratégie de marque", "Communication luxury", "Stratégie d'acquisition"],
          results: ["Site web premium lancé", "Identité visuelle moderne", "Pipeline commercial plein", "Notoriété haut de gamme", "Acquisition d'entreprises cibles"],
          challenge: "Créer une identité visuelle et digitale à la hauteur du portefeuille immobilier de prestige tout en développant une stratégie d'acquisition",
          fullDescription: "Transformation complète de l'agence immobilière SGTM avec création d'une identité de marque sophistiquée et développement d'une plateforme web immersive. Le projet visait à positionner SGTM comme la référence du marché immobilier haut de gamme, avec une approche créative qui reflète l'excellence et l'exclusivité de leurs biens d'exception. Nous avons également développé une stratégie d'acquisition pour identifier et intégrer des entreprises complémentaires, renforçant ainsi leur position dominante sur le marché du luxe immobilier."
        };
      case "Amoud":
        return {
          impact: "Transformation digitale complète avec 250% d'augmentation des ventes en ligne",
          services: ["E-commerce development", "Brand strategy", "Digital marketing", "UX/UI design"],
          results: ["Plateforme e-commerce moderne", "Stratégie omnicanale", "Expérience client optimisée", "Croissance digitale soutenue"],
          challenge: "Digitaliser une marque traditionnelle tout en préservant son authenticité et son héritage",
          fullDescription: "Accompagnement stratégique d'Amoud dans sa transformation digitale avec développement d'une plateforme e-commerce sur mesure et mise en place d'une stratégie omnicanale innovante. Le projet combinait respect de l'héritage de la marque et innovation technologique pour créer une expérience d'achat moderne et authentique."
        };
      case "Achibest Food":
        return {
          impact: "Création d'une identité de marque forte avec reconnaissance immédiate",
          services: ["Création identité visuelle", "Stratégie de marque", "Communication digitale", "Packaging design"],
          results: ["Identité visuelle distinctive", "Positionnement marché clair", "Notoriété établie", "Expansion géographique facilitée"],
          challenge: "Créer une identité de marque mémorable dans un secteur de la restauration rapide très concurrentiel",
          fullDescription: "Développement complet de l'identité de marque Achibest Food avec création d'un univers visuel distinctif et stratégie de communication intégrée. Notre approche créative a permis de positionner la chaîne comme une alternative moderne et authentique dans le paysage de la restauration rapide marocaine."
        };
      case "French Tech":
        return {
          impact: "25+ startups accompagnées vers l'international avec 8 levées de fonds réussies",
          services: ["Accompagnement startups", "Stratégie internationale", "Marketing écosystème", "Développement partenariats"],
          results: ["Écosystème bordelais renforcé", "Rayonnement international", "Startups financées", "Réseau européen développé"],
          challenge: "Développer et positionner l'écosystème French Tech bordelais comme hub incontournable",
          fullDescription: "Partenariat stratégique avec French Tech Bordeaux pour structurer l'accompagnement des startups incubées vers l'international. Notre mission couvre le développement de la stratégie de marque de l'écosystème, la création d'outils marketing dédiés et l'accompagnement personnalisé des startups dans leur développement commercial et leur expansion européenne."
        };
      case "The Family":
        return {
          impact: "Collaboration avec cet incubateur pionnier pour accompagner l'écosystème startup européen",
          services: ["Accompagnement startups", "Stratégie internationale", "Marketing écosystème", "Développement partenariats"],
          results: ["Startups accompagnées", "Méthodologies développées", "Réseau européen étendu", "Expertise incubation renforcée"],
          challenge: "Contribuer au développement de l'écosystème startup européen avec une approche innovante",
          fullDescription: "Collaboration avec The Family en 2018, incubateur européen pionnier dans l'accompagnement de startups. Notre mission consistait à appliquer les mêmes services que ceux développés avec French Tech mais dans un modèle d'incubation différent et plus mature. Cette expérience nous a permis de développer une expertise approfondie dans l'accompagnement des startups européennes et de comprendre les nuances des différents modèles d'incubation à travers l'Europe."
        };
      case "Soulection":
        return {
          impact: "3 événements sold-out à l'I-Boat avec 2000+ participants au total",
          services: ["Production événementielle", "Programmation artistique", "Branding événementiel", "Stratégie digitale"],
          results: ["Événements exclusifs I-Boat", "DJs internationaux Soulection", "Communauté bordelaise engagée", "Rayonnement culturel international"],
          challenge: "Implanter authentiquement la culture musicale Soulection dans l'écosystème culturel bordelais",
          fullDescription: "Production d'événements musicaux exclusifs pour le collectif international Soulection dans l'emblématique I-Boat de Bordeaux. Notre mission consistait à créer des expériences musicales uniques en faisant venir les DJs officiels du collectif pour des soirées exceptionnelles, créant un pont authentique entre la culture musicale internationale et la scène bordelaise."
        };
      case "Artitenium":
        return {
          impact: "Positionnement haut de gamme avec 400% d'augmentation des leads qualifiés",
          services: ["Identité de marque", "Site web premium", "Stratégie digitale", "Content marketing"],
          results: ["Brand image sophistiquée", "Pipeline commercial plein", "Notoriété sectorielle", "Clientèle haut de gamme"],
          challenge: "Positionner une entreprise d'aménagement comme référence du luxe marocain",
          fullDescription: "Transformation digitale complète d'Artitenium avec création d'une identité de marque sophistiquée et développement d'une présence digitale premium. Le projet visait à positionner l'entreprise comme la référence incontournable du design d'intérieur de luxe au Maroc, en valorisant leur savoir-faire exceptionnel."
        };
      case "DWP":
        return {
          impact: "Stratégie de communication premium établie avec reconnaissance du marché luxury",
          services: ["Communication luxury", "Stratégie de marque", "Content creation", "Relations presse"],
          results: ["Image de marque premium", "Clientèle haut de gamme", "Reconnaissance sectorielle", "Projets d'envergure"],
          challenge: "Créer une communication à la hauteur des projets de design d'intérieur d'exception",
          fullDescription: "Développement d'une stratégie de communication premium pour DWP, agence de design d'intérieur de luxe. Notre approche créative a permis de valoriser leurs créations exceptionnelles et d'attirer une clientèle exigeante à la recherche d'excellence et d'innovation dans l'aménagement d'espaces de prestige."
        };
      case "Focus M":
        return {
          impact: "Positionnement tech établi avec 150% d'augmentation du pipeline commercial",
          services: ["Positionnement marché", "Stratégie commerciale", "Marketing B2B", "Communication tech"],
          results: ["Market position claire", "Pipeline commercial développé", "Partenariats stratégiques", "Notoriété B2B"],
          challenge: "Positionner une entreprise tech spécialisée sur un marché de niche en développement",
          fullDescription: "Accompagnement stratégique de Focus M dans le développement de leur positionnement marché et stratégie commerciale. Spécialisée dans les écrans interactifs tactiles, l'entreprise nécessitait une approche marketing B2B sophistiquée pour conquérir des clients entreprises et établir sa légitimité technologique."
        };
      case "Secret Events":
        return {
          impact: "Positionnement événementiel exclusif avec clientèle VIP établie",
          services: ["Production événementielle", "Gestion image exclusive", "Stratégie luxury", "Relations VIP"],
          results: ["Événements haut de gamme", "Clientèle exclusive", "Réputation premium", "Réseau VIP développé"],
          challenge: "Créer et maintenir une image d'exclusivité dans l'événementiel de luxe",
          fullDescription: "Production d'événements privés haut de gamme et gestion de l'image de marque exclusive pour Secret Events. Notre expertise dans l'événementiel de luxe permet de créer des expériences uniques et mémorables pour une clientèle exigeante, tout en maintenant la discrétion et l'exclusivité qui caractérisent la marque."
        };
      case "Umbra Festival":
        return {
          impact: "Festival underground de référence avec 3000+ participants sur 2 jours",
          services: ["Direction artistique", "Production festival", "Programmation musicale", "Branding événementiel"],
          results: ["Festival établi", "Programmation underground", "Communauté fidèle", "Rayonnement culturel"],
          challenge: "Créer un festival de musique électronique underground authentique et pérenne",
          fullDescription: "Direction artistique et production complète d'Umbra Festival, événement de musique électronique underground. Notre vision créative a permis de développer un concept festival unique qui célèbre la culture électronique alternative tout en créant une expérience immersive authentique pour les amateurs de musique exigeants."
        };
      case "Beyond Fears":
        return {
          impact: "Événements immersifs innovants avec expériences sensorielles uniques",
          services: ["Concept créatif", "Production immersive", "Expérience utilisateur", "Innovation événementielle"],
          results: ["Concepts événementiels uniques", "Expériences immersives", "Innovation reconnue", "Communauté engagée"],
          challenge: "Créer des événements qui transcendent les codes traditionnels de l'entertainment",
          fullDescription: "Développement de concepts créatifs et production d'événements immersifs pour Beyond Fears. Notre approche innovante combine art, technologie et expérience sensorielle pour créer des événements qui marquent durablement les participants et redéfinissent les codes de l'entertainment contemporain."
        };
      case "Casablanca Music Week":
        return {
          impact: "Plus grande semaine musicale du Maroc avec 50,000+ participants",
          services: ["Partenariat stratégique", "Production événementielle", "Programmation artistique", "Rayonnement international"],
          results: ["50,000+ participants", "Rayonnement international", "Artistes de renommée", "Économie culturelle développée"],
          challenge: "Contribuer au rayonnement de la plus grande semaine musicale du Maroc",
          fullDescription: "Partenariat officiel avec Casablanca Music Week, le plus grand événement musical du Maroc. Notre contribution couvre la programmation artistique, la production d'événements satellites et le développement de stratégies de rayonnement international pour renforcer la position de Casablanca comme capitale culturelle africaine."
        };
      case "Mom Corporation":
        return {
          impact: "Agence créative spécialisée dans les expériences de marque immersives",
          services: ["Stratégie créative", "Expériences immersives", "Événementiel luxury", "Design d'expérience"],
          results: ["Expériences de marque uniques", "Clientèle luxury", "Innovation créative", "Reconnaissance sectorielle"],
          challenge: "Développer une expertise créative dans l'événementiel de luxe et le design d'expérience",
          fullDescription: "Partenariat créatif avec Mom Corporation pour développer leur expertise dans les expériences de marque immersives et l'événementiel de luxe. Notre collaboration permet de créer des concepts événementiels innovants qui marquent durablement les participants et renforcent l'impact émotionnel des marques."
        };
      case "OK Daddy":
        return {
          impact: "Concept événementiel et retail innovant avec pop-up stores à succès sur Bordeaux",
          services: ["Concept innovation", "Organisation pop-up stores", "Expérience gastronomique", "Lancement produits/artistes"],
          results: ["Pop-up stores réussis", "Lancements produits mémorables", "Collaborations artistiques", "Expérience multisensorielle"],
          challenge: "Créer des expériences retail éphémères qui révolutionnent le lancement de produits et d'artistes",
          fullDescription: "Développement du concept événementiel et retail innovant OK Daddy qui révolutionne l'expérience de découverte de nouveaux produits et artistes. Notre mission inclut l'organisation de pop-up stores sur Bordeaux pour le lancement de nouveaux produits de marques ou d'artistes en tout genre. Ces espaces éphémères combinent expérience gastronomique, découverte artistique et innovation retail pour créer des moments uniques où tous les sens sont sollicités et où les participants vivent une expérience de marque inoubliable."
        };
      case "Épicerie Bordelaise":
        return {
          impact: "Lieu culturel hybride établi comme référence gastronomique et musicale bordelaise",
          services: ["Concept store", "Programmation culturelle", "Expérience gastronomique", "Identité de lieu"],
          results: ["Lieu culturel établi", "Programmation unique", "Expérience authentique", "Communauté locale"],
          challenge: "Créer un lieu culturel authentique qui célèbre la culture bordelaise contemporaine",
          fullDescription: "Développement du concept d'Épicerie Bordelaise, lieu culturel hybride qui propose une expérience gastronomique et musicale authentique. Notre vision créative combine tradition culinaire bordelaise et programmation musicale innovante pour créer un espace culturel unique qui célèbre l'art de vivre bordelais."
        };
      case "Edwin":
        return {
          impact: "Pop-up store sold-out en 3 jours avec 1500+ visiteurs/jour",
          services: ["Conception pop-up", "Stratégie d'activation", "Branding européen", "Événementiel fashion"],
          results: ["1500+ visiteurs/jour", "Ventes record", "Couverture médiatique", "Collaboration artistique"],
          challenge: "Créer un pont authentique entre la culture denim japonaise et l'art de vivre bordelais",
          fullDescription: "Création et production d'un pop-up store exceptionnel à Bordeaux pour la marque de jeans japonaise légendaire Edwin. Notre mission consistait à concevoir un espace retail éphémère qui capture l'essence de la culture denim japonaise tout en s'intégrant harmonieusement dans l'écosystème créatif bordelais, créant une expérience shopping unique."
        };
      default:
        return {
          impact: "Résultats exceptionnels obtenus",
          services: ["Stratégie", "Créativité", "Exécution", "Innovation"],
          results: ["Objectifs dépassés", "Impact mesurable", "Satisfaction client"],
          challenge: "Défi relevé avec excellence et créativité",
          fullDescription: collaboration.description
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
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-gray-100 to-white flex items-center justify-center">
              {collaboration.logo ? (
                <img 
                  src={collaboration.logo} 
                  alt={collaboration.name}
                  className="max-h-32 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              ) : (
                <div className="text-6xl font-light text-gray-400">
                  {collaboration.name.charAt(0)}
                </div>
              )}
            </div>
            
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
              <span className="inline-block px-4 py-2 text-sm font-medium bg-black text-white rounded-full">
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

        {/* Full Description */}
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-light text-gray-900 mb-4">À Propos de la Collaboration</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {details.fullDescription}
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-8 bg-gradient-to-r from-black to-gray-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-light mb-4">Intéressé par une collaboration similaire ?</h3>
          <p className="text-gray-200 mb-6 text-lg">
            Découvrez comment nous pouvons transformer votre vision en succès concret.
          </p>
          <a 
            href={`https://wa.me/33745010714?text=Bonjour%2C%20je%20souhaite%20échanger%20sur%20une%20collaboration%20similaire%20à%20${encodeURIComponent(collaboration.name)}`}
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
