import { useMemo } from 'react';
import DOMPurify from 'dompurify';

interface ArticleContentProps {
  content: string;
  isPillar?: boolean;
}

// Transform HTML content with premium styling
const enhanceContent = (html: string): string => {
  let enhanced = html;

  // Wrap first paragraph as premium intro (only the very first one)
  enhanced = enhanced.replace(
    /^(\s*<p>)(.*?)(<\/p>)/i,
    '<div class="premium-intro"><p>$2</p></div>'
  );

  // Add subtle section markers before H2s (not heavy dividers)
  let h2Count = 0;
  enhanced = enhanced.replace(/<h2>/gi, () => {
    h2Count++;
    if (h2Count > 1) {
      return `<div class="section-marker" aria-hidden="true"></div><h2>`;
    }
    return '<h2>';
  });

  // Style callout paragraphs (✅, ⚠️, 👉, ❌)
  enhanced = enhanced.replace(
    /<p>([\s]*)(✅|⚠️|👉|❌)/gi,
    '<p class="callout callout-$2">$1$2'
  );

  // Style strong text in paragraphs as potential insights
  enhanced = enhanced.replace(
    /<p>(<strong>)([^<]{40,150})(<\/strong>)(<\/p>)/gi,
    '<p class="key-insight"><strong>$2</strong></p>'
  );

  // Detect and wrap stat lists (Platform: number patterns)
  enhanced = enhanced.replace(
    /<li>([A-Za-zÀ-ÿ\s]+)\s*[:–-]\s*([\d,.\s]+(?:millions?|%|M)?[^<]*)<\/li>/gi,
    '<li class="stat-item"><span class="stat-label">$1</span><span class="stat-value">$2</span></li>'
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
        article-prose
        ${isPillar ? 'pillar-article' : 'satellite-article'}
      `}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};
