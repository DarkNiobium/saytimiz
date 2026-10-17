import React, { useState } from 'react';
import {
  ArrowUpRight,
  ForkKnife,
  TShirt,
  FirstAid,
  Scissors,
  Check,
  PaperPlaneTilt,
  DeviceMobile,
  Laptop,
  PhoneCall,
  QrCode,
  Star,
  Palette
} from '@phosphor-icons/react';
import { Language } from '../types';
import { AnimatedUnderline } from './AnimatedUnderline';

interface StudioBuilderProps {
  lang: Language;
  onOpenReserve: (subdomain: string, notes?: string) => void;
}

type CategoryType = 'food' | 'fashion' | 'medical' | 'barber';
type ThemeColor = 'emerald' | 'amber' | 'sky' | 'purple';

interface CatalogItem {
  name: string;
  desc: string;
  price: string;
}

interface CategoryConfig {
  defaultSlug: string;
  defaultTitle: string;
  defaultTagline: string;
  badge: string;
  heroImage: string;
  rating: string;
  eta: string;
  quickTaglines: string[];
  items: CatalogItem[];
  ctaText: string;
}

export const StudioBuilder: React.FC<StudioBuilderProps> = ({ lang, onOpenReserve }) => {
  const isUz = lang === 'uz';

  // 1. Grandma-level simple states
  const [category, setCategory] = useState<CategoryType>('food');
  const [slug, setSlug] = useState('milliyosh');
  const [businessTitle, setBusinessTitle] = useState('Milliy Taomlar Oshxonasi');
  const [tagline, setTagline] = useState('Toshkentning eng mazali to\'y oshi va kaboblari');
  const [phone, setPhone] = useState('+998 90 123 45 67');
  const [themeColor, setThemeColor] = useState<ThemeColor>('emerald');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');

  // Category presets
  const categoryConfigs: Record<CategoryType, CategoryConfig> = {
    food: {
      defaultSlug: 'milliyosh',
      defaultTitle: isUz ? 'Milliy Taomlar Oshxonasi' : 'Чайхана & Доставка Плова',
      defaultTagline: isUz
        ? 'Toshkentning eng mazali to\'y oshi va kaboblari'
        : 'Настоящий свадебный плов, сочные шашлыки и горячая самса',
      badge: isUz ? 'HALOL / 30 MIN' : 'ХАЛЯЛЬ / 30 МИН',
      heroImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
      rating: '4.9 (1.4k)',
      eta: '25-35 min',
      quickTaglines: isUz
        ? ['Issiq to\'y oshi soat 12:00 da', '100 000 so\'mdan bepul yetkazish', 'Eng yangi go\'sht va sabzavotlar']
        : ['Горячий свадебный плов к 12:00', 'Бесплатная доставка от 100 000 сум', 'Только свежее отборное мясо'],
      items: [
        { name: isUz ? 'To\'y Oshi (1 kg)' : 'Свадебный Плов (1 кг)', desc: isUz ? 'Qazi va bedana tuxumi bilan' : 'С казы и перепелиными яйцами', price: '75 000 сум' },
        { name: isUz ? 'Tandir Somsa (5 dona)' : 'Тандырная самса (5 шт)', desc: isUz ? 'Mol go\'shti va dumbali' : 'Рубленая говядина', price: '45 000 сум' },
        { name: isUz ? 'Gijduvon Kabob (4 dona)' : 'Гиждуванский шашлык (4 шт)', desc: isUz ? 'Maxsus marinad va piyoz' : 'Фирменный маринад', price: '68 000 сум' }
      ],
      ctaText: isUz ? 'Telegramda buyurtma berish' : 'Заказать в Telegram'
    },
    fashion: {
      defaultSlug: 'anorstyle',
      defaultTitle: isUz ? 'Anor Silk & Boutique' : 'Anor Silk & Linen',
      defaultTagline: isUz
        ? 'Tabiiy ipak va paxtadan ayollar liboslari shourumi'
        : 'Шоурум авторской одежды из натурального шелка и льна',
      badge: isUz ? 'NEW CAPSULE \'26' : 'НОВАЯ КОЛЛЕКЦИЯ 2026',
      heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
      rating: '5.0 (820)',
      eta: 'Toshkent bo\'yicha 1 kun',
      quickTaglines: isUz
        ? ['100% tabiiy shoyi va paxta', 'O\'zbekiston bo\'ylab tekin yetkazish', 'Eksklyuziv cheklangan to\'plam']
        : ['100% натуральный шелк и хлопок', 'Бесплатная доставка по всему Узбекистану', 'Ограниченная эксклюзивная серия'],
      items: [
        { name: isUz ? 'Ipak Ko\'ylak Jasmine' : 'Шелковое платье Jasmine', desc: isUz ? '100% tabiiy ipak, unikal bichim' : '100% натуральный шелк', price: '480 000 сум' },
        { name: isUz ? 'Linen Kimono Oversize' : 'Льняное кимоно Oversize', desc: isUz ? 'Yozgi yengil mato' : 'Дышащая ткань на лето', price: '320 000 сум' },
        { name: isUz ? 'Chopon Velvet Premium' : 'Бархатный чапан Premium', desc: isUz ? 'Qo\'lda tikilgan naqshlar' : 'Ручная вышивка', price: '690 000 сум' }
      ],
      ctaText: isUz ? 'Menejer bilan bog\'lanish' : 'Связаться со стилистом'
    },
    medical: {
      defaultSlug: 'nurdental',
      defaultTitle: isUz ? 'Nur Dental Stomatologiya' : 'Стоматология Nur Dental',
      defaultTagline: isUz
        ? 'Og\'riqsiz tish davolash, implantatsiya va 3D diagnostika'
        : 'Лечение зубов без боли, имплантация и 3D-диагностика',
      badge: isUz ? 'LITSENZIYA № 6041' : 'ЛИЦЕНЗИЯ № 6041',
      heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
      rating: '4.95 (540)',
      eta: '09:00 - 20:00 (Du-Shan)',
      quickTaglines: isUz
        ? ['Birinchi konsultatsiya va 3D bepul', '10 yillik rasmiy kafolat', 'Germaniya uskunalarida og\'riqsiz']
        : ['Первичный осмотр и 3D-снимок бесплатно', 'Официальная гарантия 10 лет', 'Немецкое оборудование без боли'],
      items: [
        { name: isUz ? 'Birinchi ko\'rik va 3D rengten' : 'Первичный осмотр и 3D-снимок', desc: isUz ? 'To\'liq davolash rejasi' : 'Подробный план лечения', price: 'Bepul' },
        { name: isUz ? 'AirFlow tish tozalash' : 'Чистка AirFlow', desc: isUz ? 'Tish emalini mustahkamlash' : 'Удаление налета и полировка', price: '320 000 сум' },
        { name: isUz ? 'Keramik Vinir E-Max' : 'Керамический винир E-Max', desc: isUz ? 'Mukammal tabassum, 10 yil kafolat' : 'Немецкая керамика', price: '1 400 000 сум' }
      ],
      ctaText: isUz ? 'Shifokor qabuliga yozilish' : 'Записаться на прием'
    },
    barber: {
      defaultSlug: 'oldtown',
      defaultTitle: isUz ? 'Old Town Barbershop' : 'Барбершоп Old Town',
      defaultTagline: isUz
        ? 'Erkaklar soch turmagi, soqol parvarishi va issiq sochiq'
        : 'Стрижки, моделирование бороды опасной бритвой и уход',
      badge: isUz ? 'BUGUN 3 TA JOY BOR' : 'СВОБОДНЫЕ ОКНА СЕГОДНЯ',
      heroImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
      rating: '4.9 (980)',
      eta: '10:00 - 22:00',
      quickTaglines: isUz
        ? ['Birinchi tashrifga 15% chegirma', 'Top-barberlar va bepul qahva', 'Premium soqol parvarishi']
        : ['Скидка 15% на первый визит', 'Топ-мастера и свежий кофе', 'Моделирование бороды с горячим полотенцем'],
      items: [
        { name: isUz ? 'Klassik erkaklar soch turmagi' : 'Классическая стрижка', desc: isUz ? 'Bosh yuvish va steyling bilan' : 'Мытье головы и укладка', price: '110 000 сум' },
        { name: isUz ? 'Soqol tekislash va issiq sochiq' : 'Моделирование бороды', desc: isUz ? 'O\'tkir ustara va moy' : 'Опасная бритва и масло', price: '70 000 сум' },
        { name: isUz ? 'Kompleks Soch + Soqol' : 'Комплекс Стрижка + Борода', desc: isUz ? 'To\'liq parvarish' : 'Полный уход за 60 минут', price: '160 000 сум' }
      ],
      ctaText: isUz ? 'Vaqtni Telegramda band qilish' : 'Записаться в Telegram'
    }
  };

  const currentCfg = categoryConfigs[category];

  // Switch category and update defaults smoothly
  const handleSelectCategory = (newCat: CategoryType) => {
    setCategory(newCat);
    const cfg = categoryConfigs[newCat];
    setSlug(cfg.defaultSlug);
    setBusinessTitle(cfg.defaultTitle);
    setTagline(cfg.defaultTagline);
  };

  const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, '') || 'biznes';

  const themeColorsMap = {
    emerald: {
      name: isUz ? 'Zumrad (Emerald)' : 'Изумруд (Emerald)',
      badgeClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      btnClass: 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400',
      accentText: 'text-emerald-400',
      ringColor: '#10b981'
    },
    amber: {
      name: isUz ? 'Qahrabo (Amber)' : 'Янтарь (Amber)',
      badgeClass: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      btnClass: 'bg-amber-400 text-zinc-950 hover:bg-amber-300',
      accentText: 'text-amber-400',
      ringColor: '#f59e0b'
    },
    sky: {
      name: isUz ? 'Moviy (Sky)' : 'Небесный (Sky)',
      badgeClass: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
      btnClass: 'bg-sky-400 text-zinc-950 hover:bg-sky-300',
      accentText: 'text-sky-400',
      ringColor: '#38bdf8'
    },
    purple: {
      name: isUz ? 'Binafsha (Purple)' : 'Пурпур (Purple)',
      badgeClass: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      btnClass: 'bg-purple-400 text-zinc-950 hover:bg-purple-300',
      accentText: 'text-purple-400',
      ringColor: '#c084fc'
    }
  };

  const activeTheme = themeColorsMap[themeColor];

  const handleLaunch = () => {
    const note = `Soha: ${category}, Nomi: ${businessTitle}, Rang: ${themeColor}, Tel: ${phone}`;
    onOpenReserve(cleanSlug, note);
  };

  return (
    <section id="builder" className="py-24 md:py-32 border-t border-white/[0.06] bg-[#050507] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
            01 / Visual Studio
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white mb-4">
            {isUz ? (
              <>
                Saytingizni{' '}
                <AnimatedUnderline color="#10b981">
                  1 daqiqada
                </AnimatedUnderline>{' '}
                yig'ib ko'ring.
              </>
            ) : (
              <>
                Соберите свой сайт{' '}
                <AnimatedUnderline color="#10b981">
                  за 1 минуту
                </AnimatedUnderline>
                .
              </>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
            {isUz
              ? 'Interfeys buvilar uchun ham tushunarli. Shunchaki o\'z sohangizni tanlang va saytingiz qanday ochilishini jonli ko\'ring.'
              : 'Интерфейс понятен даже бабушке. Выберите свою сферу, введите имя и сразу оцените готовый сайт.'}
          </p>
        </div>

        {/* Studio Workspace: Controls on Left, Realistic Large Screenshot on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Grandma-friendly Steps */}
          <div className="lg:col-span-5 space-y-5">
            {/* Step 1: Choose Industry (4 big buttons) */}
            <div className="p-1.5 rounded-[1.8rem] bezel-shell">
              <div className="rounded-[calc(1.8rem-0.375rem)] bezel-core p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    {isUz ? '1-Qadam: Faoliyat sohangiz' : 'Шаг 1: Сфера вашего бизнеса'}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">1 bosishda</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleSelectCategory('food')}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-20 ${
                      category === 'food'
                        ? 'border-emerald-500/80 bg-emerald-500/10 text-white ring-1 ring-emerald-500/40'
                        : 'border-white/5 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/15'
                    }`}
                  >
                    <ForkKnife weight="bold" className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">{isUz ? 'Kafe va taomlar' : 'Еда и кафе'}</div>
                      <div className="text-[10px] text-zinc-400">Osh, burger, yetkazish</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectCategory('fashion')}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-20 ${
                      category === 'fashion'
                        ? 'border-purple-500/80 bg-purple-500/10 text-white ring-1 ring-purple-500/40'
                        : 'border-white/5 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/15'
                    }`}
                  >
                    <TShirt weight="bold" className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">{isUz ? 'Kiyim va shourum' : 'Одежда и бутик'}</div>
                      <div className="text-[10px] text-zinc-400">Brend, liboslar, matolar</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectCategory('medical')}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-20 ${
                      category === 'medical'
                        ? 'border-sky-500/80 bg-sky-500/10 text-white ring-1 ring-sky-500/40'
                        : 'border-white/5 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/15'
                    }`}
                  >
                    <FirstAid weight="bold" className="w-5 h-5 text-sky-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">{isUz ? 'Klinika va tish' : 'Клиника и врачи'}</div>
                      <div className="text-[10px] text-zinc-400">Stomatologiya, tahlillar</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectCategory('barber')}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-20 ${
                      category === 'barber'
                        ? 'border-amber-500/80 bg-amber-500/10 text-white ring-1 ring-amber-500/40'
                        : 'border-white/5 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/15'
                    }`}
                  >
                    <Scissors weight="bold" className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">{isUz ? 'Barbershop / Salon' : 'Барбершоп и салон'}</div>
                      <div className="text-[10px] text-zinc-400">Soch, soqol, parvarish</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2: Subdomain & Brand Title */}
            <div className="p-1.5 rounded-[1.8rem] bezel-shell">
              <div className="rounded-[calc(1.8rem-0.375rem)] bezel-core p-5 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  {isUz ? '2-Qadam: Sayt nomi va manzili' : 'Шаг 2: Название и адрес сайта'}
                </span>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                    {isUz ? 'Kompaniya / Brend nomi:' : 'Название заведения или бренда:'}
                  </label>
                  <input
                    type="text"
                    value={businessTitle}
                    onChange={(e) => setBusinessTitle(e.target.value)}
                    placeholder="Milliy Taomlar"
                    className="w-full rounded-xl bg-black/60 border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 mb-1">
                    {isUz ? 'Qisqa manzil (poddomen):' : 'Короткий адрес (поддомен):'}
                  </label>
                  <div className="flex items-center rounded-xl bg-black/60 border border-white/10 px-3.5 py-2.5 font-mono text-xs">
                    <input
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="milliyosh"
                      className="w-full bg-transparent text-white focus:outline-none"
                    />
                    <span className="text-zinc-500 select-none">.saytimiz.uz</span>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 pt-1">
                  <Check weight="bold" className="w-3.5 h-3.5" />
                  <span>https://{cleanSlug}.saytimiz.uz {isUz ? 'tayyor va bepul' : 'свободен для брони'}</span>
                </div>
              </div>
            </div>

            {/* Step 3: Color Palette (1-click color theme) */}
            <div className="p-1.5 rounded-[1.8rem] bezel-shell">
              <div className="rounded-[calc(1.8rem-0.375rem)] bezel-core p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5" />
                    <span>{isUz ? '3-Qadam: Brend rangi' : 'Шаг 3: Цветовая гамма сайта'}</span>
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">{activeTheme.name}</span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setThemeColor('emerald')}
                    className={`py-2 px-1 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                      themeColor === 'emerald'
                        ? 'border-emerald-500 bg-emerald-500/10'
                        : 'border-white/5 bg-white/[0.02] hover:border-white/20'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-500 inline-block" />
                    <span className="text-[10px] font-mono text-zinc-300">Zumrad</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setThemeColor('amber')}
                    className={`py-2 px-1 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                      themeColor === 'amber'
                        ? 'border-amber-500 bg-amber-500/10'
                        : 'border-white/5 bg-white/[0.02] hover:border-white/20'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-amber-400 inline-block" />
                    <span className="text-[10px] font-mono text-zinc-300">Qahrabo</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setThemeColor('sky')}
                    className={`py-2 px-1 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                      themeColor === 'sky'
                        ? 'border-sky-500 bg-sky-500/10'
                        : 'border-white/5 bg-white/[0.02] hover:border-white/20'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-sky-400 inline-block" />
                    <span className="text-[10px] font-mono text-zinc-300">Moviy</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setThemeColor('purple')}
                    className={`py-2 px-1 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                      themeColor === 'purple'
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-white/5 bg-white/[0.02] hover:border-white/20'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-purple-400 inline-block" />
                    <span className="text-[10px] font-mono text-zinc-300">Binafsha</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Step 4: Slogan and 1-Click Suggestions */}
            <div className="p-1.5 rounded-[1.8rem] bezel-shell">
              <div className="rounded-[calc(1.8rem-0.375rem)] bezel-core p-5 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  {isUz ? '4-Qadam: Bosh shior yoki taklif' : 'Шаг 4: Главный лозунг или оффер'}
                </span>

                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder={currentCfg.defaultTagline}
                  className="w-full rounded-xl bg-black/60 border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white/30"
                />

                {/* 1-Click Grandma pills */}
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 mb-1.5">
                    {isUz ? 'Tayyor tavsiyalar (bosing):' : 'Быстрые подсказки (нажмите):'}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentCfg.quickTaglines.map((t, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setTagline(t)}
                        className="text-[10px] font-mono px-2 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        + {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Contact for Orders */}
            <div className="p-1.5 rounded-[1.8rem] bezel-shell">
              <div className="rounded-[calc(1.8rem-0.375rem)] bezel-core p-5 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  {isUz ? '5-Qadam: Buyurtmalar qayerga tushsin?' : 'Шаг 5: Куда отправлять заявки?'}
                </span>
                <div className="flex items-center rounded-xl bg-black/60 border border-white/10 px-3.5 py-2.5 font-mono text-xs">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+998 90 123 45 67 yoki @telegram"
                    className="w-full bg-transparent text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Launch CTA Button */}
            <button
              onClick={handleLaunch}
              className="w-full pl-6 pr-2.5 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center justify-between group active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              <span>{isUz ? 'Ushbu tayyor saytni ishga tushirish' : 'Запустить этот готовый сайт'}</span>
              <span className="w-7 h-7 rounded-full bg-zinc-950 text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                <ArrowUpRight weight="bold" className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Right Column: High-Resolution Realistic Browser Screenshot */}
          <div className="lg:col-span-7">
            {/* Browser Window Frame */}
            <div className="p-2 sm:p-2.5 rounded-[2.5rem] bezel-shell">
              <div className="rounded-[calc(2.5rem-0.625rem)] bezel-core overflow-hidden shadow-2xl border border-white/10">
                {/* Safari / Browser Header Bar */}
                <div className="px-5 py-3.5 bg-[#0e0e12] border-b border-white/[0.08] flex items-center justify-between">
                  {/* Traffic lights */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>

                  {/* Browser Address Bar */}
                  <div className="flex-1 max-w-sm mx-4 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center gap-1.5 font-mono text-xs text-zinc-300 truncate">
                    <span className="text-zinc-500">https://</span>
                    <span className="text-white font-medium">{cleanSlug}</span>
                    <span className="text-zinc-500">.saytimiz.uz</span>
                  </div>

                  {/* Device toggle */}
                  <div className="flex items-center gap-1 text-zinc-400">
                    <button
                      onClick={() => setPreviewDevice('desktop')}
                      className={`p-1.5 rounded-md ${previewDevice === 'desktop' ? 'bg-white/10 text-white' : 'hover:text-white'}`}
                      title="Desktop view"
                    >
                      <Laptop className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setPreviewDevice('mobile')}
                      className={`p-1.5 rounded-md ${previewDevice === 'mobile' ? 'bg-white/10 text-white' : 'hover:text-white'}`}
                      title="Mobile view"
                    >
                      <DeviceMobile className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Actual Website Canvas - High Fidelity Full Screenshot Look */}
                <div className={`bg-[#09090c] p-6 sm:p-8 space-y-6 transition-all duration-300 ${
                  previewDevice === 'mobile' ? 'max-w-md mx-auto my-4 rounded-3xl border border-white/10 shadow-2xl' : ''
                }`}>
                  {/* Mock Site Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeTheme.ringColor }} />
                      <span className="font-semibold text-white text-sm tracking-tight">{businessTitle}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline-block">
                        {currentCfg.eta}
                      </span>
                      <a
                        href={`tel:${phone}`}
                        onClick={(e) => e.preventDefault()}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300 flex items-center gap-1"
                      >
                        <PhoneCall className="w-3 h-3" />
                        <span>{phone}</span>
                      </a>
                    </div>
                  </div>

                  {/* Hero Banner Section */}
                  <div className="relative rounded-2xl overflow-hidden h-52 sm:h-64 border border-white/10 shadow-2xl">
                    <img
                      src={currentCfg.heroImage}
                      alt={businessTitle}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider border ${activeTheme.badgeClass}`}>
                            {currentCfg.badge}
                          </span>
                          <span className="flex items-center gap-1 font-mono text-[11px] text-amber-400">
                            <Star weight="fill" className="w-3 h-3" />
                            <span>{currentCfg.rating}</span>
                          </span>
                        </div>

                        <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-2 leading-tight">
                          {businessTitle}
                        </h3>
                        <p className="text-xs text-zinc-300 max-w-md mt-1 leading-relaxed font-normal">
                          {tagline}
                        </p>
                      </div>

                      <div className="shrink-0 flex items-center gap-2">
                        <button
                          onClick={handleLaunch}
                          className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors shadow-lg ${activeTheme.btnClass}`}
                        >
                          <PaperPlaneTilt weight="fill" className="w-3.5 h-3.5" />
                          <span>{currentCfg.ctaText}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Showcase Catalog Grid */}
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                      <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                        {isUz ? 'Mashhur tanlovlar va xizmatlar' : 'Популярные позиции каталога'}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500">
                        {cleanSlug}.saytimiz.uz
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {currentCfg.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-colors flex flex-col justify-between min-h-[115px]"
                        >
                          <div>
                            <div className="text-xs font-semibold text-white truncate">{item.name}</div>
                            <div className="text-[10px] text-zinc-400 line-clamp-2 mt-0.5">{item.desc}</div>
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] font-mono text-xs">
                            <span className={`font-semibold ${activeTheme.accentText}`}>{item.price}</span>
                            <span className="text-[10px] text-zinc-400 hover:text-white cursor-pointer">+ Savat</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trust Footer Ribbon */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300 shrink-0">
                        <QrCode className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">
                          {isUz ? 'Tayyor bosma QR-kod va Telegram-bot' : 'Векторный QR-код и Telegram-бот'}
                        </div>
                        <div className="text-[10px] text-zinc-400 mt-0.5 font-mono">
                          Vercel CDN · SSL sertifikat · 0.18s yuklanish
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleLaunch}
                      className="px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors w-full sm:w-auto text-center"
                    >
                      {isUz ? 'Manzilni band qilish' : 'Занять этот сайт'}
                    </button>
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
