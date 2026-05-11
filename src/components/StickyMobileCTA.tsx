import { MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_URL, EMAIL_URL } from "@/config/contact";
import { trackWhatsAppClick, trackEmailClick } from "@/lib/tracking";

export const StickyMobileCTA = () => {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[9990] bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-2.5 flex gap-2"
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("sticky_mobile")}
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white text-sm font-semibold shadow-md active:scale-95 transition-transform"
        aria-label="Contacter Link Agency sur WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>
      <a
        href={EMAIL_URL}
        onClick={() => trackEmailClick("sticky_mobile")}
        className="inline-flex items-center justify-center px-4 py-3 rounded-xl border border-gray-300 text-gray-800 text-sm font-semibold active:scale-95 transition-transform"
        aria-label="Contacter Link Agency par email"
      >
        <Mail className="w-4 h-4" />
      </a>
    </div>
  );
};
