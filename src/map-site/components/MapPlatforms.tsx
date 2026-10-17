import React from 'react';
import {
  Globe,
  NavigationArrow,
  Buildings,
  DeviceMobile,
  Check
} from '@phosphor-icons/react';
import { MapLanguage } from '../types';

interface MapPlatformsProps {
  lang: MapLanguage;
}

export const MapPlatforms: React.FC<MapPlatformsProps> = ({ lang }) => {
  const isUz = lang === 'uz';

  const platforms = [
    {
      id: 'google',
      code: 'NET 01 // GOOGLE MAPS',
      name: 'Google Maps & Search',
      tagColor: 'text-blue-400',
      tagBg: 'bg-blue-500/10 border-blue-500/30',
      icon: Globe,
      audience: isUz ? 'Sayyohlar, chet ellik mehmonlar va Android foydalanuvchilari' : 'Туристы, экспаты и пользователи Android',
      summary: isUz
        ? 'Dunyo bo\'ylab 1 milliarddan ortiq faol foydalanuvchi. Google qidiruvida "yaqin atrofdagi..." so\'rovlarida mahalliy xarita bloki eng yuqorida ochiladi.'
        : 'Более 1 млрд пользователей. При локальных запросах в Google блок с картой, отзывами и контактами выводится выше обычной поисковой выдачи.',
      specs: isUz
        ? [
            'Google Business Profile rasmiy verifikatsiyasi va tasdiq kodi',
            'Chet ellik sayyohlar va biznes mehmonlari oqimini jalb qilish',
            'Lokal SEO orqali qidiruv natijalarida eng yuqori qatorga chiqish',
            '5 yulduzli baholar va mijozlar sharhlarini to\'plash tizimi'
          ]
        : [
            'Официальная верификация профиля Google Business',
            'Охват платежеспособных туристов и иностранных гостей',
            'Вывод в топ-3 локальной выдачи Google (Local 3-Pack)',
            'Сбор отзывов с возможностью официального ответа'
          ]
    },
    {
      id: 'yandex',
      code: 'NET 02 // YANDEX MAPS',
      name: 'Yandex Maps & Navigator',
      tagColor: 'text-amber-400',
      tagBg: 'bg-amber-500/10 border-amber-500/30',
      icon: NavigationArrow,
      audience: isUz ? 'Toshkent va viloyatlardagi barcha haydovchilar va Yandex Go' : 'Водители, навигатор и клиенты такси Яндекс Go',
      summary: isUz
        ? 'O\'zbekistondagi eng ommabop xarita. Yandex Go taksi haydovchilari mijozlarni to\'g\'ri eshigingiz oldiga olib kelishi uchun rasmiy manzil biriktiriladi.'
        : 'Ключевой навигатор в городах Узбекистана. Исключает путаницу водителей такси Яндекс Go, приводя клиентов точно к нужной двери.',
      specs: isUz
        ? [
            'Yandex Biznes rasmiy profili va tasdiqlangan ko\'k belgi',
            'Taksi va avtomobil navigatori uchun aniq kirish eshigi yo\'li',
            'Mahsulotlar katalogi, xizmatlar narxi va dolzarb ish tartibi',
            'Tashkilot logotipi, fasad fotosuratlari va to\'g\'ridan-to\'g\'ri havola'
          ]
        : [
            'Синяя галочка подтвержденной организации в Яндекс Справочнике',
            'Точная точка высадки пассажиров Яндекс Go и проезда авто',
            'Меню, прайс-лист на услуги и актуальный график работы',
            'Логотип бренда и прямые кликабельные контакты'
          ]
    },
    {
      id: '2gis',
      code: 'NET 03 // 2GIS SHAHAR',
      name: '2GIS Xaritasi va Ma\'lumotnomasi',
      tagColor: 'text-emerald-400',
      tagBg: 'bg-emerald-500/10 border-emerald-500/30',
      icon: Buildings,
      audience: isUz ? 'Piyoda xaridorlar, ofis xodimlari va offline foydalanuvchilar' : 'Покупатели, жители районов и пользователи без интернета',
      summary: isUz
        ? 'Eng batafsil shahar ma\'lumotnomasi. Bino ichidagi qavat, podyezd, xona raqami va to\'liq tovarlar katalogi internetsiz ham ishlaydi.'
        : 'Детальнейшая карта городов Узбекистана. Указывает конкретный вход в здание, этаж, номер офиса и прайс-лист даже без доступа к интернету.',
      specs: isUz
        ? [
            'Binoning aniq qavati, yo\'lak va kirish podyezdi belgilanishi',
            'Internetsiz (offline) rejimda ham xaritaning to\'liq ishlashi',
            'Kengaytirilgan tovarlar va xizmatlar ro\'yxati (prays-list)',
            'Toshkent va viloyatlar ma\'lumotnomasida doimiy mavjudlik'
          ]
        : [
            'Точный этаж, номер помещения и правильное крыло здания',
            'Полная работоспособность карты без подключения к интернету',
            'Размещение подробного прайс-листа и описания позиций',
            'Высокая конверсия из просмотра карты в реальный визит'
          ]
    },
    {
      id: 'apple',
      code: 'NET 04 // APPLE & WAZE',
      name: 'Apple Maps va Siri',
      tagColor: 'text-purple-400',
      tagBg: 'bg-purple-500/10 border-purple-500/30',
      icon: DeviceMobile,
      audience: isUz ? 'iPhone, iPad va Apple CarPlay avtomobil egalari' : 'Владельцы техники Apple и Apple CarPlay в авто',
      summary: isUz
        ? 'iPhone foydalanuvchilari qidiruv satri yoki Siri orqali manzil qidirganda sizning biznesingiz Apple Maps orqali ochiladi.'
        : 'Штатный поиск Spotlight на устройствах Apple, голосовой ассистент Siri и интеграция с навигацией на экранах CarPlay.',
      specs: isUz
        ? [
            'Apple Maps tizimida rasmiy nuqta va joylashuv',
            'Siri ovozli qidiruv tizimiga to\'g\'ridan-to\'g\'ri ulanish',
            'Avtomobildagi Apple CarPlay ekranlarida marshrut ochilishi',
            'Premium iPhone foydalanuvchilari auditoriyasini qamrab olish'
          ]
        : [
            'Официальная карточка в навигационной базе Apple',
            'Поддержка голосовых подсказок ассистента Siri',
            'Навигация на бортовых экранах автомобилей с CarPlay',
            'Охват платежеспособной аудитории пользователей iOS'
          ]
    }
  ];

  return (
    <section id="platforms" className="py-20 border-b border-[#1b2330] bg-[#080b0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="map-mono text-[11px] text-[#f59e0b] uppercase tracking-wider mb-2">
            03 // NAVIGATION NETWORKS
          </div>
          <h2 className="map-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {isUz
              ? '4 ta asosiy navigatsiya tarmog\'ining to\'liq tahlili.'
              : 'Архитектура 4 главных навигационных сервисов.'}
          </h2>
          <p className="text-xs sm:text-sm text-[#8b949e] mt-2">
            {isUz
              ? 'Bitta xarita bilan cheklanmang. Xaridorlar turli ilovalardan foydalanishadi, shuning uchun barcha platformalarda bo\'lishingiz shart.'
              : 'Клиенты используют разные приложения. Мы обеспечиваем синхронизированное присутствие во всех ключевых экосистемах.'}
          </p>
        </div>

        {/* 4 Quadrant Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1b2330] p-px border border-[#1b2330]">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="bg-[#0e1218] p-6 sm:p-8 flex flex-col justify-between text-left space-y-6 hover:bg-[#121720] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1b2330]">
                    <span className="map-mono text-[10px] text-[#8b949e] uppercase font-semibold">
                      {p.code}
                    </span>
                    <span className={`map-mono text-[10px] px-2 py-0.5 border ${p.tagBg} ${p.tagColor}`}>
                      ACTIVE SYNC
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#1b2330] text-white flex items-center justify-center shrink-0">
                      <Icon weight="bold" className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">{p.name}</h3>
                      <div className="map-mono text-[11px] text-[#8b949e]">{p.audience}</div>
                    </div>
                  </div>

                  <p className="text-xs text-[#8b949e] leading-relaxed mb-5">
                    {p.summary}
                  </p>

                  <ul className="space-y-2 pt-4 border-t border-[#1b2330]">
                    {p.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-xs text-[#f0f3f6]">
                        <Check weight="bold" className="w-3.5 h-3.5 text-[#f59e0b] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#1b2330] map-mono text-[11px] text-[#8b949e] flex items-center justify-between">
                  <span>MODERATION: AUTOMATED</span>
                  <span className="text-[#f59e0b]">VERIFIED // MAPUZ</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
