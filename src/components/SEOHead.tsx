import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  locale?: 'fr_FR' | 'ar_MA' | 'en_US';
  structuredData?: any;
  alternateLanguages?: Array<{ hrefLang: string; href: string }>;
}

export const SEOHead = ({
  title = "Link Agency - Agence Marketing Digital au Maroc | Branding & Communication",
  description = "Agence marketing digital au Maroc spécialisée en branding, communication digitale et événementiel. Services créatifs à Casablanca, Rabat et Marrakech.",
  keywords = "agence marketing digital maroc, branding maroc, communication digitale, événementiel maroc, casablanca, rabat, marrakech",
  image = "https://linkagency.ma/og-default.jpg",
  url = "https://linkagency.ma",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Link Agency",
  locale = "fr_FR",
  structuredData,
  alternateLanguages
}: SEOHeadProps) => {
  const siteName = "Link Agency";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Balises meta de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Hreflang */}
      <link rel="alternate" hrefLang="fr" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      {alternateLanguages?.map((alt) => (
        <link key={alt.hrefLang} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
      ))}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteName} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@LinkAgencyMA" />
      <meta name="twitter:creator" content="@LinkAgencyMA" />
      
      {/* Meta supplémentaires pour le SEO local */}
      <meta name="geo.region" content="MA" />
      <meta name="geo.placename" content="Casablanca, Maroc" />
      <meta name="geo.position" content="33.5731;-7.5898" />
      <meta name="ICBM" content="33.5731, -7.5898" />
      
      {/* Schema.org données structurées */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
    </Helmet>
  );
};