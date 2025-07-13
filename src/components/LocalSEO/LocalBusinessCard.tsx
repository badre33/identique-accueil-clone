import React from 'react';
import { MapPin, Clock, Phone, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface LocalBusinessCardProps {
  city: 'casablanca' | 'rabat' | 'marrakech';
}

const cityData = {
  casablanca: {
    name: 'Casablanca',
    address: 'Centre Ville, Casablanca',
    coordinates: { lat: 33.5731, lng: -7.5898 },
    phone: '+212 522 XXX XXX',
    hours: 'Lun-Ven: 9h-18h, Sam: 9h-13h',
    specialties: ['Marketing Digital', 'E-commerce', 'Branding Corporate'],
    reviews: {
      rating: 4.8,
      count: 47,
      recent: [
        { author: 'Mohammed B.', rating: 5, text: 'Excellent service, équipe très professionnelle à Casablanca.' },
        { author: 'Fatima Z.', rating: 5, text: 'Nos ventes ont augmenté de 300% grâce à leur stratégie digitale.' }
      ]
    }
  },
  rabat: {
    name: 'Rabat',
    address: 'Agdal, Rabat',
    coordinates: { lat: 34.0209, lng: -6.8416 },
    phone: '+212 537 XXX XXX',
    hours: 'Lun-Ven: 9h-18h, Sam: 9h-13h',
    specialties: ['Communication Institutionnelle', 'Relations Publiques', 'Événementiel'],
    reviews: {
      rating: 4.9,
      count: 32,
      recent: [
        { author: 'Youssef M.', rating: 5, text: 'Parfait pour les projets institutionnels à Rabat.' },
        { author: 'Aicha K.', rating: 5, text: 'Organisation événementielle impeccable.' }
      ]
    }
  },
  marrakech: {
    name: 'Marrakech',
    address: 'Gueliz, Marrakech',
    coordinates: { lat: 31.6295, lng: -7.9811 },
    phone: '+212 524 XXX XXX',
    hours: 'Lun-Ven: 9h-18h, Sam: 9h-13h',
    specialties: ['Tourisme Digital', 'Hôtellerie', 'Artisanat Local'],
    reviews: {
      rating: 4.7,
      count: 38,
      recent: [
        { author: 'Omar T.', rating: 5, text: 'Spécialistes du secteur touristique à Marrakech.' },
        { author: 'Najat L.', rating: 4, text: 'Excellente connaissance du marché local.' }
      ]
    }
  }
};

export const LocalBusinessCard: React.FC<LocalBusinessCardProps> = ({ city }) => {
  const data = cityData[city];

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Link Agency {data.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Adresse et contact */}
        <div className="space-y-2">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {data.address}
          </p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            {data.phone}
          </p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {data.hours}
          </p>
        </div>

        {/* Spécialités locales */}
        <div>
          <h4 className="font-medium mb-2">Spécialités {data.name}</h4>
          <div className="flex flex-wrap gap-1">
            {data.specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        {/* Avis locaux */}
        <div className="border-t pt-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{data.reviews.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({data.reviews.count} avis)
            </span>
          </div>
          
          <div className="space-y-2">
            {data.reviews.recent.slice(0, 2).map((review, index) => (
              <div key={index} className="text-xs border-l-2 border-primary/20 pl-2">
                <div className="flex items-center gap-1 mb-1">
                  <span className="font-medium">{review.author}</span>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};