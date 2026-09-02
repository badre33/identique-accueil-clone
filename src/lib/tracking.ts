// Couche de mesure unique pour Link Agency.
// Les événements ne sont envoyés qu'après consentement et jamais depuis localhost/preview.

export const ANALYTICS_CONSENT_KEY = "linkagency_cookie_consent_v1";
export const GA4_MEASUREMENT_ID = "G-F077M674TY";

const ATTRIBUTION_STORAGE_KEY = "linkagency_attribution_v1";
const PRODUCTION_HOSTS = new Set(["linkagency.ma", "www.linkagency.ma"]);

type EventCategory = "contact" | "lead" | "navigation" | "engagement" | "outbound" | "technical";
type EventValue = string | number | boolean | undefined;

export interface TrackEventParams {
  category?: EventCategory;
  label?: string;
  value?: number;
  [key: string]: EventValue;
}

export interface AttributionData {
  landing_page?: string;
  referrer_host?: string;
  utm_id?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, unknown> }) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export const hasAnalyticsConsent = () =>
  typeof window !== "undefined" && window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === "accepted";

export const isProductionAnalyticsHost = () =>
  typeof window !== "undefined" && import.meta.env.PROD && PRODUCTION_HOSTS.has(window.location.hostname);

const pageContext = () => ({
  page_path: `${window.location.pathname}${window.location.search}`,
  site_language: window.location.pathname.startsWith("/en") ? "en" : "fr",
});

let lastEvent = { name: "", at: 0 };

export const trackEvent = (eventName: string, params: TrackEventParams = {}) => {
  try {
    if (!hasAnalyticsConsent() || !isProductionAnalyticsHost()) return;

    const hasGa4 = typeof window.gtag === "function";
    const hasPlausible = typeof window.plausible === "function";
    const hasMetaLead = eventName === "generate_lead" && typeof window.fbq === "function";
    // Ne pas mémoriser l'événement tant qu'aucun collecteur n'est prêt : il sera rejoué
    // dès que CookieConsent émet `linkagency:analytics-ready`.
    if (!hasGa4 && !hasPlausible && !hasMetaLead) return;

    // Évite le double comptage lorsqu'un lien possède un handler explicite et le tracker global.
    const now = Date.now();
    if (lastEvent.name === eventName && now - lastEvent.at < 300) return;
    lastEvent = { name: eventName, at: now };

    const payload = {
      ...pageContext(),
      event_category: params.category,
      event_label: params.label,
      ...params,
    };

    if (hasGa4) {
      window.gtag("event", eventName, payload);
    }

    if (hasPlausible) {
      window.plausible(eventName, { props: payload });
    }

    // Un clic de contact n'est pas un lead. Meta reçoit Lead uniquement après formulaire confirmé.
    if (hasMetaLead) {
      window.fbq("track", "Lead", { content_name: params.service_interest });
    }
  } catch {
    // La mesure ne doit jamais bloquer l'expérience utilisateur.
  }
};

export const trackPageView = () => {
  if (typeof document === "undefined") return;
  trackEvent("page_view", {
    category: "navigation",
    page_title: document.title,
    page_location: window.location.href,
  });
};

export const trackWhatsAppClick = (ctaLocation: string) =>
  trackEvent("whatsapp_click", { category: "contact", label: ctaLocation, cta_location: ctaLocation });

export const trackEmailClick = (ctaLocation: string) =>
  trackEvent("email_click", { category: "contact", label: ctaLocation, cta_location: ctaLocation });

export const trackPhoneClick = (ctaLocation: string) =>
  trackEvent("phone_click", { category: "contact", label: ctaLocation, cta_location: ctaLocation });

export const trackContactCtaClick = (ctaLocation: string) =>
  trackEvent("contact_cta_click", { category: "contact", label: ctaLocation, cta_location: ctaLocation });

export const trackGenerateLead = (params: {
  formLocation: string;
  serviceInterest: string;
  budgetBand: string;
  projectTimeline?: string;
}) =>
  trackEvent("generate_lead", {
    category: "lead",
    label: params.serviceInterest,
    form_location: params.formLocation,
    service_interest: params.serviceInterest,
    budget_band: params.budgetBand,
    project_timeline: params.projectTimeline || "not_provided",
  });

export const trackOutbound = (url: string, label?: string) =>
  trackEvent("outbound_click", { category: "outbound", label: label ?? url });

export const trackFileDownload = (url: string, ctaLocation: string) => {
  const fileName = url.split("/").pop()?.split("?")[0] || "document";
  const extension = fileName.includes(".") ? fileName.split(".").pop() : undefined;
  trackEvent("file_download", {
    category: "engagement",
    label: ctaLocation,
    cta_location: ctaLocation,
    file_name: fileName,
    file_extension: extension,
    link_url: url,
  });
};

export const captureAttribution = () => {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return;

  try {
    const params = new URLSearchParams(window.location.search);
    const existing = getAttribution();
    const referrerHost = document.referrer ? new URL(document.referrer).hostname : undefined;
    const attribution: AttributionData = {
      landing_page: existing.landing_page || `${window.location.pathname}${window.location.search}`,
      referrer_host: existing.referrer_host || referrerHost,
      utm_id: params.get("utm_id") || existing.utm_id || undefined,
      utm_source: params.get("utm_source") || existing.utm_source || undefined,
      utm_medium: params.get("utm_medium") || existing.utm_medium || undefined,
      utm_campaign: params.get("utm_campaign") || existing.utm_campaign || undefined,
      utm_content: params.get("utm_content") || existing.utm_content || undefined,
      utm_term: params.get("utm_term") || existing.utm_term || undefined,
    };
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // sessionStorage ou URL de provenance indisponible : aucun impact fonctionnel.
  }
};

export const getAttribution = (): AttributionData => {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY) || "{}") as AttributionData;
  } catch {
    return {};
  }
};
