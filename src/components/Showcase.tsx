import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { Language } from '../types';

interface ShowcaseProps {
  lang: Language;
  onOpenReserve: () => void;
}

export const Showcase: React.FC<ShowcaseProps> = ({ lang, onOpenReserve }) => {
  const isUz = lang === 'uz';

  return (
    <section id="showcase" className="py-24 md:py-32 border-t border-white/[0.06] bg-[#050507]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em] text-white mb-3">
            {isUz ? 'Arxitektura va afzalliklar' : 'Инженерные стандарты saytimiz'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {isUz
              ? 'Nega saytlarimiz yillar davomida uzluksiz va yuqori tezlikda ishlaydi.'
              : 'Почему мы отказались от шаблонных CMS в пользу статической Edge-архитектуры.'}
          </p>
        </div>

        {/* Asymmetrical Hardware Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Vercel Edge */}
          <div className="md:col-span-7 p-1.5 rounded-[2rem] bezel-shell">
            <div className="rounded-[calc(2rem-0.375rem)] bezel-core p-8 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                  01 / Global Edge
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mt-3 mb-2">
                  {isUz ? 'Millisekundlik javob tezligi' : 'Мгновенный отклик на любом тарифе'}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
                  {isUz
                    ? 'Sayt Toshkentdagi Edge-serverlardan tarqatiladi. Ucell, Beeline yoki Uztelecom tarmog\'ida kutishsiz ochiladi.'
                    : 'Контент кэшируется на ближайших к Узбекистану узлах Vercel. Страницы открываются сразу даже при слабом 3G.'}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-zinc-400">
                <span>Routing: TAS Node</span>
                <span className="text-emerald-400">0.18s First Contentful Paint</span>
              </div>
            </div>
          </div>

          {/* Card 2: Telegram Lead Flow */}
          <div className="md:col-span-5 p-1.5 rounded-[2rem] bezel-shell">
            <div className="rounded-[calc(2rem-0.375rem)] bezel-core p-8 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                  02 / Telegram Bridge
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mt-3 mb-2">
                  {isUz ? 'Buyurtmalar to\'g\'ridan Telegramga' : 'Прямой мост в Telegram'}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {isUz
                    ? 'Murakkab adminkalar va elektron pochtani tekshirish shart emas. Mijoz buyurtmasi to\'g\'ridan sizga yetib boradi.'
                    : 'Никаких забытых паролей от почты. Заявка с телефоном и списком выбранных позиций падает в ваш личный мессенджер.'}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] font-mono text-xs text-zinc-400 flex items-center justify-between">
                <span>Webhook Bridge</span>
                <span className="text-zinc-200">Zero Commission</span>
              </div>
            </div>
          </div>

          {/* Card 3: Offline to Online QR */}
          <div className="md:col-span-5 p-1.5 rounded-[2rem] bezel-shell">
            <div className="rounded-[calc(2rem-0.375rem)] bezel-core p-8 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                  03 / Vector Identity
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mt-3 mb-2">
                  {isUz ? 'Chop etish uchun tayyor QR-kod' : 'Векторный QR для полиграфии'}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {isUz
                    ? 'Kafe stollari, kiyim teglari yoki avtomobil oynalariga joylashtirish uchun sifatli SVG/PDF fayl taqdim etiladi.'
                    : 'В комплекте идет готовый файл в векторе для наклеек на столы, меню, визиток и рекламных баннеров.'}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] font-mono text-xs text-zinc-400 flex items-center justify-between">
                <span>Formats: SVG · PDF</span>
                <span className="text-zinc-200">Print Ready</span>
              </div>
            </div>
          </div>

          {/* Card 4: Zero Maintenance */}
          <div className="md:col-span-7 p-1.5 rounded-[2rem] bezel-shell">
            <div className="rounded-[calc(2rem-0.375rem)] bezel-core p-8 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                  04 / Zero Maintenance
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mt-3 mb-2">
                  {isUz ? 'Texnik xizmat tashvishsiz' : 'Ноль часов на обслуживание'}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
                  {isUz
                    ? 'Doimiy buziluvchi WordPress plaginlari yoki server to\'lovlari yo\'q. Saytingiz doim xavfsiz va ishchi holatda turadi.'
                    : 'Никаких взломанных баз данных, вирусов на хостинге и счетов в конце месяца. Полная изоляция и надежность.'}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs">
                <span className="text-zinc-400">SSL + DDOS Shield</span>
                <button
                  onClick={onOpenReserve}
                  className="text-white hover:text-zinc-300 flex items-center gap-1 text-xs"
                >
                  <span>{isUz ? 'Bog\'lanish' : 'Забронировать'}</span>
                  <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
