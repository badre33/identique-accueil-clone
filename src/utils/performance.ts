
// Utilitaires pour l'optimisation des performances

export const performance = {
  // Debounce pour limiter les appels fréquents
  debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle pour limiter la fréquence d'exécution
  throttle<T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Lazy loading dynamique d'images
  observeImages: (callback: (entries: IntersectionObserverEntry[]) => void) => {
    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '50px'
    });
    
    return observer;
  },

  // Préchargement de ressources critiques
  preloadResource: (href: string, as: 'image' | 'script' | 'style' | 'font') => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (as === 'font') {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  },

  // Mesure des performances
  measurePerformance: (name: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  },

  // Cache simple pour les résultats de calculs coûteux
  memoize: <T extends (...args: unknown[]) => unknown>(fn: T): T => {
    const cache = new Map();
    return ((...args: Parameters<T>) => {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }) as T;
  }
};

// Hook pour mesurer les performances de rendu
export const useRenderPerformance = (componentName: string) => {
  React.useEffect(() => {
    const start = performance.now();
    return () => {
      const end = performance.now();
      console.log(`${componentName} render took ${end - start} milliseconds`);
    };
  });
};
