import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ANALYTICS_CONSENT_KEY,
  GA4_MEASUREMENT_ID,
  isProductionAnalyticsHost,
} from "@/lib/tracking";

type ConsentChoice = "accepted" | "refused";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const ensureDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args));
};

const setDefaultConsent = () => {
  ensureDataLayer();
  window.gtag?.("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });
};

const updateConsent = (choice: ConsentChoice) => {
  ensureDataLayer();
  window.gtag?.("consent", "update", {
    analytics_storage: choice === "accepted" ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
};

const loadAnalytics = () => {
  if (!isProductionAnalyticsHost()) return;
  ensureDataLayer();

  if (!document.querySelector(`script[data-ga4="${GA4_MEASUREMENT_ID}"]`)) {
    window.gtag?.("js", new Date());
    window.gtag?.("config", GA4_MEASUREMENT_ID, {
      anonymize_ip: true,
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    script.dataset.ga4 = GA4_MEASUREMENT_ID;
    document.head.appendChild(script);
  }

  window.dispatchEvent(new Event("linkagency:analytics-ready"));
};

export const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isEnglish = location.pathname.startsWith("/en");

  useEffect(() => {
    setDefaultConsent();
    const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY) as ConsentChoice | null;
    if (stored) updateConsent(stored);
    if (stored === "accepted") loadAnalytics();
    if (!stored) setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener("linkagency:open-cookie-settings", reopen);
    return () => window.removeEventListener("linkagency:open-cookie-settings", reopen);
  }, []);

  const choose = (choice: ConsentChoice) => {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, choice);
    updateConsent(choice);
    if (choice === "accepted") loadAnalytics();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <section aria-label={isEnglish ? "Privacy preferences" : "Préférences de confidentialité"} className="fixed inset-x-3 bottom-3 z-[100] border border-black/20 bg-[#f4f1eb] p-5 shadow-2xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-xl sm:p-7">
      <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#6751b7]">{isEnglish ? "Your preferences" : "Vos préférences"}</p>
      <h2 className="mt-3 text-xl font-medium tracking-[-.03em]">{isEnglish ? "Audience measurement, only with your consent." : "Mesure d’audience, seulement avec votre accord."}</h2>
      <p className="mt-3 text-sm leading-6 text-black/60">{isEnglish ? "The website uses essential storage to remember your choice. Google Analytics loads only if you consent. Refusing does not disable any feature." : "Le site utilise un stockage essentiel pour mémoriser votre choix. Google Analytics n’est chargé que si vous l’acceptez. Votre refus n’empêche aucune fonctionnalité."}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => choose("accepted")} className="min-h-12 bg-[#765fc4] px-5 text-xs font-semibold uppercase tracking-[.12em] text-white transition hover:bg-[#6751b7]">{isEnglish ? "Accept analytics" : "Accepter la mesure"}</button>
        <button type="button" onClick={() => choose("refused")} className="min-h-12 border border-black/30 px-5 text-xs font-semibold uppercase tracking-[.12em] transition hover:bg-black hover:text-white">{isEnglish ? "Refuse" : "Refuser"}</button>
      </div>
      <p className="mt-4 text-xs text-black/45"><Link to="/politique-de-cookies" className="underline underline-offset-4">{isEnglish ? "Read the cookie policy" : "En savoir plus sur les cookies"}</Link></p>
    </section>
  );
};
