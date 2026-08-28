import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";

const contactDetails = [
  { label: "Téléphone", value: "+212 699 024 526", href: "tel:+212699024526", icon: Phone },
  { label: "Email", value: "bharkaoui@linkagency.ma", href: "mailto:bharkaoui@linkagency.ma", icon: Mail },
  { label: "Présence", value: "Maroc × France", href: "https://maps.app.goo.gl/q3xLY5gy8cY6U6Tj6", icon: MapPin },
  { label: "Disponibilité", value: "Lun. au ven. · 9h à 18h", icon: Clock },
];

export const Contact = () => (
  <section className="bg-[#f4f1eb] text-[#0a0a0a]">
    <div className="border-b border-black/15 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="editorial-shell grid gap-10 lg:grid-cols-[260px_1fr]">
        <p className="editorial-eyebrow text-black/45">Contact · Cadrage</p>
        <div><h1 className="max-w-5xl text-[clamp(3.2rem,7vw,7rem)] font-medium leading-[.9] tracking-[-.065em]">Parlons du vrai sujet.<br /><span className="link-cover__outline">Puis du dispositif.</span></h1><p className="mt-9 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">Un premier échange pour comprendre le contexte, identifier les priorités et vérifier si Link Agency est le bon partenaire pour les piloter.</p></div>
      </div>
    </div>

    <div className="grid lg:grid-cols-[1.15fr_.85fr]">
      <div className="border-b border-black/15 p-5 py-14 sm:p-8 sm:py-20 lg:border-b-0 lg:border-r lg:p-12 xl:p-20">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="mb-12 flex items-end justify-between border-b border-black/15 pb-5"><div><p className="editorial-eyebrow text-black/45">01 / Votre contexte</p><h2 className="mt-4 text-3xl font-medium tracking-[-.04em] sm:text-4xl">Cadrer la demande</h2></div><span className="hidden font-mono text-xs text-black/30 sm:block">CONFIDENTIEL</span></div>
          <p className="mb-10 max-w-xl text-sm leading-7 text-black/60">Ce formulaire est destiné aux entreprises qui souhaitent structurer un enjeu de marque, de communication ou de performance. Précisez le contexte et un ordre de grandeur d’investissement pour permettre un premier cadrage utile.</p>
          <ContactForm />
        </div>
      </div>

      <aside className="bg-[#765fc4] p-5 py-14 text-white sm:p-8 sm:py-20 lg:p-12 xl:p-16">
        <div className="sticky top-28">
          <p className="editorial-eyebrow text-white/50">02 / Accès direct</p>
          <h2 className="mt-5 max-w-md text-4xl font-medium leading-[.98] tracking-[-.05em] sm:text-5xl">Un interlocuteur senior dès le premier échange.</h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-white/65">Badre étudie personnellement chaque demande. Si le sujet relève d’une autre expertise, il le dit clairement.</p>
          <div className="mt-12 border-t border-white/20">
            {contactDetails.map(({ label, value, href, icon: Icon }) => {
              const content = <><Icon className="h-4 w-4 text-white/45" /><span><span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">{label}</span><span className="mt-1 block text-sm text-white">{value}</span></span></>;
              return href ? <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-start gap-4 border-b border-white/20 py-5 transition hover:bg-white/[.04]">{content}</a> : <div key={label} className="flex items-start gap-4 border-b border-white/20 py-5">{content}</div>;
            })}
          </div>
          <a href="https://wa.me/212699024526?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20un%20besoin%20marketing" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex min-h-12 items-center gap-3 border border-white px-5 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-white hover:text-[#765fc4]">Écrire sur WhatsApp <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </aside>
    </div>
  </section>
);
