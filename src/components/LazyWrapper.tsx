
import React, { Suspense, lazy, ComponentType } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface LazyWrapperProps {
  importFunc: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ComponentType;
  retryCount?: number;
  children?: React.ReactNode;
}

export const LazyWrapper = ({ 
  importFunc, 
  fallback: Fallback = LoadingSpinner,
  retryCount = 3 
}: LazyWrapperProps) => {
  const [error, setError] = React.useState<Error | null>(null);
  const [retries, setRetries] = React.useState(0);

  const LazyComponent = React.useMemo(() => {
    return lazy(async () => {
      try {
        const module = await importFunc();
        setError(null);
        return module;
      } catch (err) {
        if (retries < retryCount) {
          setRetries(prev => prev + 1);
          // Retry after a short delay
          await new Promise(resolve => setTimeout(resolve, 1000 * (retries + 1)));
          return importFunc();
        }
        setError(err as Error);
        throw err;
      }
    });
  }, [importFunc, retries, retryCount]);

  if (error && retries >= retryCount) {
    return (
      <div className="flex items-center justify-center p-8 text-center">
        <div className="space-y-4">
          <div className="text-error-500 text-lg">⚠️ Erreur de chargement</div>
          <p className="text-neutral-600">Impossible de charger ce composant</p>
          <button 
            onClick={() => {
              setError(null);
              setRetries(0);
            }}
            className="btn-secondary"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<Fallback />}>
      <LazyComponent />
    </Suspense>
  );
};
