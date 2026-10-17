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
      ? `Assalomu alaykum MAPUZ! Men "${planTitle}" paketi bo'yicha ulanishga ariza bermoqchiman. Shartlar va muddatni aniqlashtirib bersangiz!`
      : `Здравствуйте MAPUZ! Хочу оформить подключение по тарифу "${planTitle}". Расскажите, пожалуйста, подробнее по деталям и запуску!`;
    const url = `https://t.me/mapuz2?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Shaffof tariflar
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isUz
              ? 'Xizmat paketlari va qamrov shartlari.'
              : 'Пакеты подключения под ключ.'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            {isUz
              ? 'Yashirin komissiyalarsiz bir martalik ulanish. Barcha huquqlar to\'liq sizning profilingizga o\'tkaziladi.'
              : 'Фиксированное подключение без абонентской платы. Все доступы и права владельца остаются у вас навсегда.'}
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`p-6 sm:p-8 rounded-2xl flex flex-col justify-between text-left space-y-6 transition-all ${
                p.popular
                  ? 'bg-white border-2 border-emerald-500 shadow-xl relative'
                  : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center gap-1 shadow">
                  <Sparkle weight="fill" className="w-3.5 h-3.5" />
                  <span>{isUz ? 'Eng ommabop tanlov' : 'Хит продаж'}</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {p.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 min-h-[36px]">
                  {p.tagline}
                </p>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs mb-5">
                  <span className="text-slate-500 font-medium block mb-1">
                    {isUz ? 'Qamrab olinadigan xaritalar:' : 'Подключаемые сервисы:'}
                  </span>
                  <div className="font-bold text-slate-900">{p.platforms.join(' ')}</div>
                </div>

                <div className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 inline-block mb-6">
                  {p.priceText}
                </div>

                {/* Features checklist */}
                <ul className="space-y-3 pt-4 border-t border-slate-100">
                  {p.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check weight="bold" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <button
                  onClick={() => handleOrder(p.title)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                    p.popular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <PaperPlaneTilt weight="fill" className="w-4 h-4" />
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
