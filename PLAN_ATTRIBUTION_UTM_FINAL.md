# Plan d’attribution UTM — Link Agency

Version opérationnelle du 29 août 2026.

## Objectif

Relier chaque visite et chaque demande reçue via le formulaire à son point d’entrée réel, sans multiplier les pixels ni dépendre d’un raccourcisseur externe.

## Convention

| Paramètre | Rôle | Règle |
|---|---|---|
| `utm_id` | Identifiant unique du lien | `canal_emplacement` ; stable dans le temps |
| `utm_source` | Plateforme ou origine | minuscules : `instagram`, `linkedin`, `email_signature` |
| `utm_medium` | Famille de canal | vocabulaire fermé : `organic_social`, `email`, `messaging`, `owned_media`, `referral`, `paid_social`, `cpc` |
| `utm_campaign` | Initiative commerciale | minuscules, mots séparés par `_` |
| `utm_content` | Emplacement ou création | `bio`, `post`, `carousel`, `signature`, `pdf`, etc. |
| `utm_term` | Ciblage payant uniquement | mot-clé ou audience ; vide en organique |

Ne jamais utiliser d’accents, d’espaces, de majuscules, de date seule ou de libellé ambigu.

## Liens propriétaires permanents

Ces URL courtes redirigent vers le site avec les paramètres complets. Elles peuvent être utilisées immédiatement dans les profils et supports.

| Usage | URL à publier | `utm_id` |
|---|---|---|
| Bio Instagram | `https://linkagency.ma/go/instagram` | `owned_instagram_bio` |
| Page Facebook | `https://linkagency.ma/go/facebook` | `owned_facebook_page` |
| Page entreprise LinkedIn | `https://linkagency.ma/go/linkedin` | `owned_linkedin_company` |
| Google Business Profile | `https://linkagency.ma/go/google-business` | `owned_google_business_profile` |
| Profil WhatsApp Business | `https://linkagency.ma/go/whatsapp` | `owned_whatsapp_profile` |
| Signature e-mail | `https://linkagency.ma/go/email` | `owned_email_signature` |
| Portfolio / dossier PDF | `https://linkagency.ma/go/portfolio` | `owned_portfolio_pdf` |

Les redirections sont temporaires (`302`) afin de pouvoir changer la page d’arrivée sans perdre les liens déjà diffusés.

## Campagnes et contenus

Pour un contenu précis, utiliser une URL complète :

```text
https://linkagency.ma/direction-marketing-externalisee?utm_id=li_post_direction_01&utm_source=linkedin&utm_medium=organic_social&utm_campaign=direction_externalisee&utm_content=post_thought_leadership
```

Nomenclature recommandée pour `utm_id` :

```text
{canal}_{format}_{sujet}_{numero}
```

Exemples :

- `ig_carousel_branding_01`
- `li_post_direction_01`
- `fb_case_ocb_01`
- `email_proposal_market_entry_01`

## Campagnes commerciales recommandées

| Campagne | Intention | Landing page |
|---|---|---|
| `direction_externalisee` | Structurer ou reprendre un marketing fragmenté | `/direction-marketing-externalisee` |
| `branding_positioning` | Repositionnement, plateforme et identité | `/branding` |
| `morocco_market_entry` | Marque étrangère entrant au Maroc | `/en/marketing-agency-morocco` |
| `case_studies` | Preuve et réassurance | `/collaborations` |
| `brand_always_on` | Profils permanents et signatures | `/` |

## Données enregistrées

Au premier point d’entrée de la session, le site conserve : landing page, domaine référent, `utm_id`, source, medium, campagne, contenu et terme. Ces champs sont joints à la demande Netlify Forms. GA4 continue de gérer sa propre attribution ; le formulaire conserve la trace commerciale exploitable même avant l’installation d’un CRM.

## Discipline d’exploitation

1. Une URL publiée ne change pas d’identifiant.
2. Un nouveau contenu important reçoit un `utm_id` distinct.
3. Les liens internes au site ne reçoivent jamais d’UTM.
4. Les canaux payants utilisent les identifiants natifs de plateforme en plus des UTM.
5. Le registre est revu chaque mois avec les leads confirmés, pas seulement avec les clics.
