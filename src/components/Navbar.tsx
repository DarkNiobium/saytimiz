import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenReserve: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenReserve }) => {
  const isUz = lang === 'uz';

  return (
    <header className="fixed top-5 inset-x-0 z-50 max-w-5xl mx-auto w-[94%] pointer-events-none">
      <div className="glass-dock rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between pointer-events-auto">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-full bg-white text-zinc-950 flex items-center justify-center font-bold text-xs shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            S
          </div>
          <span className="font-medium text-sm tracking-tight text-white group-hover:text-zinc-300 transition-colors">
            saytimiz<span className="text-zinc-500 font-mono text-xs">.uz</span>
          </span>
        </a>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-400">
          <a href="#studio" className="hover:text-white transition-colors">
            {isUz ? 'Konstruktor' : 'Студия'}
          </a>
          <a href="#showcase" className="hover:text-white transition-colors">
            {isUz ? 'Namunalar' : 'Портфолио'}
          </a>
          <a href="#compare" className="hover:text-white transition-colors">
            {isUz ? 'Taqqoslash' : 'Отличия'}
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            {isUz ? 'Tariflar' : 'Тарифы'}
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onToggleLang}
            className="px-2.5 py-1.5 rounded-full text-[11px] font-mono text-zinc-400 hover:text-white hover:bg-white/5 transition-all active:scale-[0.98]"
            title="Сменить язык / Tilni almashtirish"
          >
            {isUz ? 'UZ' : 'RU'}
          </button>

          <button
            onClick={onOpenReserve}
            className="pl-3.5 pr-1.5 py-1.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-all active:scale-[0.98] text-xs font-medium flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.12)]"
          >
            <span>{isUz ? 'Nom olish' : 'Занять адрес'}</span>
            <span className="w-5 h-5 rounded-full bg-zinc-950/10 flex items-center justify-center text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <ArrowUpRight weight="bold" className="w-3 h-3" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
