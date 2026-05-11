import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { ArrowRight, TrendingUp, Users, Eye, Target } from "lucide-react";
import { Link } from "react-router-dom";

const cases = [
  {
    sector: "Banque & Néobanque",
    client: "L'Bankalik — Groupe Attijariwafa Bank",
    title: "Activation digitale d'une néobanque marocaine",
    challenge: "Imposer une néobanque sur un marché historiquement dominé par les acteurs traditionnels et engager une cible jeune urbaine.",
    approach: "Stratégie social media full-funnel, production de contenus natifs et activations digitales différenciantes alignées sur le ton de la marque.",
    kpis: [
      { icon: Users, label: "Communauté engagée", value: "+180%" },
      { icon: Eye, label: "Reach mensuel", value: "2.4M" },
      { icon: TrendingUp, label: "Engagement rate", value: "x3.5" },
    ],
    services: ["social-media", "content-digital"],
  },
  {
    sector: "Assurance",
    client: "AXA Assurance Maroc",
    title: "Relancer la proximité d'un leader de l'assurance",
    challenge: "Renforcer la perception de proximité d'une marque institutionnelle auprès des assurés et des prospects digitaux.",
    approach: "Production de contenus pédagogiques, ligne éditoriale recentrée sur l'usage, et déploiement multi-plateformes piloté par la donnée.",
    kpis: [
      { icon: Eye, label: "Vues vidéo cumulées", value: "8.2M" },
      { icon: TrendingUp, label: "Notoriété assistée", value: "+22 pts" },
      { icon: Target, label: "Coût par lead", value: "-38%" },
    ],
    services: ["content-digital", "marketing-digital"],
  },
  {
    sector: "Hôtellerie de luxe — Marrakech",
    client: "Groupe hôtelier 5★ (sous NDA)",
    title: "Repositionnement digital d'un palace marrakchi",
    challenge: "Reprendre la main sur la distribution directe face à la dépendance OTA et installer une signature de marque premium.",
    approach: "Refonte de l'identité digitale, production photo & vidéo signature, campagne paid media internationale ciblant les marchés émetteurs.",
    kpis: [
      { icon: TrendingUp, label: "Réservations directes", value: "+62%" },
      { icon: Target, label: "ADR moyen", value: "+18%" },
      { icon: Eye, label: "Reach paid premium", value: "4.1M" },
    ],
    services: ["branding", "marketing-digital", "content-digital"],
  },
  {
    sector: "Tech & SaaS",
    client: "YouCan",
    title: "Accompagner la croissance d'une plateforme e-commerce",
    challenge: "Soutenir la scale-up d'une plateforme SaaS dédiée aux marchands marocains avec un dispositif de contenu différenciant.",
    approach: "Studio de production de contenus marchands, activations communautaires et relais d'influence ciblés sur l'écosystème entrepreneurial.",
    kpis: [
      { icon: Users, label: "Nouveaux marchands activés", value: "+1 200" },
      { icon: TrendingUp, label: "Trafic organique", value: "+145%" },
      { icon: Eye, label: "Audience cumulée", value: "3.8M" },
    ],
    services: ["content-digital", "social-media", "influence-marketing"],
  },
  {
    sector: "Mode & Lifestyle",
    client: "Edwin",
    title: "Repositionnement d'une marque de mode iconique",
    challenge: "Réinscrire une marque héritage dans la conversation contemporaine sans diluer son ADN.",
    approach: "Direction artistique, brand book digital, activations événementielles et campagnes ambassadeurs sélectionnés avec rigueur.",
    kpis: [
      { icon: TrendingUp, label: "Sell-out collection capsule", value: "+47%" },
      { icon: Eye, label: "EMV campagne", value: "1.6M €" },
      { icon: Users, label: "Nouvelle audience -35 ans", value: "+58%" },
    ],
    services: ["branding", "influence-marketing", "evenementiel"],
  },
  {
    sector: "Personal Branding institutionnel",
    client: "Dirigeante politique — Scène internationale",
    title: "Construire une voix de leadership à fort enjeu",
    challenge: "Structurer une présence éditoriale crédible et différenciée pour une figure exposée à un environnement médiatique exigeant.",
    approach: "Architecture narrative, ligne éditoriale long-format, gestion de la prise de parole et veille réputationnelle continue.",
    kpis: [
      { icon: Eye, label: "Couverture média qualifiée", value: "+3x" },
      { icon: Users, label: "Audience LinkedIn", value: "+210%" },
      { icon: TrendingUp, label: "Sentiment positif", value: "92%" },
    ],
    services: ["personal-branding", "conseil-strategique"],
  },
];

