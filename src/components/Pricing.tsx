import React from 'react';
import { ArrowUpRight, Check } from '@phosphor-icons/react';
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
    <section id="pricing" className="py-24 md:py-32 border-t border-white/[0.06] bg-[#050507]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em] text-white mb-3">
            {isUz ? 'Shaffof narxlar' : 'Инвестиция в ваш цифровой адрес'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {isUz
              ? 'Hech qanday yashirin oylik to\'lovlar yo\'q. Bir martalik to\'lov bilan to\'liq tayyor sayt.'
              : 'Фиксированная разовая оплата без регулярных скрытых списаний и навязанных подписок.'}
          </p>
        </div>

        {/* Double-Bezel Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-1.5 rounded-[2.2rem] ${
                plan.popular ? 'bezel-shell ring-1 ring-white/20' : 'bezel-shell'
              }`}
            >
              <div className="rounded-[calc(2.2rem-0.375rem)] bezel-core p-8 flex flex-col justify-between h-full relative">
                {plan.popular && (
                  <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-white text-zinc-950 font-mono text-[10px] font-semibold uppercase tracking-wider">
                    {isUz ? 'Tavsiya' : 'Выбор большинства'}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-zinc-400 min-h-[34px] leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-2 pb-6 border-b border-white/[0.06]">
                    <span className="text-3xl sm:text-4xl font-semibold font-mono tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">{plan.priceNote}</span>
                  </div>

                  {/* Features */}
                  <ul className="py-6 space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check
                          weight="bold"
                          className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenReserve(undefined, plan.title)}
                  className={`w-full mt-4 py-3 rounded-full text-xs font-medium transition-all active:scale-[0.98] flex items-center justify-center gap-2 group ${
                    plan.popular
                      ? 'bg-white text-zinc-950 hover:bg-zinc-200 shadow-[0_0_25px_rgba(255,255,255,0.15)]'
                      : 'bg-white/[0.04] text-zinc-200 hover:text-white hover:bg-white/[0.08] border border-white/10'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight
                    weight="bold"
                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
