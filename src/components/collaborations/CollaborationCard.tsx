import { ArrowUpRight } from "lucide-react";

interface Collaboration {
  name: string;
  url: string;
  category: string;
  logo?: string;
  description: string;
  year: string;
  type: string;
  scope?: string;
}

interface CollaborationCardProps {
  collaboration: Collaboration;
  index: number;
  onClick?: () => void;
}

export const CollaborationCard = ({ collaboration, index, onClick }: CollaborationCardProps) => (
  <article
    className="group relative flex min-h-[430px] cursor-pointer flex-col justify-between border-b border-r border-black/20 bg-[#f4f1eb]/35 p-7 transition-colors hover:bg-[#f4f1eb]"
    onClick={onClick}
  >
    <div>
      <div className="flex items-start justify-between gap-5 border-b border-black/15 pb-5">
        <span className="font-mono text-[10px] text-black/35">{String(index + 1).padStart(2, "0")}</span>
        <span className="max-w-[180px] text-right text-[9px] font-semibold uppercase tracking-[0.14em] text-black/45">{collaboration.scope}</span>
      </div>
      <div className="editorial-logo-tile mt-8 flex h-16 items-center justify-start">
        {collaboration.logo ? <img src={collaboration.logo} alt={`Logo ${collaboration.name}`} className="max-h-12 max-w-[170px] object-contain object-left" loading="lazy" decoding="async" onError={(event) => { event.currentTarget.style.display = "none"; }} /> : <span className="text-2xl font-semibold tracking-[-.04em]">{collaboration.name}</span>}
      </div>
      <h3 className="mt-7 text-2xl font-medium tracking-[-.04em]">{collaboration.name}</h3>
      <p className="mt-5 text-sm leading-7 text-black/60">{collaboration.description}</p>
    </div>
    <div className="mt-8 flex items-end justify-between gap-5 border-t border-black/15 pt-5">
      <div><span className="block text-[9px] font-semibold uppercase tracking-[0.13em] text-black/40">{collaboration.category} · {collaboration.year}</span><span className="mt-2 block text-xs font-medium">{collaboration.type}</span></div>
      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
    </div>
  </article>
);
