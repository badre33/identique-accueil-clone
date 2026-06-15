import React, { lazy, Suspense } from 'react';
import { LocalBusinessCard } from './LocalBusinessCard';
import { LocalContent } from './LocalContent';

// Lazy-load de la carte : isole mapbox-gl (lourd + accès window au chargement)
// hors du bundle critique ET du graphe rendu au build SSG (Node).
const InteractiveMap = lazy(() =>
  import('./InteractiveMap').then((m) => ({ default: m.InteractiveMap }))
);

interface LocalSEOSectionProps {
  city?: 'casablanca' | 'rabat' | 'marrakech';
}

export const LocalSEOSection: React.FC<LocalSEOSectionProps> = ({ city }) => {
  return (
    <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Contenu localisé principal */}
        <LocalContent defaultCity={city} />
        
        {/* Carte interactive */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Trouvez-nous au Maroc</h3>
            <p className="text-muted-foreground">
              Trois bureaux pour vous accompagner dans vos projets digitaux
            </p>
          </div>
          <Suspense fallback={<div className="h-[400px] animate-pulse rounded-xl bg-muted" aria-hidden="true" />}>
            <InteractiveMap />
          </Suspense>
        </div>
        
        {/* Cartes de présentation par ville */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <LocalBusinessCard city="casablanca" />
          <LocalBusinessCard city="rabat" />
          <LocalBusinessCard city="marrakech" />
        </div>
      </div>
    </section>
  );
};

export { LocalBusinessCard, LocalContent };