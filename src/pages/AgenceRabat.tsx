import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Landmark, ShieldCheck, Globe, CheckCircle2, Phone, Mail, Sparkles, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { SEOHead } from "@/components/SEOHead";
import rabatHero from "@/assets/rabat-hero.webp";
import {
  generateServiceSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
} from "@/utils/structuredData";

const AgenceRabat = () => {
  const faqs = [
    {
      question: "Pourquoi choisir une agence de communication à Rabat ?",
      answer:
        "Rabat concentre les institutions publiques, les ambassades, les ONG internationales et les sièges d'organismes financiers. Une agence comme Link Agency, qui maîtrise les codes de la communication institutionnelle et gouvernementale, permet d'aligner votre prise de parole avec les exigences protocolaires et l'autorité attendue à Rabat.",
    },
    {
      question: "Quels types d'organisations accompagnez-vous à Rabat ?",
      answer:
        "Institutions publiques, ministères, organismes étatiques, ONG internationales, ambassades, universités, fondations, banques et assurances. Nous travaillons aussi bien sur des dispositifs corporate que sur des campagnes de sensibilisation grand public.",
    },
    {
      question: "Travaillez-vous en français, arabe et anglais ?",
      answer:
        "Oui. Nos dispositifs à Rabat sont systématiquement multilingues : français, arabe (classique et darija), anglais. Cette polyvalence est essentielle pour les institutions publiques et les organisations internationales basées dans la capitale.",
    },
    {
      question: "Pouvez-vous gérer des appels d'offres publics ?",
      answer:
        "Oui. Nous avons l'expérience de la réponse à des appels d'offres publics et institutionnels. Nous accompagnons nos clients sur le cadrage des cahiers des charges, la production des livrables et le respect des contraintes administratives.",
    },
    {
      question: "Quels sont vos délais d'intervention à Rabat ?",
      answer:
        "Pour un cadrage stratégique institutionnel, comptez 3 à 6 semaines. Pour une activation de campagne, 4 à 10 semaines selon le périmètre. Nos équipes peuvent se déplacer à Rabat sous 48h pour les réunions de cadrage.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLocalBusinessSchema("rabat"),
      generateServiceSchema(
        "Agence Communication Institutionnelle à Rabat",
        "Agence de communication institutionnelle à Rabat : stratégie, branding, communication digitale et campagnes pour institutions publiques, ONG et organismes internationaux au Maroc.",
        "Sur devis"
      ),
      generateWebPageSchema(
        "Agence Communication Institutionnelle à Rabat | Link Agency Maroc",
        "Link Agency, agence de communication institutionnelle à Rabat. Stratégie, branding et campagnes pour institutions, ONG et organismes internationaux au Maroc.",
        "https://linkagency.ma/agence-communication-rabat"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Agence Communication Rabat", url: "https://linkagency.ma/agence-communication-rabat" },
      ]),
      generateFAQSchema(faqs),
    ],
  };

  const expertises = [
    { title: "Communication Institutionnelle", desc: "Plateformes de marque, messages corporate et chartes éditoriales pour institutions publiques et privées.", link: "/branding" },
    { title: "Conseil Stratégique", desc: "Cadrage stratégique, diagnostic de positionnement et roadmap pour organismes établis à Rabat.", link: "/conseil-strategique" },
    { title: "Campagnes de Sensibilisation", desc: "Conception et production de campagnes grand public pour ministères, ONG et organismes publics.", link: "/marketing-digital" },
    { title: "Social Media Institutionnel", desc: "Stratégie éditoriale FR/AR/EN, community management et veille e-réputation pour acteurs institutionnels.", link: "/social-media" },
    { title: "Production Éditoriale", desc: "Rapports annuels, brochures, contenus institutionnels et productions digitales multilingues.", link: "/content-digital" },
    { title: "Événementiel Institutionnel", desc: "Conférences, séminaires, conventions et événements protocolaires sur Rabat.", link: "/evenementiel" },
  ];

  const sectors = [
    "Institutions Publiques", "Ministères & Administrations", "ONG Internationales",
    "Ambassades & Consulats", "Banques & Assurances", "Universités & Recherche",
    "Organismes Internationaux", "Fondations", "Secteur de la Santé Publique",
  ];

  const handleContact = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite échanger avec votre agence de communication à Rabat.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Agence Communication Institutionnelle à Rabat | Link Agency Maroc"
        description="Agence de communication institutionnelle à Rabat : stratégie, branding et campagnes pour institutions publiques, ONG et organismes internationaux au Maroc."
        keywords="agence communication rabat, agence institutionnelle rabat, agence marketing digital rabat, agence branding rabat, agence ONG rabat, agence communication publique maroc"
        url="https://linkagency.ma/agence-communication-rabat"
        type="service"
        structuredData={schema}
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour à l'accueil
          </Link>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <MapPin className="w-4 h-4" /> Rabat, Maroc
          </div>

          <h1 className="text-5xl lg:text-6xl font-light mb-6 text-black leading-tight max-w-4xl">
            Agence Communication Institutionnelle à Rabat
          </h1>
          <h2 className="text-2xl font-light mb-8 text-gray-800 max-w-3xl">
            Stratégie, branding et campagnes pour les institutions, ONG et organismes internationaux de la capitale
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10 font-light max-w-3xl">
            Link Agency accompagne à Rabat les institutions publiques, ONG, organismes internationaux et acteurs privés dans la structuration de leur communication. Notre approche allie rigueur stratégique, sensibilité aux codes institutionnels et exécution multilingue (FR/AR/EN).
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
              src={rabatHero}
              alt="Vue de la Tour Hassan et du Mausolée Mohammed V à Rabat au lever du jour, capitale institutionnelle du Maroc avec le fleuve Bouregreg"
              width={1600}
              height={896}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-4 text-black">Nos expertises à Rabat</h2>
          <p className="text-lg text-gray-600 font-light mb-12 max-w-3xl">
            Six domaines pensés pour les enjeux institutionnels et la communication d'autorité.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertises.map((e) => (
              <Link key={e.title} to={e.link} className="group p-8 border border-gray-200 rounded-2xl hover:border-black hover:shadow-lg transition-all">
                <Sparkles className="w-6 h-6 text-blue-600 mb-4" />
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
          <h2 className="text-4xl font-light mb-12 text-black">Pourquoi choisir Link Agency à Rabat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Landmark className="w-6 h-6" />, title: "Codes institutionnels maîtrisés", desc: "Compréhension fine des contraintes protocolaires, administratives et de l'autorité attendue par les institutions." },
              { icon: <Globe className="w-6 h-6" />, title: "Multilingue FR/AR/EN", desc: "Production éditoriale et campagnes en français, arabe (classique et darija) et anglais, indispensable à Rabat." },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Confidentialité & rigueur", desc: "Process structurés, NDA systématiques, conformité aux exigences de discrétion des organismes publics et privés." },
              { icon: <FileText className="w-6 h-6" />, title: "Expérience appels d'offres", desc: "Habitude des cahiers des charges institutionnels, des marchés publics et des contraintes documentaires." },
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
          <h2 className="text-4xl font-light mb-4 text-black">Secteurs accompagnés à Rabat</h2>
          <p className="text-lg text-gray-600 font-light mb-10 max-w-3xl">
            Nous intervenons auprès des principales catégories d'acteurs institutionnels et internationaux de la capitale.
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
          <h2 className="text-3xl font-light mb-6 text-black">La communication institutionnelle à Rabat en 2026</h2>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Rabat est la capitale politique, administrative et diplomatique du Maroc. La ville concentre les ministères, les institutions étatiques, les ambassades, les sièges d'ONG internationales et un nombre croissant d'organismes financiers et académiques. Pour les acteurs qui s'y installent ou s'y développent, la communication ne peut pas être traitée comme un exercice marketing classique : elle relève d'un registre institutionnel, où l'autorité, la rigueur et le respect des codes priment sur l'effet créatif.
          </p>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            En tant qu'agence de communication à Rabat, Link Agency conçoit des dispositifs adaptés à cette exigence. Nous travaillons sur la structuration des plateformes de marque institutionnelles, la rédaction des messages corporate, la production éditoriale multilingue (rapports annuels, brochures institutionnelles, contenus digitaux) et l'animation des présences sociales pour les organismes publics et privés. Nos campagnes de sensibilisation ciblent à la fois les audiences nationales et les publics internationaux représentés dans la capitale.
          </p>
          <p className="text-gray-700 font-light leading-relaxed">
            Notre approche repose sur trois principes : rigueur méthodologique, sensibilité aux codes protocolaires et exécution multilingue. Que vous soyez un ministère en refonte de communication, une ONG internationale en lancement de programme, une université en stratégie de visibilité ou un organisme financier en repositionnement, notre équipe vous accompagne avec discrétion et exigence.
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
          <h2 className="text-4xl lg:text-5xl font-light mb-8">Discutons de votre projet à Rabat</h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Premier échange gratuit pour cadrer vos enjeux institutionnels et structurer un dispositif sur mesure.
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

export default AgenceRabat;