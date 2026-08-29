// Types pour le système de blog/actualités
export interface BlogPost {
  id: string;
  title: string;
  seoTitle?: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  modifiedDate?: string;
  slug: string;
  category: 'branding' | 'digital' | 'evenementiel' | 'tendances' | 'conseils';
  image: string;
  readTime: number;
  tags: string[];
  metaDescription: string;
  metaKeywords: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
  relatedServices: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  service: string;
  date: string;
  projectType: string;
  results?: {
    metric: string;
    value: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing: {
    startingPrice: string;
    packages?: {
      name: string;
      price: string;
      features: string[];
    }[];
  };
  caseStudies: string[];
  faqs: string[];
}
