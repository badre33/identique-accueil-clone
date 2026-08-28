import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";

const expertiseLinks = [
  { label: "Branding & identité", to: "/branding" },
  { label: "Stratégie de marque", to: "/conseil-strategique" },
  { label: "Social media", to: "/social-media" },
  { label: "Contenu digital", to: "/content-digital" },
  { label: "Marketing digital", to: "/marketing-digital" },
  { label: "Influence", to: "/influence-marketing" },
  { label: "Événementiel", to: "/evenementiel" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [expertisesOpen, setExpertisesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] border-b border-white/10 bg-black/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-3" aria-label="Link Agency — accueil">
          <img src="/assets/brand/link-agency-logo.png" alt="" className="h-8 w-8 invert sm:h-9 sm:w-9" width="36" height="36" />
          <span className="text-[13px] font-semibold uppercase tracking-[0.18em]">Link Agency</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          <Link to="/direction-marketing-externalisee" className="editorial-nav-link">Notre modèle</Link>
          <div className="relative" onMouseEnter={() => setExpertisesOpen(true)} onMouseLeave={() => setExpertisesOpen(false)}>
            <button className="editorial-nav-link flex items-center gap-1.5" onClick={() => setExpertisesOpen(!expertisesOpen)} aria-expanded={expertisesOpen}>
              Expertises <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", expertisesOpen && "rotate-180")} />
            </button>
            <div className={cn("absolute left-1/2 top-full w-72 -translate-x-1/2 pt-5 transition-all", expertisesOpen ? "visible opacity-100" : "invisible opacity-0")}>
              <div className="border border-white/10 bg-[#0a0a0a] p-3 shadow-2xl">
                {expertiseLinks.map((item) => (
                  <Link key={item.to} to={item.to} className="flex items-center justify-between border-b border-white/5 px-3 py-3 text-sm text-white/65 transition hover:bg-white/[0.04] hover:text-white last:border-0">
                    {item.label}<ArrowUpRight className="h-3.5 w-3.5 text-white/30" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/collaborations" className="editorial-nav-link">Missions</Link>
          <Link to="/blog" className="editorial-nav-link">Analyses</Link>
          <Link to="/inside-link" className="editorial-nav-link">Le cabinet</Link>
          <Link to="/contact" onClick={() => trackEvent("cta_contact_click", { category: "lead", label: "header" })} className="border border-[#c8102e] bg-[#c8102e] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#a90d26]">
            Parler d’un projet
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="flex min-h-11 min-w-11 items-center justify-center lg:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={cn("fixed inset-0 top-16 bg-black px-5 pb-10 pt-8 transition lg:hidden sm:top-20 sm:px-8", open ? "visible translate-x-0 opacity-100" : "invisible translate-x-full opacity-0")}>
        <nav className="mx-auto flex h-full max-w-xl flex-col overflow-y-auto" aria-label="Navigation mobile">
          <Link to="/direction-marketing-externalisee" className="mobile-editorial-link">Notre modèle</Link>
          <button onClick={() => setExpertisesOpen(!expertisesOpen)} className="mobile-editorial-link flex items-center justify-between text-left">
            Expertises <ChevronDown className={cn("h-5 w-5 transition-transform", expertisesOpen && "rotate-180")} />
          </button>
          {expertisesOpen && <div className="border-b border-white/10 py-2 pl-4">{expertiseLinks.map((item) => <Link key={item.to} to={item.to} className="block py-2.5 text-sm text-white/60">{item.label}</Link>)}</div>}
          <Link to="/collaborations" className="mobile-editorial-link">Missions</Link>
          <Link to="/blog" className="mobile-editorial-link">Analyses</Link>
          <Link to="/inside-link" className="mobile-editorial-link">Le cabinet</Link>
          <Link to="/contact" className="mt-8 flex items-center justify-between bg-[#c8102e] px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em]">Parler d’un projet <ArrowUpRight className="h-4 w-4" /></Link>
        </nav>
      </div>
    </header>
  );
};
