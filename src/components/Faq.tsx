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
    <section className="py-24 md:py-32 border-t border-white/[0.06] bg-[#050507]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em] text-white mb-3">
            {isUz ? 'Savol va javoblar' : 'Часто задаваемые вопросы'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {isUz
              ? 'Xizmat qanday ishlashi va ulanish tartibi bo\'yicha aniq ma\'lumotlar.'
              : 'Всё, что важно знать о доменной привязке, безопасности и техническом запуске.'}
          </p>
        </div>

        {/* Double-Bezel FAQ Container */}
        <div className="p-1.5 rounded-[2rem] bezel-shell">
          <div className="rounded-[calc(2rem-0.375rem)] bezel-core p-4 sm:p-6 divide-y divide-white/[0.04]">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-4 first:pt-2 last:pb-2">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left flex items-center justify-between gap-4 py-2 hover:text-white transition-colors group"
                  >
                    <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-6 h-6 rounded-full bg-white/[0.04] border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 bg-white/10 text-white' : ''
                      }`}
                    >
                      <CaretDown weight="bold" className="w-3 h-3" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pt-3 pb-2 text-xs text-zinc-400 leading-relaxed pr-8">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
