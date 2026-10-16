import React from 'react';
import { PaperPlaneTilt, Sparkle } from '@phosphor-icons/react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onOpenReserve: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenReserve }) => {
  const isUz = lang === 'uz';

  return (
    <footer className="py-12 border-t border-zinc-800 bg-[#09090b] text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-emerald-400">
              <Sparkle weight="fill" className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white tracking-tight">
                saytimiz<span className="text-emerald-400">.uz</span>
              </span>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                {isUz
                  ? 'O\'zbekistondagi bizneslar uchun zamonaviy veb-platforma'
                  : 'Платформа быстрых сайтов-визиток для бизнеса в Узбекистане'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://t.me/saytimiz_uz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5 text-sky-400" />
              <span>@saytimiz_uz</span>
            </a>
            <button
              onClick={() => onOpenReserve()}
              className="px-3.5 py-1.5 rounded-lg font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors"
            >
              {isUz ? 'Band qilish' : 'Занять имя'}
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 saytimiz.uz. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Vercel Edge Network · Tashkent Node</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
