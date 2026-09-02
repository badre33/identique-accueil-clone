import { Header } from "@/components/Header";
import { HomeEditorial } from "@/components/home/HomeEditorial";
import { SEOHead } from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { generateWebPageSchema } from "@/utils/structuredData";

const title = "Direction marketing externalisée au Maroc | Link Agency";
const description = "Link Agency pilote votre stratégie de marque, vos contenus, vos réseaux sociaux et votre acquisition comme une direction marketing externalisée au Maroc.";

const schema = generateWebPageSchema(title, description, "https://linkagency.ma/");

const Index = () => (
  <div className="min-h-screen bg-black pt-16 sm:pt-20">
    <SEOHead title={title} description={description} url="https://linkagency.ma/" type="website" structuredData={schema} alternateLanguages={[{ hrefLang: "en", href: "https://linkagency.ma/en/marketing-agency-morocco" }]} />
    <Header />
    <HomeEditorial />
    <Footer />
    <ScrollToTop />
  </div>
);

export default Index;
