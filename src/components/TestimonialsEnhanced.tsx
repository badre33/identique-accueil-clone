import { Star, Quote, CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { testimonials } from '@/data/content';
import { generateReviewSchema } from '@/utils/structuredData';
import { Link } from 'react-router-dom';

export const TestimonialsEnhanced = () => {
  // Injecter les rich snippets pour les avis
  useEffect(() => {
    const reviewSchema = generateReviewSchema(testimonials.map(testimonial => ({
      author: testimonial.name,
      rating: testimonial.rating,
      text: testimonial.content,
      date: testimonial.date
    })));
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(reviewSchema);
    script.id = 'testimonials-schema';
    
    const existingScript = document.getElementById('testimonials-schema');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('testimonials-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <section className="py-20 px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6">
            <Quote className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Témoignages Clients</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Ils nous font <span className="text-primary font-medium">confiance</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Découvrez les retours d'expérience de nos clients et les résultats obtenus 
            grâce à nos services de branding, marketing digital et événementiel.
          </p>

          {/* Stats globales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Recommandation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">11+</div>
              <div className="text-sm text-muted-foreground">Années d'expérience</div>
            </div>
          </div>
        </div>

        {/* Témoignages Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
              itemScope 
              itemType="https://schema.org/Review"
            >
              {/* Header avec étoiles et service */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < testimonial.rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground" itemProp="ratingValue">
                    {testimonial.rating}/5
                  </span>
                </div>
                <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {testimonial.service}
                </span>
              </div>

              {/* Contenu du témoignage */}
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed italic" itemProp="reviewBody">
                "{testimonial.content}"
              </blockquote>

              {/* Résultats obtenus */}
              {testimonial.results && testimonial.results.length > 0 && (
                <div className="mb-6 p-4 bg-white rounded-xl border border-gray-200">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Résultats obtenus
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {testimonial.results.map((result, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{result.metric} :</span>
                        <span className="text-sm font-semibold text-primary">{result.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Profil client */}
              <div className="flex items-center gap-4" itemProp="author" itemScope itemType="https://schema.org/Person">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-lg shrink-0">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                     loading="lazy" decoding="async" />
                  ) : (
                    testimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground" itemProp="name">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span itemProp="jobTitle">{testimonial.role}</span> - 
                    <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                      <span itemProp="name"> {testimonial.company}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Date masquée pour Schema.org */}
              <meta itemProp="datePublished" content={testimonial.date} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-12">
            <h3 className="text-3xl font-semibold text-foreground mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Découvrez comment nous pouvons transformer votre marque et 
              booster votre présence digitale au Maroc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/#contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors font-medium group"
              >
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/collaborations"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl border border-primary/20 hover:bg-primary/5 transition-colors font-medium"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};