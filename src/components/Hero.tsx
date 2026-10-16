import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, PaperPlaneTilt, PhoneCall, QrCode } from '@phosphor-icons/react';
import { Language } from '../types';
import { AnimatedUnderline } from './AnimatedUnderline';
import { Typewriter } from './Typewriter';

interface HeroProps {
  lang: Language;
  onOpenReserve: (name: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenReserve }) => {
  const isUz = lang === 'uz';

  const businessCases = [
    {
      slug: 'zamondosh',
      title: 'Zamondosh Studio',
      category: isUz ? 'Kiyim va shourum' : 'Одежда и шоурум',
      tagline: isUz
        ? 'Tabiiy paxtadan zamonaviy kiyimlar brendi'
        : 'Локальный бренд одежды из премиального хлопка',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80',
      items: [
        { name: 'Oversize Hoodie', price: '340 000 сум' },
        { name: 'Cotton T-Shirt Pure', price: '160 000 сум' }
      ]
    },
    {
      slug: 'fastfood',
      title: 'OqTepa Express',
      category: isUz ? 'Burger va taomlar' : 'Бургеры и доставка',
      tagline: isUz
        ? 'Toshkent bo\'ylab issiq taomlar va tezkor yetkazish'
        : 'Сочные бургеры и доставка по городу за 35 минут',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
      items: [
        { name: 'Double Cheese Burger', price: '48 000 сум' },
        { name: 'Lavash Beef Special', price: '38 000 сум' }
      ]
    },
    {
      slug: 'safia',
      title: 'Safia Patisserie',
      category: isUz ? 'Shirinliklar uyi' : 'Кондитерский дом',
      tagline: isUz
        ? 'Har kuni yangi pishiriqlar, tortlar va qahva'
        : 'Свежая выпечка, авторские десерты и кофе',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
      items: [
        { name: 'Pistachio San Sebastian', price: '42 000 сум' },
        { name: 'Signature Almond Croissant', price: '28 000 сум' }
      ]
    },
    {
      slug: 'barbershop',
      title: 'Brothers Club',
      category: isUz ? 'Erkaklar sartaroshxonasi' : 'Мужской салон',
      tagline: isUz
        ? 'Erkaklar soch turmagi va soqol parvarishi'
        : 'Стрижки, моделирование бороды и спокойная атмосфера',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80',
      items: [
        { name: 'Стрижка + Стайлинг', price: '120 000 сум' },
        { name: 'Уход за бородой', price: '70 000 сум' }
      ]
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const currentCase = businessCases[activeIdx] || businessCases[0];

  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden radial-ambient">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/[0.04] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative text-center flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-400 mb-6"
        >
          <span>saytimiz.uz platform</span>
        </motion.div>

        {/* Monolithic Headline with literal beautiful underline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] text-white max-w-4xl leading-[1.08] mb-6"
        >
          {isUz ? (
            <>
              Biznesingiz uchun{' '}
              <AnimatedUnderline color="#10b981">
                24 soatda
              </AnimatedUnderline>{' '}
              raqamli vizitka.
            </>
          ) : (
            <>
              Сайт-визитка для бизнеса{' '}
              <AnimatedUnderline color="#10b981">
                за 24 часа
              </AnimatedUnderline>{' '}
              в зоне .uz
            </>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed mb-10 font-normal"
        >
          {isUz
            ? 'Telegram orqali buyurtma qabul qiluvchi, bosma QR-kodli va millisekundlarda ochiluvchi mustaqil veb-sahifalar.'
            : 'Автономные страницы с прямой конверсией в Telegram, QR-кодом для заведений и мгновенным откликом без серверов.'}
        </motion.p>

        {/* Primary CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() => onOpenReserve(currentCase.slug)}
            className="pl-6 pr-2 py-2.5 rounded-full bg-white text-zinc-950 font-medium text-xs tracking-tight hover:bg-zinc-200 transition-all active:scale-[0.98] flex items-center gap-3 group shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <span>{isUz ? 'O\'z nomingizni band qilish' : 'Забронировать свой поддомен'}</span>
            <span className="w-6 h-6 rounded-full bg-zinc-950 text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
            </span>
          </button>
        </motion.div>

        {/* Typewriter Dynamic Subdomain Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-xl"
        >
          <div className="p-2 rounded-[2rem] bezel-shell">
            <div className="p-4 rounded-[calc(2rem-0.5rem)] bezel-core flex items-center justify-between font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 text-zinc-400 truncate">
                <span className="text-zinc-600 select-none">https://</span>
                <Typewriter
                  words={businessCases}
                  typingSpeed={85}
                  deletingSpeed={45}
                  pauseMs={2400}
                  onWordChange={(idx) => setActiveIdx(idx)}
                  className="text-white font-semibold"
                />
                <span className="text-zinc-500 select-none">.saytimiz.uz</span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-[11px] font-mono text-emerald-400 border border-emerald-500/20 shrink-0">
                <Check weight="bold" className="w-3 h-3" />
                <span>{isUz ? 'Band qilish' : 'Доступен'}</span>
              </div>
            </div>
          </div>

          {/* Morphing Preview Card synchronized with typewriter */}
          <div className="mt-6 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCase.slug}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-md p-1.5 rounded-[2rem] bezel-shell text-left shadow-2xl"
              >
                <div className="rounded-[calc(2rem-0.375rem)] bezel-core p-5 space-y-4">
                  {/* Image cover */}
                  <div className="relative h-36 rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src={currentCase.image}
                      alt={currentCase.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">
                          {currentCase.category}
                        </span>
                        <h4 className="text-base font-semibold text-white tracking-tight leading-tight mt-0.5">
                          {currentCase.title}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400">
                        {currentCase.slug}.saytimiz.uz
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {currentCase.tagline}
                  </p>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenReserve(currentCase.slug)}
                      className="py-2 px-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 text-xs font-medium text-white flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5 text-zinc-300" />
                      <span>Telegram</span>
                    </button>
                    <button
                      onClick={() => onOpenReserve(currentCase.slug)}
                      className="py-2 px-3 rounded-xl bg-white text-zinc-950 text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-zinc-200 transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>+998 (90) ...</span>
                    </button>
                  </div>

                  {/* Items */}
                  <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                    {currentCase.items.map((item, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-xs"
                      >
                        <span className="text-zinc-200 font-medium">{item.name}</span>
                        <span className="font-mono text-zinc-400">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* QR Footnote */}
                  <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <QrCode className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{isUz ? 'Stollar uchun QR mavjud' : 'QR-код для визиток включен'}</span>
                    </div>
                    <span className="text-emerald-400">0.18s FCP</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
