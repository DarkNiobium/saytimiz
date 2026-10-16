import React from 'react';
import {
  RocketLaunch,
  DeviceMobile,
  ChatCircleDots,
  Cpu
} from '@phosphor-icons/react';
import { Language } from '../types';

interface ShowcaseProps {
  lang: Language;
  onOpenReserve: (subdomain?: string) => void;
}

export const Showcase: React.FC<ShowcaseProps> = ({ lang, onOpenReserve }) => {
  const isUz = lang === 'uz';

  return (
    <section id="showcase" className="py-16 md:py-24 border-b border-zinc-800/80 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header - Stacked, no split header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {isUz
              ? 'Biznesingiz uchun tayyor imkoniyatlar'
              : 'Готовые возможности для вашего бизнеса'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {isUz
              ? 'Murakkab va qimmat dasturchilarsiz, doimiy nosozliklarsiz va ortiqcha xarajatlarsiz ishlovchi saytlar.'
              : 'Никаких тяжелых движков, никаких переплат агентствам и никаких падений серверов в пиковые часы.'}
          </p>
        </div>

        {/* Bento Grid with Asymmetric Tiles and Background Diversity */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Tile 1: 0.2s Speed - Dark with Emerald accents and metric */}
          <div className="md:col-span-7 rounded-xl bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <RocketLaunch className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {isUz ? '0.2 soniyada ochiladigan tezlik' : 'Загрузка за 0.2 секунды'}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-[48ch]">
                {isUz
                  ? 'Saytingiz Vercel Global Edge tarmog\'ida joylashadi. Beeline, Ucell va Uztelecom mobil internetida sahifalar darhol ochiladi.'
                  : 'Сайт размещается в глобальной сети Vercel Edge. На медленном мобильном 3G/4G страницы открываются без ожидания.'}
              </p>
            </div>

            {/* Visual metric representation */}
            <div className="mt-6 pt-6 border-t border-zinc-800 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-400">100/100</div>
                <div className="text-[11px] text-zinc-400 mt-1">Google Score</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-zinc-200">180ms</div>
                <div className="text-[11px] text-zinc-400 mt-1">Tashkent TTFB</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-zinc-200">99.99%</div>
                <div className="text-[11px] text-zinc-400 mt-1">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Tile 2: Telegram Order Integration - Visual preview */}
          <div className="md:col-span-5 rounded-xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
                <ChatCircleDots className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {isUz ? 'To\'g\'ridan-to\'g\'ri Telegram buyurtmalar' : 'Заказы прямо в Telegram'}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {isUz
                  ? 'Mijoz mahsulotni tanlaydi, buyurtma tugmasini bosadi va sizning Telegramingizga to\'liq ma\'lumot yetib keladi.'
                  : 'Клиент оформляет заказ за пару секунд, а уведомление с контактами и списком товаров падает напрямую в ваш Telegram.'}
              </p>
            </div>

            <div className="mt-6 p-3.5 rounded-lg bg-zinc-950 border border-zinc-800/80 space-y-1.5 font-mono text-xs">
              <div className="text-zinc-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>@saytimiz_bot [Yangi Buyurtma]</span>
              </div>
              <div className="text-zinc-200 font-semibold">Burger Double + Fries</div>
              <div className="text-emerald-400 text-[11px]">89 000 UZS / Tashkent</div>
            </div>
          </div>

          {/* Tile 3: 100% Mobile First Experience */}
          <div className="md:col-span-5 rounded-xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <DeviceMobile className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {isUz ? '100% Mobil qurilmalarga mos' : '100% Mobile-first визитка'}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {isUz
                  ? 'O\'zbekistondagi tashrif buyuruvchilarning 92 foizi telefon orqali kiradi. Sayt har qanday smartfonda qulay ishlaydi.'
                  : '92% клиентов в Узбекистане переходят из Instagram и Telegram с телефонов. Наш интерфейс создан специально для смартфонов.'}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-zinc-400">
              <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-mono">iOS Safari</span>
              <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-mono">Android Chrome</span>
              <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-mono">In-App Webview</span>
            </div>
          </div>

          {/* Tile 4: Zero Headache / Serverless Vercel Architecture */}
          <div className="md:col-span-7 rounded-xl bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {isUz ? 'Server va xosting dardi yo\'q' : 'Никакой головной боли с серверами'}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-[50ch]">
                {isUz
                  ? 'WordPress yoki bitrixdagi kabi viruslar, yangilanishlar va nosozliklar haqida unuting. Biz to\'liq texnik xizmatni o\'z zimmamizga olamiz.'
                  : 'Забудьте о взломах WordPress, падениях MySQL и оплате хостинга каждый месяц. Мы берем всю техническую часть на себя.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono">
                {isUz ? 'O\'z biznesingiz nomini tanlang:' : 'Выберите свой адрес:'}
              </span>
              <button
                onClick={() => onOpenReserve()}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-100 text-zinc-950 hover:bg-white transition-colors"
              >
                {isUz ? 'Nom tanlash' : 'Занять поддомен'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
