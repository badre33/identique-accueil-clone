
import { useState, useRef, useEffect } from 'react';
import { Calendar, MapPin, Users, Award, Lightbulb, Rocket, Play, Pause } from 'lucide-react';
import { TouchOptimized } from '../TouchOptimized';
import { AnimatedCard } from './AnimatedCard';
import { cn } from '@/lib/utils';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  detailedDescription: string;
  icon: React.ComponentType<any>;
  color: string;
  location?: string;
  achievements?: string[];
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: '2007',
    title: 'Forces d\'élite & rigueur',
    description: 'Badreddine sert dans les forces d\'élite françaises et y forge sa discipline opérationnelle.',
    detailedDescription: 'Caporal dans les forces d\'élite françaises, Badreddine y développe les fondamentaux qui structureront plus tard sa méthode : rigueur d\'exécution, planification stratégique, performance sous contrainte.',
    icon: Users,
    color: 'from-slate-700 to-slate-900',
    location: 'France',
    achievements: ['Discipline opérationnelle', 'Planification stratégique', 'Exécution sous contrainte'],
    image: '/lovable-uploads/801816e7-97bc-49c9-948c-34e3c9d49e1f.png'
  },
  {
    id: 2,
    year: '2017',
    title: 'Tech, conseil & croissance',
    description: 'Premières expériences en tech, conseil stratégique et accompagnement de la croissance B2C.',
    detailedDescription: 'Badreddine évolue dans la tech et le conseil stratégique, accompagne plusieurs structures sur leurs problématiques de croissance et pose les bases d\'une approche hybride combinant exécution opérationnelle et pilotage data.',
    icon: Lightbulb,
    color: 'from-green-500 to-emerald-500',
    location: 'Paris · Casablanca',
    achievements: ['Premières missions stratégiques', 'Approche data assumée', 'Méthodologie affinée'],
  },
  {
    id: 3,
    year: '2020',
    title: 'Stratégies 360° & performance',
    description: 'Pilotage de stratégies marketing intégrées pour des marques de tous secteurs au Maroc.',
    detailedDescription: 'Badreddine accompagne des marques de tous secteurs (services, retail, industrie, finance, e-commerce) sur des dispositifs 360° : branding, contenu, social, paid, événementiel. Naissance de la conviction qu\'aucune action ne se justifie hors d\'une vision stratégique globale et mesurable.',
    icon: Award,
    color: 'from-purple-500 to-pink-500',
    location: 'Casablanca, Maroc',
    achievements: ['Approche 360° intégrée', 'Vision stratégique de bout en bout', 'Marketing piloté comme un P&L'],
  },
  {
    id: 4,
    year: '2023',
    title: 'Création de Link Agency',
    description: 'Badreddine fonde Link Agency à Casablanca avec une vision hybride unique au Maroc.',
    detailedDescription: 'Création officielle de Link Agency par Badreddine Harkaoui, fondateur unique. La vision : un modèle hybride agence d\'exécution + cabinet de pilotage stratégique, où branding, contenu, social, paid et événementiel sont alignés sur un même objectif de performance commerciale.',
    icon: Rocket,
    color: 'from-orange-500 to-red-500',
    location: 'Casablanca, Maroc',
    achievements: ['Fondation par Badreddine Harkaoui', 'Modèle hybride unique', 'Équipe senior constituée'],
  },
  {
    id: 5,
    year: '2026',
    title: 'Agence de stratégie & performance',
    description: 'Link Agency s\'impose comme partenaire stratégique des marques qui veulent aligner image et performance commerciale.',
    detailedDescription: 'Link Agency consolide son positionnement d\'agence de stratégie et performance, tous secteurs confondus. 10 experts senior, méthodologie Link Performance System déployée, présence renforcée à Casablanca et Marrakech.',
    icon: Calendar,
    color: 'from-indigo-500 to-purple-500',
    location: 'Casablanca · Marrakech',
    achievements: ['10 experts senior', 'Link Performance System', 'Stratégie 360° tous secteurs'],
  }
];

