import { useEffect } from 'react';
import { intelligentPreloading, optimizeCriticalResources, adaptContentForNetwork } from '../utils/bundleOptimization';
import { useServiceWorker } from '../hooks/useServiceWorker';

export const CriticalResourcesPreloader = () => {
  useServiceWorker();

  useEffect(() => {
    // Optimisations critiques
    optimizeCriticalResources();
    
    // Préchargement intelligent
    intelligentPreloading();
    
    // Adaptation réseau
    adaptContentForNetwork();

    // Nettoyage au démontage
    return () => {
      // Nettoyer les event listeners si nécessaire
    };
  }, []);

  return null;
};