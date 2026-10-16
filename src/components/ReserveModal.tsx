import React, { useState, useEffect } from 'react';
import { X, PaperPlaneTilt, Check, Sparkle } from '@phosphor-icons/react';
import { Language } from '../types';

interface ReserveModalProps {
  isOpen: boolean;
  lang: Language;
  initialSubdomain: string;
  initialPlan?: string;
  onClose: () => void;
}

export const ReserveModal: React.FC<ReserveModalProps> = ({
  isOpen,
  lang,
  initialSubdomain,
  initialPlan,
  onClose
}) => {
  const isUz = lang === 'uz';

  const [subdomain, setSubdomain] = useState(initialSubdomain);
  const [businessName, setBusinessName] = useState('');
  const [contact, setContact] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(initialPlan || (isUz ? 'Biznes' : 'Бизнес'));
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialSubdomain) {
      setSubdomain(initialSubdomain);
    }
  }, [initialSubdomain]);

  useEffect(() => {
    if (initialPlan) {
      setSelectedPlan(initialPlan);
    }
  }, [initialPlan]);

  if (!isOpen) return null;

  const cleanSubdomain = (subdomain || 'brend').toLowerCase().replace(/[^a-z0-9-]/g, '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = isUz
      ? `Assalomu alaykum! saytimiz.uz orqali poddomen band qilmoqchiman:\n- Poddomen: ${cleanSubdomain}.saytimiz.uz\n- Biznes: ${businessName || 'Kiritilmadi'}\n- Tarif: ${selectedPlan}\n- Aloqa: ${contact || 'Telegram'}`
      : `Здравствуйте! Хочу забронировать поддомен на saytimiz.uz:\n- Поддомен: ${cleanSubdomain}.saytimiz.uz\n- Бизнес: ${businessName || 'Не указан'}\n- Тариф: ${selectedPlan}\n- Контакт: ${contact || 'Telegram'}`;

    const tgUrl = `https://t.me/saytimiz_uz?text=${encodeURIComponent(text)}`;
    window.open(tgUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-zinc-900 border border-zinc-700/80 p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          title="Yopish / Закрыть"
        >
          <X weight="bold" className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Check weight="bold" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {isUz ? 'Buyurtma Telegramga yo\'naltirildi!' : 'Заявка отправлена в Telegram!'}
            </h3>
            <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-relaxed">
              {isUz
                ? 'Menejerimiz qisqa vaqt ichida siz bilan bog\'lanadi va saytni ishga tushirish jarayonini boshlaydi.'
                : 'Наш менеджер свяжется с вами в Telegram для подтверждения и запуска сайта.'}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-lg text-xs font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors"
            >
              {isUz ? 'Tushunarli' : 'Понятно'}
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-md bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Sparkle weight="fill" className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {isUz ? 'Poddomen va saytni band qilish' : 'Бронирование поддомена'}
              </h3>
            </div>
            <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
              {isUz
                ? 'Ma\'lumotlarni to\'ldiring va ariza darhol menejerimizga yetib boradi.'
                : 'Укажите желаемое имя и контакты для мгновенного бронирования.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  {isUz ? 'Poddomen nomi:' : 'Желаемый поддомен:'}
                </label>
                <div className="flex items-center rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm">
                  <input
                    type="text"
                    value={subdomain}
                    onChange={(e) => setSubdomain(e.target.value)}
                    required
                    placeholder="fastfood"
                    className="w-full bg-transparent text-white focus:outline-none font-mono text-xs"
                  />
                  <span className="text-zinc-500 font-mono text-xs select-none">.saytimiz.uz</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  {isUz ? 'Kompaniya yoki brend nomi:' : 'Название компании или бренда:'}
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder={isUz ? 'Masalan: Zamondosh Kafe' : 'Например: Zamondosh Cafe'}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  {isUz ? 'Tarif:' : 'Тариф:'}
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value={isUz ? 'Start (199 000 so\'m)' : 'Старт (199 000 сум)'}>
                    {isUz ? 'Start (199 000 so\'m)' : 'Старт (199 000 сум)'}
                  </option>
                  <option value={isUz ? 'Biznes (490 000 so\'m)' : 'Бизнес (490 000 сум)'}>
                    {isUz ? 'Biznes (490 000 so\'m)' : 'Бизнес (490 000 сум)'}
                  </option>
                  <option value={isUz ? 'Maxsus (1 200 000 so\'m)' : 'Индивидуальный (1 200 000 сум)'}>
                    {isUz ? 'Maxsus (1 200 000 so\'m)' : 'Индивидуальный (1 200 000 сум)'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  {isUz ? 'Telegram yoki telefon raqamingiz:' : 'Ваш Telegram или номер телефона:'}
                </label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  placeholder="@username yoki +998 90 ..."
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-lg text-xs font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <PaperPlaneTilt weight="fill" className="w-4 h-4" />
                <span>
                  {isUz
                    ? 'Telegram orqali band qilish'
                    : 'Забронировать через Telegram'}
                </span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
