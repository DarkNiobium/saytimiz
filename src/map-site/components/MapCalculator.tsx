import React, { useState } from 'react';
import {
  PaperPlaneTilt,
  ForkKnife,
  ShoppingBag,
  FirstAid,
  Car,
  Buildings,
  Check
} from '@phosphor-icons/react';
import { MapLanguage } from '../types';

interface MapCalculatorProps {
  lang: MapLanguage;
}

export const MapCalculator: React.FC<MapCalculatorProps> = ({ lang }) => {
  const isUz = lang === 'uz';

  const [businessType, setBusinessType] = useState('food');
  const [google, setGoogle] = useState(true);
  const [yandex, setYandex] = useState(true);
  const [twogis, setTwogis] = useState(true);
  const [apple, setApple] = useState(false);
  const [region, setRegion] = useState('tashkent');
  const [companyName, setCompanyName] = useState('');
  const [contact, setContact] = useState('');

  const businessTypes = [
    { id: 'food', label: isUz ? 'Kafe & Taomlar' : 'Кафе и еда', icon: ForkKnife },
    { id: 'retail', label: isUz ? 'Do\'kon / Shourum' : 'Магазин / Шоурум', icon: ShoppingBag },
    { id: 'medical', label: isUz ? 'Klinika / Tibbiyot' : 'Клиника / Врачи', icon: FirstAid },
    { id: 'auto', label: isUz ? 'Avtoservis / Moyka' : 'Автосервис / Мойка', icon: Car },
    { id: 'office', label: isUz ? 'Ofis / Ishlab chiqarish' : 'Офис / Услуги', icon: Buildings }
  ];

  const regions = [
    { id: 'tashkent', label: isUz ? 'Toshkent shahri' : 'г. Ташкент' },
    { id: 'tashkent-obl', label: isUz ? 'Toshkent viloyati' : 'Ташкентская область' },
    { id: 'samarkand', label: isUz ? 'Samarqand viloyati' : 'Самарканд' },
    { id: 'bukhara', label: isUz ? 'Buxoro viloyati' : 'Бухара' },
    { id: 'fergana', label: isUz ? 'Farg\'ona vodiysi' : 'Ферганская долина' },
    { id: 'other', label: isUz ? 'Boshqa viloyat' : 'Другой регион' }
  ];

  const handleSendToTelegram = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedPlatforms: string[] = [];
    if (google) selectedPlatforms.push('Google Maps');
    if (yandex) selectedPlatforms.push('Yandex Maps');
    if (twogis) selectedPlatforms.push('2GIS');
    if (apple) selectedPlatforms.push('Apple Maps');

    const businessLabel = businessTypes.find((b) => b.id === businessType)?.label || businessType;
    const regionLabel = regions.find((r) => r.id === region)?.label || region;

    const message = isUz
      ? `Assalomu alaykum MAPUZ! Xaritalarga joylashtirish bo'yicha arizam:\n` +
        `• Kompaniya: ${companyName || 'Kiritilmadi'}\n` +
        `• Soha: ${businessLabel}\n` +
        `• Hudud: ${regionLabel}\n` +
        `• Tanlangan xaritalar: ${selectedPlatforms.join(', ') || 'Barchasi'}\n` +
        `• Aloqa uchun: ${contact || 'Telegram'}\n` +
        `Iltimos, narx va muddatni aniqlashtirib bersangiz!`
      : `Здравствуйте MAPUZ! Моя заявка на добавление в карты:\n` +
        `• Компания: ${companyName || 'Не указана'}\n` +
        `• Сфера: ${businessLabel}\n` +
        `• Регион: ${regionLabel}\n` +
        `• Выбранные карты: ${selectedPlatforms.join(', ') || 'Все'}\n` +
        `• Контакт: ${contact || 'Telegram'}\n` +
        `Подскажите, пожалуйста, стоимость и сроки запуска!`;

    const url = `https://t.me/mapuz2?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Tezkor ariza
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isUz ? 'Arizangizni hisoblang va Telegramga yuboring.' : 'Сформируйте заявку на подключение.'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            {isUz
              ? 'Parametrlarni belgilang, 1 bosishda tayyor so\'rov @mapuz2 menejeri bilan dialogda ochiladi.'
              : 'Выберите параметры: в один клик откроется готовый диалог с менеджером @mapuz2.'}
          </p>
        </div>

        {/* Clean Light Form */}
        <form
          onSubmit={handleSendToTelegram}
          className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-6 text-left"
        >
          {/* Step 1: Industry */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-900 mb-3">
              1. Faoliyat sohangiz:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {businessTypes.map((b) => {
                const Icon = b.icon;
                const isActive = businessType === b.id;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setBusinessType(b.id)}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between h-20 transition-all ${
                      isActive
                        ? 'border-emerald-500 bg-white shadow-sm ring-2 ring-emerald-500/20 text-slate-900'
                        : 'border-slate-200 bg-white/60 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    <Icon weight="bold" className={`w-5 h-5 ${isActive ? 'text-emerald-600' : 'text-slate-500'}`} />
                    <span className="text-xs font-semibold leading-tight">{b.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Desired mapping platforms */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-900 mb-3">
              2. Qaysi xaritalarga joylashtirish kerak?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <button
                type="button"
                onClick={() => setGoogle(!google)}
                className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                  google
                    ? 'border-blue-500 bg-blue-50/60 text-blue-950 font-semibold'
                    : 'border-slate-200 bg-white text-slate-600'
                }`}
              >
                <span className="text-xs">Google Maps</span>
                <span className={`w-4 h-4 rounded flex items-center justify-center text-xs ${google ? 'bg-blue-600 text-white' : 'border border-slate-300'}`}>
                  {google && <Check weight="bold" className="w-3 h-3" />}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setYandex(!yandex)}
                className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                  yandex
                    ? 'border-amber-500 bg-amber-50/60 text-amber-950 font-semibold'
                    : 'border-slate-200 bg-white text-slate-600'
                }`}
              >
                <span className="text-xs">Yandex Maps</span>
                <span className={`w-4 h-4 rounded flex items-center justify-center text-xs ${yandex ? 'bg-amber-600 text-white' : 'border border-slate-300'}`}>
                  {yandex && <Check weight="bold" className="w-3 h-3" />}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setTwogis(!twogis)}
                className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                  twogis
                    ? 'border-emerald-500 bg-emerald-50/60 text-emerald-950 font-semibold'
                    : 'border-slate-200 bg-white text-slate-600'
                }`}
              >
                <span className="text-xs">2GIS Xaritasi</span>
                <span className={`w-4 h-4 rounded flex items-center justify-center text-xs ${twogis ? 'bg-emerald-600 text-white' : 'border border-slate-300'}`}>
                  {twogis && <Check weight="bold" className="w-3 h-3" />}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setApple(!apple)}
                className={`p-3 rounded-xl border flex items-center justify-between transition-all ${
                  apple
                    ? 'border-purple-500 bg-purple-50/60 text-purple-950 font-semibold'
                    : 'border-slate-200 bg-white text-slate-600'
                }`}
              >
                <span className="text-xs">Apple Maps</span>
                <span className={`w-4 h-4 rounded flex items-center justify-center text-xs ${apple ? 'bg-purple-600 text-white' : 'border border-slate-300'}`}>
                  {apple && <Check weight="bold" className="w-3 h-3" />}
                </span>
              </button>
            </div>
          </div>

          {/* Step 3: Region and company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-900 mb-1.5">
                3. Hudud:
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full rounded-xl bg-white border border-slate-200 p-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-500 shadow-sm"
              >
                {regions.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-900 mb-1.5">
                4. Kompaniya yoki brend nomi:
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder={isUz ? 'Masalan: Safia Cafe' : 'Например: Safia Cafe'}
                className="w-full rounded-xl bg-white border border-slate-200 p-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-500 shadow-sm"
              />
            </div>
          </div>

          {/* Step 4: Contact */}
          <div>
            <label className="block text-xs font-bold text-slate-900 mb-1.5">
              5. Aloqa uchun telefon raqami yoki Telegram:
            </label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              placeholder="+998 90 123 45 67 yoki @username"
              className="w-full rounded-xl bg-white border border-slate-200 p-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-500 shadow-sm"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md active:scale-98"
          >
            <PaperPlaneTilt weight="fill" className="w-4 h-4" />
            <span>
              {isUz
                ? 'Arizani @mapuz2 Telegramiga yuborish'
                : 'Отправить готовую заявку в Telegram (@mapuz2)'}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};
