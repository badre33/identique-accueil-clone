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

  // Initialiser les analytics
  useEffect(() => {
    if (!isInitialized) {
      // Defer all analytics initialization to idle time and split into
      // multiple microtasks so we never produce a single long task that
      // blocks input (improves Max Potential FID / TBT).
      const runStep = (fn: () => void) => {
        try { fn(); } catch (error) {
          console.error('❌ Analytics init step failed:', error);
        }
      };

      const schedule = (fn: () => void, timeout = 2000) => {
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
          (window as any).requestIdleCallback(() => runStep(fn), { timeout });
        } else {
          setTimeout(() => runStep(fn), 0);
        }
      };

      if (enableGA4) schedule(initGA4, 3000);
      if (enablePerformanceTracking) schedule(trackPagePerformance, 2000);
      if (enableScrollTracking) schedule(initScrollTracking, 2500);
      if (enableHeatmaps) schedule(initHeatmapTracking, 3000);
      schedule(setupDefaultABTests, 2000);

      // Mark provider as initialized synchronously so consumers (trackEvent)
      // remain usable; underlying handlers are no-ops until their step runs.
      setIsInitialized(true);
    }
  }, [isInitialized, enableGA4, enableHeatmaps, enableScrollTracking, enablePerformanceTracking]);

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
    if (isInitialized) {
      trackUserInteraction('custom', action, data);
    }
  };

  // Fonction pour tracker les conversions
  const trackConversionEvent = (action: string, data?: Record<string, any>) => {
    if (isInitialized) {
      trackConversion(action, data);
    }
  };

  const contextValue: AnalyticsContextType = {
    trackEvent,
    trackConversion: trackConversionEvent,
    isInitialized
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};