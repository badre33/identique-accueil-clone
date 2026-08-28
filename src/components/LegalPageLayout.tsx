import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SEOHead } from "@/components/SEOHead";

interface LegalPageLayoutProps {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
}

export const LegalPageLayout = ({ title, description, path, children }: LegalPageLayoutProps) => (
  <div className="min-h-screen bg-[#f4f1eb] pt-16 text-[#0a0a0a] sm:pt-20">
    <SEOHead title={`${title} | Link Agency`} description={description} url={`https://linkagency.ma/${path}`} robots="noindex, follow" />
    <Header />
    <main className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <article className="mx-auto max-w-4xl">
        <p className="editorial-eyebrow text-[#6751b7]">Informations juridiques</p>
        <h1 className="mt-6 text-[clamp(3rem,7vw,6.5rem)] font-semibold uppercase leading-[.86] tracking-[-.065em]">{title}</h1>
        <p className="mt-8 text-sm text-black/45">Dernière mise à jour : 28 août 2026</p>
        <div className="legal-copy mt-14 space-y-10 text-base leading-8 text-black/70">{children}</div>
      </article>
    </main>
    <Footer />
  </div>
);
