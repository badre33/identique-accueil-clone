import { Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Équipe Link Agency — données issues du dossier technique (10 profils seniors)
const team = [
  {
    name: 'Badreddine Harkaoui',
    role: 'Fondateur & Directeur de mission',
    expertise: 'Stratégie digitale · Branding · Pilotage grands comptes',
    track: 'Ex-Consultant Stratégie Nexia Morocco — portefeuille AXA, Wafa Assurance, Saham, Allianz, Arab Bank, Orange, OCP, Safran, Dekra. 75+ projets livrés. Sélectionné 212 Founders (CDG Invest).',
  },
  {
    name: 'Julien Bucaille',
    role: 'Revenue Performance Orchestration (JBScale)',
    expertise: 'Pilotage commercial · Funnel · RevOps',
    track: '14 ans chez Salesforce (jusqu\'à SVP Sales) · 4 ans chez Oracle sur comptes stratégiques du secteur financier.',
  },
  {
    name: 'Rachid Naguib',
    role: 'Data & Analytics',
    expertise: 'Power BI · SQL · Python · GA4 · Attribution multi-touch',
    track: '−40% temps de reporting · +20% taux de conversion via optimisation des indicateurs d\'acquisition (Grown Media).',
  },
  {
    name: 'Anouar Bizzari',
    role: 'Trading Desk & Programmatique',
    expertise: 'DV360 · CM360 · Meta · Google Ads · TikTok · LinkedIn',
    track: 'Orange Maroc, Barid Al-Maghrib / Al Barid Bank, OCP Africa, Aéroports du Maroc — campagnes performance et couverture nationale.',
  },
  {
    name: 'Abdeslam El Qourchi',
    role: 'Paid Social & Stratégie d\'acquisition',
    expertise: 'Google Ads · Meta Ads · HubSpot · Brevo',
    track: 'Stratégies déployées pour Honda Motor (Tokyo Days 2025 — CTR 3,10% / CPL 4,10 DH), Mutandis Group, Pharma 5, Aiguebelle.',
  },
  {
    name: 'Aissam Laguig',
    role: 'SEO & Contenu Arabic / Darija',
    expertise: 'Semrush · Screaming Frog · GEO/IA',
    track: '+340% de croissance de trafic organique en moyenne · 25+ projets délivrés · 98% de satisfaction client.',
  },
  {
    name: 'Ayman Nejmi',
    role: 'Direction Artistique & Community Management',
    expertise: 'Stratégie marque · Motion Design · Social Media',
    track: 'Attijari Wafabank, Wafasalaf, AXA, RMA, Fondation Al Mada, Orange, Ford — secteurs financier et assurance.',
  },
  {
    name: 'Wissal Walkas',
    role: 'Stratégie éditoriale & E-réputation',
    expertise: 'SEO · SEA/SMO · Copywriting · Brand · Corporate film',
    track: '+60% de croissance organique (Brainlyne US) · Stratégies AXA Assurance Maroc, AMDIE, CDG, Attijari Wafabank.',
  },
  {
    name: 'Zakariaa Guismi',
    role: 'UX/UI & CRO',
    expertise: 'Hotjar · Figma · A/B testing · Core Web Vitals',
    track: 'Expert CRO senior — optimisation parcours utilisateur et taux de conversion sur dispositifs e-commerce et lead gen.',
  },
  {
    name: 'Ihssane Safar',
    role: 'CRM & Marketing Automation',
    expertise: 'HubSpot · Salesforce · Sarbacane · Parcours automatisés',
    track: 'Ex-BMW Group Financial Services — Welcome Pack 25-30% d\'ouverture · Winback 18-22% · Base CRM +25% activable.',
  },
];

const accounts = [
  'Attijari Wafabank', 'Wafasalaf', 'AXA Assurance Maroc', 'RMA',
  'Fondation Al Mada', 'Saham', 'Allianz', 'Arab Bank',
  'Orange Maroc', 'OCP', 'OCP Africa', 'Safran',
  'Honda Motor', 'Ford', 'Pharma 5', 'Mutandis Group',
  'Aiguebelle', 'Barid Al-Maghrib', 'Al Barid Bank', 'Aéroports du Maroc',
  'AMDIE', 'CDG', 'Dekra', 'Brainlyne (US)',
];

export const TeamCredentials = () => {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-16 bg-white" aria-labelledby="team-credentials-title">
      <div className="max-w-7xl mx-auto">
        {/* Header sobre, ton consulting */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-6">
            <Award className="w-4 h-4" />
            <span>L'équipe Link Agency</span>
          </div>
          <h2 id="team-credentials-title" className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            10 profils seniors. <span className="font-medium text-primary">60+ années</span> d'expérience cumulée.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Une équipe de spécialistes ayant déjà piloté des dispositifs digitaux pour les grands comptes
            financiers, industriels et institutionnels marocains. Chaque profil engage un track record vérifiable.
          </p>
        </div>

        {/* Grille équipe */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-20">
          {team.map((member) => (
            <article key={member.name} className="border-l-2 border-primary/20 pl-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-medium text-foreground mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-primary mb-2">{member.role}</p>
              <p className="text-sm text-gray-500 mb-3">{member.expertise}</p>
              <p className="text-sm text-gray-700 leading-relaxed flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span>{member.track}</span>
              </p>
            </article>
          ))}
        </div>

        {/* Comptes accompagnés */}
        <div className="border-t border-gray-100 pt-16">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">
              Comptes accompagnés par l'équipe
            </p>
            <h3 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Des marques de référence au Maroc et à l'international.
            </h3>
            <p className="text-sm text-gray-500 italic">
              Missions menées par les membres de l'équipe Link Agency, dans leurs fonctions actuelles
              ou précédentes. Détail des contextes et méthodologies disponible sur demande.
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
            {accounts.map((acc) => (
              <li key={acc} className="text-sm text-gray-700 border-b border-gray-100 pb-2">
                {acc}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA sobre */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-t border-gray-100 pt-10">
          <p className="text-base text-gray-700 max-w-xl">
            Vous souhaitez voir les études de cas détaillées (Subway, SGTM, Honda, Brainlyne…) ?
          </p>
          <div className="flex gap-3">
            <Link
              to="/etudes-de-cas"
              className="inline-flex items-center gap-2 bg-foreground text-white px-6 py-3 text-sm font-medium hover:bg-primary transition-colors group"
            >
              Voir les études de cas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-white transition-colors"
            >
              Échangeons
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
