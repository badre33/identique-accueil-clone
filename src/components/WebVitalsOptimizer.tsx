import { useEffect } from 'react';

// Optimisations Core Web Vitals avancées
export const WebVitalsOptimizer = () => {
  useEffect(() => {
    // Optimisation LCP (Largest Contentful Paint)
    const optimizeLCP = () => {
      // Utiliser requestAnimationFrame pour éviter forced reflows
      requestAnimationFrame(() => {
        // 1. Précharger les images hero et critiques
        const heroImages = [
          '/lovable-uploads/c2c2bc5c-1a2d-4fdd-a6ac-9d3a8d13ac23.png',
          '/lovable-uploads/85b45a40-6291-4f5d-a377-65024ddb1976.png'
        ];

        heroImages.forEach(src => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = src;
          link.as = 'image';
          link.fetchPriority = 'high';
          document.head.appendChild(link);
        });

        // 2. Optimiser les polices critiques
        const fontPreload = document.createElement('link');
        fontPreload.rel = 'preload';
        fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
        fontPreload.as = 'style';
        fontPreload.fetchPriority = 'high';
        document.head.appendChild(fontPreload);

        // 3. Marquer les images critiques - Batch les modifications
        const criticalImages = document.querySelectorAll('img[data-hero="true"], .hero img, h1 + img');
        criticalImages.forEach(img => {
          if (img instanceof HTMLImageElement) {
            img.fetchPriority = 'high';
            img.loading = 'eager';
          }
        });

        // 4. Optimiser le CSS critique
        const criticalCSS = `
          /* CSS critique inline pour améliorer LCP */
          .hero-section { 
            min-height: 100vh; 
            background-image: url('/lovable-uploads/c2c2bc5c-1a2d-4fdd-a6ac-9d3a8d13ac23.png');
            background-size: cover;
            background-position: center;
            contain: layout style paint;
          }
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
    const optimizeCLS = () => {
      // Utiliser requestAnimationFrame pour grouper les modifications DOM et éviter forced reflows
      requestAnimationFrame(() => {
        // Phase 1: LECTURE - Collecter les informations sans modifier le DOM
        const images = document.querySelectorAll('img:not([width]):not([height])');
        const imageData: Array<{ element: HTMLImageElement; aspectRatio: string }> = [];
        
        images.forEach(img => {
          if (img instanceof HTMLImageElement) {
            let aspectRatio = '16/9'; // Default
            // Collecter les infos de contexte
            if (img.closest('.hero')) {
              aspectRatio = '16/9';
            } else if (img.closest('.logo')) {
              aspectRatio = '3/1';
            } else if (img.closest('.service-card')) {
              aspectRatio = '4/3';
            }
            imageData.push({ element: img, aspectRatio });
          }
        });

        // Phase 2: ÉCRITURE - Appliquer tous les changements en batch
        imageData.forEach(({ element, aspectRatio }) => {
          element.style.aspectRatio = aspectRatio;
          element.style.width = '100%';
          element.style.height = 'auto';
        });

        // 2. Réserver l'espace pour les composants dynamiques
        const dynamicElements = document.querySelectorAll('[data-dynamic="true"]');
        dynamicElements.forEach(element => {
          if (element instanceof HTMLElement) {
            element.style.minHeight = '200px';
            element.style.containIntrinsicSize = '200px';
          }
        });

        // 3. Optimiser les transitions pour éviter les shifts
        const animatedElements = document.querySelectorAll('[class*="animate-"], [class*="transition-"]');
        animatedElements.forEach(element => {
          if (element instanceof HTMLElement) {
            element.style.willChange = 'transform';
            element.style.transform = 'translateZ(0)'; // Force hardware acceleration
          }
        });
      });

      // 4. Observer les layout shifts
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShift = entry as any;
            if (!layoutShift.hadRecentInput && layoutShift.value > 0.1) {
              console.warn('Large layout shift detected:', {
                value: layoutShift.value,
                sources: layoutShift.sources?.map((s: any) => s.node)
              });
            }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      }
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