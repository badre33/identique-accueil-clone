import { Link, useLocation } from "react-router-dom";
import { Head } from 'vite-react-ssg';
import { useEffect } from "react";
import { Home, BookOpen, Briefcase, Mail, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { name: "Accueil", path: "/", icon: Home, description: "Retour à la page principale" },
    { name: "Services Branding", path: "/branding", icon: Briefcase, description: "Identité visuelle & stratégie de marque" },
    { name: "Marketing Digital", path: "/marketing-digital", icon: Briefcase, description: "SEO, publicité & réseaux sociaux" },
    { name: "Événementiel", path: "/evenementiel", icon: Briefcase, description: "Événements corporate & activation" },
    { name: "Blog", path: "/blog", icon: BookOpen, description: "Articles experts & tendances" },
    { name: "Contact", path: "/contact", icon: Mail, description: "Demandez votre devis gratuit" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Head>
        <title>Page non trouvée - 404 | Link Agency</title>
        <meta name="description" content="La page que vous recherchez n'existe pas ou a été déplacée. Explorez nos services de branding, marketing digital et événementiel au Maroc." />
        {/* CRUCIAL : empêche Google d'indexer les 404 comme soft 404 */}
        <meta name="robots" content="noindex, follow" />
        <meta name="googlebot" content="noindex, follow" />
        {/* Pas de canonical pour les 404 (évite les signaux contradictoires) */}
      </Head>
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* 404 Title */}
          <h1 className="text-8xl sm:text-9xl font-bold text-primary/20 mb-4 select-none">404</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Page introuvable
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto">
            La page <code className="text-sm bg-muted px-2 py-1 rounded">{location.pathname}</code> n'existe pas ou a été déplacée. Voici quelques liens utiles :
          </p>

          {/* Internal Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {popularPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300 text-left"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <page.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                    {page.name}
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                  <p className="text-sm text-muted-foreground mt-0.5">{page.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <Home className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
