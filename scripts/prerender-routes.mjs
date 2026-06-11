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
    title: 'Agence Branding Maroc — Logo, Charte, Identité de Marque | Link Agency',
    description: "Agence branding au Maroc : création de logo, charte graphique, plateforme de marque, refonte d'identité. PME, ETI et grands comptes. Casablanca, Rabat, Marrakech.",
    h1: 'Branding corporate au Maroc',
  },
  '/evenementiel': {
    title: 'Agence Événementiel Corporate Maroc | Link Agency',
    description: "Lancements, séminaires, conventions, soirées clients. Production de A à Z au Maroc. Casablanca, Rabat, Marrakech.",
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
    title: 'Agence Marketing Digital Maroc — SEO, Ads, Performance | Link Agency',
    description: 'SEO, Google Ads, Meta Ads, landing pages, automation. ROI mesurable, reporting transparent. PME, ETI, filiales. Casablanca, Rabat.',
    h1: 'Marketing digital au Maroc',
  },
  '/social-media': {
    title: 'Agence Social Media Maroc — Community Management FR/AR | Link Agency',
    description: 'Community management, contenu créatif, Meta Ads, reporting trilingue FR/AR/Darija. PME, ETI, grands comptes au Maroc.',
    h1: 'Social media management',
  },
  '/conseil-strategique': {
    title: 'Conseil Stratégique Marketing Maroc | Link Agency',
    description: "Conseil stratégique marketing au Maroc : audit, plan stratégique, roadmap d'activation. Pour PME en structuration, ETI en repositionnement, filiales étrangères. 11 ans d'expérience.",
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
  '/creation-site-web-agadir': {
    title: 'Création de Site Web à Agadir | Agence Web Souss-Massa | Link Agency',
    description: "Agence web à Agadir : création de site internet, e-commerce, plateforme sur-mesure. PME et entreprises de la région Souss-Massa. Devis 48h, mobile-first, SEO local.",
    h1: 'Création de site web à Agadir',
  },
  '/creation-site-web-tanger': {
    title: 'Création de Site Web à Tanger | Agence Web Tanger-Tétouan | Link Agency',
    description: "Agence web à Tanger : création de site internet, e-commerce, plateforme sur-mesure. PME et entreprises de la région Tanger-Tétouan. Devis 48h, mobile-first, SEO local.",
    h1: 'Création de site web à Tanger',
  },
  '/creation-site-web-casablanca': {
    title: 'Création de Site Web à Casablanca | Agence Web Grand Casablanca | Link Agency',
    description: "Agence web à Casablanca : création de site internet, e-commerce, plateforme sur-mesure. PME, ETI, CFC, filiales internationales. Devis 48h, mobile-first, SEO local.",
    h1: 'Création de site web à Casablanca',
  },
  '/creation-site-web-marrakech': {
    title: 'Création de Site Web à Marrakech | Agence Web Marrakech-Safi | Link Agency',
    description: "Agence web à Marrakech : création de site pour hôtels, riads, restaurants, immobilier de prestige, marques lifestyle. Design premium, mobile-first, SEO international.",
    h1: 'Création de site web à Marrakech',
  },
  '/creation-site-web-rabat': {
    title: 'Création de Site Web à Rabat | Agence Web Rabat-Salé-Kénitra | Link Agency',
    description: "Agence web à Rabat : création de site pour institutions, cabinets, professions libérales, services B2B. Conformité, accessibilité, design institutionnel.",
    h1: 'Création de site web à Rabat',
  },
  '/agence-marketing-digital-casablanca': {
    title: 'Agence Marketing Digital à Casablanca | Link Agency',
    description: "Agence marketing digital à Casablanca : branding, social media, SEO, Ads. 11 ans au service des marques.",
    h1: 'Agence marketing digital à Casablanca',
  },
  '/agence-marketing-digital-marrakech': {
    title: 'Agence Marketing Digital à Marrakech — Link Agency',
    description: 'Agence marketing digital à Marrakech : branding, social media, événementiel, campagnes ads. Hôtellerie, retail, immobilier, services. 11 ans au Maroc.',
    h1: 'Agence marketing digital à Marrakech',
  },
  '/agence-communication-rabat': {
    title: 'Agence Communication à Rabat — Link Agency',
    description: 'Agence communication à Rabat : institutions, services financiers, grands comptes B2B au Maroc. Branding, social media, événementiel, conseil stratégique.',
    h1: 'Agence communication à Rabat',
  },
  '/etudes-de-cas': {
    title: 'Études de cas — Link Agency au Maroc',
    description: "Nos réalisations marketing au Maroc : banques, assurances, retail, événementiel corporate, branding. Résultats chiffrés et témoignages clients.",
    h1: 'Études de cas',
  },
  '/secteurs': {
    title: 'Secteurs d\'expertise — banque, assurance, retail | Link Agency',
    description: 'Expertise sectorielle au Maroc : banque, assurance, retail & e-commerce, industrie, immobilier, services B2B.',
    h1: 'Secteurs d\'expertise',
  },
  '/inside-link': {
    title: "Inside Link — L'équipe, la méthode, le réseau | Link Agency",
    description: "Découvrez les pôles d'expertise de Link Agency, sa méthode et son réseau de partenaires au Maroc. 11 ans, 200+ missions, fondateur opérationnel.",
    h1: 'Inside Link',
  },
  '/collaborations': {
    title: 'Nos collaborations — clients et partenaires | Link Agency',
    description: '11 ans de collaborations corporate au Maroc : banques, assurances, retail, événementiel. 200+ missions livrées.',
    h1: 'Nos collaborations',
  },
  '/blog': {
    title: 'Blog — Marketing, Branding & Communication au Maroc | Link Agency',
    description: 'Analyses, guides et tendances marketing digital, branding et communication corporate au Maroc. Articles experts FR/AR par Link Agency.',
    h1: 'Blog Link Agency',
  },
  '/contact': {
    title: 'Contact — Link Agency | Discuter sur WhatsApp ou demander un devis',
    description: 'Contactez Link Agency — agence marketing au Maroc. Réponse sous 24h, devis sous 48h. WhatsApp, email ou formulaire. Casablanca, Rabat, Marrakech.',
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

// Nav partagée injectée dans chaque <noscript> (maillage interne pour crawlers sans JS)
const SERVICE_NAV = `
      <nav aria-label="Services Link Agency">
        <ul>
          <li><a href="/branding">Branding &amp; identité de marque</a></li>
          <li><a href="/marketing-digital">Marketing digital — SEO, Ads, performance</a></li>
          <li><a href="/social-media">Social media &amp; community management</a></li>
          <li><a href="/content-digital">Production de contenu digital</a></li>
          <li><a href="/evenementiel">Événementiel corporate</a></li>
          <li><a href="/conseil-strategique">Conseil stratégique</a></li>
          <li><a href="/etudes-de-cas">Études de cas</a></li>
          <li><a href="/contact">Contact &amp; devis</a></li>
        </ul>
      </nav>`;

// Construit le bloc SEO crawlable (sans JS) propre à une route.
function buildSeoNoscript({ h1, description }) {
  return `<noscript>\n      <h1>${escapeHtml(h1)}</h1>\n      <p>${escapeHtml(description)}</p>${SERVICE_NAV}\n    </noscript>`;
}

function applyMeta(html, { title, description, canonical, ogTitle, ogDesc, h1 }) {
  let out = html;
  // Remplace le bloc <noscript> SEO de la home (celui qui contient un <h1>)
  // par un bloc propre à la route. Ne touche pas au <noscript> des fonts (qui contient <link>).
  if (h1) {
    out = out.replace(
      /<noscript>\s*<h1[\s\S]*?<\/noscript>/,
      buildSeoNoscript({ h1, description })
    );
  }
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
      h1: meta.h1,
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
    const description = `${human} — Analyse, guide et perspectives Link Agency sur le marketing digital et la communication corporate au Maroc.`;
    const html = applyMeta(template, {
      title: `${human} — Blog Link Agency`,
      description,
      canonical: BASE + route,
      h1: human,
    });
    const outDir = path.join(DIST, route.replace(/^\//, ''));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
    count++;
  }

  console.log(`✓ ${count} HTML shells pre-rendered (${Object.keys(ROUTES).length} statiques + ${blogSlugs.length} blog).`);
}

main();
