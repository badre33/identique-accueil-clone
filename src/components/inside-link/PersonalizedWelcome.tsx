
import { useState, useEffect } from 'react';
import { Users, Eye, Clock } from 'lucide-react';

export const PersonalizedWelcome = () => {
  const [timeSpent, setTimeSpent] = useState(0);
  
  // Calcul du nombre de visiteurs basé sur une progression réaliste
  const calculateVisitors = () => {
    const now = new Date();
    const currentHour = now.getHours();
    
    // Base de départ (3247) + progression journalière
    const baseVisitors = 3247;
    const daysSinceStart = Math.floor((now.getTime() - new Date('2024-01-01').getTime()) / (1000 * 60 * 60 * 24));
    
    // 3-4 visiteurs par heure pendant 14 heures (9h-23h) = ~49 visiteurs par jour
    const dailyGrowth = 49;
    const totalGrowth = daysSinceStart * dailyGrowth;
    
    // Progression dans la journée actuelle (9h-23h)
    let todayProgress = 0;
    if (currentHour >= 9 && currentHour <= 23) {
      const hoursActive = currentHour - 9;
      const minutesInCurrentHour = now.getMinutes();
      // 3.5 visiteurs par heure en moyenne
      todayProgress = Math.floor(hoursActive * 3.5 + (minutesInCurrentHour / 60) * 3.5);
    } else if (currentHour < 9) {
      // Avant 9h, on garde le total de la veille
      todayProgress = 0;
    } else {
      // Après 23h, on a le total de la journée
      todayProgress = 14 * 3.5; // 14 heures * 3.5 visiteurs/heure
    }
    
    return baseVisitors + totalGrowth + todayProgress + Math.floor(Math.random() * 5);
  };

  const [visitors, setVisitors] = useState(calculateVisitors);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentHour = new Date().getHours();
      
      // Mise à jour réaliste seulement pendant les heures d'activité (9h-23h)
      if (currentHour >= 9 && currentHour <= 23) {
        // Petite chance d'augmentation pour simuler l'activité en temps réel
        if (Math.random() < 0.4) { // 40% de chance
          setVisitors(prev => prev + 1);
        }
      }
      
      setTimeSpent(prev => prev + 1);
    }, 15000 + Math.random() * 10000); // Entre 15 et 25 secondes

    return () => clearInterval(interval);
  }, []);

  // Recalcul périodique pour maintenir la cohérence
  useEffect(() => {
    const recalcInterval = setInterval(() => {
      setVisitors(calculateVisitors());
    }, 60000); // Toutes les minutes

    return () => clearInterval(recalcInterval);
  }, []);

  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Bonjour' : currentHour < 18 ? 'Bonsoir' : 'Bonne soirée';

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-600">{greeting} ! Vous êtes en direct</span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>{visitors.toLocaleString()} visiteurs</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Users className="w-5 h-5 text-blue-600" />
        <p className="text-gray-700">
          <span className="font-semibold text-blue-600">{Math.floor(Math.random() * 8) + 3} personnes</span> consultent cette page en ce moment
        </p>
      </div>
    </div>
  );
};
