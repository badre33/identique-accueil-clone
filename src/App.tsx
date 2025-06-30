
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Branding from "./pages/Branding";
import Evenementiel from "./pages/Evenementiel";
import PersonalBranding from "./pages/PersonalBranding";
import ContentDigital from "./pages/ContentDigital";
import InsideLink from "./pages/InsideLink";
import Collaborations from "./pages/Collaborations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
