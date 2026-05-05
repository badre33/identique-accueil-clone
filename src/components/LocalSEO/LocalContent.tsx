import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Users, TrendingUp, Award } from 'lucide-react';

const cityContent = {
  casablanca: {
    name: 'Casablanca',
    title: 'Agence Marketing Digital à Casablanca',
    description: 'Capital économique du Maroc, Casablanca concentre les plus grandes entreprises. Notre expertise locale nous permet d\'accompagner vos projets digitaux avec une connaissance approfondie du marché casablancais.',
    stats: {
      clients: 120,
      projects: 300,
      growth: '+250%'
    },
    sectors: [
      'Finance & Banque',
      'E-commerce',
      'Industrie',
      'Services B2B',
      'Industrie & Énergie'
    ],
    caseStudies: [
      {
        client: 'Groupe Retail National',
        sector: 'Retail & Distribution',
        result: '+300% de performance e-commerce',
        description: 'Refonte du dispositif digital et pilotage acquisition pour un acteur retail établi à Casablanca'
      },
      {
        client: 'Acteur Bancaire Marocain',
        sector: 'Banque & Assurance',
        result: 'Dispositif digital structurant',
        description: 'Pilotage de la communication digitale et du contenu institutionnel pour une marque financière de référence'
      }
    ],
    localPartners: [
      'CRI Casablanca-Settat',
      'CGEM',
      'Technopark Casablanca',
      'École Supérieure de Commerce'
    ]
  },
  rabat: {
    name: 'Rabat',
    title: 'Communication Institutionnelle à Rabat',
    description: 'Capitale politique et administrative, Rabat abrite les institutions gouvernementales et les organismes internationaux. Notre équipe maîtrise les codes de la communication institutionnelle.',
    stats: {
      clients: 45,
      projects: 120,
      growth: '+180%'
    },
    sectors: [
      'Institutions Publiques',
      'ONG Internationales',
      'Éducation Supérieure',
      'Secteur Bancaire',
      'Ambassades & Consulats'
    ],
    caseStudies: [
      {
        client: 'Institution Publique',
        sector: 'Gouvernemental',
        result: 'Communication digitale modernisée',
        description: 'Refonte complète de la stratégie de communication digitale d\'une institution publique'
      },
      {
        client: 'Université Rabat',
        sector: 'Éducation',
        result: '+400% d\'engagement étudiant',
        description: 'Campagne de sensibilisation et plateforme étudiante interactive'
      }
    ],
    localPartners: [
      'Wilaya de Rabat-Salé-Kénitra',
      'Université Mohammed V',
      'Centre Régional d\'Investissement',
      'Cluster Digital'
    ]
  },
  marrakech: {
    name: 'Marrakech',
    title: 'Marketing Touristique à Marrakech',
    description: 'Perle du Sud et destination touristique mondiale, Marrakech combine tradition et modernité. Notre expertise locale valorise l\'authenticité marocaine dans vos communications.',
    stats: {
      clients: 85,
      projects: 200,
      growth: '+320%'
    },
    sectors: [
      'Hôtellerie de Luxe',
      'Tourisme & Loisirs',
      'Artisanat d\'Art',
      'Restauration',
      'Événementiel'
    ],
    caseStudies: [
      {
        client: 'Riad de Luxe',
        sector: 'Hôtellerie',
        result: 'Taux d\'occupation +60%',
        description: 'Stratégie digitale complète pour un riad de luxe dans la médina'
      },
      {
        client: 'Festival Marrakech',
        sector: 'Événementiel',
        result: '100K visiteurs internationaux',
        description: 'Communication globale et billetterie digitale pour un festival culturel'
      }
    ],
    localPartners: [
      'CRI Marrakech-Safi',
      'Office du Tourisme',
      'Conseil Régional',
      'École Supérieure de Tourisme'
    ]
  }
};

interface LocalContentProps {
  defaultCity?: 'casablanca' | 'rabat' | 'marrakech';
}

