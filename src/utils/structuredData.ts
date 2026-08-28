// Données structurées Schema.org. Ne publier que des faits vérifiables.

const organizationRef = {
  "@type": "Organization",
  "@id": "https://linkagency.ma/#organization",
  name: "Link Agency",
  legalName: "HARKA STRATEGY CONSULTING SARLAU",
  url: "https://linkagency.ma",
};

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  ...organizationRef,
  alternateName: "Link Agency Maroc",
  slogan: "Stratégie. Contenu. Performance.",
  description: "Direction marketing externalisée et direction de marque pour entreprises ambitieuses au Maroc. Link Agency pilote stratégie, branding, contenu et performance avec une direction senior directement impliquée.",
  logo: "https://linkagency.ma/assets/brand/link-agency-logo.png",
  image: "https://linkagency.ma/og-default.jpg",
  foundingDate: "2015",
  founder: {
    "@type": "Person",
    "@id": "https://linkagency.ma/#badre-harkaoui",
    name: "Badreddine Harkaoui",
    alternateName: "Badre Harkaoui",
    jobTitle: "Fondateur et directeur conseil",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+212699024526",
    email: "bharkaoui@linkagency.ma",
    contactType: "sales",
    availableLanguage: ["fr", "ar", "en"],
    areaServed: ["MA", "FR"],
  },
  areaServed: [
    { "@type": "Country", name: "Morocco" },
    { "@type": "Country", name: "France" },
  ],
  sameAs: [
    "https://www.instagram.com/linkagency.ma",
    "https://www.linkedin.com/company/107734353/",
    "https://www.facebook.com/linkagency.ma",
  ],
  knowsAbout: [
    "Direction marketing externalisée",
    "Stratégie de marque",
    "Branding",
    "Communication corporate",
    "Social media",
    "Production de contenu",
    "Marketing digital",
    "SEO",
    "Influence marketing",
    "Événementiel corporate",
  ],
  knowsLanguage: ["fr", "ar", "en"],
  makesOffer: [
    "Direction marketing externalisée",
    "Branding et identité de marque",
    "Conseil stratégique",
    "Social media et contenu",
    "Marketing digital et analytics",
    "Influence marketing",
    "Événementiel corporate",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
});

type LocalCity = "casablanca" | "marrakech" | "rabat" | "agadir" | "tanger";

const CITY_DATA: Record<LocalCity, { locality: string; url: string }> = {
  casablanca: { locality: "Casablanca", url: "https://linkagency.ma/agence-marketing-digital-casablanca" },
  marrakech: { locality: "Marrakech", url: "https://linkagency.ma/agence-marketing-digital-marrakech" },
  rabat: { locality: "Rabat", url: "https://linkagency.ma/agence-communication-rabat" },
  agadir: { locality: "Agadir", url: "https://linkagency.ma/creation-site-web-agadir" },
  tanger: { locality: "Tanger", url: "https://linkagency.ma/creation-site-web-tanger" },
};

// Les pages villes décrivent une zone d'intervention, pas un faux bureau local.
export const generateLocalBusinessSchema = (city: LocalCity = "casablanca") => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `https://linkagency.ma/#service-${city}`,
  name: `Link Agency, interventions à ${CITY_DATA[city].locality}`,
  url: CITY_DATA[city].url,
  image: "https://linkagency.ma/og-default.jpg",
  telephone: "+212699024526",
  email: "bharkaoui@linkagency.ma",
  parentOrganization: organizationRef,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  areaServed: { "@type": "City", name: CITY_DATA[city].locality },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Direction de marque et marketing",
    itemListElement: [
      "Direction marketing externalisée",
      "Branding",
      "Communication et contenu",
      "Marketing digital",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
});

export const generateServiceSchema = (serviceName: string, description: string, _price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description,
  provider: organizationRef,
  areaServed: { "@type": "Country", name: "Morocco" },
  serviceType: serviceName,
  category: "Marketing and brand consulting",
});

export const generateWebPageSchema = (title: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url,
  inLanguage: "fr-MA",
  isPartOf: { "@type": "WebSite", name: "Link Agency", url: "https://linkagency.ma" },
  about: organizationRef,
  primaryImageOfPage: { "@type": "ImageObject", url: "https://linkagency.ma/og-default.jpg" },
});

export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

// N'utiliser ce schéma qu'avec des avis réels, autorisés et vérifiables.
export const generateReviewSchema = (reviews: Array<{ author: string; rating: number; text: string; date: string }>) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Link Agency",
  review: reviews.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: 5 },
    reviewBody: review.text,
    datePublished: review.date,
  })),
});

export const generatePersonBadreSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://linkagency.ma/#badre-harkaoui",
  name: "Badreddine Harkaoui",
  alternateName: "Badre Harkaoui",
  givenName: "Badreddine",
  familyName: "Harkaoui",
  jobTitle: "Fondateur et directeur conseil",
  description: "Fondateur de Link Agency depuis 2015. Il pilote directement la stratégie, les arbitrages et les comptes clés en branding, communication et marketing.",
  url: "https://linkagency.ma/inside-link",
  image: "https://linkagency.ma/assets/media/da131874-d340-4dc9-b1e7-5fc5f24a0f40.png",
  worksFor: organizationRef,
  knowsAbout: ["Direction marketing", "Branding", "Communication corporate", "Stratégie de marque", "Social media", "Marketing digital"],
  knowsLanguage: ["fr", "ar", "en"],
  nationality: { "@type": "Country", name: "Maroc" },
  workLocation: { "@type": "Place", name: "Casablanca, Maroc" },
  sameAs: ["https://www.linkedin.com/in/badreddine-harkaoui-nexiafiducia/"],
});
