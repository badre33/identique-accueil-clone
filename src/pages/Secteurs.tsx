import { Link } from "react-router-dom";
import { Head } from 'vite-react-ssg';
import { Building2, Shield, ShoppingBag, Factory, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WHATSAPP_URL } from "@/config/contact";
import { trackWhatsAppClick } from "@/lib/tracking";

const sectors = [
  {
    slug: "banque",
    icon: Building2,
    name: "Banque & Finance",
    headline: "Marketing digital pour banques au Maroc",
    description:
      "Acquisition clients, contenus pédagogiques sur l'épargne et le crédit, campagnes Meta & Google Ads ciblées par segment, gestion des communautés et reporting de performance commerciale.",
    references: ["L'Bankalik", "Acteurs bancaires & paiement"],
    challenges: [
      "Conformité réglementaire et tonalité institutionnelle",
      "Acquisition qualifiée sur des produits d'épargne, crédit, banque digitale",
      "Pédagogie financière en français et en darija",
    ],
    keywords: "agence marketing banque maroc, marketing digital banque casablanca, communication banque",
  },
  {
    slug: "assurance",
    icon: Shield,
    name: "Assurance",
    headline: "Communication digitale pour compagnies d'assurance au Maroc",
    description:
      "Campagnes de génération de leads sur l'assurance auto, santé, vie et habitation. Production de contenus explicatifs, parcours de demande de devis optimisés, social media et partenariats influenceurs.",
    references: ["AXA Assurance Maroc"],
    challenges: [
      "Réduction du coût d'acquisition par devis",
      "Vulgarisation des garanties et exclusions",
      "Confiance et réassurance sur des décisions à fort engagement",
    ],
    keywords: "agence marketing assurance maroc, communication assurance casablanca",
  },
  {
    slug: "retail-ecommerce",
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    headline: "Performance digitale pour le retail et l'e-commerce au Maroc",
    description:
      "Stratégies omnicanales reliant magasins physiques et e-shop, social commerce, campagnes saisonnières, content créatif, influence locale et pilotage du ROAS.",
    references: ["Subway Maroc", "YouCan", "Edwin", "Marques retail nationales"],
    challenges: [
      "Activation des temps forts commerciaux (soldes, ramadan, rentrée)",
      "Drive-to-store + acquisition e-commerce coordonnées",
      "Contenus produits à fort volume et qualité maîtrisée",
    ],
    keywords: "agence marketing retail maroc, agence e-commerce casablanca",
  },
  {
    slug: "industrie-b2b",
    icon: Factory,
    name: "Industrie & B2B",
    headline: "Marketing B2B et industrie au Maroc",
    description:
      "Génération de leads qualifiés sur des cycles de vente longs, contenus d'expertise (livres blancs, études de cas), LinkedIn Ads, SEO technique et événementiel corporate.",
    references: ["OCB Maroc", "Acteurs industriels et services B2B"],
    challenges: [
      "Allongement du pipeline et nurturing des comptes cibles",
      "Démontrer l'expertise technique sans jargon",
      "Aligner marketing et force de vente terrain",
    ],
    keywords: "agence marketing b2b maroc, marketing industriel casablanca",
  },
];

const Secteurs = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Secteurs accompagnés par Link Agency au Maroc",
    description:
      "Link Agency accompagne les directions marketing des secteurs banque, assurance, retail, e-commerce, industrie et B2B au Maroc.",
    url: "https://linkagency.ma/secteurs",
    isPartOf: { "@type": "WebSite", url: "https://linkagency.ma" },
    hasPart: sectors.map((s) => ({
      "@type": "Service",
      name: s.headline,
      description: s.description,
      areaServed: { "@type": "Country", name: "Morocco" },
      provider: { "@type": "Organization", name: "Link Agency" },
    })),
  };

  return (
    <>
      <Head>
        <title>Secteurs · Banque, Assurance, Retail, Industrie | Link Agency Maroc</title>
        <meta
          name="description"
          content="Link Agency accompagne les directions marketing des banques, assurances, retail, e-commerce et industrie au Maroc. Stratégies sur-mesure par secteur."
        />
        <link rel="canonical" href="https://linkagency.ma/secteurs" />
        <meta property="og:title" content="Secteurs accompagnés · Link Agency Maroc" />
        <meta
          property="og:description"
          content="Cabinet conseil marketing pour banques, assurances, retail et industrie au Maroc. Casablanca · Marrakech."
        />
        <meta property="og:url" content="https://linkagency.ma/secteurs" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>

      <Header />

      <main className="pt-20 lg:pt-24 pb-16 bg-white">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-700 mb-4">
            Secteurs d'expertise
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] mb-6">
            Une expertise sectorielle{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
              au service de votre marché.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Nous accompagnons les directions marketing de quatre univers exigeants au Maroc.
            Chaque secteur impose ses codes, sa réglementation et ses parcours d'achat. Nos dispositifs
            sont conçus pour générer des leads qualifiés dans votre contexte spécifique.
          </p>
        </section>

        {/* Sectors grid */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-6 lg:gap-8">
          {sectors.map(({ icon: Icon, ...sector }) => (
            <article
              key={sector.slug}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 leading-tight">{sector.name}</h2>
                  <p className="text-sm text-purple-700 font-medium mt-1">{sector.headline}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{sector.description}</p>

              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Enjeux que nous adressons
                </p>
                <ul className="space-y-1.5">
                  {sector.challenges.map((c) => (
                    <li key={c} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-purple-600 mt-0.5">→</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between flex-wrap gap-3">
                <p className="text-xs text-gray-500">
                  <span className="font-semibold">Références :</span> {sector.references.join(" · ")}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`secteur_${sector.slug}`)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700 hover:text-purple-900"
                >
                  Échanger sur ce secteur <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* CTA bottom */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Votre secteur n'est pas listé ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nous accompagnons également des projets en santé, immobilier, hôtellerie et services
            professionnels. Échangeons sur votre contexte spécifique.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("secteurs_bottom")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl"
          >
            Discuter sur WhatsApp <ArrowRight className="w-5 h-5" />
          </a>
        </section>

        <Link
          to="/etudes-de-cas"
          className="block max-w-6xl mx-auto px-6 lg:px-8 mt-16 text-center text-sm text-gray-500 hover:text-purple-700"
        >
          Voir nos études de cas par secteur →
        </Link>
      </main>

      <Footer />
    </>
  );
};

export default Secteurs;
