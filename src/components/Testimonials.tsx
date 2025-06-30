
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      company: "CEO, InnovateTech",
      text: "Link Agency a transformé notre identité visuelle avec une créativité exceptionnelle. L'équipe a su capturer l'essence de notre marque et la traduire en visuels percutants.",
      rating: 5,
      image: "/lovable-uploads/566ba4a2-ee11-42db-a054-14667389b2c6.png"
    },
    {
      name: "Thomas Martin",
      company: "Fondateur, GreenStart",
      text: "Un accompagnement personnalisé du début à la fin. Notre événement de lancement a été un succès grâce à leur expertise en événementiel.",
      rating: 5,
      image: "/lovable-uploads/1d79743a-6078-4a50-b98c-fabf537de013.png"
    },
    {
      name: "Sophie Laurent",
      company: "Directrice Marketing, TechFlow",
      text: "Leur approche stratégique du personal branding m'a aidée à me positionner comme experte dans mon domaine. Résultats visibles dès les premières semaines.",
      rating: 5,
      image: "/lovable-uploads/b8c1c54b-9721-486c-81ab-dae0977cacc0.png"
    }
  ];

  return (
    <section className="py-32 px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>Témoignages clients</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light mb-6 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les retours de nos clients qui ont choisi Link Agency pour développer leur image de marque.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-gray-200 mb-3" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
