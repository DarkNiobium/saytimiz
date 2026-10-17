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
      num: '1',
      icon: MapPin,
      title: isUz ? 'Ma\'lumotlarni Telegramga yuborasiz' : 'Отправляете данные в Telegram',
      desc: isUz
        ? 'Tashkilot nomi, telefon raqamlari, ish vaqti, bino fasadi va kirish eshigi koordinatalarini @mapuz2 ga yuborasiz.'
        : 'Присылаете название, контакты, график работы, фото вывески и точку входа в здание в диалог @mapuz2.'
    },
    {
      num: '2',
      icon: ShieldCheck,
      title: isUz ? 'Biz 24-48 soatda rasmiy tasdiqlaymiz' : 'Мы проходим официальную модерацию',
      desc: isUz
        ? 'Google Business, Yandex Biznes va 2GIS ro\'yxatidan o\'tkazamiz. Xatoliklar filtrini chetlab o\'tib, rasmiy ko\'k belgi bilan tasdiqlaymiz.'
        : 'Создаем карточки в Google, Яндекс и 2GIS. Проходим верификацию без зависания и закрепляем правильную точку заезда.'
    },
    {
      num: '3',
      icon: QrCode,
      title: isUz ? 'Egalik huquqini olasiz va buyurtmalar keladi' : 'Получаете права владельца и поток клиентов',
      desc: isUz
        ? 'Barcha kabinetlar shaxsiy raqamingizga o\'tkaziladi. Stollar va kassa uchun bepul vektorli QR-kod stikerini topshiramiz.'
        : 'Все профили передаются на ваш личный номер и почту. Передаем готовый печатный макет QR-кода на кассу в подарок.'
    }
  ];

  return (
    <section id="workflow" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Qulay va tezkor
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isUz
              ? 'Xaritalarga ulanishning 3 ta oson qadami.'
              : 'Подключение бизнеса в 3 простых шага.'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            {isUz
              ? 'Hech qanday murakkablik yo\'q. Barcha sozlash va tasdiqlash ishlarini o\'zimiz to\'liq bajaramiz.'
              : 'Никакой лишней волокиты. Все технические и согласовательные моменты мы берем на себя.'}
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between text-left space-y-6 hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-extrabold text-lg flex items-center justify-center">
                      {s.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Icon weight="bold" className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-700">
                  {idx === 0 && (isUz ? '01. Ma\'lumotlarni qabul qilish' : '01. Прием исходных данных')}
                  {idx === 1 && (isUz ? '02. 24-48 soatda faollashish' : '02. Активация за 24-48 часов')}
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
