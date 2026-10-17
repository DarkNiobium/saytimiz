import React from 'react';
import { PaperPlaneTilt, ShieldCheck, UsersThree } from '@phosphor-icons/react';
import { MapLanguage } from '../types';

interface MapWorkflowProps {
  lang: MapLanguage;
}

export const MapWorkflow: React.FC<MapWorkflowProps> = ({ lang }) => {
  const isUz = lang === 'uz';

  const steps = [
    {
      num: '1',
      icon: PaperPlaneTilt,
      title: isUz ? 'Ma\'lumotlarni yuborasiz' : 'Отправляете данные',
      desc: isUz
        ? 'Biznes nomi, telefon, lokatsiya va rasmlarni @mapuz2 Telegramiga tashlaysiz.'
        : 'Присылаете название, контакты, фото вывески и адрес в Telegram @mapuz2.'
    },
    {
      num: '2',
      icon: ShieldCheck,
      title: isUz ? '24 soatda joylaymiz' : 'Размещаем за 24 часа',
      desc: isUz
        ? 'Google, Yandex va 2GIS ro\'yxatidan rasmiy verifikatsiya bilan o\'tkazamiz.'
        : 'Проходим официальную модерацию в Google, Яндекс и 2GIS.'
    },
    {
      num: '3',
      icon: UsersThree,
      title: isUz ? 'Mijozlar kelishni boshlaydi' : 'Принимаете клиентов',
      desc: isUz
        ? 'Barcha huquqlarni olasiz. Taksilar va yangi xaridorlar to\'g\'ri eshigingizga keladi.'
        : 'Получаете полные права владельца. Клиенты и такси находят вас без ошибок.'
    }
  ];

  return (
    <section id="workflow" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-left mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
            {isUz ? 'Oddiy jarayon' : 'Процесс'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {isUz ? '3 qadamda xaritalarda paydo bo\'ling.' : '3 шага до запуска на картах.'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between text-left space-y-4 hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-extrabold text-sm flex items-center justify-center">
                      {s.num}
                    </span>
                    <Icon weight="bold" className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight mb-1.5">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
