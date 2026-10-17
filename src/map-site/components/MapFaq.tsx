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
    <section id="faq" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Savol va javoblar
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isUz ? 'Ko\'p beriladigan savollar.' : 'Частые вопросы.'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            {isUz
              ? 'Xaritalarga joylashtirish, moderatsiya muddatlari va kafolatlar bo\'yicha aniq ma\'lumotlar.'
              : 'Все о сроках модерации, передаче прав и работе навигаторов.'}
          </p>
        </div>

        {/* Clean Accordions Stack */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all text-left"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    {faq.q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-emerald-700' : ''
                    }`}
                  >
                    <CaretDown weight="bold" className="w-3.5 h-3.5" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
