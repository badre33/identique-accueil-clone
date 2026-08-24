// Données structurées Schema.org pour le SEO

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "name": "Link Agency",
  "alternateName": "Link Agency Maroc",
  "legalName": "Link Agency",
  "slogan": "Stratégie, marque et performance — une vision intégrée pour marques établies au Maroc.",
  "url": "https://linkagency.ma",
  "logo": "https://linkagency.ma/assets/brand/link-agency-logo.png",
  "image": "https://linkagency.ma/assets/brand/link-agency-logo.png",
  "foundingDate": "2015",
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Casablanca",
      "addressCountry": "MA"
    }
  },
  "founder": {
    "@type": "Person",
    "name": "Badr Harkaoui",
    "jobTitle": "Fondateur & Directeur",
    "worksFor": { "@type": "Organization", "name": "Link Agency" },
    "nationality": "MA",
    "knowsAbout": [
      "Marketing Stratégique",
      "Branding",
      "Communication Digitale",
      "Performance Media",
      "Conseil Marketing"
    ]
  },
  "description": "Agence de marketing digital 360° au Maroc, basée à Casablanca et Marrakech. Stratégie, branding, contenu, performance media, événementiel et influence pour marques établies B2B et B2C.",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Casablanca",
      "addressLocality": "Casablanca",
      "addressRegion": "Grand Casablanca",
      "postalCode": "20000",
      "addressCountry": "MA"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Marrakech",
      "addressRegion": "Marrakech-Safi",
      "postalCode": "40000",
      "addressCountry": "MA"
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+212-699-024526",
      "contactType": "customer service",
      "availableLanguage": ["French", "Arabic", "English"],
      "areaServed": "MA",
      "contactOption": "TollFree"
    },
    {
      "@type": "ContactPoint",
      "email": "bharkaoui@linkagency.ma",
      "contactType": "sales",
      "availableLanguage": ["French", "Arabic", "English"],
      "areaServed": "MA"
    }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Morocco"
  },
  "sameAs": [
    "https://www.instagram.com/linkagency.ma",
    "https://www.linkedin.com/company/linkagency",
    "https://www.facebook.com/linkagency.ma",
    "https://www.tiktok.com/@linkagency.ma"
  ],
  "knowsAbout": [
    "Marketing Digital",
    "Marketing Stratégique 360°",
    "Branding",
    "Identité de marque",
    "Communication Digitale",
    "Social Media Management",
    "Performance Media",
    "SEO",
    "Marketing d'Influence",
    "Événementiel Corporate",
    "Design Graphique",
    "Stratégie Marketing B2B",
    "Stratégie Marketing B2C",
    "Acquisition client",
    "E-réputation"
  ],
  "knowsLanguage": ["fr", "ar", "en"],
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conseil Stratégique Marketing" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Digital & Performance Media" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding & Identité de Marque" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content & Production Digitale" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media & Communication" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influence Marketing" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Événementiel Corporate" } }
  ]
});

type LocalCity = "casablanca" | "marrakech" | "rabat" | "agadir" | "tanger";
const CITY_DATA: Record<LocalCity, { locality: string; region: string; postalCode: string; lat: number; lng: number; url: string }> = {
  casablanca: {
    locality: "Casablanca",
    region: "Grand Casablanca",
    postalCode: "20000",
    lat: 33.5731,
    lng: -7.5898,
    url: "https://linkagency.ma/agence-marketing-digital-casablanca",
  },
  marrakech: {
    locality: "Marrakech",
    region: "Marrakech-Safi",
    postalCode: "40000",
    lat: 31.6295,
    lng: -7.9811,
    url: "https://linkagency.ma/agence-marketing-digital-marrakech",
  },
  rabat: {
    locality: "Rabat",
    region: "Rabat-Salé-Kénitra",
    postalCode: "10000",
    lat: 34.0209,
    lng: -6.8416,
    url: "https://linkagency.ma/agence-communication-rabat",
  },
  agadir: {
    locality: "Agadir",
    region: "Souss-Massa",
    postalCode: "80000",
    lat: 30.4278,
    lng: -9.5981,
    url: "https://linkagency.ma/creation-site-web-agadir",
  },
  tanger: {
    locality: "Tanger",
    region: "Tanger-Tétouan-Al Hoceima",
    postalCode: "90000",
    lat: 35.7595,
    lng: -5.8340,
    url: "https://linkagency.ma/creation-site-web-tanger",
  },
};

