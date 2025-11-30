
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
        let visitorData: VisitorData = {
          isReturningVisitor: false,
          visitCount: 1
        };

        let industryContext: string | undefined;

        const storedVisitorData = localStorage.getItem('linkagency_visitor_data');

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
        
        if (referrer.includes('linkedin')) industryContext = 'professional';
        else if (referrer.includes('google')) industryContext = 'search';
        else if (referrer.includes('facebook') || referrer.includes('instagram')) industryContext = 'social';

        // Géolocalisation (optionnelle) with timeout and caching
        if (!visitorData.country) {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 5000);
          
          try {
            const geoResponse = await fetch('https://ipapi.co/json/', {
              signal: controller.signal,
              headers: { 'Accept': 'application/json' }
            });
            
            if (!geoResponse.ok) {
              throw new Error(`HTTP ${geoResponse.status}`);
            }
            
            const geoData = await geoResponse.json();
            
            // Validate response structure
            if (geoData && typeof geoData.country_name === 'string') {
              visitorData.country = geoData.country_name;
              visitorData.city = geoData.city;
              visitorData.timezone = geoData.timezone;
            }
          } catch (error) {
            if ((error as any).name === 'AbortError') {
              console.warn('Geolocation request timed out');
            } else {
              console.warn('Geolocation unavailable:', (error as Error).message);
            }
            // Graceful degradation - continue without geolocation
          } finally {
            clearTimeout(timeoutId);
          }
        }

        // Sauvegarder les données du visiteur
        localStorage.setItem('linkagency_visitor_data', JSON.stringify({
          ...visitorData,
          lastVisit: new Date().toISOString(),
          referrer: document.referrer
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
