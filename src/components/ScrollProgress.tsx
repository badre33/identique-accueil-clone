
import { useState, useEffect, useRef } from 'react';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const ticking = useRef(false);
  const cachedHeight = useRef(0);

  useEffect(() => {
    // Cache document height to avoid repeated DOM reads
    const updateCachedHeight = () => {
      cachedHeight.current = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    };

    // Initial calculation
    updateCachedHeight();

    // Update on resize with debounce
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateCachedHeight, 200);
    };

    const updateScrollProgress = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          if (cachedHeight.current > 0) {
            const scrollPx = window.pageYOffset;
            const scrolled = scrollPx / cachedHeight.current;
            setScrollProgress(scrolled * 100);
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-black to-gray-700 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
