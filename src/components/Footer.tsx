import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_URL } from "@/config/contact";
import { trackWhatsAppClick } from "@/lib/tracking";

const directionLinks = [
  ["Direction externalisée", "/direction-marketing-externalisee"],
  ["Branding & identité", "/branding"],
  ["Conseil stratégique", "/conseil-strategique"],
  ["Personal branding", "/personal-branding"],
];

const performanceLinks = [
  ["Marketing digital", "/marketing-digital"],
  ["Social media", "/social-media"],
  ["Contenu digital", "/content-digital"],
  ["Développement web", "/developpement-web"],
  ["Analytics", "/analytics"],
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const openCookieSettings = () => window.dispatchEvent(new Event("linkagency:open-cookie-settings"));

  return (
    <footer className="bg-[#d8cec1] pb-24 text-[#0a0a0a] lg:pb-0">
      <div className="overflow-hidden border-b border-black/20 px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] items-end justify-between gap-8">
          <p className="text-[clamp(4rem,12vw,12rem)] font-semibold uppercase leading-[.7] tracking-[-.09em]">Link<span className="text-[#765fc4]">©</span></p>
          <p className="hidden pb-1 text-[10px] font-semibold uppercase tracking-[.2em] text-black/45 sm:block">Casablanca · Maroc · International</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-12 border-b border-black/20 pb-14 lg:grid-cols-[1.4fr_.75fr_.75fr_1fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#6751b7]">Direction de marque</p>
            <h2 className="mt-7 max-w-xl text-3xl font-medium leading-[1.02] tracking-[-.045em] sm:text-4xl">Une direction claire derrière les marques ambitieuses.</h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-black/60">Stratégie, image, contenus et performance sous un même pilotage senior, au Maroc et à l’international.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("footer_brand")} className="mt-8 inline-flex min-h-12 items-center gap-3 bg-[#765fc4] px-5 text-xs font-semibold uppercase tracking-[.14em] text-white transition hover:bg-[#6751b7]"><MessageCircle className="h-4 w-4" />Parler d’un projet <ArrowUpRight className="h-4 w-4" /></a>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.18em] text-black/45">Direction & marque</h3>
            <ul className="mt-6 space-y-3">{directionLinks.map(([label, to]) => <li key={to}><Link to={to} className="text-sm text-black/65 transition hover:text-black">{label}</Link></li>)}</ul>
            <h3 className="mt-9 text-[10px] font-bold uppercase tracking-[.18em] text-black/45">Activation</h3>
            <ul className="mt-6 space-y-3"><li><Link to="/evenementiel" className="text-sm text-black/65 transition hover:text-black">Événementiel corporate</Link></li><li><Link to="/influence-marketing" className="text-sm text-black/65 transition hover:text-black">Influence marketing</Link></li></ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.18em] text-black/45">Performance</h3>
            <ul className="mt-6 space-y-3">{performanceLinks.map(([label, to]) => <li key={to}><Link to={to} className="text-sm text-black/65 transition hover:text-black">{label}</Link></li>)}</ul>
            <h3 className="mt-9 text-[10px] font-bold uppercase tracking-[.18em] text-black/45">Découvrir</h3>
            <ul className="mt-6 space-y-3"><li><Link to="/collaborations" className="text-sm text-black/65 transition hover:text-black">Missions</Link></li><li><Link to="/secteurs" className="text-sm text-black/65 transition hover:text-black">Secteurs</Link></li><li><Link to="/blog" className="text-sm text-black/65 transition hover:text-black">Analyses</Link></li></ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.18em] text-black/45">Contact direct</h3>
            <div className="mt-6 space-y-4">
              <a href="https://maps.app.goo.gl/q3xLY5gy8cY6U6Tj6" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-black/65 transition hover:text-black"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />Casablanca · Marrakech · Maroc</a>
              <a href="tel:+212699024526" className="flex items-center gap-3 text-sm text-black/65 transition hover:text-black"><Phone className="h-4 w-4 shrink-0" />+212 6 99 02 45 26</a>
              <a href="mailto:bharkaoui@linkagency.ma" className="flex items-center gap-3 break-all text-sm text-black/65 transition hover:text-black"><Mail className="h-4 w-4 shrink-0" />bharkaoui@linkagency.ma</a>
            </div>
            <div className="mt-10 border-l-2 border-[#c86b4a] pl-4"><p className="text-xs leading-6 text-black/55">Les comptes clés sont directement pilotés par le fondateur.</p></div>
          </div>
        </div>

        <details className="group border-b border-black/20 py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between text-[10px] font-bold uppercase tracking-[.18em] text-black/45"><span>Index des expertises et implantations</span><span className="text-base transition-transform group-open:rotate-45">+</span></summary>
          <div className="grid gap-5 pt-6 text-xs leading-6 text-black/55 md:grid-cols-2">
            <p><strong className="text-black/75">Link Agency</strong>, agence de communication à Casablanca et agence marketing digital au Maroc, accompagne les directions marketing en branding, social media, production de contenus, SEO, campagnes Meta et Google Ads et événementiel corporate.</p>
            <p>Nous intervenons auprès d’organisations des secteurs banque, assurance, retail, e-commerce, industrie et services B2B, avec des contenus bilingues français, arabe et darija et un pilotage adapté à Casablanca, Rabat et Marrakech.</p>
          </div>
        </details>

        <div className="flex flex-col justify-between gap-5 pt-6 text-[10px] font-semibold uppercase tracking-[.14em] text-black/40 lg:flex-row lg:items-center"><p>© {currentYear} Link Agency · HARKA STRATEGY CONSULTING SARLAU</p><nav aria-label="Liens juridiques" className="flex flex-wrap gap-x-5 gap-y-3"><Link to="/mentions-legales" className="transition hover:text-black">Mentions légales</Link><Link to="/politique-de-confidentialite" className="transition hover:text-black">Confidentialité</Link><Link to="/politique-de-cookies" className="transition hover:text-black">Cookies</Link><button type="button" onClick={openCookieSettings} className="text-left transition hover:text-black">Gérer les cookies</button></nav><p>Stratégie. Contenu. Performance.</p></div>
      </div>
    </footer>
  );
};
