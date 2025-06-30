
import { useState, useEffect } from 'react';

interface VisitorData {
  country?: string;
  city?: string;
  timezone?: string;
  isReturningVisitor: boolean;
  visitCount: number;
  lastVisit?: string;
  referrer?: string;
}

interface PersonalizationData {
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
  visitorData: VisitorData;
  welcomeMessage: string;
  industryContext?: string;
}

export const usePersonalization = () => {
  const [personalizationData, setPersonalizationData] = useState<PersonalizationData>({
    timeOfDay: 'morning',
    visitorData: {
      isReturningVisitor: false,
      visitCount: 1
    },
    welcomeMessage: 'Bienvenue chez Link Agency'
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializePersonalization = async () => {
      try {
        // Déterminer l'heure de la journée
        const hour = new Date().getHours();
        let timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
        
        if (hour >= 5 && hour < 12) timeOfDay = 'morning';
        else if (hour >= 12 && hour < 17) timeOfDay = 'afternoon';
        else if (hour >= 17 && hour < 22) timeOfDay = 'evening';
        else timeOfDay = 'night';

        // Récupérer les données du visiteur depuis localStorage
        const storedVisitorData = localStorage.getItem('linkagency_visitor_data');
        let visitorData: VisitorData = {
          isReturningVisitor: false,
          visitCount: 1
        };

        if (storedVisitorData) {
          const parsed = JSON.parse(storedVisitorData);
          visitorData = {
            ...parsed,
            isReturningVisitor: true,
            visitCount: parsed.visitCount + 1,
            lastVisit: parsed.lastVisit
          };
        }

        // Obtenir le référent pour déterminer le contexte industriel
        const referrer = document.referrer;
        let industryContext;
        
        if (referrer.includes('linkedin')) industryContext = 'professional';
        else if (referrer.includes('google')) industryContext = 'search';
        else if (referrer.includes('facebook') || referrer.includes('instagram')) industryContext = 'social';

        // Géolocalisation (optionnelle)
        if (navigator.geolocation && !visitorData.country) {
          try {
            // Utiliser une API de géolocalisation IP (gratuite)
            const geoResponse = await fetch('https://ipapi.co/json/');
            if (geoResponse.ok) {
              const geoData = await geoResponse.json();
              visitorData.country = geoData.country_name;
              visitorData.city = geoData.city;
              visitorData.timezone = geoData.timezone;
            }
          } catch (error) {
            console.log('Geolocation not available');
          }
        }

        // Sauvegarder les données du visiteur
        localStorage.setItem('linkagency_visitor_data', JSON.stringify({
          ...visitorData,
          lastVisit: new Date().toISOString(),
          referrer
        }));

        // Générer le message de bienvenue personnalisé
        const welcomeMessage = generateWelcomeMessage(timeOfDay, visitorData);

        setPersonalizationData({
          timeOfDay,
          visitorData,
          welcomeMessage,
          industryContext
        });

      } catch (error) {
        console.error('Error initializing personalization:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializePersonalization();
  }, []);

  const generateWelcomeMessage = (timeOfDay: string, visitorData: VisitorData): string => {
    const timeGreetings = {
      morning: 'Bonjour',
      afternoon: 'Bon après-midi',
      evening: 'Bonsoir',
      night: 'Bonsoir'
    };

    const baseGreeting = timeGreetings[timeOfDay as keyof typeof timeGreetings];
    
    if (visitorData.isReturningVisitor) {
      if (visitorData.country && visitorData.country !== 'France') {
        return `${baseGreeting} ! Ravi de vous revoir depuis ${visitorData.country}`;
      }
      return `${baseGreeting} ! Content de vous revoir`;
    }

    if (visitorData.country && visitorData.country !== 'France') {
      return `${baseGreeting} depuis ${visitorData.country} ! Bienvenue chez Link Agency`;
    }

    return `${baseGreeting} ! Bienvenue chez Link Agency`;
  };

  return { personalizationData, isLoading };
};
