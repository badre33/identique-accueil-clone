#!/usr/bin/env node
/**
 * Pre-render static HTML shells per route.
 *
 * Pour chaque route React Router connue, génère dist/<route>/index.html avec
 * title / description / canonical / og:* propres. Le body reste vide — le JS
 * React fait le rendu côté client. Mais les CRAWLERS (Googlebot, Facebook,
 * LinkedIn, WhatsApp, Bing) verront les bonnes meta au lieu du fallback home.
 *
 * Solution sans Puppeteer (donc aucun téléchargement Chromium dans le build
 * Netlify) — simple substitution regex sur le template index.html.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '..', 'dist');
const BASE = 'https://linkagency.ma';

// ════════════════════════════════════════════════════════════════════
// Catalogue des routes statiques + métadonnées SEO uniques par route
// ════════════════════════════════════════════════════════════════════
const ROUTES = {
  '/branding': {
    title: 'Branding & Identité visuelle au Maroc | Link Agency',
    description: "Création d'identité de marque, design graphique et plateforme de marque pour grands comptes au Maroc. Casablanca, Rabat, Marrakech.",
    h1: 'Branding corporate au Maroc',
  },
  '/evenementiel': {
    title: 'Événementiel corporate au Maroc | Link Agency',
    description: "Conception et production d'événements corporate, séminaires, lancements et activations de marque au Maroc. Casablanca, Rabat, Marrakech.",
    h1: 'Événementiel corporate au Maroc',
  },
  '/influence-marketing': {
    title: 'Influence marketing au Maroc | Link Agency',
    description: "Stratégie d'influence, sélection de créateurs et campagnes mesurables au Maroc. KOL/KOC pour grands comptes B2B et B2C.",
    h1: 'Influence marketing au Maroc',
  },
  '/personal-branding': {
    title: 'Personal branding dirigeants au Maroc | Link Agency',
    description: 'Positionnement et personal branding pour dirigeants et entrepreneurs au Maroc. LinkedIn, prise de parole, leadership de marque.',
    h1: 'Personal branding pour dirigeants',
  },
  '/content-digital': {
    title: 'Production de contenu digital au Maroc | Link Agency',
    description: 'Studio interne FR/AR/Darija — vidéo, motion, photo, podcast, social content. Production éditoriale au service de votre marque.',
    h1: 'Production de contenu digital',
  },
  '/developpement-web': {
    title: 'Développement web sur mesure au Maroc | Link Agency',
    description: 'Conception et développement de sites web performants, e-commerce et applications métier. Stack moderne, design system, conversion.',
    h1: 'Développement web',
  },
  '/marketing-digital': {
    title: 'Marketing digital au Maroc — SEO, SEA, Social Ads | Link Agency',
    description: 'Stratégie et exécution digitale au Maroc : SEO, Google Ads, Meta Ads, social media. Reporting ROI et optimisation continue.',
    h1: 'Marketing digital au Maroc',
  },
  '/social-media': {
    title: 'Social media management Maroc — FR/AR/Darija | Link Agency',
    description: 'Community management, contenus bilingues FR/AR/Darija, campagnes payantes et reporting pour banques, retail, B2B au Maroc.',
    h1: 'Social media management',
  },
  '/conseil-strategique': {
    title: 'Conseil stratégique en communication corporate | Link Agency',
    description: "Cadrage stratégique, plateforme de marque, audit communication et roadmap d'activation pour directions marketing au Maroc.",
    h1: 'Conseil stratégique',
  },
  '/innovation-ux': {
    title: 'Innovation & UX design au Maroc | Link Agency',
    description: 'Design produit, UX research, parcours utilisateurs et prototypage pour banques, assurances et retail au Maroc.',
    h1: 'Innovation & UX',
  },
  '/analytics': {
    title: 'Analytics & data marketing au Maroc | Link Agency',
    description: 'GA4, dashboards de pilotage, attribution multi-canal et reporting ROI pour directions marketing au Maroc.',
    h1: 'Analytics & data marketing',
  },
  '/agence-marketing-digital-casablanca': {
    title: 'Agence marketing digital à Casablanca | Link Agency',
    description: "Cabinet conseil en marketing digital corporate à Casablanca. Branding, SEO, social media, événementiel pour grands comptes.",
    h1: 'Agence marketing digital à Casablanca',
  },
  '/agence-marketing-digital-marrakech': {
    title: 'Agence marketing digital à Marrakech | Link Agency',
    description: 'Agence communication et marketing digital à Marrakech. Branding, campagnes, événementiel pour hôtellerie, retail, immobilier.',
    h1: 'Agence marketing digital à Marrakech',
  },
  '/agence-communication-rabat': {
    title: 'Agence communication corporate à Rabat | Link Agency',
    description: 'Cabinet conseil en communication corporate à Rabat. Institutions, services financiers, grands comptes B2B au Maroc.',
    h1: 'Agence communication à Rabat',
  },
  '/etudes-de-cas': {
    title: 'Études de cas — réalisations Link Agency Maroc',
    description: "Découvrez nos missions livrées au Maroc : banques, assurances, retail, événementiel corporate. Stratégies et résultats concrets.",
    h1: 'Études de cas',
  },
  '/secteurs': {
    title: 'Secteurs d\'expertise — banque, assurance, retail | Link Agency',
    description: 'Expertise sectorielle au Maroc : banque, assurance, retail & e-commerce, industrie, immobilier, services B2B.',
    h1: 'Secteurs d\'expertise',
  },
  '/inside-link': {
    title: 'Inside Link — l\'équipe et la méthode | Link Agency',
    description: "Découvrez l'équipe Link Agency, ses 10 pôles d'expertise, sa méthode et son réseau de partenaires au Maroc.",
    h1: 'Inside Link',
  },
  '/collaborations': {
    title: 'Nos collaborations — clients et partenaires | Link Agency',
    description: '11 ans de collaborations corporate au Maroc : banques, assurances, retail, événementiel. 200+ missions livrées.',
    h1: 'Nos collaborations',
  },
  '/blog': {
    title: 'Blog — Marketing & branding au Maroc | Link Agency',
    description: 'Analyses, guides et tendances marketing digital, branding et communication corporate au Maroc. Articles experts FR/AR.',
    h1: 'Blog Link Agency',
  },
  '/contact': {
    title: 'Contact — Link Agency | Cabinet conseil communication Maroc',
    description: 'Contactez Link Agency pour cadrer votre dispositif corporate au Maroc. Devis sous 24h. Casablanca, Rabat, Marrakech.',
    h1: 'Parlons de votre dispositif',
  },
};

// Lecture sitemap pour récupérer aussi les routes blog/* dynamiques
function extractSitemapBlogSlugs() {
  try {
    const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf-8');
    const matches = [...sitemap.matchAll(/https:\/\/linkagency\.ma\/blog\/([^<]+)</g)];
    return matches.map((m) => '/blog/' + m[1]);
  } catch {
    return [];
  }
}

const escapeHtml = (s) =>
  String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

function applyMeta(html, { title, description, canonical, ogTitle, ogDesc }) {
  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );
  out = out.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  // OG / Twitter — remplace si présents
  out = out.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/g,
    `<meta property="og:url" content="${canonical}" />`
  );
  out = out.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/g,
    `<meta property="og:title" content="${escapeHtml(ogTitle || title)}" />`
  );
  out = out.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/g,
    `<meta property="og:description" content="${escapeHtml(ogDesc || description)}" />`
  );
  out = out.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/g,
    `<meta name="twitter:title" content="${escapeHtml(ogTitle || title)}" />`
  );
  out = out.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/g,
    `<meta name="twitter:description" content="${escapeHtml(ogDesc || description)}" />`
  );
  return out;
}

function main() {
  const indexPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('✗ dist/index.html introuvable — lancer vite build d\'abord');
    process.exit(1);
  }
  const template = fs.readFileSync(indexPath, 'utf-8');

  let count = 0;

  // 1) Routes statiques
  for (const [route, meta] of Object.entries(ROUTES)) {
    const html = applyMeta(template, {
      title: meta.title,
      description: meta.description,
      canonical: BASE + route,
    });
    const outDir = path.join(DIST, route.replace(/^\//, ''));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
    count++;
  }

  // 2) Routes blog dynamiques (depuis sitemap)
  const blogSlugs = extractSitemapBlogSlugs();
  for (const route of blogSlugs) {
    const slug = route.replace('/blog/', '');
    // Title humanisé à partir du slug
    const human = slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
    const html = applyMeta(template, {
      title: `${human} — Blog Link Agency`,
      description: `${human} — Analyse, guide et perspectives Link Agency sur le marketing digital et la communication corporate au Maroc.`,
      canonical: BASE + route,
    });
    const outDir = path.join(DIST, route.replace(/^\//, ''));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
    count++;
  }

  console.log(`✓ ${count} HTML shells pre-rendered (${Object.keys(ROUTES).length} statiques + ${blogSlugs.length} blog).`);
}

main();
