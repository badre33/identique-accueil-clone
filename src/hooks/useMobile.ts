
import { useState, useEffect } from 'react';

interface MobileUtils {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  orientation: 'portrait' | 'landscape';
  touchSupport: boolean;
  screenSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const useMobile = (): MobileUtils => {
  const [mobileState, setMobileState] = useState<MobileUtils>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    orientation: 'landscape',
    touchSupport: false,
    screenSize: 'lg'
  });

  useEffect(() => {
    const updateMobileState = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      let screenSize: MobileUtils['screenSize'] = 'lg';
      if (width < 640) screenSize = 'xs';
      else if (width < 768) screenSize = 'sm';
      else if (width < 1024) screenSize = 'md';
      else if (width < 1280) screenSize = 'lg';
      else if (width < 1536) screenSize = 'xl';
      else screenSize = '2xl';

      setMobileState({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        orientation: height > width ? 'portrait' : 'landscape',
        touchSupport,
        screenSize
      });
    };

    updateMobileState();
    window.addEventListener('resize', updateMobileState);
    window.addEventListener('orientationchange', updateMobileState);

    return () => {
      window.removeEventListener('resize', updateMobileState);
      window.removeEventListener('orientationchange', updateMobileState);
    };
  }, []);

  return mobileState;
};
