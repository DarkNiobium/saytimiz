export type Language = 'ru' | 'uz';

export interface BusinessTemplate {
  id: string;
  subdomain: string;
  name: string;
  category: string;
  tagline: string;
  badge: string;
  rating: string;
  speed: string;
  items: { title: string; price: string; desc: string }[];
  accentColor: string;
  previewImage: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  popular?: boolean;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
