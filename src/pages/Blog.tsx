import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import { SEOHead } from "@/components/SEOHead";
import { EditorialFinalCTA, EditorialPageHero, EditorialSectionIntro } from "@/components/editorial/EditorialPage";
import { blogPosts } from "@/data/content";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/utils/structuredData";
import { getArticleReadingTime } from "@/utils/articleMetrics";

const labels: Record<string, string> = { all: "Toutes", branding: "Branding", digital: "Digital", evenementiel: "Événementiel", tendances: "Tendances", conseils: "Conseils" };

const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    generateWebPageSchema("Analyses marketing, branding et communication | Link Agency", "Analyses et guides sur la stratégie de marque, le marketing digital, le SEO et la communication au Maroc.", "https://linkagency.ma/blog"),
    generateBreadcrumbSchema([{ name: "Accueil", url: "https://linkagency.ma/" }, { name: "Analyses", url: "https://linkagency.ma/blog" }]),
    { "@type": "Blog", name: "Analyses Link Agency", url: "https://linkagency.ma/blog", blogPost: blogPosts.map((post) => ({ "@type": "BlogPosting", headline: post.title, description: post.excerpt, image: `https://linkagency.ma${post.image}`, author: { "@type": post.author === "Link Agency" ? "Organization" : "Person", name: post.author }, datePublished: post.publishDate, dateModified: post.modifiedDate ?? post.publishDate, url: `https://linkagency.ma/blog/${post.slug}`, keywords: post.tags.join(", ") })) },
  ],
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "branding", "digital", "evenementiel", "tendances", "conseils"];
  const sorted = [...blogPosts].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  const posts = selectedCategory === "all" ? sorted : sorted.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f4f1eb] pt-16 text-[#0a0a0a] sm:pt-20">
      <SEOHead title="Analyses Marketing, Branding et SEO au Maroc | Link Agency" description="Analyses et guides sur la stratégie de marque, le marketing digital, le SEO, les réseaux sociaux et la communication au Maroc." keywords="blog marketing maroc, stratégie de marque maroc, SEO maroc, branding casablanca, communication digitale maroc" url="https://linkagency.ma/blog" type="website" structuredData={blogSchema} />
      <Header />
      <main className="link-editorial">
        <EditorialPageHero index="13 / ANALYSES" eyebrow="Notes de direction et guides" title={<>Comprendre.<br /><span className="link-cover__outline">Puis décider.</span></>} description="Des analyses sur la marque, le marketing et les comportements digitaux au Maroc, écrites pour aider les dirigeants à poser de meilleures questions." dossierLabel="Bibliothèque Link" dossierTitle="Des idées faites pour servir." dossierBody="Pas de tendances récitées pour remplir un calendrier. Des sujets reliés à des décisions de marque, de marché ou de performance." accent="lime" primaryLabel="Proposer un sujet" />

        <section className="editorial-section bg-[#d8cec1]">
          <div className="editorial-shell">
            <EditorialSectionIntro eyebrow="La bibliothèque" title="Analyses, méthodes et lectures du marché." body="Utilisez les catégories pour isoler les sujets les plus proches de votre enjeu actuel." />
            <div className="mt-12 flex gap-2 overflow-x-auto border-y border-black/15 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{categories.map((category) => <button key={category} onClick={() => setSelectedCategory(category)} className={`shrink-0 border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition ${selectedCategory === category ? "border-black bg-black text-white" : "border-black/20 text-black/60 hover:border-black hover:text-black"}`}>{labels[category]}</button>)}</div>
            <div className="grid border-l border-t border-black/20 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post, index) => <article key={post.id} className="group flex min-h-[520px] flex-col border-b border-r border-black/20 bg-[#f4f1eb]/30 transition hover:bg-[#f4f1eb]"><Link to={`/blog/${post.slug}`} className="block overflow-hidden border-b border-black/15"><img src={post.image} alt="" className="aspect-[16/10] w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]" loading="lazy" decoding="async" /></Link><div className="flex flex-1 flex-col justify-between p-7"><div><div className="flex justify-between gap-4 text-[9px] font-semibold uppercase tracking-[0.13em] text-black/40"><span>{String(index + 1).padStart(2, "0")} · {labels[post.category] || post.category}</span><span>{getArticleReadingTime(post.content, post.slug.endsWith("-ar"))} min</span></div><h2 className="mt-8 text-2xl font-medium leading-[1.05] tracking-[-.04em]"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2><p className="mt-5 line-clamp-3 text-sm leading-7 text-black/60">{post.excerpt}</p></div><Link to={`/blog/${post.slug}`} className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]">Lire l’analyse <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div></article>)}
            </div>
          </div>
        </section>

        <EditorialFinalCTA title="Un sujet mérite une lecture plus précise ?" body="Présentez le contexte. Il peut devenir une analyse, un diagnostic ou le point de départ d’un mandat." label="Parler du sujet" accent="sage" />
      </main>
      <Footer />
      <FloatingContactWidget />
    </div>
  );
};

export default Blog;
