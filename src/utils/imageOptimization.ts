
export const imageOptimization = {
  // Précharge les images critiques
  preloadImage: (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  },

  // Précharge plusieurs images
  preloadImages: async (srcs: string[]): Promise<void> => {
    try {
      await Promise.all(srcs.map(src => imageOptimization.preloadImage(src)));
    } catch (error) {
      console.warn('Erreur lors du préchargement des images:', error);
    }
  },

  // Génère des srcset pour responsive images
  generateSrcSet: (baseSrc: string, sizes: number[] = [320, 640, 1024, 1920]): string => {
    if (baseSrc.includes('lovable-uploads')) {
      // Pour les images Lovable, on retourne l'image originale
      return baseSrc;
    }
    
    return sizes
      .map(size => `${baseSrc}?w=${size} ${size}w`)
      .join(', ');
  },

  // Détecte le support WebP
  supportsWebP: (): Promise<boolean> => {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  },

  // Convertit une URL d'image en WebP si supporté
  getOptimizedImageUrl: async (src: string): Promise<string> => {
    const supportsWebP = await imageOptimization.supportsWebP();
    
    if (supportsWebP && !src.includes('.webp') && !src.includes('data:image')) {
      // Si l'image peut être convertie en WebP
      if (src.includes('lovable-uploads')) {
        return src; // Les images Lovable sont déjà optimisées
      }
    }
    
    return src;
  }
};

// Précharge uniquement le logo (petite image) au chargement de l'app
export const preloadCriticalImages = () => {
  const criticalImages = [
    '/lovable-uploads/85b45a40-6291-4f5d-a377-65024ddb1976.png' // Logo uniquement
  ];
  
  imageOptimization.preloadImages(criticalImages);
};
