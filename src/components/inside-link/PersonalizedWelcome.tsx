
import { useState, useEffect } from 'react';
import { Users, Eye, Clock } from 'lucide-react';

export const PersonalizedWelcome = () => {
  const [visitors, setVisitors] = useState(3247);
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors(prev => prev + Math.floor(Math.random() * 3));
      setTimeSpent(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Bonjour' : currentHour < 18 ? 'Bonsoir' : 'Bonne soirée';

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-600">{greeting} ! Vous êtes en direct</span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>{visitors.toLocaleString()} visiteurs</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Users className="w-5 h-5 text-blue-600" />
        <p className="text-gray-700">
          <span className="font-semibold text-blue-600">{Math.floor(Math.random() * 8) + 3} personnes</span> consultent cette page en ce moment
        </p>
      </div>
    </div>
  );
};
