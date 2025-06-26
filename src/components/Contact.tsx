
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

  return (
    <section className="min-h-screen bg-gray-900 grid grid-cols-1 lg:grid-cols-2">
      {/* Section formulaire */}
      <div className="p-16 lg:p-24 flex flex-col justify-center">
        <h2 className="text-4xl font-serif mb-12 text-white">Nos réalisations</h2>
        
        <form className="space-y-8">
          <div>
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-gray-600 pb-2 text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Adresse e-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-gray-600 pb-2 text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-gray-600 pb-2 text-white placeholder:text-gray-400 focus:outline-none focus:border-white resize-none"
              rows={1}
            />
          </div>
        </form>
      </div>
      
      {/* Section image/projet */}
      <div className="bg-gray-300 flex flex-col items-center justify-center p-16">
        <div className="bg-black w-48 h-64 rounded-lg flex items-center justify-center mb-8">
          <div className="text-white text-6xl font-bold transform -rotate-12">L</div>
        </div>
        <p className="text-gray-700 text-lg font-serif">Projet / Référence</p>
      </div>
    </section>
  );
};
