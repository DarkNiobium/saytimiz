import React from 'react';
import { motion } from 'motion/react';
import {
  PaperPlaneTilt,
  MapPin,
  Star,
  CheckCircle,
  Lightning,
  ShieldCheck,
  NavigationArrow
} from '@phosphor-icons/react';
import { MapLanguage } from '../types';
import { AnimatedUnderline } from '../../components/AnimatedUnderline';

interface MapHeroProps {
  lang: MapLanguage;
  onSelectPlan: (planId: string) => void;
}

export const MapHero: React.FC<MapHeroProps> = ({ lang, onSelectPlan }) => {
  const isUz = lang === 'uz';

  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden radial-ambient">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-emerald-500/[0.05] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative text-center flex flex-col items-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[11px] font-mono tracking-wider uppercase text-zinc-300 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>MAPUZ · Google Maps • Yandex Maps • 2GIS</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] text-white max-w-4xl leading-[1.08] mb-6"
        >
          {isUz ? (
            <>
              Biznesingizni xaritalarga{' '}
              <AnimatedUnderline color="#10b981">
                24 soatda
              </AnimatedUnderline>{' '}
              rasmiy joylashtiramiz.
            </>
          ) : (
            <>
              Разместим ваш бизнес на картах{' '}
              <AnimatedUnderline color="#10b981">
                за 24 часа
              </AnimatedUnderline>{' '}
              под ключ.
            </>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mb-10 font-normal"
        >
          {isUz
            ? 'Google Maps, Yandex Maps, Yandex Navigator va 2GIS tizimlarida rasmiy profil. Aniq geolokatsiya, fotosuratlar, qidiruvda 1-o\'rinlar va taksilar to\'g\'ri eshigingiz oldiga kelishi.'
            : 'Google Maps, Яндекс Карты, Навигатор и 2GIS. Точная геолокация входной группы, привязка к Яндекс Go, первые места в поиске и защита от блокировок.'}
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="https://t.me/mapuz2"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-6 pr-3 py-3 rounded-full bg-emerald-500 text-zinc-950 font-bold text-xs tracking-tight hover:bg-emerald-400 transition-all active:scale-[0.98] flex items-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          >
            <span>{isUz ? 'Telegramda ariza berish (@mapuz2)' : 'Подать заявку в Telegram (@mapuz2)'}</span>
            <span className="w-6 h-6 rounded-full bg-zinc-950 text-white flex items-center justify-center">
              <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5" />
            </span>
          </a>

          <a
            href="#calculator"
            className="px-5 py-3 rounded-full bg-white/[0.04] border border-white/10 text-white font-medium text-xs hover:bg-white/10 transition-colors"
          >
            {isUz ? 'Xizmatlar kalkulyatori' : 'Калькулятор стоимости'}
          </a>
        </motion.div>

        {/* Interactive Geolocation Radar Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="w-full max-w-4xl"
        >
          <div className="p-2 sm:p-3 rounded-[2.5rem] bezel-shell">
            <div className="rounded-[calc(2.5rem-0.625rem)] bezel-core overflow-hidden shadow-2xl border border-white/10 text-left relative bg-[#09090c]">
              {/* Browser chrome header */}
              <div className="px-5 py-3.5 bg-[#0e0e12] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>

                <div className="flex-1 max-w-sm mx-4 px-3.5 py-1 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center gap-2 font-mono text-xs text-zinc-300">
                  <NavigationArrow weight="fill" className="w-3 h-3 text-emerald-400" />
                  <span>map.saytimiz.uz · MAPUZ Live Radar</span>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                  <Lightning weight="fill" className="w-3 h-3" />
                  <span>3-in-1 Sync</span>
                </div>
              </div>

              {/* Simulated Map Viewport */}
              <div className="p-6 sm:p-8 relative min-h-[380px] flex flex-col justify-between overflow-hidden">
                {/* Background grid pattern simulating map tiles */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
                
                {/* Animated Map radar center point */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none">
                  <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping opacity-30" />
                  <div className="absolute inset-8 rounded-full border border-emerald-500/25" />
                  <div className="absolute inset-20 rounded-full border border-emerald-500/30" />
                </div>

                {/* Top badges: 3 Major Map Providers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-10">
                  <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs font-mono">
                        G
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Google Maps</div>
                        <div className="text-[10px] text-zinc-400 font-mono">Business Profile</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Tasdiqlangan
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs font-mono">
                        Y
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Yandex Maps</div>
                        <div className="text-[10px] text-zinc-400 font-mono">Yandex Go & Nav</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Ko'k belgi
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs font-mono">
                        2G
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">2GIS Xaritasi</div>
                        <div className="text-[10px] text-zinc-400 font-mono">Podyezd & Qavat</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Prays-list
                    </span>
                  </div>
                </div>

                {/* Central Focus Card: How a business appears on the map */}
                <div className="my-8 max-w-lg mx-auto w-full p-4 rounded-2xl bg-black/80 border border-emerald-500/30 backdrop-blur-2xl shadow-[0_0_40px_rgba(16,185,129,0.15)] relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500 text-zinc-950 flex items-center justify-center font-bold">
                        <MapPin weight="fill" className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-white tracking-tight">Sizning Biznesingiz</h4>
                          <ShieldCheck weight="fill" className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div className="text-[11px] text-zinc-400">Toshkent sh., Markaziy ko'cha 12</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 font-mono text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                      <Star weight="fill" className="w-3.5 h-3.5" />
                      <span>5.0 (140+)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-zinc-300">
                    <div className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle weight="fill" className="w-3.5 h-3.5" />
                      <span>Ochiq: 23:00 gacha</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-400">
                      <span>Marshrut: 0.8 km</span>
                    </div>
                    <div className="text-right text-emerald-400">
                      <span>Yandex Go</span>
                    </div>
                  </div>
                </div>

                {/* Bottom stats banner */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-400 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>O'zbekiston bo'ylab 180+ tashkilot xaritalarga muvaffaqiyatli qo'shildi</span>
                  </div>

                  <button
                    onClick={() => onSelectPlan('trio')}
                    className="text-white hover:text-emerald-400 font-semibold transition-colors flex items-center gap-1"
                  >
                    <span>Standart Trio paketini ko'rish</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
