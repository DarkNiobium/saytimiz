import React from 'react';
import { PaperPlaneTilt, MapPin } from '@phosphor-icons/react';
import { MapLanguage } from '../types';

interface MapFooterProps {
  lang: MapLanguage;
  onBackToMain?: () => void;
}

export const MapFooter: React.FC<MapFooterProps> = ({ lang, onBackToMain }) => {
  const isUz = lang === 'uz';

  return (
    <footer className="py-12 bg-white text-slate-600 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
          {/* Brand */}
          <div className="space-y-1.5 text-left">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <MapPin weight="fill" className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 text-base tracking-tight">
                MAPUZ 2
              </span>
              <span className="text-[11px] font-semibold text-slate-500 px-2 py-0.5 rounded-full bg-slate-100">
                map.saytimiz.uz
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md font-normal">
              {isUz
                ? 'Google Maps, Yandex Maps va 2GIS navigatsiya tizimlariga tashkilotlarni rasmiy joylashtirish va lokal SEO xizmati.'
                : 'Официальное добавление, верификация и локальное SEO организаций в навигационных сервисах Узбекистана.'}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://t.me/mapuz2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center gap-2 transition-colors shadow-sm"
            >
              <PaperPlaneTilt weight="fill" className="w-4 h-4" />
              <span>Telegram: @mapuz2</span>
            </a>

            {onBackToMain && (
              <button
                onClick={onBackToMain}
                className="text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold transition-colors"
              >
                saytimiz.uz platformasi
              </button>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} MAPUZ 2. {isUz ? 'Barcha huquqlar himoyalangan.' : 'Все права защищены.'}
          </div>

          <div className="flex items-center gap-2">
            <span>Xosting va infratuzilma:</span>
            <a
              href="https://saytimiz.uz"
              className="text-slate-800 hover:text-emerald-700 font-semibold transition-colors underline underline-offset-4"
            >
              saytimiz.uz
            </a>
            <span>· Vercel Global CDN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
