import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  initGA4, 
  trackConversion, 
  trackUserInteraction, 
  trackPagePerformance,
  initScrollTracking,
  initHeatmapTracking,
  abTestManager
} from '@/utils/analytics';

interface AnalyticsContextType {
  trackEvent: (action: string, data?: Record<string, any>) => void;
  trackConversion: (action: string, data?: Record<string, any>) => void;
  isInitialized: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
  enableGA4?: boolean;
  enableHeatmaps?: boolean;
  enableScrollTracking?: boolean;
  enablePerformanceTracking?: boolean;
  gaTrackingId?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  enableGA4 = true,
  enableHeatmaps = true,
  enableScrollTracking = true,
  enablePerformanceTracking = true,
  gaTrackingId
}) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [userConsent, setUserConsent] = useState<boolean | null>(null);

  // Vérifier le consentement RGPD
  useEffect(() => {
    const consent = localStorage.getItem('analytics_consent');
    if (consent) {
      setUserConsent(consent === 'true');
    } else {
      // Afficher la bannière de consentement (simplifié)
      const hasConsent = window.confirm(
        'Acceptez-vous l\'utilisation de cookies d\'analyse pour améliorer votre expérience ? (Google Analytics)'
      );
      setUserConsent(hasConsent);
      localStorage.setItem('analytics_consent', hasConsent.toString());
    }
  }, []);

  // Initialiser les analytics une fois le consentement obtenu
  useEffect(() => {
    if (userConsent === true && !isInitialized) {
      try {
        // Initialiser GA4 si activé
        if (enableGA4) {
          initGA4();
        }

        // Initialiser le tracking des performances
        if (enablePerformanceTracking) {
          trackPagePerformance();
        }

        // Initialiser le tracking du scroll
        if (enableScrollTracking) {
          initScrollTracking();
        }

        // Initialiser le tracking heatmap
        if (enableHeatmaps) {
          initHeatmapTracking();
        }

        // Configurer les tests A/B par défaut
        setupDefaultABTests();

        setIsInitialized(true);
        console.log('✅ Analytics initialisés avec succès');
      } catch (error) {
        console.error('❌ Erreur lors de l\'initialisation des analytics:', error);
      }
    }
  }, [userConsent, isInitialized, enableGA4, enableHeatmaps, enableScrollTracking, enablePerformanceTracking]);

  // Configuration des tests A/B par défaut
  const setupDefaultABTests = () => {
    // Test A/B pour les CTA principaux
    abTestManager.defineTest({
      id: 'main_cta_test',
      name: 'Test CTA Principal',
      active: true,
      variants: [
        {
          id: 'control',
          name: 'Version Originale',
          weight: 50,
          config: {
            text: 'Contactez-nous',
            color: 'primary',
            size: 'default'
          }
        },
        {
          id: 'variant_a',
          name: 'Version Urgente',
          weight: 50,
          config: {
            text: 'Démarrez maintenant !',
            color: 'destructive',
            size: 'lg'
          }
        }
      ]
    });

    // Test A/B pour les boutons de service
    abTestManager.defineTest({
      id: 'service_cta_test',
      name: 'Test CTA Services',
      active: true,
      variants: [
        {
          id: 'control',
          name: 'Texte Standard',
          weight: 50,
          config: {
            text: 'En savoir plus',
            style: 'outline'
          }
        },
        {
          id: 'variant_b',
          name: 'Texte Action',
          weight: 50,
          config: {
            text: 'Obtenir un devis',
            style: 'default'
          }
        }
      ]
    });
  };

  // Fonction pour tracker les événements
  const trackEvent = (action: string, data?: Record<string, any>) => {
    if (isInitialized && userConsent) {
      trackUserInteraction('custom', action, data);
    }
  };

  // Fonction pour tracker les conversions
  const trackConversionEvent = (action: string, data?: Record<string, any>) => {
    if (isInitialized && userConsent) {
      trackConversion(action, data);
    }
  };

  const contextValue: AnalyticsContextType = {
    trackEvent,
    trackConversion: trackConversionEvent,
    isInitialized: isInitialized && userConsent === true
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
      
      {/* Bannière de consentement RGPD simplifiée */}
      {userConsent === null && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg z-50">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Nous utilisons des cookies d'analyse pour améliorer votre expérience.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setUserConsent(false);
                  localStorage.setItem('analytics_consent', 'false');
                }}
                className="px-4 py-2 text-sm border border-border rounded-md hover:bg-muted"
              >
                Refuser
              </button>
              <button
                onClick={() => {
                  setUserConsent(true);
                  localStorage.setItem('analytics_consent', 'true');
                }}
                className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </AnalyticsContext.Provider>
  );
};