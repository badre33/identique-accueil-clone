import React, { useEffect } from 'react';
import { useAnalytics } from './AnalyticsProvider';
import { trackConversion } from '@/utils/analytics';

interface ConversionTrackerProps {
  children: React.ReactNode;
  conversionId: string;
  conversionType: 'view' | 'interaction' | 'scroll' | 'time';
  triggerValue?: number; // Pour scroll % ou temps en secondes
  trackOnce?: boolean;
}

export const ConversionTracker: React.FC<ConversionTrackerProps> = ({
  children,
  conversionId,
  conversionType,
  triggerValue = 0,
  trackOnce = true
}) => {
  const { trackConversion: trackConversionEvent, isInitialized } = useAnalytics();
  const [hasTracked, setHasTracked] = React.useState(false);

  const track = () => {
    if (!isInitialized || (trackOnce && hasTracked)) return;
    
    trackConversionEvent(conversionId, {
      conversion_type: conversionType,
      trigger_value: triggerValue,
      timestamp: new Date().toISOString()
    });
    
    setHasTracked(true);
  };

  useEffect(() => {
    if (conversionType === 'view') {
      // Tracker la vue après un délai
      const timer = setTimeout(track, 1000);
      return () => clearTimeout(timer);
    }

    if (conversionType === 'time') {
      // Tracker après un certain temps
      const timer = setTimeout(track, (triggerValue || 30) * 1000);
      return () => clearTimeout(timer);
    }

    if (conversionType === 'scroll') {
      let cachedDocHeight = 0;
      let ticking = false;
      const threshold = triggerValue || 75;

      const updateDocHeight = () => {
        requestAnimationFrame(() => {
          cachedDocHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        });
      };

      let resizeTimeout: ReturnType<typeof setTimeout>;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateDocHeight, 200);
      };

      const handleScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          if (cachedDocHeight > 0) {
            const scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercent = (scrollTop / cachedDocHeight) * 100;
            if (scrollPercent >= threshold) {
              track();
              window.removeEventListener('scroll', handleScroll);
              window.removeEventListener('resize', handleResize);
            }
          }
          ticking = false;
        });
      };

      // Defer initial layout read
      requestAnimationFrame(updateDocHeight);
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
      };
    }
  }, [conversionType, triggerValue, isInitialized, hasTracked]);

  const handleInteraction = () => {
    if (conversionType === 'interaction') {
      track();
    }
  };

  return (
    <div onClick={handleInteraction} onMouseEnter={handleInteraction}>
      {children}
    </div>
  );
};