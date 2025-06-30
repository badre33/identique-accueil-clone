
import { ExternalLink } from "lucide-react";

interface Collaboration {
  name: string;
  url: string;
  category: string;
  logo?: string;
  description: string;
  year: string;
  type: string;
}

interface CollaborationCardProps {
  collaboration: Collaboration;
  index: number;
}

export const CollaborationCard = ({ collaboration, index }: CollaborationCardProps) => {
  const getLogoClasses = (name: string) => {
    if (name === "Achibest Food" || name === "DWP" || name === "Focus M") {
      return "max-h-6 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity";
    }
    return "max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity";
  };

  return (
    <div 
      className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          {collaboration.logo && (
            <div className="mb-4 flex items-center justify-center h-12">
              <img 
                src={collaboration.logo} 
                alt={`${collaboration.name} logo`}
                className={getLogoClasses(collaboration.name)}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}
          <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-gray-800 transition-colors">
            {collaboration.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {collaboration.description}
          </p>
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
              {collaboration.category}
            </span>
            <span className="text-xs text-gray-500 font-medium">
              {collaboration.year}
            </span>
          </div>
          <div className="inline-block px-3 py-1 text-xs font-medium bg-black text-white rounded-full">
            {collaboration.type}
          </div>
        </div>
        {collaboration.url !== "#" && (
          <a 
            href={collaboration.url}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 p-3 hover:bg-gray-100 rounded-full hover:scale-110"
          >
            <ExternalLink className="w-5 h-5 text-gray-600" />
          </a>
        )}
      </div>
      
      <div className="h-1 bg-gradient-to-r from-black to-gray-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};
