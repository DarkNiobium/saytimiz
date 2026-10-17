import React, { useState } from 'react';
import {
  PaperPlaneTilt,
  MapPin,
  Star,
  CheckCircle,
  Clock,
  PhoneCall,
  Buildings,
  NavigationArrow
} from '@phosphor-icons/react';
import { MapLanguage } from '../types';

interface MapHeroProps {
  lang: MapLanguage;
}

export const MapHero: React.FC<MapHeroProps> = ({ lang }) => {
  const isUz = lang === 'uz';

  const previewCases = [
    {
      id: 'food',
      category: isUz ? 'Kafe va taomlar' : 'Кафе и доставка',
      name: isUz ? 'Osh Markazi Express' : 'Центр Плова & Шашлыки',
      address: isUz ? 'Toshkent sh., Navoiy ko\'chasi 24' : 'г. Ташкент, ул. Навои 24',
      status: isUz ? 'Ochiq · 23:00 gacha' : 'Открыто до 23:00',
      rating: '4.9',
      reviews: isUz ? '320 ta fikr' : '320 отзывов',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
      tag: isUz ? 'HALOL / 30 MIN' : 'ХАЛЯЛЬ / 30 МИН'
    },
    {
      id: 'medical',
      category: isUz ? 'Stomatologiya' : 'Стоматология',
      name: isUz ? 'Nur Dental Clinic' : 'Стоматология Nur Dental',
      address: isUz ? 'Toshkent sh., Chilonzor 9-mavze' : 'г. Ташкент, Чиланзар 9',
      status: isUz ? 'Ochiq · 20:00 gacha' : 'Открыто до 20:00',
      rating: '5.0',
      reviews: isUz ? '180 ta fikr' : '180 отзывов',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      tag: isUz ? 'LITSENZIYA № 6041' : 'ЛИЦЕНЗИЯ № 6041'
    },
    {
      id: 'retail',
      category: isUz ? 'Do\'kon / Shourum' : 'Магазин одежды',
      name: isUz ? 'Zamondosh Boutique' : 'Бутик Zamondosh',
      address: isUz ? 'Toshkent sh., Amir Temur shox ko\'chasi' : 'г. Ташкент, пр. Амира Темура',
      status: isUz ? 'Ochiq · 21:00 gacha' : 'Открыто до 21:00',
      rating: '4.8',
      reviews: isUz ? '95 ta fikr' : '95 отзывов',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      tag: isUz ? 'PREMIUM MATOLAR' : 'ПРЕМИУМ ШЕЛК'
    },
    {
      id: 'auto',
      category: isUz ? 'Avtoservis' : 'Автосервис',
      name: isUz ? 'Master Car Service' : 'Автосервис Master Car',
      address: isUz ? 'Toshkent sh., Yangi Sergeli ko\'chasi' : 'г. Ташкент, Янги Сергели',
      status: isUz ? 'Ochiq · 22:00 gacha' : 'Открыто до 22:00',
      rating: '4.9',
      reviews: isUz ? '210 ta fikr' : '210 отзывов',
      image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=800&q=80',
      tag: isUz ? 'KAFOLATLI XIZMAT' : 'ГАРАНТИЯ КАЧЕСТВА'
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const current = previewCases[activeIdx] || previewCases[0];

  return (
    <section className="relative pt-12 md:pt-16 pb-16 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <MapPin weight="fill" className="w-4 h-4 text-emerald-600" />
              <span>Google Maps · Yandex Maps · 2GIS xizmati</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              {isUz ? (
                <>
                  Biznesingizni xaritalarga{' '}
                  <span className="text-emerald-600">24 soatda</span> rasmiy joylashtiramiz.
                </>
              ) : (
                <>
                  Разместим ваш бизнес на картах{' '}
                  <span className="text-emerald-600">за 24 часа</span> под ключ.
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              {isUz
                ? 'Yangi mijozlar oqimi, taksilar adashmasdan to\'g\'ri eshigingiz oldiga kelishi va qidiruvda 1-o\'rinlar. Barcha shaxsiy kabinetlar va egalik huquqi sizga to\'liq topshiriladi.'
                : 'Поток гостей из поиска, точный заезд для такси Яндекс Go и подтвержденная синяя галочка. Передаем права владельца на ваш личный номер.'}
            </p>

            {/* 3 Quick Deliverable Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
                  24h
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Tezkor ishga tushirish</div>
                  <div className="text-[11px] text-slate-500">24-48 soatda tayyor</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0">
                  3-in-1
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">3 ta asosiy xarita</div>
                  <div className="text-[11px] text-slate-500">Google + Yandex + 2GIS</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0">
                  100%
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Egalik huquqi</div>
                  <div className="text-[11px] text-slate-500">Sizning nomingizga</div>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <a
                href="https://t.me/mapuz2"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <PaperPlaneTilt weight="fill" className="w-4 h-4" />
                <span>{isUz ? 'Arizani Telegramda berish (@mapuz2)' : 'Подать заявку в Telegram (@mapuz2)'}</span>
              </a>

              <a
                href="#pricing"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 flex items-center justify-center transition-colors shadow-sm"
              >
                {isUz ? 'Tariflar va narxlar' : 'Тарифы и стоимость'}
              </a>
            </div>
          </div>

          {/* Right Column: Clean Light Interactive Map Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden text-left">
              {/* Category selector pills */}
              <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-1 overflow-x-auto">
                {previewCases.map((c, idx) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      activeIdx === idx
                        ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {c.category}
                  </button>
                ))}
              </div>

              {/* Photo Banner */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur text-slate-900 font-bold text-[11px] shadow">
                    {current.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                  <div>
                    <h3 className="text-xl font-bold leading-tight">{current.name}</h3>
                    <p className="text-xs text-slate-200 mt-0.5">{current.address}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-400 text-slate-950 px-2 py-0.5 rounded-md font-bold text-xs">
                    <Star weight="fill" className="w-3.5 h-3.5" />
                    <span>{current.rating}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4">
                {/* 3 Map Status Pills */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-blue-50 border border-blue-100">
                    <div className="text-[10px] font-bold text-blue-700">Google Maps</div>
                    <div className="text-xs font-semibold text-blue-900 flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle weight="fill" className="w-3 h-3 text-blue-600" />
                      <span>Tasdiqlandi</span>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-amber-50 border border-amber-100">
                    <div className="text-[10px] font-bold text-amber-700">Yandex Maps</div>
                    <div className="text-xs font-semibold text-amber-900 flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle weight="fill" className="w-3 h-3 text-amber-600" />
                      <span>Yandex Go</span>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100">
                    <div className="text-[10px] font-bold text-emerald-700">2GIS Xarita</div>
                    <div className="text-xs font-semibold text-emerald-900 flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle weight="fill" className="w-3 h-3 text-emerald-600" />
                      <span>Podyezd bor</span>
                    </div>
                  </div>
                </div>

                {/* Info rows */}
                <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span>{current.status}</span>
                    </div>
                    <span className="text-slate-500">{current.reviews}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-700">
                      <NavigationArrow className="w-4 h-4 text-blue-600" />
                      <span>Taksi eshik oldiga keladi</span>
                    </div>
                    <span className="text-emerald-700 font-semibold">Aniq marshrut</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Buildings className="w-4 h-4 text-slate-600" />
                      <span>Bino ichidagi qavat va xona</span>
                    </div>
                    <span className="text-slate-700">1-qavat, bosh kirish</span>
                  </div>
                </div>

                {/* Direct Action buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  <a
                    href="https://t.me/mapuz2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5" />
                    <span>Shunday qo'shish</span>
                  </a>
                  <a
                    href="tel:+998901234567"
                    onClick={(e) => e.preventDefault()}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Qo'ng'iroq qilish</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
