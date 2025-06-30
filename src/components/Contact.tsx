
import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    service: '',
    budget: '',
    message: '',
    delai: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `🚀 NOUVEAU PROJET - Link Agency

👤 Contact:
- Nom: ${formData.nom} ${formData.prenom}
- Email: ${formData.email}
- Téléphone: ${formData.telephone}
- Entreprise: ${formData.entreprise}

📋 Projet:
- Service souhaité: ${formData.service}
- Budget estimé: ${formData.budget}
- Délai souhaité: ${formData.delai}

💬 Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/33745010714?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    'Branding & Identité visuelle',
    'Événementiel',
    'Personal Branding',
    'Content Digital',
    'Stratégie de communication',
    'Autre'
  ];

  const budgets = [
    'Moins de 5 000€',
    '5 000€ - 15 000€',
    '15 000€ - 30 000€',
    '30 000€ - 50 000€',
    'Plus de 50 000€',
    'À définir ensemble'
  ];

  const delais = [
    'Urgent (moins de 2 semaines)',
    '1 mois',
    '2-3 mois',
    '3-6 mois',
    'Plus de 6 mois',
    'Flexible'
  ];

  return (
    <section className="min-h-screen bg-black grid grid-cols-1 lg:grid-cols-2">
      {/* Section formulaire */}
      <div className="p-8 lg:p-16 flex flex-col justify-center">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-light mb-6 text-white">
            Parlons de votre projet
          </h2>
          <p className="text-gray-300 text-lg font-light leading-relaxed">
            Chaque grand projet commence par une conversation. Partagez votre vision avec nous et découvrons ensemble comment la concrétiser.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
          {/* Informations personnelles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="nom"
                placeholder="Nom *"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white text-lg font-light transition-colors"
              />
            </div>
            <div>
              <input
                type="text"
                name="prenom"
                placeholder="Prénom *"
                value={formData.prenom}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white text-lg font-light transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Adresse e-mail *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white text-lg font-light transition-colors"
              />
            </div>
            <div className="relative">
              <div className="flex">
                <div className="flex items-center bg-transparent border-0 border-b border-gray-600 pb-3 text-gray-400 text-lg font-light pr-2">
                  +212
                </div>
                <input
                  type="tel"
                  name="telephone"
                  placeholder="6 XX XX XX XX"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="flex-1 bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white text-lg font-light transition-colors ml-2"
                />
              </div>
            </div>
          </div>

          <div>
            <input
              type="text"
              name="entreprise"
              placeholder="Entreprise / Organisation"
              value={formData.entreprise}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white text-lg font-light transition-colors"
            />
          </div>

          {/* Détails du projet */}
          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white focus:outline-none focus:border-white text-lg font-light transition-colors appearance-none cursor-pointer"
            >
              <option value="" className="bg-black text-gray-400">Service souhaité *</option>
              {services.map((service, index) => (
                <option key={index} value={service} className="bg-black text-white">
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white focus:outline-none focus:border-white text-lg font-light transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-black text-gray-400">Budget estimé</option>
                {budgets.map((budget, index) => (
                  <option key={index} value={budget} className="bg-black text-white">
                    {budget}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                name="delai"
                value={formData.delai}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white focus:outline-none focus:border-white text-lg font-light transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-black text-gray-400">Délai souhaité</option>
                {delais.map((delai, index) => (
                  <option key={index} value={delai} className="bg-black text-white">
                    {delai}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Décrivez votre projet, vos objectifs, votre vision... *"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white resize-none text-lg font-light transition-colors"
              rows={4}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="group bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium flex items-center space-x-3 hover:scale-105 active:scale-95"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Envoyer ma demande</span>
            </button>
            <p className="text-gray-500 text-sm mt-3">
              Réponse garantie sous 24h • Les champs marqués * sont obligatoires
            </p>
          </div>
        </form>
      </div>
      
      {/* Section informations de contact */}
      <div className="bg-neutral-900 flex flex-col justify-center p-8 lg:p-16">
        <div className="mb-12">
          <img 
            src="/lovable-uploads/4e5435ee-9057-449a-b988-b2ed164da3e1.png" 
            alt="Link Agency Logo" 
            className="w-48 h-48 object-contain mx-auto mb-8"
          />
          <p className="text-gray-300 text-xl font-light text-center mb-12">
            Créativité • Innovation • Excellence
          </p>
        </div>

        {/* Informations de contact */}
        <div className="space-y-8">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Téléphone</p>
              <a 
                href="tel:+21299024526" 
                className="text-white text-lg hover:text-gray-300 transition-colors"
              >
                +212 99 024 526
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <a 
                href="mailto:bharkaoui@linkagency.ma" 
                className="text-white text-lg hover:text-gray-300 transition-colors"
              >
                contact@linkagency.ma
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Localisation</p>
              <p className="text-white text-lg">Maroc • France</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Disponibilité</p>
              <p className="text-white text-lg">Lun - Ven • 9h - 18h</p>
            </div>
          </div>
        </div>

        {/* CTA alternatif */}
        <div className="mt-12 p-6 border border-gray-700 rounded-2xl bg-gradient-to-br from-white/5 to-transparent">
          <h3 className="text-white text-xl font-medium mb-3">Besoin d'une réponse immédiate ?</h3>
          <p className="text-gray-400 text-sm mb-4">
            Contactez-nous directement via WhatsApp pour une consultation express
          </p>
          <a 
            href="https://wa.me/33745010714?text=Bonjour%2C%20j'aimerais%20une%20consultation%20express%20pour%20mon%20projet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors font-medium"
          >
            <span>Chat WhatsApp</span>
            <Send className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
