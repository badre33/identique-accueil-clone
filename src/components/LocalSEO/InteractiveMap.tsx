import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Navigation } from 'lucide-react';

// Utiliser une variable d'environnement pour le token Mapbox
// Note: Les tokens Mapbox publics (pk.*) sont conçus pour être publics et sont limités par domaine
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_PUBLIC_TOKEN || '';

const offices = [
  {
    id: 'casablanca',
    name: 'Casablanca',
    coordinates: [-7.5898, 33.5731],
    address: 'Centre Ville, Casablanca',
    phone: '+212 522 XXX XXX',
    specialties: ['Marketing Digital', 'E-commerce', 'Branding Corporate']
  },
  {
    id: 'rabat',
    name: 'Rabat',
    coordinates: [-6.8416, 34.0209],
    address: 'Agdal, Rabat',
    phone: '+212 537 XXX XXX',
    specialties: ['Communication Institutionnelle', 'Relations Publiques', 'Événementiel']
  },
  {
    id: 'marrakech',
    name: 'Marrakech',
    coordinates: [-7.9811, 31.6295],
    address: 'Gueliz, Marrakech',
    phone: '+212 524 XXX XXX',
    specialties: ['Tourisme Digital', 'Hôtellerie', 'Artisanat Local']
  }
];

export const InteractiveMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);
  const [mapInitialized, setMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !MAPBOX_TOKEN || mapInitialized) return;

    try {
      mapboxgl.accessToken = MAPBOX_TOKEN;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-7.0926, 31.7917], // Centre du Maroc
        zoom: 6
      });

      // Ajouter les marqueurs pour chaque bureau
      offices.forEach((office) => {
        // Créer un élément de marqueur personnalisé
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.width = '32px';
        el.style.height = '32px';
        el.style.backgroundImage = 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTQiIGZpbGw9IiNlZjQ0NDQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjYiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+)';
        el.style.backgroundSize = 'contain';
        el.style.cursor = 'pointer';

        // Ajouter le marqueur à la carte
        const marker = new mapboxgl.Marker(el)
          .setLngLat(office.coordinates as [number, number])
          .addTo(map.current!);

        // Créer un popup
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-3">
              <h3 class="font-bold text-lg mb-2">Link Agency ${office.name}</h3>
              <p class="text-sm text-gray-600 mb-2">${office.address}</p>
              <p class="text-sm text-gray-600 mb-2">${office.phone}</p>
              <div class="mb-2">
                <p class="text-xs font-medium mb-1">Spécialités:</p>
                ${office.specialties.map(s => `<span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1">${s}</span>`).join('')}
              </div>
              <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${office.coordinates[1]},${office.coordinates[0]}', '_blank')" 
                      class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90">
                Itinéraire
              </button>
            </div>
          `);

        // Ajouter les événements
        el.addEventListener('click', () => {
          popup.addTo(map.current!);
          setSelectedOffice(office.id);
        });

        el.addEventListener('mouseenter', () => {
          popup.addTo(map.current!);
        });

        el.addEventListener('mouseleave', () => {
          popup.remove();
        });
      });

      // Ajouter les contrôles de navigation
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      setMapInitialized(true);
    } catch (error) {
      // Erreur silencieuse - la carte ne se chargera simplement pas si le token est invalide
    }
  };

  useEffect(() => {
    if (MAPBOX_TOKEN) {
      initializeMap();
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  const focusOnOffice = (officeId: string) => {
    const office = offices.find(o => o.id === officeId);
    if (office && map.current) {
      map.current.flyTo({
        center: office.coordinates as [number, number],
        zoom: 12,
        duration: 2000
      });
      setSelectedOffice(officeId);
    }
  };

  if (!MAPBOX_TOKEN) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Carte Interactive - Nos Bureaux au Maroc
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              La carte interactive nécessite une configuration Mapbox.
              Contactez l'administrateur pour activer cette fonctionnalité.
            </p>
            <div className="space-y-2">
              {offices.map((office) => (
                <div key={office.id} className="p-3 border rounded-lg">
                  <h4 className="font-semibold">{office.name}</h4>
                  <p className="text-sm text-muted-foreground">{office.address}</p>
                  <p className="text-sm text-muted-foreground">{office.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Nos Bureaux au Maroc
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
            {offices.map((office) => (
              <button
                key={office.id}
                onClick={() => focusOnOffice(office.id)}
                className={`flex items-center justify-start px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedOffice === office.id
                    ? 'bg-primary text-white'
                    : 'border border-gray-300 hover:bg-gray-100'
                }`}
              >
                <Navigation className="h-4 w-4 mr-2" />
                {office.name}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div ref={mapContainer} className="w-full h-96 rounded-lg shadow-lg" />
    </div>
  );
};