
import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  priority = false,
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+"
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imageSrc, setImageSrc] = useState(priority ? src : placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

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

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const getOptimizedSrc = (originalSrc: string) => {
    // Si l'image est déjà optimisée ou si c'est un placeholder, on la retourne telle quelle
    if (originalSrc.includes('data:image') || originalSrc.includes('.webp')) {
      return originalSrc;
    }
    
    // Pour les images Lovable, on essaie d'abord le format WebP
    if (originalSrc.includes('lovable-uploads')) {
      return originalSrc;
    }
    
    return originalSrc;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={getOptimizedSrc(imageSrc)}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } w-full h-full object-cover`}
        onLoad={handleLoad}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};
