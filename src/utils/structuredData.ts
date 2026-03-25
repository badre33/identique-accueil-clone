// Données structurées Schema.org pour le SEO

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Link Agency",
  "alternateName": "Link Agency Maroc",
  "url": "https://linkagency.ma",
  "logo": "https://linkagency.ma/lovable-uploads/85b45a40-6291-4f5d-a377-65024ddb1976.png",
  "image": "https://linkagency.ma/lovable-uploads/85b45a40-6291-4f5d-a377-65024ddb1976.png",
  "foundingDate": "2014",
  "description": "Agence de marketing digital au Maroc spécialisée en branding, communication digitale et événementiel",
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
      "email": "contact@linkagency.ma",
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
    "Branding",
    "Communication Digitale",
    "Événementiel",
    "Design Graphique",
    "Stratégie Marketing"
  ]
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Link Agency",
  "image": "https://linkagency.ma/lovable-uploads/85b45a40-6291-4f5d-a377-65024ddb1976.png",
  "telephone": "+212-699-024526",
  "email": "bharkaoui@linkagency.ma",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Casablanca",
    "addressRegion": "Grand Casablanca",
    "postalCode": "20000",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.5731,
    "longitude": -7.5898
  },
  "url": "https://linkagency.ma",
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
  ...(price && { "priceRange": price })
});

export const generateWebPageSchema = (title: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": url,
  "inLanguage": "fr-FR",
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