import { useMemo } from 'react';
import DOMPurify from 'dompurify';

interface ArticleContentProps {
  content: string;
  isPillar?: boolean;
}

// Transform HTML content with premium styling
const enhanceContent = (html: string): string => {
  // Add section dividers before H2s (except first one)
  let h2Count = 0;
  let enhanced = html.replace(/<h2>/gi, () => {
    h2Count++;
    if (h2Count > 1) {
      return `<div class="section-divider" aria-hidden="true"></div><h2>`;
    }
    return '<h2>';
  });

  // Wrap first paragraph after H1/start as premium intro
  enhanced = enhanced.replace(
    /^(\s*<p>)(.*?)(<\/p>)/i,
    '<div class="premium-intro"><p>$2</p></div>'
  );

  return enhanced;
};

export const ArticleContent = ({ content, isPillar = false }: ArticleContentProps) => {
  const sanitizedContent = useMemo(() => {
    const enhanced = enhanceContent(content);
    return DOMPurify.sanitize(enhanced, {
      ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'a', 'br', 'blockquote', 'code', 'pre', 'img', 'div', 'span', 'figure', 'figcaption'],
      ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'title', 'class', 'aria-hidden']
    });
  }, [content]);

  return (
    <div 
      className={`
        premium-article-content
        prose prose-lg max-w-none
        
        /* Headings - Premium typography */
        prose-headings:font-light prose-headings:tracking-tight
        prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-16 prose-h2:mb-6
        prose-h2:text-foreground prose-h2:border-b prose-h2:border-primary/10 prose-h2:pb-4
        prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-10 prose-h3:mb-4
        prose-h3:text-foreground/90 prose-h3:font-normal
        
        /* Paragraphs - Optimal reading */
        prose-p:text-muted-foreground prose-p:leading-[1.8] prose-p:mb-6
        prose-p:text-base prose-p:md:text-lg
        
        /* Strong emphasis */
        prose-strong:text-foreground prose-strong:font-semibold
        
        /* Lists - Clear hierarchy */
        prose-ul:text-muted-foreground prose-ol:text-muted-foreground
        prose-li:mb-3 prose-li:leading-relaxed
        prose-ul:my-6 prose-ol:my-6
        
        /* Links - Subtle but clear */
        prose-a:text-primary prose-a:no-underline prose-a:font-medium
        prose-a:border-b prose-a:border-primary/30 
        hover:prose-a:border-primary hover:prose-a:bg-primary/5
        prose-a:transition-all prose-a:duration-200
        
        /* Blockquotes - Editorial style */
        prose-blockquote:border-l-2 prose-blockquote:border-primary/40
        prose-blockquote:bg-gradient-to-r prose-blockquote:from-primary/5 prose-blockquote:to-transparent
        prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-4
        prose-blockquote:my-10 prose-blockquote:rounded-r-lg
        prose-blockquote:text-foreground/90 prose-blockquote:italic
        prose-blockquote:font-light prose-blockquote:text-lg
        
        /* Pillar article specific enhancements */
        ${isPillar ? 'pillar-article' : 'satellite-article'}
      `}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};
