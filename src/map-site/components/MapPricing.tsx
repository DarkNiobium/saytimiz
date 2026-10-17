import React from 'react';
import { Check, PaperPlaneTilt } from '@phosphor-icons/react';
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
      ? `Assalomu alaykum MAPUZ! Men "${planTitle}" paketi bo'yicha arizamni yubormoqchiman. Shartlar va muddatni aniqlashtirib bersangiz!`
      : `Здравствуйте MAPUZ! Хочу оформить подключение по тарифу "${planTitle}". Подскажите, пожалуйста, детали и сроки!`;
    const url = `https://t.me/mapuz2?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="pricing" className="py-20 border-b border-[#1b2330] bg-[#080b0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="map-mono text-[11px] text-[#f59e0b] uppercase tracking-wider mb-2">
            05 // SERVICE TIERS
          </div>
          <h2 className="map-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {isUz
              ? 'Xizmat paketlari va ulash shartlari.'
              : 'Пакеты подключения под ключ.'}
          </h2>
          <p className="text-xs sm:text-sm text-[#8b949e] mt-2">
            {isUz
              ? 'Yashirin komissiyalarsiz bir martalik ulanish. To\'liq egalik huquqi sizning nomingizga o\'tadi.'
              : 'Фиксированное подключение без скрытых платежей. Все доступы и права владельца остаются у вас навсегда.'}
          </p>
        </div>

        {/* 3 Tier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#1b2330] p-px border border-[#1b2330]">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`p-6 sm:p-8 flex flex-col justify-between text-left space-y-6 ${
                p.popular ? 'bg-[#121720] border-t-2 sm:border-t-0 sm:border-l-2 border-[#f59e0b]' : 'bg-[#0e1218]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1b2330] map-mono text-xs">
                  <span className="text-[#8b949e] uppercase font-semibold">
                    {p.id === 'trio' ? 'RECOMMENDED // 3-IN-1' : p.id.toUpperCase()}
                  </span>
                  {p.popular && (
                    <span className="text-[#f59e0b] bg-[#f59e0b]/10 px-2 py-0.5 border border-[#f59e0b]/30">
                      ENG OMMABOP
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-[#8b949e] leading-relaxed mb-5 min-h-[36px]">
                  {p.tagline}
                </p>

                <div className="p-3 bg-[#080b0f] border border-[#1b2330] map-mono text-xs mb-6">
                  <div className="text-[10px] text-[#8b949e] uppercase mb-1">
                    {isUz ? 'Ulanadigan xaritalar:' : 'Подключаемые сервисы:'}
                  </div>
                  <div className="text-[#f0f3f6] font-semibold">{p.platforms.join(' ')}</div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5">
                  {p.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#f0f3f6]">
                      <Check weight="bold" className="w-3.5 h-3.5 text-[#f59e0b] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#1b2330]">
                <button
                  onClick={() => handleOrder(p.title)}
                  className={`w-full py-3 map-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                    p.popular
                      ? 'bg-[#f59e0b] hover:bg-[#d97706] text-black'
                      : 'bg-[#1b2330] hover:bg-[#253042] text-white'
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
