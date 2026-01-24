import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { SEOHead } from '@/components/SEOHead';
import { FloatingContactWidget } from '@/components/FloatingContactWidget';
import { blogPosts } from '@/data/content';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/utils/structuredData';
import { Button } from '@/components/ui/button';
import { ArticleBadge, ArticleContent } from '@/components/blog';
import '@/styles/premium-blog.css';

// Determine if article is a pillar based on word count and structure
const isPillarArticle = (content: string): boolean => {
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const h2Count = (content.match(/<h2>/gi) || []).length;
  return wordCount > 1500 && h2Count >= 6;
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article non trouvé</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  const isPillar = isPillarArticle(post.content);

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": `https://linkagency.ma${post.image}`,
        "author": {
          "@type": "Organization",
          "name": post.author,
          "url": "https://linkagency.ma"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Link Agency",
          "logo": {
            "@type": "ImageObject",
            "url": "https://linkagency.ma/logo-link-agency.png"
          }
        },
        "datePublished": post.publishDate,
        "dateModified": post.publishDate,
        "url": `https://linkagency.ma/blog/${post.slug}`,
        "keywords": post.tags.join(", "),
        "wordCount": post.content.length,
        "timeRequired": `PT${post.readTime}M`,
        "articleSection": post.category,
        "inLanguage": "fr-FR"
      },
      generateWebPageSchema(
        post.title,
        post.metaDescription,
        `https://linkagency.ma/blog/${post.slug}`
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Blog", url: "https://linkagency.ma/blog" },
        { name: post.title, url: `https://linkagency.ma/blog/${post.slug}` }
      ])
    ]
  };

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-20">
      <SEOHead
        title={`${post.title} - Link Agency Blog`}
        description={post.metaDescription}
        keywords={post.metaKeywords}
        url={`https://linkagency.ma/blog/${post.slug}`}
        type="article"
        publishedTime={post.publishDate}
        author={post.author}
        image={post.image}
        structuredData={blogPostSchema}
      />
      
      <Header />
      
      {/* Article Header */}
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </nav>
          
          {/* Category & Article Type Badge */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <ArticleBadge type={isPillar ? 'pilier' : 'satellite'} />
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground mb-10 pb-8 border-b border-border/50">
            <div className="flex items-center gap-2 text-sm">
              <User className="w-4 h-4 text-primary/60" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-primary/60" />
              {new Date(post.publishDate).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-primary/60" />
              {post.readTime} min de lecture
            </div>
            <button 
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors ml-auto"
              onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
            >
              <Share2 className="w-4 h-4" />
              Partager
            </button>
          </div>
          
          {/* Featured Image */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[350px] md:h-[450px] object-cover"
              loading="eager"
            />
          </div>
          
          {/* Article Content with Premium Styling */}
          <ArticleContent content={post.content} isPillar={isPillar} />
          
          {/* Tags */}
          <div className="mt-16 pt-10 border-t border-border/50">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Thématiques abordées
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="bg-muted/50 text-muted-foreground px-4 py-2 rounded-full text-sm hover:bg-muted transition-colors cursor-pointer border border-border/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 p-8 md:p-10 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl border border-primary/10">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                Besoin d'accompagnement pour votre projet ?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Notre équipe d'experts est là pour vous conseiller et réaliser vos ambitions.
              </p>
              <Link to="/#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium shadow-lg shadow-primary/20">
                  Parlons de votre projet
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        <section className="mt-24 pt-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-light text-foreground mb-4 text-center">
              Articles <span className="text-primary font-medium">similaires</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Poursuivez votre lecture avec ces analyses complémentaires
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 3)
                .map((relatedPost) => {
                  const isRelatedPillar = isPillarArticle(relatedPost.content);
                  return (
                    <Link 
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="bg-background rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-border/30"
                    >
                      <div className="relative">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        {isRelatedPillar && (
                          <div className="absolute top-3 left-3">
                            <ArticleBadge type="pilier" />
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-medium text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" />
                          {relatedPost.readTime} min de lecture
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      </article>
      
      <FloatingContactWidget />
    </div>
  );
};

export default BlogPost;
