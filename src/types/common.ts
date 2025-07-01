
// Types communs pour l'application
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  socialLinks?: {
    platform: 'linkedin' | 'instagram' | 'facebook' | 'twitter';
    url: string;
  }[];
}

export interface Project extends BaseEntity {
  title: string;
  description: string;
  category: 'branding' | 'evenementiel' | 'digital' | 'personal-branding';
  images: ImageAsset[];
  tags: string[];
  featured?: boolean;
  client?: string;
  year?: number;
  url?: string;
}

export interface Service extends BaseEntity {
  name: string;
  description: string;
  icon: string;
  features: string[];
  startingPrice?: number;
  category: 'branding' | 'evenementiel' | 'digital' | 'personal-branding';
}

// Types pour les formulaires
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
  budget?: 'small' | 'medium' | 'large' | 'enterprise';
}

export interface QuoteFormData extends ContactFormData {
  projectType: string;
  timeline: string;
  requirements: string[];
}

// Types pour les erreurs
export interface AppError {
  code: string;
  message: string;
  details?: unknown;
  timestamp: Date;
}

// Types pour les états de chargement
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T> {
  data: T | null;
  status: LoadingState;
  error: AppError | null;
}

// Types pour l'accessibilité
export interface AccessibilityProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  role?: string;
  tabIndex?: number;
}

// Types pour les animations
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  fillMode?: 'none' | 'forwards' | 'backwards' | 'both';
}
