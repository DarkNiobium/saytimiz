import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onOpenReserve: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenReserve }) => {
  const isUz = lang === 'uz';

  return (
    <footer className="py-16 border-t border-white/[0.06] bg-[#050507] text-zinc-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.04]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white text-zinc-950 flex items-center justify-center font-bold text-xs">
              S
            </div>
            <div>
              <span className="font-medium text-white tracking-tight">
                saytimiz<span className="text-zinc-500 font-mono text-xs">.uz</span>
              </span>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                {isUz
                  ? 'O\'zbekistondagi bizneslar uchun zamonaviy raqamli platforma'
                  : 'Студия автономных сайтов-визиток в Узбекистане'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href="https://t.me/saytimiz_uz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>@saytimiz_uz</span>
              <ArrowUpRight weight="bold" className="w-3 h-3" />
            </a>
            <button
              onClick={onOpenReserve}
              className="text-white hover:underline transition-colors"
            >
              {isUz ? 'Band qilish' : 'Занять адрес'}
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <p>© 2026 saytimiz.uz. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-zinc-400">Tashkent Edge Node Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
