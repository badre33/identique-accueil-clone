
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { PageTransition } from "@/components/PageTransition";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LazyWrapper } from "@/components/LazyWrapper";
import { CriticalResourcesPreloader } from "@/components/CriticalResourcesPreloader";
import { PrivacyConsentBanner } from "@/components/PrivacyConsentBanner";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy loading des pages
const Branding = () => <LazyWrapper importFunc={() => import('./pages/Branding')} />;
const Evenementiel = () => <LazyWrapper importFunc={() => import('./pages/Evenementiel')} />;
const PersonalBranding = () => <LazyWrapper importFunc={() => import('./pages/PersonalBranding')} />;
const ContentDigital = () => <LazyWrapper importFunc={() => import('./pages/ContentDigital')} />;
const Analytics = () => <LazyWrapper importFunc={() => import('./pages/Analytics')} />;
const DeveloppementWeb = () => <LazyWrapper importFunc={() => import('./pages/DeveloppementWeb')} />;
const InnovationUX = () => <LazyWrapper importFunc={() => import('./pages/InnovationUX')} />;
const InsideLink = () => <LazyWrapper importFunc={() => import('./pages/InsideLink')} />;
const Collaborations = () => <LazyWrapper importFunc={() => import('./pages/Collaborations')} />;
const Blog = () => <LazyWrapper importFunc={() => import('./pages/Blog')} />;
const BlogPost = () => <LazyWrapper importFunc={() => import('./pages/BlogPost')} />;
const MarketingDigital = () => <LazyWrapper importFunc={() => import('./pages/MarketingDigital')} />;
const ConseilStrategique = () => <LazyWrapper importFunc={() => import('./pages/ConseilStrategique')} />;
const InfluenceMarketing = () => <LazyWrapper importFunc={() => import('./pages/InfluenceMarketing')} />;

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

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <CriticalResourcesPreloader />
            <PrivacyConsentBanner />
            <Toaster />
            <Sonner />
          <BrowserRouter>
            <PageTransition>
              <Breadcrumb />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/branding" element={<Branding />} />
                <Route path="/evenementiel" element={<Evenementiel />} />
                <Route path="/personal-branding" element={<PersonalBranding />} />
                <Route path="/content-digital" element={<ContentDigital />} />
                <Route path="/developpement-web" element={<DeveloppementWeb />} />
                <Route path="/marketing-digital" element={<MarketingDigital />} />
                <Route path="/conseil-strategique" element={<ConseilStrategique />} />
                <Route path="/influence-marketing" element={<InfluenceMarketing />} />
                <Route path="/innovation-ux" element={<InnovationUX />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/inside-link" element={<InsideLink />} />
                <Route path="/collaborations" element={<Collaborations />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
</ErrorBoundary>
);

export default App;
