import {
  LineChart,
  Target,
  Search,
  Palette,
  Code2,
  Megaphone,
  PenTool,
  Calendar,
  BarChart3,
  Users,
  Sparkles,
} from "lucide-react";

type Member = {
  role: string;
  initials: string;
  focus: string;
  expertise: string;
  experience: string;
  tools: string[];
  methods: string[];
  Icon: any;
  accent: string;
};

const members: Member[] = [
  {
    role: "Lead Stratégie & Pilotage",
    initials: "S.M.",
    focus: "Direction des missions corporate",
    expertise:
      "Cadrage stratégique de dispositifs complexes, pilotage P&L digital, orchestration multi-pôles. Lecture business, alignement marque-performance et arbitrage de portefeuille de campagnes pour des comptes en environnement régulé.",
    experience: "14 ans · Ex-Salesforce SVP Sales · 4 ans Oracle comptes financiers",
    tools: ["Salesforce", "Notion", "Looker", "Tableau"],
    methods: ["Diagnostic 360°", "RevOps", "OKR", "Attribution multi-touch"],
    Icon: LineChart,
    accent: "from-slate-700 to-slate-900",
  },
  {
    role: "Lead Acquisition Payante",
    initials: "L.A.",
    focus: "Performance media & lead generation",
    expertise:
      "Architecture et pilotage de campagnes paid sur Meta, Google, TikTok, LinkedIn. Lead scoring, qualification, optimisation CPL/ROAS. Comptes pilotés : Honda (Tokyo Days 2025 — CPL 4,10 DH), Pharma 5, Mutandis, Aiguebelle.",
    experience: "9 ans · Médias digital MENA · +600 campagnes pilotées",
    tools: ["Meta Ads Manager", "Google Ads", "TikTok Ads", "LinkedIn Campaign Manager"],
    methods: ["Lead scoring HubSpot", "A/B testing créatif", "Pixel auditing"],
    Icon: Target,
    accent: "from-blue-500 to-indigo-600",
  },
  {
    role: "Lead SEO & Contenu",
    initials: "K.B.",
    focus: "Référencement bilingue FR · AR · Darija",
    expertise:
      "Stratégie de contenu pilier, SEO technique, audit Core Web Vitals, optimisation E-E-A-T. Spécialiste rare du SEO arabe et Darija. Cas pilier : +60 % de croissance organique sur 12 mois pour Brainlyne (US).",
    experience: "8 ans · +340 % trafic organique moyen · 25+ projets délivrés",
    tools: ["Semrush", "Ahrefs", "Screaming Frog", "Search Console"],
    methods: ["Topic clustering", "Cocon sémantique", "GEO (AI Overviews)"],
    Icon: Search,
    accent: "from-green-500 to-emerald-600",
  },
  {
    role: "Direction Artistique & Branding",
    initials: "N.E.",
    focus: "Identité visuelle & systèmes de design",
    expertise:
      "Création d'identités de marque corporate : logos, systèmes typographiques, charte d'application, motion design, design system. Comptes pilotés (en mission ou en agence précédente) : Attijari Wafabank, AXA Assurance Maroc, RMA, Fondation Al Mada, Orange Maroc, Ford.",
    experience: "11 ans · Direction artistique secteurs financier et assurance",
    tools: ["Figma", "Adobe Suite", "After Effects", "Cinema 4D"],
    methods: ["Design tokens", "Brand systems", "Motion guidelines"],
    Icon: Palette,
    accent: "from-purple-500 to-pink-500",
  },
  {
    role: "Lead Stratégie Éditoriale",
    initials: "I.A.",
    focus: "Copywriting corporate & E-réputation",
    expertise:
      "Plateformes éditoriales, charte de voix, rédaction de tribunes de dirigeants, gestion de crise réputationnelle. Production de contenus institutionnels pour groupes financiers et industriels.",
    experience: "10 ans · Pôle éditorial senior · Stratégies AXA, Attijari Wafabank, Fondation Al Mada",
    tools: ["BuzzSumo", "Talkwalker", "Notion", "WordPress"],
    methods: ["Tonality framework", "Editorial planning", "Crisis playbook"],
    Icon: PenTool,
    accent: "from-amber-500 to-orange-500",
  },
  {
    role: "Lead Social Media",
    initials: "Y.T.",
    focus: "Community management & paid social",
    expertise:
      "Stratégie sociale FR/AR/Darija, modération de marques exposées, paid social cross-plateforme, sourcing créateurs. Pilotage d'audiences cumulées de 2M+ pour comptes assurance & banque.",
    experience: "7 ans · 200K+ communautés gérées · Reels & TikTok natifs",
    tools: ["Sprout Social", "Meta Business Suite", "CapCut", "Canva Pro"],
    methods: ["Calendriers éditoriaux", "UGC management", "Social listening"],
    Icon: Megaphone,
    accent: "from-rose-500 to-red-500",
  },
  {
    role: "Lead Événementiel Corporate",
    initials: "H.S.",
    focus: "Événements B2B & activations",
    expertise:
      "Conception et production d'événements corporate : lancements produit, conventions, séminaires, soirées VIP, salons. Coordination logistique, scénographie, captation, amplification digitale.",
    experience: "12 ans · 200+ événements livrés · MICE Maroc & France",
    tools: ["Eventbrite", "Adobe Premiere", "Notion", "Outils logistique propres"],
    methods: ["Production en cellule", "Backstage protocols", "Amplification digitale"],
    Icon: Calendar,
    accent: "from-cyan-500 to-blue-500",
  },
  {
    role: "Lead Data & Analytics",
    initials: "A.R.",
    focus: "BI, attribution & reporting",
    expertise:
      "Modélisation d'attribution multi-touch, tableaux de bord exécutifs, audit de performance, intégration GA4 + CRM. Standardisation du reporting pour gain de 40 % de temps sur les comptes pilotés.",
    experience: "6 ans · Power BI / SQL / Python · GA4 certifié",
    tools: ["Power BI", "GA4", "BigQuery", "Looker Studio", "Python"],
    methods: ["Attribution modeling", "Cohort analysis", "Funnel analysis"],
    Icon: BarChart3,
    accent: "from-teal-500 to-cyan-500",
  },
  {
    role: "Lead UX/UI & CRO",
    initials: "M.B.",
    focus: "Conversion & expérience utilisateur",
    expertise:
      "Audit UX, conception de parcours, A/B testing systématique, design system, optimisation des Core Web Vitals. Spécialiste tunnels e-commerce et lead generation.",
    experience: "8 ans · Hotjar / Figma / VWO · Sites à 100K+ sessions/mois",
    tools: ["Figma", "Hotjar", "VWO", "Lighthouse", "Maze"],
    methods: ["Heuristic audit", "5-second tests", "Funnel analytics"],
    Icon: Code2,
    accent: "from-violet-500 to-purple-500",
  },
  {
    role: "Lead CRM & Marketing Automation",
    initials: "F.E.",
    focus: "Parcours automatisés & lifecycle",
    expertise:
      "Parcours Welcome / Nurturing / Winback. Activation et réactivation de bases CRM. Welcome Pack 25-30 % d'ouverture · Winback 18-22 % · réactivation +25 % d'une base CRM.",
    experience: "9 ans · Ex-BMW Group Financial Services",
    tools: ["HubSpot", "Salesforce Marketing Cloud", "Sarbacane", "Mailchimp"],
    methods: ["Lifecycle marketing", "Segmentation RFM", "Drip campaigns"],
    Icon: Users,
    accent: "from-fuchsia-500 to-pink-500",
  },
];

