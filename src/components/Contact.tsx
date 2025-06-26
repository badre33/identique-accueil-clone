
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
    <section className="min-h-screen bg-black grid grid-cols-1 lg:grid-cols-2">
      {/* Section formulaire */}
      <div className="p-8 lg:p-16 flex flex-col justify-center">
        <h2 className="text-4xl lg:text-5xl font-light mb-12 text-white">Nos réalisations</h2>
        
        <form className="space-y-8 max-w-md">
          <div>
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
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
              className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white text-lg font-light"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white resize-none text-lg font-light"
              rows={1}
            />
          </div>
        </form>
      </div>
      
      {/* Section projet */}
      <div className="bg-gray-800 flex flex-col items-center justify-center p-16">
        <div className="bg-white w-48 h-64 rounded-lg flex items-center justify-center mb-8 shadow-lg">
          <div className="text-black text-6xl font-bold">L</div>
        </div>
        <p className="text-gray-300 text-lg font-light">Projet / Référence</p>
      </div>
    </section>
  );
};
