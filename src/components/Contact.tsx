
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { ContactForm } from './ContactForm';

export const Contact = () => {
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
        
        <ContactForm />
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