export const generateLocalBusinessSchema = (city: LocalCity = "casablanca") => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `https://linkagency.ma/#localbusiness-${city}`,
  "name": `Link Agency ${CITY_DATA[city].locality}`,
  "image": "https://linkagency.ma/assets/brand/link-agency-logo.png",
  "telephone": "+212-699-024526",
  "email": "bharkaoui@linkagency.ma",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": CITY_DATA[city].locality,
    "addressRegion": CITY_DATA[city].region,
    "postalCode": CITY_DATA[city].postalCode,
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": CITY_DATA[city].lat,
    "longitude": CITY_DATA[city].lng
  },
  "url": CITY_DATA[city].url,
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "serviceArea": {
    "@type": "Country",
    "name": "Morocco"
  },
  "areaServed": [
    { "@type": "City", "name": "Casablanca" },
    { "@type": "City", "name": "Rabat" },
    { "@type": "City", "name": "Marrakech" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Marketing Digital",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Digital" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Événementiel" } }
    ]
  }
});

export const generateServiceSchema = (serviceName: string, description: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Link Agency",
    "url": "https://linkagency.ma"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Morocco"
  },
  "serviceType": "Marketing Digital",
  "category": "Creative Services",
  ...(price && {
    "offers": {
      "@type": "Offer",
      "priceCurrency": "MAD",
      "price": "0",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "MAD",
        "description": price
      },
      "availability": "https://schema.org/InStock"
    }
  })
});

export const generateWebPageSchema = (title: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": url,
  "inLanguage": "fr-MA",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Link Agency",
    "url": "https://linkagency.ma"
  },
  "about": {
    "@type": "Organization",
    "name": "Link Agency"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://linkagency.ma/logo-link-agency.png"
  }
});

export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// IMPORTANT: N'utiliser generateReviewSchema qu'avec de vrais avis vérifiés.
// Les faux avis dans les données structurées violent les guidelines Google et peuvent entraîner une pénalité.
export const generateReviewSchema = (reviews: Array<{
  author: string,
  rating: number,
  text: string,
  date: string
}>) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Link Agency",
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5
    },
    "reviewBody": review.text,
    "datePublished": review.date
  }))
});
// Schema Person détaillé pour Badre Harkaoui — E-E-A-T (Expertise, Experience, Authority, Trustworthiness)
// Signal critique pour les LLMs (ChatGPT, Claude, Perplexity) qui citent les experts du domaine
export const generatePersonBadreSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://linkagency.ma/#badre-harkaoui",
  "name": "Badre Harkaoui",
  "givenName": "Badre",
  "familyName": "Harkaoui",
  "jobTitle": "Fondateur & Directeur Conseil",
  "description": "Fondateur de Link Agency, agence marketing au Maroc depuis 2015. 11 ans d'expertise en stratégie de marque, communication corporate, marketing digital et événementiel. Conseiller stratégique senior auprès de PME, ETI et grands comptes au Maroc.",
  "url": "https://linkagency.ma/inside-link",
  "image": "https://linkagency.ma/badre-harkaoui.jpg",
  "worksFor": {
    "@type": "Organization",
    "@id": "https://linkagency.ma/#organization",
    "name": "Link Agency",
    "url": "https://linkagency.ma"
  },
  "knowsAbout": [
    "Marketing Digital",
    "Branding",
    "Communication Corporate",
    "Stratégie de Marque",
    "Social Media Management",
    "Événementiel Corporate",
    "Conseil Stratégique",
    "Performance Marketing",
    "SEO",
    "Meta Ads",
    "Google Ads"
  ],
  "knowsLanguage": ["fr", "ar", "en"],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "French Tech Maroc"
    },
    {
      "@type": "Organization",
      "name": "212 Founders"
    }
  ],
  "nationality": {
    "@type": "Country",
    "name": "Maroc"
  },
  "workLocation": {
    "@type": "Place",
    "name": "Casablanca, Maroc",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.5731,
      "longitude": -7.5898
    }
  },
  "sameAs": [
    "https://www.linkedin.com/in/badreharkaoui"
  ]
});
