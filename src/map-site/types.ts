export type MapLanguage = 'uz' | 'ru';

export interface MapPlatformInfo {
  id: string;
  name: string;
  badge: string;
  color: string;
  audience: string;
  features: string[];
  description: string;
}

export interface MapPlan {
  id: string;
  title: string;
  popular?: boolean;
  tagline: string;
  priceText: string;
  platforms: string[];
  features: string[];
  ctaText: string;
}
