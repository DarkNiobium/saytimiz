import React from 'react';
import { MapPin, ShieldCheck, QrCode } from '@phosphor-icons/react';
import { MapLanguage } from '../types';

interface MapWorkflowProps {
  lang: MapLanguage;
}

export const MapWorkflow: React.FC<MapWorkflowProps> = ({ lang }) => {
  const isUz = lang === 'uz';

  const steps = [
    {
      num: '01',
      code: 'PHASE 01 // GEOLOCATION',
      icon: MapPin,
      title: isUz ? 'Geolokatsiya va fotometriya' : 'Сбор координат и фотографий',
      desc: isUz
        ? 'Tashkilotning aniq GPS koordinatalari, bino fasadi, kirish eshigi, mijozlar podyezdi va ish tartibi belgilanadi. Taksi adashmasligi uchun to\'g\'ri yo\'l chizig\'i biriktiriladi.'
        : 'Фиксируем точные GPS-координаты входной группы, подъезда для такси, парковки, вывески и интерьера. Исключаем ошибки заезда со дворов.'
    },
    {
      num: '02',
      code: 'PHASE 02 // VERIFICATION',
      icon: ShieldCheck,
      title: isUz ? 'Rasmiy moderatsiya va tasdiq' : 'Официальная модерация и синяя галочка',
      desc: isUz
        ? 'Google Business Profile, Yandex Biznes va 2GIS ma\'lumotnomasiga arizalar kiritiladi. Robotlar va xatoliklar filtri aylanib o\'tilib, 24-48 soatda rasmiy tasdiqlanadi.'
        : 'Создаем профили в Google Business, Яндекс Справочнике и 2GIS. Проходим верификацию без зависания на проверке и защищаем карточку от удаления.'
    },
    {
      num: '03',
      code: 'PHASE 03 // HANDOVER & TRAFFIC',
      icon: QrCode,
      title: isUz ? 'Egalik huquqini topshirish va QR-kod' : 'Передача прав и печатный QR-код',
      desc: isUz
        ? 'Barcha kabinetlar to\'liq sizning shaxsiy emailingiz va telefoningizga o\'tkaziladi. Stollar va kassa uchun "Bizni xaritada baholang" vektorli bosma QR-kod bepul beriladi.'
        : 'Все права владельца привязываются к вашему личному номеру и почте. Передаем готовый векторный макет стойки с QR-кодом для сбора отзывов гостей.'
    }
  ];

  return (
    <section id="workflow" className="py-20 border-b border-[#1b2330] bg-[#080b0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="map-mono text-[11px] text-[#f59e0b] uppercase tracking-wider mb-2">
            02 // VERIFICATION PIPELINE
          </div>
          <h2 className="map-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {isUz
              ? 'Xaritalarga joylashtirishning 3 bosqichli tartibi.'
              : 'Процесс подключения бизнеса в 3 четких шага.'}
          </h2>
          <p className="text-xs sm:text-sm text-[#8b949e] mt-2">
            {isUz
              ? 'Hech qanday ortiqcha byurokratiya yo\'q. Ma\'lumotlarni Telegramga yuborasiz, qolganini o\'zimiz bajaramiz.'
              : 'Никакой лишней бюрократии. Вы присылаете базовые данные в Telegram, мы сдаем готовую точку.'}
          </p>
        </div>

        {/* 3 Step Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1b2330] p-px border border-[#1b2330]">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-[#0e1218] p-6 sm:p-8 flex flex-col justify-between text-left space-y-6 hover:bg-[#121720] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1b2330] map-mono text-xs">
                    <span className="text-[#f59e0b] font-bold text-base">{s.num}</span>
                    <span className="text-[#8b949e] text-[10px] uppercase">{s.code}</span>
                  </div>

                  <div className="w-9 h-9 bg-[#1b2330] text-[#f59e0b] flex items-center justify-center mb-4">
                    <Icon weight="bold" className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs text-[#8b949e] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1b2330] map-mono text-[11px] text-[#f59e0b]">
                  {idx === 0 && (isUz ? '01. Geoma\'lumotlar' : '01. Координаты')}
                  {idx === 1 && (isUz ? '02. 24-48 soat moderatsiya' : '02. 24-48 часов модерация')}
                  {idx === 2 && (isUz ? '03. 100% topshirish' : '03. 100% сдача прав')}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
