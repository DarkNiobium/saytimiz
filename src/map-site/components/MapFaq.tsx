import React, { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { MapLanguage } from '../types';
import { mapFaqs } from '../data/mapContent';

interface MapFaqProps {
  lang: MapLanguage;
}

export const MapFaq: React.FC<MapFaqProps> = ({ lang }) => {
  const isUz = lang === 'uz';
  const faqs = mapFaqs[lang];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 border-b border-[#1b2330] bg-[#080b0f] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="map-mono text-[11px] text-[#f59e0b] uppercase tracking-wider mb-2">
            07 // FAQ & PROTOCOL
          </div>
          <h2 className="map-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {isUz ? 'Ko\'p beriladigan savollar.' : 'Частые вопросы.'}
          </h2>
          <p className="text-xs sm:text-sm text-[#8b949e] mt-2">
            {isUz
              ? 'Xaritalarga joylashtirish, moderatsiya muddatlari va kafolatlar bo\'yicha aniq ma\'lumotlar.'
              : 'Все о сроках модерации, передаче прав и работе навигаторов.'}
          </p>
        </div>

        {/* Technical Accordion Stack */}
        <div className="border border-[#1b2330] divide-y divide-[#1b2330] bg-[#0e1218]">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#121720] transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {faq.q}
                  </span>
                  <span
                    className={`w-6 h-6 border border-[#1b2330] flex items-center justify-center text-[#8b949e] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#f59e0b] border-[#f59e0b]' : ''
                    }`}
                  >
                    <CaretDown weight="bold" className="w-3 h-3" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#8b949e] leading-relaxed border-t border-[#1b2330]/50 pt-3 bg-[#080b0f]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
