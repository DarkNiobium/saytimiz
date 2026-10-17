import React from 'react';
import { PaperPlaneTilt, MapPin } from '@phosphor-icons/react';
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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
            <MapPin weight="fill" className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-base sm:text-lg tracking-tight">
                MAPUZ
              </span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                2.0
              </span>
            </div>
            <div className="text-[11px] text-slate-500 hidden sm:block">
              map.saytimiz.uz
            </div>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-slate-600">
          <a href="#platforms" className="hover:text-slate-900 transition-colors">
            {isUz ? 'Xaritalar' : 'Карты'}
          </a>
          <a href="#workflow" className="hover:text-slate-900 transition-colors">
            {isUz ? 'Jarayon' : 'Процесс'}
          </a>
          <a href="#compare" className="hover:text-slate-900 transition-colors">
            {isUz ? 'Afzalliklar' : 'Преимущества'}
          </a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">
            {isUz ? 'Tariflar' : 'Тарифы'}
          </a>
          <a href="#calculator" className="hover:text-slate-900 transition-colors">
            {isUz ? 'Kalkulyator' : 'Калькулятор'}
          </a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          {onBackToMain && (
            <button
              onClick={onBackToMain}
              className="text-xs font-medium text-slate-500 hover:text-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors hidden sm:block"
            >
              saytimiz.uz
            </button>
          )}

          <button
            onClick={onToggleLang}
            className="text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
            title="Tilni o'zgartirish / Сменить язык"
          >
            {isUz ? 'UZ / ru' : 'RU / uz'}
          </button>

          <a
            href="https://t.me/mapuz2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 transition-colors shadow-sm"
          >
            <PaperPlaneTilt weight="fill" className="w-4 h-4" />
            <span className="hidden sm:inline">Telegram: @mapuz2</span>
            <span className="sm:hidden">@mapuz2</span>
          </a>
        </div>
      </div>
    </header>
  );
};
