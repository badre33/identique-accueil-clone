// Profils sociaux officiels Link Agency — source unique de vérité.
export const SOCIAL_LINKS = {
  linkedinCompany: "https://www.linkedin.com/company/link-agencyma/",
  linkedinFounder: "https://www.linkedin.com/in/badreddine-harkaoui-linkagency/",
  facebook: "https://www.facebook.com/linkagency.ma",
  instagram: "https://www.instagram.com/linkagency.ma/",
} as const;

export const SOCIAL_PROFILES = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedinCompany },
  { label: "Instagram", href: SOCIAL_LINKS.instagram },
  { label: "Facebook", href: SOCIAL_LINKS.facebook },
] as const;
