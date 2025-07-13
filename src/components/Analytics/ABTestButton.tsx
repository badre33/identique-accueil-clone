import React from 'react';
import { Button } from '@/components/ui/button';
import { abTestManager } from '@/utils/analytics';
import { useAnalytics } from './AnalyticsProvider';

interface ABTestButtonProps {
  testId: string;
  conversionType?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  fallbackText?: string;
  fallbackVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  fallbackSize?: 'default' | 'sm' | 'lg' | 'icon';
}

export const ABTestButton: React.FC<ABTestButtonProps> = ({
  testId,
  conversionType = 'click',
  onClick,
  className,
  children,
  fallbackText = 'Click me',
  fallbackVariant = 'default',
  fallbackSize = 'default'
}) => {
  const { trackEvent } = useAnalytics();
  
  // Obtenir la configuration du variant pour ce test
  const variantConfig = abTestManager.getVariantConfig(testId);
  const variantId = abTestManager.getVariant(testId);

  // Configuration par défaut si pas de test A/B actif
  const config = variantConfig || {
    text: fallbackText,
    color: fallbackVariant,
    size: fallbackSize
  };

  const handleClick = () => {
    // Tracker le clic
    trackEvent('ab_test_button_click', {
      test_id: testId,
      variant_id: variantId,
      conversion_type: conversionType
    });

    // Tracker la conversion si configuré
    if (variantId) {
      abTestManager.trackConversion(testId, conversionType);
    }

    // Appeler le onClick personnalisé
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      variant={config.color as any || fallbackVariant}
      size={config.size as any || fallbackSize}
      onClick={handleClick}
      className={className}
    >
      {children || config.text || fallbackText}
    </Button>
  );
};