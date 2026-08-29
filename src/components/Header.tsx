import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL, WHATSAPP_URL_EN } from "@/config/contact";
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

interface HeaderProps {
  language?: "fr" | "en";
}

export const Header = ({ language }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [expertisesOpen, setExpertisesOpen] = useState(false);
  const location = useLocation();
  const isEnglish = language === "en" || location.pathname.startsWith("/en");
  const isLight = location.pathname === "/" || isEnglish;
  const navLinkClass = cn("editorial-nav-link", isLight && "!text-black/60 hover:!text-black");
  const homePath = isEnglish ? "/en/marketing-agency-morocco" : "/";
  const whatsappUrl = isEnglish ? WHATSAPP_URL_EN : WHATSAPP_URL;

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-[9999] border-b backdrop-blur-xl", isLight ? "border-black/15 bg-[#f4f1eb]/95 text-black" : "border-white/10 bg-black/90 text-white")}>
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
        <Link to={homePath} className="flex items-center gap-3" aria-label={isEnglish ? "Link Agency, English home" : "Link Agency, accueil"}>
          <img src="/assets/brand/link-agency-logo.png" alt="" className={cn("h-8 w-8 sm:h-9 sm:w-9", !isLight && "invert")} width="36" height="36" />
          <span className="text-[13px] font-semibold uppercase tracking-[0.18em]">Link Agency</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label={isEnglish ? "Main navigation" : "Navigation principale"}>
          {isEnglish ? <>
            <Link to="/en/marketing-agency-morocco#model" className={navLinkClass}>Our model</Link>
            <Link to="/en/marketing-agency-morocco#services" className={navLinkClass}>Services</Link>
            <Link to="/en/marketing-agency-morocco#work" className={navLinkClass}>Selected work</Link>
            <Link to="/en/marketing-agency-morocco#process" className={navLinkClass}>Process</Link>
          </> : <>
            <Link to="/direction-marketing-externalisee" className={navLinkClass}>Notre modèle</Link>
            <div className="relative" onMouseEnter={() => setExpertisesOpen(true)} onMouseLeave={() => setExpertisesOpen(false)}>
              <button className={cn(navLinkClass, "flex items-center gap-1.5")} onClick={() => setExpertisesOpen(!expertisesOpen)} aria-expanded={expertisesOpen}>
                Expertises <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", expertisesOpen && "rotate-180")} />
              </button>
              <div className={cn("absolute left-1/2 top-full w-72 -translate-x-1/2 pt-5 transition-all", expertisesOpen ? "visible opacity-100" : "invisible opacity-0")}>
                <div className={cn("border p-3 shadow-2xl", isLight ? "border-black/15 bg-[#f4f1eb]" : "border-white/10 bg-[#0a0a0a]")}>
                  {expertiseLinks.map((item) => (
                    <Link key={item.to} to={item.to} className={cn("flex items-center justify-between border-b px-3 py-3 text-sm transition last:border-0", isLight ? "border-black/10 text-black/60 hover:bg-black/[0.04] hover:text-black" : "border-white/5 text-white/65 hover:bg-white/[0.04] hover:text-white")}>
                      {item.label}<ArrowUpRight className={cn("h-3.5 w-3.5", isLight ? "text-black/30" : "text-white/30")} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/collaborations" className={navLinkClass}>Missions</Link>
            <Link to="/blog" className={navLinkClass}>Analyses</Link>
            <Link to="/inside-link" className={navLinkClass}>Le cabinet</Link>
          </>}
          <Link to={isEnglish ? "/" : "/en/marketing-agency-morocco"} className={navLinkClass} aria-label={isEnglish ? "Voir le site en français" : "View the website in English"}>{isEnglish ? "FR" : "EN"}</Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(isEnglish ? "header_en" : "header")} className="border border-[#765fc4] bg-[#765fc4] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:border-[#6751b7] hover:bg-[#6751b7]">
            {isEnglish ? "Discuss your brief" : "Parler sur WhatsApp"}
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="flex min-h-11 min-w-11 items-center justify-center lg:hidden" aria-label={isEnglish ? (open ? "Close menu" : "Open menu") : (open ? "Fermer le menu" : "Ouvrir le menu")} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={cn("absolute inset-x-0 top-full h-[calc(100dvh-4rem)] px-5 pb-10 pt-8 transition lg:hidden sm:h-[calc(100dvh-5rem)] sm:px-8", isLight ? "bg-[#f4f1eb] text-black" : "bg-black text-white", open ? "visible translate-x-0 opacity-100" : "invisible translate-x-full opacity-0")}>
        <nav className="mx-auto flex h-full max-w-xl flex-col overflow-y-auto" aria-label={isEnglish ? "Mobile navigation" : "Navigation mobile"}>
          {isEnglish ? <>
            <Link to="/en/marketing-agency-morocco#model" className="mobile-editorial-link !border-black/15 !text-black">Our model</Link>
            <Link to="/en/marketing-agency-morocco#services" className="mobile-editorial-link !border-black/15 !text-black">Services</Link>
            <Link to="/en/marketing-agency-morocco#work" className="mobile-editorial-link !border-black/15 !text-black">Selected work</Link>
            <Link to="/en/marketing-agency-morocco#process" className="mobile-editorial-link !border-black/15 !text-black">Process</Link>
          </> : <>
            <Link to="/direction-marketing-externalisee" className={cn("mobile-editorial-link", isLight && "!border-black/15 !text-black")}>Notre modèle</Link>
            <button onClick={() => setExpertisesOpen(!expertisesOpen)} className={cn("mobile-editorial-link flex items-center justify-between text-left", isLight && "!border-black/15 !text-black")}>
              Expertises <ChevronDown className={cn("h-5 w-5 transition-transform", expertisesOpen && "rotate-180")} />
            </button>
            {expertisesOpen && <div className={cn("border-b py-2 pl-4", isLight ? "border-black/15" : "border-white/10")}>{expertiseLinks.map((item) => <Link key={item.to} to={item.to} className={cn("block py-2.5 text-sm", isLight ? "text-black/60" : "text-white/60")}>{item.label}</Link>)}</div>}
            <Link to="/collaborations" className={cn("mobile-editorial-link", isLight && "!border-black/15 !text-black")}>Missions</Link>
            <Link to="/blog" className={cn("mobile-editorial-link", isLight && "!border-black/15 !text-black")}>Analyses</Link>
            <Link to="/inside-link" className={cn("mobile-editorial-link", isLight && "!border-black/15 !text-black")}>Le cabinet</Link>
          </>}
          <Link to={isEnglish ? "/" : "/en/marketing-agency-morocco"} className={cn("mobile-editorial-link", isLight && "!border-black/15 !text-black")}>{isEnglish ? "Français" : "English"}</Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(isEnglish ? "header_mobile_en" : "header_mobile")} className="mt-8 flex items-center justify-between bg-[#765fc4] px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">{isEnglish ? "Discuss your brief" : "Parler sur WhatsApp"} <ArrowUpRight className="h-4 w-4" /></a>
        </nav>
      </div>
    </header>
  );
};
