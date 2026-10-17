import React from 'react';
import { PaperPlaneTilt } from '@phosphor-icons/react';
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
    <header className="sticky top-0 z-50 bg-[#080b0f]/95 backdrop-blur-md border-b border-[#1b2330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand with technical tag */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#f59e0b] inline-block animate-pulse" />
            <span className="map-display font-bold text-white text-base tracking-tight">
              MAPUZ
            </span>
            <span className="map-mono text-[10px] text-[#f59e0b] border border-[#f59e0b]/30 px-1.5 py-0.2 bg-[#f59e0b]/10">
              2.0
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 map-mono text-[11px] text-[#8b949e] pl-3 border-l border-[#1b2330]">
            <span>41.2995° N, 69.2401° E</span>
            <span className="text-[#1b2330]">/</span>
            <span className="text-emerald-400">STATUS: ACTIVE</span>
          </div>
        </div>

        {/* Technical Nav Links */}
        <nav className="hidden md:flex items-center gap-6 map-mono text-xs text-[#8b949e]">
          <a href="#diagram" className="hover:text-white transition-colors">
            01. {isUz ? 'Xarita' : 'Карта'}
          </a>
          <a href="#workflow" className="hover:text-white transition-colors">
            02. {isUz ? 'Bosqichlar' : 'Этапы'}
          </a>
          <a href="#platforms" className="hover:text-white transition-colors">
            03. {isUz ? 'Tizimlar' : 'Системы'}
          </a>
          <a href="#compare" className="hover:text-white transition-colors">
            04. {isUz ? 'Farqlar' : 'Отличия'}
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            05. {isUz ? 'Paketlar' : 'Тарифы'}
          </a>
          <a href="#calculator" className="hover:text-white transition-colors">
            06. {isUz ? 'Ariza' : 'Заявка'}
          </a>
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          {onBackToMain && (
            <button
              onClick={onBackToMain}
              className="map-mono text-[11px] text-[#8b949e] hover:text-white px-2 py-1 border border-[#1b2330] hover:border-[#2e3848] transition-colors"
            >
              saytimiz.uz
            </button>
          )}

          <button
            onClick={onToggleLang}
            className="map-mono text-xs px-2.5 py-1 border border-[#1b2330] text-[#f0f3f6] hover:border-[#f59e0b] transition-colors"
            title="Til / Язык"
          >
            {isUz ? 'UZ / ru' : 'RU / uz'}
          </button>

          <a
            href="https://t.me/mapuz2"
            target="_blank"
            rel="noopener noreferrer"
            className="map-mono text-xs px-3.5 py-1.5 bg-[#f59e0b] hover:bg-[#d97706] text-black font-semibold flex items-center gap-1.5 transition-colors"
          >
            <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5" />
            <span>@mapuz2</span>
          </a>
        </div>
      </div>
    </header>
  );
};
