import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Tag, ArrowRight, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { SEOHead } from '@/components/SEOHead';
import { FloatingContactWidget } from '@/components/FloatingContactWidget';
import { blogPosts } from '@/data/content';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/utils/structuredData';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'branding', 'digital', 'evenementiel', 'tendances', 'conseils'];

  // Trier les articles par date (plus récents en premier)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const filteredPosts = selectedCategory === 'all' 
    ? sortedPosts 
    : sortedPosts.filter(post => post.category === selectedCategory);

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateWebPageSchema(
        "Blog Marketing Digital & Branding - Actualités & Conseils Experts 2025 | Link Agency Maroc",
        "Articles experts en marketing digital, branding, SEO local et réseaux sociaux au Maroc. Guides pratiques, tendances 2025 et conseils pour développer votre entreprise.",
        "https://linkagency.ma/blog"
      ),
      generateBreadcrumbSchema([
        { name: "Accueil", url: "https://linkagency.ma/" },
        { name: "Blog", url: "https://linkagency.ma/blog" }
      ]),
      {
        "@type": "Blog",
        "name": "Link Agency Blog",
        "description": "Blog officiel de Link Agency - Actualités marketing digital et branding au Maroc",
        "url": "https://linkagency.ma/blog",
        "blogPost": blogPosts.map(post => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": `https://linkagency.ma${post.image}`,
          "author": {
            "@type": "Organization",
            "name": post.author
          },
          "datePublished": post.publishDate,
          "url": `https://linkagency.ma/blog/${post.slug}`,
          "keywords": post.tags.join(", "),
          "wordCount": post.content.length,
          "timeRequired": `PT${post.readTime}M`
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <SEOHead
        title="Blog Marketing Digital & Branding - Actualités & Conseils Experts 2025 | Link Agency Maroc"
        description="Articles experts en marketing digital, branding, SEO local et réseaux sociaux au Maroc. Guides pratiques, tendances 2025 et conseils pour développer votre entreprise à Casablanca, Rabat et Marrakech."
        keywords="blog marketing digital maroc 2025, conseils branding, seo local maroc, réseaux sociaux casablanca, stratégie digitale, guides pratiques marketing, actualités communication maroc"
        url="https://linkagency.ma/blog"
        type="website"
        structuredData={blogSchema}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6">
            Blog Marketing Digital & <span className="text-primary font-medium">Branding</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Guides experts, stratégies éprouvées et tendances marketing digital au Maroc. 
            Tout ce dont vous avez besoin pour faire grandir votre entreprise.
          </p>
          
          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'Tous' : 
                 category === 'branding' ? 'Branding' :
                 category === 'digital' ? 'Digital' :
                 category === 'evenementiel' ? 'Événementiel' :
                 category === 'tendances' ? 'Tendances' : 'Conseils'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  / loading="lazy" decoding="async">
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishDate).toLocaleDateString('fr-FR')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} min
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Aucun article trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-8 lg:px-16 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Restez informé de nos <span className="text-primary font-medium">dernières actualités</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Recevez nos conseils exclusifs et tendances marketing directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl">
              S'abonner
            </Button>
          </div>
        </div>
      </section>
      
      <FloatingContactWidget />
    </div>
  );
};

export default Blog;