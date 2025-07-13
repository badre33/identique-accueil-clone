// Données structurées Schema.org pour le SEO

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Link Agency",
  "alternateName": "Link Agency Maroc",
  "url": "https://linkagency.ma",
  "logo": "https://linkagency.ma/logo-link-agency.png",
  "image": "https://linkagency.ma/logo-link-agency.png",
  "description": "Agence de marketing digital au Maroc spécialisée en branding, communication digitale et événementiel",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Casablanca",
    "addressLocality": "Casablanca",
    "addressRegion": "Grand Casablanca",
    "postalCode": "20000",
    "addressCountry": "MA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+212-XXX-XXXXXX",
    "contactType": "Customer Service",
    "availableLanguage": ["French", "Arabic", "English"],
    "areaServed": "MA"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Morocco"
  },
  "sameAs": [
    "https://www.facebook.com/linkagency",
    "https://www.instagram.com/linkagency",
    "https://www.linkedin.com/company/linkagency"
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
  "image": "https://linkagency.ma/logo-link-agency.png",
  "telephone": "+212-XXX-XXXXXX",
  "email": "contact@linkagency.ma",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Casablanca",
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
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 09:00-13:00"
  ],
  "servesCuisine": [],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "47"
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

export const generateReviewSchema = (reviews: Array<{
  author: string,
  rating: number,
  text: string,
  date: string
}>) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Link Agency",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length,
    "reviewCount": reviews.length
  },
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