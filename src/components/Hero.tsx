import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Lightning, ShieldCheck } from '@phosphor-icons/react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onSelectSubdomain: (name: string) => void;
  onOpenReserve: (name: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onSelectSubdomain, onOpenReserve }) => {
  const isUz = lang === 'uz';
  const [inputVal, setInputVal] = useState('zamondosh');

  const cleanSubdomain = inputVal.toLowerCase().replace(/[^a-z0-9-]/g, '') || 'brend';

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectSubdomain(cleanSubdomain);
    const generatorEl = document.getElementById('generator');
    if (generatorEl) {
      generatorEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 md:pt-16 pb-12 lg:pb-16 border-b border-zinc-800/80 overflow-hidden">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, subtext, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow - counted in limit */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono uppercase tracking-[0.18em] text-emerald-400 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>saytimiz.uz - platforma</span>
            </div>

            {/* Headline - max 2 lines desktop */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-5">
              {isUz ? (
                <>Biznesingiz uchun 24 soatda zamonaviy sayt-vizitka.</>
              ) : (
                <>Сайт-визитка для бизнеса за 24 часа. Без лишних трат.</>
              )}
            </h1>

            {/* Subtext - under 20 words */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-[54ch] mb-8">
              {isUz
                ? 'Telegram orqali buyurtma qabul qiluvchi, QR-kodli va brendingizga mos tezkor veb-vizitkani ishga tushiring.'
                : 'Подключаем персональный поддомен brand.saytimiz.uz с онлайн-заказами, мгновенной загрузкой и заявками в Telegram.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#generator"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all active:scale-[0.98] shadow-sm w-full sm:w-auto"
              >
                <span>{isUz ? 'Nom tanlash' : 'Подобрать поддомен'}</span>
                <ArrowRight weight="bold" className="w-4 h-4" />
              </a>

              <a
                href="#showcase"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium border border-zinc-700 bg-zinc-900/80 text-zinc-200 hover:text-white hover:border-zinc-600 transition-all active:scale-[0.98] w-full sm:w-auto"
              >
                <span>{isUz ? 'Namunalar' : 'Смотреть демо'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Subdomain Search Card */}
          <div className="lg:col-span-5 w-full">
            <div className="p-6 rounded-xl bg-zinc-900/90 border border-zinc-800 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block" />
                  <span className="ml-2 text-zinc-400">subdomain-check</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  <Lightning weight="fill" className="w-3 h-3" />
                  <span>0.18s</span>
                </div>
              </div>

              <form onSubmit={handleApply} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-2">
                    {isUz ? 'Biznesingiz nomi:' : 'Название вашего бизнеса:'}
                  </label>
                  <div className="flex items-center rounded-lg border border-zinc-700 bg-zinc-950 focus-within:border-emerald-500 transition-colors px-3 py-2.5">
                    <input
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder="zamondosh"
                      className="w-full bg-transparent text-sm text-white focus:outline-none font-mono"
                    />
                    <span className="text-zinc-500 font-mono text-xs select-none">.saytimiz.uz</span>
                  </div>
                </div>

                {/* Instant status indicator */}
                <div className="p-3 rounded-lg bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle weight="fill" className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-mono text-zinc-200">
                      {cleanSubdomain}.saytimiz.uz
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium">
                    {isUz ? 'Bo\'sh' : 'Свободен'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-zinc-300" />
                    <span>SSL + AntiDDoS</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lightning className="w-4 h-4 text-zinc-300" />
                    <span>Vercel Edge TAS</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenReserve(cleanSubdomain)}
                  className="w-full py-2.5 rounded-lg text-xs font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors active:scale-[0.98]"
                >
                  {isUz ? 'Ushbu nomni band qilish' : 'Забронировать этот адрес'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
