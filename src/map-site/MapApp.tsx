import React, { useState } from 'react';
import './map.css';
import { MapLanguage } from './types';
import { MapNavbar } from './components/MapNavbar';
import { MapHero } from './components/MapHero';
import { MapWorkflow } from './components/MapWorkflow';
import { MapPlatforms } from './components/MapPlatforms';
import { MapWhyUs } from './components/MapWhyUs';
import { MapPricing } from './components/MapPricing';
import { MapCalculator } from './components/MapCalculator';
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
    <div className="map-site-root min-h-[100dvh] flex flex-col selection:bg-[#f59e0b] selection:text-black">
      <MapNavbar
        lang={lang}
        onToggleLang={toggleLang}
        onBackToMain={onBackToMain}
      />

      <main className="flex-1">
        <MapHero lang={lang} />

        <MapWorkflow lang={lang} />

        <MapPlatforms lang={lang} />

        <MapWhyUs lang={lang} />

        <MapPricing lang={lang} />

        <MapCalculator lang={lang} />

        <MapFaq lang={lang} />
      </main>

      <MapFooter
        lang={lang}
        onBackToMain={onBackToMain}
      />
    </div>
  );
};
