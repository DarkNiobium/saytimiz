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
      metric: isUz ? 'Moderatsiya va tasdiqlash vaqti' : 'Срок прохождения проверки',
      manual: isUz ? '2-4 hafta kutish, ko\'pincha robotlar arizani rad etadi' : '2-4 недели, частые отклонения автоматическими ботами',
      mapuz: isUz ? '24-48 soatda rasmiy verifikatsiyadan kafolatli o\'tadi' : 'Гарантированная модерация и активация за 24-48 часов'
    },
    {
      metric: isUz ? 'Taksi va kirish eshigi koordinatasi' : 'Точка высадки пассажиров такси',
      manual: isUz ? 'Orqa hovli yoki qo\'shni ko\'cha belgilanadi, taksi adashadi' : 'Точка падает во дворы или тупик, такси привозит клиентов не туда',
      mapuz: isUz ? 'Asosiy kirish eshigi, podyezd va avtoturargoh aniq biriktiriladi' : 'Точные координаты главного входа и вывески для Яндекс Go'
    },
    {
      metric: isUz ? 'Qidiruvda yuqori chiqish (Local SEO)' : 'Позиция в результатах поиска',
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
      manual: isUz ? 'Mavjud emas, o\'zingiz alohida dizayner qidirasiz' : 'Отсутствуют, требуется отдельный заказ полиграфии',
      mapuz: isUz ? 'Stollar va kassa uchun vektorli bosma QR-kod bepul beriladi' : 'Готовый векторный макет стикера с QR-кодом передается бесплатно'
    }
  ];

  return (
    <section id="compare" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Aniq solishtirish
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isUz
              ? 'Nega tadbirkorlar o\'zi qo\'shmay, MAPUZ ni tanlashadi?'
              : 'Почему предприниматели доверяют добавление MAPUZ?'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            {isUz
              ? 'Xaritaga shunchaki nuqta qo\'yish yetarli emas. Eng muhimi, mijozlar adashmasdan to\'g\'ri eshigingizga kelishi.'
              : 'Поставить точку недостаточно. Главная цель: привести реального покупателя к правильной двери.'}
          </p>
        </div>

        {/* Clean Light Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-left">
          {/* Table Header */}
          <div className="grid grid-cols-12 p-4 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-600 uppercase">
            <div className="col-span-12 sm:col-span-4 text-slate-800">
              {isUz ? 'Aspekt' : 'Критерий'}
            </div>
            <div className="hidden sm:block sm:col-span-4 text-rose-600">
              {isUz ? 'Mustaqil qo\'shganda' : 'Самостоятельно'}
            </div>
            <div className="hidden sm:block sm:col-span-4 text-emerald-700">
              MAPUZ xizmati bilan
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {rows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-center gap-3 sm:gap-4 hover:bg-slate-50/60 transition-colors"
              >
                <div className="col-span-12 sm:col-span-4 font-bold text-slate-900">
                  {row.metric}
                </div>

                <div className="col-span-12 sm:col-span-4 text-slate-600 flex items-start gap-2 bg-rose-50/50 sm:bg-transparent p-2 sm:p-0 rounded-lg">
                  <X weight="bold" className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.manual}</span>
                </div>

                <div className="col-span-12 sm:col-span-4 text-slate-800 font-medium flex items-start gap-2 bg-emerald-50/60 sm:bg-transparent p-2 sm:p-0 rounded-lg">
                  <Check weight="bold" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
