import React, { useState } from 'react';
import {
  PaperPlaneTilt,
  Crosshair,
  MapPin,
  CheckCircle,
  Buildings,
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

  // Demo queries that live-update the cartographic preview
  const demoQueries = [
    {
      id: 'food',
      label: isUz ? 'Kafe & Taomlar' : 'Кафе и еда',
      query: isUz ? '"Eng yaqin milliy taomlar"' : '"Плов рядом со мной"',
      title: isUz ? 'Osh Markazi Express' : 'Центр Плова Express',
      address: isUz ? 'Toshkent sh., Navoiy ko\'chasi 24' : 'г. Ташкент, ул. Навои 24',
      status: isUz ? 'Ochiq · 23:00 gacha' : 'Открыто до 23:00',
      eta: '12 min (Yandex Go)',
      reviews: '4.9 ★ (340+)'
    },
    {
      id: 'medical',
      label: isUz ? 'Stomatologiya' : 'Стоматология',
      query: isUz ? '"Stomatologiya kechayu-kunduz"' : '"Круглосуточная стоматология"',
      title: isUz ? 'Nur Dental Clinic' : 'Клиника Nur Dental',
      address: isUz ? 'Toshkent sh., Chilonzor 9-mavze' : 'г. Ташкент, Чиланзар 9',
      status: isUz ? '24/7 Ochiq' : 'Круглосуточно',
      eta: '8 min (Google Maps)',
      reviews: '5.0 ★ (180+)'
    },
    {
      id: 'retail',
      label: isUz ? 'Kiyim / Shourum' : 'Магазин одежды',
      query: isUz ? '"Ayollar liboslari shourumi"' : '"Шоурум женской одежды"',
      title: isUz ? 'Zamondosh Boutique' : 'Бутик Zamondosh',
      address: isUz ? 'Toshkent sh., Amir Temur shox ko\'chasi' : 'г. Ташкент, пр. Амира Темура',
      status: isUz ? 'Ochiq · 20:00 gacha' : 'Открыто до 20:00',
      eta: '15 min (2GIS)',
      reviews: '4.8 ★ (95+)'
    },
    {
      id: 'auto',
      label: isUz ? 'Avtoservis' : 'Автосервис',
      query: isUz ? '"Moy almashtirish va diagnostika"' : '"Замена масла и шиномонтаж"',
      title: isUz ? 'Master Car Service' : 'Автосервис Master Car',
      address: isUz ? 'Toshkent sh., Yangi Sergeli ko\'chasi' : 'г. Ташкент, Янги Сергели',
      status: isUz ? 'Ochiq · 21:00 gacha' : 'Открыто до 21:00',
      eta: '6 min (Yandex Go)',
      reviews: '4.9 ★ (210+)'
    }
  ];

  const [activeQueryIdx, setActiveQueryIdx] = useState(0);
  const activeDemo = demoQueries[activeQueryIdx] || demoQueries[0];

  return (
    <section id="diagram" className="relative pt-12 md:pt-20 pb-20 border-b border-[#1b2330] overflow-hidden">
      {/* 12-column hairline background rails */}
      <div className="map-rails" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top orientation header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-[#1b2330]">
          <div className="flex items-center gap-2 map-mono text-xs text-[#8b949e]">
            <span className="w-2 h-2 bg-[#f59e0b] inline-block" />
            <span className="text-white uppercase font-medium">MAPUZ GEOLOCATION BUREAU</span>
            <span className="text-[#1b2330]">/</span>
            <span>GOOGLE · YANDEX · 2GIS</span>
          </div>

          <div className="map-mono text-xs text-[#8b949e] flex items-center gap-4">
            <span>RES-TIME: 24-48H</span>
            <span className="text-[#1b2330]">|</span>
            <span>VERIFIED ACCESS</span>
          </div>
        </div>

        {/* Macrostructure 19: Asymmetric Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (5 cols): Declarative proposition */}
          <div className="lg:col-span-5 space-y-6">
            <h1 className="map-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
              {isUz ? (
                <>
                  Siz xaritada birinchi o'rinda. <br />
                  <span className="text-[#f59e0b]">Raqobatchi emas.</span>
                </>
              ) : (
                <>
                  Вы на первом месте в поиске. <br />
                  <span className="text-[#f59e0b]">Не конкурент.</span>
                </>
              )}
            </h1>

            <p className="text-sm text-[#8b949e] leading-relaxed">
              {isUz
                ? 'Toshkent va viloyatlardagi har qanday biznesni Google Maps, Yandex Maps va 2GIS xaritalariga rasmiy ro\'yxatdan o\'tkazamiz. Taksi haydovchilari to\'g\'ri eshigingiz oldiga keladi, xaridorlar sizni darhol topadi.'
                : 'Официальное добавление и верификация бизнеса на Google Maps, Яндекс Картах и 2GIS за 24 часа. Точные координаты входа для такси, вывод в топ выдачи и защита от удаления.'}
            </p>

            {/* Honest Technical Specifications */}
            <div className="grid grid-cols-3 gap-px bg-[#1b2330] p-px border border-[#1b2330] map-mono">
              <div className="bg-[#0e1218] p-3 text-left">
                <div className="text-[10px] text-[#8b949e] uppercase">Moderatsiya</div>
                <div className="text-base font-bold text-white mt-0.5">24-48h</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">Kafolatlangan</div>
              </div>
              <div className="bg-[#0e1218] p-3 text-left">
                <div className="text-[10px] text-[#8b949e] uppercase">Sinxronizatsiya</div>
                <div className="text-base font-bold text-white mt-0.5">3-in-1</div>
                <div className="text-[10px] text-[#8b949e] mt-0.5">Google+Yandex+2GIS</div>
              </div>
              <div className="bg-[#0e1218] p-3 text-left">
                <div className="text-[10px] text-[#8b949e] uppercase">Egalik</div>
                <div className="text-base font-bold text-white mt-0.5">100%</div>
                <div className="text-[10px] text-emerald-400 mt-0.5">Sizning nomingizga</div>
              </div>
            </div>

            {/* Direct Telegram Action */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="https://t.me/mapuz2"
                target="_blank"
                rel="noopener noreferrer"
                className="map-mono text-xs px-6 py-3 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <PaperPlaneTilt weight="fill" className="w-4 h-4" />
                <span>{isUz ? 'Arizani Telegramda berish (@mapuz2)' : 'Подать заявку в Telegram (@mapuz2)'}</span>
              </a>

              <a
                href="#calculator"
                className="map-mono text-xs px-4 py-3 bg-[#0e1218] hover:bg-[#141a22] text-[#f0f3f6] border border-[#1b2330] flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>{isUz ? 'Kalkulyator' : 'Калькулятор'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column (7 cols): The Spatial Map Diagram Workbench */}
          <div className="lg:col-span-7">
            <div className="map-panel p-5 space-y-4">
              {/* Telemetry bar above the diagram */}
              <div className="flex items-center justify-between pb-3 border-b border-[#1b2330] map-mono text-xs">
                <div className="flex items-center gap-2 text-white">
                  <Crosshair className="w-4 h-4 text-[#f59e0b]" />
                  <span>SPATIAL WORKBENCH // TASHKENT GRID</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#8b949e]">
                  <span>NODE: ACTIVE</span>
                  <span className="w-1.5 h-1.5 bg-emerald-400 inline-block" />
                </div>
              </div>

              {/* Interactive Industry Tabs */}
              <div className="flex flex-wrap gap-1.5">
                {demoQueries.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveQueryIdx(idx)}
                    className={`map-mono text-[11px] px-3 py-1.5 border transition-all ${
                      activeQueryIdx === idx
                        ? 'border-[#f59e0b] bg-[#f59e0b]/10 text-white font-semibold'
                        : 'border-[#1b2330] bg-[#080b0f] text-[#8b949e] hover:text-white hover:border-[#2e3848]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* The Actual Spatial Map Canvas */}
              <div className="relative bg-[#06080b] border border-[#1b2330] p-6 min-h-[300px] flex flex-col justify-between overflow-hidden">
                {/* Visual coordinate grid lines */}
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#1b2330_1px,transparent_1px),linear-gradient(to_bottom,#1b2330_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* 3 Intersecting Map Networks (Google, Yandex, 2GIS) */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="p-3 bg-[#0e1218]/90 border border-blue-500/30 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <span className="map-mono text-[10px] text-blue-400 uppercase font-bold">Google Maps</span>
                      <span className="text-[10px] text-emerald-400 map-mono">CID OK</span>
                    </div>
                    <div className="text-xs font-semibold text-white truncate">{activeDemo.title}</div>
                    <div className="text-[10px] text-[#8b949e] mt-1 map-mono">Qidiruvda 1-o'rin</div>
                  </div>

                  <div className="p-3 bg-[#0e1218]/90 border border-amber-500/30 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <span className="map-mono text-[10px] text-amber-400 uppercase font-bold">Yandex Maps</span>
                      <span className="text-[10px] text-emerald-400 map-mono">Yandex Go</span>
                    </div>
                    <div className="text-xs font-semibold text-white truncate">{activeDemo.title}</div>
                    <div className="text-[10px] text-[#8b949e] mt-1 map-mono">{activeDemo.eta}</div>
                  </div>

                  <div className="p-3 bg-[#0e1218]/90 border border-emerald-500/30 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <span className="map-mono text-[10px] text-emerald-400 uppercase font-bold">2GIS Xaritasi</span>
                      <span className="text-[10px] text-emerald-400 map-mono">Offline</span>
                    </div>
                    <div className="text-xs font-semibold text-white truncate">{activeDemo.title}</div>
                    <div className="text-[10px] text-[#8b949e] mt-1 map-mono">Podyezd & Qavat</div>
                  </div>
                </div>

                {/* Central Verified Location Card */}
                <div className="relative z-10 my-4 p-4 bg-[#0e1218] border border-[#f59e0b]/40 text-left">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 bg-[#f59e0b] text-black flex items-center justify-center font-bold shrink-0 mt-0.5">
                        <MapPin weight="fill" className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-bold text-white tracking-tight">{activeDemo.title}</span>
                          <CheckCircle weight="fill" className="w-3.5 h-3.5 text-blue-400" />
                        </div>
                        <div className="text-xs text-[#8b949e] mt-0.5">{activeDemo.address}</div>
                      </div>
                    </div>
                    <span className="map-mono text-xs text-[#f59e0b] font-semibold bg-[#f59e0b]/10 px-2 py-0.5 border border-[#f59e0b]/20 shrink-0">
                      {activeDemo.reviews}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-[#1b2330] map-mono text-[11px] text-[#8b949e]">
                    <div className="flex items-center gap-1 text-emerald-400">
                      <Clock className="w-3 h-3" />
                      <span>{activeDemo.status}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Buildings className="w-3 h-3" />
                      <span>1-qavat, 2-kirish</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <PhoneCall className="w-3 h-3" />
                      <span>Qo'ng'iroq faol</span>
                    </div>
                    <div className="text-right text-[#f0f3f6]">
                      <span>{activeDemo.eta}</span>
                    </div>
                  </div>
                </div>

                {/* Query simulation feedback line */}
                <div className="relative z-10 flex items-center justify-between map-mono text-[11px] text-[#8b949e] pt-2 border-t border-[#1b2330]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#f59e0b]">QUERY:</span>
                    <span className="text-white">{activeDemo.query}</span>
                  </div>
                  <span className="text-emerald-400">RESULT: TOP 1 RANK</span>
                </div>
              </div>

              {/* Spatial caption */}
              <div className="flex items-center justify-between map-mono text-xs text-[#8b949e] pt-1">
                <span>3 platforma sinxron ravishda yagona profilga bog'lanadi</span>
                <span className="text-white">MAPUZ / 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
