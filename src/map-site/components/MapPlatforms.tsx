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
      name: 'Google Maps va Google Qidiruv',
      badge: 'Dunyo bo\'yicha №1',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
      iconClass: 'bg-blue-100 text-blue-600',
      icon: Globe,
      audience: isUz ? 'Sayyohlar, chet ellik mehmonlar va Android foydalanuvchilari' : 'Туристы, иностранные гости и пользователи Android',
      summary: isUz
        ? 'Google qidiruvida odamlar "kafe", "mehmonxona", "stomatologiya" deb qidirganda sizning biznesingiz fotosuratlari, reytingi va telefon raqami bilan eng yuqorida chiqadi.'
        : 'При локальных запросах в Google карточка вашей компании с фото, отзывами и кнопкой звонка показывается выше обычных сайтов.',
      features: isUz
        ? [
            'Google Business Profile rasmiy verifikatsiyasi va tasdiq kodi',
            'Chet ellik sayyohlar va biznes mehmonlari oqimini jalb qilish',
            'Qidiruv natijalarida birinchi qatorda ko\'rinish (Local SEO)',
            'Mijozlarning 5 yulduzli baholari va sharhlarini to\'plash'
          ]
        : [
            'Официальная верификация профиля Google Business',
            'Привлечение иностранных туристов и деловых гостей',
            'Показ в топ-3 локальной выдачи Google Maps',
            'Сбор 5-звездочных отзывов с возможностью ответа'
          ]
    },
    {
      id: 'yandex',
      name: 'Yandex Maps va Yandex Navigator',
      badge: 'O\'zbekistonda eng ommabop',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
      iconClass: 'bg-amber-100 text-amber-700',
      icon: NavigationArrow,
      audience: isUz ? 'Toshkent va viloyatlardagi barcha haydovchilar va Yandex Go' : 'Водители, навигатор и пассажиры такси Яндекс Go',
      summary: isUz
        ? 'Toshkentda 1-o\'rindagi xarita. Yandex Go taksi haydovchilari mijozlarni adashtirmasdan to\'g\'ri eshigingiz oldiga olib kelishi uchun rasmiy manzil biriktiriladi.'
        : 'Ключевой навигатор в городах Узбекистана. Исключает путаницу водителей такси Яндекс Go, приводя клиентов точно к нужной двери.',
      features: isUz
        ? [
            'Yandex Biznes rasmiy profili va tasdiqlangan ko\'k belgi',
            'Taksi va avtomobil navigatori uchun aniq kirish eshigi yo\'li',
            'Menyu, tovarlar narxlari va dolzarb ish tartibini joylash',
            'Tashkilot logotipi, fasad fotosuratlari va to\'g\'ridan-to\'g\'ri qo\'ng\'iroq'
          ]
        : [
            'Синяя галочка проверенной организации в Яндекс Бизнес',
            'Точная точка высадки пассажиров такси Яндекс Go',
            'Размещение меню, прайс-листа и актуального графика',
            'Логотип компании и прямая кликабельная связь'
          ]
    },
    {
      id: '2gis',
      name: '2GIS Shahar Ma\'lumotnomasi',
      badge: 'Eng batafsil offline xarita',
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      iconClass: 'bg-emerald-100 text-emerald-700',
      icon: Buildings,
      audience: isUz ? 'Piyoda xaridorlar va bino ichidan xona qidiruvchilar' : 'Покупатели и клиенты, ищущие вход в здание',
      summary: isUz
        ? 'Bino ichidagi aniq qavat, podyezd, xona raqami va to\'liq tovar narxlarini ko\'rsatuvchi eng batafsil shahar ma\'lumotnomasi. Internetsiz ham ishlaydi.'
        : 'Детальнейший городской справочник с указанием этажа, подъезда, входа и цен на все услуги. Работает даже без интернета.',
      features: isUz
        ? [
            'Binoning aniq qavati, yo\'lak va kirish podyezdi belgilanishi',
            'Internetsiz (offline) rejimda ham xaritaning to\'liq ishlashi',
            'Kengaytirilgan tovarlar va xizmatlar ro\'yxati (prays-list)',
            'Toshkent va viloyatlar ma\'lumotnomasida doimiy mavjudlik'
          ]
        : [
            'Точный этаж, номер помещения и правильный подъезд',
            'Работает даже при отсутствии интернета на смартфоне',
            'Размещение подробного прайс-листа со всеми ценами',
            'Высокая конверсия в реальные визиты покупателей'
          ]
    },
    {
      id: 'apple',
      name: 'Apple Maps va Siri',
      badge: 'Apple ekotizimi',
      badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
      iconClass: 'bg-purple-100 text-purple-600',
      icon: DeviceMobile,
      audience: isUz ? 'iPhone, iPad va Apple CarPlay avtomobil egalari' : 'Владельцы iPhone, iPad и Apple CarPlay в авто',
      summary: isUz
        ? 'iPhone egalari manzil qidirganda yoki Siri ovozli yordamchisi orqali qidiruv berganda sizning biznesingiz Apple Maps orqali ochiladi.'
        : 'Пользователи iPhone находят вас через штатный поиск Spotlight, голосового ассистента Siri и Apple CarPlay в авто.',
      features: isUz
        ? [
            'Apple Maps tizimida rasmiy nuqta va joylashuv',
            'Siri ovozli yordamchisi orqali qidiruvga ulanish',
            'Avtomobildagi Apple CarPlay ekranlarida ko\'rinish',
            'Premium iPhone foydalanuvchilari auditoriyasini qamrab olish'
          ]
        : [
            'Официальная карточка в навигационной базе Apple',
            'Интеграция с голосовым ассистентом Siri',
            'Поддержка навигации на бортовых экранах CarPlay',
            'Охват аудитории владельцев техники Apple'
          ]
    }
  ];

  return (
    <section id="platforms" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Barcha asosiy xaritalar
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isUz
              ? '4 ta xarita tarmog\'i: to\'liq qamrov va yangi mijozlar.'
              : '4 ключевых навигатора: полный охват клиентов.'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            {isUz
              ? 'Xaridorlar turli ilovalardan foydalanishadi. Shuning uchun barcha platformalarda mavjud bo\'lishingiz zarur.'
              : 'Клиенты используют разные навигаторы. Мы подключаем организацию сразу ко всем главным сервисам.'}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between text-left space-y-6 shadow-sm hover:shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${p.iconClass}`}>
                        <Icon weight="bold" className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                          {p.name}
                        </h3>
                        <div className="text-xs text-slate-500 font-medium">{p.audience}</div>
                      </div>
                    </div>
                  </div>

                  <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border mb-4 ${p.badgeClass}`}>
                    {p.badge}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {p.summary}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-200/60">
                    {p.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check weight="bold" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500">24-48 soatda faollashadi</span>
                  <a
                    href="https://t.me/mapuz2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                  >
                    <span>Ulash haqida yozish</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
