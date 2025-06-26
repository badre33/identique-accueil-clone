
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ nom: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="px-8 lg:px-16 py-32 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-thin text-white mb-8">
              Parlons de votre projet
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              Chaque projet est unique. Contactez-nous pour discuter 
              de vos besoins et découvrir comment nous pouvons 
              vous accompagner.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="text-white">hello@linkagency.fr</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Téléphone</p>
                <p className="text-white">+33 1 23 45 67 89</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <Input
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleChange}
                className="bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-4 text-white placeholder:text-gray-400 focus:border-white focus-visible:ring-0"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-4 text-white placeholder:text-gray-400 focus:border-white focus-visible:ring-0"
                required
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                className="bg-transparent border-0 border-b border-gray-600 rounded-none px-0 py-4 text-white placeholder:text-gray-400 focus:border-white focus-visible:ring-0 resize-none min-h-[120px]"
                required
              />
            </div>
            <Button 
              type="submit"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 font-light text-sm tracking-wide"
            >
              ENVOYER LE MESSAGE
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
