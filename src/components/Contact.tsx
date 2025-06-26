
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Bonjour, je suis ${formData.nom}. Mon email: ${formData.email}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/33745010714?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="min-h-screen bg-black grid grid-cols-1 lg:grid-cols-2">
      {/* Section formulaire */}
      <div className="p-8 lg:p-16 flex flex-col justify-center">
        <h2 className="text-4xl lg:text-5xl font-light mb-12 text-white">Contactez-nous</h2>
        
        <form onSubmit={handleSubmit} className="space-y-8 max-w-md">
          <div>
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white text-lg font-light"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Adresse e-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white text-lg font-light"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white resize-none text-lg font-light"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black px-8 py-3 rounded hover:bg-gray-100 transition-colors font-medium"
          >
            Envoyer via WhatsApp
          </button>
        </form>
      </div>
      
      {/* Section logo - logo Link blanc sur fond noir */}
      <div className="bg-black flex flex-col items-center justify-center p-16">
        <div className="flex items-center justify-center mb-8">
          <img 
            src="/lovable-uploads/4e5435ee-9057-449a-b988-b2ed164da3e1.png" 
            alt="Link Agency Logo" 
            className="w-64 h-64 object-contain"
          />
        </div>
        <p className="text-gray-300 text-lg font-light text-center">Créativité / Innovation</p>
      </div>
    </section>
  );
};
