import React from 'react';
import { X, Check } from '@phosphor-icons/react';
import { MapLanguage } from '../types';

interface MapWhyUsProps {
  lang: MapLanguage;
}

export const MapWhyUs: React.FC<MapWhyUsProps> = ({ lang }) => {
  const isUz = lang === 'uz';

  const rows = [
    {
      metric: isUz ? 'Moderatsiya vaqti' : 'Срок прохождения проверки',
      manual: isUz ? '2-4 hafta kutish, ko\'pincha robotlar rad etadi' : '2-4 недели, частые отклонения автоматическими ботами',
      mapuz: isUz ? '24-48 soatda rasmiy verifikatsiyadan kafolatli o\'tadi' : 'Гарантированная модерация и активация за 24-48 часов'
    },
    {
      metric: isUz ? 'Taksi va kirish eshigi' : 'Точка высадки пассажиров такси',
      manual: isUz ? 'Orqa hovli yoki qo\'shni ko\'cha belgilanadi, taksi adashadi' : 'Точка падает во дворы или тупик, такси привозит клиентов не туда',
      mapuz: isUz ? 'Asosiy kirish eshigi, podyezd va avtoturargoh koordinatasi biriktiriladi' : 'Точные координаты главного входа и вывески для Яндекс Go'
    },
    {
      metric: isUz ? 'Qidiruvdagi o\'rin (SEO)' : 'Позиция в результатах поиска',
      manual: isUz ? 'Teglar to\'ldirilmagani tufayli 20-30 o\'rinlarda ko\'rinmaydi' : 'Без ключевых рубрик карточка тонет на 20-30 позициях',
      mapuz: isUz ? 'Barcha toifalar to\'g\'ri kiritilib, qidiruvda 1-o\'rinlarga chiqariladi' : 'Правильные теги и категории выводят бизнес в топ локальной выдачи'
    },
    {
      metric: isUz ? 'Blokirovka va xavfsizlik' : 'Защита от удаления и конкурентов',
      manual: isUz ? 'Raqobatchilar soxta shikoyat qilib nuqtani o\'chirib yuborishi mumkin' : 'Конкуренты могут отправить ложную жалобу и закрыть объект',
      mapuz: isUz ? 'Tasdiqlangan ko\'k belgi va egalik huquqi sizning raqamingizga o\'tadi' : 'Официальный подтвержденный статус с правами владельца'
    },
    {
      metric: isUz ? 'Bosma QR stend' : 'Печатные материалы для зала',
      manual: isUz ? 'Mavjud emas, o\'zingiz dizayner qidirasiz' : 'Отсутствуют, требуется отдельный заказ полиграфии',
      mapuz: isUz ? 'Stollar va kassa uchun vektorli bosma QR-kod bepul beriladi' : 'Готовый векторный макет стикера с QR-кодом передается бесплатно'
    }
  ];

  return (
    <section id="compare" className="py-20 border-b border-[#1b2330] bg-[#080b0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="map-mono text-[11px] text-[#f59e0b] uppercase tracking-wider mb-2">
            04 // TECHNICAL AUDIT
          </div>
          <h2 className="map-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {isUz
              ? 'Mustaqil qo\'shish va MAPUZ o\'rtasidagi aniq farqlar.'
              : 'Сравнение: самостоятельное добавление vs MAPUZ.'}
          </h2>
          <p className="text-xs sm:text-sm text-[#8b949e] mt-2">
            {isUz
              ? 'Xaritaga shunchaki nuqta qo\'yish yetarli emas. Eng muhimi, mijozlar adashmasdan to\'g\'ri eshigingizga kelishi.'
              : 'Поставить точку недостаточно. Главная цель: привести реального клиента к правильной двери.'}
          </p>
        </div>

        {/* Technical Comparison Table */}
        <div className="bg-[#0e1218] border border-[#1b2330]">
          {/* Table Header */}
          <div className="grid grid-cols-12 p-4 bg-[#141a22] border-b border-[#1b2330] map-mono text-xs uppercase text-[#8b949e]">
            <div className="col-span-12 sm:col-span-4 font-semibold text-white">
              {isUz ? 'Parametr' : 'Параметр'}
            </div>
            <div className="hidden sm:block sm:col-span-4 text-rose-400">
              [ {isUz ? 'Mustaqil qo\'shganda' : 'Самостоятельно'} ]
            </div>
            <div className="hidden sm:block sm:col-span-4 text-[#f59e0b]">
              [ MAPUZ // 24H VERIFIED ]
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#1b2330]">
            {rows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 text-xs hover:bg-[#121720] transition-colors items-center gap-3 sm:gap-4"
              >
                <div className="col-span-12 sm:col-span-4 map-mono text-white font-medium">
                  {row.metric}
                </div>

                <div className="col-span-12 sm:col-span-4 text-[#8b949e] flex items-start gap-2 bg-[#080b0f] sm:bg-transparent p-2.5 sm:p-0 border border-[#1b2330] sm:border-0">
                  <X weight="bold" className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.manual}</span>
                </div>

                <div className="col-span-12 sm:col-span-4 text-[#f0f3f6] flex items-start gap-2 bg-[#1a170d] sm:bg-transparent p-2.5 sm:p-0 border border-[#f59e0b]/30 sm:border-0">
                  <Check weight="bold" className="w-3.5 h-3.5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.mapuz}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
