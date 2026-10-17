import { MapLanguage, MapPlan } from '../types';

export const mapPlans: Record<MapLanguage, MapPlan[]> = {
  uz: [
    {
      id: 'single',
      title: 'Bitta Xarita',
      tagline: 'Faqat bitta aniq platformaga joylashtirish kerak bo\'lgan bizneslar uchun.',
      priceText: 'Eng hamyonbop yechim',
      platforms: ['Google Maps YOKI Yandex Maps'],
      features: [
        'Tanlangan 1 ta platformada profil yaratish',
        'Aniq geolokatsiya va kirish eshigi koordinatasi',
        'Ish vaqti, telefon raqamlari va asosiy fotosuratlar',
        'Rasmiy moderatsiyadan muammosiz o\'tkazish',
        'Kompaniya egasi huquqini to\'liq topshirish'
      ],
      ctaText: 'Buyurtma berish'
    },
    {
      id: 'trio',
      popular: true,
      title: 'Standart Trio (3 tasi 1 da)',
      tagline: 'Eng ommabop paket. O\'zbekistondagi barcha asosiy xaritalarni to\'liq qamrab oladi.',
      priceText: 'Maksimal tavsiya',
      platforms: ['Google Maps + Yandex Maps + 2GIS'],
      features: [
        'Google Maps (Google Business Profile) rasmiy verifikatsiya',
        'Yandex Maps va Yandex Navigator da aniq yo\'nalish',
        '2GIS tizimida qavat, kirish eshigi va tovarlar ro\'yxati',
        'SEO kalit so\'zlar (oshxona, dorixona, servis) bo\'yicha optimizatsiya',
        'Stollar va peshtaxta uchun vektorli QR stiker sovg\'a',
        'Egalik huquqini sizning emailingiz va telefoningizga o\'tkazish',
        'Moderatsiya vaqti: 24-48 soat ichida'
      ],
      ctaText: 'Standart Trio tanlash'
    },
    {
      id: 'vip',
      title: 'VIP All-Inclusive',
      tagline: 'Maksimal mijozlar oqimi va xaritalarda raqobatchilardan mutlaq ustunlik.',
      priceText: 'To\'liq premium boshqaruv',
      platforms: ['Google + Yandex + 2GIS + Apple Maps + Waze'],
      features: [
        'Barcha 5 ta xarita va navigatsiya tizimlariga joylash',
        'Apple Maps (iPhone va Siri orqali qidiruv) integratsiyasi',
        'Fasad, interyer va menyu fotosuratlarini professional tahrirlash',
        'Birinchi 5 yulduzli sharhlarni to\'plash bo\'yicha maslahat',
        'Salbiy yoki soxta sharhlarni shikoyat qilib tozalash',
        '3 oy davomida bepul ma\'lumotlarni yangilab turish',
        'Shaxsiy menejer va ustuvor navbat'
      ],
      ctaText: 'VIP paketga buyurtma'
    }
  ],
  ru: [
    {
      id: 'single',
      title: 'Одна карта',
      tagline: 'Для тех, кому требуется размещение только на одной конкретной платформе.',
      priceText: 'Доступный старт',
      platforms: ['Google Maps ИЛИ Яндекс Карты'],
      features: [
        'Создание профиля на выбранной 1 платформе',
        'Точная геолокация и координаты входа',
        'Время работы, телефоны и базовые фотографии',
        'Гарантированное прохождение модерации',
        'Полная передача прав владельца организации'
      ],
      ctaText: 'Выбрать одну карту'
    },
    {
      id: 'trio',
      popular: true,
      title: 'Стандарт Трио (3 в 1)',
      tagline: 'Самый востребованный пакет. Охватывает все основные навигаторы в Узбекистане.',
      priceText: 'Выбор большинства',
      platforms: ['Google Maps + Яндекс Карты + 2GIS'],
      features: [
        'Google Maps (Google Business Profile) с официальной верификацией',
        'Яндекс Карты и Навигатор с удобным подъездом для такси',
        '2GIS с этажом, входом и подробным прайс-листом',
        'SEO-оптимизация под целевые поисковые запросы города',
        'Векторный макет QR-кода на столы и кассу в подарок',
        'Привязка всех кабинетов на ваш личный номер и почту',
        'Срок модерации: 24-48 часов'
      ],
      ctaText: 'Выбрать Стандарт Трио'
    },
    {
      id: 'vip',
      title: 'VIP All-Inclusive',
      tagline: 'Максимальный поток гостей и полное доминирование над конкурентами на картах.',
      priceText: 'Полное сопровождение',
      platforms: ['Google + Яндекс + 2GIS + Apple Maps + Waze'],
      features: [
        'Размещение сразу во всех 5 навигационных сервисах',
        'Интеграция в Apple Maps (поиск через iPhone и голосовой Siri)',
        'Профессиональная обработка фотографий фасада, интерьера и меню',
        'Инструкция по набору первых 5-звездочных отзывов',
        'Защита профилей и оспаривание заказного спама',
        '3 месяца бесплатной актуализации контактов и акций',
        'Персональный менеджер и запуск вне очереди'
      ],
      ctaText: 'Заказать VIP пакет'
    }
  ]
};

