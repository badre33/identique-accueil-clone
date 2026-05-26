export interface FAQItem {
  question: string;
  answer: string;
}

export const serviceFaqs: Record<string, FAQItem[]> = {
  branding: [
    {
      question: "Combien coûte une création de marque au Maroc ?",
      answer:
        "Chaque mission de branding est cadrée sur devis selon le périmètre : refonte complète, création from scratch, repositionnement ou extension de gamme. Nos accompagnements s'étendent en général de quelques semaines à plusieurs mois et incluent stratégie, identité visuelle et déploiement.",
    },
    {
      question: "Quelles sont les étapes d'un projet de branding avec Link Agency ?",
      answer:
        "Diagnostic et immersion, plateforme de marque (mission, vision, valeurs, positionnement), création de l'identité visuelle (logo, système typographique, palette, iconographie), déploiement (chartes, templates, applications) et accompagnement post-livraison.",
    },
    {
      question: "Travaillez-vous avec des marques déjà établies ?",
      answer:
        "Oui. La majorité de nos clients sont des marques établies au Maroc qui souhaitent moderniser, repositionner ou clarifier leur identité. Nous intervenons aussi sur des créations de marque from scratch pour les nouveaux projets ambitieux.",
    },
    {
      question: "Livrez-vous une charte graphique complète ?",
      answer:
        "Oui. Chaque projet aboutit à une charte graphique structurée (logo, typographies, couleurs, iconographie, principes de composition, applications digitales et print) et un kit de fichiers prêt à l'emploi pour vos équipes internes ou prestataires.",
    },
  ],
  "marketing-digital": [
    {
      question: "Quels canaux paid media pilotez-vous ?",
      answer:
        "Meta Ads (Facebook & Instagram), Google Ads (Search, Display, YouTube, Shopping), TikTok Ads et LinkedIn Ads. Nous arbitrons le mix entre canaux selon vos objectifs (notoriété, acquisition, rétention) et votre cible (B2B, B2C, local).",
    },
    {
      question: "Comment mesurez-vous le ROI des campagnes ?",
      answer:
        "Nous mettons en place un tracking complet (GA4, GTM, Conversions API, Pixels), des dashboards consolidés et des rapports mensuels orientés business : ROAS, CPL, CAC, contribution incrémentale par canal.",
    },
    {
      question: "Faites-vous du SEO en plus du paid media ?",
      answer:
        "Oui. Nous pilotons des stratégies SEO complètes : audit technique, optimisation on-page, stratégie de contenu pillar/satellite, netlinking maîtrisé. Le SEO et le paid sont pilotés en intégration pour maximiser la performance globale.",
    },
    {
      question: "Travaillez-vous avec des budgets média modestes ?",
      answer:
        "Notre approche s'adapte à différentes échelles de budget. Nous privilégions les marques disposant d'une vraie ambition de pilotage long terme plutôt que les activations ponctuelles. Le seuil minimum dépend du périmètre et des canaux.",
    },
  ],
  evenementiel: [
    {
      question: "Quels types d'événements organisez-vous ?",
      answer:
        "Conventions, séminaires, lancements produits, soirées corporate, conférences, activations de marque, événements presse et events influence. Nous intervenons sur l'amont stratégique, la production et l'amplification digitale.",
    },
    {
      question: "Couvrez-vous tout le Maroc ?",
      answer:
        "Oui. Nos équipes interviennent sur Casablanca, Marrakech, Rabat, Tanger et l'ensemble du territoire. Nous mobilisons des partenaires logistiques locaux selon la ville et la nature de l'événement.",
    },
    {
      question: "Gérez-vous la communication digitale autour de l'événement ?",
      answer:
        "Oui. Chaque dispositif événementiel intègre un volet digital : teasing, live social, captation, post-event content, relations influenceurs et amplification média payante.",
    },
    {
      question: "Quel est le délai pour préparer un événement ?",
      answer:
        "Comptez 6 à 12 semaines pour un événement structurant (convention, lancement, soirée corporate). Pour les activations plus légères, 3 à 4 semaines peuvent suffire selon le périmètre.",
    },
  ],
  "social-media": [
    {
      question: "Sur quels réseaux sociaux intervenez-vous ?",
      answer:
        "Instagram, TikTok, LinkedIn, Facebook, YouTube et X. Nous arbitrons les canaux selon votre cible et votre secteur, en privilégiant les plateformes les plus pertinentes plutôt qu'une présence dispersée.",
    },
    {
      question: "Produisez-vous du contenu en arabe et darija ?",
      answer:
        "Oui. Notre équipe rédige et produit en français, arabe classique et darija marocaine, selon les codes de votre marque et votre audience. Le multilinguisme est essentiel pour toucher efficacement les audiences marocaines.",
    },
    {
      question: "Faites-vous du community management quotidien ?",
      answer:
        "Oui. Nous assurons la modération, la réponse aux messages et commentaires, la veille e-réputation et l'animation des communautés selon des process structurés et des SLA partagés.",
    },
    {
      question: "Pouvez-vous gérer la production photo et vidéo ?",
      answer:
        "Oui. Nous pilotons des productions natives social media : shooting photo, vidéo, captations événementielles, contenus UGC. Studios à Casablanca et capacité de mobilisation à Marrakech, Rabat et autres villes.",
    },
  ],
  "influence-marketing": [
    {
      question: "Comment sélectionnez-vous les influenceurs ?",
      answer:
        "Nous travaillons sur la base d'une cartographie sectorielle, d'analyses d'audience qualitatives et quantitatives, et d'une vérification des engagements. La pertinence éditoriale et la cohérence de marque priment sur la taille de la communauté.",
    },
    {
      question: "Travaillez-vous avec des macro et micro influenceurs ?",
      answer:
        "Oui. Nous activons aussi bien des macro et top influenceurs marocains que des micro et nano créateurs spécialisés selon les objectifs : notoriété, conversion, crédibilité de niche.",
    },
    {
      question: "Comment mesurez-vous l'impact d'une campagne d'influence ?",
      answer:
        "Nous mesurons reach, impressions, engagements, sentiment, trafic généré, conversions attribuées et lift de notoriété. Chaque campagne fait l'objet d'un reporting détaillé et d'apprentissages capitalisables.",
    },
    {
      question: "Encadrez-vous les contrats et la conformité ?",
      answer:
        "Oui. Nous gérons les briefs, les contrats, la conformité ARPP et les obligations de transparence (mentions partenariat). Chaque collaboration est cadrée juridiquement et éditorialement.",
    },
  ],
  "conseil-strategique": [
    {
      question: "À qui s'adresse votre conseil stratégique ?",
      answer:
        "Aux directions générales, directions marketing et fondateurs de marques établies au Maroc qui souhaitent structurer leur stratégie marque, communication ou acquisition. Nos missions vont du diagnostic ponctuel à l'accompagnement long terme.",
    },
    {
      question: "Qu'est-ce qu'inclut une mission de conseil ?",
      answer:
        "Diagnostic interne, analyse concurrentielle et de marché, formulation du positionnement, définition des axes stratégiques, priorisation des leviers et roadmap d'exécution. Tous nos livrables sont opérationnels et activables.",
    },
    {
      question: "Combien de temps dure une mission de conseil ?",
      answer:
        "De 4 à 12 semaines pour un cadrage stratégique structurant. Les accompagnements long terme (board advisory, copilotage) s'étalent sur plusieurs mois ou années selon les enjeux.",
    },
    {
      question: "Travaillez-vous en coordination avec nos équipes internes ?",
      answer:
        "Systématiquement. Nos missions reposent sur un copilotage avec vos équipes, pas sur une délégation totale. Notre rôle est de structurer, challenger et accélérer, pas de remplacer.",
    },
  ],
  "content-digital": [
    {
      question: "Quels formats de contenu produisez-vous ?",
      answer:
        "Contenus éditoriaux (articles, livres blancs, rapports), contenus vidéo (formats courts, longs, motion design), contenus visuels (photo, illustrations, infographies) et contenus interactifs adaptés aux usages digitaux actuels.",
    },
    {
      question: "Faites-vous de la production photo et vidéo ?",
      answer:
        "Oui. Nous pilotons des productions complètes : conception, casting, shooting, post-production. Nos équipes interviennent sur Casablanca, Marrakech et Rabat avec des partenaires techniques fiables.",
    },
    {
      question: "Optimisez-vous le contenu pour le SEO ?",
      answer:
        "Oui. Chaque production éditoriale est conçue avec une logique SEO : recherche de mots-clés, structure hiérarchique, optimisation on-page, maillage interne et stratégie pillar/satellite.",
    },
    {
      question: "Pouvez-vous prendre en charge un calendrier éditorial complet ?",
      answer:
        "Oui. Nous structurons des calendriers éditoriaux annuels, alignés avec vos temps forts business, vos campagnes et les saisonnalités du marché marocain. Le pilotage est mensuel ou trimestriel.",
    },
  ],
  "personal-branding": [
    {
      question: "À qui s'adresse le personal branding ?",
      answer:
        "Aux dirigeants, fondateurs, experts et personnalités publiques qui souhaitent structurer leur image personnelle, gagner en visibilité et asseoir leur autorité dans leur secteur d'activité.",
    },
    {
      question: "Quels canaux activez-vous pour le personal branding ?",
      answer:
        "LinkedIn principalement pour les profils B2B, Instagram et TikTok pour les profils lifestyle ou grand public. Nous travaillons aussi sur les prises de parole presse, podcasts et conférences.",
    },
    {
      question: "Rédigez-vous le contenu à la place du dirigeant ?",
      answer:
        "Nous co-construisons. Nos rédacteurs travaillent à partir d'interviews régulières, de notes du dirigeant et de sa ligne éditoriale. L'objectif : produire un contenu authentique, qui sonne juste, sans déformer la voix du dirigeant.",
    },
    {
      question: "Combien de temps avant de voir des résultats ?",
      answer:
        "Les premiers signaux apparaissent en 2 à 3 mois (engagement, visibilité). Les bénéfices structurels (autorité, opportunités business, leads entrants) se construisent sur 6 à 12 mois de publication régulière.",
    },
  ],
  "developpement-web": [
    {
      question: "Quelles technologies utilisez-vous ?",
      answer:
        "Stacks modernes : React, Next.js, TypeScript, Tailwind CSS pour le front, Node, headless CMS et solutions cloud pour le back. Nous adaptons la stack au projet, pas l'inverse.",
    },
    {
      question: "Faites-vous du e-commerce ?",
      answer:
        "Oui. Nous concevons et déployons des boutiques en ligne sur Shopify, WooCommerce ou solutions custom selon le périmètre, avec intégration des paiements marocains et internationaux.",
    },
    {
      question: "Combien de temps prend la création d'un site web ?",
      answer:
        "Un site vitrine structurant prend en général 6 à 10 semaines. Une plateforme custom ou un e-commerce avancé : 3 à 6 mois selon le périmètre fonctionnel.",
    },
    {
      question: "Assurez-vous la maintenance après livraison ?",
      answer:
        "Oui. Nous proposons des contrats de maintenance évolutive : corrections, mises à jour techniques, ajout de fonctionnalités, monitoring des performances et de la sécurité.",
    },
  ],
  "innovation-ux": [
    {
      question: "Qu'est-ce que l'innovation UX chez Link Agency ?",
      answer:
        "Nous concevons des expériences digitales qui combinent design centré utilisateur, recherche qualitative, prototypage et tests. L'objectif : créer des produits digitaux qui convertissent, fidélisent et différencient la marque.",
    },
    {
      question: "Faites-vous de la recherche utilisateur ?",
      answer:
        "Oui. Entretiens utilisateurs, tests d'utilisabilité, analyses heuristiques, cartographies de parcours et personas. Toute notre démarche UX repose sur la connaissance réelle des usages.",
    },
    {
      question: "Travaillez-vous sur des applications mobiles ?",
      answer:
        "Oui. Conception UX/UI pour applications iOS et Android, prototypage Figma, design systems et accompagnement des équipes de développement.",
    },
    {
      question: "Pouvez-vous auditer une plateforme existante ?",
      answer:
        "Oui. Nous proposons des audits UX complets : analyse heuristique, benchmark, tests utilisateurs, recommandations priorisées et roadmap d'amélioration.",
    },
  ],
  analytics: [
    {
      question: "Qu'est-ce que vous couvrez en analytics & data marketing ?",
      answer:
        "Tracking GA4, Google Tag Manager, dashboards Looker Studio, attribution multi-canal, intégration CRM, server-side tagging, KPIs business (CAC, LTV, ROAS, contribution incrémentale). Notre objectif : transformer la donnée brute en pilotage business actionnable.",
    },
    {
      question: "Combien coûte la mise en place d'un tracking complet ?",
      answer:
        "Selon le périmètre : configuration GA4 + GTM basique à partir de 15 kMAD en one-shot, dashboards multi-canaux et attribution avancée 30 à 60 kMAD. Maintenance et reporting mensuel ensuite : à partir de 5 kMAD/mois.",
    },
    {
      question: "Pouvez-vous auditer un tracking existant ?",
      answer:
        "Oui. Audit complet du tracking GA4, GTM, pixels, server-side tagging, fiabilité des conversions, qualité des données CRM. Livrable : rapport d'audit + plan d'action priorisé. Mission de 2 à 4 semaines selon complexité.",
    },
    {
      question: "Intégrez-vous le tracking avec un CRM existant ?",
      answer:
        "Oui. HubSpot, Salesforce, Pipedrive, Zoho, ou CRM custom. Nous configurons la remontée des conversions qualifiées (leads transformés en clients) pour mesurer le vrai CAC marketing et optimiser les budgets paid en conséquence.",
    },
    {
      question: "Comment garantissez-vous la conformité RGPD au Maroc ?",
      answer:
        "Mise en place de bannières de consentement (Consent Mode v2), respect de la loi 09-08 sur la protection des données personnelles au Maroc, anonymisation des IPs, durées de rétention configurées. Audit RGPD en option pour les secteurs régulés.",
    },
  ]
};