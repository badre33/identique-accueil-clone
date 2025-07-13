
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LazyWrapper } from "@/components/LazyWrapper";
import { CriticalResourcesPreloader } from "@/components/CriticalResourcesPreloader";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy loading des pages
const Branding = () => <LazyWrapper importFunc={() => import('./pages/Branding')} />;
const Evenementiel = () => <LazyWrapper importFunc={() => import('./pages/Evenementiel')} />;
const PersonalBranding = () => <LazyWrapper importFunc={() => import('./pages/PersonalBranding')} />;
const ContentDigital = () => <LazyWrapper importFunc={() => import('./pages/ContentDigital')} />;
const InsideLink = () => <LazyWrapper importFunc={() => import('./pages/InsideLink')} />;
const Collaborations = () => <LazyWrapper importFunc={() => import('./pages/Collaborations')} />;

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
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CriticalResourcesPreloader />
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
                <Route path="/inside-link" element={<InsideLink />} />
                <Route path="/collaborations" element={<Collaborations />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
