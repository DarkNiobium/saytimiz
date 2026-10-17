import React from 'react';
import { ArrowUpRight, MapPin } from '@phosphor-icons/react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenReserve: () => void;
  onOpenMapSite?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenReserve,
  onOpenMapSite
}) => {
  const isUz = lang === 'uz';

  return (
    <header className="fixed top-5 inset-x-0 z-50 max-w-5xl mx-auto w-[94%] pointer-events-none">
      <div className="glass-dock rounded-full px-5 sm:px-7 py-2.5 flex items-center justify-between pointer-events-auto shadow-2xl">
        {/* Pure Typographic Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="font-semibold text-sm sm:text-base tracking-tight text-white hover:text-zinc-300 transition-colors">
            saytimiz<span className="text-zinc-500 font-mono text-xs">.uz</span>
          </a>

          {onOpenMapSite && (
            <button
              onClick={onOpenMapSite}
              className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              title="Jonli keys: map.saytimiz.uz"
            >
              <MapPin weight="fill" className="w-3 h-3" />
              <span>map.saytimiz.uz</span>
            </button>
          )}
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-400">
          <a href="#builder" className="hover:text-white transition-colors">
            {isUz ? 'Konstruktor' : 'Конструктор'}
          </a>
          <a href="#showcase" className="hover:text-white transition-colors">
            {isUz ? 'Afzalliklar' : 'Преимущества'}
          </a>
          <a href="#compare" className="hover:text-white transition-colors">
            {isUz ? 'Farqlar' : 'Отличия'}
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            {isUz ? 'Tariflar' : 'Тарифы'}
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="px-2.5 py-1 rounded-full text-[11px] font-mono text-zinc-400 hover:text-white hover:bg-white/5 transition-all active:scale-[0.98]"
            title="Сменить язык / Tilni almashtirish"
          >
            {isUz ? 'UZ' : 'RU'}
          </button>

          <button
            onClick={onOpenReserve}
            className="pl-4 pr-1.5 py-1.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-all active:scale-[0.98] text-xs font-medium flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.12)]"
          >
            <span>{isUz ? 'Nom tanlash' : 'Занять адрес'}</span>
            <span className="w-5 h-5 rounded-full bg-zinc-950/10 flex items-center justify-center text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <ArrowUpRight weight="bold" className="w-3 h-3" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
