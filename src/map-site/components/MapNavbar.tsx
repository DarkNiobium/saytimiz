import React from 'react';
import { PaperPlaneTilt, Globe, MapPin } from '@phosphor-icons/react';
import { MapLanguage } from '../types';

interface MapNavbarProps {
  lang: MapLanguage;
  onToggleLang: () => void;
  onBackToMain?: () => void;
}

export const MapNavbar: React.FC<MapNavbarProps> = ({
  lang,
  onToggleLang,
  onBackToMain
}) => {
  const isUz = lang === 'uz';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center p-3 sm:p-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-3 px-4 sm:px-6 py-2.5 rounded-full bezel-shell backdrop-blur-2xl bg-black/60 border border-white/10 shadow-2xl max-w-5xl w-full">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <MapPin weight="fill" className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-bold tracking-tight text-white text-sm sm:text-base">
              <span>MAPUZ</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono">2.0</span>
            </div>
            <span className="text-[9px] font-mono text-zinc-400 hidden sm:inline-block">
              map.saytimiz.uz
            </span>
          </div>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-6 font-mono text-xs text-zinc-400">
          <a href="#platforms" className="hover:text-white transition-colors">
            {isUz ? 'Xaritalar' : 'Карты'}
          </a>
          <a href="#calculator" className="hover:text-white transition-colors">
            {isUz ? 'Kalkulyator' : 'Калькулятор'}
          </a>
          <a href="#plans" className="hover:text-white transition-colors">
            {isUz ? 'Paketlar' : 'Тарифы'}
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {onBackToMain && (
            <button
              onClick={onBackToMain}
              className="text-[10px] font-mono text-zinc-400 hover:text-white px-2 py-1 rounded-lg border border-white/5 bg-white/[0.02] hidden sm:block"
            >
              saytimiz.uz
            </button>
          )}

          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 text-xs font-mono px-2.5 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white transition-colors"
            title="Tilni o'zgartirish / Сменить язык"
          >
            <Globe weight="bold" className="w-3.5 h-3.5 text-zinc-400" />
            <span className="uppercase">{lang}</span>
          </button>

          <a
            href="https://t.me/mapuz2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500 text-zinc-950 font-bold text-xs hover:bg-emerald-400 transition-colors shadow-lg active:scale-95"
          >
            <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">@mapuz2</span>
            <span className="sm:hidden">Telegram</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
