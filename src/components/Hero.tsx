import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Check,
  PaperPlaneTilt,
  PhoneCall,
  QrCode,
  ShoppingBag,
  Clock,
  MapPin,
  ForkKnife,
  Scissors,
  FirstAid
} from '@phosphor-icons/react';
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
      slug: 'fastfood',
      title: 'OqTepa Express',
      category: isUz ? 'Kafe va yetkazish' : 'Кафе и доставка',
      type: 'food'
    },
    {
      slug: 'zamondosh',
      title: 'Zamondosh Studio',
      category: isUz ? 'Kiyim va uslub' : 'Шоурум одежды',
      type: 'fashion'
    },
    {
      slug: 'medlife',
      title: 'MedLife Dental',
      category: isUz ? 'Stomatologiya' : 'Стоматология',
      type: 'medical'
    },
    {
      slug: 'barber',
      title: 'Brothers Club',
      category: isUz ? 'Barbershop' : 'Барбершоп',
      type: 'grooming'
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const currentCase = businessCases[activeIdx] || businessCases[0];

  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden radial-ambient">
      {/* Background glow */}
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

        {/* Headline with 10 minutes */}
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
                10 daqiqada
              </AnimatedUnderline>{' '}
              raqamli vizitka.
            </>
          ) : (
            <>
              Сайт-визитка для бизнеса{' '}
              <AnimatedUnderline color="#10b981">
                за 10 минут
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
            ? 'Oylab kutmasdan darhol ishga tushiring. Telegram orqali to\'g\'ridan-to\'g\'ri buyurtmalar, bosma QR-kod va tezkor yuklanish.'
            : 'Моментальный запуск без месяцев согласований. Прямые заказы в Telegram, векторный QR-код и моментальная загрузка.'}
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
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

        {/* Typewriter Subdomain Selector Bar */}
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
                  typingSpeed={80}
                  deletingSpeed={45}
                  pauseMs={2500}
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

          {/* Quick industry tabs to click directly */}
          <div className="flex items-center justify-center gap-2 mt-4 overflow-x-auto py-1">
            {businessCases.map((bc, idx) => (
              <button
                key={bc.slug}
                onClick={() => setActiveIdx(idx)}
                className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all ${
                  activeIdx === idx
                    ? 'bg-white text-zinc-950 font-semibold'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                {bc.title}
              </button>
            ))}
          </div>

          {/* Radically Diverse Showcase Cards */}
          <div className="mt-6 flex justify-center">
            <AnimatePresence mode="wait">
              {/* 1. FAST FOOD & BURGERS (Food Delivery UI) */}
              {currentCase.type === 'food' && (
                <motion.div
                  key="food"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md p-1.5 rounded-[2rem] bezel-shell text-left shadow-2xl"
                >
                  <div className="rounded-[calc(2rem-0.375rem)] bezel-core p-5 space-y-4">
                    {/* Header with badges */}
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px]">
                            HALAL
                          </span>
                          <span className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                            <Clock className="w-3 h-3 text-zinc-400" />
                            30-35 min
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                          <ForkKnife className="w-5 h-5 text-amber-400" />
                          OqTepa Express
                        </h4>
                      </div>
                      <span className="font-mono text-xs text-amber-400">★ 4.9 (1.2k)</span>
                    </div>

                    {/* Food Menu Items */}
                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                        <div className="min-w-0 pr-2">
                          <div className="text-xs font-semibold text-white">Double Cheese Burger</div>
                          <div className="text-[11px] text-zinc-400">Ikki karra mol go'shti, cheddar pishlog'i</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-mono text-xs text-emerald-400 font-medium">48 000 сум</div>
                          <span className="text-[10px] text-zinc-400">+ Savatga</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                        <div className="min-w-0 pr-2">
                          <div className="text-xs font-semibold text-white">Lavash Beef Cheese</div>
                          <div className="text-[11px] text-zinc-400">Yangi sabzavotlar, maxsus sous</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-mono text-xs text-emerald-400 font-medium">38 000 сум</div>
                          <span className="text-[10px] text-zinc-400">+ Savatga</span>
                        </div>
                      </div>
                    </div>

                    {/* Direct Telegram Order Button */}
                    <button
                      onClick={() => onOpenReserve('fastfood')}
                      className="w-full py-3 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors shadow-lg"
                    >
                      <PaperPlaneTilt weight="fill" className="w-4 h-4" />
                      <span>Telegram orqali buyurtma (86 000 сум)</span>
                    </button>

                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-1 border-t border-white/[0.06]">
                      <div className="flex items-center gap-1.5">
                        <QrCode className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Stol uchun QR menyu</span>
                      </div>
                      <span className="text-emerald-400">fastfood.saytimiz.uz</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* 2. ZAMONDOSH (Minimalist Fashion & Showroom) */}
              {currentCase.type === 'fashion' && (
                <motion.div
                  key="fashion"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md p-1.5 rounded-[2rem] bezel-shell text-left shadow-2xl"
                >
                  <div className="rounded-[calc(2rem-0.375rem)] bezel-core p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">
                          Capsule '26 Collection
                        </span>
                        <h4 className="text-lg font-serif italic text-white tracking-wide">
                          Zamondosh Studio
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono border border-white/20 px-2 py-0.5 rounded-full text-zinc-300">
                        100% Cotton
                      </span>
                    </div>

                    {/* Big Lookbook Visual */}
                    <div className="relative h-40 rounded-2xl overflow-hidden border border-white/10">
                      <img
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80"
                        alt="Zamondosh"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between">
                        <div>
                          <div className="text-xs font-medium text-white">Oversize Hoodie Tashkent</div>
                          <div className="font-mono text-xs text-zinc-300">340 000 сум</div>
                        </div>
                        {/* Size pills */}
                        <div className="flex items-center gap-1 font-mono text-[10px]">
                          <span className="px-1.5 py-0.5 rounded bg-black/60 border border-white/20 text-white">S</span>
                          <span className="px-1.5 py-0.5 rounded bg-black/60 border border-white/20 text-white">M</span>
                          <span className="px-1.5 py-0.5 rounded bg-white text-black font-bold">L</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onOpenReserve('zamondosh')}
                        className="py-2.5 px-3 rounded-xl bg-white text-zinc-950 font-medium text-xs flex items-center justify-center gap-1.5 hover:bg-zinc-200 transition-colors"
                      >
                        <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5" />
                        <span>Menejerga yozish</span>
                      </button>
                      <button
                        onClick={() => onOpenReserve('zamondosh')}
                        className="py-2.5 px-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-medium text-zinc-300 flex items-center justify-center gap-1.5 hover:text-white transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Katalog (Instagram)</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-1 border-t border-white/[0.06]">
                      <span>Instagram bio vizitkasi</span>
                      <span className="text-zinc-300">zamondosh.saytimiz.uz</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* 3. DENTAL & CLINIC (Medical Clinic UI) */}
              {currentCase.type === 'medical' && (
                <motion.div
                  key="medical"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md p-1.5 rounded-[2rem] bezel-shell text-left shadow-2xl"
                >
                  <div className="rounded-[calc(2rem-0.375rem)] bezel-core p-5 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-sky-400 font-mono text-[10px] mb-1">
                          <FirstAid weight="fill" className="w-3.5 h-3.5" />
                          <span>LITSENZIYA № 4812</span>
                        </div>
                        <h4 className="text-lg font-bold text-white tracking-tight">
                          MedLife Dental Clinic
                        </h4>
                        <p className="text-[11px] text-zinc-400 mt-0.5">
                          Bosh shifokor: Dr. Rustamov (14 yillik tajriba)
                        </p>
                      </div>
                      <div className="text-right font-mono text-[10px] text-zinc-400">
                        <div>Du-Shan</div>
                        <div className="text-emerald-400 font-bold">09:00 - 20:00</div>
                      </div>
                    </div>

                    {/* Services spec list */}
                    <div className="space-y-1.5">
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                        <span className="text-zinc-200">3D Rentgen va konsultatsiya</span>
                        <span className="font-mono text-emerald-400 font-medium">Bepul</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                        <span className="text-zinc-200">AirFlow professional tozalash</span>
                        <span className="font-mono text-zinc-300">350 000 сум</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onOpenReserve('medlife')}
                        className="py-2.5 px-3 rounded-xl bg-sky-500 text-zinc-950 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-sky-400 transition-colors"
                      >
                        <PhoneCall weight="fill" className="w-3.5 h-3.5" />
                        <span>Qabulga yozilish</span>
                      </button>
                      <button
                        onClick={() => onOpenReserve('medlife')}
                        className="py-2.5 px-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-medium text-zinc-300 flex items-center justify-center gap-1.5 hover:text-white transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Yandex / 2GIS</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-1 border-t border-white/[0.06]">
                      <span>Shifokor bilan tezkor aloqa</span>
                      <span className="text-sky-400">medlife.saytimiz.uz</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* 4. BARBERSHOP (Gentlemen's Salon UI) */}
              {currentCase.type === 'grooming' && (
                <motion.div
                  key="grooming"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md p-1.5 rounded-[2rem] bezel-shell text-left shadow-2xl"
                >
                  <div className="rounded-[calc(2rem-0.375rem)] bezel-core p-5 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="flex items-center gap-1 text-amber-400 font-mono text-[10px] uppercase tracking-wider mb-1">
                          <Scissors className="w-3 h-3" />
                          Gentlemen's Club
                        </span>
                        <h4 className="text-lg font-bold text-white tracking-tight">
                          Brothers Barbershop
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-[10px] text-emerald-400">
                        Bugun 2 ta joy bor
                      </span>
                    </div>

                    <div className="space-y-1.5 font-mono text-xs">
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                        <span className="text-zinc-200">Soch turmagi + Yuvish</span>
                        <span className="text-zinc-300">120 000 сум</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                        <span className="text-zinc-200">Soqol tekislash (Issiq sochiq)</span>
                        <span className="text-zinc-300">70 000 сум</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenReserve('barber')}
                      className="w-full py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
                    >
                      <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5" />
                      <span>Vaqtni Telegramda band qilish</span>
                    </button>

                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-1 border-t border-white/[0.06]">
                      <span>Master: Top Barber Jasur</span>
                      <span className="text-amber-400">barber.saytimiz.uz</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
