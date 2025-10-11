import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Check, ArrowRight } from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

export const QuoteCalculator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [projectScale, setProjectScale] = useState<'small' | 'medium' | 'large'>('medium');
  const [urgency, setUrgency] = useState<'standard' | 'urgent'>('standard');

  const services: ServiceOption[] = [
    {
      id: 'social-media',
      name: 'Réseaux sociaux',
      basePrice: 25000,
      description: 'Stratégie éditoriale premium, création de contenu exclusif, community management'
    },
    {
      id: 'video-production',
      name: 'Production vidéo',
      basePrice: 45000,
      description: 'Production cinématographique haut de gamme, post-production avancée'
    },
    {
      id: 'photography',
      name: 'Photographie',
      basePrice: 18000,
      description: 'Shooting photo corporate premium, retouche professionnelle avancée'
    },
    {
      id: 'web-writing',
      name: 'Rédaction web',
      basePrice: 12000,
      description: 'Copywriting stratégique, contenus SEO premium, storytelling corporate'
    }
  ];

  const scaleMultipliers = {
    small: 0.8,
    medium: 1,
    large: 1.5
  };

  const urgencyMultipliers = {
    standard: 1,
    urgent: 1.3
  };

  const calculateTotal = () => {
    const baseTotal = selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.basePrice || 0);
    }, 0);

    return Math.round(baseTotal * scaleMultipliers[projectScale] * urgencyMultipliers[urgency]);
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleGetQuote = () => {
    const selectedServiceNames = selectedServices.map(id => 
      services.find(s => s.id === id)?.name
    ).join(', ');
    
    const message = `Bonjour, je souhaite un devis premium pour les services suivants : ${selectedServiceNames}. Échelle du projet : ${projectScale}, Délai : ${urgency}. Total estimé : ${calculateTotal().toLocaleString()}DH`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/212699024526?text=${encodedMessage}`, '_blank');
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
          <Calculator className="w-6 h-6" />
          <span>Calculateur de devis</span>
        </CardTitle>
        <p className="text-gray-600">
          Sélectionnez vos besoins pour obtenir une estimation personnalisée
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services souhaités</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                  selectedServices.includes(service.id)
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{service.name}</h4>
                      {selectedServices.includes(service.id) && (
                        <Check className="w-4 h-4 text-green-600" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    À partir de {service.basePrice.toLocaleString()}DH
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Échelle du projet */}
        <div>
          <h3 className="font-semibold mb-4">Échelle du projet</h3>
          <div className="flex space-x-4">
            {[
              { key: 'small' as const, label: 'Petit', desc: 'Projet simple' },
              { key: 'medium' as const, label: 'Moyen', desc: 'Projet standard' },
              { key: 'large' as const, label: 'Grand', desc: 'Projet complexe' }
            ].map((scale) => (
              <button
                key={scale.key}
                onClick={() => setProjectScale(scale.key)}
                className={`flex-1 p-3 border-2 rounded-lg text-center transition-all ${
                  projectScale === scale.key
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-medium">{scale.label}</div>
                <div className="text-sm text-gray-600">{scale.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Urgence */}
        <div>
          <h3 className="font-semibold mb-4">Délai souhaité</h3>
          <div className="flex space-x-4">
            {[
              { key: 'standard' as const, label: 'Standard', desc: '2-4 semaines' },
              { key: 'urgent' as const, label: 'Urgent', desc: '1-2 semaines (+30%)' }
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => setUrgency(option.key)}
                className={`flex-1 p-3 border-2 rounded-lg text-center transition-all ${
                  urgency === option.key
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-medium">{option.label}</div>
                <div className="text-sm text-gray-600">{option.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Résultat */}
        {selectedServices.length > 0 && (
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Estimation totale</h3>
              <div className="text-3xl font-light text-black">
                {calculateTotal().toLocaleString()}DH
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Cette estimation est indicative. Le devis final sera adapté selon vos besoins spécifiques.
            </p>
            
            <Button 
              onClick={handleGetQuote}
              className="w-full bg-black hover:bg-gray-800 text-white flex items-center justify-center space-x-2"
            >
              <span>Demander un devis personnalisé</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
