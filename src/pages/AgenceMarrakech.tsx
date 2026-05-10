import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Sparkles, Camera, Globe, CheckCircle2, Phone, Mail, Hotel } from "lucide-react";
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

const AgenceMarrakech = () => {
  const faqs = [
    {
      question: "Pourquoi une agence marketing à Marrakech ?",
      answer:
        "Marrakech est l'une des destinations les plus puissantes au monde en notoriété touristique et lifestyle. Pour les acteurs de l'hôtellerie, du luxe, du retail premium et de l'événementiel, une agence locale comme Link Agency permet de capter les codes esthétiques de la ville, de coordonner les productions sur place et de piloter des dispositifs cohérents avec l'identité Marrakech.",
    },
    {
      question: "Quels secteurs accompagnez-vous à Marrakech ?",
      answer:
        "Hôtellerie de luxe, riads, restaurants, boutiques lifestyle, artisanat d'art, événementiel privé et corporate, immobilier de prestige, festivals culturels et acteurs touristiques. Tous nos accompagnements sont sur-mesure et calibrés selon votre positionnement.",
    },
    {
      question: "Travaillez-vous avec des marques internationales basées à Marrakech ?",
      answer:
        "Oui. Nous accompagnons à la fois des marques marocaines et des acteurs internationaux implantés à Marrakech. Notre équipe pilote en français, anglais et arabe, et adapte les dispositifs aux audiences locales comme aux clientèles internationales.",
    },
    {
      question: "Pouvez-vous gérer la production photo et vidéo sur place ?",
      answer:
        "Oui. Nous pilotons des productions de contenu sur Marrakech : shooting photo, vidéo, captation événementielle et création de contenus sociaux natifs adaptés aux codes lifestyle de la ville.",
    },
    {
      question: "Quels sont vos délais d'intervention ?",
      answer:
        "Pour un cadrage stratégique, comptez 2 à 4 semaines. Pour une activation digitale, 4 à 8 semaines selon le périmètre. Pour des productions ponctuelles (shoot, événement), nous mobilisons sous 2 semaines.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLocalBusinessSchema(),
      generateServiceSchema(
        "Agence Marketing Digital à Marrakech",
        "Agence marketing digital à Marrakech : branding, communication, social media, production de contenu et événementiel pour hôtellerie, luxe et lifestyle.",
        "Sur devis"
      ),
      generateWebPageSchema(
        "Agence Marketing Digital à Marrakech | Link Agency Maroc",
        "Link Agency, agence marketing digital à Marrakech. Branding, social media, événementiel et production de contenu pour hôtellerie, luxe et lifestyle.",
        "https://linkagency.ma/agence-marketing-digital-marrakech"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Agence Marketing Digital Marrakech", url: "https://linkagency.ma/agence-marketing-digital-marrakech" },
      ]),
      generateFAQSchema(faqs),
    ],
  };

  const expertises = [
    { title: "Branding & Identité", desc: "Plateformes de marque pour hôtels, riads, restaurants et marques lifestyle marrakchies.", link: "/branding" },
    { title: "Social Media Lifestyle", desc: "Stratégie éditoriale Instagram, TikTok et réseaux pour audiences locales et internationales.", link: "/social-media" },
    { title: "Production de Contenu", desc: "Shooting photo, vidéo et contenus natifs sur Marrakech, codes esthétiques premium.", link: "/content-digital" },
    { title: "Événementiel & Activations", desc: "Conception et production d'événements de marque, lancements et activations à Marrakech.", link: "/evenementiel" },
    { title: "Influence Marketing", desc: "Sourcing créateurs et campagnes d'influence ciblant les clientèles touristiques et locales.", link: "/influence-marketing" },
    { title: "Marketing Digital", desc: "SEO, paid media multilingue et campagnes ciblant les marchés émetteurs internationaux.", link: "/marketing-digital" },
  ];

  const sectors = [
    "Hôtellerie de Luxe", "Riads & Maisons d'hôtes", "Restauration Premium",
    "Lifestyle & Concept Stores", "Artisanat d'Art", "Immobilier de Prestige",
    "Événementiel Privé", "Festivals & Culture", "Tourisme & Loisirs",
  ];

  const handleContact = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite échanger avec votre agence marketing digital à Marrakech.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Agence Marketing Digital à Marrakech | Link Agency Maroc"
        description="Agence marketing digital à Marrakech : branding, social media, production de contenu et événementiel pour hôtellerie, luxe et lifestyle."
        keywords="agence marketing digital marrakech, agence communication marrakech, agence branding marrakech, agence social media marrakech, agence événementielle marrakech, agence hôtellerie marrakech"
        url="https://linkagency.ma/agence-marketing-digital-marrakech"
        type="service"
        structuredData={schema}
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour à l'accueil
          </Link>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <MapPin className="w-4 h-4" /> Marrakech, Maroc
          </div>

          <h1 className="text-5xl lg:text-6xl font-light mb-6 text-black leading-tight max-w-4xl">
            Agence Marketing Digital à Marrakech
          </h1>
          <h2 className="text-2xl font-light mb-8 text-gray-800 max-w-3xl">
            Branding, social media et production de contenu pour les marques lifestyle, hôtelières et événementielles
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10 font-light max-w-3xl">
            Link Agency accompagne à Marrakech les acteurs de l'hôtellerie, du luxe, du lifestyle et de l'événementiel. Nous structurons des dispositifs créatifs et digitaux qui captent l'esprit de la ville rouge tout en répondant aux exigences business des marques internationales et locales.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button onClick={handleContact} className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
              Demander un devis
            </Button>
            <a href="mailto:bharkaoui@linkagency.ma">
              <Button variant="outline" className="px-8 py-6 text-lg">
                <Mail className="w-4 h-4 mr-2" /> bharkaoui@linkagency.ma
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-4 text-black">Nos expertises à Marrakech</h2>
          <p className="text-lg text-gray-600 font-light mb-12 max-w-3xl">
            Six domaines d'intervention adaptés aux codes lifestyle et premium de la destination.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertises.map((e) => (
              <Link key={e.title} to={e.link} className="group p-8 border border-gray-200 rounded-2xl hover:border-black hover:shadow-lg transition-all">
                <Sparkles className="w-6 h-6 text-amber-500 mb-4" />
                <h3 className="text-xl font-medium text-black mb-3">{e.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{e.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="py-20 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-black">Pourquoi choisir Link Agency à Marrakech</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Hotel className="w-6 h-6" />, title: "Expertise hôtellerie & lifestyle", desc: "Une connaissance fine des codes du luxe, de l'hôtellerie premium et des marques lifestyle marrakchies." },
              { icon: <Camera className="w-6 h-6" />, title: "Production sur place", desc: "Équipes mobilisables sur Marrakech pour shooting photo, vidéo, captation événementielle et social content." },
              { icon: <Globe className="w-6 h-6" />, title: "Multilingue FR/AR/EN", desc: "Pilotage de dispositifs adressant aussi bien les audiences locales que les clientèles internationales." },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: "Approche sur-mesure", desc: "Pas de packs standardisés. Chaque marque est traitée selon son positionnement, ses codes et ses ambitions." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="p-3 bg-black text-white rounded-xl h-fit">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-medium text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-4 text-black">Secteurs accompagnés à Marrakech</h2>
          <p className="text-lg text-gray-600 font-light mb-10 max-w-3xl">
            Nous travaillons avec les acteurs majeurs du tourisme, du luxe et du lifestyle implantés à Marrakech.
          </p>
          <div className="flex flex-wrap gap-3">
            {sectors.map((s) => (
              <span key={s} className="px-5 py-2 border border-gray-300 rounded-full text-gray-700 font-light">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu SEO long */}
      <section className="py-20 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-6 text-black">Le marketing digital à Marrakech en 2026</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Marrakech occupe une place singulière dans le paysage marocain : capitale touristique mondiale, vitrine du lifestyle marocain, terrain de jeu privilégié pour le luxe, l'art de vivre et l'événementiel international. Pour les marques qui s'y développent, le marketing digital ne peut pas être traité comme ailleurs : les codes esthétiques, les audiences ciblées et les temps forts de la ville imposent une lecture spécifique.
          </p>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            En tant qu'agence marketing digital à Marrakech, Link Agency conçoit des dispositifs alignés avec l'ADN premium de la destination. Pour les hôteliers et riads, nous structurons des présences Instagram et TikTok qui captent les imaginaires touristiques tout en convertissant les recherches directes. Pour les marques lifestyle et restaurants, nous produisons des contenus natifs ancrés dans l'esthétique marrakchie. Pour les événements et activations, nous coordonnons l'amont stratégique, la production sur place et l'amplification digitale.
          </p>
          <p className="text-gray-700 font-light leading-relaxed">
            Notre vocation : produire des dispositifs élégants, mesurables et durables, qui dépassent l'effet de mode. Que vous soyez un riad de luxe en refonte de marque, un restaurant en lancement, une enseigne lifestyle en expansion ou un acteur événementiel international, notre équipe vous accompagne avec rigueur et sensibilité créative.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-black">Questions fréquentes</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-medium text-black mb-3">{faq.question}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 lg:px-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-8">Discutons de votre projet à Marrakech</h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Premier échange gratuit pour cadrer vos enjeux, identifier les leviers prioritaires et chiffrer un dispositif sur mesure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={handleContact} className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
              <Phone className="w-4 h-4 mr-2" /> WhatsApp +212 699-024526
            </Button>
            <a href="mailto:bharkaoui@linkagency.ma">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                <Mail className="w-4 h-4 mr-2" /> Nous écrire
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FloatingContactWidget />
    </div>
  );
};

export default AgenceMarrakech;