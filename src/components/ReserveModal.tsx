import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, Check, Sparkle } from '@phosphor-icons/react';
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
      : `Здравствуйте! Хочу забронировать поддомен на saytimiz.uz:\n- Поддомен: ${cleanSubdomain}.saytimiz.uz\n- Бренд: ${businessName || 'Не указан'}\n- Тариф: ${selectedPlan}\n- Контакт: ${contact || 'Telegram'}`;

    const tgUrl = `https://t.me/saytimiz_uz?text=${encodeURIComponent(text)}`;
    window.open(tgUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-2xl">
      <div className="relative w-full max-w-lg p-2 rounded-[2.5rem] bezel-shell">
        <div className="rounded-[calc(2.5rem-0.5rem)] bezel-core p-8 relative">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/[0.04] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Закрыть / Yopish"
          >
            <X weight="bold" className="w-3.5 h-3.5" />
          </button>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check weight="bold" className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">
                {isUz ? 'Arizangiz Telegramga yo\'naltirildi' : 'Запрос направлен в Telegram'}
              </h3>
              <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-relaxed">
                {isUz
                  ? 'Tez orada menejerimiz siz bilan bog\'lanadi va saytni sozlashni boshlaydi.'
                  : 'Мы уже сформировали диалог с менеджером для подтверждения и быстрой привязки адреса.'}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full text-xs font-medium bg-white text-zinc-950 hover:bg-zinc-200 transition-colors"
              >
                {isUz ? 'Tushunarli' : 'Закрыть'}
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkle weight="fill" className="w-4 h-4 text-emerald-400" />
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {isUz ? 'Poddomenni band qilish' : 'Бронирование поддомена'}
                </h3>
              </div>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                {isUz
                  ? 'Kerakli manzilni kiriting va to\'g\'ridan Telegram orqali ro\'yxatdan o\'ting.'
                  : 'Укажите желаемый адрес в зоне .uz и перейдите к прямому подтверждению.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    {isUz ? 'Poddomen' : 'Поддомен'}
                  </label>
                  <div className="flex items-center rounded-xl border border-white/10 bg-black/60 px-3.5 py-2.5 font-mono text-xs">
                    <input
                      type="text"
                      value={subdomain}
                      onChange={(e) => setSubdomain(e.target.value)}
                      required
                      placeholder="zamondosh"
                      className="w-full bg-transparent text-white focus:outline-none"
                    />
                    <span className="text-zinc-500 select-none">.saytimiz.uz</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    {isUz ? 'Kompaniya / Brend' : 'Бренд или заведение'}
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder={isUz ? 'Masalan: Zamondosh Studio' : 'Например: Zamondosh Studio'}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white/30"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    {isUz ? 'Tarif' : 'Тариф'}
                  </label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white/30"
                  >
                    <option value={isUz ? 'Start' : 'Старт'}>
                      {isUz ? 'Start' : 'Старт'}
                    </option>
                    <option value={isUz ? 'Biznes' : 'Бизнес'}>
                      {isUz ? 'Biznes' : 'Бизнес'}
                    </option>
                    <option value={isUz ? 'Maxsus' : 'Индивидуальный'}>
                      {isUz ? 'Maxsus' : 'Индивидуальный'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    {isUz ? 'Aloqa (Telegram yoki telefon)' : 'Telegram или номер телефона'}
                  </label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    placeholder="@username yoki +998 90 ..."
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 pl-5 pr-2 py-2.5 rounded-full bg-white text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-all flex items-center justify-between group active:scale-[0.98]"
                >
                  <span>
                    {isUz
                      ? 'Telegram orqali arizani yuborish'
                      : 'Отправить заявку в Telegram'}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-zinc-950 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                  </span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
