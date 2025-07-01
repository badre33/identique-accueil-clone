
export const LoadingSpinner = ({ size = 'medium', message = 'Chargement...' }: { size?: 'small' | 'medium' | 'large'; message?: string }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          {/* Main spinner */}
          <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-black rounded-full animate-spin`}></div>
          
          {/* Inner pulse effect */}
          <div className={`absolute inset-2 ${size === 'large' ? 'inset-3' : size === 'small' ? 'inset-1' : 'inset-2'} bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse opacity-50`}></div>
          
          {/* Outer glow ring */}
          <div className={`absolute -inset-2 ${sizeClasses[size]} border-2 border-blue-300/30 rounded-full animate-ping`}></div>
        </div>
        
        <div className="text-center space-y-2">
          <p className="text-gray-600 font-medium animate-pulse">{message}</p>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Loading state pour les boutons
export const ButtonLoadingSpinner = ({ size = 'small' }: { size?: 'small' | 'medium' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5'
  };

  return (
    <div className={`${sizeClasses[size]} border-2 border-current border-t-transparent rounded-full animate-spin`} />
  );
};

// Skeleton loading pour les cartes
export const CardSkeleton = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
    <div className="space-y-3">
      <div className="h-3 bg-gray-200 rounded"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      <div className="h-3 bg-gray-200 rounded w-4/6"></div>
    </div>
  </div>
);
