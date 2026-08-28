import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/config/contact";
import { trackWhatsAppClick } from "@/lib/tracking";

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
  const isHome = location.pathname === "/";
  const navLinkClass = cn("editorial-nav-link", isHome && "!text-black/60 hover:!text-black");

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-[9999] border-b backdrop-blur-xl", isHome ? "border-black/15 bg-[#f4f1eb]/95 text-black" : "border-white/10 bg-black/90 text-white")}>
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-3" aria-label="Link Agency, accueil">
          <img src="/assets/brand/link-agency-logo.png" alt="" className={cn("h-8 w-8 sm:h-9 sm:w-9", !isHome && "invert")} width="36" height="36" />
          <span className="text-[13px] font-semibold uppercase tracking-[0.18em]">Link Agency</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          <Link to="/direction-marketing-externalisee" className={navLinkClass}>Notre modèle</Link>
          <div className="relative" onMouseEnter={() => setExpertisesOpen(true)} onMouseLeave={() => setExpertisesOpen(false)}>
            <button className={cn(navLinkClass, "flex items-center gap-1.5")} onClick={() => setExpertisesOpen(!expertisesOpen)} aria-expanded={expertisesOpen}>
              Expertises <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", expertisesOpen && "rotate-180")} />
            </button>
            <div className={cn("absolute left-1/2 top-full w-72 -translate-x-1/2 pt-5 transition-all", expertisesOpen ? "visible opacity-100" : "invisible opacity-0")}>
              <div className={cn("border p-3 shadow-2xl", isHome ? "border-black/15 bg-[#f4f1eb]" : "border-white/10 bg-[#0a0a0a]")}>
                {expertiseLinks.map((item) => (
                  <Link key={item.to} to={item.to} className={cn("flex items-center justify-between border-b px-3 py-3 text-sm transition last:border-0", isHome ? "border-black/10 text-black/60 hover:bg-black/[0.04] hover:text-black" : "border-white/5 text-white/65 hover:bg-white/[0.04] hover:text-white")}>
                    {item.label}<ArrowUpRight className="h-3.5 w-3.5 text-white/30" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/collaborations" className={navLinkClass}>Missions</Link>
          <Link to="/blog" className={navLinkClass}>Analyses</Link>
          <Link to="/inside-link" className={navLinkClass}>Le cabinet</Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("header")} className="border border-[#765fc4] bg-[#765fc4] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:border-[#6751b7] hover:bg-[#6751b7]">
            Parler sur WhatsApp
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="flex min-h-11 min-w-11 items-center justify-center lg:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={cn("fixed inset-0 top-16 px-5 pb-10 pt-8 transition lg:hidden sm:top-20 sm:px-8", isHome ? "bg-[#f4f1eb] text-black" : "bg-black text-white", open ? "visible translate-x-0 opacity-100" : "invisible translate-x-full opacity-0")}>
        <nav className="mx-auto flex h-full max-w-xl flex-col overflow-y-auto" aria-label="Navigation mobile">
          <Link to="/direction-marketing-externalisee" className={cn("mobile-editorial-link", isHome && "!border-black/15 !text-black")}>Notre modèle</Link>
          <button onClick={() => setExpertisesOpen(!expertisesOpen)} className={cn("mobile-editorial-link flex items-center justify-between text-left", isHome && "!border-black/15 !text-black")}>
            Expertises <ChevronDown className={cn("h-5 w-5 transition-transform", expertisesOpen && "rotate-180")} />
          </button>
          {expertisesOpen && <div className={cn("border-b py-2 pl-4", isHome ? "border-black/15" : "border-white/10")}>{expertiseLinks.map((item) => <Link key={item.to} to={item.to} className={cn("block py-2.5 text-sm", isHome ? "text-black/60" : "text-white/60")}>{item.label}</Link>)}</div>}
          <Link to="/collaborations" className={cn("mobile-editorial-link", isHome && "!border-black/15 !text-black")}>Missions</Link>
          <Link to="/blog" className={cn("mobile-editorial-link", isHome && "!border-black/15 !text-black")}>Analyses</Link>
          <Link to="/inside-link" className={cn("mobile-editorial-link", isHome && "!border-black/15 !text-black")}>Le cabinet</Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("header_mobile")} className="mt-8 flex items-center justify-between bg-[#765fc4] px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">Parler sur WhatsApp <ArrowUpRight className="h-4 w-4" /></a>
        </nav>
      </div>
    </header>
  );
};
