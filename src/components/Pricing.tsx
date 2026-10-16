import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check } from '@phosphor-icons/react';
import { Language } from '../types';
import { pricingData } from '../data/content';
import { AnimatedUnderline } from './AnimatedUnderline';

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
        <div className="max-w-2xl mb-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
            02 / Pricing
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em] text-white mb-4">
            {isUz ? (
              <>
                Oylik to'lovlarsiz{' '}
                <AnimatedUnderline color="#10b981">
                  bir martalik
                </AnimatedUnderline>{' '}
                shaffof narxlar.
              </>
            ) : (
              <>
                Инвестиция в адрес{' '}
                <AnimatedUnderline color="#10b981">
                  без абонентской платы
                </AnimatedUnderline>
                .
              </>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
            {isUz
              ? 'Hech qanday majburiy obuna yo\'q. Faqat bir marta to\'laysiz va saytdan doimiy foydalanasiz.'
              : 'Один фиксированный платеж при запуске. Vercel Edge и SSL включены навсегда.'}
          </p>
        </div>

        {/* Double-Bezel Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                  <p className="text-xs text-zinc-400 min-h-[34px] leading-relaxed mb-6 font-normal">
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
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
