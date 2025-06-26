
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Philosophy } from "@/components/Philosophy";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-100">
      <Hero />
      <Services />
      <Philosophy />
      <Contact />
    </div>
  );
};

export default Index;
