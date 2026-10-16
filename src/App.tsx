import { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SubdomainSimulator } from './components/SubdomainSimulator';
import { Showcase } from './components/Showcase';
import { Comparison } from './components/Comparison';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { ReserveModal } from './components/ReserveModal';

export default function App() {
  const [lang, setLang] = useState<Language>('ru');
  const [selectedSubdomain, setSelectedSubdomain] = useState<string>('zamondosh');
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div className="min-h-[100dvh] bg-[#09090b] text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenReserve={() => handleOpenReserve()}
      />

      <main className="flex-1">
        <Hero
          lang={lang}
          onSelectSubdomain={(name) => setSelectedSubdomain(name)}
          onOpenReserve={(name) => handleOpenReserve(name)}
        />

        <SubdomainSimulator
          lang={lang}
          selectedSubdomain={selectedSubdomain}
          onSelectSubdomain={(name) => setSelectedSubdomain(name)}
          onOpenReserve={(name) => handleOpenReserve(name)}
        />

        <Showcase
          lang={lang}
          onOpenReserve={(name) => handleOpenReserve(name)}
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
