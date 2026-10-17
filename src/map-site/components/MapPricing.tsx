import React from 'react';
import { Check, PaperPlaneTilt, Sparkle } from '@phosphor-icons/react';
import { MapLanguage } from '../types';
import { mapPlans } from '../data/mapContent';

interface MapPricingProps {
  lang: MapLanguage;
}

export const MapPricing: React.FC<MapPricingProps> = ({ lang }) => {
  const isUz = lang === 'uz';
  const plans = mapPlans[lang];

  const handleOrder = (planTitle: string) => {
    const text = isUz
      ? `Assalomu alaykum MAPUZ! Men "${planTitle}" paketi bo'yicha ulanishga ariza bermoqchiman.`
      : `Здравствуйте MAPUZ! Хочу оформить подключение по тарифу "${planTitle}".`;
    const url = `https://t.me/mapuz2?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="pricing" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-left mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
            {isUz ? 'Paketlar' : 'Тарифы'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {isUz ? 'Shaffof xizmat tariflari.' : 'Пакеты подключения.'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between text-left space-y-6 transition-all ${
                p.popular
                  ? 'bg-white border-2 border-emerald-500 shadow-lg relative'
                  : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 right-5 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center gap-1 shadow">
                  <Sparkle weight="fill" className="w-3 h-3" />
                  <span>{isUz ? 'Ommabop' : 'Рекомендуем'}</span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-1">
                  {p.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {p.tagline}
                </p>

                <div className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 mb-5 inline-block">
                  {p.platforms.join(' ')}
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                  {p.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <Check weight="bold" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-slate-100">
                <button
                  onClick={() => handleOrder(p.title)}
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                    p.popular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5" />
                  <span>{p.ctaText}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
