import React from 'react';
import { Check, X } from '@phosphor-icons/react';
import { Language } from '../types';

interface ComparisonProps {
  lang: Language;
}

export const Comparison: React.FC<ComparisonProps> = ({ lang }) => {
  const isUz = lang === 'uz';

  const rows = [
    {
      metric: isUz ? 'Ishga tushirish muddati' : 'Срок запуска',
      saytimiz: isUz ? '24 soat ichida' : '24 часа',
      traditional: isUz ? '1-3 oy kutiladi' : '1-3 месяца разработки',
      winner: true
    },
    {
      metric: isUz ? 'Boshlang\'ich xarajat' : 'Стоимость запуска',
      saytimiz: isUz ? '199 000 so\'mdan' : 'от 199 000 сум',
      traditional: isUz ? '8 000 000 so\'mdan boshlab' : 'от 8 000 000 сум в агентствах',
      winner: true
    },
    {
      metric: isUz ? 'Xosting va SSL to\'lovi' : 'Хостинг и безопасность',
      saytimiz: isUz ? 'Doimiy bepul Vercel Edge' : 'Бесплатно навсегда на Vercel Edge',
      traditional: isUz ? 'Har oy yoki yiliga to\'lov' : 'Ежемесячная оплата хостинга и сертификатов',
      winner: true
    },
    {
      metric: isUz ? 'Sahifa ochilish tezligi' : 'Скорость загрузки (TTFB)',
      saytimiz: isUz ? '0.2 soniya (100 ball)' : '0.2 секунды (Google 100/100)',
      traditional: isUz ? '5-9 soniya og\'ir WordPress' : '5-8 секунд на тяжелых CMS',
      winner: true
    },
    {
      metric: isUz ? 'Mijozlar buyurtmasi' : 'Прием клиентских заявок',
      saytimiz: isUz ? 'To\'g\'ridan-to\'g\'ri Telegramga' : 'Сразу в ваш Telegram без задержек',
      traditional: isUz ? 'Pochta yoki murakkab admin panel' : 'Email или забытая админка',
      winner: true
    },
    {
      metric: isUz ? 'QR-kod va Link-in-Bio' : 'QR-код и ссылка для био',
      saytimiz: isUz ? 'Vektorli formatda sovg\'a qilinadi' : 'Готовый векторный QR в комплекте',
      traditional: isUz ? 'Alohida to\'lov talab qilinadi' : 'Требует отдельной настройки дизайнером',
      winner: true
    }
  ];

  return (
    <section id="compare" className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Eyebrow #2 */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono uppercase tracking-[0.18em] text-emerald-400 mb-5">
          <span>{isUz ? 'Faktlar bilan taqqoslash' : 'Факты без маркетинговой пыли'}</span>
        </div>

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {isUz
              ? 'Nega saytimiz.uz an\'anaviy saytlardan ustun?'
              : 'Почему saytimiz.uz выгоднее обычной веб-студии?'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {isUz
              ? 'Ortiqcha vaqt yo\'qotmasdan mijozlarga o\'z mahsulot va xizmatlaringizni taqdim eting.'
              : 'Экономьте бюджет и запускайте продажи сразу, без многомесячных согласований.'}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden shadow-xl">
          <div className="grid grid-cols-12 p-4 sm:p-5 bg-zinc-900 border-b border-zinc-800 text-xs sm:text-sm font-semibold">
            <div className="col-span-5 sm:col-span-4 text-zinc-400">
              {isUz ? 'Mezon' : 'Критерий'}
            </div>
            <div className="col-span-4 sm:col-span-4 text-emerald-400 font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>saytimiz.uz</span>
            </div>
            <div className="col-span-3 sm:col-span-4 text-zinc-400">
              {isUz ? 'Oddiy veb-sayt' : 'Обычный сайт / CMS'}
            </div>
          </div>

          <div className="divide-y divide-zinc-800/70">
            {rows.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-center hover:bg-zinc-900/40 transition-colors"
              >
                <div className="col-span-5 sm:col-span-4 text-zinc-300 font-medium pr-2">
                  {row.metric}
                </div>
                <div className="col-span-4 sm:col-span-4 flex items-center gap-2 text-emerald-300 font-medium pr-2">
                  <Check weight="bold" className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{row.saytimiz}</span>
                </div>
                <div className="col-span-3 sm:col-span-4 flex items-center gap-2 text-zinc-400">
                  <X weight="bold" className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>{row.traditional}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
