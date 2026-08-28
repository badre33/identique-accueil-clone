import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Collaboration {
  name: string;
  url: string;
  category: string;
  logo?: string;
  description: string;
  type: string;
  scope?: string;
}

interface CollaborationDetailsModalProps {
  collaboration: Collaboration | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CollaborationDetailsModal = ({ collaboration, isOpen, onClose }: CollaborationDetailsModalProps) => {
  if (!collaboration) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border border-black bg-[#f4f1eb] p-0 text-[#0a0a0a] shadow-2xl sm:rounded-none">
        <DialogHeader className="border-b border-black/15 p-6 pr-14 sm:p-9 sm:pr-16">
          <div className="flex items-start justify-between gap-6">
            <div><p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/40">{collaboration.scope || "Référence"}</p><DialogTitle className="mt-4 text-left text-3xl font-medium tracking-[-.045em] sm:text-5xl">{collaboration.name}</DialogTitle></div>
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-black/35">{collaboration.category}</span>
          </div>
        </DialogHeader>

        <div className="grid sm:grid-cols-[220px_1fr]">
          <div className="border-b border-black/15 bg-[#d8cec1] p-6 sm:border-b-0 sm:border-r sm:p-8">
            {collaboration.logo ? <div className="editorial-logo-tile flex min-h-32 items-center"><img src={collaboration.logo} alt={`Logo ${collaboration.name}`} className="max-h-16 max-w-[160px] object-contain" loading="lazy" decoding="async" /></div> : <div className="flex min-h-32 items-center text-2xl font-semibold tracking-[-.04em]">{collaboration.name}</div>}
            <div className="border-t border-black/15 pt-5"><p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-black/40">Secteur</p><p className="mt-2 text-sm">{collaboration.category}</p><p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.14em] text-black/40">Périmètre</p><p className="mt-2 text-sm">{collaboration.type}</p></div>
          </div>
          <div className="p-6 sm:p-9">
            <p className="editorial-eyebrow text-black/40">La mission</p>
            <p className="mt-7 text-lg leading-8 text-black/70">{collaboration.description}</p>
            <p className="mt-10 border-t border-black/15 pt-6 text-xs leading-6 text-black/45">Cette fiche présente uniquement le périmètre documenté. Les résultats chiffrés ne sont publiés que lorsqu’ils peuvent être vérifiés et partagés.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {collaboration.url !== "#" && <a href={collaboration.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 border border-black/25 px-5 text-xs font-semibold uppercase tracking-[0.12em] transition hover:border-black">Voir la marque <ArrowUpRight className="h-4 w-4" /></a>}
              <a href="https://wa.me/212699024526?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20un%20besoin%20marketing" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 bg-[#765fc4] px-5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#6751b7]">Échanger sur un besoin <ArrowUpRight className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
