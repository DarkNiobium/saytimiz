import React from 'react';
import { Check } from '@phosphor-icons/react';
import { Language } from '../types';
import { pricingData } from '../data/content';

interface PricingProps {
  lang: Language;
  onOpenReserve: (subdomain?: string, plan?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ lang, onOpenReserve }) => {
  const isUz = lang === 'uz';
  const plans = pricingData[lang];

  return (
    <section id="pricing" className="py-16 md:py-24 border-b border-zinc-800/80 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header - Stacked, no split header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {isUz ? 'Shaffof va qulay tariflar' : 'Прозрачные тарифы без скрытых платежей'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {isUz
              ? 'Hech qanday oylik majburiy obuna yo\'q. Faqat bir marta to\'laysiz va saytdan erkin foydalanasiz.'
              : 'Никаких скрытых ежемесячных комиссий. Вы платите один раз и получаете готовый рабочий сайт.'}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                plan.popular
                  ? 'bg-zinc-900 border-2 border-emerald-500/80 shadow-2xl'
                  : 'bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-zinc-950 font-semibold text-[11px] uppercase tracking-wide">
                  {isUz ? 'Eng ommabop' : 'Самый популярный'}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                <p className="text-xs text-zinc-400 min-h-[36px] mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-2 pb-6 border-b border-zinc-800">
                  <span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">{plan.priceNote}</span>
                </div>

                {/* Features list */}
                <ul className="py-6 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check
                        weight="bold"
                        className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenReserve(undefined, plan.title)}
                className={`w-full py-3 rounded-lg text-xs font-semibold transition-all active:scale-[0.98] mt-4 ${
                  plan.popular
                    ? 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-sm'
                    : 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700'
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
