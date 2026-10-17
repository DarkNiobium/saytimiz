import { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudioBuilder } from './components/StudioBuilder';
import { Showcase } from './components/Showcase';
import { Comparison } from './components/Comparison';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { ReserveModal } from './components/ReserveModal';
import { MapApp } from './map-site/MapApp';

const checkIsMapSite = () => {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname.toLowerCase();
  const path = window.location.pathname.toLowerCase();
  const search = new URLSearchParams(window.location.search);
  return (
    host === 'map.saytimiz.uz' ||
    host.startsWith('map.') ||
    path === '/map' ||
    path.startsWith('/map/') ||
    search.get('site') === 'map' ||
    search.get('subdomain') === 'map'
  );
};

export default function App() {
  const [isMapSite, setIsMapSite] = useState<boolean>(checkIsMapSite);
  const [lang, setLang] = useState<Language>('ru');
  const [selectedSubdomain, setSelectedSubdomain] = useState<string>('zamondosh');
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Listen for popstate or path changes
    const handlePopState = () => {
      setIsMapSite(checkIsMapSite());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ru' ? 'uz' : 'ru'));
  };

  const handleOpenReserve = (subdomain?: string, plan?: string) => {
    if (subdomain) {
      setSelectedSubdomain(subdomain);
    }
    if (plan) {
      setSelectedPlan(plan);
    }
    setIsModalOpen(true);
  };

  const handleOpenMapSite = () => {
    setIsMapSite(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToMain = () => {
    setIsMapSite(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If map.saytimiz.uz or /map or ?site=map is active, render the dedicated MAPUZ site
  if (isMapSite) {
    return <MapApp onBackToMain={handleBackToMain} />;
  }

  return (
    <div className="min-h-[100dvh] bg-[#050507] text-[#ededed] flex flex-col font-sans selection:bg-white selection:text-black">
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenReserve={() => handleOpenReserve()}
        onOpenMapSite={handleOpenMapSite}
      />

      <main className="flex-1">
        <Hero
          lang={lang}
          onOpenReserve={(name) => handleOpenReserve(name)}
        />

        <StudioBuilder
          lang={lang}
          onOpenReserve={(name, note) => handleOpenReserve(name, note)}
        />

        <Showcase
          lang={lang}
          onOpenReserve={() => handleOpenReserve()}
        />

        <Comparison lang={lang} />

        <Pricing
          lang={lang}
          onOpenReserve={(_, plan) => handleOpenReserve(undefined, plan)}
        />

        <Faq lang={lang} />
      </main>

      <Footer
        lang={lang}
        onOpenReserve={() => handleOpenReserve()}
      />

      <ReserveModal
        isOpen={isModalOpen}
        lang={lang}
        initialSubdomain={selectedSubdomain}
        initialPlan={selectedPlan}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
