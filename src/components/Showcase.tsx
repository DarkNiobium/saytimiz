import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Lightning, PaperPlaneTilt, QrCode, Cpu } from '@phosphor-icons/react';
import { Language } from '../types';
import { AnimatedUnderline } from './AnimatedUnderline';

interface ShowcaseProps {
  lang: Language;
  onOpenReserve: () => void;
}

export const Showcase: React.FC<ShowcaseProps> = ({ lang, onOpenReserve }) => {
  const isUz = lang === 'uz';

  const specs = [
    {
      code: '01 / SPEED',
      icon: Lightning,
      title: isUz ? 'Toshkent Edge tarmog\'i' : 'Мгновенный отклик на Vercel Edge',
      desc: isUz
        ? 'Sahifalar eng yaqin serverlardan uzatiladi. Ucell va Beeline tarmog\'ida 0.18 soniyada ochiladi.'
        : 'Кэширование на ближайших POP-узлах Vercel. Мгновенная отрисовка страниц даже на слабом 3G/4G.',
      metric: '0.18s TTFB'
    },
    {
      code: '02 / TELEGRAM',
      icon: PaperPlaneTilt,
      title: isUz ? 'To\'g\'ridan Telegram aloqa' : 'Прямой мост в Telegram',
      desc: isUz
        ? 'Xaridor buyurtma berishi bilan uning ismi, telefon raqami va tanlangan mahsuloti shaxsiy Telegramingizga tushadi.'
        : 'Заявка с контактами и выбранными позициями сразу поступает в личный чат владельца или бот.',
      metric: 'Direct Hook'
    },
    {
      code: '03 / PRINT',
      icon: QrCode,
      title: isUz ? 'Vektorli bosma QR-kod' : 'Векторный QR для столов и меню',
      desc: isUz
        ? 'Restoran stollari, do\'kon vitrinalari va vizitkalar uchun tayyor SVG va PDF formatdagi skanerlash kodi.'
        : 'В комплекте передается файл в векторе для наклеек на столы, меню, упаковку и полиграфические визитки.',
      metric: 'Vector SVG'
    },
    {
      code: '04 / UPTIME',
      icon: Cpu,
      title: isUz ? 'Nol soatlik texnik xizmat' : 'Нулевые затраты на администрирование',
      desc: isUz
        ? 'WordPressdagi kabi viruslar, buziluvchi plaginlar va server to\'lovlari haqida butunlay unutasiz.'
        : 'Никаких падающих баз данных, устаревших CMS-плагинов и ежемесячных счетов за хостинг.',
      metric: '99.99% Uptime'
    }
  ];

  return (
    <section id="showcase" className="py-24 md:py-32 border-t border-white/[0.06] bg-[#050507] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
            01 / Architecture
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em] text-white mb-4">
            {isUz ? (
              <>
                Vositachilarsiz{' '}
                <AnimatedUnderline color="#10b981">
                  to'g'ridan-to'g'ri sotuv
                </AnimatedUnderline>{' '}
                keltiruvchi arxitektura.
              </>
            ) : (
              <>
                Архитектура для{' '}
                <AnimatedUnderline color="#10b981">
                  прямых продаж
                </AnimatedUnderline>{' '}
                без посредников.
              </>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
            {isUz
              ? 'Nega saytimiz.uz oddiy veb-studiyalar va og\'ir CMS tizimlariga qaraganda ancha qulay.'
              : 'Почему статическая визитка на Edge работает быстрее и стабильнее тяжелых CMS.'}
          </p>
        </div>

        {/* Double-Bezel Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-1.5 rounded-[2rem] bezel-shell group hover:border-white/20 transition-all duration-300"
              >
                <div className="rounded-[calc(2rem-0.375rem)] bezel-core p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-[11px] text-zinc-500 tracking-wider">
                        {item.code}
                      </span>
                      <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        {item.metric}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white mb-5 group-hover:scale-105 group-hover:bg-white/10 transition-all duration-300">
                      <Icon weight="bold" className="w-5 h-5" />
                    </div>

                    <h3 className="text-xl font-semibold text-white tracking-tight mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-end">
                    <button
                      onClick={onOpenReserve}
                      className="font-mono text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>{isUz ? 'Band qilish' : 'Занять адрес'}</span>
                      <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
