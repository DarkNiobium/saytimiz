import { BusinessTemplate, PricingPlan, FaqItem } from '../types';

export const templatesData: Record<'ru' | 'uz', BusinessTemplate[]> = {
  ru: [
    {
      id: 'fastfood',
      subdomain: 'fastfood',
      name: 'OqTepa Express',
      category: 'Фастфуд и бургеры',
      tagline: 'Сочные бургеры, лаваши и быстрая доставка по Ташкенту за 35 минут',
      badge: 'Кафе и доставка',
      rating: '4.9',
      speed: '0.19s',
      accentColor: '#f97316',
      previewImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
      items: [
        { title: 'Клаб Бургер Double', price: '48 000 сум', desc: 'Две говяжьи котлеты, чеддер, фирменный соус' },
        { title: 'Лаваш с говядиной Cheese', price: '38 000 сум', desc: 'Свежие томаты, сыр моцарелла, авторский маринад' },
        { title: 'Комбо Сет На двоих', price: '89 000 сум', desc: '2 бургера, картофель фри, 2 напитка 0.5л' }
      ]
    },
    {
      id: 'zamondosh',
      subdomain: 'zamondosh',
      name: 'Zamondosh Studio',
      category: 'Одежда и стиль',
      tagline: 'Локальный бренд минималистичной одежды и аксессуаров из натурального хлопка',
      badge: 'Шоурум и бренд',
      rating: '5.0',
      speed: '0.17s',
      accentColor: '#10b981',
      previewImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80',
      items: [
        { title: 'Oversize Hoodie Tashkent', price: '340 000 сум', desc: 'Плотный футер 380г, шелкография, унисекс' },
        { title: 'Cotton T-Shirt Pure', price: '160 000 сум', desc: '100% узбекский премиум хлопок' },
        { title: 'Canvas Tote Bag Nomad', price: '120 000 сум', desc: 'Усиленные швы, внутренний карман для телефона' }
      ]
    },
    {
      id: 'medclinic',
      subdomain: 'medlife',
      name: 'MedLife Dental',
      category: 'Стоматология и здоровье',
      tagline: 'Современная стоматология в центре города. Без боли и с гарантией',
      badge: 'Клиника и услуги',
      rating: '4.9',
      speed: '0.21s',
      accentColor: '#0ea5e9',
      previewImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80',
      items: [
        { title: 'Профессиональная гигиена AirFlow', price: '350 000 сум', desc: 'Удаление налета, полировка и покрытие фтором' },
        { title: 'Консультация и 3D-снимок', price: 'Бесплатно', desc: 'Полный план лечения с фиксированной сметой' },
        { title: 'Керамическая коронка E-Max', price: '1 200 000 сум', desc: 'Естественная эстетика, гарантия 5 лет' }
      ]
    },
    {
      id: 'barber',
      subdomain: 'barber',
      name: 'Brothers Club',
      category: 'Барбершоп',
      tagline: 'Мужские стрижки, уход за бородой и атмосфера без лишнего шума',
      badge: 'Салон красоты',
      rating: '4.8',
      speed: '0.18s',
      accentColor: '#eab308',
      previewImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80',
      items: [
        { title: 'Мужская стрижка + Укладка', price: '120 000 сум', desc: 'Мытье головы, подбор формы, стайлинг' },
        { title: 'Моделирование бороды', price: '70 000 сум', desc: 'Опасная бритва, горячее полотенце, масло' },
        { title: 'Комплекс Папа + Сын', price: '190 000 сум', desc: 'Две полноценные стрижки с напитками' }
      ]
    }
  ],
  uz: [
    {
      id: 'fastfood',
      subdomain: 'fastfood',
      name: 'OqTepa Express',
      category: 'Fastfud va taomlar',
      tagline: 'Mazali burgerlar, lavashlar va butun Toshkent bo\'ylab 35 daqiqada yetkazish',
      badge: 'Kafe va yetkazish',
      rating: '4.9',
      speed: '0.19s',
      accentColor: '#f97316',
      previewImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
      items: [
        { title: 'Double Clab Burger', price: '48 000 so\'m', desc: 'Ikkita mol go\'shti kotleti, cheddar pishlog\'i' },
        { title: 'Mol go\'shtli pishloqli lavash', price: '38 000 so\'m', desc: 'Yangi pomidorlar, motsarella, maxsus sous' },
        { title: 'Ikkilik Kombo to\'plam', price: '89 000 so\'m', desc: '2 burger, kartoshka fri va 2 ta 0.5l ichimlik' }
      ]
    },
    {
      id: 'zamondosh',
      subdomain: 'zamondosh',
      name: 'Zamondosh Studio',
      category: 'Kiyim va uslub',
      tagline: 'Tabiiy paxtadan tayyorlangan minimalistik kiyim va aksessuarlar brendi',
      badge: 'Shourum va brend',
      rating: '5.0',
      speed: '0.17s',
      accentColor: '#10b981',
      previewImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80',
      items: [
        { title: 'Oversize Xudi Tashkent', price: '340 000 so\'m', desc: 'Qalin 380g paxta, ipak bosma, uniseks' },
        { title: 'Pure Cotton futbolka', price: '160 000 so\'m', desc: '100% o\'zbek oliy navli paxtasi' },
        { title: 'Nomad shopper sumkasi', price: '120 000 so\'m', desc: 'Mustahkam choklar, telefon uchun cho\'ntak' }
      ]
    },
    {
      id: 'medclinic',
      subdomain: 'medlife',
      name: 'MedLife Dental',
      category: 'Stomatologiya',
      tagline: 'Shahar markazidagi zamonaviy stomatologiya. Og\'riqsiz va kafolatli',
      badge: 'Klinika va xizmatlar',
      rating: '4.9',
      speed: '0.21s',
      accentColor: '#0ea5e9',
      previewImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80',
      items: [
        { title: 'AirFlow professional tozalash', price: '350 000 so\'m', desc: 'Tosh va karashlarni tozalash, ftor bilan qoplash' },
        { title: 'Ko\'rik va 3D-rentgen', price: 'Bepul', desc: 'To\'liq davolash rejasi va aniq hisob-kitob' },
        { title: 'E-Max keramik qoplama', price: '1 200 000 so\'m', desc: 'Tabiiy ko\'rinish, 5 yillik kafolat' }
      ]
    },
    {
      id: 'barber',
      subdomain: 'barber',
      name: 'Brothers Club',
      category: 'Barbershop',
      tagline: 'Erkaklar soch turmagi, soqol parvarishi va qulay muhit',
      badge: 'Go\'zallik saloni',
      rating: '4.8',
      speed: '0.18s',
      accentColor: '#eab308',
      previewImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80',
      items: [
        { title: 'Erkaklar soch turmagi', price: '120 000 so\'m', desc: 'Sochni yuvish, shakl tanlash, steyling' },
        { title: 'Soqol tekislash', price: '70 000 so\'m', desc: 'Ustara bilan tekislash, issiq sochiq, maxsus moy' },
        { title: 'Ota va o\'g\'il to\'plami', price: '190 000 so\'m', desc: 'Ikkita to\'liq xizmat va ichimliklar' }
      ]
    }
  ]
};