export const TeamShowcase = () => {
  return (
    <section
      id="team"
      aria-labelledby="team-title"
      className="py-24 px-6 sm:px-8 lg:px-16 bg-white border-y border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-6">
            <Sparkles className="w-4 h-4 text-primary" aria-hidden />
            <span>L'équipe Link Agency</span>
          </div>
          <h2
            id="team-title"
            className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight"
          >
            Une équipe de{" "}
            <span className="font-medium text-primary">10 pôles d'expertise</span>{" "}
            pilotée par Badreddine Harkaoui.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Pas une agence à têtes de gondole : une équipe de spécialistes seniors
            qui interviennent par discipline. Chaque pôle engage un track record
            vérifiable et travaille sur des dispositifs à fort enjeu pour des
            marques marocaines et internationales.
          </p>
          <p className="mt-4 text-sm text-gray-500 italic">
            Nous protégeons l'identité de nos équipiers pour préserver leur
            concentration et éviter le démarchage sauvage. Les initiales et
            track records sont vérifiables sur demande, sous NDA.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {members.map((m) => (
            <article
              key={m.role}
              className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.accent} flex items-center justify-center text-white font-bold text-base shadow-md group-hover:scale-110 transition-transform duration-500`}
                  aria-hidden
                >
                  {m.initials}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground leading-tight mb-1">
                    {m.role}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {m.focus}
                  </p>
                </div>
                <m.Icon
                  className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300 mt-1"
                  aria-hidden
                />
              </div>

              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {m.expertise}
              </p>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Outils maîtrisés</p>
                  <div className="flex flex-wrap gap-1.5">
                    {m.tools.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Méthodes</p>
                  <div className="flex flex-wrap gap-1.5">
                    {m.methods.map((mt) => (
                      <span key={mt} className="text-[11px] px-2 py-0.5 bg-white border border-gray-200 text-gray-600 rounded-md">{mt}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs font-medium text-gray-500 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
                  {m.experience}
                </p>
              </div>
            </article>
          ))}
        </div>

        <footer className="bg-black text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400 mb-3">
              Comment travaille l'équipe
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed">
              Chaque mission est constituée d'un noyau dédié de 3 à 6 pôles,
              piloté par Badreddine, et adapté à la nature du dispositif —
              branding, performance media, événementiel ou stratégie 360°.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-all font-semibold text-sm shadow-lg"
          >
            Échanger sur un projet
            <span aria-hidden>→</span>
          </a>
        </footer>
      </div>
    </section>
  );
};

export default TeamShowcase;
