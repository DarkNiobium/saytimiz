import React, { useState } from 'react';
import {
  QrCode,
  PaperPlaneTilt,
  PhoneCall,
  Check,
  Sparkle,
  Copy,
  ShoppingCart
} from '@phosphor-icons/react';
import { Language, BusinessTemplate } from '../types';
import { templatesData } from '../data/content';

interface SubdomainSimulatorProps {
  lang: Language;
  selectedSubdomain: string;
  onSelectSubdomain: (name: string) => void;
  onOpenReserve: (name: string) => void;
}

export const SubdomainSimulator: React.FC<SubdomainSimulatorProps> = ({
  lang,
  selectedSubdomain,
  onSelectSubdomain,
  onOpenReserve
}) => {
  const isUz = lang === 'uz';
  const templates = templatesData[lang];

  const [activeTemplateId, setActiveTemplateId] = useState<string>('fastfood');
  const [copied, setCopied] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const currentTemplate: BusinessTemplate =
    templates.find((t) => t.id === activeTemplateId) || templates[0];

  const displaySubdomain = (selectedSubdomain || currentTemplate.subdomain).toLowerCase();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://${displaySubdomain}.saytimiz.uz`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateOrder = () => {
    setOrderSent(true);
    setTimeout(() => setOrderSent(false), 3000);
  };

  return (
    <section id="generator" className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header - Stacked, no split header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {isUz
              ? 'Saytingiz qanday ko\'rinishini hoziroq sinab ko\'ring'
              : 'Посмотрите, как будет выглядеть ваш сайт'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {isUz
              ? 'Pastdagi sohalardan birini tanlang yoki o\'zingizning biznes nomingizni kiriting.'
              : 'Выберите готовую сферу или введите название своей компании для мгновенного предпросмотра.'}
          </p>
        </div>

        {/* Niche Selector Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {templates.map((tpl) => (
            <button
              key={tpl.id}
              onClick={() => {
                setActiveTemplateId(tpl.id);
                onSelectSubdomain(tpl.subdomain);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-medium border transition-all active:scale-[0.98] ${
                activeTemplateId === tpl.id
                  ? 'bg-zinc-100 text-zinc-950 border-zinc-100'
                  : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              {tpl.category} ({tpl.subdomain}.saytimiz.uz)
            </button>
          ))}
        </div>

        {/* Interactive Workspace: Controls on left, Live Device on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  {isUz ? 'Sizning xohlagan poddomeningiz:' : 'Желаемый поддомен:'}
                </label>
                <div className="flex items-center rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2">
                  <input
                    type="text"
                    value={displaySubdomain}
                    onChange={(e) => onSelectSubdomain(e.target.value)}
                    className="w-full bg-transparent text-sm text-white focus:outline-none font-mono"
                  />
                  <span className="text-zinc-500 font-mono text-xs select-none">.saytimiz.uz</span>
                </div>
              </div>

              {/* URL bar quick actions */}
              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                <div className="truncate text-xs font-mono text-emerald-400 pr-2">
                  https://{displaySubdomain}.saytimiz.uz
                </div>
                <button
                  onClick={handleCopyLink}
                  className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  title="Havolani nusxalash / Скопировать ссылку"
                >
                  {copied ? (
                    <Check weight="bold" className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Technical characteristics */}
              <div className="space-y-2.5 pt-2 border-t border-zinc-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">{isUz ? 'Server joylashuvi:' : 'Локация узла:'}</span>
                  <span className="font-mono text-zinc-200">Tashkent Edge CDN</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">{isUz ? 'Yuklanish tezligi:' : 'Скорость ответа:'}</span>
                  <span className="font-mono text-emerald-400 font-medium">0.18 soniya</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">{isUz ? 'Xavfsizlik:' : 'Безопасность:'}</span>
                  <span className="font-mono text-zinc-200">Auto SSL / Let's Encrypt</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">{isUz ? 'Google Lighthouse:' : 'Оценка Google:'}</span>
                  <span className="font-mono text-emerald-400 font-bold">100 / 100</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenReserve(displaySubdomain)}
                className="w-full mt-4 py-3 rounded-lg text-xs font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors active:scale-[0.98] shadow-sm flex items-center justify-center gap-2"
              >
                <Sparkle weight="fill" className="w-4 h-4" />
                <span>
                  {isUz
                    ? `«${displaySubdomain}.saytimiz.uz» nomini band qilish`
                    : `Забронировать ${displaySubdomain}.saytimiz.uz`}
                </span>
              </button>
            </div>
          </div>

          {/* Live Mobile Device Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-zinc-900 border border-zinc-700/80 shadow-2xl overflow-hidden">
              {/* Browser Mockup Top Bar */}
              <div className="px-4 py-3 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
                <div className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{displaySubdomain}.saytimiz.uz</span>
                </div>
                <div className="text-[10px] font-mono text-zinc-400">99.9%</div>
              </div>

              {/* Simulated Website Content */}
              <div className="p-5 space-y-4 bg-zinc-950/60 max-h-[580px] overflow-y-auto">
                {/* Banner & Cover */}
                <div className="relative rounded-xl overflow-hidden h-36 border border-zinc-800">
                  <img
                    src={currentTemplate.previewImage}
                    alt={currentTemplate.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500 text-zinc-950">
                        {currentTemplate.badge}
                      </span>
                      <h3 className="text-base font-bold text-white mt-1 leading-tight">
                        {currentTemplate.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold text-amber-400">★ {currentTemplate.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Bio / Description */}
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {currentTemplate.tagline}
                </p>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleSimulateOrder}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium hover:bg-emerald-500/20 transition-colors"
                  >
                    <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5" />
                    <span>Telegram</span>
                  </button>
                  <a
                    href="tel:+998901234567"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium hover:text-white transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>+998 (90) ...</span>
                  </a>
                </div>

                {/* Simulated Order Notification */}
                {orderSent && (
                  <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                    <Check weight="bold" className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      {isUz
                        ? 'Buyurtma Telegram orqali qabul qilindi!'
                        : 'Заказ успешно отправлен в Telegram бот!'}
                    </span>
                  </div>
                )}

                {/* Catalog / Menu Items */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-medium">
                    <span>{isUz ? 'Mashhur mahsulotlar' : 'Популярные позиции'}</span>
                    <span className="text-[11px] text-zinc-400">{isUz ? 'Narxlar' : 'Цены'}</span>
                  </div>

                  {currentTemplate.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800/80 flex items-center justify-between gap-3 hover:border-zinc-700 transition-colors"
                    >
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-zinc-200 truncate">{item.title}</div>
                        <div className="text-[11px] text-zinc-400 truncate">{item.desc}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-mono font-medium text-emerald-400">{item.price}</div>
                        <button
                          onClick={handleSimulateOrder}
                          className="mt-1 text-[10px] text-zinc-400 hover:text-white flex items-center gap-1 justify-end"
                        >
                          <ShoppingCart className="w-3 h-3" />
                          <span>{isUz ? 'Tanlash' : 'Заказать'}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* QR Code section inside mockup */}
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded bg-white p-1 flex items-center justify-center text-zinc-950">
                      <QrCode weight="bold" className="w-full h-full" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-zinc-200">
                        {isUz ? 'Stol yoki vizitka uchun QR' : 'QR-код для визиток'}
                      </div>
                      <div className="text-[10px] text-zinc-400 font-mono">
                        saytimiz.uz/{displaySubdomain}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">Vektor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