export const pricingData: Record<'ru' | 'uz', PricingPlan[]> = {
  ru: [
    {
      id: 'start',
      title: 'Старт',
      price: '199 000',
      priceNote: 'сум / разово',
      description: 'Идеально для быстрой визитки в Instagram, меню кафе или прайс-листа услуг.',
      features: [
        'Поддомен вида brend.saytimiz.uz',
        'Мобильный сайт с загрузкой 0.2 секунды',
        'Кнопка прямой связи в Telegram и звонка',
        'Готовый QR-код в векторе для печати',
        'Бесплатный SSL-сертификат навсегда',
        'Хостинг на глобальной сети Vercel Edge'
      ],
      ctaText: 'Выбрать Старт'
    },
    {
      id: 'business',
      popular: true,
      title: 'Бизнес',
      price: '490 000',
      priceNote: 'сум / разово',
      description: 'Для заведений, магазинов и сервисов, которым нужны прямые продажи без комиссий.',
      features: [
        'Все возможности тарифа Старт',
        'Каталог до 25 товаров или услуг с фото',
        'Корзина и прием заказов прямо в Telegram-бот',
        'Интеграция с локацией на Yandex и Google Maps',
        'Кнопка оплаты через Click и Payme',
        'Базовая статистика просмотров и кликов',
        'Приоритетный запуск за 12 часов'
      ],
      ctaText: 'Выбрать Бизнес'
    },
    {
      id: 'pro',
      title: 'Индивидуальный',
      price: '1 200 000',
      priceNote: 'сум / проект',
      description: 'Для компаний, которым нужен персональный стиль, собственный домен и сопровождение.',
      features: [
        'Все возможности тарифа Бизнес',
        'Подключение вашего личного домена (.uz или любого)',
        'Индивидуальный дизайн под ваш брендбук',
        'Мультиязычность: узбекский и русский языки',
        'SEO-оптимизация под Google и Яндекс',
        'Персональный менеджер и техподдержка 24/7'
      ],
      ctaText: 'Обсудить проект'
    }
  ],
  uz: [
    {
      id: 'start',
      title: 'Start',
      price: '199 000',
      priceNote: 'so\'m / bir martalik',
      description: 'Instagram bio, kafe menyusi yoki xizmatlar narxnomasi uchun qulay va tez yechim.',
      features: [
        'brend.saytimiz.uz ko\'rinishidagi poddomen',
        '0.2 soniyada ochiladigan mobil sayt',
        'Telegram va to\'g\'ridan-to\'g\'ri qo\'ng\'iroq tugmasi',
        'Chop etish uchun tayyor vektorli QR-kod',
        'Doimiy bepul SSL xavfsizlik sertifikati',
        'Vercel Edge global tarmog\'ida tekin xosting'
      ],
      ctaText: 'Start tarifini tanlash'
    },
    {
      id: 'business',
      popular: true,
      title: 'Biznes',
      price: '490 000',
      priceNote: 'so\'m / bir martalik',
      description: 'Agregatorsiz to\'g\'ridan-to\'g\'ri mijozlar oqimi va sotuv kerak bo\'lgan korxonalar uchun.',
      features: [
        'Start tarifining barcha imkoniyatlari',
        '25 tagacha mahsulot yoki xizmatlar katalogi',
        'Savatcha va to\'g\'ridan-to\'g\'ri Telegram-botga buyurtmalar',
        'Yandex va Google xaritalari bilan integratsiya',
        'Click va Payme orqali to\'lov tugmalari',
        'Tashrif buyuruvchilar va buyurtmalar statistikasi',
        '12 soat ichida birinchi navbatda ishga tushirish'
      ],
      ctaText: 'Biznes tarifini tanlash'
    },
    {
      id: 'pro',
      title: 'Maxsus',
      price: '1 200 000',
      priceNote: 'so\'m / loyiha',
      description: 'O\'z shaxsiy domeniga ega bo\'lishni va individual dizaynni xohlovchi kompaniyalar uchun.',
      features: [
        'Biznes tarifining barcha imkoniyatlari',
        'Shaxsiy domen ulash imkoniyati (.uz yoki boshqa)',
        'Brendingizga mos individual dizayn',
        'Ikki tilda ishlash: o\'zbek va rus tillari',
        'Google va Yandex uchun SEO sozlamalari',
        'Shaxsiy menejer va doimiy 24/7 texnik yordam'
      ],
      ctaText: 'Loyihani muhokama qilish'
    }
  ]
};