export const mapFaqs = {
  uz: [
    {
      q: 'O\'zim bepul qo\'shsam bo\'lmaydimi?',
      a: 'O\'zingiz qo\'shishga uringaningizda xaritalar ko\'pincha 2-3 hafta davomida tasdiqlamaydi yoki manzilni noto\'g\'ri joylashtirib bloklaydi. MAPUZ tekshirilgan hamkor usullari orqali 24-48 soatda rasmiy verifikatsiyadan o\'tkazib, egalik huquqini to\'liq sizga topshiradi.'
    },
    {
      q: 'Xaritada paydo bo\'lish qancha vaqt oladi?',
      a: 'Yandex Maps va 2GIS odatda 24 soat ichida, Google Maps esa 24 soatdan 48 soatgacha bo\'lgan muddatda to\'liq qidiruvda ko\'rinishni boshlaydi.'
    },
    {
      q: 'Qanday ma\'lumotlar talab qilinadi?',
      a: 'Tashkilot nomi, aniq manzili yoki geolokatsiyasi, ish vaqti, telefon raqamlari hamda binoning tashqi fasadi va ichki ko\'rinishidagi 3-5 ta fotosurat yetarli.'
    },
    {
      q: 'Keyinchalik ma\'lumotlarni o\'zgartirish mumkinmi?',
      a: 'Ha, albatta. Barcha platformalardagi boshqaruv huquqi sizning shaxsiy emailingiz va telefoningizga biriktiriladi. Telefon raqamingiz, ish vaqtingiz yoki menyuni istalgan vaqtda o\'zingiz yangilashingiz mumkin.'
    },
    {
      q: 'Viloyatlardagi bizneslarni ham joylaysizlarmi?',
      a: 'Ha, butun O\'zbekiston bo\'ylab ishlaymiz: Toshkent shahri va viloyati, Samarqand, Buxoro, Farg\'ona, Andijon, Namangan, Xorazm, Qashqadaryo va boshqa barcha hududlar.'
    }
  ],
  ru: [
    {
      q: 'Можно ли добавить точку самостоятельно бесплатно?',
      a: 'При самостоятельной подаче заявки часто висят на проверке неделями, отклоняются или блокируются роботами из-за ошибок в координатах. MAPUZ профессионально настраивает карточки, проходит модерацию за 24-48 часов и передает вам подтвержденные права владельца.'
    },
    {
      q: 'Сколько времени занимает появление на картах?',
      a: 'Яндекс Карты и 2GIS обычно публикуют карточку за 24 часа. В Google Maps точка становится активной в течение 24-48 часов.'
    },
    {
      q: 'Какие данные нужны для старта работы?',
      a: 'Название организации, точная геолокация или адрес, график работы, контактные телефоны и 3-5 фото вывески и интерьера.'
    },
    {
      q: 'Смогу ли я сам менять данные после сдачи работы?',
      a: 'Да, обязательно. Все права передаются на ваш личный аккаунт. Вы в любой момент сможете поменять номер телефона, добавить новые фото или скорректировать часы работы.'
    },
    {
      q: 'Работаете ли вы с регионами Узбекистана?',
      a: 'Да, мы подключаем объекты по всему Узбекистану: Ташкент, Самарканд, Бухара, Фергана, Андижан, Наманган, Навои, Хорезм и все остальные области.'
    }
  ]
};