const serviceLabels: Record<string, string> = {
  "branding": "Branding",
  "social-media": "Social Media",
  "content-digital": "Content Digital",
  "marketing-digital": "Marketing Digital",
  "influence-marketing": "Influence Marketing",
  "evenementiel": "Événementiel",
  "personal-branding": "Personal Branding",
  "conseil-strategique": "Conseil Stratégique",
};

const EtudesDeCas = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Études de cas — Link Agency Maroc",
    "description": "6 études de cas chiffrées de campagnes marketing digital, branding et événementiel menées au Maroc par Link Agency.",
    "url": "https://linkagency.ma/etudes-de-cas",
    "hasPart": cases.map((c) => ({
      "@type": "CreativeWork",
      "name": c.title,
      "about": c.sector,
      "creator": { "@type": "Organization", "name": "Link Agency" },
    })),
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Études de Cas — Résultats Marketing Digital Maroc | Link Agency"
        description="6 études de cas chiffrées : branding, social media, événementiel et influence au Maroc. Découvrez les résultats concrets obtenus pour AXA, L'Bankalik, YouCan, Edwin et plus."
        keywords="études de cas marketing digital maroc, résultats agence communication casablanca, case studies branding maroc, ROI marketing digital"
        url="https://linkagency.ma/etudes-de-cas"
        structuredData={structuredData}
      />
      <Header />

      {/* Hero */}
      <section className="bg-black text-white px-6 lg:px-16 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400 mb-6">
            Études de cas
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8 max-w-4xl">
            Des résultats mesurables, pour des marques exigeantes au Maroc.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl font-light">
            Sélection de campagnes menées pour des leaders de la banque, de l'assurance, de l'hôtellerie premium et de la tech. Chaque dispositif est conçu sur-mesure et piloté par la donnée.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto space-y-24">
          {cases.map((c, i) => (
            <article
              key={c.title}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 pb-20 border-b border-gray-100 last:border-0 last:pb-0"
            >
              <div className="lg:col-span-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-3">
                  Cas #{String(i + 1).padStart(2, "0")} · {c.sector}
                </p>
                <p className="text-sm font-medium text-black mb-6">{c.client}</p>
                <div className="flex flex-wrap gap-2">
                  {c.services.map((s) => (
                    <Link
                      key={s}
                      to={`/${s}`}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition"
                    >
                      {serviceLabels[s]}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-tight mb-6">
                  {c.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Enjeu</p>
                    <p className="text-base text-gray-700 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Approche</p>
                    <p className="text-base text-gray-700 leading-relaxed">{c.approach}</p>
                  </div>
                </div>

                <dl className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-gray-100">
                  {c.kpis.map((k) => {
                    const Icon = k.icon;
                    return (
                      <div key={k.label}>
                        <Icon className="w-5 h-5 text-gray-400 mb-3" strokeWidth={1.5} />
                        <dt className="text-xs uppercase tracking-wider text-gray-500 mb-1 leading-snug">
                          {k.label}
                        </dt>
                        <dd className="text-2xl md:text-3xl font-light text-black tracking-tight">
                          {k.value}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black mb-6 leading-tight">
            Votre projet mérite des résultats du même calibre.
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Échangeons sur vos enjeux. Nous bâtissons un dispositif sur-mesure et piloté par la performance.
          </p>
          <a
            href="https://wa.me/212699024526?text=Bonjour%2C%20j%27ai%20consult%C3%A9%20vos%20%C3%A9tudes%20de%20cas%20et%20j%27aimerais%20%C3%A9changer%20sur%20mon%20projet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 text-base font-medium hover:scale-105"
          >
            <span>Discuter de votre projet</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <FloatingContactWidget />
    </div>
  );
};

export default EtudesDeCas;
