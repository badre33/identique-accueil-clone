
import { useState } from 'react';
import { MessageCircle, X, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const phoneNumber = "33745010714";
    const message = "Bonjour, je souhaite discuter de mon projet avec Link Agency.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+212990245226', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:bharkaoui@linkagency.ma?subject=Demande d\'information - Link Agency', '_self');
  };

  return (
    <>
      {/* Widget flottant */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-80 animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Contactez-nous</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Choisissez votre moyen de contact préféré
            </p>
            
            <div className="space-y-3">
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
              
              <Button
                onClick={handleCall}
                variant="outline"
                className="w-full flex items-center justify-center space-x-2 hover:bg-blue-50"
              >
                <Phone className="w-4 h-4" />
                <span>Appeler maintenant</span>
              </Button>
              
              <Button
                onClick={handleEmail}
                variant="outline"
                className="w-full flex items-center justify-center space-x-2 hover:bg-gray-50"
              >
                <Mail className="w-4 h-4" />
                <span>Envoyer un email</span>
              </Button>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Réponse sous 2h garantie</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Bouton principal */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black hover:bg-gray-800 text-white rounded-full w-14 h-14 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>
      </div>
    </>
  );
};
