// Tracking helper — envoie aux providers analytics dispo (GA4, Plausible, Meta)
// Aucune dépendance lourde, dégradation gracieuse.

type EventCategory = "lead" | "navigation" | "engagement" | "outbound";

interface TrackEventParams {
  category: EventCategory;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    plausible?: (event: string, opts?: { props?: Record<string, unknown> }) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (action: string, params: TrackEventParams) => {
  try {
    if (typeof window === "undefined") return;

    // Google Analytics 4 (gtag)
    if (typeof window.gtag === "function") {
      window.gtag("event", action, {
        event_category: params.category,
        event_label: params.label,
        value: params.value,
        ...params,
      });
    }

    // Plausible
    if (typeof window.plausible === "function") {
      window.plausible(action, { props: params as Record<string, unknown> });
    }

    // Meta Pixel — événements lead uniquement
    if (params.category === "lead" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", { content_name: params.label });
    }
  } catch {
    // Tracking ne doit jamais bloquer l'UX
  }
};

// Helpers thématiques
export const trackLead = (source: string, extra?: Record<string, unknown>) =>
  trackEvent("lead_initiated", { category: "lead", label: source, ...extra });

export const trackWhatsAppClick = (location: string) =>
  trackEvent("whatsapp_click", { category: "lead", label: location });

export const trackEmailClick = (location: string) =>
  trackEvent("email_click", { category: "lead", label: location });

export const trackOutbound = (url: string, label?: string) =>
  trackEvent("outbound_click", { category: "outbound", label: label ?? url });
