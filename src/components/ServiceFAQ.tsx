import { FAQItem } from "@/data/serviceFaqs";

interface ServiceFAQProps {
  faqs: FAQItem[];
  title?: string;
}

export const ServiceFAQ = ({ faqs, title = "Questions fréquentes" }: ServiceFAQProps) => {
  if (!faqs?.length) return null;
  return (
    <section className="py-20 px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-light mb-12 text-black">{title}</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-medium text-black mb-3">{faq.question}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};