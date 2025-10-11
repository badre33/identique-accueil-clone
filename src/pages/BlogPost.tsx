import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { SEOHead } from '@/components/SEOHead';
import { FloatingContactWidget } from '@/components/FloatingContactWidget';
import { blogPosts } from '@/data/content';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/utils/structuredData';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
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
        <div className="max-w-4xl mx-auto px-8 lg:px-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </nav>
          
          {/* Category & Meta */}
          <div className="mb-6">
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishDate).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} minutes de lecture
            </div>
            <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Share2 className="w-4 h-4" />
              Partager
            </button>
          </div>
          
          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-foreground mb-4">Tags :</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 p-8 bg-primary/5 rounded-2xl text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Besoin d'accompagnement pour votre projet ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Notre équipe d'experts est là pour vous conseiller et réaliser vos ambitions.
            </p>
            <Link to="/#contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4">
                Parlons de votre projet
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Related Articles */}
        <section className="mt-20 pt-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-8 lg:px-16">
            <h2 className="text-3xl font-light text-foreground mb-12 text-center">
              Articles <span className="text-primary font-medium">similaires</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link 
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {relatedPost.readTime} min
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </article>
      
      <FloatingContactWidget />
    </div>
  );
};

export default BlogPost;