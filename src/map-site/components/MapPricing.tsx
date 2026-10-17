import React from 'react';
import { motion } from 'motion/react';
import { Check, PaperPlaneTilt, Sparkle } from '@phosphor-icons/react';
import { MapLanguage } from '../types';
import { mapPlans } from '../data/mapContent';
import { AnimatedUnderline } from '../../components/AnimatedUnderline';

interface MapPricingProps {
  lang: MapLanguage;
  onSelectPlan: (planId: string) => void;
}

export const MapPricing: React.FC<MapPricingProps> = ({ lang }) => {
  const isUz = lang === 'uz';
  const plans = mapPlans[lang];

  const handleOrder = (planTitle: string) => {
    const text = isUz
      ? `Assalomu alaykum MAPUZ! Men "${planTitle}" paketi bo'yicha buyurtma bermoqchiman. Tafsilotlarni ayta olasizmi?`
      : `Здравствуйте MAPUZ! Хочу заказать пакет "${planTitle}". Расскажите, пожалуйста, подробнее по условиям и запуску!`;
    const url = `https://t.me/mapuz2?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="plans" className="py-24 md:py-32 border-t border-white/[0.06] bg-[#050507]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
            04 / Service Packages
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white mb-4">
            {isUz ? (
              <>
                Shaffof va aniq{' '}
                <AnimatedUnderline color="#10b981">
                  xizmat paketlari
                </AnimatedUnderline>
                .
              </>
            ) : (
              <>
                Прозрачные пакеты{' '}
                <AnimatedUnderline color="#10b981">
                  под ключ
                </AnimatedUnderline>
                .
              </>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
            {isUz
              ? 'Yashirin to\'lovlarsiz bir martalik ulanish. Barcha huquqlar to\'liq sizning profilingizga o\'tkaziladi.'
              : 'Фиксированное подключение без скрытых комиссий. Все доступы и права владельца остаются у вас навсегда.'}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-1.5 rounded-[2.2rem] ${
                p.popular ? 'bezel-shell ring-1 ring-emerald-500/50 shadow-[0_0_35px_rgba(16,185,129,0.15)]' : 'bezel-shell'
              }`}
            >
              <div className="rounded-[calc(2.2rem-0.375rem)] bezel-core p-8 flex flex-col justify-between h-full relative">
                {p.popular && (
                  <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-emerald-500 text-zinc-950 font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Sparkle weight="fill" className="w-3 h-3" />
                    <span>{isUz ? 'Tavsiya etiladi' : 'Хит продаж'}</span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-zinc-400 min-h-[34px] leading-relaxed mb-6 font-normal">
                    {p.tagline}
                  </p>

                  <div className="pb-5 border-b border-white/[0.06]">
                    <div className="inline-block px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                      {p.priceText}
                    </div>
                  </div>

                  {/* Included Platforms Tag */}
                  <div className="pt-5 pb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                      {isUz ? 'Qamrab olinadigan xaritalar:' : 'Подключаемые сервисы:'}
                    </span>
                    <div className="text-xs font-semibold text-zinc-200">
                      {p.platforms.join(' ')}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="py-4 space-y-3">
                    {p.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check weight="bold" className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/[0.06]">
                  <button
                    onClick={() => handleOrder(p.title)}
                    className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      p.popular
                        ? 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-lg'
                        : 'bg-white text-zinc-950 hover:bg-zinc-200'
                    }`}
                  >
                    <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5" />
                    <span>{p.ctaText}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
