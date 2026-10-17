import React, { useState } from 'react';
import './map.css';
import { MapLanguage } from './types';
import { MapNavbar } from './components/MapNavbar';
import { MapHero } from './components/MapHero';
import { MapPlatforms } from './components/MapPlatforms';
import { MapWorkflow } from './components/MapWorkflow';
import { MapPricing } from './components/MapPricing';
import { MapCtaBanner } from './components/MapCtaBanner';
import { MapFaq } from './components/MapFaq';
import { MapFooter } from './components/MapFooter';

interface MapAppProps {
  onBackToMain?: () => void;
}

export const MapApp: React.FC<MapAppProps> = ({ onBackToMain }) => {
  const [lang, setLang] = useState<MapLanguage>('uz');

  const toggleLang = () => {
    setLang((prev) => (prev === 'uz' ? 'ru' : 'uz'));
  };

  return (
    <div className="map-site-root min-h-[100dvh] flex flex-col selection:bg-emerald-500 selection:text-white">
      <MapNavbar
        lang={lang}
        onToggleLang={toggleLang}
        onBackToMain={onBackToMain}
      />

      <main className="flex-1">
        <MapHero lang={lang} />
        <MapPlatforms lang={lang} />
        <MapWorkflow lang={lang} />
        <MapPricing lang={lang} />
        <MapCtaBanner lang={lang} />
        <MapFaq lang={lang} />
      </main>

      <MapFooter
        lang={lang}
        onBackToMain={onBackToMain}
      />
    </div>
  );
};
