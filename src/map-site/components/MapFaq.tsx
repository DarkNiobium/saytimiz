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
    <section id="faq" className="py-24 md:py-32 border-t border-white/[0.06] bg-[#050507]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
            05 / FAQ
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white mb-3">
            {isUz ? 'Ko\'p beriladigan savollar' : 'Частые вопросы'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
            {isUz
              ? 'Xaritalarga joylashtirish jarayoni va kafolatlar bo\'yicha muhim javoblar.'
              : 'Все о сроках, модерации и передаче прав на карточки организаций.'}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="p-1.5 rounded-[1.8rem] bezel-shell transition-all"
              >
                <div className="rounded-[calc(1.8rem-0.375rem)] bezel-core overflow-hidden">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-white/[0.04] border border-white/5 flex items-center justify-center text-zinc-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-white bg-white/10' : ''
                      }`}
                    >
                      <CaretDown weight="bold" className="w-3.5 h-3.5" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal border-t border-white/[0.04] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
