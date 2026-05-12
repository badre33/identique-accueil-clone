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
    challenge: "Dispositif commercial automobile complet (Tokyo Days + End of Year Open Days 2025) : créa, scénographie, digital et influence à orchestrer pour maximiser leads qualifiés et brand penetration.",
    approach: "Direction stratégique globale, media buying, plan média, creative strategy, coordination des équipes créatives et opérationnelles.",
    kpis: [
      { icon: Target, label: "CPL", value: "4,10 DH" },
      { icon: TrendingUp, label: "CTR campagne", value: "3,10 %" },
      { icon: Eye, label: "CA vs N-1", value: "× 2,5" },
      { icon: Users, label: "Brand penetration", value: "× 3" },
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
    challenge: "Grand compte multicanal national : activations branding, trafic et performance, avec logique d'optimisation cross-plateforme.",
    approach: "Gestion de campagnes multi-leviers digitaux, ciblage et structure de campagnes, qualité du tracking, gestion des offres transactionnelles (trafic qualifié, conversion, arbitrage des investissements média), reportings de performance détaillés.",
    kpis: [
      { icon: Target, label: "Coût par résultat", value: "Optimisé" },
      { icon: TrendingUp, label: "Lecture cross-plateforme", value: "Unifiée" },
      { icon: Eye, label: "Infrastructure tracking", value: "Mise en place" },
    ],
    services: ["marketing-digital", "content-digital"],
  },
  {
    sector: "Industrie & Mining — OCP / OCP Africa",
    client: "OCP & OCP Africa",
    title: "Campagnes corporate — couverture nationale & continentale",
    challenge: "Acteur industriel de référence : déployer une couverture nationale (OCP) et continentale (OCP Africa) sur des dispositifs corporate complexes.",
    approach: "Trading Desk & Programmatique : structuration des campagnes, paramétrage média, audiences/formats/placements, reporting performance + branding.",
    kpis: [
      { icon: Eye, label: "Périmètre", value: "National + Afrique" },
      { icon: Target, label: "Levier", value: "Trading desk programmatique" },
      { icon: TrendingUp, label: "Pilotage", value: "Performance + branding" },
    ],
    services: ["marketing-digital", "branding"],
  },
  {
    sector: "Banque postale — Maroc",
    client: "Barid Al-Maghrib / Al Barid Bank",
    title: "Trading Desk acquisition & trafic qualifié pour la banque postale",
    challenge: "Secteur financier et bancaire marocain : campagnes d'acquisition et trafic qualifié dans un environnement directement comparable aux problématiques du crédit conso.",
    approach: "Pilotage des campagnes display et programmatique, structuration des campagnes, paramétrage média, arbitrage budgétaire, optimisation audiences/formats/placements, reporting CPL/CTR/taux de conversion.",
    kpis: [
      { icon: Target, label: "CPL & volume leads qualifiés", value: "Optimisation progressive" },
      { icon: Eye, label: "Tracking", value: "Lecture détaillée" },
      { icon: TrendingUp, label: "Identification leviers", value: "Optimisée" },
    ],
    services: ["marketing-digital", "content-digital"],
  },
  {
    sector: "Institutionnel — Aéroports du Maroc",
    client: "Aéroports du Maroc",
    title: "Trading Desk — campagnes reach & trafic qualifié",
    challenge: "Acteur institutionnel national : générer reach et trafic qualifié sur les services aéroportuaires.",
    approach: "Trading Desk programmatique, structuration des campagnes, ciblages géolocalisés, arbitrages média et reporting performance.",
    kpis: [
      { icon: Eye, label: "Périmètre", value: "Reach national" },
      { icon: Target, label: "Levier", value: "Programmatique" },
      { icon: Users, label: "Référence pilotée", value: "Pôle Trading Desk Link Agency" },
    ],
    services: ["marketing-digital", "content-digital"],
  },
  {
    sector: "Pharma & Santé — Maroc",
    client: "Pharma 5",
    title: "Stratégies Paid Search & Social pour un laboratoire pharmaceutique",
    challenge: "Laboratoire pharmaceutique marocain : déploiement de stratégies d'acquisition payantes en environnement réglementé.",
    approach: "Stratégies Google Ads Search & Meta Ads structurées, intégration HubSpot, déployées par le pôle Paid Search & Social Ads de Link Agency.",
    kpis: [
      { icon: Target, label: "Stack", value: "Google Ads · Meta Ads · HubSpot" },
      { icon: TrendingUp, label: "Référence pilotée", value: "Pôle Paid Acquisition" },
      { icon: Eye, label: "Cadre", value: "Compte accompagné" },
    ],
    services: ["marketing-digital", "content-digital"],
  },
  {
    sector: "Industrie agroalimentaire — Mutandis",
    client: "Mutandis Group",
    title: "Stratégies Paid Search & Social — groupe industriel coté",
    challenge: "Groupe industriel marocain coté, portefeuille multi-marques grand public.",
    approach: "Déploiement de stratégies Google Ads Search et Meta Ads par marque, dans la continuité du pôle Paid Acquisition de Link Agency (références : Honda Motor, Mutandis Group, Aradie Capital, Pharma 5, Aiguebelle).",
    kpis: [
      { icon: Target, label: "Périmètre", value: "Portefeuille multi-marques" },
      { icon: TrendingUp, label: "Levier", value: "Google Ads · Meta Ads" },
      { icon: Eye, label: "Référence pilotée", value: "Pôle Paid Acquisition" },
    ],
    services: ["marketing-digital", "branding"],
  },
  {
    sector: "Agroalimentaire — Aiguebelle",
    client: "Aiguebelle",
    title: "Stratégies Paid Search & Social pour une marque héritage",
    challenge: "Marque agroalimentaire historique : activation digitale Search + Social.",
    approach: "Stratégies Google Ads Search et Meta Ads dans la continuité du pôle Paid Acquisition de Link Agency.",
    kpis: [
      { icon: Target, label: "Stack", value: "Google Ads · Meta Ads" },
      { icon: Eye, label: "Référence pilotée", value: "Pôle Paid Acquisition" },
      { icon: Users, label: "Cadre", value: "Compte accompagné" },
    ],
    services: ["marketing-digital", "social-media", "branding"],
  },
  {
    sector: "Finance — Maroc",
    client: "Wafasalaf",
    title: "Direction artistique, social media & acquisition payante (crédit conso)",
    challenge: "Leader marocain du crédit à la consommation : renforcer cohérence visuelle, régularité éditoriale et acquisition payante (CPL/CPA crédit conso MA).",
    approach: "Direction artistique, motion design, community management quotidien (pôle DA & CM), couplés à l'acquisition Paid Social (pôle Paid Acquisition).",
    kpis: [
      { icon: Target, label: "Périmètre", value: "DA + CM + Paid Social" },
      { icon: Eye, label: "Connaissance marché", value: "CPL / CPA crédit conso MA" },
      { icon: Users, label: "Référence pilotée", value: "Pôles DA/CM & Paid" },
    ],
    services: ["branding", "social-media", "content-digital"],
  },
  {
    sector: "Assurance — Maroc",
    client: "RMA Assurance",
    title: "Direction artistique & community management — assurance",
    challenge: "Acteur majeur de l'assurance marocaine : maintenir la cohérence de marque et la régularité éditoriale en environnement régulé.",
    approach: "Direction artistique, social media et community management portés par le pôle DA & CM de Link Agency (références secteur : Attijari Wafabank, Wafasalaf, AXA, RMA, Fondation Al Mada, Orange, Ford).",
    kpis: [
      { icon: Target, label: "Périmètre", value: "DA · Social · CM" },
      { icon: Eye, label: "Bilingue", value: "FR / AR" },
      { icon: Users, label: "Référence pilotée", value: "Pôle DA & CM" },
    ],
    services: ["content-digital", "social-media", "branding"],
  },
  {
    sector: "Institutionnel — Fondation Al Mada / AMDIE / CDG",
    client: "Fondation Al Mada · AMDIE · CDG",
    title: "Stratégie éditoriale & copywriting corporate institutionnel",
    challenge: "Institutions de référence (fondation, agence d'investissement, caisse de dépôt) : structurer la voix éditoriale en environnement à fort enjeu réputationnel.",
    approach: "Stratégies éditoriales et copywriting corporate portés par le pôle Stratégie éditoriale & Brand Content de Link Agency (références : AXA Assurance Maroc, AMDIE, CDG, Fondation Al Mada).",
    kpis: [
      { icon: Target, label: "Périmètre", value: "Editorial corporate" },
      { icon: Eye, label: "Cadre", value: "Institutionnel régulé" },
      { icon: Users, label: "Référence pilotée", value: "Pôle Stratégie éditoriale" },
    ],
    services: ["content-digital", "branding", "conseil-strategique"],
  },
  {
    sector: "Grands comptes financiers — Maroc",
    client: "Allianz · Wafa Assurance · Arab Bank · Dekra · Safran",
    title: "Portefeuille grands comptes — stratégie marketing & growth (Nexia)",
    challenge: "Pilotage du positionnement digital et de la stratégie de marque d'un portefeuille de grands comptes financiers, industriels et certificateurs en environnement régulé (BAM, ACAPS, contraintes fiduciaires).",
    approach: "Mission de Stratégie Marketing & Growth menée sur les standards Nexia International — pilotage d'un portefeuille de 10+ grands comptes du secteur (référence directe pilotée par Badreddine Harkaoui, fondateur Link Agency).",
    kpis: [
      { icon: Target, label: "Portefeuille", value: "10+ grands comptes" },
      { icon: Eye, label: "Secteurs", value: "Banque · Assurance · Industrie" },
      { icon: TrendingUp, label: "Cadre", value: "BAM · ACAPS · loi 09-08" },
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
    "description": "21 études de cas de campagnes marketing digital, branding, social media et événementiel menées au Maroc et à l'international par Link Agency : Subway, Honda, Orange, OCP, Pharma 5, AXA, Wafasalaf, L'Bankalik, Brainlyne et plus.",
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
        description="21 études de cas : Subway, SGTM, Honda Tokyo Days, L'Bankalik, AXA, Orange, OCP, Pharma 5, Wafasalaf, RMA, Aiguebelle, Mutandis, Aéroports du Maroc, Brainlyne et plus."
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
