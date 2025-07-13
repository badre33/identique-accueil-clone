import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';

// Configuration temporaire - l'utilisateur devra entrer sa clé Mapbox
const MAPBOX_TEMP_TOKEN = 'pk.eyJ1IjoibGluay1hZ2VuY3kiLCJhIjoiY2x0ZW1wMTIzNDU2Nzg5In0.temp-token-here';

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
  const [mapboxToken, setMapboxToken] = useState(MAPBOX_TEMP_TOKEN);
  const [tokenSet, setTokenSet] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken || tokenSet) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
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

      setTokenSet(true);
    } catch (error) {
      console.error('Erreur lors de l\'initialisation de la carte:', error);
    }
  };

  useEffect(() => {
    if (mapboxToken && mapboxToken !== MAPBOX_TEMP_TOKEN) {
      initializeMap();
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapboxToken]);

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

  if (!tokenSet && mapboxToken === MAPBOX_TEMP_TOKEN) {
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
              Pour afficher la carte interactive, veuillez entrer votre token Mapbox public.
              Vous pouvez l'obtenir gratuitement sur{' '}
              <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                mapbox.com
              </a>
            </p>
            <div className="flex gap-2">
              <Input
                type="password"
                placeholder="Votre token Mapbox public"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="flex-1"
              />
              <Button onClick={initializeMap} disabled={!mapboxToken || mapboxToken === MAPBOX_TEMP_TOKEN}>
                Charger la carte
              </Button>
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
              <Button
                key={office.id}
                variant={selectedOffice === office.id ? "default" : "outline"}
                size="sm"
                onClick={() => focusOnOffice(office.id)}
                className="justify-start"
              >
                <Navigation className="h-4 w-4 mr-2" />
                {office.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div ref={mapContainer} className="w-full h-96 rounded-lg shadow-lg" />
    </div>
  );
};