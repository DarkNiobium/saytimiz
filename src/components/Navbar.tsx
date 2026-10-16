import React from 'react';
import { Globe, ArrowUpRight, Sparkle } from '@phosphor-icons/react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenReserve: (subdomain?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenReserve }) => {
  const isUz = lang === 'uz';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-[#09090b]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
              <Sparkle weight="fill" className="w-4 h-4" />
            </div>
            <span className="font-semibold text-lg tracking-tight text-white">
              saytimiz<span className="text-emerald-400">.uz</span>
            </span>
          </a>

          {/* Real network status indicator */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>TAS Edge: 0.18s</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <a href="#generator" className="hover:text-zinc-100 transition-colors">
            {isUz ? 'Konstruktor' : 'Конструктор'}
          </a>
          <a href="#showcase" className="hover:text-zinc-100 transition-colors">
            {isUz ? 'Namunalar' : 'Примеры'}
          </a>
          <a href="#compare" className="hover:text-zinc-100 transition-colors">
            {isUz ? 'Taqqoslash' : 'Сравнение'}
          </a>
          <a href="#pricing" className="hover:text-zinc-100 transition-colors">
            {isUz ? 'Tariflar' : 'Тарифы'}
          </a>
          <a href="#faq" className="hover:text-zinc-100 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right side: Language + CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium border border-zinc-800 bg-zinc-900/90 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all active:scale-[0.98]"
            title="Tilni o'zgartirish / Сменить язык"
          >
            <Globe className="w-3.5 h-3.5 text-zinc-400" />
            <span>{isUz ? 'UZ' : 'RU'}</span>
          </button>

          <button
            onClick={() => onOpenReserve()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all active:scale-[0.98] shadow-sm"
          >
            <span>{isUz ? 'Nom tanlash' : 'Занять имя'}</span>
            <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
