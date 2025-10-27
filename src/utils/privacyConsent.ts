/**
 * Privacy consent management utilities
 * Centralized consent checking for all tracking functionality
 */

export const hasPrivacyConsent = (): boolean => {
  try {
    const consent = localStorage.getItem('privacy_consent');
    return consent === 'true';
  } catch {
    return false;
  }
};

export const getConsentDate = (): string | null => {
  try {
    return localStorage.getItem('privacy_consent_date');
  } catch {
    return null;
  }
};

export const revokeConsent = (): void => {
  try {
    localStorage.setItem('privacy_consent', 'false');
    localStorage.setItem('privacy_consent_date', new Date().toISOString());
    
    // Clear all tracking data
    localStorage.removeItem('linkagency_visitor_data');
    localStorage.removeItem('user_interactions');
    localStorage.removeItem('heatmap_data');
    localStorage.removeItem('ab_test_variants');
    localStorage.removeItem('analytics_consent');
  } catch (error) {
    console.error('Error revoking consent:', error);
  }
};
