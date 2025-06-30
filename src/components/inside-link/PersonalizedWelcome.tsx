
import React from 'react';
import { MapPin, Clock, Eye } from 'lucide-react';
import { usePersonalization } from '@/hooks/usePersonalization';

export const PersonalizedWelcome = () => {
  const { personalizationData, isLoading } = usePersonalization();

  if (isLoading) {
    return (
      <div className="animate-pulse bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-6 mb-8">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      </div>
    );
  }

  const { welcomeMessage, visitorData, timeOfDay } = personalizationData;

  const getTimeIcon = () => {
    switch (timeOfDay) {
      case 'morning': return '🌅';
      case 'afternoon': return '☀️';
      case 'evening': return '🌅';
      case 'night': return '🌙';
      default: return '👋';
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-100">
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-2xl">{getTimeIcon()}</span>
        <h3 className="text-xl font-semibold text-gray-800">
          {welcomeMessage}
        </h3>
      </div>
      
      <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-600">
        {visitorData.country && (
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{visitorData.city ? `${visitorData.city}, ` : ''}{visitorData.country}</span>
          </div>
        )}
        
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>
            {timeOfDay === 'morning' && 'Matinée productive'}
            {timeOfDay === 'afternoon' && 'Après-midi créatif'}
            {timeOfDay === 'evening' && 'Soirée inspirante'}
            {timeOfDay === 'night' && 'Nuit studieuse'}
          </span>
        </div>

        {visitorData.isReturningVisitor && (
          <div className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>Visite n°{visitorData.visitCount}</span>
          </div>
        )}
      </div>
    </div>
  );
};
