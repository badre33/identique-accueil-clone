import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { ArrowRight, TrendingUp, Users, Eye, Target } from "lucide-react";
import { Link } from "react-router-dom";

const cases = [
  {
    sector: "Restauration / QSR",
    client: "Subway Maroc",
    title: "Activation social media nationale d'une enseigne QSR",
    challenge: "Faire émerger Subway Maroc dans un univers concurrentiel saturé et transformer le canal social en moteur de génération de leads pour les nouvelles ouvertures.",
    approach: "Direction artistique, ligne éditoriale native, production hebdomadaire, community management proactif et activations DM-to-conversion.",
    kpis: [
      { icon: Users, label: "Followers organiques", value: "+8 500" },
      { icon: Target, label: "Leads qualifiés générés", value: "150+" },
      { icon: TrendingUp, label: "Réponse DM < 2h", value: "97%" },
    ],
    services: ["social-media", "content-digital", "branding"],
  },
  {
    sector: "Immobilier — Casablanca",
    client: "SGTM Immobilier",
    title: "Multiplier par 3,5 l'engagement social d'un acteur immobilier établi",
    challenge: "Réinscrire un acteur historique de l'immobilier dans la conversation digitale et renforcer sa désirabilité auprès des acquéreurs urbains.",
    approach: "Refonte de la ligne éditoriale, direction artistique premium, formats verticaux signature et calibrage paid social ciblé.",
    kpis: [
      { icon: TrendingUp, label: "Taux d'engagement", value: "2,1% → 7,4%" },
      { icon: Eye, label: "Reach mensuel qualifié", value: "x3,5" },
      { icon: Users, label: "Communauté active", value: "+62%" },
    ],
    services: ["social-media", "branding", "content-digital"],
  },
  {
    sector: "Automobile — Maroc",
    client: "Honda Maroc — Campagne Tokyo Days 2025",
    title: "Lead generation automobile : un CPL plancher sur le marché marocain",
    challenge: "Générer des leads qualifiés à très haut niveau de conversion sur un événement constructeur national, tout en maximisant la couverture social media.",
    approach: "Trading desk programmatique (DV360, YouTube pre-roll), Meta Ads structuré full-funnel, tracking GTM/CM360, A/B testing créatifs et retargeting cross-canal.",
    kpis: [
      { icon: Target, label: "Coût par lead", value: "4,10 DH" },
      { icon: TrendingUp, label: "CTR campagne", value: "3,10%" },
      { icon: Eye, label: "Couverture nationale", value: "Multi-canal" },
    ],
    services: ["marketing-digital", "content-digital"],
  },
  {
    sector: "Tech B2B — International",
    client: "Brainlyne (US)",
    title: "Croissance organique soutenue d'un acteur B2B US",
    challenge: "Accélérer la croissance du trafic organique et structurer une présence éditoriale crédible sur un marché B2B compétitif.",
    approach: "Stratégie de contenu pilier, optimisation SEO sémantique, copywriting brand-led et corporate film pour l'autorité éditoriale.",
    kpis: [
      { icon: TrendingUp, label: "Croissance organique", value: "+60%" },
      { icon: Target, label: "Pipeline éditorial", value: "Industrialisé" },
      { icon: Users, label: "Audience qualifiée", value: "Internationale" },
    ],
    services: ["content-digital", "branding", "marketing-digital"],
  },
  {
    sector: "Banque & Néobanque",
    client: "L'Bankalik — Groupe Attijariwafa Bank",
    title: "Activation digitale d'une néobanque marocaine",
    challenge: "Imposer une néobanque sur un marché historiquement dominé par les acteurs traditionnels et engager une cible jeune urbaine.",
    approach: "Stratégie social media full-funnel, production de contenus natifs et activations digitales différenciantes alignées sur le ton de la marque.",
    kpis: [
      { icon: Users, label: "Croissance communauté", value: "+85%" },
      { icon: Target, label: "Leads qualifiés / mois", value: "+340" },
      { icon: TrendingUp, label: "Taux d'engagement", value: "x2.4" },
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
      { icon: Target, label: "Coût par lead qualifié", value: "-42%" },
      { icon: Eye, label: "Vues vidéo cumulées", value: "1.8M" },
      { icon: TrendingUp, label: "Demandes de devis", value: "+68%" },
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
      { icon: TrendingUp, label: "Réservations directes", value: "+47%" },
      { icon: Target, label: "Coût d'acquisition", value: "-31%" },
      { icon: Users, label: "Leads premium qualifiés", value: "+220/mois" },
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
      { icon: Users, label: "Nouveaux marchands inscrits", value: "+640" },
      { icon: TrendingUp, label: "Trafic organique", value: "+92%" },
      { icon: Target, label: "Coût par inscription", value: "-38%" },
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
      { icon: TrendingUp, label: "Ventes collection capsule", value: "+34%" },
      { icon: Target, label: "Trafic boutique qualifié", value: "+72%" },
      { icon: Users, label: "Audience -35 ans", value: "+45%" },
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
      { icon: Eye, label: "Couverture média qualifiée", value: "x2.5" },
      { icon: Users, label: "Audience LinkedIn", value: "+128%" },
      { icon: TrendingUp, label: "Sentiment positif", value: "89%" },
    ],
    services: ["personal-branding", "conseil-strategique"],
  },
  {
    sector: "Télécoms — Maroc",
    client: "Orange Maroc",
    title: "Pilotage cross-plateforme performance & branding",
    challenge: "Coordonner un dispositif media unifié performance et branding sur l'ensemble des leviers paid pour un opérateur télécom national.",
    approach: "Trading desk programmatique (DV360, CM360), Meta Ads et Google Ads en orchestration full-funnel, tracking cross-canal et reporting consolidé.",
    kpis: [
      { icon: TrendingUp, label: "Couverture", value: "Nationale" },
      { icon: Target, label: "Levier paid", value: "Cross-plateforme" },
      { icon: Eye, label: "Pilotage", value: "Unifié" },
    ],
    services: ["marketing-digital", "content-digital"],
  },
  {
    sector: "Industrie & Mining — OCP / OCP Africa",
    client: "OCP & OCP Africa",
    title: "Campagnes corporate de couverture nationale",
    challenge: "Déployer un dispositif de communication corporate à l'échelle nationale et continentale pour un acteur industriel de référence.",
    approach: "Stratégie media programmatique, production de contenus institutionnels et pilotage cross-plateforme pour la couverture grand public et décideurs.",
    kpis: [
      { icon: Eye, label: "Couverture", value: "Nationale + Afrique" },
      { icon: Target, label: "Format", value: "Corporate full-funnel" },
      { icon: TrendingUp, label: "Pilotage", value: "Programmatique" },
    ],
    services: ["marketing-digital", "branding"],
  },
  {
    sector: "Banque postale — Maroc",
    client: "Barid Al-Maghrib / Al Barid Bank",
    title: "Lead generation et optimisation funnel pour la banque postale",
    challenge: "Optimiser le coût par lead et le taux de conversion sur un dispositif d'acquisition multi-produits financiers grand public.",
    approach: "Setup tracking server-side, structuration des campagnes Search & Social en full-funnel, A/B testing créatifs et optimisation continue CPL/CTR.",
    kpis: [
      { icon: Target, label: "CPL", value: "Optimisé" },
      { icon: TrendingUp, label: "CTR & conversion", value: "En hausse" },
      { icon: Eye, label: "Tracking", value: "Server-side" },
    ],
    services: ["marketing-digital", "content-digital"],
  },
  {
    sector: "Institutionnel — Aéroports du Maroc",
    client: "Aéroports du Maroc",
    title: "Reach et trafic qualifié pour un acteur institutionnel",
    challenge: "Générer un reach maîtrisé et un trafic qualifié sur les services aéroportuaires nationaux dans une logique de notoriété et d'usage.",
    approach: "Pilotage cross-plateforme (Meta, Google, programmatique), formats display et vidéo, ciblages géolocalisés sur les bassins voyageurs.",
    kpis: [
      { icon: Eye, label: "Reach", value: "National qualifié" },
      { icon: Users, label: "Trafic", value: "Voyageurs ciblés" },
      { icon: Target, label: "Mix", value: "Display + Vidéo" },
    ],
    services: ["marketing-digital", "content-digital"],
  },
  {
    sector: "Pharma & Santé — Maroc",
    client: "Pharma 5",
    title: "Stratégie multicanal B2B & B2C pour un laboratoire pharmaceutique",
    challenge: "Articuler une stratégie d'acquisition à la fois B2B (professionnels de santé) et B2C (grand public) sur un secteur réglementé.",
    approach: "Google Ads et Meta Ads structurés par audience, copywriting conformité, CRM HubSpot et nurturing par segment.",
    kpis: [
      { icon: Target, label: "Audiences", value: "B2B + B2C" },
      { icon: TrendingUp, label: "Levier", value: "Search + Social" },
      { icon: Users, label: "CRM", value: "HubSpot intégré" },
    ],
    services: ["marketing-digital", "content-digital"],
  },
  {
    sector: "Industrie agroalimentaire — Mutandis",
    client: "Mutandis Group",
    title: "Activation digitale d'un groupe industriel diversifié",
    challenge: "Déployer une stratégie digitale cohérente sur un portefeuille de marques grand public d'un groupe industriel coté.",
    approach: "Stratégies Google Ads et Meta Ads adaptées par marque, brief créatif unifié et reporting consolidé groupe.",
    kpis: [
      { icon: Target, label: "Périmètre", value: "Multi-marques" },
      { icon: TrendingUp, label: "Levier", value: "Paid full-funnel" },
      { icon: Eye, label: "Reporting", value: "Consolidé groupe" },
    ],
    services: ["marketing-digital", "branding"],
  },
  {
    sector: "Agroalimentaire — Aiguebelle",
    client: "Aiguebelle",
    title: "Activation de marque sur un acteur historique de l'agroalimentaire",
    challenge: "Réinscrire une marque héritage dans la conversation digitale tout en générant des performances mesurables.",
    approach: "Campagnes performance Google Ads et Meta Ads, contenus natifs et activations social media ciblées.",
    kpis: [
      { icon: TrendingUp, label: "Performance", value: "Mesurable" },
      { icon: Eye, label: "Notoriété", value: "Réactivée" },
      { icon: Users, label: "Communauté", value: "Engagée" },
    ],
    services: ["marketing-digital", "social-media", "branding"],
  },
  {
    sector: "Finance — Maroc",
    client: "Wafasalaf",
    title: "Direction artistique et social media pour un leader du crédit",
    challenge: "Renforcer la cohérence visuelle et la régularité éditoriale d'un acteur leader du crédit à la consommation au Maroc.",
    approach: "Direction artistique pilier, motion design produit, ligne éditoriale recentrée sur l'usage et community management quotidien.",
    kpis: [
      { icon: TrendingUp, label: "Cohérence visuelle", value: "Pilier établi" },
      { icon: Users, label: "Community", value: "Géré au quotidien" },
      { icon: Eye, label: "Production", value: "Motion + Social" },
    ],
    services: ["branding", "social-media", "content-digital"],
  },
  {
    sector: "Assurance — Maroc",
    client: "RMA Assurance",
    title: "Production de contenus institutionnels et campagnes de renouvellement",
    challenge: "Maintenir une présence digitale institutionnelle régulière et soutenir les temps forts de renouvellement par des dispositifs ciblés.",
    approach: "Production de Reels de sensibilisation, rédaction bilingue FR/AR, campagnes saisonnières de renouvellement et gestion de l'e-réputation.",
    kpis: [
      { icon: Eye, label: "Présence", value: "Institutionnelle régulière" },
      { icon: Target, label: "Renouvellement", value: "Campagnes ciblées" },
      { icon: Users, label: "Bilingue", value: "FR / AR" },
    ],
    services: ["content-digital", "social-media", "branding"],
  },
  {
    sector: "Institutionnel — Fondation Al Mada / AMDIE / CDG",
    client: "Fondation Al Mada · AMDIE · CDG",
    title: "Stratégies éditoriales corporate pour les grands acteurs institutionnels",
    challenge: "Structurer la voix éditoriale d'institutions de référence dans des environnements à fort enjeu réputationnel.",
    approach: "Stratégies éditoriales pilier, copywriting corporate, formats long-form et corporate film pour la légitimité institutionnelle.",
    kpis: [
      { icon: Eye, label: "Périmètre", value: "Institutionnel" },
      { icon: Target, label: "Format", value: "Long-form + Film" },
      { icon: TrendingUp, label: "Voix éditoriale", value: "Structurée" },
    ],
    services: ["content-digital", "branding", "conseil-strategique"],
  },
  {
    sector: "Grands comptes financiers — Maroc",
    client: "Saham · Allianz · Wafa Assurance · Arab Bank · Dekra · Safran",
    title: "Portefeuille grands comptes accompagné en stratégie & branding",
    challenge: "Piloter le positionnement digital et la stratégie de marque de grands comptes financiers, industriels et certificateurs dans un cadre conforme aux contraintes BAM.",
    approach: "Refonte du discours de marque, structuration de partenariats stratégiques et lancement de solutions digitales internes — référence pilotée par Badreddine Harkaoui (fondateur Link Agency, ex-Nexia Morocco).",
    kpis: [
      { icon: Target, label: "Portefeuille", value: "10+ grands comptes" },
      { icon: Eye, label: "Secteur", value: "Finance · Industrie" },
      { icon: TrendingUp, label: "Conformité", value: "Cadre BAM" },
    ],
    services: ["branding", "conseil-strategique"],
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
    "description": "10 études de cas chiffrées de campagnes marketing digital, branding, social media et événementiel menées au Maroc et à l'international par Link Agency.",
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
        description="10 études de cas chiffrées : Subway Maroc, SGTM Immobilier, Honda Maroc (Tokyo Days), L'Bankalik, AXA, YouCan, Edwin et plus. Résultats mesurables au Maroc."
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
