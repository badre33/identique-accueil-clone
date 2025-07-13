import React from 'react';
import { LocalBusinessCard } from './LocalBusinessCard';
import { InteractiveMap } from './InteractiveMap';
import { LocalContent } from './LocalContent';

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
          <InteractiveMap />
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

export { LocalBusinessCard, InteractiveMap, LocalContent };