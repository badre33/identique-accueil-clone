import { useState } from "react";
import { Plus, Minus, HelpCircle, Search } from "lucide-react";
import { faqsEnriched } from "@/data/content";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtrer les FAQs selon la recherche et catégorie
  const filteredFAQs = faqsEnriched.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...Array.from(new Set(faqsEnriched.map(faq => faq.category)))];


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-8 lg:px-16 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm mb-6">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Questions Fréquentes</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Réponses à vos <span className="text-primary font-medium">questions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Retrouvez les réponses aux questions les plus fréquentes sur nos services 
            de branding, marketing digital et événementiel au Maroc.
          </p>

          {/* Barre de recherche */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            />
          </div>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'Toutes' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="text-gray-600 leading-relaxed mb-4">
                    {faq.answer}
                  </div>
                  
                  {/* Mots-clés associés */}
                  {faq.keywords.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500 mb-2">Mots-clés :</p>
                      <div className="flex flex-wrap gap-2">
                        {faq.keywords.map((keyword, keyIndex) => (
                          <span 
                            key={keyIndex}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Services liés */}
                  {faq.relatedServices.length > 0 && (
                    <div className="pt-3">
                      <p className="text-sm text-gray-500 mb-2">Services liés :</p>
                      <div className="flex flex-wrap gap-2">
                        {faq.relatedServices.map((service, serviceIndex) => (
                          <span 
                            key={serviceIndex}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucune question trouvée pour "{searchTerm}" dans la catégorie {selectedCategory}.
            </p>
          </div>
        )}

        {/* CTA pour questions personnalisées */}
        <div className="text-center mt-16 p-8 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre équipe est à votre disposition pour répondre à toutes vos interrogations.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors font-medium"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};