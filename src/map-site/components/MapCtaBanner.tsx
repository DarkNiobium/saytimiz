import React from 'react';
import { PaperPlaneTilt, Sparkle } from '@phosphor-icons/react';
import { MapLanguage } from '../types';

interface MapCtaBannerProps {
  lang: MapLanguage;
}

export const MapCtaBanner: React.FC<MapCtaBannerProps> = ({ lang }) => {
  const isUz = lang === 'uz';

  return (
    <section className="py-12 md:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 max-w-lg">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm">
              <Sparkle weight="fill" className="w-3.5 h-3.5" />
              <span>{isUz ? 'Bepul audit' : 'Бесплатный аудит'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {isUz
                ? 'Biznesingiz xaritada bormi?'
                : 'Ваш бизнес уже есть на картах?'}
            </h3>

            <p className="text-sm text-emerald-100 leading-relaxed font-normal">
              {isUz
                ? 'Kompaniya nomini Telegramga yozing. Biz Google, Yandex va 2GIS bo\'yicha nuqtangizni bepul tekshirib beramiz.'
                : 'Отправьте название компании в Telegram. Мы бесплатно проверим статус вашей точки в Google, Яндекс и 2GIS.'}
            </p>
          </div>

          <a
            href="https://t.me/mapuz2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-emerald-800 font-bold text-sm flex items-center gap-2 transition-all shadow-md shrink-0 active:scale-95"
          >
            <PaperPlaneTilt weight="fill" className="w-4 h-4 text-emerald-600" />
            <span>{isUz ? 'Telegramga yozish (@mapuz2)' : 'Написать в Telegram (@mapuz2)'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
