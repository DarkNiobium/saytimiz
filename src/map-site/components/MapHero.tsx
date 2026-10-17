import React from 'react';
import {
  PaperPlaneTilt,
  MapPin,
  Star,
  CheckCircle,
  PhoneCall,
  Clock,
  ArrowRight
} from '@phosphor-icons/react';
import { MapLanguage } from '../types';

interface MapHeroProps {
  lang: MapLanguage;
}

export const MapHero: React.FC<MapHeroProps> = ({ lang }) => {
  const isUz = lang === 'uz';

  return (
    <section className="pt-12 sm:pt-16 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Punchy Text and CTA */}
          <div className="lg:col-span-7 text-left space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <MapPin weight="fill" className="w-3.5 h-3.5 text-emerald-600" />
              <span>Google Maps • Yandex Maps • 2GIS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              {isUz ? (
                <>
                  Biznesingizni xaritalarga{' '}
                  <span className="text-emerald-600">24 soatda</span> joylashtiramiz.
                </>
              ) : (
                <>
                  Разместим ваш бизнес на картах{' '}
                  <span className="text-emerald-600">за 24 часа</span>.
                </>
              )}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed max-w-lg font-normal">
              {isUz
                ? 'Taksilar adashmasdan to\'g\'ri eshigingizga keladi, xaridorlar qidiruvda 1-o\'rinda topadi. Barcha huquqlar to\'liq sizning nomingizga o\'tadi.'
                : 'Такси привозит клиентов ровно к вашей двери, а новые гости находят вас в поиске на первом месте. Полная передача прав владельца.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://t.me/mapuz2"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-sm active:scale-95"
              >
                <PaperPlaneTilt weight="fill" className="w-4 h-4" />
                <span>{isUz ? 'Telegramda boshlash (@mapuz2)' : 'Начать в Telegram (@mapuz2)'}</span>
              </a>

              <a
                href="#pricing"
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 flex items-center gap-1.5 transition-colors"
              >
                <span>{isUz ? 'Tariflar' : 'Тарифы'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Clean, Compact Visual Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-5 text-left space-y-4 max-w-sm mx-auto">
              {/* Header with 3 map pills */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{isUz ? 'Rasmiy ulanish' : 'Подключение'}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                  <span>Google</span> · <span>Yandex</span> · <span>2GIS</span>
                </div>
              </div>

              {/* Photo & Venue info */}
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=200&q=80"
                  alt="Kafe"
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1 text-slate-900 font-bold text-sm">
                    <span className="truncate">Osh Markazi Express</span>
                    <CheckCircle weight="fill" className="w-4 h-4 text-blue-600 shrink-0" />
                  </div>
                  <div className="text-xs text-slate-500 truncate mt-0.5">Toshkent sh., Navoiy ko'chasi 24</div>
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mt-1">
                    <Star weight="fill" className="w-3.5 h-3.5" />
                    <span>5.0 (Google & Yandex)</span>
                  </div>
                </div>
              </div>

              {/* Status checklist */}
              <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Ochiq: 23:00 gacha</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Taksi to'g'ri kirish eshigiga keladi</span>
                </div>
              </div>

              {/* Quick direct button */}
              <a
                href="https://t.me/mapuz2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{isUz ? 'Ushbu kartochkani band qilish' : 'Занять карточку заведения'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
