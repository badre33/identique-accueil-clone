
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Philosophy } from "@/components/Philosophy";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { CTAWithStats, CTAWithUrgency } from "@/components/PersuasiveCTA";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />
      <div id="accueil">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="apropos">
        <Philosophy />
      </div>
      
      {/* CTA Section avec stats */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <CTAWithStats />
        </div>
      </section>
      
      <ProjectsGallery />
      
      {/* CTA avec urgence */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <CTAWithUrgency />
        </div>
      </section>
      
      <FAQ />
      <div id="contact">
        <Contact />
      </div>
      <ScrollToTop />
      <FloatingContactWidget />
    </div>
  );
};

export default Index;
