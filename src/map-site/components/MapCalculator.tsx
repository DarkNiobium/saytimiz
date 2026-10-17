import React, { useState } from 'react';
import {
  PaperPlaneTilt,
  ForkKnife,
  ShoppingBag,
  FirstAid,
  Car,
  Buildings
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
    { id: 'food', label: isUz ? 'Kafe & Restoran' : 'Кафе и ресторан', icon: ForkKnife },
    { id: 'retail', label: isUz ? 'Do\'kon / Shourum' : 'Магазин / Бутик', icon: ShoppingBag },
    { id: 'medical', label: isUz ? 'Klinika / Tish' : 'Клиника / Врачи', icon: FirstAid },
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
        `• Tanlangan tarmoqlar: ${selectedPlatforms.join(', ') || 'Barchasi'}\n` +
        `• Aloqa: ${contact || 'Telegram'}\n` +
        `Iltimos, narx va boshlash muddatini aytsangiz!`
      : `Здравствуйте MAPUZ! Моя заявка на добавление в карты:\n` +
        `• Компания: ${companyName || 'Не указана'}\n` +
        `• Сфера: ${businessLabel}\n` +
        `• Регион: ${regionLabel}\n` +
        `• Карты: ${selectedPlatforms.join(', ') || 'Все'}\n` +
        `• Контакт: ${contact || 'Telegram'}\n` +
        `Подскажите, пожалуйста, детали и сроки активации!`;

    const url = `https://t.me/mapuz2?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="calculator" className="py-20 border-b border-[#1b2330] bg-[#080b0f] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="map-mono text-[11px] text-[#f59e0b] uppercase tracking-wider mb-2">
            06 // TELEGRAM DISPATCHER
          </div>
          <h2 className="map-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {isUz ? 'Arizangizni hisoblang va yuboring.' : 'Сформируйте заявку в Telegram.'}
          </h2>
          <p className="text-xs sm:text-sm text-[#8b949e] mt-2">
            {isUz
              ? 'Parametrlarni tanlang, bitta bosishda ma\'lumotlar @mapuz2 menejeriga tayyor xabar sifatida ochiladi.'
              : 'Выберите параметры: в один клик откроется готовый диалог с менеджером @mapuz2.'}
          </p>
        </div>

        {/* Technical Form Box */}
        <form
          onSubmit={handleSendToTelegram}
          className="bg-[#0e1218] border border-[#1b2330] p-6 sm:p-8 space-y-6 text-left"
        >
          {/* Step 1: Industry */}
          <div>
            <label className="block map-mono text-xs text-[#8b949e] uppercase mb-3">
              01. {isUz ? 'Faoliyat yo\'nalishi:' : 'Сфера деятельности:'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {businessTypes.map((b) => {
                const Icon = b.icon;
                const isActive = businessType === b.id;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setBusinessType(b.id)}
                    className={`p-3 border text-left flex flex-col justify-between h-20 transition-colors ${
                      isActive
                        ? 'border-[#f59e0b] bg-[#f59e0b]/10 text-white'
                        : 'border-[#1b2330] bg-[#080b0f] text-[#8b949e] hover:border-[#2e3848] hover:text-white'
                    }`}
                  >
                    <Icon weight="bold" className={`w-4 h-4 ${isActive ? 'text-[#f59e0b]' : 'text-[#8b949e]'}`} />
                    <span className="text-xs font-medium leading-tight">{b.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Desired maps */}
          <div>
            <label className="block map-mono text-xs text-[#8b949e] uppercase mb-3">
              02. {isUz ? 'Kerakli xaritalar:' : 'Необходимые навигаторы:'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => setGoogle(!google)}
                className={`p-3 border flex items-center justify-between transition-colors ${
                  google
                    ? 'border-blue-500 bg-blue-500/10 text-white'
                    : 'border-[#1b2330] bg-[#080b0f] text-[#8b949e]'
                }`}
              >
                <span className="text-xs font-semibold">Google Maps</span>
                <span className={`w-4 h-4 flex items-center justify-center text-xs ${google ? 'text-blue-400 font-bold' : 'text-[#8b949e]'}`}>
                  {google ? '✓' : '+'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setYandex(!yandex)}
                className={`p-3 border flex items-center justify-between transition-colors ${
                  yandex
                    ? 'border-amber-500 bg-amber-500/10 text-white'
                    : 'border-[#1b2330] bg-[#080b0f] text-[#8b949e]'
                }`}
              >
                <span className="text-xs font-semibold">Yandex Maps</span>
                <span className={`w-4 h-4 flex items-center justify-center text-xs ${yandex ? 'text-amber-400 font-bold' : 'text-[#8b949e]'}`}>
                  {yandex ? '✓' : '+'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setTwogis(!twogis)}
                className={`p-3 border flex items-center justify-between transition-colors ${
                  twogis
                    ? 'border-emerald-500 bg-emerald-500/10 text-white'
                    : 'border-[#1b2330] bg-[#080b0f] text-[#8b949e]'
                }`}
              >
                <span className="text-xs font-semibold">2GIS Xaritasi</span>
                <span className={`w-4 h-4 flex items-center justify-center text-xs ${twogis ? 'text-emerald-400 font-bold' : 'text-[#8b949e]'}`}>
                  {twogis ? '✓' : '+'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setApple(!apple)}
                className={`p-3 border flex items-center justify-between transition-colors ${
                  apple
                    ? 'border-purple-500 bg-purple-500/10 text-white'
                    : 'border-[#1b2330] bg-[#080b0f] text-[#8b949e]'
                }`}
              >
                <span className="text-xs font-semibold">Apple Maps</span>
                <span className={`w-4 h-4 flex items-center justify-center text-xs ${apple ? 'text-purple-400 font-bold' : 'text-[#8b949e]'}`}>
                  {apple ? '✓' : '+'}
                </span>
              </button>
            </div>
          </div>

          {/* Step 3: Region & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block map-mono text-xs text-[#8b949e] uppercase mb-1.5">
                03. {isUz ? 'Hudud:' : 'Регион:'}
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full bg-[#080b0f] border border-[#1b2330] p-2.5 text-xs text-white focus:outline-none focus:border-[#f59e0b] map-mono"
              >
                {regions.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block map-mono text-xs text-[#8b949e] uppercase mb-1.5">
                04. {isUz ? 'Kompaniya / Brend nomi:' : 'Название компании:'}
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder={isUz ? 'Masalan: Safia Cafe' : 'Например: Safia Cafe'}
                className="w-full bg-[#080b0f] border border-[#1b2330] p-2.5 text-xs text-white focus:outline-none focus:border-[#f59e0b]"
              />
            </div>
          </div>

          {/* Step 4: Contact */}
          <div>
            <label className="block map-mono text-xs text-[#8b949e] uppercase mb-1.5">
              05. {isUz ? 'Aloqa uchun telefon yoki Telegram:' : 'Телефон или Telegram для связи:'}
            </label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              placeholder="+998 90 ... yoki @username"
              className="w-full bg-[#080b0f] border border-[#1b2330] p-2.5 text-xs text-white focus:outline-none focus:border-[#f59e0b] map-mono"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3.5 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold map-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
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
