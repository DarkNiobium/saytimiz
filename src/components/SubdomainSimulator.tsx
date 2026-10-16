import React, { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  PaperPlaneTilt,
  Copy,
  Sparkle
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

  const [activeTemplateId, setActiveTemplateId] = useState<string>('zamondosh');
  const [copied, setCopied] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const currentTemplate: BusinessTemplate =
    templates.find((t) => t.id === activeTemplateId) || templates[0];

  const displaySubdomain = (selectedSubdomain || currentTemplate.subdomain).toLowerCase();

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${displaySubdomain}.saytimiz.uz`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulate = () => {
    setOrderSent(true);
    setTimeout(() => setOrderSent(false), 2600);
  };

  return (
    <section id="studio" className="py-24 md:py-32 border-t border-white/[0.06] bg-[#050507]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em] text-white mb-3">
            {isUz ? 'Jonli studiya va sinov' : 'Интерактивная студия визиток'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {isUz
              ? 'Turli sohalarga moslashgan tayyor arxitekturani tekshirib ko\'ring.'
              : 'Проверьте, как адаптируется визитка под ваш профиль и как клиенты взаимодействуют с ней.'}
          </p>
        </div>

        {/* Niche Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {templates.map((tpl) => (
            <button
              key={tpl.id}
              onClick={() => {
                setActiveTemplateId(tpl.id);
                onSelectSubdomain(tpl.subdomain);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all active:scale-[0.98] ${
                activeTemplateId === tpl.id
                  ? 'bg-white text-zinc-950 font-medium shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                  : 'bg-white/[0.03] text-zinc-400 border border-white/5 hover:text-white hover:border-white/10'
              }`}
            >
              {tpl.name}
            </button>
          ))}
        </div>

        {/* Double-Bezel Hardware Frame */}
        <div className="p-2 sm:p-2.5 rounded-[2.5rem] bezel-shell">
          <div className="rounded-[calc(2.5rem-0.625rem)] bezel-core p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Spec and Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                    {isUz ? 'Sizning manzilingiz' : 'Ваш персональный адрес'}
                  </label>
                  <div className="flex items-center rounded-xl bg-black/60 border border-white/10 px-3.5 py-2.5 font-mono text-xs">
                    <input
                      type="text"
                      value={displaySubdomain}
                      onChange={(e) => onSelectSubdomain(e.target.value)}
                      className="w-full bg-transparent text-white focus:outline-none"
                    />
                    <span className="text-zinc-500 select-none">.saytimiz.uz</span>
                  </div>
                </div>

                {/* Subdomain Vault URL */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-300 truncate pr-2">
                    https://{displaySubdomain}.saytimiz.uz
                  </span>
                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="Скопировать / Nusxalash"
                  >
                    {copied ? (
                      <Check weight="bold" className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Specs */}
                <div className="space-y-3 pt-4 border-t border-white/[0.06] font-mono text-xs">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>DNS Routing</span>
                    <span className="text-zinc-200">Wildcard (*.saytimiz.uz)</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Edge Node</span>
                    <span className="text-zinc-200">Tashkent (TAS) 18ms</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Client Bridge</span>
                    <span className="text-emerald-400">Direct Telegram Webhook</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenReserve(displaySubdomain)}
                  className="w-full mt-4 pl-5 pr-2 py-2.5 rounded-full bg-white text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-all flex items-center justify-between group active:scale-[0.98]"
                >
                  <span>
                    {isUz
                      ? `«${displaySubdomain}.saytimiz.uz» nomini band qilish`
                      : `Забронировать ${displaySubdomain}.saytimiz.uz`}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-zinc-950 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>

              {/* Right Column: High-End Card Preview */}
              <div className="lg:col-span-7 flex justify-center">
                <div className="w-full max-w-sm rounded-3xl bg-zinc-950 border border-white/10 overflow-hidden shadow-2xl">
                  {/* Subtle Top Bar */}
                  <div className="px-4 py-3 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-zinc-400">
                    <span className="text-zinc-500">saytimiz platform</span>
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Live
                    </span>
                  </div>

                  {/* Visual Content */}
                  <div className="p-5 space-y-4">
                    <div className="relative rounded-2xl overflow-hidden h-40 border border-white/10">
                      <img
                        src={currentTemplate.previewImage}
                        alt={currentTemplate.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3.5 right-3.5">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">
                          {currentTemplate.badge}
                        </span>
                        <h4 className="text-lg font-semibold text-white tracking-tight leading-tight mt-0.5">
                          {currentTemplate.name}
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {currentTemplate.tagline}
                    </p>

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={handleSimulate}
                        className="py-2.5 px-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 text-xs font-medium text-white flex items-center justify-center gap-1.5 transition-colors active:scale-[0.98]"
                      >
                        <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5 text-zinc-300" />
                        <span>Telegram</span>
                      </button>
                      <button
                        onClick={handleSimulate}
                        className="py-2.5 px-3 rounded-xl bg-white text-zinc-950 text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-zinc-200 transition-colors active:scale-[0.98]"
                      >
                        <Sparkle weight="fill" className="w-3.5 h-3.5" />
                        <span>{isUz ? 'Buyurtma' : 'Заказать'}</span>
                      </button>
                    </div>

                    {orderSent && (
                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                        <Check weight="bold" className="w-3.5 h-3.5 shrink-0" />
                        <span>
                          {isUz
                            ? 'Buyurtma Telegram botga uzatildi!'
                            : 'Заказ моментально передан в Telegram!'}
                        </span>
                      </div>
                    )}

                    {/* Minimalist Catalog List */}
                    <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                      {currentTemplate.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between hover:border-white/10 transition-colors"
                        >
                          <div className="min-w-0 pr-2">
                            <div className="text-xs font-medium text-zinc-200 truncate">{item.title}</div>
                            <div className="text-[10px] text-zinc-500 truncate">{item.desc}</div>
                          </div>
                          <div className="text-xs font-mono text-zinc-300 shrink-0">{item.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
