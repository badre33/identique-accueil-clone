import { useEffect } from 'react';

// Lightweight Web Vitals optimizer - avoids forced reflows
export const WebVitalsOptimizer = () => {
  useEffect(() => {
    // Defer all DOM reads to idle time to avoid forced reflows
    const runOptimizations = () => {
      // Mark hero images as high priority (batched in rAF)
      requestAnimationFrame(() => {
        const criticalImages = document.querySelectorAll('img[data-hero="true"], .hero img');
        criticalImages.forEach(img => {
          if (img instanceof HTMLImageElement) {
            img.fetchPriority = 'high';
            img.loading = 'eager';
          }
        });
      });

      // Lazy load images with IntersectionObserver (no forced reflow)
      const lazyImages = document.querySelectorAll('img[data-lazy="true"]');
      if (lazyImages.length > 0) {
        const imageObserver = new IntersectionObserver((entries) => {
          requestAnimationFrame(() => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;
                if (img.dataset.src) {
                  img.src = img.dataset.src;
                  imageObserver.unobserve(img);
                }
              }
            });
          });
        }, { rootMargin: '50px' });
        lazyImages.forEach(img => imageObserver.observe(img));
      }

    };

    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(runOptimizations, { timeout: 2000 });
    } else {
      setTimeout(runOptimizations, 100);
    }
  }, []);

  return null;
};
