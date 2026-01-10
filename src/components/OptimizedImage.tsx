
import { useState, useRef, useEffect } from 'react';
import { AccessibilityProps } from '@/types/common';

interface OptimizedImageProps extends AccessibilityProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  decorative?: boolean;
  sizes?: string;
  quality?: number;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  priority = false,
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+",
  decorative = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85,
  ...accessibilityProps
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imageSrc, setImageSrc] = useState(priority ? src : placeholder);
  const [hasError, setHasError] = useState(false);
  const [supportedFormat, setSupportedFormat] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);

  // Détection du support des formats modernes - mise en cache pour éviter les reflows
  useEffect(() => {
    // Utiliser le cache du sessionStorage pour éviter les appels répétés
    const cachedFormat = sessionStorage.getItem('image-format-support');
    if (cachedFormat) {
      setSupportedFormat(cachedFormat);
      return;
    }

    // Déférer la détection pour éviter les forced reflows au chargement initial
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(() => {
        const checkWebPSupport = () => {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = 1;
            return canvas.toDataURL('image/webp').indexOf('webp') > -1;
          } catch {
            return false;
          }
        };

        const checkAVIFSupport = () => {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = 1;
            return canvas.toDataURL('image/avif').indexOf('avif') > -1;
          } catch {
            return false;
          }
        };

        let format = '';
        if (checkAVIFSupport()) {
          format = 'avif';
        } else if (checkWebPSupport()) {
          format = 'webp';
        }

        setSupportedFormat(format);
        if (format) {
          sessionStorage.setItem('image-format-support', format);
        }
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (isInView && !priority) {
      setImageSrc(src);
    }
  }, [isInView, src, priority]);

  const getOptimizedSrc = (originalSrc: string) => {
    // Si c'est un placeholder ou déjà optimisé, retourner tel quel
    if (originalSrc.includes('data:image') || originalSrc.includes('.webp') || originalSrc.includes('.avif')) {
      return originalSrc;
    }
    
    // Pour les images Lovable, essayer d'appliquer le format moderne
    if (originalSrc.includes('lovable-uploads') && supportedFormat) {
      // Note: En production, vous devriez avoir un service de transformation d'images
      // Pour maintenant, on retourne l'image originale
      return originalSrc;
    }
    
    return originalSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={getOptimizedSrc(imageSrc)}
        alt={decorative ? "" : alt}
        width={width}
        height={height}
        sizes={sizes}
        className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } w-full h-full object-cover`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        role={decorative ? "presentation" : undefined}
        aria-hidden={decorative ? "true" : undefined}
        {...accessibilityProps}
      />
      
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-neutral-200 animate-pulse flex items-center justify-center"
          aria-label="Chargement de l'image en cours"
          role="status"
        >
          <div 
            className="w-8 h-8 border-2 border-neutral-300 border-t-neutral-600 rounded-full animate-spin"
            aria-hidden="true"
          ></div>
          <span className="sr-only">Chargement de l'image...</span>
        </div>
      )}

      {hasError && (
        <div 
          className="absolute inset-0 bg-neutral-100 flex items-center justify-center text-neutral-500"
          role="alert"
          aria-label="Erreur de chargement de l'image"
        >
          <div className="text-center p-4">
            <div className="text-2xl mb-2" aria-hidden="true">📷</div>
            <p className="text-sm">Image indisponible</p>
          </div>
        </div>
      )}
    </div>
  );
};
