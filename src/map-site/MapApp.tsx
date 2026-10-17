import React, { useState } from 'react';
import { MapLanguage } from './types';
import { MapNavbar } from './components/MapNavbar';
import { MapHero } from './components/MapHero';
import { MapPlatforms } from './components/MapPlatforms';
import { MapWhyUs } from './components/MapWhyUs';
import { MapCalculator } from './components/MapCalculator';
import { MapPricing } from './components/MapPricing';
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

  const handleSelectPlan = (_planId: string) => {
    const plansElem = document.getElementById('plans');
    if (plansElem) {
      plansElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[100dvh] bg-[#050507] text-[#ededed] flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      <MapNavbar
        lang={lang}
        onToggleLang={toggleLang}
        onBackToMain={onBackToMain}
      />

      <main className="flex-1">
        <MapHero
          lang={lang}
          onSelectPlan={handleSelectPlan}
        />

        <MapPlatforms lang={lang} />

        <MapWhyUs lang={lang} />

        <MapCalculator lang={lang} />

        <MapPricing
          lang={lang}
          onSelectPlan={handleSelectPlan}
        />

        <MapFaq lang={lang} />
      </main>

      <MapFooter
        lang={lang}
        onBackToMain={onBackToMain}
      />
    </div>
  );
};
