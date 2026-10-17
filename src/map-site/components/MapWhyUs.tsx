import React from 'react';
import { ShieldCheck, XCircle, CheckCircle, WarningCircle } from '@phosphor-icons/react';
import { MapLanguage } from '../types';

interface MapWhyUsProps {
  lang: MapLanguage;
}

export const MapWhyUs: React.FC<MapWhyUsProps> = ({ lang }) => {
  const isUz = lang === 'uz';

  const comparisons = [
    {
      title: isUz ? 'Moderatsiya va vaqt' : 'Срок и прохождение модерации',
      bad: isUz
        ? 'O\'zi qo\'shganda 2-4 hafta kutiladi, ko\'pincha robotlar tomonidan rad etiladi'
        : 'Самостоятельно: заявка висит 2-4 недели и часто отклоняется автоматическими роботами',
      good: isUz
        ? 'MAPUZ bilan: 24-48 soatda rasmiy verifikatsiyadan kafolatli o\'tadi'
        : 'С MAPUZ: гарантированное прохождение модерации за 24-48 часов'
    },
    {
      title: isUz ? 'Geolokatsiya va taksi' : 'Точность геолокации и такси',
      bad: isUz
        ? 'Binoning orqa tarafi yoki qo\'shni ko\'cha belgilanib qoladi, taksi adashadi'
        : 'Точка падает во двор или соседний тупик, такси высаживает клиентов не там',
      good: isUz
        ? 'Kirish eshigi, podyezd va avtoturargoh koordinatalari aniq biriktiriladi'
        : 'Точные координаты главного входа, вывески и подъезда для такси Яндекс Go',
    },
    {
      title: isUz ? 'Qidiruvdagi o\'rin (SEO)' : 'Позиции в поиске (Локальное SEO)',
      bad: isUz
        ? 'Teglar va toifalar to\'ldirilmagani sababli qidiruvda oxirgi o\'rinlarda qolib ketadi'
        : 'Без правильных тегов и рубрик карточка тонет на 20-30 местах в поиске',
      good: isUz
        ? 'Barcha kalit so\'zlar va toifalar to\'g\'ri kiritilib, qidiruvda 1-o\'rinlarga ko\'tariladi'
        : 'Грамотный подбор категорий и ключевых фраз выводит бизнес в топ выдачи',
    },
    {
      title: isUz ? 'Blokirovka va himoya' : 'Защита от блокировок и конкурентов',
      bad: isUz
        ? 'Raqobatchilar soxta shikoyat qilib, profilingizni o\'chirib yuborishi mumkin'
        : 'Конкуренты могут отправить ложную жалобу и закрыть организацию на карте',
      good: isUz
        ? 'Rasmiy tasdiqlangan profil va to\'liq egalik huquqi sizning raqamingizga topshiriladi'
        : 'Официальный подтвержденный статус с правами владельца на ваш личный номер',
    }
  ];

  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06] bg-[#050507]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
            02 / Comparison
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white mb-4">
            {isUz
              ? 'Nega tadbirkorlar o\'zi qo\'shmay, MAPUZ ni tanlashadi?'
              : 'Почему предприниматели доверяют размещение MAPUZ?'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
            {isUz
              ? 'Xaritaga shunchaki nuqta qo\'yish yetarli emas. Muhimi, xaridorlar sizni topishi va taksi to\'g\'ri eshigingizga kelishi.'
              : 'Просто поставить точку недостаточно. Важно быть первым в выдаче и исключить ошибки навигации.'}
          </p>
        </div>

        {/* Comparison Table Shell */}
        <div className="p-2 rounded-[2rem] bezel-shell">
          <div className="rounded-[calc(2rem-0.5rem)] bezel-core overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 bg-white/[0.02] border-b border-white/[0.06] font-mono text-xs uppercase tracking-wider text-zinc-500">
              <div className="md:col-span-4 font-semibold text-zinc-400">
                {isUz ? 'Aspekt' : 'Критерий'}
              </div>
              <div className="md:col-span-4 text-rose-400 flex items-center gap-1.5 mt-2 md:mt-0">
                <XCircle weight="bold" className="w-4 h-4" />
                <span>{isUz ? 'O\'zi mustaqil qo\'shganda' : 'Самостоятельное добавление'}</span>
              </div>
              <div className="md:col-span-4 text-emerald-400 flex items-center gap-1.5 mt-2 md:mt-0">
                <CheckCircle weight="fill" className="w-4 h-4" />
                <span>{isUz ? 'MAPUZ xizmati bilan' : 'Профессионально с MAPUZ'}</span>
              </div>
            </div>

            <div className="divide-y divide-white/[0.04]">
              {comparisons.map((c, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 p-5 text-xs sm:text-sm hover:bg-white/[0.015] transition-colors gap-3 md:gap-4 items-center"
                >
                  <div className="md:col-span-4 text-white font-medium flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-zinc-500 shrink-0" />
                    <span>{c.title}</span>
                  </div>

                  <div className="md:col-span-4 text-zinc-400 bg-rose-500/[0.03] p-3 rounded-xl border border-rose-500/10 text-xs leading-relaxed">
                    <div className="flex items-start gap-1.5">
                      <WarningCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span>{c.bad}</span>
                    </div>
                  </div>

                  <div className="md:col-span-4 text-zinc-200 bg-emerald-500/[0.04] p-3 rounded-xl border border-emerald-500/20 text-xs leading-relaxed">
                    <div className="flex items-start gap-1.5">
                      <CheckCircle weight="fill" className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{c.good}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
