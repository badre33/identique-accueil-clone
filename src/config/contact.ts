// Contacts globaux Link Agency — source unique de vérité
export const WHATSAPP_NUMBER = "212699024526";
export const WHATSAPP_DISPLAY = "+212 699 024 526";
export const EMAIL = "bharkaoui@linkagency.ma";

export const buildWhatsAppUrl = (message?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

// Message par défaut pour les CTAs principaux
export const WHATSAPP_DEFAULT_MESSAGE =
  "Bonjour Badre, je souhaite vous présenter un enjeu de marque ou de marketing pour notre entreprise.";

export const WHATSAPP_URL = buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE);
export const EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent("Demande d'échange stratégique")}`;
