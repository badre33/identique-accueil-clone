
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Philosophy } from "@/components/Philosophy";
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
