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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
            <MapPin weight="fill" className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-slate-900 text-base tracking-tight">
            MAPUZ
          </span>
        </div>

        {/* Short Clean Links */}
        <nav className="hidden sm:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
          <a href="#platforms" className="hover:text-slate-900 transition-colors">
            {isUz ? 'Xaritalar' : 'Карты'}
          </a>
          <a href="#workflow" className="hover:text-slate-900 transition-colors">
            {isUz ? 'Jarayon' : 'Процесс'}
          </a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">
            {isUz ? 'Tariflar' : 'Тарифы'}
          </a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {onBackToMain && (
            <button
              onClick={onBackToMain}
              className="text-xs text-slate-500 hover:text-slate-900 px-2 py-1 rounded border border-slate-200 hidden md:block"
            >
              saytimiz.uz
            </button>
          )}

          <button
            onClick={onToggleLang}
            className="text-xs font-semibold px-2 py-1 rounded border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            {isUz ? 'RU' : 'UZ'}
          </button>

          <a
            href="https://t.me/mapuz2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5" />
            <span>@mapuz2</span>
          </a>
        </div>
      </div>
    </header>
  );
};