export const faqData: Record<'ru' | 'uz', FaqItem[]> = {
  ru: [
    {
      question: 'Зачем мне поддомен brand.saytimiz.uz вместо отдельного сайта?',
      answer: 'Отдельный домен стоит от 30 000 сум в год плюс от 100 000 сум в месяц за качественный хостинг. С saytimiz.uz вы получаете готовый адрес, моментальный хостинг Vercel Edge, SSL и защиту без ежемесячных платежей.'
    },
    {
      question: 'Как клиенты будут делать заказы?',
      answer: 'Клиент нажимает кнопку на вашем сайте, и сформированный заказ или заявка сразу отправляется в ваш личный Telegram или бот вашей компании. Никаких сложных кабинетов.'
    },
    {
      question: 'Могу ли я потом подключить свой собственный домен .uz?',
      answer: 'Да. Если в будущем вы захотите перейти на персональный домен, мы перенесем сайт в один клик без потери контента и настроек.'
    },
    {
      question: 'Сколько времени занимает запуск сайта?',
      answer: 'Базовая визитка запускается за 24 часа после того, как вы отправите контакты, логотип и список товаров/услуг.'
    },
    {
      question: 'Нужно ли мне уметь программировать?',
      answer: 'Нет. Мы полностью настраиваем сайт под ключ, подключаем ваш поддомен и выдаем готовую ссылку с QR-кодом для рекламы.'
    }
  ],
  uz: [
    {
      question: 'Alohida sayt ochishdan ko\'ra brand.saytimiz.uz poddomeni nima uchun qulay?',
      answer: 'Alohida domen va unga xosting har oy yoki har yili pul talab qiladi. saytimiz.uz bilan siz tayyor manzil, Vercel Edge tarmog\'ida xavfsiz va tezkor xosting hamda bepul SSL sertifikatiga ega bo\'lasiz.'
    },
    {
      question: 'Mijozlar buyurtmani qanday yuboradi?',
      answer: 'Mijoz saytingizdagi tugmani bosadi va buyurtma to\'g\'ridan-to\'g\'ri sizning shaxsiy Telegramingizga yoki Telegram-botingizga tushadi.'
    },
    {
      question: 'Keyinchalik o\'zimning shaxsiy .uz domenimni ulasam bo\'ladimi?',
      answer: 'Albatta. Xohlagan vaqtingizda saytni o\'zingizning alohida domeningizga o\'tkazib beramiz.'
    },
    {
      question: 'Saytni ishga tushirish qancha vaqt oladi?',
      answer: 'Barcha ma\'lumotlar (rasmlar, narxlar va aloqa ma\'lumotlari) berilgach, 24 soat ichida saytingiz to\'liq tayyor bo\'ladi.'
    },
    {
      question: 'Menda dasturlash bo\'yicha bilim bo\'lishi shartmi?',
      answer: 'Umuman yo\'q. Biz hamma texnik ishlarni o\'zimiz bajaramiz va sizga tayyor havola hamda chop etish uchun QR-kodni taqdim etamiz.'
    }
  ]
};
