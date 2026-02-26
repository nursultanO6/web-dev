import { Component, signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from './models/event.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
  
  events: Event[] = [
    {
      id: 1,
      name: "Goat: Мечтай по-крупному (2026)",
      description: "Уилл, подросток-козлёнок, получает шанс всей жизни - присоединиться к профессиональной лиге и играть в «зверобол». Это командный, интенсивный, контактный вид спорта, в котором доминируют самые быстрые и свирепые животные в мире. Новые товарищи по команде не в восторге от того, что в их состав попал любитель, но Уилл полон решимости изменить игру и доказать раз и навсегда, что «маленькие тоже могут играть»!",
      price: 25000,
      rating: 4.8,
      image: "https://ticketon.kz/files/media/62956u57548_afisha-tiketon--2026-01-23t140016-739.jpg",
      images: [
        "https://picsum.photos/seed/goat1/400/250",
        "https://picsum.photos/seed/goat2/400/250",
        "https://picsum.photos/seed/goat3/400/250"
      ],
      link: "https://ticketon.kz/event/goat-mechtay-po-krupnomu-2026?item_list_name=%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5&item_list_id=popular&index=1",
      date: "15 Июня 2024",
      category: "Кино",
      location: "Алматы, Казахстан"
    },
    {
      id: 2,
      name: "IL Canto «Grande Amore»",
      description: "В честь самых красивых девушек и женщин нашего города в день 8 марта квартет «Il Canto» представляет особый праздничный концерт - «Grande Amore»!",
      price: 8000,
      rating: 4.5,
      image: "https://ticketon.kz/media/upload/63499u57997_il-canto-grande-amore.jpg",
      images: [
        "https://picsum.photos/seed/comedy1/400/250",
        "https://picsum.photos/seed/comedy2/400/250",
        "https://picsum.photos/seed/comedy3/400/250"
      ],
      link: "https://ticketon.kz/event/il-canto-grande-amore?item_list_name=%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5&item_list_id=popular&index=2",
      date: "20 Июня 2024",
      category: "Концерт",
      location: "Алматы, Казахстан"
    },
    {
      id: 3,
      name: "Мерекелік шоу концерт",
      description: "11 марта Дворец Республики приглашает жителей и гостей города на большой праздничный концерт. Вечер обещает быть насыщенным: на сцене выступят самые яркие звезды казахстанской эстрады, которые исполнят свои лучшие хиты и подарят зрителям отличное настроение.",
      price: 12000,
      rating: 4.9,
      image: "https://ticketon.kz/media/upload/62499u45664_1930nauryz-fest.jpeg",
      images: [
        "https://picsum.photos/seed/orchestra1/400/250",
        "https://picsum.photos/seed/orchestra2/400/250",
        "https://picsum.photos/seed/orchestra3/400/250"
      ],
      link: "https://ticketon.kz/event/nauryz-fest?item_list_name=%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5&item_list_id=popular&index=4",
      date: "22 Июня 2024",
      category: "Концерт",
      location: "Алматы, Казахстан"
    },
    {
      id: 4,
      name: "Показательные выступления звёзд Олимпийских игр Милан–Кортина 2026",
      description: "Казахстанский фигурист, который поднял флаг страны на высшую ступень пьедестала, выйдет на родной лёд, чтобы разделить этот исторический успех со своими болельщиками.",
      price: 5000,
      rating: 4.3,
      image: "https://ticketon.kz/media/upload/63347u57997_milan-kortina-2026_0.jpg",
      images: [
        "https://picsum.photos/seed/basketball1/400/250",
        "https://picsum.photos/seed/basketball2/400/250",
        "https://picsum.photos/seed/basketball3/400/250"
      ],
      link: "https://ticketon.kz/event/vzezdy-milan-kortina-2026?item_list_name=%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5&item_list_id=popular&index=3",
      date: "25 Июня 2024",
      category: "Спорт",
      location: "Алматы, Казахстан"
    },
    {
      id: 5,
      name: "Эйнштейн и Маргарита в Алматы",
      description: "Алена Хмельницкая и Алексей Серебряков впервые вместе на одной сцене. Театральное агентство «ENTRACTE» представляет спектакль о большой любви и атомной бомбе в постановке режиссера Александра Марина.",
      price: 15000,
      rating: 4.7,
      image: "https://ticketon.kz/media/upload/63125u45664_eynshteyn-i-margarita-v-almaty2026.png",
      images: [
        "https://picsum.photos/seed/dance1/400/250",
        "https://picsum.photos/seed/dance2/400/250",
        "https://picsum.photos/seed/dance3/400/250"
      ],
      link: "https://ticketon.kz/event/eynshteyn-i-margarita-v-almaty?item_list_name=%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5&item_list_id=popular&index=6",
      date: "28 Июня 2024",
      category: "Театр",
      location: "Алматы, Казахстан"
    },
    {
      id: 6,
      name: "Елена Ваенга в Алматы",
      description: "21 февраля 2026 года на главной сцене Дворца Республики состоится большой сольный концерт одной из самых ярких, харизматичных и искренних артисток современности Елены Ваенги!",
      price: 18000,
      rating: 4.6,
      image: "https://ticketon.kz/media/upload/57378u45664_57378u45664_elena-vaenga-v-almaty-1.jpg",
      images: [
        "https://picsum.photos/seed/jazz1/400/250",
        "https://picsum.photos/seed/jazz2/400/250",
        "https://picsum.photos/seed/jazz3/400/250"
      ],
      link: "https://ticketon.kz/event/elena-vaenga-v-almaty?item_list_name=%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5&item_list_id=popular&index=5",
      date: "30 Июня 2024",
      category: "Концерт",
      location: "Алматы, Казахстан"
    },
    {
      id: 7,
      name: "Мир Болливуда - BN Team Orchestra в Алматы",
      description: "BN Team Orchestra представляет самую яркую программу - Мир Болливуда: музыка из лучших индийских кинокартин!",
      price: 6000,
      rating: 4.4,
      image: "https://ticketon.kz/media/upload/47179u57997_mir-bollivuda-almaty.jpg",
      images: [
        "https://picsum.photos/seed/kids1/400/250",
        "https://picsum.photos/seed/kids2/400/250",
        "https://picsum.photos/seed/kids3/400/250"
      ],
      link: "https://ticketon.kz/event/mir-bollivuda-almaty?item_list_name=%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5&item_list_id=popular&index=7",
      date: "5 Июля 2024",
      category: "Детские",
      location: "Алматы, Казахстан"
    },
    {
      id: 8,
      name: "Rock Festival: Almaty Sound Wave",
      description: "Массививный рок-фестиваль с участием местных и международных рок-групп. Два дня высокоэнергичных выступлений и незабываемых моментов.",
      price: 22000,
      rating: 4.8,
      image: "https://picsum.photos/seed/rock/400/250",
      images: [
        "https://picsum.photos/seed/rock1/400/250",
        "https://picsum.photos/seed/rock2/400/250",
        "https://picsum.photos/seed/rock3/400/250"
      ],
      link: "https://ticketon.kz/events/festival/almaty-sound-wave",
      date: "10-11 Июля 2024",
      category: "Фестиваль",
      location: "Алматы, Казахстан"
    },
    {
      id: 9,
      name: "Opera: Madame Butterfly",
      description: "Вечная трагедия любви и жертвенности Пуччини в исполнении Государственного академического театра оперы и балета с первоклассными солистами.",
      price: 20000,
      rating: 4.9,
      image: "https://picsum.photos/seed/opera/400/250",
      images: [
        "https://picsum.photos/seed/opera1/400/250",
        "https://picsum.photos/seed/opera2/400/250",
        "https://picsum.photos/seed/opera3/400/250"
      ],
      link: "https://ticketon.kz/events/opera/madame-butterfly",
      date: "15 Июля 2024",
      category: "Опера",
      location: "Алматы, Казахстан"
    },
    {
      id: 10,
      name: "Tech Conference: Future Forward 2024",
      description: "Конференция передовых технологий с докладчиками от ведущих технологических компаний. Исследуйте ИИ, блокчейн и будущее инноваций.",
      price: 35000,
      rating: 4.5,
      image: "https://picsum.photos/seed/tech/400/250",
      images: [
        "https://picsum.photos/seed/tech1/400/250",
        "https://picsum.photos/seed/tech2/400/250",
        "https://picsum.photos/seed/tech3/400/250"
      ],
      link: "https://ticketon.kz/events/conference/future-forward-2024",
      date: "20 Июля 2024",
      category: "Конференция",
      location: "Алматы, Казахстан"
    },
    {
      id: 11,
      name: "Food Festival: Taste of Central Asia",
      description: "Кулинарное путешествие по вкусам Центральной Азии. Попробуйте традиционные блюда из Казахстана, Узбекистана, Кыргызстана и других стран.",
      price: 7000,
      rating: 4.6,
      image: "https://picsum.photos/seed/food/400/250",
      images: [
        "https://picsum.photos/seed/food1/400/250",
        "https://picsum.photos/seed/food2/400/250",
        "https://picsum.photos/seed/food3/400/250"
      ],
      link: "https://ticketon.kz/events/food/taste-of-central-asia",
      date: "12-14 Июля 2024",
      category: "Фестиваль",
      location: "Алматы, Казахстан"
    },
    {
      id: 12,
      name: "Theater: Shakespeare's Hamlet",
      description: "Мощная постановка величайшей трагедии Шекспира с участием актеров и потрясающим дизайном сцены в классической истории мести и безумия.",
      price: 14000,
      rating: 4.7,
      image: "https://picsum.photos/seed/hamlet/400/250",
      images: [
        "https://picsum.photos/seed/hamlet1/400/250",
        "https://picsum.photos/seed/hamlet2/400/250",
        "https://picsum.photos/seed/hamlet3/400/250"
      ],
      link: "https://ticketon.kz/events/theater/shakespeare-hamlet",
      date: "18 Июля 2024",
      category: "Театр",
      location: "Алматы, Казахстан"
    }
  ];

  // keep a mapping from event id -> currently displayed image for that card
  currentImageMap: { [id: number]: string } = {};


  constructor() {
    // initialize image map so each card starts with its main image
    this.events.forEach(e => {
      this.currentImageMap[e.id] = e.image;
    });
  }

  getStars(rating: number): string[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('filled');
    }
    
    if (hasHalfStar) {
      stars.push('half');
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push('empty');
    }
    
    return stars;
  }

  shareOnWhatsApp(event: Event): void {
    const message = `Посмотри это мероприятие: ${event.name} - ${event.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(event: Event): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(event.link)}&text=${encodeURIComponent(event.name)}`;
    window.open(url, '_blank');
  }
}
