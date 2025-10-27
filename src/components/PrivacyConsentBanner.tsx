import { useState, useEffect } from 'react';
import { X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PrivacyConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('privacy_consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('privacy_consent', 'true');
    localStorage.setItem('privacy_consent_date', new Date().toISOString());
    setShowBanner(false);
    window.location.reload(); // Reload to initialize tracking with consent
  };

  const handleDecline = () => {
    localStorage.setItem('privacy_consent', 'false');
    localStorage.setItem('privacy_consent_date', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full animate-in slide-in-from-bottom duration-300">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Respect de votre vie privée
                </h2>
                <p className="text-sm text-gray-500">
                  Nous valorisons votre confidentialité
                </p>
              </div>
            </div>
            <button
              onClick={handleDecline}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="mb-6">
            <p className="text-gray-700 mb-3">
              Nous collectons des données anonymes pour améliorer votre expérience de navigation et optimiser notre site web.
            </p>

            {showDetails ? (
              <div className="bg-gray-50 rounded-lg p-4 space-y-3 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Données collectées :</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Localisation approximative (pays, ville)</li>
                    <li>Nombre et dates de visites</li>
                    <li>Pages consultées et interactions</li>
                    <li>Source de référence (comment vous nous avez trouvé)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Utilisation :</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Améliorer l'expérience utilisateur</li>
                    <li>Analyser le trafic et les performances</li>
                    <li>Optimiser nos services</li>
                  </ul>
                </div>
                <p className="text-gray-600 mt-3">
                  Toutes les données sont stockées localement dans votre navigateur et peuvent être supprimées à tout moment en effaçant vos données de navigation.
                </p>
              </div>
            ) : (
              <button
                onClick={() => setShowDetails(true)}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Voir les détails →
              </button>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleAccept}
              className="flex-1 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700"
            >
              Accepter
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1"
            >
              Refuser
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Vous pouvez modifier vos préférences à tout moment en effaçant les cookies de votre navigateur.
          </p>
        </div>
      </div>
    </div>
  );
};
