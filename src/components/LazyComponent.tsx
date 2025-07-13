import { useEffect, useRef, useState } from 'react';

interface LazyComponentProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  placeholder?: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
  onVisible?: () => void;
}

export const LazyComponent = ({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  placeholder,
  className = '',
  fallback,
  onVisible
}: LazyComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            onVisible?.();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, onVisible]);

  // Error boundary pour les composants lazy
  useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className={`error-boundary ${className}`} ref={ref}>
        {fallback || (
          <div className="p-4 text-center text-gray-500">
            Erreur de chargement du composant
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      ref={ref} 
      className={`lazy-component ${className}`}
      data-component-lazy={!isVisible}
      style={{ 
        visibility: isVisible ? 'visible' : 'hidden',
        minHeight: isVisible ? 'auto' : '200px', // Réserver l'espace pour éviter CLS
        containIntrinsicSize: '200px' // Optimisation moderne pour CLS
      }}
    >
      {isVisible ? children : (placeholder || (
        <div className="animate-pulse bg-gray-200 rounded h-48 w-full" />
      ))}
    </div>
  );
};

// Hook pour lazy loading personnalisé
export const useLazyLoad = (threshold = 0.1, rootMargin = '50px') => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};