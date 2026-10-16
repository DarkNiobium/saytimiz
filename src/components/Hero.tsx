import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkle } from '@phosphor-icons/react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onSelectSubdomain: (name: string) => void;
  onOpenReserve: (name: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onSelectSubdomain, onOpenReserve }) => {
  const isUz = lang === 'uz';
  const [query, setQuery] = useState('zamondosh');

  const cleanQuery = query.toLowerCase().replace(/[^a-z0-9-]/g, '') || 'brend';

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectSubdomain(cleanQuery);
    const studioEl = document.getElementById('studio');
    if (studioEl) {
      studioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden radial-ambient">
      {/* Delicate background illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/[0.04] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative text-center flex flex-col items-center">
        {/* Eyebrow - restrained and microscopic */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[10px] font-mono tracking-[0.22em] uppercase text-zinc-400 mb-6">
          <span className="w-1 h-1 rounded-full bg-emerald-400" />
          <span>saytimiz.uz studio</span>
        </div>

        {/* Monolithic Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] text-white max-w-4xl leading-[1.04] mb-6">
          {isUz ? (
            <>Biznesingiz uchun premium raqamli vizitka.</>
          ) : (
            <>Цифровой фасад для вашего бизнеса в зоне .uz</>
          )}
        </h1>

        {/* Quiet Subtext */}
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed mb-8">
          {isUz
            ? 'Telegram orqali buyurtma qabul qiluvchi, bosma QR-kodli va millisekundlarda yuklanuvchi mustaqil sahifalar.'
            : 'Автономные мобильные визитки с прямой связью в Telegram, QR-кодом для заведений и мгновенным откликом.'}
        </p>

        {/* Action Buttons with Button-in-Button architecture */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <button
            onClick={() => onOpenReserve(cleanQuery)}
            className="pl-5 pr-2 py-2 rounded-full bg-white text-zinc-950 font-medium text-xs tracking-tight hover:bg-zinc-200 transition-all active:scale-[0.98] flex items-center gap-3 group shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <span>{isUz ? 'Nomni band qilish' : 'Занять свой поддомен'}</span>
            <span className="w-6 h-6 rounded-full bg-zinc-950 text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
            </span>
          </button>

          <a
            href="#studio"
            className="px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 text-xs text-zinc-300 hover:text-white transition-all active:scale-[0.98]"
          >
            {isUz ? 'Namunalar va sinov' : 'Интерактивный предпросмотр'}
          </a>
        </div>

        {/* Double-Bezel Interactive Vault */}
        <div className="w-full max-w-2xl">
          <div className="p-2 rounded-[2rem] bezel-shell">
            <div className="p-4 sm:p-5 rounded-[calc(2rem-0.5rem)] bezel-core flex flex-col sm:flex-row items-center justify-between gap-3">
              <form onSubmit={handleSearchSubmit} className="w-full flex-1 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0">
                  <Sparkle weight="fill" className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="flex-1 flex items-center font-mono text-xs sm:text-sm">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="zamondosh"
                    className="w-full bg-transparent text-white focus:outline-none font-mono"
                  />
                  <span className="text-zinc-500 select-none">.saytimiz.uz</span>
                </div>
              </form>

              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-between sm:justify-start">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
                  <Check weight="bold" className="w-3 h-3" />
                  <span>{isUz ? 'Bo\'sh' : 'Доступен'}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenReserve(cleanQuery)}
                  className="px-4 py-1.5 rounded-full bg-white text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-all active:scale-[0.98]"
                >
                  {isUz ? 'Band qilish' : 'Занять'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
