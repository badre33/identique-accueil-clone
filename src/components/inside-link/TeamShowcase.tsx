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
  Icon: any;
  accent: string;
};

const members: Member[] = [
  {
    role: "Lead Stratégie & Pilotage",
    initials: "S.M.",
    focus: "Direction des missions corporate",
    expertise:
      "Pilotage P&L digital, attribution multi-touch, orchestration RevOps. Cadrage de dispositifs complexes pour banques, assurances et industriels.",
    experience: "14 ans · Ex-Salesforce SVP Sales",
    Icon: LineChart,
    accent: "from-slate-700 to-slate-900",
  },
  {
    role: "Lead Acquisition Payante",
    initials: "L.A.",
    focus: "Performance media & lead generation",
    expertise:
      "Meta · Google · TikTok · LinkedIn Ads. Lead scoring qualifié, optimisation CPL/ROAS pour comptes B2B exigeants.",
    experience: "9 ans · Médias digital MENA",
    Icon: Target,
    accent: "from-blue-500 to-indigo-600",
  },
  {
    role: "Lead SEO & Contenu",
    initials: "K.B.",
    focus: "Référencement bilingue FR · AR · Darija",
    expertise:
      "Stratégie de contenu pilier, SEO technique, content marketing AR/Darija. 25+ projets délivrés au Maroc et international.",
    experience: "8 ans · +340% trafic organique moyen",
    Icon: Search,
    accent: "from-green-500 to-emerald-600",
  },
  {
    role: "Direction Artistique",
    initials: "N.E.",
    focus: "Branding & identité visuelle",
    expertise:
      "Direction artistique de marques corporate : logos, systèmes d'identité, motion design, design system. Spécialiste secteurs financier et assurance.",
    experience: "11 ans · Comptes pilotés : Attijari, AXA, RMA",
    Icon: Palette,
    accent: "from-purple-500 to-pink-500",
  },
  {
    role: "Lead Communication Corporate",
    initials: "I.A.",
    focus: "Stratégie éditoriale & E-réputation",
    expertise:
      "Stratégie éditoriale, copywriting corporate, gestion de crise, e-réputation. Production de contenus institutionnels pour grands comptes.",
    experience: "10 ans · Pôle éditorial senior",
    Icon: PenTool,
    accent: "from-amber-500 to-orange-500",
  },
  {
    role: "Lead Social Media",
    initials: "Y.T.",
    focus: "Community management & paid social",
    expertise:
      "Stratégie sociale FR/AR/Darija, community management, modération de marques exposées, paid social cross-plateforme.",
    experience: "7 ans · 200K+ communautés gérées",
    Icon: Megaphone,
    accent: "from-rose-500 to-red-500",
  },
  {
    role: "Lead Événementiel Corporate",
    initials: "H.S.",
    focus: "Événements B2B & activations",
    expertise:
      "Conception et production d'événements corporate : lancements, séminaires, soirées VIP, salons. Coordination logistique et créative.",
    experience: "12 ans · 200+ événements livrés",
    Icon: Calendar,
    accent: "from-cyan-500 to-blue-500",
  },
  {
    role: "Lead Data & Analytics",
    initials: "A.R.",
    focus: "BI, attribution & reporting",
    expertise:
      "Power BI · SQL · Python · GA4. Modélisation d'attribution multi-touch, tableaux de bord exécutifs, audit de performance.",
    experience: "6 ans · −40% temps de reporting",
    Icon: BarChart3,
    accent: "from-teal-500 to-cyan-500",
  },
  {
    role: "Lead UX/UI & CRO",
    initials: "M.B.",
    focus: "Conversion & expérience utilisateur",
    expertise:
      "Audit UX, A/B testing systématique, design system, optimisation de tunnels de conversion. Spécialiste e-commerce et lead generation.",
    experience: "8 ans · Hotjar · Figma · Core Web Vitals",
    Icon: Code2,
    accent: "from-violet-500 to-purple-500",
  },
  {
    role: "Lead CRM & Marketing Automation",
    initials: "F.E.",
    focus: "Parcours automatisés & lifecycle",
    expertise:
      "HubSpot · Salesforce · Sarbacane. Parcours Welcome / Nurturing / Winback. Activation et réactivation de bases CRM.",
    experience: "9 ans · Ex-BMW Group Financial Services",
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