export const LocalContent: React.FC<LocalContentProps> = ({ defaultCity = 'casablanca' }) => {
  const [selectedCity, setSelectedCity] = useState<'casablanca' | 'rabat' | 'marrakech'>(defaultCity);
  const [detectedCity, setDetectedCity] = useState<string | null>(null);

  // Détection géographique basique avec cache et timeout
  useEffect(() => {
    const detectUserLocation = async () => {
      // Check cache first (1 hour TTL)
      const CACHE_KEY = 'linkagency_geo_location';
      const CACHE_TTL = 60 * 60 * 1000; // 1 hour
      
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_TTL && data.city) {
            const city = data.city.toLowerCase();
            if (city.includes('casablanca') || city.includes('casa')) {
              setDetectedCity('casablanca');
              setSelectedCity('casablanca');
            } else if (city.includes('rabat')) {
              setDetectedCity('rabat');
              setSelectedCity('rabat');
            } else if (city.includes('marrakech') || city.includes('marrakesh')) {
              setDetectedCity('marrakech');
              setSelectedCity('marrakech');
            }
            return;
          }
        }
      } catch {
        // Invalid cache, continue to fetch
      }

      // Fetch with timeout and proper error handling
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      try {
        const response = await fetch('https://ipapi.co/json/', {
          signal: controller.signal,
          headers: { 'Accept': 'application/json' }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        
        // Validate response structure
        if (data && typeof data.city === 'string') {
          // Cache the result
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            data,
            timestamp: Date.now()
          }));
          
          const city = data.city.toLowerCase();
          if (city.includes('casablanca') || city.includes('casa')) {
            setDetectedCity('casablanca');
            setSelectedCity('casablanca');
          } else if (city.includes('rabat')) {
            setDetectedCity('rabat');
            setSelectedCity('rabat');
          } else if (city.includes('marrakech') || city.includes('marrakesh')) {
            setDetectedCity('marrakech');
            setSelectedCity('marrakech');
          }
        }
      } catch (error) {
        if ((error as any).name === 'AbortError') {
          console.warn('Geolocation request timed out');
        } else {
          console.warn('Geolocation unavailable:', (error as Error).message);
        }
        // Graceful degradation - use default city (already set)
      } finally {
        clearTimeout(timeoutId);
      }
    };

    detectUserLocation();
  }, []);

  const currentCity = cityContent[selectedCity];

  return (
    <div className="space-y-8">
      {/* Sélecteur de ville avec détection */}
      <div className="text-center space-y-4">
        {detectedCity && (
          <p className="text-sm text-muted-foreground">
            📍 Nous avons détecté que vous êtes près de {cityContent[detectedCity as keyof typeof cityContent].name}
          </p>
        )}
        
        <Tabs value={selectedCity} onValueChange={(value) => setSelectedCity(value as any)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="casablanca">Casablanca</TabsTrigger>
            <TabsTrigger value="rabat">Rabat</TabsTrigger>
            <TabsTrigger value="marrakech">Marrakech</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedCity} className="space-y-6 mt-8">
            {/* En-tête locale */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">{currentCity.title}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {currentCity.description}
              </p>
            </div>

            {/* Statistiques locales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">{currentCity.stats.clients}</p>
                    <p className="text-sm text-muted-foreground">Clients à {currentCity.name}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">{currentCity.stats.projects}</p>
                    <p className="text-sm text-muted-foreground">Projets réalisés</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">{currentCity.stats.growth}</p>
                    <p className="text-sm text-muted-foreground">Croissance moyenne clients</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Secteurs d'expertise locale */}
            <Card>
              <CardHeader>
                <CardTitle>Secteurs d'expertise à {currentCity.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {currentCity.sectors.map((sector, index) => (
                    <Badge key={index} variant="secondary">
                      {sector}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Études de cas locales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentCity.caseStudies.map((study, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{study.client}</CardTitle>
                    <Badge variant="outline">{study.sector}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary mb-2">{study.result}</p>
                    <p className="text-sm text-muted-foreground">{study.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Partenaires locaux */}
            <Card>
              <CardHeader>
                <CardTitle>Nos partenaires à {currentCity.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {currentCity.localPartners.map((partner, index) => (
                    <div key={index} className="text-center p-4 border rounded-lg">
                      <p className="text-sm font-medium">{partner}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};