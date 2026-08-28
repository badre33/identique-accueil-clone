import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Building2, TrendingUp, Target, CheckCircle2, Phone, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { SEOHead } from "@/components/SEOHead";
import casablancaHero from "@/assets/casablanca-hero.webp";
import {
  generateServiceSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
} from "@/utils/structuredData";

const AgenceCasablanca = () => {
  const faqs = [
    {
      question: "Pourquoi choisir une agence marketing digital à Casablanca ?",
      answer:
        "Casablanca concentre la majorité des sièges sociaux et des centres de décision marketing au Maroc. Travailler avec une agence locale comme Link Agency permet une proximité opérationnelle, une compréhension fine du marché casablancais (audiences, médias, codes culturels) et une réactivité quotidienne sur vos dispositifs.",
    },
    {
      question: "Quels services propose Link Agency à Casablanca ?",
      answer:
        "Stratégie de marque, branding, marketing digital (SEO, paid media, social), production de contenu, événementiel corporate, influence marketing et développement web. Toutes nos prestations sont sur devis et calibrées selon votre maturité digitale et vos objectifs business.",
    },
    {
      question: "Combien coûte une prestation marketing à Casablanca ?",
      answer:
        "Nos missions sont systématiquement chiffrées sur devis après un premier échange de cadrage. Le budget dépend du périmètre (stratégique, créatif, média), de la durée de la mission et des canaux activés. Nous travaillons aussi bien sur des sprints ponctuels que sur des accompagnements annuels.",
    },
    {
      question: "Travaillez-vous avec des PME ou uniquement des grands groupes ?",
      answer:
        "Nous accompagnons aussi bien des PME ambitieuses que des grands groupes établis à Casablanca. Notre point commun : des marques qui veulent structurer leur dispositif marketing avec rigueur et ambition, plutôt que multiplier les actions tactiques sans cap.",
    },
    {
      question: "Intervenez-vous uniquement à Casablanca ?",
      answer:
        "Notre base opérationnelle est à Casablanca et Marrakech, mais nous intervenons sur l'ensemble du territoire marocain et à l'international pour des marques marocaines en expansion.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLocalBusinessSchema("casablanca"),
      generateServiceSchema(
        "Agence Marketing Digital à Casablanca",
        "Agence marketing digital à Casablanca : branding, communication, SEO, paid media, social media et événementiel corporate pour marques au Maroc au Maroc.",
        "Sur devis"
      ),
      generateWebPageSchema(
        "Agence Marketing Digital à Casablanca | Link Agency Maroc",
        "Link Agency, agence marketing digital à Casablanca. Branding, communication, SEO, paid media, social et événementiel pour marques au Maroc au Maroc.",
        "https://linkagency.ma/agence-marketing-digital-casablanca"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Agence Marketing Digital Casablanca", url: "https://linkagency.ma/agence-marketing-digital-casablanca" },
      ]),
      generateFAQSchema(faqs),
    ],
  };

  const expertises = [
    { title: "Stratégie & Branding", desc: "Plateformes de marque, identité visuelle, territoires d'expression pour les marques casablancaises.", link: "/branding" },
    { title: "Marketing Digital", desc: "SEO, paid media (Meta, Google, TikTok, LinkedIn), tracking et reporting ROI.", link: "/marketing-digital" },
    { title: "Social Media", desc: "Stratégie éditoriale FR/AR/Darija, community management et production native.", link: "/social-media" },
    { title: "Événementiel Corporate", desc: "Conception et production d'événements de marque B2B et B2C à Casablanca.", link: "/evenementiel" },
    { title: "Influence Marketing", desc: "Sourcing créateurs, briefs, pilotage et mesure des campagnes d'influence.", link: "/influence-marketing" },
    { title: "Conseil Stratégique", desc: "Cadrage stratégique, diagnostic concurrentiel et roadmap marketing structurante.", link: "/conseil-strategique" },
  ];

  const sectors = [
    "Banque & Assurance", "Retail & Distribution", "Immobilier",
    "Industrie & Énergie", "Services B2B", "Hôtellerie & Tourisme",
    "E-commerce", "Santé & Pharma", "Éducation & Formation",
  ];

  const handleContact = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite échanger avec votre agence marketing digital à Casablanca.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Agence Marketing Digital à Casablanca | Link Agency Maroc"
        description="Agence marketing digital à Casablanca : branding, communication, SEO, paid media, social media et événementiel corporate pour les marques au Maroc au Maroc."
        keywords="agence marketing digital casablanca, agence communication casablanca, agence branding casablanca, agence SEO casablanca, agence social media casablanca, agence événementielle casablanca"
        url="https://linkagency.ma/agence-marketing-digital-casablanca"
        type="service"
        structuredData={schema}
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour à l'accueil
          </Link>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <MapPin className="w-4 h-4" /> Casablanca, Maroc
          </div>

          <h1 className="text-5xl lg:text-6xl font-light mb-6 text-black leading-tight max-w-4xl">
            Agence Marketing Digital à Casablanca
          </h1>
          <h2 className="text-2xl font-light mb-8 text-gray-800 max-w-3xl">
            Branding, communication digitale et événementiel pour les marques au Maroc au cœur de la capitale économique
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10 font-light max-w-3xl">
            Link Agency accompagne depuis Casablanca les directions marketing et les dirigeants de marques marocaines ambitieuses. Notre rôle : structurer vos dispositifs de communication et d'acquisition avec rigueur, créativité et exigence business. Nous intervenons sur la stratégie de marque, le marketing digital, le social media, l'événementiel corporate et l'influence marketing.
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
          <div className="lg:col-span-2">
            <img
              src={casablancaHero}
              alt="Vue aérienne de la skyline de Casablanca au coucher du soleil avec la silhouette de la Mosquée Hassan II et le quartier d'affaires"
              width={1600}
              height={896}
              loading="eager"
              decoding="async"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-4 text-black">Nos expertises à Casablanca</h2>
          <p className="text-lg text-gray-600 font-light mb-12 max-w-3xl">
            Six domaines pilotés en intégration pour structurer votre présence et votre acquisition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertises.map((e) => (
              <Link key={e.title} to={e.link} className="group p-8 border border-gray-200 rounded-2xl hover:border-black hover:shadow-lg transition-all">
                <Sparkles className="w-6 h-6 text-gray-400 group-hover:text-black mb-4 transition-colors" />
                <h3 className="text-xl font-medium text-black mb-3">{e.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{e.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Link Agency */}
      <section className="py-20 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-black">Pourquoi choisir Link Agency à Casablanca</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Building2 className="w-6 h-6" />, title: "Ancrage local", desc: "Une équipe basée à Casablanca, qui connaît les codes du marché marocain, ses audiences et ses temps forts." },
              { icon: <Target className="w-6 h-6" />, title: "Pilotage business", desc: "Nous travaillons à partir de vos objectifs commerciaux, pas d'indicateurs de vanité. ROI, CPL et part de voix." },
              { icon: <TrendingUp className="w-6 h-6" />, title: "11 ans d'expérience", desc: "Plus de 200 dispositifs pilotés, dans des secteurs aussi variés que la finance, le retail, l'industrie et la santé." },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: "Approche sur-mesure", desc: "Pas de packs standardisés. Chaque mission est cadrée selon votre maturité, vos contraintes et votre ambition." },
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
          <h2 className="text-4xl font-light mb-4 text-black">Secteurs accompagnés à Casablanca</h2>
          <p className="text-lg text-gray-600 font-light mb-10 max-w-3xl">
            Nous travaillons avec des marques de tous secteurs économiques implantées dans le Grand Casablanca.
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
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-light mb-6 text-black">Le marketing digital à Casablanca en 2026</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Casablanca est le moteur économique du Maroc : capitale financière, hub portuaire, première place de l'industrie et du retail, la métropole concentre l'essentiel des budgets marketing nationaux. Pour les marques qui s'y implantent ou s'y développent, la maîtrise du marketing digital est devenue stratégique. Le marché casablancais est mature, exigeant et compétitif : les directions marketing y attendent une lecture fine des audiences, une exécution irréprochable et une discipline rigoureuse de pilotage.
          </p>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            En tant qu'agence marketing digital à Casablanca, nous intervenons à plusieurs niveaux. Stratégie d'abord : cadrage de la plateforme de marque, positionnement, architecture des messages. Activation ensuite : pilotage SEO, campagnes paid media multi-canal (Meta, Google, TikTok, LinkedIn), production éditoriale et community management quotidien. Mesure enfin : tracking, dashboards et arbitrages partagés avec les équipes internes. Ce triptyque — stratégie, activation, mesure — structure chacun de nos accompagnements.
          </p>
          <p className="text-gray-700 font-light leading-relaxed">
            Notre vocation n'est pas de multiplier les livrables tactiques mais de construire des dispositifs durables, alignés avec votre ambition business. Que vous soyez une marque retail cherchant à structurer son acquisition e-commerce, un acteur B2B souhaitant renforcer sa génération de leads ou une institution casablancaise en refonte de communication, notre équipe propose une approche sobre, exigeante et mesurable.
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
          <h2 className="text-4xl lg:text-5xl font-light mb-8">Discutons de votre projet à Casablanca</h2>
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

export default AgenceCasablanca;
