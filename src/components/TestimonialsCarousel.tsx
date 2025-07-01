
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TouchOptimized } from './TouchOptimized';
import { useMobile } from '@/hooks/useMobile';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
  image: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Dubois",
    company: "InnovateTech",
    role: "CEO",
    text: "Link Agency a transformé notre identité visuelle avec une créativité exceptionnelle. L'équipe a su capturer l'essence de notre marque et la traduire en visuels percutants qui nous démarquent vraiment.",
    rating: 5,
    image: "/lovable-uploads/566ba4a2-ee11-42db-a054-14667389b2c6.png"
  },
  {
    id: 2,
    name: "Thomas Martin",
    company: "GreenStart",
    role: "Fondateur",
    text: "Un accompagnement personnalisé du début à la fin. Notre événement de lancement a été un succès grâce à leur expertise en événementiel. Je recommande vivement !",
    rating: 5,
    image: "/lovable-uploads/1d79743a-6078-4a50-b98c-fabf537de013.png"
  },
  {
    id: 3,
    name: "Sophie Laurent",
    company: "TechFlow",
    role: "Directrice Marketing",
    text: "Leur approche stratégique du personal branding m'a aidée à me positionner comme experte dans mon domaine. Résultats visibles dès les premières semaines.",
    rating: 5,
    image: "/lovable-uploads/b8c1c54b-9721-486c-81ab-dae0977cacc0.png"
  },
  {
    id: 4,
    name: "David Chen",
    company: "NextGen Solutions",
    role: "CTO",
    text: "Une équipe professionnelle qui comprend les enjeux tech. Ils ont su créer une identité qui parle autant aux développeurs qu'aux décideurs.",
    rating: 5,
    image: "/lovable-uploads/566ba4a2-ee11-42db-a054-14667389b2c6.png"
  }
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { isMobile } = useMobile();

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-tr from-green-100/20 to-blue-100/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span>Témoignages clients</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les retours de nos clients qui ont choisi Link Agency
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-8 lg:p-12">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                      {/* Avatar and info */}
                      <div className="flex-shrink-0 text-center lg:text-left">
                        <div className="relative mb-6">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover mx-auto lg:mx-0 border-4 border-white shadow-xl"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg">
                            <Quote className="w-4 h-4" />
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-semibold text-black mb-1">{testimonial.name}</h4>
                        <p className="text-gray-600 font-medium mb-1">{testimonial.role}</p>
                        <p className="text-sm text-gray-500 mb-4">{testimonial.company}</p>
                        
                        {/* Rating */}
                        <div className="flex justify-center lg:justify-start mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial text */}
                      <div className="flex-1">
                        <div className="relative">
                          <Quote className="w-12 h-12 text-gray-200 mb-6" />
                          <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic font-light">
                            "{testimonial.text}"
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          {!isMobile && (
            <>
              <TouchOptimized 
                touchTarget="large" 
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                onClick={goToPrevious}
              >
                <div className="bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </div>
              </TouchOptimized>

              <TouchOptimized 
                touchTarget="large" 
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                onClick={goToNext}
              >
                <div className="bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </div>
              </TouchOptimized>
            </>
          )}

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <TouchOptimized
                key={index}
                touchTarget="medium"
                onClick={() => goToSlide(index)}
                className="cursor-pointer"
              >
                <div
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    currentIndex === index
                      ? "bg-black scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                />
              </TouchOptimized>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
