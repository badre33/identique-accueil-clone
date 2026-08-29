import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PageTransition } from "@/components/PageTransition";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CriticalResourcesPreloader } from "@/components/CriticalResourcesPreloader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { CookieConsent } from "@/components/CookieConsent";
import { AnalyticsController } from "@/components/AnalyticsController";
import { EditorialMotionController } from "@/components/EditorialMotionController";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const RouteScrollReset = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView());
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
};

// Layout racine : tous les providers + chrome commun, puis <Outlet/> pour la page.
const Layout = () => (
  <ErrorBoundary>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <CriticalResourcesPreloader />
            <RouteScrollReset />
            <Toaster />
            <Sonner />
            <PageTransition>
              <Breadcrumb />
              <Outlet />
            </PageTransition>
            <EditorialMotionController />
            <StickyMobileCTA />
            <AnalyticsController />
            <CookieConsent />
          </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

// Helper : route avec code-splitting au niveau route (rendu au build SSG ET
// chargé à la demande côté client). Le module page exporte `default`.
const page = (importFn: () => Promise<{ default: React.ComponentType }>): RouteObject['lazy'] =>
  async () => ({ Component: (await importFn()).default });

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "en/marketing-agency-morocco", lazy: page(() => import('./pages/MarketingAgencyMoroccoEn')) },
      { path: "en/outsourced-marketing-department-morocco", lazy: page(() => import('./pages/OutsourcedMarketingDepartmentMoroccoEn')) },
      { path: "en/insights/brand-localisation-morocco", lazy: page(() => import('./pages/InternationalBrandMoroccoInsightEn')) },
      { path: "en/insights/choose-marketing-partner-morocco", lazy: page(() => import('./pages/ChooseMarketingPartnerMoroccoInsightEn')) },
      { path: "direction-marketing-externalisee", lazy: page(() => import('./pages/DirectionMarketingExternalisee')) },
      { path: "branding", lazy: page(() => import('./pages/Branding')) },
      { path: "evenementiel", lazy: page(() => import('./pages/Evenementiel')) },
      { path: "influence-marketing", lazy: page(() => import('./pages/InfluenceMarketing')) },
      { path: "personal-branding", lazy: page(() => import('./pages/PersonalBranding')) },
      { path: "content-digital", lazy: page(() => import('./pages/ContentDigital')) },
      { path: "developpement-web", lazy: page(() => import('./pages/DeveloppementWeb')) },
      { path: "marketing-digital", lazy: page(() => import('./pages/MarketingDigital')) },
      { path: "social-media", lazy: page(() => import('./pages/SocialMedia')) },
      { path: "conseil-strategique", lazy: page(() => import('./pages/ConseilStrategique')) },
      { path: "innovation-ux", lazy: page(() => import('./pages/InnovationUX')) },
      { path: "analytics", lazy: page(() => import('./pages/Analytics')) },
      { path: "agence-marketing-digital-casablanca", lazy: page(() => import('./pages/AgenceCasablanca')) },
      { path: "agence-marketing-digital-marrakech", lazy: page(() => import('./pages/AgenceMarrakech')) },
      { path: "agence-communication-rabat", lazy: page(() => import('./pages/AgenceRabat')) },
      { path: "etudes-de-cas", lazy: page(() => import('./pages/EtudesDeCas')) },
      { path: "secteurs", lazy: page(() => import('./pages/Secteurs')) },
      { path: "inside-link", lazy: page(() => import('./pages/InsideLink')) },
      { path: "collaborations", lazy: page(() => import('./pages/Collaborations')) },
      { path: "blog", lazy: page(() => import('./pages/Blog')) },
      { path: "blog/:slug", lazy: page(() => import('./pages/BlogPost')) },
      { path: "contact", lazy: page(() => import('./pages/Contact')) },
      { path: "mentions-legales", lazy: page(() => import('./pages/MentionsLegales')) },
      { path: "politique-de-confidentialite", lazy: page(() => import('./pages/PolitiqueConfidentialite')) },
      { path: "politique-de-cookies", lazy: page(() => import('./pages/PolitiqueCookies')) },
      { path: "creation-site-web-agadir", lazy: page(() => import('./pages/AgenceWebAgadir')) },
      { path: "creation-site-web-tanger", lazy: page(() => import('./pages/AgenceWebTanger')) },
      { path: "creation-site-web-casablanca", lazy: page(() => import('./pages/AgenceWebCasablanca')) },
      { path: "creation-site-web-marrakech", lazy: page(() => import('./pages/AgenceWebMarrakech')) },
      { path: "creation-site-web-rabat", lazy: page(() => import('./pages/AgenceWebRabat')) },
      { path: "*", element: <NotFound /> },
    ],
  },
];
