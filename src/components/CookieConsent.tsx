import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "linkagency_cookie_consent_v1";
const MEASUREMENT_ID = "G-F077M674TY";

type ConsentChoice = "accepted" | "refused";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const loadAnalytics = () => {
  if (typeof window === "undefined" || document.querySelector(`script[data-ga4="${MEASUREMENT_ID}"]`)) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, { anonymize_ip: true });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.dataset.ga4 = MEASUREMENT_ID;
  document.head.appendChild(script);
};

export const hasAnalyticsConsent = () =>
  typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY) === "accepted";

export const CookieConsent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ConsentChoice | null;
    if (stored === "accepted") loadAnalytics();
    if (!stored) setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener("linkagency:open-cookie-settings", reopen);
    return () => window.removeEventListener("linkagency:open-cookie-settings", reopen);
  }, []);

  const choose = (choice: ConsentChoice) => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    if (choice === "accepted") loadAnalytics();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <section aria-label="Préférences de confidentialité" className="fixed inset-x-3 bottom-3 z-[100] border border-black/20 bg-[#f4f1eb] p-5 shadow-2xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-xl sm:p-7">
      <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#6751b7]">Vos préférences</p>
      <h2 className="mt-3 text-xl font-medium tracking-[-.03em]">Mesure d’audience, seulement avec votre accord.</h2>
      <p className="mt-3 text-sm leading-6 text-black/60">Le site utilise un stockage essentiel pour mémoriser votre choix. Google Analytics n’est chargé que si vous l’acceptez. Votre refus n’empêche aucune fonctionnalité.</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => choose("accepted")} className="min-h-12 bg-[#765fc4] px-5 text-xs font-semibold uppercase tracking-[.12em] text-white transition hover:bg-[#6751b7]">Accepter la mesure</button>
        <button type="button" onClick={() => choose("refused")} className="min-h-12 border border-black/30 px-5 text-xs font-semibold uppercase tracking-[.12em] transition hover:bg-black hover:text-white">Refuser</button>
      </div>
      <p className="mt-4 text-xs text-black/45"><Link to="/politique-de-cookies" className="underline underline-offset-4">En savoir plus sur les cookies</Link></p>
    </section>
  );
};
