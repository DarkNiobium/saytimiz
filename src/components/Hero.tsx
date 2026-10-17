import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Check,
  PaperPlaneTilt,
  PhoneCall,
  QrCode,
  ShoppingBag,
  ForkKnife,
  Scissors,
  FirstAid,
  Lock,
  Lightning,
  Star
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative text-center flex flex-col items-center">
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
          className="w-full max-w-xl mb-4"
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
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeIdx === idx
                    ? 'bg-white text-zinc-950 font-semibold shadow-md'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                {bc.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* High-Fidelity Realistic Browser Screenshot Viewport (Expanded max-w-4xl) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl mt-6"
        >
          <div className="p-2 sm:p-3 rounded-[2.5rem] bezel-shell">
            <div className="rounded-[calc(2.5rem-0.625rem)] bezel-core overflow-hidden shadow-2xl border border-white/10 text-left">
              {/* Browser Window Header Chrome */}
              <div className="px-5 py-3.5 bg-[#0e0e12] border-b border-white/[0.08] flex items-center justify-between">
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>

                {/* Browser Address Bar with Lock */}
                <div className="flex-1 max-w-md mx-4 px-3.5 py-1.5 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center gap-2 font-mono text-xs text-zinc-300">
                  <Lock weight="fill" className="w-3 h-3 text-emerald-400" />
                  <span className="text-zinc-500">https://</span>
                  <span className="text-white font-medium">{currentCase.slug}</span>
                  <span className="text-zinc-500">.saytimiz.uz</span>
                </div>

                {/* CDN Latency Metric */}
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                  <Lightning weight="fill" className="w-3 h-3" />
                  <span>0.18s · Vercel CDN</span>
                </div>
              </div>

              {/* Screenshot Interior Body */}
              <div className="bg-[#09090c] p-6 sm:p-8 space-y-6">
                <AnimatePresence mode="wait">
                  {/* 1. FAST FOOD & DELIVERY SCREENSHOT */}
                  {currentCase.type === 'food' && (
                    <motion.div
                      key="food"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      {/* Sub-header inside screenshot */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                            <ForkKnife weight="bold" className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white tracking-tight">OqTepa Express</div>
                            <div className="text-[10px] text-zinc-400 font-mono">Fast Food & Grill · Toshkent</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-mono">
                            HALOL SERTIFIKAT
                          </span>
                          <button
                            onClick={() => onOpenReserve('fastfood')}
                            className="px-3 py-1.5 rounded-lg bg-emerald-500 text-zinc-950 text-xs font-bold flex items-center gap-1 hover:bg-emerald-400 transition-colors"
                          >
                            <PaperPlaneTilt weight="fill" className="w-3 h-3" />
                            <span>Telegram</span>
                          </button>
                        </div>
                      </div>

                      {/* Wide Hero Screenshot Banner */}
                      <div className="relative rounded-2xl overflow-hidden h-48 sm:h-64 border border-white/10 shadow-2xl">
                        <img
                          src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80"
                          alt="OqTepa Burgers"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="px-2 py-0.5 rounded bg-amber-500 text-zinc-950 font-bold font-mono text-[10px]">
                                YANGI MENYU
                              </span>
                              <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400">
                                <Star weight="fill" className="w-3 h-3" />
                                <span>4.9 (1.2k fikr)</span>
                              </span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                              Haqiqiy go'sht va maxsus souslar
                            </h3>
                            <p className="text-xs text-zinc-300 max-w-md mt-0.5">
                              Toshkent bo'ylab 30 daqiqada issiq yetkazib beramiz
                            </p>
                          </div>

                          <button
                            onClick={() => onOpenReserve('fastfood')}
                            className="px-5 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-xs flex items-center gap-2 hover:bg-emerald-400 transition-colors shadow-lg shrink-0"
                          >
                            <PaperPlaneTilt weight="fill" className="w-4 h-4" />
                            <span>Telegram orqali buyurtma</span>
                          </button>
                        </div>
                      </div>

                      {/* 3 Real Catalog Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">Double Cheese Burger</div>
                            <div className="text-[10px] text-zinc-400 mt-0.5">Ikki karra mol go'shti, cheddar pishlog'i</div>
                          </div>
                          <div className="flex items-center justify-between pt-2 mt-3 border-t border-white/[0.04] font-mono text-xs">
                            <span className="text-emerald-400 font-semibold">48 000 сум</span>
                            <span className="text-[10px] text-zinc-400 hover:text-white cursor-pointer">+ Savatga</span>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">Lavash Beef Cheese</div>
                            <div className="text-[10px] text-zinc-400 mt-0.5">Yangi sabzavotlar, pishloq, maxsus sous</div>
                          </div>
                          <div className="flex items-center justify-between pt-2 mt-3 border-t border-white/[0.04] font-mono text-xs">
                            <span className="text-emerald-400 font-semibold">38 000 сум</span>
                            <span className="text-[10px] text-zinc-400 hover:text-white cursor-pointer">+ Savatga</span>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">Combo Duo Set</div>
                            <div className="text-[10px] text-zinc-400 mt-0.5">2 ta burger, fri kartoshkasi, 2 ta kola</div>
                          </div>
                          <div className="flex items-center justify-between pt-2 mt-3 border-t border-white/[0.04] font-mono text-xs">
                            <span className="text-emerald-400 font-semibold">89 000 сум</span>
                            <span className="text-[10px] text-zinc-400 hover:text-white cursor-pointer">+ Savatga</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom QR & Table order banner */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
                        <div className="flex items-center gap-2">
                          <QrCode className="w-4 h-4 text-emerald-400" />
                          <span>Stollar uchun vektorli QR-menyu taqdim etiladi</span>
                        </div>
                        <button
                          onClick={() => onOpenReserve('fastfood')}
                          className="text-white hover:text-emerald-400 transition-colors flex items-center gap-1"
                        >
                          <span>Ushbu dizaynni olish</span>
                          <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* 2. ZAMONDOSH FASHION SCREENSHOT */}
                  {currentCase.type === 'fashion' && (
                    <motion.div
                      key="fashion"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      {/* Sub-header inside screenshot */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <div>
                          <div className="text-sm font-serif italic text-white tracking-wider">Zamondosh Studio</div>
                          <div className="text-[10px] text-zinc-400 font-mono">Capsule '26 · Tashkent Showroom</div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full border border-white/20 text-zinc-300 text-[10px] font-mono">
                            100% Cotton & Silk
                          </span>
                          <button
                            onClick={() => onOpenReserve('zamondosh')}
                            className="px-3 py-1.5 rounded-lg bg-white text-zinc-950 text-xs font-bold flex items-center gap-1 hover:bg-zinc-200 transition-colors"
                          >
                            <PaperPlaneTilt weight="fill" className="w-3 h-3" />
                            <span>Menejerga yozish</span>
                          </button>
                        </div>
                      </div>

                      {/* Editorial Visual Banner */}
                      <div className="relative rounded-2xl overflow-hidden h-48 sm:h-64 border border-white/10 shadow-2xl">
                        <img
                          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
                          alt="Zamondosh Collection"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                          <div>
                            <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur-md text-white font-mono text-[10px] tracking-wider uppercase">
                              LIMITED RELEASE
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-serif italic text-white mt-1">
                              Toshkent urban minimalizmi
                            </h3>
                            <p className="text-xs text-zinc-300 max-w-md mt-0.5">
                              Tabiiy matolar, uniseks bichim va premium sifat
                            </p>
                          </div>

                          <button
                            onClick={() => onOpenReserve('zamondosh')}
                            className="px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow-lg shrink-0"
                          >
                            <ShoppingBag className="w-4 h-4" />
                            <span>Katalogni ochish</span>
                          </button>
                        </div>
                      </div>

                      {/* 3 Fashion Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">Oversize Hoodie Tashkent</div>
                            <div className="text-[10px] text-zinc-400 mt-0.5">Qalin 380g paxta, ipak bosma</div>
                          </div>
                          <div className="flex items-center justify-between pt-2 mt-3 border-t border-white/[0.04] font-mono text-xs">
                            <span className="text-white font-medium">340 000 сум</span>
                            <div className="flex gap-1 text-[10px]">
                              <span className="px-1 bg-white/10 rounded">M</span>
                              <span className="px-1 bg-white text-black font-bold rounded">L</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">Cotton Pure T-Shirt</div>
                            <div className="text-[10px] text-zinc-400 mt-0.5">100% oliy navli paxta</div>
                          </div>
                          <div className="flex items-center justify-between pt-2 mt-3 border-t border-white/[0.04] font-mono text-xs">
                            <span className="text-white font-medium">160 000 сум</span>
                            <span className="text-[10px] text-emerald-400">Mavjud</span>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">Nomad Canvas Shopper</div>
                            <div className="text-[10px] text-zinc-400 mt-0.5">Mustahkam choklar, ichki cho'ntak</div>
                          </div>
                          <div className="flex items-center justify-between pt-2 mt-3 border-t border-white/[0.04] font-mono text-xs">
                            <span className="text-white font-medium">120 000 сум</span>
                            <span className="text-[10px] text-emerald-400">Mavjud</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Link banner */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
                        <span>Instagram bio uchun 100% optimallashtirilgan</span>
                        <button
                          onClick={() => onOpenReserve('zamondosh')}
                          className="text-white hover:text-zinc-300 transition-colors flex items-center gap-1"
                        >
                          <span>Ushbu dizaynni olish</span>
                          <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* 3. MEDLIFE DENTAL SCREENSHOT */}
                  {currentCase.type === 'medical' && (
                    <motion.div
                      key="medical"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      {/* Sub-header inside screenshot */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                            <FirstAid weight="fill" className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white tracking-tight">MedLife Dental Clinic</div>
                            <div className="text-[10px] text-zinc-400 font-mono">Litsenziya № 4812 · Dr. Rustamov</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400 font-mono text-[11px] font-semibold">
                            09:00 - 20:00 Ochiq
                          </span>
                          <button
                            onClick={() => onOpenReserve('medlife')}
                            className="px-3 py-1.5 rounded-lg bg-sky-500 text-zinc-950 text-xs font-bold flex items-center gap-1 hover:bg-sky-400 transition-colors"
                          >
                            <PhoneCall weight="fill" className="w-3 h-3" />
                            <span>Qabulga yozilish</span>
                          </button>
                        </div>
                      </div>

                      {/* Clinic Visual Banner */}
                      <div className="relative rounded-2xl overflow-hidden h-48 sm:h-64 border border-white/10 shadow-2xl">
                        <img
                          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                          alt="Dental Clinic"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                          <div>
                            <span className="px-2 py-0.5 rounded bg-sky-500/20 border border-sky-500/40 text-sky-300 font-mono text-[10px] uppercase">
                              GERMANIYA USKUNALARI
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                              Og'riqsiz tish davolash va implantatsiya
                            </h3>
                            <p className="text-xs text-zinc-300 max-w-md mt-0.5">
                              14 yillik tajribaga ega shifokorlar va rasmiy 5 yillik kafolat
                            </p>
                          </div>

                          <button
                            onClick={() => onOpenReserve('medlife')}
                            className="px-5 py-2.5 rounded-xl bg-sky-400 text-zinc-950 font-bold text-xs flex items-center gap-2 hover:bg-sky-300 transition-colors shadow-lg shrink-0"
                          >
                            <PhoneCall weight="fill" className="w-4 h-4" />
                            <span>Qabulga yozilish</span>
                          </button>
                        </div>
                      </div>

                      {/* 3 Medical Service Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">3D Rentgen va konsultatsiya</div>
                            <div className="text-[10px] text-zinc-400 mt-0.5">To'liq davolash rejasi tuzib beriladi</div>
                          </div>
                          <div className="flex items-center justify-between pt-2 mt-3 border-t border-white/[0.04] font-mono text-xs">
                            <span className="text-emerald-400 font-semibold">Bepul</span>
                            <span className="text-[10px] text-zinc-400">Birinchi ko'rik</span>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">AirFlow professional tozalash</div>
                            <div className="text-[10px] text-zinc-400 mt-0.5">Tosh va karashlardan tozalash</div>
                          </div>
                          <div className="flex items-center justify-between pt-2 mt-3 border-t border-white/[0.04] font-mono text-xs">
                            <span className="text-white font-semibold">350 000 сум</span>
                            <span className="text-[10px] text-zinc-400">45 daqiqa</span>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">E-Max keramik vinir</div>
                            <div className="text-[10px] text-zinc-400 mt-0.5">Tabiiy tabassum, 10 yil kafolat</div>
                          </div>
                          <div className="flex items-center justify-between pt-2 mt-3 border-t border-white/[0.04] font-mono text-xs">
                            <span className="text-sky-400 font-semibold">1 200 000 сум</span>
                            <span className="text-[10px] text-zinc-400">Nemis keramikasi</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom banner */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
                        <span>Yandex Xarita va 2GIS lokatsiya tugmasi bilan</span>
                        <button
                          onClick={() => onOpenReserve('medlife')}
                          className="text-white hover:text-sky-400 transition-colors flex items-center gap-1"
                        >
                          <span>Ushbu dizaynni olish</span>
                          <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* 4. BARBER SCREENSHOT */}
                  {currentCase.type === 'grooming' && (
                    <motion.div
                      key="grooming"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      {/* Sub-header inside screenshot */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                            <Scissors weight="bold" className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white tracking-tight">Brothers Barbershop</div>
                            <div className="text-[10px] text-zinc-400 font-mono">Gentlemen's Club · Top Barber Jasur</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                            Bugun 2 ta joy bor
                          </span>
                          <button
                            onClick={() => onOpenReserve('barber')}
                            className="px-3 py-1.5 rounded-lg bg-white text-zinc-950 text-xs font-bold flex items-center gap-1 hover:bg-zinc-200 transition-colors"
                          >
                            <PaperPlaneTilt weight="fill" className="w-3 h-3" />
                            <span>Vaqtni band qilish</span>
                          </button>
                        </div>
                      </div>

                      {/* Barber Visual Banner */}
                      <div className="relative rounded-2xl overflow-hidden h-48 sm:h-64 border border-white/10 shadow-2xl">
                        <img
                          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80"
                          alt="Barbershop"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                          <div>
                            <span className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-[10px] uppercase">
                              PREMIUM PARVARISH
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                              Erkaklar soch turmagi va soqol modeli
                            </h3>
                            <p className="text-xs text-zinc-300 max-w-md mt-0.5">
                              O'tkir ustara, issiq sochiq va bepul sifatli qahva
                            </p>
                          </div>

                          <button
                            onClick={() => onOpenReserve('barber')}
                            className="px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow-lg shrink-0"
                          >
                            <PaperPlaneTilt weight="fill" className="w-4 h-4" />
                            <span>Telegramda yozilish</span>
                          </button>
                        </div>
                      </div>

                      {/* 3 Barber Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">Klassik soch turmagi</div>
                            <div className="text-[10px] text-zinc-400 mt-0.5">Bosh yuvish va steyling bilan</div>
                          </div>
                          <div className="flex items-center justify-between pt-2 mt-3 border-t border-white/[0.04] font-mono text-xs">
                            <span className="text-white font-semibold">120 000 сум</span>
                            <span className="text-[10px] text-zinc-400">45 daqiqa</span>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">Soqol tekislash va sochiq</div>
                            <div className="text-[10px] text-zinc-400 mt-0.5">O'tkir ustara va maxsus moy</div>
                          </div>
                          <div className="flex items-center justify-between pt-2 mt-3 border-t border-white/[0.04] font-mono text-xs">
                            <span className="text-white font-semibold">70 000 сум</span>
                            <span className="text-[10px] text-zinc-400">30 daqiqa</span>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-semibold text-white">Ota va o'g'il to'plami</div>
                            <div className="text-[10px] text-zinc-400 mt-0.5">Ikkita to'liq xizmat va ichimliklar</div>
                          </div>
                          <div className="flex items-center justify-between pt-2 mt-3 border-t border-white/[0.04] font-mono text-xs">
                            <span className="text-amber-400 font-semibold">190 000 сум</span>
                            <span className="text-[10px] text-zinc-400">60 daqiqa</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom banner */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
                        <span>Telegram-bot orqali avtomatik navbat</span>
                        <button
                          onClick={() => onOpenReserve('barber')}
                          className="text-white hover:text-amber-400 transition-colors flex items-center gap-1"
                        >
                          <span>Ushbu dizaynni olish</span>
                          <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
