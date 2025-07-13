// Configuration Google Analytics 4 et tracking avancé

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // À remplacer par votre ID GA4

// Initialiser Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return;

  // Charger GA4 de manière asynchrone
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}', {
      page_title: document.title,
      page_location: window.location.href,
      anonymize_ip: true,
      send_page_view: true
    });
  `;
  document.head.appendChild(script2);

  window.gtag = window.gtag || function() {
    window.dataLayer.push(arguments);
  };
};

// Tracking des pages
export const trackPageView = (url: string, title: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// Tracking des événements
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Tracking spécialisé pour l'agence
export const trackContactForm = (formType: 'contact' | 'quote' | 'collaboration') => {
  trackEvent('form_submission', 'engagement', formType);
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('page_view', 'services', serviceName);
};

export const trackProjectView = (projectName: string) => {
  trackEvent('project_view', 'portfolio', projectName);
};

export const trackCTAClick = (ctaLocation: string) => {
  trackEvent('cta_click', 'conversion', ctaLocation);
};

export const trackDownload = (fileName: string) => {
  trackEvent('file_download', 'engagement', fileName);
};

export const trackSocialShare = (platform: string, url: string) => {
  trackEvent('social_share', 'engagement', platform, 1);
};

// Tracking des performances (Core Web Vitals)
export const trackWebVitals = (name: string, value: number) => {
  trackEvent(name, 'performance', undefined, Math.round(value));
};

// Tracking des erreurs
export const trackError = (error: string, location: string) => {
  trackEvent('error', 'technical', `${location}: ${error}`);
};

// Configuration des objectifs de conversion
export const trackConversion = (conversionType: 'quote_request' | 'contact_form' | 'phone_call' | 'email_click') => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      send_to: GA_TRACKING_ID,
      event_category: 'conversion',
      event_label: conversionType,
      value: 1
    });
  }
};

// Tracking avancé pour le retargeting
export const trackUserBehavior = (behavior: 'engaged_user' | 'returning_visitor' | 'service_interested') => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'custom_behavior', {
      custom_parameter_1: behavior,
      engagement_time_msec: Date.now()
    });
  }
};

// Configuration Enhanced Ecommerce pour tracking des services
export const trackServiceInterest = (serviceName: string, serviceCategory: string, price?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'view_item', {
      currency: 'MAD',
      value: price || 0,
      items: [{
        item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
        item_name: serviceName,
        item_category: serviceCategory,
        quantity: 1,
        price: price || 0
      }]
    });
  }
};