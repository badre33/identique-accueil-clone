import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  captureAttribution,
  trackContactCtaClick,
  trackEmailClick,
  trackFileDownload,
  trackPageView,
  trackPhoneClick,
  trackWhatsAppClick,
} from "@/lib/tracking";

const analyticsLocation = (anchor: HTMLAnchorElement) => {
  const explicit = anchor.dataset.analyticsLocation;
  if (explicit) return explicit;
  if (anchor.closest("header")) return "header";
  if (anchor.closest("footer")) return "footer";
  const section = anchor.closest<HTMLElement>("[data-analytics-section], section[id]");
  if (section?.dataset.analyticsSection) return section.dataset.analyticsSection;
  if (section?.id) return section.id;
  const label = (anchor.getAttribute("aria-label") || anchor.textContent || "link")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9à-ÿ]+/g, "_")
    .replace(/^_|_$/g, "")
    .slice(0, 60);
  return label || "unspecified";
};

export const AnalyticsController = () => {
  const location = useLocation();

  useEffect(() => {
    captureAttribution();
    trackPageView();
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onAnalyticsReady = () => {
      captureAttribution();
      trackPageView();
    };

    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const locationName = analyticsLocation(anchor);
      if (anchor.hasAttribute("download") || /\.pdf(?:$|[?#])/i.test(href)) trackFileDownload(href, locationName);
      else if (/wa\.me|api\.whatsapp\.com/i.test(href)) trackWhatsAppClick(locationName);
      else if (href.startsWith("tel:")) trackPhoneClick(locationName);
      else if (href.startsWith("mailto:")) trackEmailClick(locationName);
      else {
        try {
          const url = new URL(anchor.href, window.location.href);
          if (url.origin === window.location.origin && url.pathname === "/contact") {
            trackContactCtaClick(locationName);
          }
        } catch {
          // Lien non standard : aucune mesure spécifique.
        }
      }
    };

    window.addEventListener("linkagency:analytics-ready", onAnalyticsReady);
    document.addEventListener("click", onDocumentClick);
    return () => {
      window.removeEventListener("linkagency:analytics-ready", onAnalyticsReady);
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  return null;
};
