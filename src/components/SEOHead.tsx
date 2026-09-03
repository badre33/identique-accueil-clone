import { Head } from 'vite-react-ssg';
import { DEFAULT_SOCIAL_IMAGE } from '@/config/seo';

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
  locale?: 'fr_FR' | 'ar_MA' | 'en_US' | 'en_GB';
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
  robots?: string;
  alternateLanguages?: Array<{ hrefLang: string; href: string }>;
  xDefaultUrl?: string;
}

export const SEOHead = ({
  title = "Direction marketing externalisée au Maroc | Link Agency",
  description = "Link Agency pilote votre stratégie de marque, vos contenus, vos réseaux sociaux et votre acquisition comme une direction marketing externalisée au Maroc.",
  keywords,
  image = DEFAULT_SOCIAL_IMAGE,
  url = "https://linkagency.ma",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Link Agency",
  locale = "fr_FR",
  structuredData,
  alternateLanguages,
  xDefaultUrl,
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
}: SEOHeadProps) => {
  const siteName = "Link Agency";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const isEnglish = locale === "en_US" || locale === "en_GB";
  const primaryHrefLang = locale === "ar_MA" ? "ar-MA" : isEnglish ? "en" : "fr-MA";
  const documentLanguage = locale === "ar_MA" ? "ar" : isEnglish ? "en" : "fr";
  const openGraphType = type === "service" ? "website" : type;
  const usesBrandLogo = image === DEFAULT_SOCIAL_IMAGE;
  const imageAlt = usesBrandLogo ? "Logo Link Agency" : title;

  return (
    <Head>
      <html lang={documentLanguage} />
      {/* Balises meta de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta httpEquiv="content-language" content={documentLanguage} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Ne déclarer que les versions réellement publiées et réciproques. */}
      <link rel="alternate" hrefLang={primaryHrefLang} href={url} />
      {locale === "fr_FR" && <link rel="alternate" hrefLang="fr" href={url} />}
      <link rel="alternate" hrefLang="x-default" href={xDefaultUrl ?? url} />
      {alternateLanguages?.map((alt) => (
        <link key={alt.hrefLang} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
      ))}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      {usesBrandLogo && <meta property="og:image:type" content="image/png" />}
      {usesBrandLogo && <meta property="og:image:width" content="280" />}
      {usesBrandLogo && <meta property="og:image:height" content="280" />}
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={openGraphType} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteName} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content={usesBrandLogo ? "summary" : "summary_large_image"} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      
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

    </Head>
  );
};
