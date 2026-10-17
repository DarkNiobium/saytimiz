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
    <footer className="py-16 border-t border-white/[0.06] bg-[#030305] text-zinc-400 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand & Slogan */}
          <div className="space-y-2 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <MapPin weight="fill" className="w-3.5 h-3.5" />
              </div>
              <span className="text-white font-bold tracking-tight text-base">MAPUZ 2</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                map.saytimiz.uz
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              {isUz
                ? 'Google Maps, Yandex Maps va 2GIS xaritalariga korxonalarni professional joylashtirish va optimizatsiya qilish xizmati.'
                : 'Профессиональное добавление и верификация компаний на Google Maps, Яндекс Картах и 2GIS в Узбекистане.'}
            </p>
          </div>

          {/* Direct Telegram Contacts */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://t.me/mapuz2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-emerald-500 text-zinc-950 font-bold text-xs flex items-center gap-2 hover:bg-emerald-400 transition-colors shadow-lg"
            >
              <PaperPlaneTilt weight="fill" className="w-4 h-4" />
              <span>Telegram: @mapuz2</span>
            </a>

            {onBackToMain && (
              <button
                onClick={onBackToMain}
                className="px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-colors"
              >
                saytimiz.uz asosiy sahifa
              </button>
            )}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} MAPUZ 2 · Barcha huquqlar himoyalangan.
          </div>

          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <a
              href="https://saytimiz.uz"
              className="text-zinc-300 hover:text-white transition-colors underline underline-offset-4"
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
