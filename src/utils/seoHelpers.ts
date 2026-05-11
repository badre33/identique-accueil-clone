// Helpers pour l'optimisation SEO

export const SEO_CONSTANTS = {
  SITE_NAME: "Link Agency",
  BASE_URL: "https://linkagency.ma",
  DEFAULT_IMAGE: "https://linkagency.ma/logo-link-agency.png",
  TWITTER_HANDLE: "@LinkAgencyMA",
  LANGUAGES: ["fr", "ar", "en"] as const,
  LOCATIONS: ["casablanca", "rabat", "marrakech"] as const
};

export const generatePageMeta = (page: string) => {
  const metaData: Record<string, {
    title: string;
    description: string;
    keywords: string;
    image?: string;
  }> = {
    home: {
      title: "Link Agency — Cabinet Conseil Communication Corporate au Maroc",
      description: "Cabinet conseil en communication corporate au Maroc. Branding, stratégie digitale, événementiel pour grands comptes. 11 ans, 200+ missions. Casablanca, Rabat, Marrakech.",
      keywords: ""
    },
    branding: {
      title: "Stratégie de Marque & Branding au Maroc - Conseil Expert | Link Agency",
      description: "Stratégie de marque et branding au Maroc pour dirigeants et décideurs. Positionnement, identité visuelle, conseil stratégique à Casablanca, Rabat, Marrakech.",
      keywords: "stratégie de marque maroc, branding maroc, positionnement marque, identité visuelle casablanca, conseil branding rabat"
    },
    evenementiel: {
      title: "Agence Événementiel Maroc - Organisation & Communication - Link Agency",
      description: "Organisation d'événements corporate et marketing au Maroc. Communication événementielle, activation de marque. Casablanca, Rabat, Marrakech.",
      keywords: "événementiel maroc, organisation événements casablanca, communication événementielle, activation marque rabat"
    },
    "personal-branding": {
      title: "Personal Branding au Maroc - Développement Image Personnelle - Link Agency",
      description: "Services de personal branding au Maroc. Développement de votre image personnelle et présence digitale. Coaching personnel Casablanca.",
      keywords: "personal branding maroc, image personnelle, coaching digital casablanca, développement personnel professionnel"
    },
    "content-digital": {
      title: "Création Contenu Digital Maroc - Stratégie Social Media - Link Agency",
      description: "Création de contenu digital et stratégie social media au Maroc. Gestion réseaux sociaux, content marketing, storytelling.",
      keywords: "contenu digital maroc, social media casablanca, gestion réseaux sociaux, content marketing rabat"
    },
    "inside-link": {
      title: "Inside Link Agency - Notre Vision & Équipe Creative au Maroc",
      description: "Découvrez l'équipe Link Agency, notre vision créative et notre approche unique du marketing digital au Maroc.",
      keywords: "équipe link agency, vision créative, agence marketing digital maroc, culture entreprise"
    },
    collaborations: {
      title: "Nos Collaborations & Partenariats - Portfolio Link Agency Maroc",
      description: "Découvrez nos collaborations et projets réalisés au Maroc. Portfolio de nos partenariats créatifs et stratégiques.",
      keywords: "portfolio link agency, collaborations maroc, projets créatifs, partenariats marketing digital"
    }
  };

  return metaData[page] || metaData.home;
};

export const generateCanonicalUrl = (path: string, lang: string = "fr") => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const basePath = lang === "fr" ? "" : `/${lang}`;
  return `${SEO_CONSTANTS.BASE_URL}${basePath}${cleanPath ? `/${cleanPath}` : ""}`;
};

export const generateHreflangUrls = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return SEO_CONSTANTS.LANGUAGES.map(lang => ({
    lang,
    url: generateCanonicalUrl(cleanPath, lang)
  }));
};

export const generateSocialImageUrl = (title: string, type: string = "page") => {
  // En production, cela pourrait générer des images dynamiques
  // Pour maintenant, on retourne l'image par défaut
  return SEO_CONSTANTS.DEFAULT_IMAGE;
};

export const optimizeTitle = (title: string, maxLength: number = 60) => {
  if (title.length <= maxLength) return title;
  
  return title.substring(0, maxLength - 3) + "...";
};

export const optimizeDescription = (description: string, maxLength: number = 160) => {
  if (description.length <= maxLength) return description;
  
  const trimmed = description.substring(0, maxLength - 3);
  const lastSpace = trimmed.lastIndexOf(' ');
  
  return (lastSpace > 0 ? trimmed.substring(0, lastSpace) : trimmed) + "...";
};

export const generateRobotsMeta = (isIndexable: boolean = true, isFollowable: boolean = true) => {
  const robots = [];
  
  robots.push(isIndexable ? "index" : "noindex");
  robots.push(isFollowable ? "follow" : "nofollow");
  robots.push("max-image-preview:large");
  robots.push("max-snippet:-1");
  robots.push("max-video-preview:-1");
  
  return robots.join(", ");
};

export const generateKeywords = (baseKeywords: string[], location?: string, service?: string) => {
  let keywords = [...baseKeywords];
  
  if (location) {
    keywords = keywords.map(keyword => [keyword, `${keyword} ${location}`]).flat();
  }
  
  if (service) {
    keywords.push(`${service} maroc`, `${service} casablanca`);
  }
  
  return keywords.join(", ");
};