import { useEffect } from 'react';
import { intelligentPreloading, optimizeCriticalResources, adaptContentForNetwork } from '../utils/bundleOptimization';
import { useServiceWorker } from '../hooks/useServiceWorker';
import { WebVitalsOptimizer } from './WebVitalsOptimizer';
import { initGA } from '../utils/analytics';

export const CriticalResourcesPreloader = () => {
  useServiceWorker();

  useEffect(() => {
    // Optimisations critiques
    optimizeCriticalResources();
    
    // Préchargement intelligent
    intelligentPreloading();
    
    // Adaptation réseau
    adaptContentForNetwork();

    // Initialiser Google Analytics en production
    if (process.env.NODE_ENV === 'production') {
      initGA();
    }

    // Nettoyage au démontage
    return () => {
      // Nettoyer les event listeners si nécessaire
    };
  }, []);

  return <WebVitalsOptimizer />;
};