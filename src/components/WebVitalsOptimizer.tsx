import { useEffect } from 'react';

// Optimisations Core Web Vitals
export const WebVitalsOptimizer = () => {
  useEffect(() => {
    // Optimisation LCP (Largest Contentful Paint)
    const optimizeLCP = () => {
      // Précharger les images critiques
      const criticalImages = document.querySelectorAll('img[data-critical="true"]');
      criticalImages.forEach((img) => {
        if (img instanceof HTMLImageElement) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = img.src;
          link.as = 'image';
          document.head.appendChild(link);
        }
      });

      // Optimiser les polices
      const fontLink = document.querySelector('link[href*="fonts.googleapis.com"]');
      if (fontLink) {
        fontLink.setAttribute('rel', 'preload');
        fontLink.setAttribute('as', 'style');
        fontLink.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
      }
    };

    // Optimisation CLS (Cumulative Layout Shift)
    const optimizeCLS = () => {
      // Définir les dimensions des images pour éviter le layout shift
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach((img) => {
        if (img instanceof HTMLImageElement) {
          // Ratio par défaut 16:9 si pas de dimensions spécifiées
          if (!img.style.aspectRatio) {
            img.style.aspectRatio = '16/9';
          }
        }
      });

      // Observer les changements de layout
      if ('LayoutShiftAttribution' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'layout-shift') {
              const layoutShift = entry as any; // Type assertion pour LayoutShift
              if (!layoutShift.hadRecentInput) {
                console.log('Layout shift detected:', layoutShift.value);
              }
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Optimisation FID (First Input Delay)
    const optimizeFID = () => {
      // Lazy loading des composants non critiques
      const lazyComponents = document.querySelectorAll('[data-lazy="true"]');
      
      const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.visibility = 'visible';
            lazyObserver.unobserve(element);
          }
        });
      });

      lazyComponents.forEach((component) => {
        lazyObserver.observe(component);
      });

      // Différer les scripts non critiques
      const deferredScripts = document.querySelectorAll('script[data-defer="true"]');
      deferredScripts.forEach((script) => {
        setTimeout(() => {
          if (script instanceof HTMLScriptElement) {
            script.async = true;
          }
        }, 2000);
      });
    };

    // Mesurer les Web Vitals
    const measureWebVitals = () => {
      if ('web-vitals' in window) {
        // @ts-ignore
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }
    };

    // Exécuter les optimisations
    optimizeLCP();
    optimizeCLS();
    optimizeFID();
    
    // Mesurer après un délai
    setTimeout(measureWebVitals, 1000);

  }, []);

  return null;
};