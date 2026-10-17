import React, { useState } from 'react';
import {
  Calculator,
  Check,
  PaperPlaneTilt,
  ForkKnife,
  ShoppingBag,
  FirstAid,
  Car,
  Buildings
} from '@phosphor-icons/react';
import { MapLanguage } from '../types';
import { AnimatedUnderline } from '../../components/AnimatedUnderline';

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
    { id: 'food', label: isUz ? 'Kafe va taomlar' : 'Кафе и ресторан', icon: ForkKnife },
    { id: 'retail', label: isUz ? 'Do\'kon / Shourum' : 'Магазин / Шоурум', icon: ShoppingBag },
    { id: 'medical', label: isUz ? 'Klinika / Tibbiyot' : 'Клиника / Аптека', icon: FirstAid },
    { id: 'auto', label: isUz ? 'Avtoservis / Moyka' : 'Автосервис / Мойка', icon: Car },
    { id: 'office', label: isUz ? 'Ofis / Ishlab chiqarish' : 'Офис / Производство', icon: Buildings }
  ];

  const regions = [
    { id: 'tashkent', label: isUz ? 'Toshkent shahri' : 'г. Ташкент' },
    { id: 'tashkent-obl', label: isUz ? 'Toshkent viloyati' : 'Ташкентская область' },
    { id: 'samarkand', label: isUz ? 'Samarqand' : 'Самарканд' },
    { id: 'bukhara', label: isUz ? 'Buxoro' : 'Бухара' },
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
        `• Kompaniya: ${companyName || 'Belgilanmagan'}\n` +
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
    <section id="calculator" className="py-24 md:py-32 border-t border-white/[0.06] bg-[#050507]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14 text-center mx-auto">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3 flex items-center justify-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>03 / Express Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white mb-4">
            {isUz ? (
              <>
                Arizangizni{' '}
                <AnimatedUnderline color="#10b981">
                  1 daqiqada
                </AnimatedUnderline>{' '}
                hisoblang.
              </>
            ) : (
              <>
                Рассчитайте заявку{' '}
                <AnimatedUnderline color="#10b981">
                  за 1 минуту
                </AnimatedUnderline>
                .
              </>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
            {isUz
              ? 'Sohangiz va kerakli xaritalarni belgilang. Ma\'lumotlar to\'g\'ridan-to\'g\'ri @mapuz2 ga uzatiladi.'
              : 'Укажите направление бизнеса и нужные навигаторы. Заявка мгновенно передается в @mapuz2.'}
          </p>
        </div>

        {/* Form Container */}
        <div className="p-2 sm:p-2.5 rounded-[2.5rem] bezel-shell">
          <form
            onSubmit={handleSendToTelegram}
            className="rounded-[calc(2.5rem-0.625rem)] bezel-core p-6 sm:p-8 space-y-7 text-left"
          >
            {/* Step 1: Business category */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                {isUz ? '1. Faoliyat sohangiz:' : '1. Сфера деятельности бизнеса:'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {businessTypes.map((b) => {
                  const Icon = b.icon;
                  const isActive = businessType === b.id;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setBusinessType(b.id)}
                      className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center gap-2 transition-all min-h-[75px] ${
                        isActive
                          ? 'border-emerald-500 bg-emerald-500/10 text-white ring-1 ring-emerald-500/40'
                          : 'border-white/5 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <Icon weight="bold" className="w-5 h-5 text-emerald-400" />
                      <span className="text-[11px] font-medium leading-tight">{b.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Desired mapping platforms */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                {isUz ? '2. Qaysi xaritalarga joylashtirish kerak?' : '2. Какие навигаторы необходимы?'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                <button
                  type="button"
                  onClick={() => setGoogle(!google)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                    google
                      ? 'border-emerald-500/80 bg-emerald-500/10 text-white'
                      : 'border-white/5 bg-white/[0.02] text-zinc-400'
                  }`}
                >
                  <div className="text-xs font-semibold">Google Maps</div>
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center ${
                      google ? 'bg-emerald-500 text-black' : 'border border-zinc-600'
                    }`}
                  >
                    {google && <Check weight="bold" className="w-3 h-3" />}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setYandex(!yandex)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                    yandex
                      ? 'border-emerald-500/80 bg-emerald-500/10 text-white'
                      : 'border-white/5 bg-white/[0.02] text-zinc-400'
                  }`}
                >
                  <div className="text-xs font-semibold">Yandex Maps</div>
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center ${
                      yandex ? 'bg-emerald-500 text-black' : 'border border-zinc-600'
                    }`}
                  >
                    {yandex && <Check weight="bold" className="w-3 h-3" />}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setTwogis(!twogis)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                    twogis
                      ? 'border-emerald-500/80 bg-emerald-500/10 text-white'
                      : 'border-white/5 bg-white/[0.02] text-zinc-400'
                  }`}
                >
                  <div className="text-xs font-semibold">2GIS Xaritasi</div>
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center ${
                      twogis ? 'bg-emerald-500 text-black' : 'border border-zinc-600'
                    }`}
                  >
                    {twogis && <Check weight="bold" className="w-3 h-3" />}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setApple(!apple)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                    apple
                      ? 'border-emerald-500/80 bg-emerald-500/10 text-white'
                      : 'border-white/5 bg-white/[0.02] text-zinc-400'
                  }`}
                >
                  <div className="text-xs font-semibold">Apple Maps</div>
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center ${
                      apple ? 'bg-emerald-500 text-black' : 'border border-zinc-600'
                    }`}
                  >
                    {apple && <Check weight="bold" className="w-3 h-3" />}
                  </div>
                </button>
              </div>
            </div>

            {/* Step 3: Region select */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                {isUz ? '3. Hudud / Shahar:' : '3. Регион или город:'}
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full rounded-xl bg-black/60 border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white/30"
              >
                {regions.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 4: Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  {isUz ? 'Kompaniya / Brend nomi:' : 'Название компании или заведения:'}
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder={isUz ? 'Masalan: Safia Cafe' : 'Например: Safia Cafe'}
                  className="w-full rounded-xl bg-black/60 border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white/30"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  {isUz ? 'Telefon yoki Telegram:' : 'Телефон или контакт в Telegram:'}
                </label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  placeholder="+998 90 ... yoki @username"
                  className="w-full rounded-xl bg-black/60 border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 font-mono"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full pl-6 pr-3 py-3.5 rounded-full bg-emerald-500 text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all flex items-center justify-between group active:scale-[0.98] shadow-[0_0_30px_rgba(16,185,129,0.25)]"
              >
                <span>
                  {isUz
                    ? 'Arizani @mapuz2 Telegramiga jo\'natish'
                    : 'Отправить готовую заявку в Telegram (@mapuz2)'}
                </span>
                <span className="w-7 h-7 rounded-full bg-zinc-950 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
