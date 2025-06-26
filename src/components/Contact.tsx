
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
    <section className="min-h-screen flex">
      <div className="w-full lg:w-1/2 bg-stone-900 px-8 lg:px-16 py-20 flex flex-col justify-center">
        <h2 className="text-3xl lg:text-4xl font-light mb-16 text-white">
          Nos réalisations
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <Input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              className="bg-transparent border-0 border-b border-stone-500 rounded-none px-0 py-4 text-white placeholder:text-stone-400 focus:border-white focus-visible:ring-0"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Adresse e-mail"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-0 border-b border-stone-500 rounded-none px-0 py-4 text-white placeholder:text-stone-400 focus:border-white focus-visible:ring-0"
              required
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border-0 border-b border-stone-500 rounded-none px-0 py-4 text-white placeholder:text-stone-400 focus:border-white focus-visible:ring-0 resize-none min-h-[100px]"
              required
            />
          </div>
          <Button 
            type="submit"
            className="bg-white text-stone-900 hover:bg-stone-100 px-8 py-3 rounded-full font-light"
          >
            Envoyer
          </Button>
        </form>
      </div>
      <div className="hidden lg:block w-1/2 bg-stone-300 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-64 bg-stone-900 rounded-3xl flex items-center justify-center shadow-2xl">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
              <div className="w-8 h-8 bg-stone-900 rounded transform rotate-12"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white px-8 py-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-light text-stone-800">Projet / Référence</h3>
        </div>
      </div>
    </section>
  );
};
