// Préchargement intelligent des chunks
export const preloadRouteChunk = (routeName: string) => {
  const chunkMap: Record<string, () => Promise<any>> = {
    branding: () => import('../pages/Branding'),
    evenementiel: () => import('../pages/Evenementiel'),
    personalBranding: () => import('../pages/PersonalBranding'),
    contentDigital: () => import('../pages/ContentDigital'),
    insideLink: () => import('../pages/InsideLink'),
    collaborations: () => import('../pages/Collaborations')
  };

  if (chunkMap[routeName]) {
    // Précharge le chunk sans l'exécuter
    const link = document.createElement('link');
    link.rel = 'modulepreload';
    link.href = `/${routeName}`;
    document.head.appendChild(link);
  }
};

// Préchargement intelligent basé sur le comportement utilisateur
export const intelligentPreloading = () => {
  let mouseoverTimer: ReturnType<typeof setTimeout>;

  // Précharge au hover des liens (300ms de délai)
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="/"]') as HTMLAnchorElement;
    
    if (link && link.href) {
      mouseoverTimer = setTimeout(() => {
        const route = link.pathname.slice(1) || 'index';
        preloadRouteChunk(route);
      }, 300);
    }
  });

  // Annule le préchargement si l'utilisateur quitte le lien
  document.addEventListener('mouseout', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="/"]');
    
    if (link && mouseoverTimer) {
      clearTimeout(mouseoverTimer);
    }
  });
};

// Optimisation des ressources critiques
// Note: preconnects and font preloads are already in index.html — no need to duplicate them here
export const optimizeCriticalResources = () => {
  // All critical preconnects and font preloads are handled in index.html
  // to avoid duplicate link tags that hurt Lighthouse scores
};

// Détection de la connexion réseau
export const getNetworkInfo = () => {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData
    };
  }
  return null;
};

// Adaptation du contenu selon la connexion
export const adaptContentForNetwork = () => {
  const networkInfo = getNetworkInfo();
  
  if (networkInfo) {
    const isSlowConnection = networkInfo.effectiveType === '2g' || 
                           networkInfo.effectiveType === 'slow-2g' || 
                           networkInfo.saveData;

    if (isSlowConnection) {
      // Réduire la qualité des images
      document.documentElement.classList.add('low-bandwidth');
      
      // Désactiver les animations coûteuses
      const style = document.createElement('style');
      style.textContent = `
        .low-bandwidth * {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
        .low-bandwidth .animate-float,
        .low-bandwidth .animate-gradient {
          animation: none !important;
        }
      `;
      document.head.appendChild(style);
    }
  }
};