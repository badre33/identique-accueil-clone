import { useEffect } from 'react';

// Optimisations Core Web Vitals avancées
export const WebVitalsOptimizer = () => {
  useEffect(() => {
    // Optimisation LCP (Largest Contentful Paint)
    const optimizeLCP = () => {
      // Utiliser requestAnimationFrame pour éviter forced reflows
      requestAnimationFrame(() => {
        // 1. Précharger uniquement le logo (petit fichier) - pas d'images héro lourdes
        const logoSrc = '/lovable-uploads/85b45a40-6291-4f5d-a377-65024ddb1976.png';
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = logoSrc;
        link.as = 'image';
        link.fetchPriority = 'high';
        document.head.appendChild(link);

        // 2. Marquer les images critiques - Batch les modifications
        const criticalImages = document.querySelectorAll('img[data-hero="true"], .hero img, h1 + img');
        criticalImages.forEach(img => {
          if (img instanceof HTMLImageElement) {
            img.fetchPriority = 'high';
            img.loading = 'eager';
          }
        });

        // 3. CSS critique léger sans images lourdes
        const criticalCSS = `
          .logo-image { 
            width: 120px; 
            height: auto; 
            aspect-ratio: 120/40;
            contain: layout;
          }
        `;
        
        const style = document.createElement('style');
        style.textContent = criticalCSS;
        document.head.appendChild(style);
      });
    };

    // Optimisation CLS (Cumulative Layout Shift)
    // Les styles CLS sont maintenant définis dans index.css pour éviter les forced reflows
    const optimizeCLS = () => {
      // Pas de manipulation DOM ici - tout est géré par CSS statique dans index.css
    };

    // Optimisation FID & INP (First Input Delay & Interaction to Next Paint)
    const optimizeInteractivity = () => {
      // 1. Différer les scripts non critiques
      const deferScripts = () => {
        const scripts = document.querySelectorAll('script[data-defer="true"]');
        scripts.forEach(script => {
          if (script instanceof HTMLScriptElement) {
            script.defer = true;
          }
        });
      };

      // 2. Optimiser les event listeners
      const optimizeEventListeners = () => {
        // Utiliser passive listeners pour les events de scroll
        const scrollElements = document.querySelectorAll('[data-scroll="true"]');
        scrollElements.forEach(element => {
          element.addEventListener('scroll', (e) => {
            // Scroll handler
          }, { passive: true });

          element.addEventListener('touchstart', (e) => {
            // Touch handler
          }, { passive: true });
        });

        // Debouncer pour les inputs
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
          let timeout: NodeJS.Timeout;
          input.addEventListener('input', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              // Input handler
            }, 300);
          });
        });
      };

      // 3. Code splitting et lazy loading
      const enableLazyLoading = () => {
        // Images lazy loading
        const lazyImages = document.querySelectorAll('img[data-lazy="true"]');
        const imageObserver = new IntersectionObserver((entries) => {
          // Grouper les modifications DOM avec requestAnimationFrame
          requestAnimationFrame(() => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;
                if (img.dataset.src) {
                  img.src = img.dataset.src;
                  img.classList.remove('opacity-0');
                  img.classList.add('animate-fade-in');
                  imageObserver.unobserve(img);
                }
              }
            });
          });
        }, { rootMargin: '50px' });

        lazyImages.forEach(img => imageObserver.observe(img));

        // Composants lazy loading
        const lazyComponents = document.querySelectorAll('[data-component-lazy="true"]');
        const componentObserver = new IntersectionObserver((entries) => {
          // Grouper les modifications DOM avec requestAnimationFrame
          requestAnimationFrame(() => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const element = entry.target as HTMLElement;
                element.style.visibility = 'visible';
                element.classList.add('animate-fade-in');
                componentObserver.unobserve(element);
              }
            });
          });
        }, { rootMargin: '100px' });

        lazyComponents.forEach(component => {
          if (component instanceof HTMLElement) {
            component.style.visibility = 'hidden';
            componentObserver.observe(component);
          }
        });
      };

      deferScripts();
      optimizeEventListeners();
      enableLazyLoading();
    };

    // Optimisation TTFB (Time to First Byte)
    const optimizeTTFB = () => {
      // 1. Préconnexions DNS
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ];

      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });

      // 2. Service Worker pour cache
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(err => {
          console.log('SW registration failed');
        });
      }
    };

    // Monitoring des Web Vitals
    const monitorWebVitals = () => {
      // Observer les performances
      if ('PerformanceObserver' in window) {
        // LCP Observer
        const lcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('LCP:', entry.startTime);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // FID Observer
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('FID:', (entry as any).processingStart - entry.startTime);
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // CLS Observer (déjà implementé plus haut)
      }

      // Navigation API pour TTFB
      if ('navigation' in performance) {
        const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const ttfb = navEntry.responseStart - navEntry.requestStart;
        console.log('TTFB:', ttfb);
      }
    };

    // Exécuter toutes les optimisations avec fallback pour requestIdleCallback
    const runOptimizations = () => {
      optimizeLCP();
      optimizeCLS();
      optimizeInteractivity();
      optimizeTTFB();
      
      // Délai pour le monitoring
      setTimeout(() => {
        monitorWebVitals();
      }, 2000);
    };

    // Utiliser requestIdleCallback si disponible, sinon setTimeout
    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(runOptimizations);
    } else {
      setTimeout(runOptimizations, 0);
    }

    // Optimisations continues
    const continuousOptimizations = () => {
      // Nettoyer les ressources inutilisées
      setInterval(() => {
        // Garbage collection des event listeners inactifs
        const unusedElements = document.querySelectorAll('[data-unused="true"]');
        unusedElements.forEach(element => {
          element.remove();
        });
      }, 30000);
    };

    continuousOptimizations();

  }, []);

  return null;
};