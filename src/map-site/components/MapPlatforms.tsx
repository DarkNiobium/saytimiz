import React from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  NavigationArrow,
  Buildings,
  DeviceMobile,
  Check,
  ArrowUpRight
} from '@phosphor-icons/react';
import { MapLanguage } from '../types';
import { AnimatedUnderline } from '../../components/AnimatedUnderline';

interface MapPlatformsProps {
  lang: MapLanguage;
}

export const MapPlatforms: React.FC<MapPlatformsProps> = ({ lang }) => {
  const isUz = lang === 'uz';

  const platforms = [
    {
      id: 'google',
      name: 'Google Maps',
      icon: Globe,
      color: 'blue',
      badge: 'Jahon qamrovi',
      audience: isUz ? 'Chet ellik mehmonlar va Android foydalanuvchilari' : 'Туристы, экспаты и пользователи Android',
      title: isUz ? 'Google Qidiruv va Xaritalar' : 'Google Поиск и Карты',
      desc: isUz
        ? 'Google tizimida odamlar restoron, mehmonxona yoki xizmat qidirganda sizning biznesingiz fotosuratlari, reytingi va telefon raqami bilan eng yuqorida chiqadi.'
        : 'При запросах в Google компания появляется в блоке локальной выдачи с фото, рейтингом и кнопкой звонка.',
      points: isUz
        ? [
            'Google Business Profile rasmiy verifikatsiyasi',
            'Chet eldan keluvchi sayyohlar va biznes vakillari oqimi',
            'Google qidiruv natijalarida birinchi o\'rinlar (Local SEO)',
            'Mijozlarning 5 yulduzli sharhlarini to\'plash imkoni'
          ]
        : [
            'Официальная верификация Google Business Profile',
            'Приток иностранных туристов и деловых гостей',
            'Выдача в топ-3 локального поиска Google Maps',
            'Сбор официальных отзывов и фотоотчетов гостей'
          ]
    },
    {
      id: 'yandex',
      name: 'Yandex Maps & Go',
      icon: NavigationArrow,
      color: 'amber',
      badge: 'O\'zbekistonda №1',
      audience: isUz ? 'Toshkent va viloyatlardagi barcha haydovchilar' : 'Водители, такси Яндекс Go и пешеходы',
      title: isUz ? 'Yandex Xarita va Navigator' : 'Яндекс Карты и Навигатор',
      desc: isUz
        ? 'Toshkentda eng ko\'p ishlatiladigan xarita. Yandex Go taksi haydovchilari mijozlarni to\'g\'ri eshigingiz oldiga olib keladi va adashmaydi.'
        : 'Главный навигатор в Узбекистане. Водители такси Яндекс Go привозят клиентов ровно к вашей двери без путаницы.',
      points: isUz
        ? [
            'Yandex Biznes rasmiy profili va ko\'k tasdiq belgisi',
            'Taksi va navigator uchun aniq kirish eshigi yo\'li',
            'Mahsulotlar katalogi, menyu va dolzarb ish vaqti',
            'Kompaniyangiz logotipi va tovar rasmlari galereyasi'
          ]
        : [
            'Синяя галочка подтвержденной организации',
            'Точная точка высадки для такси и навигатора',
            'Каталог услуг, меню блюд и актуальный график',
            'Логотип компании и прямая ссылка на сайт'
          ]
    },
    {
      id: '2gis',
      name: '2GIS Shahar',
      icon: Buildings,
      color: 'emerald',
      badge: 'Offline ma\'lumotnoma',
      audience: isUz ? 'Piyoda xaridorlar va ofis xodimlari' : 'Покупатели и клиенты без стабильного интернета',
      title: isUz ? '2GIS Shahar Ma\'lumotnomasi' : '2GIS Справочник организаций',
      desc: isUz
        ? 'Bino ichidagi aniq qavat, podyezd, xona raqami va to\'liq tovar narxlarini ko\'rsatuvchi eng batafsil shahar xaritasi.'
        : 'Детальнейший городской справочник с указанием этажа, подъезда, входа и цен на все услуги.',
      points: isUz
        ? [
            'Binoning aniq qavati, yo\'lak va kirish eshigi',
            'Internetsiz (offline) rejimda ham xaritaning ishlashi',
            'To\'liq prays-list va tovarlar toifasi',
            'Toshkent va butun respublika bazasida doimiy saqlanish'
          ]
        : [
            'Точный этаж, номер офиса и правильный вход',
            'Работает даже при отсутствии интернета (offline)',
            'Подробный прайс-лист со всеми ценами',
            'Высокая конверсия в реальные визиты'
          ]
    },
    {
      id: 'apple',
      name: 'Apple Maps & Waze',
      icon: DeviceMobile,
      color: 'purple',
      badge: 'Apple ekotizimi',
      audience: isUz ? 'iPhone va Apple CarPlay foydalanuvchilari' : 'Владельцы iPhone, iPad и Apple CarPlay',
      title: isUz ? 'Apple Maps va Siri integratsiyasi' : 'Apple Maps и голосовой поиск Siri',
      desc: isUz
        ? 'iPhone egalari "Yaqin oradagi kafe" deb Siri orqali qidirganda sizning manzilingiz Apple Maps orqali ochiladi.'
        : 'Пользователи iPhone находят вас через штатный поиск Spotlight, голосового ассистента Siri и Apple CarPlay в авто.',
      points: isUz
        ? [
            'Apple Maps da rasmiy nuqta va joylashuv',
            'Siri ovozli yordamchisi orqali qidiruvga ulanish',
            'Avtomobildagi Apple CarPlay ekranlarida ko\'rinish',
            'Premium auditoriyani qamrab olish'
          ]
        : [
            'Официальная карточка в экосистеме Apple',
            'Интеграция с Siri и Siri Suggestions',
            'Поддержка навигации в Apple CarPlay',
            'Охват платежеспособной аудитории с iOS'
          ]
    }
  ];

  return (
    <section id="platforms" className="py-24 md:py-32 border-t border-white/[0.06] bg-[#050507]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
            01 / Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white mb-4">
            {isUz ? (
              <>
                Barcha asosiy xaritalarda{' '}
                <AnimatedUnderline color="#10b981">
                  100% qamrov
                </AnimatedUnderline>
                .
              </>
            ) : (
              <>
                100% охват на всех{' '}
                <AnimatedUnderline color="#10b981">
                  популярных картах
                </AnimatedUnderline>
                .
              </>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
            {isUz
              ? 'Bitta xarita bilan cheklanmang. Xaridorlar turli ilovalardan foydalanadi, shuning uchun barcha platformalarda bo\'lishingiz shart.'
              : 'Клиенты используют разные навигаторы. Мы синхронизируем данные во всех главных сервисах.'}
          </p>
        </div>

        {/* 4 Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-1.5 rounded-[2.2rem] bezel-shell"
              >
                <div className="rounded-[calc(2.2rem-0.375rem)] bezel-core p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white">
                          <Icon weight="bold" className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white tracking-tight">{p.name}</h3>
                          <span className="text-[10px] font-mono text-zinc-500">{p.audience}</span>
                        </div>
                      </div>

                      <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        {p.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-zinc-200 mb-2">
                      {p.title}
                    </h4>

                    <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                      {p.desc}
                    </p>

                    {/* Feature points */}
                    <ul className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                      {p.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Check weight="bold" className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-end">
                    <a
                      href="https://t.me/mapuz2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                    >
                      <span>{isUz ? 'Ulanish haqida so\'rash' : 'Узнать подробнее'}</span>
                      <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
