import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { SEOHead } from "@/components/SEOHead";
import { EditorialFinalCTA, EditorialPageHero, EditorialSectionIntro } from "@/components/editorial/EditorialPage";
import { SOCIAL_LINKS } from "@/config/social";
import { generatePersonBadreSchema } from "@/utils/structuredData";

const principles = [
  ["01", "Senior-led", "Badre garde la stratégie, les arbitrages, le prix et la relation avec les comptes clés."],
  ["02", "Sur mesure", "Les compétences sont mobilisées selon le mandat. Aucune structure artificielle n’est imposée au client."],
  ["03", "Exigeant", "Chaque livrable doit pouvoir être défendu devant une direction générale, une équipe marketing ou un partenaire international."],
  ["04", "Discret", "Le travail sert d’abord la marque du client. Link Agency peut intervenir comme un pôle externe intégré ou en marque blanche."],
];

const parcours = [
  ["Discipline", "Un passage par l’institution militaire qui installe le sens de la responsabilité, de la préparation et de l’exécution."],
  ["Conseil", "Une expérience au contact de dirigeants et d’organisations, notamment chez Nexia, pour relier communication et enjeux de direction."],
  ["Écosystèmes", "French Tech et 212 Founders renforcent la compréhension des fondateurs, de la croissance et des environnements à forte ambition."],
  ["Link Agency", "Un modèle volontairement resserré où le fondateur reste au centre de la stratégie et compose le dispositif autour du besoin réel."],
];

const InsideLink = () => (
  <div className="min-h-screen bg-[#f4f1eb] pt-16 text-[#0a0a0a] sm:pt-20">
    <SEOHead title="Le Cabinet et son Fondateur | Link Agency Maroc" description="Découvrez Badreddine Harkaoui, fondateur de Link Agency, son parcours et le modèle senior-led du cabinet à Casablanca." keywords="badreddine harkaoui, fondateur link agency, cabinet marketing casablanca, agence senior led maroc" url="https://linkagency.ma/inside-link" structuredData={generatePersonBadreSchema()} />
    <Header />
    <main className="link-editorial">
      <EditorialPageHero index="12 / LE CABINET" eyebrow="Inside Link · Fondateur et modèle" title={<>Dans l’ombre<br /><span className="link-cover__outline">des marques visibles.</span></>} description="Link Agency est un cabinet resserré, dirigé par Badreddine Harkaoui. Il garde le cap stratégique et réunit les spécialistes nécessaires autour de chaque mandat." dossierLabel="Modèle du cabinet" dossierTitle="Un pilote. Le bon réseau." dossierBody="Une direction senior, un haut niveau d’implication et des ressources choisies selon la réalité de chaque dossier." accent="violet" primaryLabel="Parler à Badre" />

      <section className="editorial-section bg-[#d8cec1]">
        <div className="editorial-shell grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div className="relative"><div className="absolute -right-3 -top-3 h-full w-full border border-black/25 bg-[#c86b4a]" /><img src="/assets/media/da131874-d340-4dc9-b1e7-5fc5f24a0f40.png" alt="Badreddine Harkaoui, fondateur de Link Agency" className="relative aspect-[4/5] w-full border border-black object-cover object-top grayscale" loading="eager" decoding="async" /></div>
          <div className="lg:pt-12"><p className="editorial-eyebrow text-black/45">Badreddine Harkaoui · Badre</p><h2 className="mt-7 text-4xl font-medium leading-[.98] tracking-[-.05em] sm:text-5xl lg:text-6xl">Le fondateur reste au centre du travail.</h2><div className="mt-10 space-y-6 text-base leading-8 text-black/65"><p>Badre accompagne les fondateurs, directions et marques sur leur positionnement, leur image, leurs contenus et leurs dispositifs de croissance. Son rôle consiste d’abord à lire la situation, décider du cap et maintenir la cohérence entre les expertises.</p><p>Il préfère travailler dans l’ombre. Le site ne cherche donc pas à construire un personnage spectaculaire, mais à rendre visible une manière de travailler : directe, impliquée et exigeante.</p><p>Lorsque le mandat demande de la production, du media buying, du développement, de la photo, de la vidéo ou de l’événementiel, les spécialistes sont commissionnés et coordonnés autour d’un cadre unique.</p></div><a href={SOCIAL_LINKS.linkedinFounder} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex min-h-12 items-center gap-3 border border-black px-5 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-black hover:text-white">Voir le parcours LinkedIn <ArrowUpRight className="h-4 w-4" /></a></div>
        </div>
      </section>

      <section className="editorial-section bg-[#0a0a0a] text-white">
        <div className="editorial-shell"><EditorialSectionIntro light eyebrow="Principes de travail" title="Une structure légère. Une responsabilité lourde." body="Le modèle réduit les couches de coordination et garde l’interlocuteur qui décide au plus près du dossier." /><div className="mt-16 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">{principles.map(([number,title,description]) => <article key={number} className="min-h-72 border-b border-r border-white/15 p-7"><span className="font-mono text-xs text-white/30">{number}</span><h3 className="mt-16 text-2xl font-medium tracking-[-.035em]">{title}</h3><p className="mt-5 text-sm leading-7 text-white/55">{description}</p></article>)}</div></div>
      </section>

      <section className="editorial-section bg-[#bfd0c8]">
        <div className="editorial-shell"><EditorialSectionIntro eyebrow="Le parcours" title="Quatre expériences qui façonnent la méthode." body="La trajectoire n’est pas présentée comme un récit héroïque. Elle explique simplement l’attention portée à la discipline, à la direction et à l’exécution." /><div className="mt-16 border-t border-black/20">{parcours.map(([title,description], index) => <article key={title} className="grid gap-4 border-b border-black/20 py-7 sm:grid-cols-[70px_230px_1fr]"><span className="font-mono text-xs text-black/35">0{index + 1}</span><h3 className="text-xl font-medium tracking-[-.03em]">{title}</h3><p className="max-w-2xl text-sm leading-7 text-black/60">{description}</p></article>)}</div></div>
      </section>

      <section className="editorial-section bg-[#f4f1eb]"><div className="editorial-shell grid gap-14 lg:grid-cols-[.85fr_1.15fr]"><div><p className="editorial-eyebrow text-black/45">Le réseau</p><h2 className="editorial-title mt-7">Les bonnes compétences, au bon moment.</h2></div><div><p className="text-lg leading-8 text-black/65">Link Agency ne vend pas l’illusion d’une grande équipe permanente. Le cabinet s’appuie sur un réseau de créatifs, producteurs, développeurs, experts média et partenaires événementiels sélectionnés selon le projet.</p><div className="mt-10 grid grid-cols-2 border-l border-t border-black/15 sm:grid-cols-3">{["Direction artistique","Photo et vidéo","Développement","Media buying","Influence","Événementiel"].map((item,index)=><div key={item} className="min-h-28 border-b border-r border-black/15 p-5"><span className="font-mono text-[9px] text-black/30">0{index+1}</span><p className="mt-6 text-sm font-medium">{item}</p></div>)}</div></div></div></section>

      <EditorialFinalCTA title="Un interlocuteur impliqué, du premier échange aux arbitrages clés." body="Si votre besoin demande une autre structure ou un autre niveau de ressources, nous le dirons clairement dès le cadrage." label="Échanger avec Badre" accent="lime" />
    </main>
    <Footer />
    <FloatingContactWidget />
  </div>
);

export default InsideLink;
