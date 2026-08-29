# Plan de mesure GA4 — Link Agency

Mise à jour : 29 août 2026

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
5. Supprimer la demande de test de Netlify après validation.

## Lecture commerciale recommandée

Le tableau de bord doit suivre en priorité : formulaires reçus, prospects qualifiés, missions signées, source/campagne, page d’entrée, service recherché et fourchette d’investissement. Les clics WhatsApp, téléphone et email restent des indicateurs d’intention et non des ventes.
