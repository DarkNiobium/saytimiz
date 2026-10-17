import { MapLanguage, MapPlan } from '../types';

export const mapPlans: Record<MapLanguage, MapPlan[]> = {
  uz: [
    {
      id: 'single',
      title: 'Bitta Xarita',
      tagline: 'Faqat Google Maps yoki faqat Yandex Maps.',
      priceText: 'Boshlang\'ich',
      platforms: ['Google Maps YOKI Yandex Maps'],
      features: [
        'Aniq geolokatsiya va kirish eshigi',
        'Ish vaqti, telefonlar va fotosuratlar',
        'To\'liq egalik huquqi sizga topshiriladi'
      ],
      ctaText: 'Tanlash'
    },
    {
      id: 'trio',
      popular: true,
      title: 'Standart Trio (3 tasi 1 da)',
      tagline: 'Eng ommabop tanlov. Barcha asosiy xaritalarni qamrab oladi.',
      priceText: 'Tavsiya etiladi',
      platforms: ['Google Maps + Yandex Maps + 2GIS'],
      features: [
        'Google Maps rasmiy verifikatsiyasi',
        'Yandex Go taksilari to\'g\'ri eshikka kelishi',
        '2GIS da qavat, podyezd va prays-list',
        'Qidiruvda 1-o\'rinlarga chiqarish (SEO)',
        'Stollar uchun vektorli QR-stiker sovg\'a',
        '24-48 soatda tayyor bo\'ladi'
      ],
      ctaText: 'Standart Trio tanlash'
    },
    {
      id: 'vip',
      title: 'VIP All-Inclusive',
      tagline: 'Maksimal qamrov va to\'liq qo\'llab-quvvatlash.',
      priceText: 'Premium',
      platforms: ['Google + Yandex + 2GIS + Apple Maps'],
      features: [
        'Barcha xaritalar va Apple Maps (Siri)',
        'Fasad va interyer rasmlarini qayta ishlash',
        '5 yulduzli sharhlar to\'plash strategiyasi',
        '3 oy bepul ma\'lumotlarni yangilab turish'
      ],
      ctaText: 'VIP paket tanlash'
    }
  ],
  ru: [
    {
      id: 'single',
      title: 'Одна карта',
      tagline: 'Только Google Maps или только Яндекс Карты.',
      priceText: 'Базовый',
      platforms: ['Google Maps ИЛИ Яндекс Карты'],
      features: [
        'Точная геолокация и вход в здание',
        'График работы, контакты и фотографии',
        'Полная передача прав владельца'
      ],
      ctaText: 'Выбрать'
    },
    {
      id: 'trio',
      popular: true,
      title: 'Стандарт Трио (3 в 1)',
      tagline: 'Хит продаж. Охватывает все главные навигаторы Узбекистана.',
      priceText: 'Рекомендуем',
      platforms: ['Google Maps + Яндекс Карты + 2GIS'],
      features: [
        'Официальная верификация Google Business',
        'Точный заезд для такси Яндекс Go',
        '2GIS с этажом, входом и прайс-листом',
        'Вывод в топ локального поиска',
        'Печатный макет QR-кода на кассу в подарок',
        'Готовность за 24-48 часов'
      ],
      ctaText: 'Выбрать Стандарт Трио'
    },
    {
      id: 'vip',
      title: 'VIP All-Inclusive',
      tagline: 'Максимальный охват и приоритетное сопровождение.',
      priceText: 'Премиум',
      platforms: ['Google + Яндекс + 2GIS + Apple Maps'],
      features: [
        'Все навигаторы плюс Apple Maps и Siri',
        'Профессиональная обработка фотографий',
        'Инструкция по набору 5-звездочных отзывов',
        '3 месяца бесплатной актуализации данных'
      ],
      ctaText: 'Выбрать VIP пакет'
    }
  ]
};

export const mapFaqs = {
  uz: [
    {
      q: 'Xaritalarda chiqish qancha vaqt oladi?',
      a: 'Yandex Maps va 2GIS odatda 24 soatda, Google Maps esa 24-48 soat ichida to\'liq qidiruvda ko\'rinishni boshlaydi.'
    },
    {
      q: 'Qanday ma\'lumotlar kerak bo\'ladi?',
      a: 'Tashkilot nomi, manzili, telefon raqamlari, ish vaqti hamda bino fasadi va ichki ko\'rinishidagi 3-4 ta fotosurat yetarli.'
    },
    {
      q: 'Egalik huquqi kimda qoladi?',
      a: 'Barcha shaxsiy kabinetlar va boshqaruv huquqi to\'liq sizning shaxsiy telefon raqamingiz va emailingizga biriktiriladi.'
    }
  ],
  ru: [
    {
      q: 'Сколько времени занимает запуск?',
      a: 'Яндекс Карты и 2GIS обычно публикуют карточку за 24 часа. В Google Maps точка становится активной в течение 24-48 часов.'
    },
    {
      q: 'Какие данные требуются для начала?',
      a: 'Название заведения, адрес или ориентир, телефоны, график работы и 3-4 фотографии вывески и интерьера.'
    },
    {
      q: 'Кому принадлежат доступы после сдачи?',
      a: 'Все права владельца привязываются напрямую к вашему личному номеру телефона и почте.'
    }
  ]
};
