import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, MousePointer, BarChart3, Download } from 'lucide-react';

interface HeatmapData {
  x: number;
  y: number;
  timestamp: number;
  element: string;
  page: string;
}

interface UserInteraction {
  element: string;
  action: string;
  timestamp: string;
  page: string;
  data?: any;
}

export const HeatmapViewer: React.FC = () => {
  const [heatmapData, setHeatmapData] = useState<HeatmapData[]>([]);
  const [interactions, setInteractions] = useState<UserInteraction[]>([]);
  const [showHeatmap, setShowHeatmap] = useState(false);

  useEffect(() => {
    // Charger les données de heatmap
    const savedHeatmap = localStorage.getItem('heatmap_data');
    if (savedHeatmap) {
      setHeatmapData(JSON.parse(savedHeatmap));
    }

    // Charger les interactions utilisateur
    const savedInteractions = localStorage.getItem('user_interactions');
    if (savedInteractions) {
      setInteractions(JSON.parse(savedInteractions));
    }
  }, []);

  const renderHeatmapOverlay = () => {
    if (!showHeatmap || heatmapData.length === 0) return null;

    return (
      <div className="fixed inset-0 pointer-events-none z-[9999]" style={{ background: 'rgba(0,0,0,0.1)' }}>
        {heatmapData.map((point, index) => (
          <div
            key={index}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: point.x - 10,
              top: point.y - 10,
              width: 20,
              height: 20,
              background: 'radial-gradient(circle, rgba(255,0,0,0.6) 0%, rgba(255,255,0,0.3) 50%, transparent 100%)',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>
    );
  };

  const getTopElements = () => {
    const elementCounts: Record<string, number> = {};
    
    heatmapData.forEach(point => {
      elementCounts[point.element] = (elementCounts[point.element] || 0) + 1;
    });

    return Object.entries(elementCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10);
  };

  const getPageStats = () => {
    const pageStats: Record<string, { clicks: number, interactions: number }> = {};
    
    heatmapData.forEach(point => {
      if (!pageStats[point.page]) {
        pageStats[point.page] = { clicks: 0, interactions: 0 };
      }
      pageStats[point.page].clicks++;
    });

    interactions.forEach(interaction => {
      if (!pageStats[interaction.page]) {
        pageStats[interaction.page] = { clicks: 0, interactions: 0 };
      }
      pageStats[interaction.page].interactions++;
    });

    return Object.entries(pageStats);
  };

  const exportData = () => {
    const data = {
      heatmap: heatmapData,
      interactions: interactions,
      exported_at: new Date().toISOString(),
      summary: {
        total_clicks: heatmapData.length,
        total_interactions: interactions.length,
        pages_tracked: [...new Set([...heatmapData.map(d => d.page), ...interactions.map(i => i.page)])].length
      }
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {renderHeatmapOverlay()}
      
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Analytics Dashboard
          </CardTitle>
          <div className="flex gap-2">
            <Button
              variant={showHeatmap ? "default" : "outline"}
              size="sm"
              onClick={() => setShowHeatmap(!showHeatmap)}
            >
              <Eye className="h-4 w-4 mr-2" />
              {showHeatmap ? 'Masquer' : 'Afficher'} Heatmap
            </Button>
            <Button variant="outline" size="sm" onClick={exportData}>
              <Download className="h-4 w-4 mr-2" />
              Exporter données
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="heatmap" className="space-y-4">
            <TabsList>
              <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
              <TabsTrigger value="interactions">Interactions</TabsTrigger>
              <TabsTrigger value="pages">Pages</TabsTrigger>
            </TabsList>

            <TabsContent value="heatmap" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">{heatmapData.length}</div>
                    <div className="text-sm text-muted-foreground">Total des clics</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">{[...new Set(heatmapData.map(d => d.page))].length}</div>
                    <div className="text-sm text-muted-foreground">Pages trackées</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">{[...new Set(heatmapData.map(d => d.element))].length}</div>
                    <div className="text-sm text-muted-foreground">Éléments cliqués</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Top éléments cliqués</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {getTopElements().map(([element, count], index) => (
                      <div key={element} className="flex items-center justify-between p-2 rounded border">
                        <span className="text-sm font-mono">{element}</span>
                        <Badge variant="secondary">{count} clics</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="interactions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Interactions récentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {interactions.slice(-20).reverse().map((interaction, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded border">
                        <div>
                          <div className="flex items-center gap-2">
                            <MousePointer className="h-4 w-4" />
                            <span className="font-medium">{interaction.action}</span>
                            <Badge variant="outline">{interaction.element}</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {interaction.page} • {new Date(interaction.timestamp).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pages" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Statistiques par page</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {getPageStats().map(([page, stats], index) => (
                      <div key={page} className="flex items-center justify-between p-3 rounded border">
                        <span className="font-medium">{page}</span>
                        <div className="flex gap-2">
                          <Badge variant="outline">{stats.clicks} clics</Badge>
                          <Badge variant="secondary">{stats.interactions} interactions</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};