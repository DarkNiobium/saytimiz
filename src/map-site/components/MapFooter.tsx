import React from 'react';
import { PaperPlaneTilt } from '@phosphor-icons/react';
import { MapLanguage } from '../types';

interface MapFooterProps {
  lang: MapLanguage;
  onBackToMain?: () => void;
}

export const MapFooter: React.FC<MapFooterProps> = ({ lang, onBackToMain }) => {
  const isUz = lang === 'uz';

  return (
    <footer className="py-12 bg-[#05070a] text-[#8b949e] border-t border-[#1b2330]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#1b2330]">
          {/* Brand & Telemetry */}
          <div className="space-y-1.5 text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#f59e0b] inline-block" />
              <span className="map-display font-bold text-white text-base tracking-tight">
                MAPUZ 2
              </span>
              <span className="map-mono text-[10px] text-[#8b949e] border border-[#1b2330] px-1.5 py-0.2">
                map.saytimiz.uz
              </span>
            </div>
            <p className="text-xs text-[#8b949e] leading-relaxed max-w-md">
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
              className="map-mono text-xs px-4 py-2 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold flex items-center gap-1.5 transition-colors"
            >
              <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5" />
              <span>Telegram: @mapuz2</span>
            </a>

            {onBackToMain && (
              <button
                onClick={onBackToMain}
                className="map-mono text-xs px-3.5 py-2 border border-[#1b2330] text-[#f0f3f6] hover:border-[#2e3848] transition-colors"
              >
                saytimiz.uz asosiy
              </button>
            )}
          </div>
        </div>

        {/* Colophon row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 map-mono text-[11px] text-[#8b949e]">
          <div>
            © {new Date().getFullYear()} MAPUZ 2. {isUz ? 'Barcha huquqlar himoyalangan.' : 'Все права защищены.'}
          </div>

          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <a
              href="https://saytimiz.uz"
              className="text-white hover:text-[#f59e0b] transition-colors underline underline-offset-4"
            >
              saytimiz.uz
            </a>
            <span>· Vercel Fast Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
