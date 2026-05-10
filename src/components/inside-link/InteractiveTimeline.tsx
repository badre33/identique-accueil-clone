
import React, { useState } from 'react';
import { Calendar, MapPin, Users, Award, Lightbulb, Rocket } from 'lucide-react';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  location?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: '2007',
    title: 'Forces d\'élite & rigueur',
    description: 'Badreddine sert dans les forces d\'élite françaises et y forge la discipline qui structurera son approche stratégique.',
    icon: Users,
    color: 'from-slate-700 to-slate-900',
    location: 'France'
  },
  {
    id: 2,
    year: '2017',
    title: 'Tech, conseil & croissance',
    description: 'Premières missions en tech, conseil stratégique et croissance B2C. Naissance de l\'approche hybride exécution + data.',
    icon: Lightbulb,
    color: 'from-green-500 to-emerald-500',
    location: 'Paris · Casablanca'
  },
  {
    id: 3,
    year: '2020',
    title: 'Stratégies 360° & performance',
    description: 'Pilotage de dispositifs marketing intégrés pour des marques de tous secteurs au Maroc. Le marketing piloté comme un P&L devient sa signature.',
    icon: Award,
    color: 'from-purple-500 to-pink-500',
    location: 'Casablanca, Maroc'
  },
  {
    id: 4,
    year: '2023',
    title: 'Création de Link Agency',
    description: 'Badreddine fonde Link Agency à Casablanca : modèle hybride agence + cabinet de pilotage data, unique au Maroc.',
    icon: Rocket,
    color: 'from-orange-500 to-red-500',
    location: 'Casablanca'
  },
  {
    id: 5,
    year: '2026',
    title: 'Agence de stratégie & performance',
    description: 'Link Agency devient le partenaire stratégique des marques qui veulent aligner branding, contenu, paid et événementiel sur un objectif de performance commerciale.',
    icon: Calendar,
    color: 'from-indigo-500 to-purple-500',
    location: 'Casablanca · Marrakech'
  }
];

export const InteractiveTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const { playClickSound, playHoverSound } = useSoundEffects();

  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
    playClickSound();
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>

      <div className="space-y-12">
        {timelineEvents.map((event, index) => {
          const Icon = event.icon;
          const isSelected = selectedEvent?.id === event.id;
          
          return (
            <div key={event.id} className="relative flex items-start">
              {/* Timeline dot */}
              <button
                onClick={() => handleEventClick(event)}
                onMouseEnter={playHoverSound}
                className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${isSelected ? 'scale-110 ring-4 ring-white ring-opacity-50' : ''}`}
              >
                <Icon className="w-8 h-8 text-white" />
                
                {/* Pulse animation */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${event.color} animate-ping opacity-20`}></div>
              </button>

              {/* Content */}
              <div className="ml-8 flex-1">
                <div 
                  className={`group cursor-pointer p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-gradient-to-b ${event.color} ${isSelected ? 'shadow-lg scale-105' : ''}`}
                  onClick={() => handleEventClick(event)}
                  onMouseEnter={playHoverSound}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}>
                      {event.year}
                    </span>
                    {event.location && (
                      <div className="flex items-center space-x-1 text-gray-500 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-800">
                    {event.title}
                  </h3>
                  
                  <p className={`text-gray-600 leading-relaxed transition-all duration-500 ${isSelected ? 'text-gray-800' : ''}`}>
                    {event.description}
                  </p>

                  {/* Expansion indicator */}
                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${event.color}`}></div>
                        <span>Événement sélectionné</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected event details */}
      {selectedEvent && (
        <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 animate-fade-in">
          <div className="text-center">
            <div className={`w-20 h-20 bg-gradient-to-r ${selectedEvent.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <selectedEvent.icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">
              {selectedEvent.year} - {selectedEvent.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
              {selectedEvent.description}
            </p>
            {selectedEvent.location && (
              <div className="flex items-center justify-center space-x-2 mt-4 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{selectedEvent.location}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
