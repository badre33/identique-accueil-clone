
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { Testimonials } from "@/components/Testimonials";
import { Philosophy } from "@/components/Philosophy";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div id="accueil">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <ProjectsGallery />
      <Testimonials />
      <div id="apropos">
        <Philosophy />
      </div>
      <FAQ />
      <div id="contact">
        <Contact />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Index;
