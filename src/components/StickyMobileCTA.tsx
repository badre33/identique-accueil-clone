import { MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_URL, EMAIL_URL } from "@/config/contact";
import { trackWhatsAppClick, trackEmailClick } from "@/lib/tracking";

export const StickyMobileCTA = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9990] flex gap-2 border-t border-white/10 bg-black/95 px-3 py-2.5 backdrop-blur-lg lg:hidden"
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("sticky_mobile")}
        className="inline-flex flex-1 items-center justify-center gap-2 bg-[#c8102e] px-4 py-3 text-sm font-semibold text-white transition-colors active:bg-[#a90d26]"
        aria-label="Contacter Link Agency sur WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>
      <a
        href={EMAIL_URL}
        onClick={() => trackEmailClick("sticky_mobile")}
        className="inline-flex items-center justify-center border border-white/20 px-4 py-3 text-sm font-semibold text-white transition-colors active:bg-white/10"
        aria-label="Contacter Link Agency par email"
      >
        <Mail className="w-4 h-4" />
      </a>
    </div>
  );
};
