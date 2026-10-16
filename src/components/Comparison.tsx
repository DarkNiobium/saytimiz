import React from 'react';
import { Language } from '../types';

interface ComparisonProps {
  lang: Language;
}

export const Comparison: React.FC<ComparisonProps> = ({ lang }) => {
  const isUz = lang === 'uz';

  const rows = [
    {
      metric: isUz ? 'Ishga tushirish' : 'Срок запуска',
      saytimiz: isUz ? '10 daqiqada' : '10 минут',
      traditional: isUz ? '1-2 oy kutiladi' : '1-2 месяца согласований'
    },
    {
      metric: isUz ? 'Boshlang\'ich xarajat' : 'Бюджет проекта',
      saytimiz: isUz ? '199 000 so\'mdan' : 'от 199 000 сум',
      traditional: isUz ? '8 000 000 so\'mdan boshlab' : 'от 8 000 000 сум в студиях'
    },
    {
      metric: isUz ? 'Xosting va infratuzilma' : 'Инфраструктура и хостинг',
      saytimiz: isUz ? 'Vercel CDN + SSL (Tekin)' : 'Vercel CDN + SSL включены навсегда',
      traditional: isUz ? 'Har oy yoki yiliga alohida to\'lov' : 'Ежемесячная аренда сервера'
    },
    {
      metric: isUz ? 'Mobil tezlik (TTFB)' : 'Скорость мобильной загрузки',
      saytimiz: isUz ? '0.18 soniya' : '0.18 секунды (без задержек)',
      traditional: isUz ? '4-7 soniya CMS' : '4-7 секунд на тяжелом WordPress'
    },
    {
      metric: isUz ? 'Buyurtmalar oqimi' : 'Прием входящих заявок',
      saytimiz: isUz ? 'Telegramga to\'g\'ridan' : 'Мгновенно в личный Telegram',
      traditional: isUz ? 'Pochta yoki unutilgan panel' : 'Email или отдельная CRM'
    }
  ];

  return (
    <section id="compare" className="py-24 md:py-32 border-t border-white/[0.06] bg-[#050507]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em] text-white mb-3">
            {isUz ? 'Texnik va narx farqi' : 'Сравнение подходов'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {isUz
              ? 'An\'anaviy agentliklar bilan saytimiz modelining aniq farqlari.'
              : 'Разница между дорогой заказной разработкой и готовой платформенной визиткой.'}
          </p>
        </div>

        {/* Double-Bezel Table Enclosure */}
        <div className="p-2 rounded-[2rem] bezel-shell">
          <div className="rounded-[calc(2rem-0.5rem)] bezel-core overflow-hidden">
            <div className="grid grid-cols-12 p-4 sm:p-5 bg-white/[0.02] border-b border-white/[0.06] text-xs font-mono uppercase tracking-wider text-zinc-500">
              <div className="col-span-4">{isUz ? 'Parametr' : 'Параметр'}</div>
              <div className="col-span-4 text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>saytimiz.uz</span>
              </div>
              <div className="col-span-4">{isUz ? 'Agentlik' : 'Веб-студия'}</div>
            </div>

            <div className="divide-y divide-white/[0.04]">
              {rows.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-center hover:bg-white/[0.015] transition-colors"
                >
                  <div className="col-span-4 text-zinc-400 font-medium pr-2">
                    {row.metric}
                  </div>
                  <div className="col-span-4 text-white font-medium pr-2">
                    {row.saytimiz}
                  </div>
                  <div className="col-span-4 text-zinc-500">
                    {row.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
