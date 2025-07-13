
import { useState, useEffect } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { generateFAQSchema } from "@/utils/structuredData";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Combien de temps dure un projet de branding complet ?",
      answer: "Un projet de branding complet prend généralement entre 4 à 8 semaines, selon la complexité et l'ampleur du projet. Nous travaillons en étroite collaboration avec vous pour respecter vos délais."
    },
    {
      question: "Proposez-vous des services d'accompagnement après livraison ?",
      answer: "Oui, nous offrons un suivi post-livraison pour tous nos projets. Cela inclut les ajustements mineurs, la formation sur l'utilisation des éléments créés et un support technique pendant 3 mois."
    },
    {
      question: "Travaillez-vous avec des entreprises de toutes tailles ?",
      answer: "Absolument ! Nous accompagnons aussi bien les startups que les PME et grandes entreprises. Nos solutions sont adaptées à votre budget et à vos objectifs spécifiques."
    },
    {
      question: "Comment se déroule le processus créatif ?",
      answer: "Notre processus se décompose en 4 étapes : audit et brief créatif, recherche et inspiration, création et itérations, finalisation et livraison. Vous êtes impliqué à chaque étape."
    },
    {
      question: "Quels sont vos délais de réponse ?",
      answer: "Nous nous engageons à répondre à vos demandes dans les 24h ouvrées. Pour les projets en cours, nos délais de retour sont généralement de 48h maximum."
    },
    {
      question: "Proposez-vous des formules d'abonnement ?",
      answer: "Oui, nous avons des formules d'accompagnement mensuel pour la création de contenu digital et le personal branding. Ces formules permettent un suivi régulier et des créations continues."
    }
  ];

  // Générer les données structurées FAQ
  useEffect(() => {
    const faqSchema = generateFAQSchema(faqs);
    
    // Injecter le schema dans le head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-schema';
    
    // Supprimer l'ancien schema s'il existe
    const existingScript = document.getElementById('faq-schema');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('faq-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-8 lg:px-16 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-gray-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            <HelpCircle className="w-4 h-4" />
            <span>Questions fréquentes</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light mb-6 text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black">
            FAQ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Retrouvez les réponses aux questions les plus fréquemment posées sur nos services et notre approche.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-medium text-black pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Vous avez d'autres questions ? N'hésitez pas à nous contacter !
          </p>
          <a 
            href="https://wa.me/33745010714?text=Bonjour%2C%20j'ai%20une%20question%20sur%20vos%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            <span className="font-medium">Nous contacter</span>
          </a>
        </div>
      </div>
    </section>
  );
};
