import { useState } from "react";
import { Mail, MessageCircle, Phone, X } from "lucide-react";
import { EMAIL_URL, WHATSAPP_URL } from "@/config/contact";
import { trackEmailClick, trackWhatsAppClick } from "@/lib/tracking";

export const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-[9980] hidden sm:block lg:bottom-6 lg:right-6">
      {isOpen && (
        <div className="mb-3 w-[310px] border border-black bg-[#f4f1eb] p-5 text-[#0a0a0a] shadow-[10px_10px_0_rgba(10,10,10,.16)]">
          <div className="flex items-start justify-between gap-6 border-b border-black/15 pb-4">
            <div><p className="text-[9px] font-semibold uppercase tracking-[.16em] text-black/40">Contact direct</p><h3 className="mt-2 text-xl font-medium tracking-[-.035em]">Parlons de votre projet.</h3></div>
            <button onClick={() => setIsOpen(false)} aria-label="Fermer les options de contact" className="flex h-9 w-9 shrink-0 items-center justify-center border border-black/15 transition hover:border-black"><X className="h-4 w-4" /></button>
          </div>

          <p className="mt-4 text-xs leading-6 text-black/55">WhatsApp est le canal le plus direct. Le téléphone et l’email restent disponibles si vous les préférez.</p>
          <div className="mt-5 space-y-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("floating_widget")} className="flex min-h-12 items-center justify-between bg-[#765fc4] px-4 text-xs font-semibold uppercase tracking-[.11em] text-white transition hover:bg-[#6751b7]"><span className="flex items-center gap-3"><MessageCircle className="h-4 w-4" />WhatsApp</span><span>↗</span></a>
            <a href="tel:+212699024526" className="flex min-h-12 items-center gap-3 border border-black/20 px-4 text-xs font-semibold uppercase tracking-[.11em] transition hover:border-black"><Phone className="h-4 w-4" />Appeler</a>
            <a href={EMAIL_URL} onClick={() => trackEmailClick("floating_widget")} className="flex min-h-12 items-center gap-3 border border-black/20 px-4 text-xs font-semibold uppercase tracking-[.11em] transition hover:border-black"><Mail className="h-4 w-4" />Envoyer un email</a>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Fermer les options de contact" : "Ouvrir les options de contact"} className="ml-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#111827] text-white shadow-xl transition hover:bg-[#765fc4]">
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  );
};
