
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { Services } from "@/components/Services";
import { Philosophy } from "@/components/Philosophy";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { CTAWithStats, CTAWithUrgency } from "@/components/PersuasiveCTA";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { SEOHead } from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { OptimizedCTAs } from "@/components/OptimizedCTAs";
import { LocalSEOSection } from "@/components/LocalSEO";
import { LocalCitiesLinks } from "@/components/LocalCitiesLinks";
import { ClientLogosMarquee } from "@/components/ClientLogosMarquee";
import { KeyStats } from "@/components/KeyStats";
import { TeamCredentials } from "@/components/TeamCredentials";
import { faqsEnriched } from "@/data/content";
import { generateOrganizationSchema, generateLocalBusinessSchema, generateWebPageSchema, generateFAQSchema } from '@/utils/structuredData';

const Index = () => {
  // Données structurées pour la page d'accueil
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateLocalBusinessSchema(),
      generateWebPageSchema(
        "Link Agency - Agence Marketing Digital au Maroc",
        "Agence marketing digital au Maroc spécialisée en branding, communication digitale et événementiel. Services créatifs à Casablanca, Rabat et Marrakech.",
        "https://linkagency.ma/"
      ),
      generateFAQSchema(
        faqsEnriched.slice(0, 8).map((f) => ({ question: f.question, answer: f.answer }))
      )
    ]
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Link Agency — Agence Marketing au Maroc | Branding, Social Media, Performance"
        description="Agence marketing au Maroc depuis 2015. Branding, social media, performance, événementiel. 11 ans, 200+ missions, fondateur senior qui pilote chaque dossier. Casablanca · Rabat · Marrakech."
        url="https://linkagency.ma/"
        type="website"
        structuredData={structuredData}
      />
      <ScrollProgress />
      <Header />
      <div id="accueil">
        <Hero />
      </div>
      <ClientLogosMarquee />
      <KeyStats />
      <div id="services">
        <Services />
      </div>
      <div id="apropos">
        <Philosophy />
      </div>
      
      {/* CTA Section avec stats */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <OptimizedCTAs.SocialProofCTA />
        </div>
      </section>
      
      <ProjectsGallery />

      <LocalCitiesLinks />

      <TeamCredentials />

      <FAQ />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
      <FloatingContactWidget />
    </div>
  );
};

export default Index;
