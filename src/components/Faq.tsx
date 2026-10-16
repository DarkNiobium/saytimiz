import React, { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { Language } from '../types';
import { faqData } from '../data/content';

interface FaqProps {
  lang: Language;
}

export const Faq: React.FC<FaqProps> = ({ lang }) => {
  const isUz = lang === 'uz';
  const faqs = faqData[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header - Stacked, no split header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {isUz ? 'Ko\'p beriladigan savollar' : 'Частые вопросы'}
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {isUz
              ? 'Xizmat, to\'lov va saytni ulash bo\'yicha barcha asosiy javoblar.'
              : 'Всё, что нужно знать о подключении, запуске и поддержке вашего сайта.'}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-zinc-900/90 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-zinc-200">
                    {faq.question}
                  </span>
                  <CaretDown
                    weight="bold"
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/60">
                    {faq.answer}
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
