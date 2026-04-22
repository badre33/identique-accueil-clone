
import React from 'react';
import { usePersonalization } from '@/hooks/usePersonalization';
import { Coffee, Sun, Sunset, Moon } from 'lucide-react';

export const DynamicContent = () => {
  const { personalizationData, isLoading } = usePersonalization();

  if (isLoading) return null;

  const { timeOfDay, industryContext } = personalizationData;

  const getTimeBasedContent = () => {
    switch (timeOfDay) {
      case 'morning':
        return {
          icon: Coffee,
          title: 'Commençons la journée par un cadrage solide',
          description: 'Le matin est souvent le meilleur moment pour prioriser les leviers d\'un dispositif digital.',
          color: 'from-yellow-400 to-orange-500'
        };
      case 'afternoon':
        return {
          icon: Sun,
          title: 'L\'après-midi du pilotage précis',
          description: 'C\'est le bon moment pour aligner contenu, performance et reporting autour d\'objectifs business clairs.',
          color: 'from-blue-400 to-cyan-500'
        };
      case 'evening':
        return {
          icon: Sunset,
          title: 'La fin de journée des arbitrages utiles',
          description: 'Les meilleures décisions arrivent souvent quand le dispositif est enfin vu dans son ensemble.',
          color: 'from-purple-500 to-pink-500'
        };
      case 'night':
        return {
          icon: Moon,
          title: 'Quand la nuit sert la clarté stratégique',
          description: 'Les sujets à fort enjeu méritent parfois un temps calme pour être cadrés avec précision.',
          color: 'from-indigo-500 to-purple-600'
        };
      default:
        return {
          icon: Sun,
          title: 'Structurons quelque chose de solide',
          description: 'Votre marque mérite un dispositif cohérent, piloté et mesurable.',
          color: 'from-gray-500 to-gray-700'
        };
    }
  };

  const getIndustryContext = () => {
    if (!industryContext) return null;

    switch (industryContext) {
      case 'professional':
        return (
          <div className="mt-4 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
            <p className="text-blue-800 text-sm">
              <strong>LinkedIn vous a mené ici ?</strong> Parfait. Nous accompagnons les équipes dirigeantes sur des sujets de positionnement, contenu et performance à fort enjeu.
            </p>
          </div>
        );
      case 'search':
        return (
          <div className="mt-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
            <p className="text-green-800 text-sm">
              <strong>Vous nous avez trouvés sur Google ?</strong> Vous êtes au bon endroit si vous cherchez un partenaire digital pour une marque déjà installée.
            </p>
          </div>
        );
      case 'social':
        return (
          <div className="mt-4 p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500">
            <p className="text-purple-800 text-sm">
              <strong>Venu des réseaux sociaux ?</strong> Nous concevons des dispositifs éditoriaux et media qui renforcent la cohérence de marque sur chaque canal.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const content = getTimeBasedContent();
  const Icon = content.icon;

  return (
    <div className="mb-12">
      <div className={`bg-gradient-to-r ${content.color} rounded-3xl p-8 text-white mb-6`}>
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-white/20 rounded-2xl p-3">
            <Icon className="w-8 h-8" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-light">
            {content.title}
          </h2>
        </div>
        <p className="text-lg opacity-90 leading-relaxed">
          {content.description}
        </p>
      </div>
      
      {getIndustryContext()}
    </div>
  );
};
