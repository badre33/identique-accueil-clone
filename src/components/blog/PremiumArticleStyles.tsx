import { Badge } from '@/components/ui/badge';
import { BookOpen, Lightbulb, Quote, Layers } from 'lucide-react';

interface ArticleBadgeProps {
  type: 'pilier' | 'satellite';
}

export const ArticleBadge = ({ type }: ArticleBadgeProps) => {
  if (type === 'pilier') {
    return (
      <Badge 
        variant="outline" 
        className="border-primary/30 bg-primary/5 text-primary font-medium px-3 py-1.5 gap-1.5"
      >
        <Layers className="w-3.5 h-3.5" />
        Analyse stratégique
      </Badge>
    );
  }
  
  return (
    <Badge 
      variant="outline" 
      className="border-muted-foreground/30 bg-muted/50 text-muted-foreground font-medium px-3 py-1.5 gap-1.5"
    >
      <BookOpen className="w-3.5 h-3.5" />
      Article expert
    </Badge>
  );
};

interface KeyInsightBoxProps {
  children: React.ReactNode;
}

export const KeyInsightBox = ({ children }: KeyInsightBoxProps) => (
  <div className="my-10 p-6 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border-l-4 border-primary rounded-r-xl">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <Lightbulb className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1 text-foreground font-medium leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

interface EditorialQuoteProps {
  children: React.ReactNode;
  author?: string;
}

export const EditorialQuote = ({ children, author }: EditorialQuoteProps) => (
  <figure className="my-12 relative">
    <div className="absolute -left-4 -top-4 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
    <Quote className="absolute -left-2 -top-2 w-8 h-8 text-primary/20" />
    <blockquote className="relative pl-8 pr-4 py-4 text-xl md:text-2xl font-light text-foreground/90 italic leading-relaxed border-l-2 border-primary/30">
      {children}
    </blockquote>
    {author && (
      <figcaption className="mt-4 pl-8 text-sm text-muted-foreground font-medium">
       , {author}
      </figcaption>
    )}
  </figure>
);

export const SectionDivider = () => (
  <div className="my-16 flex items-center justify-center gap-3">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
    <div className="w-2 h-2 rounded-full bg-primary/40" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
  </div>
);

export const PremiumIntro = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mb-12">
    <div className="max-w-3xl mx-auto">
      <div className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
        {children}
      </div>
    </div>
    <div className="mt-10 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
  </div>
);
