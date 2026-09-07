# Plan de mesure GA4 — Link Agency

Mise à jour : 7 septembre 2026

## Objectif

Mesurer les demandes commerciales réelles sans confondre un clic de contact avec un prospect reçu.

## Taxonomie active

| Événement | Rôle | Événement clé GA4 |
|---|---|---|
| `page_view` | Consultation d’une page, y compris navigation interne | Non |
| `form_start` | Premier engagement avec le formulaire | Non |
| `contact_cta_click` | Accès à la page contact | Non |
| `whatsapp_click` | Ouverture de WhatsApp | Non |
| `phone_click` | Clic sur un numéro de téléphone | Non |
| `email_click` | Clic sur une adresse email | Non |
| `generate_lead` | Formulaire reçu et confirmé par Netlify | Oui |
| `form_submit_error` | Échec technique de réception du formulaire | Non |
| `hubspot_sync_success` | Copie du lead confirmée dans HubSpot | Non |
| `hubspot_sync_error` | Échec temporaire de la copie HubSpot ; la demande Netlify reste reçue | Non |
| `qualify_lead` | Prospect qualifié dans le futur CRM | Oui, réservé au CRM |
| `close_convert_lead` | Mission signée dans le futur CRM | Oui, réservé au CRM |

Les anciens événements `cta_devis_click` et `cta_whatsapp_click` ont été retirés des événements clés le 29 août 2026.

## Dimensions personnalisées GA4

| Nom GA4 | Paramètre |
|---|---|
| Emplacement du CTA | `cta_location` |
| Emplacement du formulaire | `form_location` |
| Fourchette investissement | `budget_band` |
| Horizon du projet | `project_timeline` |
| Langue du site | `site_language` |
| Service recherché | `service_interest` |

## Attribution enregistrée avec les formulaires

- page d’entrée ;
- domaine référent ;
- `utm_source` ;
- `utm_medium` ;
- `utm_campaign` ;
- `utm_content` ;
- `utm_term`.

Ces informations sont transmises à Netlify avec la demande. Aucun nom, email ou téléphone n’est envoyé à Google Analytics.

Après réception confirmée par Netlify, les coordonnées et le brief sont transmis au formulaire HubSpot technique `e0f0b94e-c2f0-405e-a974-9d98f344070b`. HubSpot déduplique sur l’adresse e-mail. Aucun abonnement marketing n’est créé. Le paramètre GA4 `crm_sync_status` indique seulement `synced` ou `failed` et ne contient aucune donnée personnelle.

## Consentement et environnements

- Consent Mode v2 avec mesure refusée par défaut ;
- Google Analytics chargé uniquement après acceptation ;
- signaux publicitaires et personnalisation publicitaire désactivés ;
- aucune collecte GA4 sur localhost, les prévisualisations Netlify ou les domaines autres que `linkagency.ma` et `www.linkagency.ma`.

## Vérification après déploiement

1. Accepter la mesure sur le site public.
2. Contrôler `page_view`, `form_start` et les clics de contact dans Temps réel.
3. Envoyer une demande de test clairement identifiée depuis le site public.
4. Vérifier la réception dans Netlify Forms avant de confirmer `generate_lead` dans DebugView/Temps réel.
5. Vérifier la création ou mise à jour du contact test dans HubSpot et le champ Message.
6. Supprimer les demandes de test après validation.

## Lecture commerciale recommandée

Le tableau de bord doit suivre en priorité : formulaires reçus, prospects qualifiés, missions signées, source/campagne, page d’entrée, service recherché et fourchette d’investissement. Les clics WhatsApp, téléphone et email restent des indicateurs d’intention et non des ventes.
