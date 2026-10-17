import React from 'react';
import { Globe, NavigationArrow, Buildings } from '@phosphor-icons/react';
import { MapLanguage } from '../types';

interface MapPlatformsProps {
  lang: MapLanguage;
}

export const MapPlatforms: React.FC<MapPlatformsProps> = ({ lang }) => {
  const isUz = lang === 'uz';

  const platforms = [
    {
      id: 'google',
      name: 'Google Maps',
      badge: isUz ? 'Dunyo bo\'yicha №1' : '№1 в мире',
      color: 'blue',
      icon: Globe,
      summary: isUz
        ? 'Google qidiruvida biznesingiz yuqorida chiqadi. Chet ellik sayyohlar va chet el mehmonlari sizni oson topadi.'
        : 'Бизнес появляется на первых позициях в поиске Google. Иностранные туристы и гости находят вас моментально.'
    },
    {
      id: 'yandex',
      name: 'Yandex Maps',
      badge: isUz ? 'O\'zbekistonda №1' : '№1 в Узбекистане',
      color: 'amber',
      icon: NavigationArrow,
      summary: isUz
        ? 'Yandex Go taksilari va shahar haydovchilari adashmasdan to\'g\'ri kirish eshigingiz oldiga olib keladi.'
        : 'Такси Яндекс Go и городские водители привозят клиентов ровно к вашей двери без путаницы.'
    },
    {
      id: '2gis',
      name: '2GIS',
      badge: isUz ? 'Oflayn yo\'riqnoma' : 'Точный справочник',
      color: 'emerald',
      icon: Buildings,
      summary: isUz
        ? 'Bino ichidagi aniq qavat, kirish podyezdi, menyu va narxlar. Internetsiz ham to\'liq ishlaydi.'
        : 'Точный этаж, номер входа, фото вывески и прайс-лист. Работает на смартфоне даже без интернета.'
    }
  ];

  return (
    <section id="platforms" className="py-16 md:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-left mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-2">
            {isUz ? 'Asosiy platformalar' : 'Сервисы'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {isUz ? 'Mijozlar sizni topadigan 3 ta xarita.' : '3 навигатора, где вас ждут клиенты.'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((p) => {
            const Icon = p.icon;
            const badgeClasses =
              p.color === 'blue'
                ? 'bg-blue-50 text-blue-700 border-blue-200'
                : p.color === 'amber'
                ? 'bg-amber-50 text-amber-800 border-amber-200'
                : 'bg-emerald-50 text-emerald-800 border-emerald-200';

            const iconClasses =
              p.color === 'blue'
                ? 'bg-blue-50 text-blue-600'
                : p.color === 'amber'
                ? 'bg-amber-50 text-amber-700'
                : 'bg-emerald-50 text-emerald-700';

            return (
              <div
                key={p.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between text-left space-y-4 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconClasses}`}>
                      <Icon weight="bold" className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${badgeClasses}`}>
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                    {p.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {p.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60">
                  <span className="text-[11px] font-semibold text-slate-500">
                    {isUz ? 'Rasmiy verifikatsiya' : 'Официальная верификация'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
