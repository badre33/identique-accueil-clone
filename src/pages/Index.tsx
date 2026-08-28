import { Header } from "@/components/Header";
import { HomeEditorial } from "@/components/home/HomeEditorial";
import { SEOHead } from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { generateWebPageSchema } from "@/utils/structuredData";

const schema = generateWebPageSchema("Direction Marketing Externalisée & Branding Maroc | Link Agency", "Direction de marque et pôle marketing externalisé pour entreprises ambitieuses au Maroc. Branding, contenu, réseaux sociaux et performance pilotés par un interlocuteur senior.", "https://linkagency.ma/");

const Index = () => (
  <div className="min-h-screen bg-black pt-16 sm:pt-20">
    <SEOHead title="Direction Marketing Externalisée & Branding Maroc | Link Agency" description="Direction de marque et pôle marketing externalisé pour entreprises ambitieuses au Maroc. Branding, contenu, réseaux sociaux et performance pilotés par un interlocuteur senior." url="https://linkagency.ma/" type="website" structuredData={schema} />
    <Header />
    <HomeEditorial />
    <Footer />
    <ScrollToTop />
  </div>
);

export default Index;