export const EnhancedTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % timelineEvents.length;
        setSelectedEvent(timelineEvents[nextIndex]);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleEventClick = (event: TimelineEvent, index: number) => {
    setSelectedEvent(event);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative" ref={timelineRef}>
      {/* Controls */}
      <div className="flex justify-center mb-8">
        <TouchOptimized
          touchTarget="medium"
          className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={toggleAutoPlay}
        >
          {isAutoPlaying ? (
            <Pause className="w-5 h-5 text-gray-700" />
          ) : (
            <Play className="w-5 h-5 text-gray-700" />
          )}
        </TouchOptimized>
      </div>

      {/* Timeline line with progress */}
      <div className="absolute left-8 top-20 bottom-0 w-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="w-full bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
          style={{ 
            height: `${((currentIndex + 1) / timelineEvents.length) * 100}%` 
          }}
        />
      </div>

      <div className="space-y-16">
        {timelineEvents.map((event, index) => {
          const Icon = event.icon;
          const isSelected = selectedEvent?.id === event.id;
          const isActive = index <= currentIndex;
          
          return (
            <div key={event.id} className="relative flex items-start">
              {/* Timeline dot */}
              <TouchOptimized
                touchTarget="large"
                onClick={() => handleEventClick(event, index)}
                className="relative z-10"
              >
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 cursor-pointer",
                  isActive 
                    ? `bg-gradient-to-r ${event.color} scale-110` 
                    : "bg-gray-200 hover:bg-gray-300",
                  isSelected && "ring-4 ring-white ring-opacity-60 shadow-2xl"
                )}>
                  <Icon className={cn(
                    "w-8 h-8 transition-colors duration-300",
                    isActive ? "text-white" : "text-gray-500"
                  )} />
                  
                  {/* Pulse animation for active event */}
                  {isActive && (
                    <div className={cn(
                      "absolute inset-0 rounded-full animate-ping opacity-30",
                      `bg-gradient-to-r ${event.color}`
                    )} />
                  )}
                </div>

                {/* Year badge */}
                <div className={cn(
                  "absolute -top-3 -right-3 px-2 py-1 rounded-full text-xs font-bold transition-all duration-300",
                  isActive 
                    ? "bg-white text-black shadow-lg" 
                    : "bg-gray-300 text-gray-600"
                )}>
                  {event.year}
                </div>
              </TouchOptimized>

              {/* Content */}
              <div className="ml-8 flex-1">
                <AnimatedCard 
                  className={cn(
                    "p-8 bg-white rounded-3xl shadow-lg border-l-4 transition-all duration-500 cursor-pointer",
                    `border-gradient-to-b ${event.color}`,
                    isSelected ? "shadow-2xl scale-105 bg-gradient-to-br from-white to-gray-50" : "hover:shadow-xl",
                    !isActive && "opacity-60 hover:opacity-80"
                  )}
                  onClick={() => handleEventClick(event, index)}
                  hoverScale={1.02}
                  glowEffect={isSelected}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className={cn(
                      "text-2xl font-bold transition-colors duration-300",
                      isActive ? "text-black" : "text-gray-600"
                    )}>
                      {event.title}
                    </h3>
                    {event.location && (
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className={cn(
                    "text-gray-600 leading-relaxed mb-6 transition-all duration-500",
                    isSelected ? "text-gray-800" : ""
                  )}>
                    {isSelected ? event.detailedDescription : event.description}
                  </p>

                  {/* Achievements */}
                  {isSelected && event.achievements && (
                    <div className="animate-fade-in">
                      <h4 className="font-semibold text-black mb-3">Réalisations clés :</h4>
                      <ul className="space-y-2">
                        {event.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center space-x-3 text-gray-700">
                            <div className={cn(
                              "w-2 h-2 rounded-full flex-shrink-0",
                              `bg-gradient-to-r ${event.color}`
                            )} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Progress indicator */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className={cn(
                          "w-3 h-3 rounded-full transition-colors duration-300",
                          isActive 
                            ? `bg-gradient-to-r ${event.color}` 
                            : "bg-gray-300"
                        )} />
                        <span>{isSelected ? 'Sélectionné' : isActive ? 'Réalisé' : 'À venir'}</span>
                      </div>
                      
                      {isSelected && (
                        <div className="text-xs text-gray-400 animate-fade-in">
                          Cliquez sur les autres étapes
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary stats */}
      <div className="mt-16 p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-black mb-8">Notre parcours en chiffres</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">5</div>
              <div className="text-sm text-gray-600">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">50+</div>
              <div className="text-sm text-gray-600">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">3</div>
              <div className="text-sm text-gray-600">Pays d'expertise</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">100%</div>
              <div className="text-sm text-gray-600">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
