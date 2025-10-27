
import { useState } from 'react';
import { MessageCircle, X, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const phoneNumber = "212699024526";
    const message = "Bonjour, je souhaite discuter de mon projet avec Link Agency.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+212699024526', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:bharkaoui@linkagency.ma?subject=Demande d\'information - Link Agency', '_self');
  };

  return (
    <>
      {/* Enhanced Widget with better animations */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/50 p-8 w-84 animate-scale-in hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900 text-lg">Contactez-nous</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer le widget de contact"
                className="h-10 w-10 p-0 hover:bg-slate-100 rounded-full hover:scale-110 transition-all duration-300"
              >
                <X className="w-5 h-5 text-slate-600" />
              </Button>
            </div>
            
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Choisissez votre moyen de contact préféré
            </p>
            
            <div className="space-y-4">
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white flex items-center justify-center space-x-3 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 group"
              >
                <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">WhatsApp</span>
              </Button>
              
              <Button
                onClick={handleCall}
                variant="outline"
                className="w-full flex items-center justify-center space-x-3 py-4 rounded-xl hover:bg-blue-50 border-2 hover:border-blue-200 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 shadow-sm hover:shadow-md group"
              >
                <Phone className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold text-slate-700">Appeler maintenant</span>
              </Button>
              
              <Button
                onClick={handleEmail}
                variant="outline"
                className="w-full flex items-center justify-center space-x-3 py-4 rounded-xl hover:bg-slate-50 border-2 hover:border-slate-200 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 shadow-sm hover:shadow-md group"
              >
                <Mail className="w-5 h-5 text-slate-600 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold text-slate-700">Envoyer un email</span>
              </Button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center space-x-3 text-sm text-slate-500">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
                <span className="font-medium">Réponse sous 2h garantie</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Enhanced Main Button with better micro-interactions */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer les options de contact" : "Ouvrir les options de contact"}
          className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          {isOpen ? (
            <X className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300 relative z-10" />
          ) : (
            <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 relative z-10" />
          )}
        </Button>
      </div>
    </>
  );
};
