import { useEffect, useState } from 'react';
import { intelligentPreloading, optimizeCriticalResources, adaptContentForNetwork } from '../utils/bundleOptimization';
import { useServiceWorker } from '../hooks/useServiceWorker';
import { WebVitalsOptimizer } from './WebVitalsOptimizer';
import { initGA4 } from '../utils/analytics';

export const CriticalResourcesPreloader = () => {
  useServiceWorker();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Defer non-critical optimizations to improve TTI
    const deferredInit = () => {
      // Optimisations critiques (non-bloquantes)
      requestIdleCallback(() => {
        optimizeCriticalResources();
      }, { timeout: 1000 });
      
      // Préchargement intelligent (différé)
      requestIdleCallback(() => {
        intelligentPreloading();
      }, { timeout: 2000 });
      
      // Adaptation réseau (différée)
      requestIdleCallback(() => {
        adaptContentForNetwork();
      }, { timeout: 1500 });

      // Initialiser Google Analytics en production (différé)
      if (process.env.NODE_ENV === 'production') {
        requestIdleCallback(() => {
          initGA4();
        }, { timeout: 3000 });
      }

      setIsReady(true);
    };

    // Run after initial render to improve TTI
    if ('requestIdleCallback' in window) {
      requestIdleCallback(deferredInit, { timeout: 500 });
    } else {
      setTimeout(deferredInit, 100);
    }

    return () => {
      // Nettoyer les event listeners si nécessaire
    };
  }, []);

  // Only render WebVitalsOptimizer after initial optimizations
  return isReady ? <WebVitalsOptimizer /> : null;
};