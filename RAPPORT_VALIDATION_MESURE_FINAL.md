# Validation mesure — formulaire, WhatsApp, GA4 et HubSpot

**Date : 7 septembre 2026**

## Architecture finale

1. Le formulaire est d’abord envoyé à Netlify Forms : cette copie constitue la réception principale et évite de perdre le lead si HubSpot est momentanément indisponible.
2. Après confirmation Netlify, les mêmes informations sont synchronisées vers le formulaire HubSpot `e0f0b94e-c2f0-405e-a974-9d98f344070b`, portail `149257234`.
3. Le lead est dédupliqué dans HubSpot par adresse e-mail.
4. Aucun abonnement marketing automatique n’est demandé ; le consentement couvre uniquement le traitement de la demande.
5. L’événement GA4 `generate_lead` n’est envoyé qu’après la réception Netlify, avec l’état de synchronisation CRM `synced` ou `failed`.

## Événements suivis

- `generate_lead`
- `hubspot_sync_success`
- `hubspot_sync_error`
- `whatsapp_click`
- `email_click`
- `phone_click`
- `contact_cta_click`
- `download_brochure`

Les boutons WhatsApp programmatiques des pages villes, du calculateur et du quiz branding sont désormais couverts, en plus des liens WhatsApp classiques.

## Contrôles réalisés

- Soumission entièrement synthétique acceptée par l’API HubSpot avec code HTTP 200.
- Aucun nom, téléphone ou e-mail réel utilisé pendant le test technique.
- Build de production réussi : 61 pages statiques générées.
- Copie statique Netlify `dist/__forms.html` présente dans le build.
- ESLint : 0 erreur ; les avertissements restants sont antérieurs et non bloquants.
- Aperçu Netlify : `6a9eeba6cf13417b8b622bc1` ; accueil, contact, formulaire statique et politique de confidentialité répondent en HTTP 200.
- Test Netlify synthétique reçu avec le statut HTTP 200 et confirmé dans les soumissions sous l’identifiant `6a9eec774a95cb17793e620a`.
- Production Netlify : `6a9eed735a5ea6991f974e6b`, publiée sur `https://linkagency.ma`.
- Le bundle public contient bien l’URL `__forms.html`, l’identifiant du formulaire HubSpot et l’événement `hubspot_sync_success`.
- GA4 contient `generate_lead` et le classe déjà comme événement clé ; une occurrence de test est visible sur la période auditée.
- GA4 reçoit également `whatsapp_click` ; cet événement reste volontairement une micro-conversion afin qu’un simple clic ne soit pas compté comme un lead confirmé.

## Contrôle post-déploiement requis

Surveiller pendant sept jours les premières demandes réelles : réception Netlify, déduplication HubSpot et cohérence des attributs UTM. Aucun visiteur ni prospect ne doit être contacté automatiquement ; le traitement commercial reste manuel.
