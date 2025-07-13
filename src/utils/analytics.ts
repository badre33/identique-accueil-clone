// Analytics et tracking avancé pour Link Agency

// Configuration Google Analytics 4
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // À remplacer par votre ID GA4

// Initialisation Google Analytics 4
export const initGA4 = () => {
  // Charger le script GA4
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialiser gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  (window as any).gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA4_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
    anonymize_ip: true, // RGPD compliance
    allow_google_signals: false, // Respect de la vie privée
  });

  console.log('✅ Google Analytics 4 initialisé');
};

// Tracking des événements de conversion
export const trackConversion = (action: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: 'conversion',
      event_label: data?.label || '',
      value: data?.value || 0,
      currency: 'MAD',
      custom_parameters: data,
    });
  }
  
  console.log('🎯 Conversion trackée:', action, data);
};

// Tracking des interactions utilisateur
export const trackUserInteraction = (element: string, action: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: 'user_interaction',
      event_label: element,
      custom_parameters: {
        element_type: element,
        timestamp: new Date().toISOString(),
        page_url: window.location.href,
        ...data
      },
    });
  }

  // Stocker aussi localement pour les heatmaps
  const interactions = JSON.parse(localStorage.getItem('user_interactions') || '[]');
  interactions.push({
    element,
    action,
    timestamp: new Date().toISOString(),
    page: window.location.pathname,
    data
  });
  
  // Garder seulement les 1000 dernières interactions
  if (interactions.length > 1000) {
    interactions.splice(0, interactions.length - 1000);
  }
  
  localStorage.setItem('user_interactions', JSON.stringify(interactions));
};

// Tracking des performances de page
export const trackPagePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const metrics = {
          page_load_time: navigation.loadEventEnd - navigation.loadEventStart,
          dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          first_contentful_paint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          largest_contentful_paint: paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0,
        };

        if ((window as any).gtag) {
          (window as any).gtag('event', 'page_performance', {
            event_category: 'performance',
            custom_parameters: metrics,
          });
        }

        console.log('📊 Performance trackée:', metrics);
      }, 0);
    });
  }
};

// Tracking du scroll depth
export const initScrollTracking = () => {
  let maxScroll = 0;
  const scrollThresholds = [25, 50, 75, 90, 100];
  const triggeredThresholds = new Set<number>();

  const trackScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      scrollThresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !triggeredThresholds.has(threshold)) {
          triggeredThresholds.add(threshold);
          trackUserInteraction('page', 'scroll_depth', { 
            depth_percent: threshold,
            page_title: document.title 
          });
        }
      });
    }
  };

  let ticking = false;
  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        trackScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
};

// A/B Testing pour les CTA
interface ABTestVariant {
  id: string;
  name: string;
  weight: number;
  config: Record<string, any>;
}

interface ABTest {
  id: string;
  name: string;
  variants: ABTestVariant[];
  active: boolean;
}

export class ABTestManager {
  private tests: Map<string, ABTest> = new Map();
  private userVariants: Map<string, string> = new Map();

  constructor() {
    // Charger les variants de l'utilisateur depuis localStorage
    const savedVariants = localStorage.getItem('ab_test_variants');
    if (savedVariants) {
      this.userVariants = new Map(JSON.parse(savedVariants));
    }
  }

  // Définir un test A/B
  defineTest(test: ABTest) {
    this.tests.set(test.id, test);
    
    // Assigner un variant à l'utilisateur s'il n'en a pas déjà un
    if (!this.userVariants.has(test.id)) {
      const variant = this.selectVariant(test);
      this.userVariants.set(test.id, variant.id);
      this.saveUserVariants();
      
      // Tracker l'assignation
      trackUserInteraction('ab_test', 'variant_assigned', {
        test_id: test.id,
        variant_id: variant.id,
        test_name: test.name,
        variant_name: variant.name
      });
    }
  }

  // Sélectionner un variant basé sur les poids
  private selectVariant(test: ABTest): ABTestVariant {
    const totalWeight = test.variants.reduce((sum, v) => sum + v.weight, 0);
    let random = Math.random() * totalWeight;
    
    for (const variant of test.variants) {
      random -= variant.weight;
      if (random <= 0) {
        return variant;
      }
    }
    
    return test.variants[0]; // Fallback
  }

  // Obtenir le variant de l'utilisateur pour un test
  getVariant(testId: string): string | null {
    return this.userVariants.get(testId) || null;
  }

  // Obtenir la configuration du variant
  getVariantConfig(testId: string): Record<string, any> | null {
    const variantId = this.getVariant(testId);
    if (!variantId) return null;

    const test = this.tests.get(testId);
    if (!test) return null;

    const variant = test.variants.find(v => v.id === variantId);
    return variant?.config || null;
  }

  // Tracker une conversion pour un test
  trackConversion(testId: string, conversionType: string, value?: number) {
    const variantId = this.getVariant(testId);
    if (!variantId) return;

    const test = this.tests.get(testId);
    if (!test) return;

    trackConversion('ab_test_conversion', {
      test_id: testId,
      test_name: test.name,
      variant_id: variantId,
      conversion_type: conversionType,
      value: value || 0
    });
  }

  private saveUserVariants() {
    localStorage.setItem('ab_test_variants', JSON.stringify([...this.userVariants]));
  }
}

// Instance globale du gestionnaire A/B Test
export const abTestManager = new ABTestManager();

// Simulation de heatmap - tracking des clics
export const initHeatmapTracking = () => {
  const heatmapData: Array<{
    x: number;
    y: number;
    timestamp: number;
    element: string;
    page: string;
  }> = JSON.parse(localStorage.getItem('heatmap_data') || '[]');

  // Tracker les clics
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const rect = document.documentElement.getBoundingClientRect();
    
    const clickData = {
      x: event.clientX,
      y: event.clientY + window.scrollY,
      timestamp: Date.now(),
      element: target.tagName.toLowerCase() + (target.className ? '.' + target.className.split(' ').join('.') : ''),
      page: window.location.pathname
    };

    heatmapData.push(clickData);
    
    // Garder seulement les 500 derniers clics
    if (heatmapData.length > 500) {
      heatmapData.splice(0, heatmapData.length - 500);
    }
    
    localStorage.setItem('heatmap_data', JSON.stringify(heatmapData));
    
    // Tracker dans GA4 aussi
    trackUserInteraction('click', 'heatmap_click', {
      element_selector: clickData.element,
      click_x: clickData.x,
      click_y: clickData.y
    });
  });

  console.log('🔥 Heatmap tracking initialisé');
};

// Déclaration des types pour TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}