import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, Smartphone, Search, ShoppingCart, MessageCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { SEOHead } from "@/components/SEOHead";
import {
  generateServiceSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
} from "@/utils/structuredData";

const AgenceWebRabat = () => {
  const faqs = [
    { question: "Combien coûte la création d'un site web à Rabat ?", answer: "Le prix d'un site internet à Rabat dépend du périmètre : site vitrine PME (5-7 pages) à partir de 15 000 MAD, site e-commerce à partir de 30 000 MAD, plateforme sur-mesure à partir de 60 000 MAD. Devis transparent sous 48h, sans engagement." },
    { question: "Quels délais pour créer un site web à Rabat ?", answer: "Un site vitrine PME prend en général 4 à 6 semaines de conception à mise en ligne. Un site e-commerce ou plateforme complexe : 8 à 14 semaines selon le périmètre fonctionnel. Onboarding démarré en 7 jours après signature." },
    { question: "Quels secteurs accompagnez-vous à Rabat ?", answer: "Hôtellerie, restauration, immobilier, services aux particuliers, commerce local, professions libérales, agroalimentaire, tourisme, et entreprises industrielles de la région Rabat-Salé-Kénitra. Nous adaptons l'esthétique et le ton aux codes locaux." },
    { question: "Êtes-vous physiquement présents à Rabat ?", answer: "Notre studio principal est à Casablanca, mais nous opérons à Rabat avec un réseau de partenaires locaux (production photo, vidéo, événementiel). Les rendez-vous stratégiques se font à distance (visio) ou en présentiel à Rabat selon les besoins du projet." },
    { question: "Pouvez-vous gérer le SEO local Rabat après la création du site ?", answer: "Oui. Optimisation SEO complète : référencement local Google Maps, Google Business Profile, mots-clés Rabat + Rabat-Salé-Kénitra, contenu géolocalisé, backlinks régionaux. Forfait SEO mensuel ou one-shot, à votre choix." },
    { question: "Le site sera-t-il responsive et adapté mobile ?", answer: "Évidemment. Tous nos sites sont conçus mobile-first, parfaitement responsive sur smartphone et tablette, optimisés Core Web Vitals (vitesse, accessibilité, expérience). Plus de 70% du trafic web au Maroc vient du mobile." },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLocalBusinessSchema("rabat"),
      generateServiceSchema(
        "Création de site web à Rabat",
        "Agence web à Rabat : création de site internet professionnel, e-commerce, plateforme sur-mesure. Design moderne, mobile-first, optimisé SEO local Rabat-Salé-Kénitra.",
        "À partir de 15 000 MAD"
      ),
      generateWebPageSchema(
        "Création de Site Web à Rabat | Agence Web Rabat-Salé-Kénitra | Link Agency",
        "Agence web à Rabat : création de site internet, e-commerce et plateformes sur-mesure pour entreprises de la région Rabat-Salé-Kénitra.",
        "https://linkagency.ma/creation-site-web-rabat"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Création site web Rabat", url: "https://linkagency.ma/creation-site-web-rabat" },
      ]),
      generateFAQSchema(faqs),
    ],
  };

  const handleContact = () => {
    const message = "Bonjour, je souhaite créer un site web à Rabat avec Link Agency. Pourrions-nous échanger sur mon projet ?";
    window.open(`https://wa.me/212699024526?text=${encodeURIComponent(message)}`, "_blank");
  };

  const services = [
    { icon: <Globe className="w-7 h-7" />, title: "Site vitrine professionnel", desc: "5-10 pages, design moderne, optimisé pour la conversion. Idéal pour les PME et services à Rabat.", from: "À partir de 15 000 MAD" },
    { icon: <ShoppingCart className="w-7 h-7" />, title: "Site e-commerce", desc: "Boutique en ligne complète : catalogue, panier, paiement, gestion stocks. Intégration paiements marocains.", from: "À partir de 30 000 MAD" },
    { icon: <Smartphone className="w-7 h-7" />, title: "Application web sur-mesure", desc: "Plateforme métier, espace client, outil interne. React/Next.js/TypeScript, cloud, sécurité.", from: "À partir de 60 000 MAD" },
    { icon: <Search className="w-7 h-7" />, title: "SEO local Rabat", desc: "Référencement Google Maps, Google Business Profile, contenu géolocalisé, backlinks Rabat-Salé-Kénitra.", from: "À partir de 5 000 MAD/mois" },
  ];

  const sectors = ["Hôtellerie & restauration","Immobilier (vente, location, promoteurs)","Tourisme & loisirs","Services aux particuliers","Commerce local","Professions libérales","Agroalimentaire & coopératives","Industries Rabat-Salé-Kénitra"];

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Création de Site Web à Rabat | Agence Web Rabat-Salé-Kénitra | Link Agency"
        description="Agence web à Rabat : création de site internet, e-commerce, plateforme sur-mesure. PME et entreprises de la région Rabat-Salé-Kénitra. Devis sous 48h, mobile-first, SEO local."
        keywords="création site web rabat, agence web rabat, site internet rabat, agence digitale rabat, e-commerce rabat, souss-massa"
        url="https://linkagency.ma/creation-site-web-rabat"
        type="service"
        structuredData={schema}
      />
      <Header />

      <section className="pt-24 pb-16 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8 text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />Retour à l'accueil
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-6">RABAT · RABAT-SALÉ-KÉNITRA · MAROC</p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight text-black mb-6">Création de site web à Rabat</h1>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 font-light">
                Sites vitrines, e-commerce et plateformes sur-mesure pour les entreprises d'Rabat et de la région Rabat-Salé-Kénitra. Design moderne, mobile-first, optimisé pour la conversion et le SEO local. 11 ans d'expertise au Maroc.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleContact} className="bg-foreground text-background hover:bg-primary text-base px-7 py-6 rounded-none">
                  <MessageCircle className="w-5 h-5 mr-2" />Discuter sur WhatsApp
                </Button>
                <Link to="/contact">
                  <Button variant="outline" className="text-base px-7 py-6 rounded-none border-foreground/20">Demander un devis</Button>
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div><div className="text-3xl font-semibold text-foreground">11 ans</div><div className="text-sm text-gray-500 mt-1">au Maroc</div></div>
                <div><div className="text-3xl font-semibold text-foreground">48h</div><div className="text-sm text-gray-500 mt-1">devis</div></div>
                <div><div className="text-3xl font-semibold text-foreground">7 jours</div><div className="text-sm text-gray-500 mt-1">onboarding</div></div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-indigo-100 via-blue-50 to-slate-50 rounded-2xl flex items-center justify-center">
                <Globe className="w-48 h-48 text-indigo-700/40" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-4">Nos prestations web à Rabat</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">Du site vitrine simple à la plateforme métier complexe, nous adaptons le périmètre à vos enjeux business et à votre budget. Prix de départ transparents, devis personnalisé sous 48h.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-foreground mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-3">{s.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{s.desc}</p>
                <p className="text-sm font-medium text-primary">{s.from}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-4">Secteurs accompagnés à Rabat et dans le Rabat-Salé-Kénitra</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">Nous concevons des sites web adaptés aux codes et aux usages de votre secteur, en intégrant les spécificités du marché local Rabat.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((s, i) => (
              <div key={i} className="bg-white p-5 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-800">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-12">Notre méthode en 5 étapes</h2>
          <div className="space-y-6">
            {[
              { n: "1", title: "Discovery & cadrage", desc: "Brief approfondi, analyse de votre secteur, étude de la concurrence locale Rabat, définition du périmètre fonctionnel et des KPIs." },
              { n: "2", title: "Wireframes & UX", desc: "Architecture de l'information, parcours utilisateurs, wireframes des pages clés. Validation avant passage en design." },
              { n: "3", title: "Design & branding", desc: "Maquettes UI haute fidélité, charte graphique adaptée si besoin, validation page par page avec vous." },
              { n: "4", title: "Développement & SEO", desc: "Code propre, performant, optimisé SEO local Rabat. Tests cross-browser, mobile-first, accessibilité." },
              { n: "5", title: "Mise en ligne & accompagnement", desc: "Déploiement, configuration analytics, formation à l'admin, accompagnement post-livraison." },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 p-6 bg-white border border-gray-100 rounded-lg">
                <div className="text-4xl font-light text-primary/60 w-12 flex-shrink-0">{step.n}</div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-12">Questions fréquentes — création de site web à Rabat</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white p-6 rounded-lg group">
                <summary className="font-medium text-black cursor-pointer flex items-center justify-between">{faq.question}</summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6">Un projet de site web à Rabat ?</h2>
          <p className="text-lg opacity-90 mb-10 leading-relaxed">Échangez directement avec le fondateur sur WhatsApp. Premier retour sous 24h, devis transparent sous 48h, sans engagement.</p>
          <Button onClick={handleContact} className="bg-background text-foreground hover:bg-primary hover:text-white text-base px-10 py-6 rounded-none">
            <MessageCircle className="w-5 h-5 mr-2" />Discuter sur WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingContactWidget />
    </div>
  );
};

export default AgenceWebRabat;
